import { mkdir, writeFile } from "node:fs/promises";
import type { GeneratedEncoding } from "../src/types.ts";
import { parseEncodingFile } from "./encodings.ts";
import { SUPPORTED_FILES, XML_ROOT } from "./supported-files.ts";

function bitCount(value: number): number {
  let count = 0;
  let current = value >>> 0;
  while (current) {
    current &= current - 1;
    count += 1;
  }
  return count;
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
  const encodings = (await Promise.all(SUPPORTED_FILES.map((fileName) => parseEncodingFile(XML_ROOT, fileName)))).flat();
  await mkdir("src/generated", { recursive: true });
  await writeFile("src/generated/isa.generated.ts", renderGenerated(encodings), "utf8");
  process.stdout.write(`generated ${encodings.length} encodings\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
