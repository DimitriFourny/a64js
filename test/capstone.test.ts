import test from "node:test";
import assert from "node:assert/strict";
import { decode, disasm } from "../src/index.ts";
import { SUPPORTED_CAPSTONE_CASES, UNSUPPORTED_CAPSTONE_CASES } from "./generated/capstone-cases.generated.ts";

function formatWord(word: number): string {
  return `0x${word.toString(16).padStart(8, "0")}`;
}

function describeCase(capstoneCase: (typeof SUPPORTED_CAPSTONE_CASES)[number]): string {
  return `${capstoneCase.sourceFile}#${capstoneCase.caseIndex} ${capstoneCase.mnemonic} ${formatWord(capstoneCase.word)}`;
}

test("supported capstone cases decode through supported XML encodings", () => {
  for (const capstoneCase of SUPPORTED_CAPSTONE_CASES) {
    const decoded = decode(capstoneCase.word, { features: capstoneCase.features });
    assert.equal(decoded.status, "ok", describeCase(capstoneCase));
    assert.equal(decoded.encoding?.fileName, capstoneCase.encodingFile, describeCase(capstoneCase));
    assert.equal(decoded.mnemonic, capstoneCase.mnemonic, describeCase(capstoneCase));

    const rendered = disasm(capstoneCase.word, undefined, { features: capstoneCase.features });
    assert.notEqual(rendered, `.inst ${formatWord(capstoneCase.word)}`, describeCase(capstoneCase));
  }
});

test("unsupported capstone cases still fall back to raw .inst", () => {
  for (const capstoneCase of UNSUPPORTED_CAPSTONE_CASES) {
    const decoded = decode(capstoneCase.word, { features: capstoneCase.features });
    assert.notEqual(decoded.status, "ok", describeCase(capstoneCase));
    assert.equal(
      disasm(capstoneCase.word, undefined, { features: capstoneCase.features }),
      `.inst ${formatWord(capstoneCase.word)}`,
      describeCase(capstoneCase),
    );
  }
});
