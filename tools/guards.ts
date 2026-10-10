import type { GuardCheck } from "../src/types.ts";

export type FieldWidths = ReadonlyMap<string, number>;
export type GuardExpression =
  | { kind: "check"; check: GuardCheck }
  | { kind: "and" | "or"; left: GuardExpression; right: GuardExpression }
  | { kind: "not"; expression: GuardExpression }
  | { kind: "constant"; value: boolean };

type Token = { value: string; offset: number };
type Part = { field: string; msb: number; lsb: number };

export class UnsupportedGuardError extends Error {
  constructor(source: string, offset: number, message: string) {
    super(`${message} at column ${offset + 1} in guard ${JSON.stringify(source)}`);
    this.name = "UnsupportedGuardError";
  }
}

function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  const pattern = /\s+|&&|\|\||==|!=|::|[!()[\]{},:]|'[01xX\s]+'|0x[0-9a-fA-F]+|\d+|[A-Za-z_][A-Za-z0-9_]*/gy;
  let offset = 0;
  while (offset < source.length) {
    pattern.lastIndex = offset;
    const match = pattern.exec(source);
    if (!match) throw new UnsupportedGuardError(source, offset, "unsupported token");
    if (!/^\s+$/.test(match[0])) tokens.push({ value: match[0], offset });
    offset = pattern.lastIndex;
  }
  tokens.push({ value: "", offset: source.length });
  return tokens;
}

const feature = (name: string): GuardExpression => ({
  kind: "check", check: { kind: "feature", feature: name, implemented: true },
});
const combine = (kind: "and" | "or", left: GuardExpression, right: GuardExpression): GuardExpression => ({ kind, left, right });

// Definitions are from aarch64/functions/sve/HaveSVE2FP8* in shared_pseudocode.xml.
const FEATURE_HELPERS = new Map([
  ["HaveSVE2FP8DOT2", "FP8DOT2"],
  ["HaveSVE2FP8DOT4", "FP8DOT4"],
  ["HaveSVE2FP8FMA", "FP8FMA"],
]);

