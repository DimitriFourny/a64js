import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { decode, disasm } from "../src/index.ts";
import { compareCapstoneAssembly, splitAssembly } from "../test/helpers/capstone-assembly.ts";
import { loadCapstoneReference } from "../test/helpers/capstone-corpus.ts";

export type CapstoneMismatch = {
  sourceFile: string;
  caseIndex: number;
  word: string;
  encodingFile: string;
  expected: string;
  actual: string;
  canonicalExpected: string;
  canonicalActual: string;
  reason: "unrecognized" | "assembly";
};

export function auditCapstoneCorpus() {
  const reference = loadCapstoneReference();
  const metrics = {
    referenceCases: reference.length,
    recognized: 0,
    associatedXmlEncoding: 0,
    operandImplemented: 0,
    assemblyVerified: 0,
    assemblyExcluded: 0,
    assemblyMismatched: 0,
    unrecognized: 0,
  };
  const exclusions: Record<string, number> = {};
  const equivalences: Record<string, number> = {};
  const mismatches: CapstoneMismatch[] = [];
  const byEncoding = new Map<string, { cases: number; verified: number; excluded: number; mismatched: number }>();
  for (const item of reference) {
    const decoded = decode(item.word, { features: item.features });
    const actual = disasm(item.word, undefined, { features: item.features });
    const comparison = compareCapstoneAssembly(item, actual);
    let encoding = byEncoding.get(item.encodingFile);
    if (!encoding) byEncoding.set(item.encodingFile, encoding = { cases: 0, verified: 0, excluded: 0, mismatched: 0 });
    encoding.cases++;
    if (decoded.status === "ok") {
      metrics.recognized++;
      if (decoded.encoding?.fileName === item.encodingFile) metrics.associatedXmlEncoding++;
      if (decoded.operands?.length || splitAssembly(item.asmText).operands.length === 0) metrics.operandImplemented++;
      if (comparison.matches) {
        for (const rule of comparison.equivalences) equivalences[rule] = (equivalences[rule] ?? 0) + 1;
        if (comparison.exclusion) {
          metrics.assemblyExcluded++;
          encoding.excluded++;
          exclusions[comparison.exclusion] = (exclusions[comparison.exclusion] ?? 0) + 1;
        } else {
          metrics.assemblyVerified++;
          encoding.verified++;
        }
        continue;
      }
      metrics.assemblyMismatched++;
    } else {
      metrics.unrecognized++;
    }
    encoding.mismatched++;
    mismatches.push({
      sourceFile: item.sourceFile,
      caseIndex: item.caseIndex,
      word: `0x${item.word.toString(16).padStart(8, "0")}`,
      encodingFile: item.encodingFile,
      expected: item.asmText,
      actual,
      canonicalExpected: comparison.expected,
      canonicalActual: comparison.actual,
      reason: decoded.status === "ok" ? "assembly" : "unrecognized",
    });
  }
  const encodings = Object.fromEntries([...byEncoding].sort(([left], [right]) => left < right ? -1 : left > right ? 1 : 0));
  return {
    metrics,
    definitions: {
      recognized: "decode returned status ok; this alone says nothing about operand correctness",
      associatedXmlEncoding: "recognized instruction selected the imported classification XML file",
      operandImplemented: "recognized and returned at least one operand, or the reference instruction has no operands; this is implementation accounting, not correctness",
      assemblyVerified: "all reference assembly operands match after the documented narrow syntax/alias rules, with no exclusions",
      assemblyExcluded: "Apple proprietary dialect overlap, or named sysreg mapping unavailable (raw tuple and all GP operands still checked)",
    },
    exclusions,
    equivalences,
    encodings,
    mismatches,
  };
}

async function main(): Promise<void> {
  const report = auditCapstoneCorpus();
  const jsonOption = process.argv.find((argument) => argument.startsWith("--json="));
  if (jsonOption) await writeFile(resolve(jsonOption.slice("--json=".length)), `${JSON.stringify(report, null, 2)}\n`, "utf8");
  process.stdout.write(`Capstone reference: ${report.metrics.referenceCases} cases\n`);
  for (const [name, count] of Object.entries(report.metrics).slice(1)) process.stdout.write(`  ${name}: ${count}\n`);
  for (const [name, count] of Object.entries(report.exclusions)) process.stdout.write(`  exclusion ${name}: ${count}\n`);
  const failed = Object.entries(report.encodings).filter(([, counts]) => counts.mismatched)
    .sort((left, right) => right[1].mismatched - left[1].mismatched);
  if (failed.length) {
    process.stdout.write(`Assembly mismatches across ${failed.length} XML files (largest 20):\n`);
    for (const [name, counts] of failed.slice(0, 20)) process.stdout.write(`  ${name}: ${counts.mismatched}/${counts.cases}\n`);
    for (const item of report.mismatches.slice(0, 10)) {
      process.stdout.write(`  ${item.sourceFile}#${item.caseIndex} ${item.word}: ${item.expected} => ${item.actual}\n`);
    }
  }
  if (process.argv.includes("--check") && report.mismatches.length) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
