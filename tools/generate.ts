import { mkdir, rm, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import type { GeneratedEncoding } from "../src/types.ts";
import { parseEncodingFile } from "./encodings.ts";
import { generateCapstoneFixtures } from "./generate-capstone.ts";
import { SUPPORTED_FILES, XML_ROOT } from "./supported-files.ts";

const OPERAND_SCHEMA_BY_FILE = new Map<string, string>([
  ["adc.xml", "gp-rd-rn-rm-sf"],
  ["adcs.xml", "gp-rd-rn-rm-sf"],
  ["sbc.xml", "gp-rd-rn-rm-sf"],
  ["sbcs.xml", "gp-rd-rn-rm-sf"],
  ["ngc_sbc.xml", "gp-rd-rn-rm-sf"],
  ["ngcs_sbcs.xml", "gp-rd-rn-rm-sf"],
]);

function bitCount(value: number): number {
  let count = 0;
  let current = value >>> 0;
  while (current) {
    current &= current - 1;
    count += 1;
  }
  return count;
}

function orderEncodings(encodings: GeneratedEncoding[]): GeneratedEncoding[] {
  return [...encodings].sort((left, right) => {
    const byMask = bitCount(right.mask) - bitCount(left.mask);
    if (byMask !== 0) {
      return byMask;
    }
    return left.encodingId.localeCompare(right.encodingId);
  });
}

function renderEncodingModule(encodings: GeneratedEncoding[]): string {
  return `import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = ${JSON.stringify(encodings, null, 2)};\n`;
}

function attachOperandSchema(encoding: GeneratedEncoding): GeneratedEncoding {
  const operandSchemaId = OPERAND_SCHEMA_BY_FILE.get(encoding.fileName);
  return operandSchemaId ? { ...encoding, operandSchemaId } : encoding;
}

function moduleName(fileName: string): string {
  return `${basename(fileName, ".xml")}.generated.ts`;
}

function renderIndexModule(
  ordered: GeneratedEncoding[],
  aliases: Map<string, string>,
  indexesByFile: Map<string, number[]>,
): string {
  const imports = SUPPORTED_FILES.map((fileName) => {
    const alias = aliases.get(fileName);
    if (!alias) {
      throw new Error(`missing generated alias for ${fileName}`);
    }
    return `import { ENCODINGS as ${alias} } from "./${moduleName(fileName)}";`;
  }).join("\n");

  const entries = ordered
    .map((encoding) => {
      const alias = aliases.get(encoding.fileName);
      const indexes = indexesByFile.get(encoding.fileName);
      if (!alias || !indexes || indexes.length === 0) {
        throw new Error(`missing generated entry reference for ${encoding.fileName}:${encoding.encodingId}`);
      }
      const index = indexes.shift();
      return `  ${alias}[${index}],`;
    })
    .join("\n");

  return `import type { GeneratedEncoding } from "../../types.ts";
${imports}

export const ENCODINGS: GeneratedEncoding[] = [
${entries}
];
`;
}

async function main(): Promise<void> {
  const encodings = (await Promise.all(SUPPORTED_FILES.map((fileName) => parseEncodingFile(XML_ROOT, fileName))))
    .flat()
    .map(attachOperandSchema);
  const ordered = orderEncodings(encodings);
  const outputRoot = "src/generated/isa";
  const grouped = new Map<string, GeneratedEncoding[]>();

  for (const encoding of ordered) {
    grouped.set(encoding.fileName, [...(grouped.get(encoding.fileName) ?? []), encoding]);
  }

  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });

  const aliases = new Map<string, string>();
  const indexesByFile = new Map<string, number[]>();

  for (const [index, fileName] of SUPPORTED_FILES.entries()) {
    const fileEncodings = grouped.get(fileName) ?? [];
    aliases.set(fileName, `ENCODINGS_${index}`);
    indexesByFile.set(
      fileName,
      fileEncodings.map((_, encodingIndex) => encodingIndex),
    );
    await writeFile(join(outputRoot, moduleName(fileName)), renderEncodingModule(fileEncodings), "utf8");
  }

  await writeFile(join(outputRoot, "index.generated.ts"), renderIndexModule(ordered, aliases, indexesByFile), "utf8");
  await generateCapstoneFixtures();
  process.stdout.write(`generated ${encodings.length} encodings\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
