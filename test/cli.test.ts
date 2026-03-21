import test from "node:test";
import assert from "node:assert/strict";
import { run } from "../src/cli.ts";

test("disassembles a single instruction through the CLI option", () => {
  assert.equal(run(["--disasm", "0xd65f03c0"]), "ret");
});

test("resolves PC-relative operands from the CLI", () => {
  assert.equal(run(["--disasm", "0x10000020", "--pc", "0x1000"]), "adr x0, 0x1004");
});

test("accepts repeatable feature flags in the CLI", () => {
  assert.equal(
    run([
      "--disasm",
      "0xd503233f",
      "--feature",
      "FEAT_PAuth",
      "--feature",
      "FEAT_PAuth_LR",
      "--feature",
      "FEAT_BTI",
    ]),
    "paciasp",
  );
});
