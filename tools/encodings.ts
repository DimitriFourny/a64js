import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { FeatureGuard, GeneratedEncoding, GeneratedField, Guard, GuardCheck } from "../src/types.ts";
import { children, firstChild, parseXml } from "./xml.ts";

type BoxBits = Array<0 | 1 | "x">;

type FieldShape = {
  name: string;
  lsb: number;
  width: number;
};

type BaseDiagram = {
  bits: BoxBits;
  fields: FieldShape[];
  constraints: Array<{
    field: string;
    expression: string;
  }>;
};

export type ParsedEncoding = GeneratedEncoding & {
  bitCount: number;
};

type ParseEncodingFileOptions = {
  ignoreUnsupportedGuards?: boolean;
};

type FieldWidthMap = Map<string, number>;

const SME2_FLOAT_MAXMIN_CONSTRAINT_FILES = new Set([
  "fmax_mz_zzv.xml",
  "fmax_mz_zzw.xml",
  "fmaxnm_mz_zzv.xml",
  "fmaxnm_mz_zzw.xml",
  "fmin_mz_zzv.xml",
  "fmin_mz_zzw.xml",
  "fminnm_mz_zzv.xml",
  "fminnm_mz_zzw.xml",
]);

function parseBoxBits(box: any): BoxBits {
  const width = Number(box.attrs.width ?? "1");
  const cells = children(box, "c");
  const bits: BoxBits = [];
  for (const cell of cells) {
    const colspan = Number(cell.attrs.colspan ?? "1");
    const text = cell.children
      .map((child: string | any) => (typeof child === "string" ? child.trim() : ""))
      .join("")
      .trim();
    const value: 0 | 1 | "x" = text === "0" ? 0 : text === "1" ? 1 : "x";
    for (let index = 0; index < colspan; index += 1) {
      bits.push(value);
    }
  }
  while (bits.length < width) {
    bits.push("x");
  }
  return bits;
}

function applyBox(bits: BoxBits, hibit: number, width: number, values: BoxBits): void {
  for (let index = 0; index < width; index += 1) {
    const bit = hibit - index;
    const value = values[index] ?? "x";
    if (value !== "x") {
      bits[31 - bit] = value;
    }
  }
}

function parseDiagram(node: any): BaseDiagram {
  const bits: BoxBits = new Array(32).fill("x");
  const fields: FieldShape[] = [];
  const constraints: BaseDiagram["constraints"] = [];

  for (const box of children(node, "box")) {
    const hibit = Number(box.attrs.hibit);
    const width = Number(box.attrs.width ?? "1");
    const name = box.attrs.name;
    const values = parseBoxBits(box);
    applyBox(bits, hibit, width, values);
    if (name) {
      fields.push({ name, lsb: hibit - width + 1, width });
      if (typeof box.attrs.constraint === "string" && box.attrs.constraint.trim().length > 0) {
        constraints.push({ field: name, expression: box.attrs.constraint.trim() });
      }
    }
  }

  return { bits, fields, constraints };
}

function cloneBits(bits: BoxBits): BoxBits {
  return [...bits];
}

function computeMaskValue(bits: BoxBits): { mask: number; value: number; bitCount: number } {
  let mask = 0;
  let value = 0;
  let bitCount = 0;
  for (let bit = 31; bit >= 0; bit -= 1) {
    const position = 31 - bit;
    const cell = bits[position];
    if (cell === "x") {
      continue;
    }
    bitCount += 1;
    mask |= (1 << bit) >>> 0;
    if (cell === 1) {
      value |= (1 << bit) >>> 0;
    }
  }
  return { mask: mask >>> 0, value: value >>> 0, bitCount };
}

