import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

export type CapstoneReferenceCase = {
  sourceFile: string;
  caseIndex: number;
  word: number;
  asmText: string;
};

export type ClassifiedCapstoneCase = CapstoneReferenceCase & {
  modulePath: string;
  encodingFile: string;
  mnemonic: string;
  features: string[];
};

type CorpusRow = [sourceFile: string, caseIndex: number, word: number, asmText: string];
type ClassificationRow = [modulePath: string, encodingFile: string, mnemonic: string, features: string[]];
type Manifest = {
  schemaVersion: number;
  moduleCount: number;
  modulePaths: string[];
  files: Record<string, { sha256: string; rows: number }>;
};

const REFERENCE_ROOT = new URL("../reference/capstone/", import.meta.url);

export function loadCapstoneModulePaths(): string[] {
  const manifest = JSON.parse(readFileSync(new URL("manifest.json", REFERENCE_ROOT), "utf8")) as Manifest;
  if (new Set(manifest.modulePaths).size !== manifest.moduleCount) {
    throw new Error("Capstone reference module count mismatch");
  }
  return [...manifest.modulePaths];
}

/** Verify the preserved inputs before using them; generated support files are never inputs. */
export function loadCapstoneReference(): ClassifiedCapstoneCase[] {
  const manifest = JSON.parse(readFileSync(new URL("manifest.json", REFERENCE_ROOT), "utf8")) as Manifest;
  if (manifest.schemaVersion !== 1) {
    throw new Error(`Unsupported Capstone reference schema: ${manifest.schemaVersion}`);
  }
  const readChecked = <T>(name: string): T[] => {
    const bytes = readFileSync(new URL(name, REFERENCE_ROOT));
    const actual = createHash("sha256").update(bytes).digest("hex");
    if (actual !== manifest.files[name]?.sha256) {
      throw new Error(`Capstone reference checksum mismatch: ${name}`);
    }
    const rows = JSON.parse(bytes.toString("utf8")) as T[];
    if (rows.length !== manifest.files[name].rows) {
      throw new Error(`Capstone reference row count mismatch: ${name}`);
    }
    return rows;
  };
  const corpus = readChecked<CorpusRow>("corpus.json");
  const classification = readChecked<ClassificationRow>("classification.json");
  if (corpus.length !== classification.length) {
    throw new Error("Capstone reference and classification lengths differ");
  }
  const identities = new Set<string>();
  const cases = corpus.map(([sourceFile, caseIndex, word, asmText], index) => {
    const [modulePath, encodingFile, mnemonic, features] = classification[index];
    const identity = `${sourceFile}#${caseIndex}`;
    if (identities.has(identity)) {
      throw new Error(`Duplicate Capstone reference identity: ${identity}`);
    }
    identities.add(identity);
    if (!Number.isInteger(word) || word < 0 || word > 0xffff_ffff || !asmText.trim()) {
      throw new Error(`Invalid Capstone reference row: ${identity}`);
    }
    if (!/^(?:[\w.-]+\/)*[\w.-]+\.generated\.ts$/.test(modulePath) || modulePath === "index.generated.ts") {
      throw new Error(`Invalid Capstone output module: ${modulePath}`);
    }
    return { sourceFile, caseIndex, word, asmText, modulePath, encodingFile, mnemonic, features };
  });
  const modules = new Set(loadCapstoneModulePaths());
  if (cases.some((item) => !modules.has(item.modulePath))) {
    throw new Error("Capstone reference has an unlisted module");
  }
  return cases;
}
