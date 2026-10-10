import type { Guard, GuardCheck } from "../src/types.ts";
import { parseGuardAlternatives, type FieldWidths, UnsupportedGuardError } from "./guards.ts";

export type DecodeGuardDiagnostic = { expression: string; reason: string };
export type DecodeGuardOptions = {
  /** Every override is an exact expression and a reviewable explanation. */
  unsupportedExpressions?: ReadonlyMap<string, string>;
  expressionRewrites?: ReadonlyMap<string, string>;
  onDiagnostic?: (diagnostic: DecodeGuardDiagnostic) => void;
};

type Token = { value: string; start: number; end: number };
type DecodeExit = { conditions: string[]; outcome: "undefined" | "nop" };

// These predicates need machine state which a static disassembler does not have.
// Replacements assume the implementation admits the instruction, while retaining
// any independent field and feature tests in the same Boolean condition.
const IMPLEMENTATION_PREDICATES: Array<{ pattern: RegExp; replacement: string; reason: string }> = [
  { pattern: /\bHaveEL\(\s*EL2\s*\)/g, replacement: "TRUE", reason: "EL2 implementation is not configured" },
  { pattern: /\bHalted\(\s*\)/g, replacement: "TRUE", reason: "debug halt state is not configured" },
  { pattern: /\bHaltingAllowed\(\s*\)/g, replacement: "TRUE", reason: "debug halting permission is not configured" },
  { pattern: /\bEDSCR\(\s*\)\s*\.\s*HDE\s*==\s*'0'/g, replacement: "FALSE", reason: "EDSCR.HDE is not configured" },
  { pattern: /\bMaxImplementedSVL\(\s*\)\s*<\s*(256|512)\b/g, replacement: "FALSE", reason: "maximum streaming vector length is not configured" },
  { pattern: /\bMaxImplementedAnyVL\(\s*\)\s*<\s*256\b/g, replacement: "FALSE", reason: "maximum vector length is not configured" },
];

function lex(source: string): Token[] {
  const tokens: Token[] = [];
  const pattern = /\/\/[^\n]*|\s+|'[^']*'|"[^"]*"|[A-Za-z_][A-Za-z0-9_]*|=>|&&|\|\||==|!=|::|./g;
  for (const match of source.matchAll(pattern)) {
    if (/^(?:\s|\/\/)/.test(match[0])) continue;
    tokens.push({ value: match[0], start: match.index, end: match.index + match[0].length });
  }
  return tokens;
}