function parseGuardTerm(term: string, fieldWidths: FieldWidthMap): GuardCheck {
  const concatMatch = /^([A-Za-z0-9_:\[\]]+)\s*(==|!=)\s*'([01x ]+)'$/.exec(term.trim());
  if (concatMatch && concatMatch[1].includes("::")) {
    const parts = concatMatch[1].split("::").map((part) => {
      const slice = /^([A-Za-z0-9_]+)(?:\[(\d+)(?::(\d+))?\])?$/.exec(part.trim());
      if (!slice) {
        throw new Error(`unsupported guard term: ${term}`);
      }
      const width = fieldWidths.get(slice[1]);
      if (width === undefined) {
        throw new Error(`unknown guard field width: ${slice[1]}`);
      }
      const msb = slice[2] ? Number(slice[2]) : width - 1;
      const lsb = slice[3] ? Number(slice[3]) : slice[2] ? Number(slice[2]) : 0;
      return {
        field: slice[1],
        msb,
        lsb,
      };
    });
    const literal = concatMatch[3].replaceAll(" ", "");
    return {
      kind: concatMatch[2] === "==" ? "eq_concat" : "ne_concat",
      parts,
      value: Number.parseInt(literal.replaceAll("x", "0"), 2),
    };
  }

  const fieldCompareMatch = /^([A-Za-z0-9_]+)\s*(==|!=)\s*([A-Za-z_][A-Za-z0-9_]*)$/.exec(term.trim());
  if (fieldCompareMatch) {
    return {
      kind: fieldCompareMatch[2] === "==" ? "eq_field" : "ne_field",
      field: fieldCompareMatch[1],
      otherField: fieldCompareMatch[3],
    };
  }

  const sliceMatch = /([A-Za-z0-9_]+)\[(\d+)\]\s*(==|!=)\s*'([01])'/.exec(term);
  if (sliceMatch) {
    const field = sliceMatch[1];
    const bit = Number(sliceMatch[2]);
    const operator = sliceMatch[3] === "==" ? "eq" : "ne";
    return { kind: operator, field, mask: 1 << bit, lsb: bit, value: Number(sliceMatch[4]) };
  }

  const match = /([A-Za-z0-9_]+)\s*(==|!=)\s*('?)([01x]+|0x[0-9A-Fa-f]+)\3/.exec(term.trim());
  if (!match) {
    throw new Error(`unsupported guard term: ${term}`);
  }
  const field = match[1];
  const operator = match[2] === "==" ? "eq" : "ne";
  const literal = match[4];
  const value = literal.startsWith("0x") ? Number.parseInt(literal, 16) : Number.parseInt(literal.replaceAll("x", "0"), 2);
  const mask = literal.startsWith("0x")
    ? -1
    : Number.parseInt(
        literal
          .replaceAll("0", "1")
          .replaceAll("1", "1")
          .replaceAll("x", "0"),
        2,
      ) >>> 0;
  return { kind: operator, field, mask, lsb: 0, value };
}

function parseGuardTermAlternatives(term: string, fieldWidths: FieldWidthMap): GuardCheck[][] {
  const trimmed = term.trim();

  if (trimmed === "size::sh == '001'") {
    return [[
      { kind: "eq", field: "size", mask: 0b11, lsb: 0, value: 0 },
      { kind: "eq", field: "sh", mask: 0b1, lsb: 0, value: 1 },
    ]];
  }

  const inMatch = /^([A-Za-z0-9_]+)\s+IN\s+\{(.+)\}$/.exec(trimmed);
  if (inMatch) {
    const field = inMatch[1];
    const values = inMatch[2]
      .split(",")
      .map((value) => value.trim().replace(/^'+|'+$/g, ""))
      .filter((value) => value.length > 0);
    return values.map((value) => [{
      kind: "eq",
      field,
      mask: value.startsWith("0x") ? -1 : ((1 << value.length) - 1) >>> 0,
      lsb: 0,
      value: value.startsWith("0x") ? Number.parseInt(value, 16) : Number.parseInt(value.replaceAll("x", "0"), 2),
    }]);
  }

  return [[parseGuardTerm(trimmed, fieldWidths)]];
}

function invertGuardCheck(check: GuardCheck): GuardCheck {
  switch (check.kind) {
    case "eq":
      return { ...check, kind: "ne" };
    case "ne":
      return { ...check, kind: "eq" };
    case "eq_field":
      return { ...check, kind: "ne_field" };
    case "ne_field":
      return { ...check, kind: "eq_field" };
    case "eq_concat":
      return { ...check, kind: "ne_concat" };
    case "ne_concat":
      return { ...check, kind: "eq_concat" };
  }
}

function parseValidGuardTermAlternatives(term: string, fieldWidths: FieldWidthMap): GuardCheck[][] {
  const trimmed = term.trim();
  const inMatch = /^([A-Za-z0-9_]+)\s+IN\s+\{(.+)\}$/.exec(trimmed);
  if (inMatch) {
    const field = inMatch[1];
    const values = inMatch[2]
      .split(",")
      .map((value) => value.trim().replace(/^'+|'+$/g, ""))
      .filter((value) => value.length > 0);
    return [[
      ...values.map((value) => ({
        kind: "ne" as const,
        field,
        mask: value.startsWith("0x") ? -1 : ((1 << value.length) - 1) >>> 0,
        lsb: 0,
        value: value.startsWith("0x") ? Number.parseInt(value, 16) : Number.parseInt(value.replaceAll("x", "0"), 2),
      })),
    ]];
  }

  return parseGuardTermAlternatives(trimmed, fieldWidths).map((alternative) => alternative.map(invertGuardCheck));
}

function parseDecodeGuards(source: string, fieldWidths: FieldWidthMap, options: ParseEncodingFileOptions = {}): Guard[] {
  const guards: Guard[] = [];
  const decodePreamble = source.split(/\nlet\s+/)[0] ?? source;
  const regex = /if\s+(.+?)\s+then\s+EndOfDecode\(/gs;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(decodePreamble)) !== null) {
    const condition = match[1].trim();
    if (condition.includes("IsFeatureImplemented(")) {
      continue;
    }
    if (condition.includes("MaxImplementedSVL()")) {
      continue;
    }
    const terms = condition
      .split(/\s*&amp;&amp;\s*|\s*&&\s*/)
      .map((term) => term.trim())
      .filter(
        (term) =>
          term.length > 0 &&
          !term.includes("IsFeatureImplemented(") &&
          !term.includes("()") &&
          !term.startsWith("MaxImplementedSVL()") &&
          term !== "!()" &&
          term !== "()" &&
          term !== "(" &&
          term !== ")",
      );
    if (terms.length === 0) {
      continue;
    }
    try {
      let alternatives: GuardCheck[][] = [[]];
      for (const term of terms) {
        const termAlternatives = parseGuardTermAlternatives(term, fieldWidths);
        alternatives = alternatives.flatMap((existing) => termAlternatives.map((next) => [...existing, ...next]));
      }
      guards.push(...alternatives.map((all) => ({ all })));
    } catch (error) {
      if (!options.ignoreUnsupportedGuards) {
        throw error;
      }
    }
  }
  return guards;
}