class Parser {
  private index = 0;
  private readonly tokens: Token[];
  private readonly source: string;
  private readonly fields: FieldWidths;
  constructor(source: string, fields: FieldWidths) {
    this.source = source;
    this.fields = fields;
    this.tokens = tokenize(source);
  }
  private peek(): string { return this.tokens[this.index]?.value ?? ""; }
  private take(value?: string): string {
    const token = this.tokens[this.index];
    if (!token?.value) this.fail("unexpected end of expression");
    if (value !== undefined && token.value !== value) this.fail(`expected ${JSON.stringify(value)}`);
    this.index += 1;
    return token.value;
  }
  private fail(message: string): never {
    throw new UnsupportedGuardError(this.source, this.tokens[this.index]?.offset ?? this.source.length, message);
  }
  parse(): GuardExpression {
    const expression = this.or();
    if (this.peek() !== "") this.fail("unexpected trailing input");
    return expression;
  }
  private or(): GuardExpression {
    let result = this.and();
    while (this.peek() === "||") { this.take(); result = combine("or", result, this.and()); }
    return result;
  }
  private and(): GuardExpression {
    let result = this.unary();
    while (this.peek() === "&&") { this.take(); result = combine("and", result, this.unary()); }
    return result;
  }
  private unary(): GuardExpression {
    if (this.peek() === "!") { this.take(); return { kind: "not", expression: this.unary() }; }
    if (this.peek() === "(") {
      this.take(); const result = this.or(); this.take(")"); return result;
    }
    if (this.peek() === "TRUE" || this.peek() === "FALSE") {
      return { kind: "constant", value: this.take() === "TRUE" };
    }
    if (this.peek() === "IsFeatureImplemented") {
      this.take(); this.take("("); const name = this.take();
      if (!/^FEAT_[A-Za-z0-9_]+$/.test(name)) this.fail("invalid feature name");
      this.take(")"); return feature(name);
    }
    const helper = FEATURE_HELPERS.get(this.peek());
    if (helper) {
      this.take(); this.take("("); this.take(")");
      return combine("or", combine("and", feature("FEAT_SVE2"), feature(`FEAT_${helper}`)), feature(`FEAT_SSVE_${helper}`));
    }
    const parts = this.operand();
    const operator = this.take();
    if (operator === "IN") {
      this.take("{");
      if (this.peek() === "}") this.fail("empty membership set");
      let result = this.literalComparison(parts, this.take());
      while (this.peek() === ",") { this.take(); result = combine("or", result, this.literalComparison(parts, this.take())); }
      this.take("}"); return result;
    }
    if (operator !== "==" && operator !== "!=") this.fail("expected ==, !=, or IN");
    let result: GuardExpression;
    if (/^[A-Za-z_]/.test(this.peek())) {
      const other = this.operand();
      const left = parts[0]; const right = other[0];
      if (parts.length !== 1 || other.length !== 1 || left.lsb !== 0 || right.lsb !== 0 ||
          left.msb + 1 !== this.fields.get(left.field) || right.msb + 1 !== this.fields.get(right.field)) {
        this.fail("field comparisons require whole fields");
      }
      if (left.msb !== right.msb) this.fail("field comparison widths differ");
      result = { kind: "check", check: { kind: "eq_field", field: left.field, otherField: right.field } };
    } else {
      result = this.literalComparison(parts, this.take());
    }
    return operator === "!=" ? { kind: "not", expression: result } : result;
  }
  private operand(): Part[] {
    const parts = [this.part()];
    while (this.peek() === "::") { this.take(); parts.push(this.part()); }
    if (parts.reduce((width, part) => width + part.msb - part.lsb + 1, 0) > 32) this.fail("operand is wider than 32 bits");
    return parts;
  }
  private part(): Part {
    const field = this.take();
    const width = this.fields.get(field);
    if (width === undefined) this.fail(`unknown guard field ${JSON.stringify(field)}`);
    if (!Number.isInteger(width) || width < 1 || width > 32) this.fail(`invalid width for field ${field}`);
    let msb = width - 1; let lsb = 0;
    if (this.peek() === "[") {
      this.take(); const high = this.take();
      if (!/^\d+$/.test(high)) this.fail("invalid slice index");
      msb = Number(high); lsb = msb;
      if (this.peek() === ":") {
        this.take(); const low = this.take();
        if (!/^\d+$/.test(low)) this.fail("invalid slice index");
        lsb = Number(low);
      }
      this.take("]");
    }
    if (lsb < 0 || msb < lsb || msb >= width) this.fail(`slice exceeds field ${field} width ${width}`);
    return { field, msb, lsb };
  }
  private literalComparison(parts: Part[], token: string): GuardExpression {
    const width = parts.reduce((total, part) => total + part.msb - part.lsb + 1, 0);
    let literal: string;
    if (token.startsWith("'")) {
      literal = token.slice(1, -1).replace(/\s/g, "").toLowerCase();
      if (literal.length !== width) this.fail(`literal width ${literal.length} differs from operand width ${width}`);
    } else if (/^(0x[0-9a-fA-F]+|\d+)$/.test(token)) {
      const value = Number(token);
      if (!Number.isSafeInteger(value) || value < 0 || value >= 2 ** width) this.fail(`literal does not fit ${width} bits`);
      literal = value.toString(2).padStart(width, "0");
    } else this.fail("expected bit, decimal, or hexadecimal literal");

    if (parts.length > 1 && !literal.includes("x")) {
      return { kind: "check", check: { kind: "eq_concat", parts, value: Number.parseInt(literal, 2) } };
    }
    let result: GuardExpression = { kind: "constant", value: true };
    let offset = 0;
    for (const part of parts) {
      const size = part.msb - part.lsb + 1;
      const partLiteral = literal.slice(offset, offset + size);
      offset += size;
      const mask = (Number.parseInt(partLiteral.replace(/[01]/g, "1").replaceAll("x", "0"), 2) * 2 ** part.lsb) >>> 0;
      if (mask === 0) continue;
      const value = Number.parseInt(partLiteral.replaceAll("x", "0"), 2);
      const check: GuardExpression = { kind: "check", check: { kind: "eq", field: part.field, mask, lsb: part.lsb, value } };
      result = result.kind === "constant" ? check : combine("and", result, check);
    }
    return result;
  }
}

export function parseGuardExpression(source: string, fields: FieldWidths): GuardExpression {
  return new Parser(source, fields).parse();
}

export function invertGuardCheck(check: GuardCheck): GuardCheck {
  switch (check.kind) {
    case "eq": return { ...check, kind: "ne" };
    case "ne": return { ...check, kind: "eq" };
    case "eq_field": return { ...check, kind: "ne_field" };
    case "ne_field": return { ...check, kind: "eq_field" };
    case "eq_concat": return { ...check, kind: "ne_concat" };
    case "ne_concat": return { ...check, kind: "eq_concat" };
    case "feature": return { ...check, implemented: !check.implemented };
  }
}

export function guardAlternatives(expression: GuardExpression, negate = false): GuardCheck[][] {
  switch (expression.kind) {
    case "constant": return expression.value !== negate ? [[]] : [];
    case "check": return [[negate ? invertGuardCheck(expression.check) : expression.check]];
    case "not": return guardAlternatives(expression.expression, !negate);
    case "and":
    case "or": {
      const left = guardAlternatives(expression.left, negate);
      const right = guardAlternatives(expression.right, negate);
      const isAnd = (expression.kind === "and") !== negate;
      if (isAnd && left.length * right.length > 4096 || !isAnd && left.length + right.length > 4096) {
        throw new Error("guard expression exceeds 4096 alternatives");
      }
      return isAnd ? left.flatMap((a) => right.map((b) => [...a, ...b])) : [...left, ...right];
    }
  }
}

export function parseGuardAlternatives(source: string, fields: FieldWidths, negate = false): GuardCheck[][] {
  return guardAlternatives(parseGuardExpression(source, fields), negate);
}
