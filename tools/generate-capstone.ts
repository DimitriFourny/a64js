import { mkdir, readdir, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { SUPPORTED_FILES } from "./supported-files.ts";

type GeneratedCapstoneCase = {
  sourceFile: string;
  caseIndex: number;
  word: number;
  asmText: string;
  encodingFile: string;
  mnemonic: string;
  features: string[];
};

type GeneratedCapstoneModule = {
  SUPPORTED_CAPSTONE_CASES?: GeneratedCapstoneCase[];
  UNSUPPORTED_CAPSTONE_CASES?: GeneratedCapstoneCase[];
};

const OUTPUT_ROOT = "test/generated/capstone";
const INDEX_FILE = "index.generated.ts";

async function walkGeneratedModules(root: string): Promise<string[]> {
  const entries = await readdir(root, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkGeneratedModules(fullPath)));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (!entry.name.endsWith(".generated.ts")) {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

function normalizeRelativePath(path: string): string {
  return path.split(sep).join("/");
}

function sortCases(cases: GeneratedCapstoneCase[]): GeneratedCapstoneCase[] {
  return [...cases].sort((left, right) => {
    const bySource = left.sourceFile.localeCompare(right.sourceFile);
    if (bySource !== 0) {
      return bySource;
    }

    const byIndex = left.caseIndex - right.caseIndex;
    if (byIndex !== 0) {
      return byIndex;
    }

    return left.word - right.word;
  });
}

function renderCaseModule(supported: GeneratedCapstoneCase[], unsupported: GeneratedCapstoneCase[]): string {
  return `export const SUPPORTED_CAPSTONE_CASES = ${JSON.stringify(supported, null, 2)};

export const UNSUPPORTED_CAPSTONE_CASES = ${JSON.stringify(unsupported, null, 2)};
`;
}

function renderIndexModule(modulePaths: string[]): string {
  const imports = modulePaths
    .map((modulePath, index) => {
      const importPath = `./${modulePath}`;
      return `import { SUPPORTED_CAPSTONE_CASES as CAPSTONE_${index}_SUPPORTED, UNSUPPORTED_CAPSTONE_CASES as CAPSTONE_${index}_UNSUPPORTED } from "${importPath}";`;
    })
    .join("\n");

  const supportedEntries = modulePaths.map((_, index) => `  ...CAPSTONE_${index}_SUPPORTED,`).join("\n");
  const unsupportedEntries = modulePaths.map((_, index) => `  ...CAPSTONE_${index}_UNSUPPORTED,`).join("\n");

  return `export type GeneratedCapstoneCase = {
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
${supportedEntries}
];

export const UNSUPPORTED_CAPSTONE_CASES: GeneratedCapstoneCase[] = [
${unsupportedEntries}
];
`;
}

export async function generateCapstoneFixtures(): Promise<void> {
  const outputRoot = resolve(OUTPUT_ROOT);
  const supportedFiles = new Set(SUPPORTED_FILES);
  const rootIndexFile = join(outputRoot, INDEX_FILE);
  const moduleFiles = (await walkGeneratedModules(outputRoot))
    .filter((moduleFile) => moduleFile !== rootIndexFile)
    .sort((left, right) => left.localeCompare(right));

  let supportedCount = 0;
  let unsupportedCount = 0;

  for (const moduleFile of moduleFiles) {
    const moduleUrl = `${pathToFileURL(moduleFile).href}?refresh=${Date.now()}`;
    const loaded = (await import(moduleUrl)) as GeneratedCapstoneModule;
    const existingCases = sortCases([
      ...(loaded.SUPPORTED_CAPSTONE_CASES ?? []),
      ...(loaded.UNSUPPORTED_CAPSTONE_CASES ?? []),
    ]);

    const supportedCases = existingCases.filter((capstoneCase) => supportedFiles.has(capstoneCase.encodingFile));
    const unsupportedCases = existingCases.filter((capstoneCase) => !supportedFiles.has(capstoneCase.encodingFile));
    supportedCount += supportedCases.length;
    unsupportedCount += unsupportedCases.length;

    await writeFile(moduleFile, renderCaseModule(supportedCases, unsupportedCases), "utf8");
  }

  const relativeModulePaths = moduleFiles.map((moduleFile) => normalizeRelativePath(relative(outputRoot, moduleFile)));
  await mkdir(outputRoot, { recursive: true });
  await writeFile(join(outputRoot, INDEX_FILE), renderIndexModule(relativeModulePaths), "utf8");
  process.stdout.write(
    `refreshed ${moduleFiles.length} capstone fixture modules (${supportedCount} supported, ${unsupportedCount} unsupported)\n`,
  );
}