function collectFeatures(iclass: any, decodeText: string, fileName: string): string[] {
  const features = new Set<string>();
  for (const variant of children(firstChild(iclass, "arch_variants") ?? { children: [] }, "arch_variant")) {
    if (variant.attrs.feature) {
      features.add(variant.attrs.feature);
    }
  }
  return [...features];
}

function parseDecodeFeatureGuards(source: string, fieldWidths: FieldWidthMap): FeatureGuard[] {
  if (source.includes("case CRm::op2 of")) {
    return [];
  }
  const featureGuards: FeatureGuard[] = [];
  const decodePreamble = source.split(/\nlet\s+/)[0] ?? source;
  const regex = /if\s+(.+?)\s+then\s+EndOfDecode\(/gs;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(decodePreamble)) !== null) {
    const condition = match[1].trim();
    if (!condition.includes("IsFeatureImplemented(")) {
      continue;
    }

    const terms = condition
      .split(/\s*&amp;&amp;\s*|\s*&&\s*/)
      .map((term) => term.trim())
      .filter((term) => term.length > 0);
    const requiredFeatures = terms
      .map((term) => /^!IsFeatureImplemented\((FEAT_[A-Za-z0-9_]+)\)$/.exec(term)?.[1] ?? null)
      .filter((feature): feature is string => feature !== null);
    const nonFeatureTerms = terms.filter((term) => !term.includes("IsFeatureImplemented("));
    if (requiredFeatures.length === 0) {
      continue;
    }

    let alternatives: GuardCheck[][] = [[]];
    for (const term of nonFeatureTerms) {
      const termAlternatives = parseGuardTermAlternatives(term, fieldWidths);
      alternatives = alternatives.flatMap((existing) => termAlternatives.map((next) => [...existing, ...next]));
    }

    const feature = requiredFeatures.length === 1 ? requiredFeatures[0] : requiredFeatures.join(" || ");
    featureGuards.push(...alternatives.map((all) => ({ feature, all })));
  }
  return featureGuards;
}

