import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { decode, disasm } from "../src/index.ts";
import { parseEncodingFile } from "./encodings.ts";
import { SUPPORTED_FILES, XML_ROOT } from "./supported-files.ts";

type CapstoneCase = {
  sourceFile: string;
  caseIndex: number;
  word: number;
  asmText: string;
};

type GeneratedCapstoneCase = CapstoneCase & {
  encodingFile: string;
  mnemonic: string;
  features: string[];
};

function formatWord(word: number): string {
  return `0x${word.toString(16).padStart(8, "0")}`;
}

function compareEncodings(
  left: { bitCount: number; fileName: string; encodingId: string },
  right: { bitCount: number; fileName: string; encodingId: string },
): number {
  const byBitCount = right.bitCount - left.bitCount;
  if (byBitCount !== 0) {
    return byBitCount;
  }
  const byFileName = left.fileName.localeCompare(right.fileName);
  if (byFileName !== 0) {
    return byFileName;
  }
  return left.encodingId.localeCompare(right.encodingId);
}

async function collectXmlFiles(): Promise<string[]> {
  return (await readdir(XML_ROOT)).filter((fileName) => fileName.endsWith(".xml")).sort((left, right) => left.localeCompare(right));
}

async function collectCapstoneFiles(root: string): Promise<string[]> {
  return (await readdir(root, { recursive: true }))
    .filter((entry): entry is string => typeof entry === "string" && entry.endsWith(".yaml"))
    .sort((left, right) => left.localeCompare(right));
}

function parseCapstoneCases(sourceFile: string, source: string): CapstoneCase[] {
  const cases: CapstoneCase[] = [];
  const regex = /bytes:\s*\[([^\]]+)\][\s\S]*?asm_text:\s*"([^"]*)"/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(source)) !== null) {
    const bytes = match[1].split(",").map((value) => Number(value.trim()));
    if (bytes.length !== 4 || bytes.some((value) => Number.isNaN(value))) {
      continue;
    }
    const word = (bytes[0] | (bytes[1] << 8) | (bytes[2] << 16) | (bytes[3] << 24)) >>> 0;
    cases.push({
      sourceFile,
      caseIndex: cases.length,
      word,
      asmText: match[2],
    });
  }
  return cases;
}

function renderCapstoneCases(supported: GeneratedCapstoneCase[], unsupported: GeneratedCapstoneCase[]): string {
  return `export type GeneratedCapstoneCase = {
  sourceFile: string;
  caseIndex: number;
  word: number;
  asmText: string;
  encodingFile: string;
  mnemonic: string;
  features: string[];
};

export const SUPPORTED_CAPSTONE_CASES: GeneratedCapstoneCase[] = ${JSON.stringify(supported, null, 2)};

export const UNSUPPORTED_CAPSTONE_CASES: GeneratedCapstoneCase[] = ${JSON.stringify(unsupported, null, 2)};
`;
}

async function main(): Promise<void> {
  const xmlFiles = await collectXmlFiles();
  const supportedSet = new Set(SUPPORTED_FILES);
  const encodings = (
    await Promise.all(xmlFiles.map((fileName) => parseEncodingFile(XML_ROOT, fileName, { ignoreUnsupportedGuards: true })))
  )
    .flat()
    .sort(compareEncodings);

  const supported: GeneratedCapstoneCase[] = [];
  const unsupported: GeneratedCapstoneCase[] = [];

  for (const relativePath of await collectCapstoneFiles("capstone_tests")) {
    const source = await readFile(join("capstone_tests", relativePath), "utf8");
    for (const capstoneCase of parseCapstoneCases(relativePath, source)) {
      const match = encodings.find((encoding) => ((capstoneCase.word & encoding.mask) >>> 0) === encoding.value);
      if (!match) {
        continue;
      }
      const generatedCase: GeneratedCapstoneCase = {
        ...capstoneCase,
        encodingFile: match.fileName,
        mnemonic: match.mnemonic,
        features: match.features,
      };
      const decoded = decode(capstoneCase.word, { features: match.features });
      const rendered = disasm(capstoneCase.word, undefined, { features: match.features });

      if (
        supportedSet.has(match.fileName) &&
        decoded.status === "ok" &&
        decoded.encoding?.fileName === match.fileName &&
        decoded.mnemonic === match.mnemonic &&
        rendered !== `.inst ${formatWord(capstoneCase.word)}`
      ) {
        supported.push(generatedCase);
      } else if (!supportedSet.has(match.fileName) && rendered === `.inst ${formatWord(capstoneCase.word)}`) {
        unsupported.push(generatedCase);
      }
    }
  }

  await mkdir("test/generated", { recursive: true });
  await writeFile("test/generated/capstone-cases.generated.ts", renderCapstoneCases(supported, unsupported), "utf8");
  process.stdout.write(`generated ${supported.length} supported and ${unsupported.length} unsupported capstone cases\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
