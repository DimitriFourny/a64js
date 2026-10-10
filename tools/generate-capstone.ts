import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { loadCapstoneModulePaths, loadCapstoneReference, type ClassifiedCapstoneCase } from "../test/helpers/capstone-corpus.ts";
import { SUPPORTED_FILES } from "./supported-files.ts";

type GeneratedCapstoneCase = Omit<ClassifiedCapstoneCase, "modulePath">;
const OUTPUT_ROOT = "test/generated/capstone";

function compareText(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}

function renderCaseModule(supported: GeneratedCapstoneCase[], unsupported: GeneratedCapstoneCase[]): string {
  return `// Generated from test/reference/capstone; do not use this file as reference input.\nexport const SUPPORTED_CAPSTONE_CASES = ${JSON.stringify(supported, null, 2)};

export const UNSUPPORTED_CAPSTONE_CASES = ${JSON.stringify(unsupported, null, 2)};
`;
}

function renderIndexModule(modulePaths: string[]): string {
  const imports = modulePaths
    .map((modulePath, index) => `import { SUPPORTED_CAPSTONE_CASES as CAPSTONE_${index}_SUPPORTED, UNSUPPORTED_CAPSTONE_CASES as CAPSTONE_${index}_UNSUPPORTED } from "./${modulePath}";`)
    .join("\n");
  const supported = modulePaths.map((_, index) => `  ...CAPSTONE_${index}_SUPPORTED,`).join("\n");
  const unsupported = modulePaths.map((_, index) => `  ...CAPSTONE_${index}_UNSUPPORTED,`).join("\n");
  return `// Generated support accounting. The immutable assembly reference is test/reference/capstone/corpus.json.\nexport type GeneratedCapstoneCase = {
  sourceFile: string;
  caseIndex: number;
  word: number;
  asmText: string;
  encodingFile: string;
  mnemonic: string;
  features: string[];
};

${imports}

export const SUPPORTED_CAPSTONE_CASES: GeneratedCapstoneCase[] = [
${supported}
];

export const UNSUPPORTED_CAPSTONE_CASES: GeneratedCapstoneCase[] = [
${unsupported}
];
`;
}

/** Support partitioning can be rebuilt even when every generated fixture has been deleted. */
export async function generateCapstoneFixtures(options: {
  outputRoot?: string;
  supportedFiles?: readonly string[];
  quiet?: boolean;
} = {}): Promise<void> {
  const outputRoot = resolve(options.outputRoot ?? OUTPUT_ROOT);
  const supportedFiles = new Set(options.supportedFiles ?? SUPPORTED_FILES);
  const reference = loadCapstoneReference();
  const modules = new Map<string, GeneratedCapstoneCase[]>(loadCapstoneModulePaths().map((path) => [path, []]));
  for (const { modulePath, ...capstoneCase } of reference) {
    let cases = modules.get(modulePath);
    if (!cases) modules.set(modulePath, cases = []);
    cases.push(capstoneCase);
  }
  const modulePaths = [...modules.keys()].sort(compareText);
  let supportedCount = 0;
  for (const modulePath of modulePaths) {
    const cases = modules.get(modulePath)!.sort((left, right) =>
      compareText(left.sourceFile, right.sourceFile) || left.caseIndex - right.caseIndex || left.word - right.word);
    const supported = cases.filter((item) => supportedFiles.has(item.encodingFile));
    const unsupported = cases.filter((item) => !supportedFiles.has(item.encodingFile));
    supportedCount += supported.length;
    const target = join(outputRoot, modulePath);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, renderCaseModule(supported, unsupported), "utf8");
  }
  await mkdir(outputRoot, { recursive: true });
  await writeFile(join(outputRoot, "index.generated.ts"), renderIndexModule(modulePaths), "utf8");
  if (!options.quiet) process.stdout.write(
    `generated ${modulePaths.length} capstone fixture modules (${supportedCount} recognized encodings, ${reference.length - supportedCount} outside recognition scope)\n`,
  );
}