/** Extract exits while preserving the complete enclosing if/elsif/case path. */
class ExitParser {
  private index = 0;
  private readonly tokens: Token[];
  readonly exits: DecodeExit[] = [];
  private readonly aliases = new Map<string, string>();
  private readonly source: string;
  constructor(source: string) { this.source = source; this.tokens = lex(source); }
  private peek(): string { return this.tokens[this.index]?.value ?? ""; }
  private take(value?: string): string {
    const actual = this.peek();
    if (!actual || value !== undefined && actual !== value) throw new Error(`expected ${value ?? "token"}, found ${actual || "end of source"} in decode pseudocode`);
    this.index += 1; return actual;
  }
  private until(terminator: string): string {
    const start = this.tokens[this.index]?.start ?? this.source.length;
    let depth = 0;
    while (this.peek()) {
      const token = this.peek();
      if (depth === 0 && token === terminator) {
        const end = this.tokens[this.index].start; this.take();
        return this.source.slice(start, end).replace(/\/\/[^\n]*/g, "").trim();
      }
      if (["(", "[", "{"].includes(token)) depth += 1;
      if ([")", "]", "}"].includes(token)) depth -= 1;
      this.take();
    }
    throw new Error(`missing ${terminator} in decode pseudocode`);
  }
  private expand(expression: string): string {
    return expression.replace(/'[^']*'|"[^"]*"|\b[A-Za-z_][A-Za-z0-9_]*\b/g, (name) => this.aliases.get(name) ?? name);
  }
  parse(): DecodeExit[] { this.block([], new Set()); return this.exits; }
  private block(conditions: string[], stops: Set<string>): void {
    const outerAliases = new Map(this.aliases);
    while (this.peek() && !stops.has(this.peek())) {
      if (this.peek() === "if") { this.ifStatement(conditions); continue; }
      if (this.peek() === "case") { this.caseStatement(conditions); continue; }
      if (this.peek() === "EndOfDecode") {
        this.take(); this.take("("); const outcome = this.take(); this.take(")"); this.take(";");
        if (outcome !== "Decode_UNDEF" && outcome !== "Decode_NOP") throw new Error(`unsupported decode exit ${outcome}`);
        this.exits.push({ conditions, outcome: outcome === "Decode_NOP" ? "nop" : "undefined" });
        continue;
      }
      if (this.peek() === "end" || this.peek() === "else" || this.peek() === "elsif" || this.peek() === "when" || this.peek() === "otherwise") {
        throw new Error(`unexpected ${this.peek()} in decode pseudocode`);
      }
      // Declarations, assignments, assertions, and function calls do not emit exits.
      const statement = this.until(";");
      const declaration = /^let\s+([A-Za-z_][A-Za-z0-9_]*)\s*:[^=]+?=\s*(.+)$/.exec(statement);
      if (declaration) {
        const rhs = this.expand(declaration[2].trim().replace(/^UInt\((.+)\)$/, "$1"));
        if (/^[A-Za-z_][A-Za-z0-9_]*(?:\[\d+(?::\d+)?\])?(?:\s*::\s*[A-Za-z_][A-Za-z0-9_]*(?:\[\d+(?::\d+)?\])?)*$/.test(rhs)) {
          this.aliases.set(declaration[1], rhs);
        }
      }
    }
    this.aliases.clear();
    for (const [name, value] of outerAliases) this.aliases.set(name, value);
  }
  private ifStatement(outer: string[]): void {
    this.take("if");
    const previous: string[] = [];
    while (true) {
      const condition = this.expand(this.until("then"));
      this.block([...outer, ...previous.map((item) => `!(${item})`), condition], new Set(["elsif", "else", "end"]));
      previous.push(condition);
      if (this.peek() !== "elsif") break;
      this.take();
    }
    if (this.peek() === "else") {
      this.take(); this.block([...outer, ...previous.map((item) => `!(${item})`)], new Set(["end"]));
    }
    this.take("end"); this.take(";");
  }
  private caseStatement(outer: string[]): void {
    this.take("case"); const selector = this.expand(this.until("of"));
    const previous: string[] = [];
    while (this.peek() === "when" || this.peek() === "otherwise") {
      const branch = this.take();
      let condition: string[];
      if (branch === "when") {
        const choices = this.until("=>");
        const expression = `${selector} IN {${choices}}`;
        condition = [expression]; previous.push(expression);
      } else {
        this.take("=>"); condition = previous.map((item) => `!(${item})`);
      }
      this.block([...outer, ...condition], new Set(["when", "otherwise", "end"]));
    }
    this.take("end"); this.take(";");
  }
}

export function parseDecodeGuards(source: string, fields: FieldWidths, options: DecodeGuardOptions = {}): Guard[] {
  const exits = new ExitParser(source).parse();
  const expectedExits = lex(source).filter((token) => token.value === "EndOfDecode").length;
  if (exits.length !== expectedExits) throw new Error(`extracted ${exits.length} of ${expectedExits} decode exits`);
  const guards: Guard[] = [];
  for (const exit of exits) {
    const constrained = exit.conditions.find((condition) => /^c IN \{Constraint_(UNDEF|NOP)\}$/.test(condition));
    if (constrained && source.includes("ConstrainUnpredictable(")) {
      options.onDiagnostic?.({ expression: exit.conditions.join(" && "), reason: "ConstrainUnpredictable selects an implementation-defined outcome; static decoding preserves the recognized instruction" });
      continue;
    }
    let alternatives: GuardCheck[][] = [[]];
    let unsupported = false;
    for (const original of exit.conditions) {
      let expression = options.expressionRewrites?.get(original) ?? original;
      for (const predicate of IMPLEMENTATION_PREDICATES) {
        expression = expression.replace(predicate.pattern, (matched) => {
          options.onDiagnostic?.({ expression: matched, reason: `${predicate.reason}; assumes the instruction is admitted by the implementation` });
          return predicate.replacement;
        });
      }
      try {
        const next = parseGuardAlternatives(expression, fields);
        if (alternatives.length * next.length > 4096) throw new Error("decode guard exceeds 4096 alternatives");
        alternatives = alternatives.flatMap((existing) => next.map((checks) => [...existing, ...checks]));
      } catch (error) {
        const reason = options.unsupportedExpressions?.get(original);
        if (!(error instanceof UnsupportedGuardError) || !reason) throw error;
        options.onDiagnostic?.({ expression: original, reason });
        unsupported = true;
        break;
      }
    }
    if (!unsupported) guards.push(...alternatives.map((all) => ({ all, outcome: exit.outcome })));
  }
  return guards;
}
