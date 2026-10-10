import test from "node:test";
import assert from "node:assert/strict";
import { decode, disasm } from "../src/index.ts";
import { compareCapstoneAssembly } from "./helpers/capstone-assembly.ts";
import { loadCapstoneReference } from "./helpers/capstone-corpus.ts";
import { SUPPORTED_CAPSTONE_CASES, UNSUPPORTED_CAPSTONE_CASES } from "./generated/capstone/index.generated.ts";

function formatWord(word: number): string {
  return `0x${word.toString(16).padStart(8, "0")}`;
}

function describeCase(capstoneCase: (typeof SUPPORTED_CAPSTONE_CASES)[number]): string {
  return `${capstoneCase.sourceFile}#${capstoneCase.caseIndex} ${capstoneCase.mnemonic} ${formatWord(capstoneCase.word)}`;
}

test("recognized Capstone cases select their classified XML encoding", { timeout: 10000 }, () => {
  for (const capstoneCase of SUPPORTED_CAPSTONE_CASES) {
    const decoded = decode(capstoneCase.word, { features: capstoneCase.features });
    assert.equal(decoded.status, "ok", describeCase(capstoneCase));
    assert.equal(decoded.encoding?.fileName, capstoneCase.encodingFile, describeCase(capstoneCase));
    assert.equal(decoded.mnemonic, capstoneCase.mnemonic, describeCase(capstoneCase));
  }
});

test("recognized Capstone assembly matches the independent reference including operands", { timeout: 10000 }, () => {
  const recognizedIds = new Set(SUPPORTED_CAPSTONE_CASES.map((item) => `${item.sourceFile}#${item.caseIndex}`));
  const failures: string[] = [];
  let verified = 0;
  let excluded = 0;
  for (const reference of loadCapstoneReference()) {
    if (!recognizedIds.has(`${reference.sourceFile}#${reference.caseIndex}`)) continue;
    const rendered = disasm(reference.word, undefined, { features: reference.features });
    const comparison = compareCapstoneAssembly(reference, rendered);
    if (!comparison.matches) failures.push(
      `${describeCase(reference)}\n  reference: ${reference.asmText}\n  actual:    ${rendered}\n  compared:  ${comparison.expected} != ${comparison.actual}`,
    );
    else if (comparison.exclusion) excluded++;
    else verified++;
  }
  assert.equal(failures.length, 0,
    `${failures.length} assembly mismatches (${verified} verified; ${excluded} explicitly excluded).\n${failures.slice(0, 20).join("\n")}\nRun tools/audit-capstone.ts --json=<report> for all mismatches.`,
  );
});

test("cases outside recognition scope retain raw .inst fallback unless another encoding matches", () => {
  for (const capstoneCase of UNSUPPORTED_CAPSTONE_CASES) {
    const decoded = decode(capstoneCase.word, { features: capstoneCase.features });
    const rendered = disasm(capstoneCase.word, undefined, { features: capstoneCase.features });
    if (decoded.status === "ok") {
      assert.notEqual(decoded.encoding?.fileName, capstoneCase.encodingFile, describeCase(capstoneCase));
      assert.notEqual(rendered, `.inst ${formatWord(capstoneCase.word)}`, describeCase(capstoneCase));
      continue;
    }
    assert.equal(rendered, `.inst ${formatWord(capstoneCase.word)}`, describeCase(capstoneCase));
  }
});
