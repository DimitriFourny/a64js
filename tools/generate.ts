import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { GeneratedEncoding, GeneratedField, Guard, GuardCheck } from "../src/types.ts";
import { SUPPORTED_FILES, XML_ROOT } from "./supported-files.ts";
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

function bitCount(value: number): number {
  let count = 0;
  let current = value >>> 0;
  while (current) {
    current &= current - 1;
    count += 1;
  }
  return count;
}

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
    for (let i = 0; i < colspan; i += 1) {
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

function computeMaskValue(bits: BoxBits): { mask: number; value: number } {
  let mask = 0;
  let value = 0;
  for (let bit = 31; bit >= 0; bit -= 1) {
    const position = 31 - bit;
    const cell = bits[position];
    if (cell === "x") {
      continue;
    }
    mask |= (1 << bit) >>> 0;
    if (cell === 1) {
      value |= (1 << bit) >>> 0;
    }
  }
  return { mask: mask >>> 0, value: value >>> 0 };
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

function parseDecodeGuards(source: string): Guard[] {
  const guards: Guard[] = [];
  const regex = /if\s+(.+?)\s+then\s+EndOfDecode\(/gs;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(source)) !== null) {
    const condition = match[1].trim();
    if (condition.startsWith("!IsFeatureImplemented(")) {
      continue;
    }
    const terms = condition.split(/\s*&amp;&amp;\s*|\s*&&\s*/);
    guards.push({ all: terms.map((term) => parseGuardTerm(term.trim())) });
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

async function parseFile(fileName: string): Promise<GeneratedEncoding[]> {
  const fullPath = join(XML_ROOT, fileName);
  const source = await readFile(fullPath, "utf8");
  const xml = parseXml(source);
  const instructionId = xml.attrs.id;
  const instructionDocvars = firstChild(xml, "docvars") ?? { children: [] };
  const classes = firstChild(xml, "classes");
  if (!classes) {
    return [];
  }

  const generated: GeneratedEncoding[] = [];

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
    const guards = parseDecodeGuards(decodeText);
    const className = iclass.attrs.name ?? "";

    for (const encoding of children(iclass, "encoding")) {
      const bits = cloneBits(base.bits);
      for (const box of children(encoding, "box")) {
        const hibit = Number(box.attrs.hibit);
        const width = Number(box.attrs.width ?? "1");
        applyBox(bits, hibit, width, parseBoxBits(box));
      }
      const { mask, value } = computeMaskValue(bits);
      const fields: GeneratedField[] = [];
      const seen = new Set<string>();
      for (const field of base.fields) {
        if (!seen.has(field.name)) {
          fields.push({ name: field.name, lsb: field.lsb, width: field.width });
          seen.add(field.name);
        }
      }

      generated.push({
        instructionId,
        encodingId: encoding.attrs.name,
        mnemonic: collectEncodingMnemonic(encoding, instructionDocvars),
        className,
        fileName,
        mask,
        value,
        fields,
        features,
        guards,
      });
    }
  }

  return generated;
}

function renderGenerated(encodings: GeneratedEncoding[]): string {
  const ordered = [...encodings].sort((left, right) => {
    const byMask = bitCount(right.mask) - bitCount(left.mask);
    if (byMask !== 0) {
      return byMask;
    }
    return left.encodingId.localeCompare(right.encodingId);
  });

  return `import type { GeneratedEncoding } from "../types.ts";

export const ENCODINGS: GeneratedEncoding[] = ${JSON.stringify(ordered, null, 2)};\n`;
}

async function main(): Promise<void> {
  const encodings = (await Promise.all(SUPPORTED_FILES.map((fileName) => parseFile(fileName)))).flat();
  await mkdir("src/generated", { recursive: true });
  await writeFile("src/generated/isa.generated.ts", renderGenerated(encodings), "utf8");
  process.stdout.write(`generated ${encodings.length} encodings\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