function collectEncodingMnemonic(encoding: any, instructionDocvars: any): string {
  const docvars = firstChild(encoding, "docvars");
  if (docvars) {
    for (const docvar of children(docvars, "docvar")) {
      if (docvar.attrs.key === "mnemonic") {
        return docvar.attrs.value;
      }
    }
  }
  for (const docvar of children(instructionDocvars, "docvar")) {
    if (docvar.attrs.key === "mnemonic") {
      return docvar.attrs.value;
    }
  }
  return encoding.attrs.name;
}

export async function parseEncodingFile(
  xmlRoot: string,
  fileName: string,
  options: ParseEncodingFileOptions = {},
): Promise<ParsedEncoding[]> {
  const fullPath = join(xmlRoot, fileName);
  const source = await readFile(fullPath, "utf8");
  const xml = parseXml(source);
  const instructionId = xml.attrs.id;
  const instructionDocvars = firstChild(xml, "docvars") ?? { children: [] };
  const classes = firstChild(xml, "classes");
  if (!classes) {
    return [];
  }

  const parsed: ParsedEncoding[] = [];

  for (const iclass of children(classes, "iclass")) {
    const regdiagram = firstChild(iclass, "regdiagram");
    if (!regdiagram) {
      continue;
    }
    const base = parseDiagram(regdiagram);
    const fieldWidths = new Map(base.fields.map((field) => [field.name, field.width]));
    const psSection = firstChild(iclass, "ps_section");
    const decodePs = psSection ? children(psSection, "ps")[0] : undefined;
    const decodeText = decodePs ? children(decodePs, "pstext")[0]?.children.map((child) => (typeof child === "string" ? child : "")).join("") ?? "" : "";
    const features = collectFeatures(iclass, decodeText, fileName);
    const featureGuards = parseDecodeFeatureGuards(decodeText, fieldWidths);
    const guards = parseDecodeGuards(decodeText, fieldWidths, options);
    for (const constraint of base.constraints) {
      if (!SME2_FLOAT_MAXMIN_CONSTRAINT_FILES.has(fileName) || constraint.field !== "size") {
        continue;
      }
      const term = `${constraint.field} ${constraint.expression}`;
      try {
        const alternatives = parseValidGuardTermAlternatives(term, fieldWidths);
        guards.push(...alternatives.map((all) => ({ all })));
      } catch (error) {
        if (!options.ignoreUnsupportedGuards) {
          throw error;
        }
      }
    }
    const className = iclass.attrs.name ?? "";

    for (const encoding of children(iclass, "encoding")) {
      const bits = cloneBits(base.bits);
      for (const box of children(encoding, "box")) {
        const hibit = Number(box.attrs.hibit);
        const width = Number(box.attrs.width ?? "1");
        applyBox(bits, hibit, width, parseBoxBits(box));
      }
      const { mask, value, bitCount } = computeMaskValue(bits);
      const fields: GeneratedField[] = [];
      const seen = new Set<string>();
      for (const field of base.fields) {
        if (!seen.has(field.name)) {
          fields.push({ name: field.name, lsb: field.lsb, width: field.width });
          seen.add(field.name);
        }
      }

      parsed.push({
        instructionId,
        encodingId: encoding.attrs.name,
        mnemonic: collectEncodingMnemonic(encoding, instructionDocvars),
        className,
        fileName,
        mask,
        value,
        bitCount,
        fields,
        features,
        featureGuards,
        guards,
      });
    }
  }

  return parsed;
}
