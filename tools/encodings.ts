import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { GeneratedEncoding, GeneratedField, Guard, GuardCheck } from "../src/types.ts";
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
};

export type ParsedEncoding = GeneratedEncoding & {
  bitCount: number;
};

type ParseEncodingFileOptions = {
  ignoreUnsupportedGuards?: boolean;
};

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

  for (const box of children(node, "box")) {
    const hibit = Number(box.attrs.hibit);
    const width = Number(box.attrs.width ?? "1");
    const name = box.attrs.name;
    const values = parseBoxBits(box);
    applyBox(bits, hibit, width, values);
    if (name) {
      fields.push({ name, lsb: hibit - width + 1, width });
    }
  }

  return { bits, fields };
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

function parseGuardTerm(term: string): GuardCheck {
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
  const mask = literal.startsWith("0x") ? -1 : ((1 << literal.length) - 1) >>> 0;
  return { kind: operator, field, mask, lsb: 0, value };
}

function parseDecodeGuards(source: string, options: ParseEncodingFileOptions = {}): Guard[] {
  const guards: Guard[] = [];
  const regex = /if\s+(.+?)\s+then\s+EndOfDecode\(/gs;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(source)) !== null) {
    const condition = match[1].trim();
    if (condition.includes("IsFeatureImplemented(")) {
      continue;
    }
    const terms = condition
      .split(/\s*&amp;&amp;\s*|\s*&&\s*/)
      .map((term) => term.trim())
      .filter((term) => term.length > 0 && !term.includes("IsFeatureImplemented(") && term !== "(" && term !== ")");
    if (terms.length === 0) {
      continue;
    }
    try {
      const parsedTerms = terms.flatMap((term) => {
        if (term.trim() === "size::sh == '001'") {
          return [
            { kind: "eq", field: "size", mask: 0b11, lsb: 0, value: 0 },
            { kind: "eq", field: "sh", mask: 0b1, lsb: 0, value: 1 },
          ];
        }

        return [parseGuardTerm(term)];
      });
      guards.push({ all: parsedTerms });
    } catch (error) {
      if (!options.ignoreUnsupportedGuards) {
        throw error;
      }
    }
  }
  return guards;
}

function collectFeatures(iclass: any, decodeText: string): string[] {
  const features = new Set<string>();
  for (const variant of children(firstChild(iclass, "arch_variants") ?? { children: [] }, "arch_variant")) {
    if (variant.attrs.feature) {
      features.add(variant.attrs.feature);
    }
  }
  const regex = /IsFeatureImplemented\((FEAT_[A-Za-z0-9_]+)\)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(decodeText)) !== null) {
    features.add(match[1]);
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
    const psSection = firstChild(iclass, "ps_section");
    const decodePs = psSection ? children(psSection, "ps")[0] : undefined;
    const decodeText = decodePs ? children(decodePs, "pstext")[0]?.children.map((child) => (typeof child === "string" ? child : "")).join("") ?? "" : "";
    const features = collectFeatures(iclass, decodeText);
    const guards = parseDecodeGuards(decodeText, options);
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
        guards,
      });
    }
  }

  return parsed;
}
