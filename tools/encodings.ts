import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { GeneratedEncoding, GeneratedField, GuardCheck } from "../src/types.ts";
import { children, firstChild, parseXml, rawTextContent } from "./xml.ts";
import { parseDecodeGuards, type DecodeGuardDiagnostic } from "./decode-guards.ts";
import { parseGuardAlternatives } from "./guards.ts";

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

export type ParseEncodingFileOptions = {
  unsupportedExpressions?: ReadonlyMap<string, string>;
  onDiagnostic?: (diagnostic: DecodeGuardDiagnostic) => void;
};

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

// Exact reductions of derived integer predicates to their encoded bit fields.
const DECODE_EXPRESSION_REWRITES = new Map<string, ReadonlyMap<string, string>>([
  ["smov_advsimd.xml", new Map([["datasize <= esize", "Q == '0' && imm5[2:0] == '100'"]])],
  ["umov_advsimd.xml", new Map([
    ["datasize == 64 && esize < 64", "Q == '1' && imm5[3:0] != '1000'"],
    ["datasize == 32 && esize >= 64", "Q == '0' && imm5[3:0] == '1000'"],
  ])],
  ...["rev16_advsimd.xml", "rev32_advsimd.xml", "rev64_advsimd.xml"].map((fileName): [string, ReadonlyMap<string, string>] => [fileName, new Map([
    ["csize <= esize", "(o0::U == '00' && size == '11') || (o0::U == '01' && size IN {'10', '11'}) || (o0::U == '10' && size IN {'01', '10', '11'}) || o0::U == '11'"],
  ])]),
  ["fmov_float_gen.xml", new Map([
    ["fltsize != 16 && fltsize != intsize", "(ftype == '00' && sf == '1') || (ftype IN {'01', '10'} && sf == '0')"],
    ["intsize != 64 || ftype != '10'", "sf == '0' || ftype != '10'"],
  ])],
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

function collectFeatures(iclass: any): string[] {
  const features = new Set<string>();
  const variants = firstChild(iclass, "arch_variants");
  for (const variant of variants ? children(variants, "arch_variant") : []) {
    if (variant.attrs.feature) features.add(variant.attrs.feature);
  }
  return [...features];
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

function inheritCanonical(alias: ParsedEncoding, canonical: ParsedEncoding): ParsedEncoding {
  if (((alias.value ^ canonical.value) & alias.mask & canonical.mask) !== 0) {
    throw new Error(`alias ${alias.encodingId} conflicts with canonical ${canonical.encodingId}`);
  }
  const fields = [...alias.fields];
  const names = new Map<string, string>();
  for (const field of canonical.fields) {
    const existing = fields.find((candidate) => candidate.name === field.name);
    if (!existing) {
      fields.push({ ...field }); names.set(field.name, field.name);
    } else if (existing.lsb === field.lsb && existing.width === field.width) {
      names.set(field.name, field.name);
    } else {
      let name = `__canonical_${field.name}`;
      while (fields.some((candidate) => candidate.name === name)) name = `_${name}`;
      fields.push({ ...field, name }); names.set(field.name, name);
    }
  }
  const remap = (check: GuardCheck): GuardCheck => {
    if (check.kind === "feature") return { ...check };
    if (check.kind === "eq_concat" || check.kind === "ne_concat") {
      return { ...check, parts: check.parts.map((part) => ({ ...part, field: names.get(part.field)! })) };
    }
    if (check.kind === "eq_field" || check.kind === "ne_field") {
      return { ...check, field: names.get(check.field)!, otherField: names.get(check.otherField)! };
    }
    return { ...check, field: names.get(check.field)! };
  };
  const mask = (alias.mask | canonical.mask) >>> 0;
  let bitCount = 0;
  for (let remaining = mask; remaining; remaining = (remaining & (remaining - 1)) >>> 0) bitCount += 1;
  const diagnostics = [...new Set([...(alias.guardDiagnostics ?? []), ...(canonical.guardDiagnostics ?? [])])];
  return {
    ...alias,
    mask,
    value: (alias.value | canonical.value) >>> 0,
    bitCount,
    fields,
    features: [...new Set([...alias.features, ...canonical.features])],
    featureGuards: [...alias.featureGuards, ...canonical.featureGuards.map((guard) => ({ ...guard, all: guard.all.map(remap) }))],
    guards: [...alias.guards, ...canonical.guards.map((guard) => ({ ...guard, all: guard.all.map(remap) }))],
    canonicalEncodingId: canonical.canonicalEncodingId ?? canonical.encodingId,
    canonicalFileName: canonical.canonicalFileName ?? canonical.fileName,
    ...(diagnostics.length ? { guardDiagnostics: diagnostics } : {}),
  };
}

export async function parseEncodingFile(
  xmlRoot: string,
  fileName: string,
  options: ParseEncodingFileOptions = {},
): Promise<ParsedEncoding[]> {
  return parseEncodingFileInternal(xmlRoot, fileName, options, new Set());
}

async function parseEncodingFileInternal(

  xmlRoot: string,
  fileName: string,
  options: ParseEncodingFileOptions,
  ancestors: ReadonlySet<string>,
): Promise<ParsedEncoding[]> {
  if (ancestors.has(fileName)) throw new Error(`cyclic alias parent reference: ${[...ancestors, fileName].join(" -> ")}`);
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
  const parentFileName = firstChild(xml, "aliasto")?.attrs.refiform;
  const canonicalEncodings = parentFileName
    ? await parseEncodingFileInternal(xmlRoot, parentFileName, options, new Set([...ancestors, fileName]))
    : [];

  for (const iclass of children(classes, "iclass")) {
    const regdiagram = firstChild(iclass, "regdiagram");
    if (!regdiagram) {
      continue;
    }
    const base = parseDiagram(regdiagram);
    const fieldWidths = new Map(base.fields.map((field) => [field.name, field.width]));
    const psSection = firstChild(iclass, "ps_section");
    const decodePs = psSection ? children(psSection, "ps")[0] : undefined;
    const decodeText = decodePs ? rawTextContent(children(decodePs, "pstext")[0]) : "";
    const features = collectFeatures(iclass);
    const guardDiagnostics: string[] = [];
    const guards = parseDecodeGuards(decodeText, fieldWidths, {
      unsupportedExpressions: options.unsupportedExpressions,
      expressionRewrites: DECODE_EXPRESSION_REWRITES.get(fileName),
      onDiagnostic(diagnostic) {
        guardDiagnostics.push(`${diagnostic.expression}: ${diagnostic.reason}`);
        options.onDiagnostic?.(diagnostic);
      },
    });
    for (const constraint of base.constraints) {
      if (!SME2_FLOAT_MAXMIN_CONSTRAINT_FILES.has(fileName) || constraint.field !== "size") {
        continue;
      }
      const term = `${constraint.field} ${constraint.expression}`;
      const alternatives = parseGuardAlternatives(term, fieldWidths, true);
      guards.push(...alternatives.map((all) => ({ all, outcome: "undefined" as const })));
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

      const result: ParsedEncoding = {
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
        featureGuards: [],
        guards,
        ...(guardDiagnostics.length ? { guardDiagnostics: [...new Set(guardDiagnostics)] } : {}),
      };
      if (parentFileName) {
        const equivalent = firstChild(encoding, "equivalent_to");
        const template = equivalent ? firstChild(equivalent, "asmtemplate") : undefined;
        const reference = template ? children(template, "a").find((link) => link.attrs.href?.startsWith(`${parentFileName}#`))?.attrs.href : undefined;
        const canonicalId = reference?.slice(parentFileName.length + 1);
        const canonical = canonicalEncodings.find((candidate) => candidate.encodingId === canonicalId);
        if (!canonical) throw new Error(`missing canonical encoding for ${fileName}:${result.encodingId}: ${reference ?? parentFileName}`);
        parsed.push(inheritCanonical(result, canonical));
      } else parsed.push(result);
    }
  }

  return parsed;
}
