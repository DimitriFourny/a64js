import test from "node:test";
import assert from "node:assert/strict";
import { canonicalizeCapstoneAssembly, compareCapstoneAssembly, splitAssembly } from "./helpers/capstone-assembly.ts";

function compare(expected: string, actual: string, word = 0) {
  return compareCapstoneAssembly({ sourceFile: "normalizer-test", caseIndex: 0, word, asmText: expected }, actual);
}

test("assembly normalization changes spelling while retaining operand structure", () => {
  assert.deepEqual(splitAssembly("ld1w { z0.s, z1.s }, p0/z, [x0, #16, mul vl]"), {
    mnemonic: "ld1w", operands: ["{ z0.s, z1.s }", "p0/z", "[x0, #16, mul vl]"],
  });
  assert.equal(canonicalizeCapstoneAssembly("ADD X0, X1, #0x10"), "add x0,x1,#16");
  assert.ok(compare("b #-4", "b .-0x4").matches);
  assert.ok(compare("cbnz x3, #0xfffffffffffffffc", "cbnz x3, .-0x4").matches);
  assert.ok(compare("mov x10, #-6148914691236517206", "mov x10, #0xaaaaaaaaaaaaaaaa").matches);
  assert.ok(compare("fmov s0, #1.00000000", "fmov s0, #1.0").matches);
  assert.ok(compare("ld1w { z0.s - z3.s }, p0/z, [x0]", "ld1w {z0.s,z1.s,z2.s,z3.s}, p0/z, [x0]").matches);
});

test("reviewed aliases require all equality and default conditions", () => {
  assert.ok(compare("sshll2 v0.4s, v1.8h, #0", "sxtl2 v0.4s, v1.8h").matches);
  assert.ok(compare("not p0.b, p1/z, p2.b", "eor p0.b, p1/z, p2.b, p1.b").matches);
  assert.ok(compare("mov v0.16b, v1.16b", "orr v0.16b, v1.16b, v1.16b").matches);
  assert.ok(compare("add x0, x1, x2, asr #0", "add x0, x1, x2").matches);
  assert.ok(compare("ldr x0, [x1, w2, uxtw #0]", "ldr x0, [x1, w2, uxtw]").matches);
  assert.ok(compare("cmp x3, x13, uxtx #4", "cmp x3, x13, lsl #4").matches);
  assert.ok(compare("dcps1", "dcps1 #0").matches);
  assert.equal(compare("sshll v0.4s, v1.4h, #1", "sxtl v0.4s, v1.4h").matches, false);
  assert.equal(compare("not p0.b, p1/z, p2.b", "eor p0.b, p1/z, p2.b, p3.b").matches, false);
  assert.equal(compare("orr v0.16b, v1.16b, v2.16b", "mov v0.16b, v1.16b").matches, false);
});

test("omitted, extra, and wrong operands are rejected", () => {
  for (const [expected, actual] of [
    ["add x0, x1, x2", "add"],
    ["add x0, x1, x2", "add x0, x1"],
    ["add x0, x1, x2", "add x0, x1, x3"],
    ["fmla z0.s, z1.s, z2.s", "fmla z0.d, z1.d, z2.d"],
    ["sdot za.s[w8, 0, vgx2], {z0.b, z1.b}, z2.b[3]", "sdot za.s[w8, 0, vgx2], {z0.b, z1.b}, z2.b[6]"],
    ["ldr x0, [x1, #16]", "ldr x0, [x1, #8]"],
    ["ldr x0, [x1, #16]!", "ldr x0, [x1, #16]"],
    ["add x0, x1, #1, lsl #12", "add x0, x1, #4096, lsl #12"],
    ["rdsvl x0, #-1", "rdsvl x0, #0x-1"],
    ["ld1w {z0.s,z1.s}, p0/z, [x0]", "ld1w {z0.s,z2.s}, p0/z, [x0]"],
    ["dcps1", "dcps1 #1"],
  ]) assert.equal(compare(expected, actual).matches, false, `${expected} must differ from ${actual}`);
});

test("named system register exclusion checks the independently encoded tuple and GP registers", () => {
  const fixture = { sourceFile: "sysreg-test", caseIndex: 0, word: 0xd538_2100, asmText: "mrs x0, APIAKeyLo_EL1" };
  const match = compareCapstoneAssembly(fixture, "mrs x0, S3_0_C2_C1_0");
  assert.ok(match.matches);
  assert.equal(match.exclusion, "named-system-register");
  assert.equal(compareCapstoneAssembly(fixture, "mrs x0, S3_0_C2_C1_1").matches, false);
  assert.equal(compareCapstoneAssembly(fixture, "mrs x1, S3_0_C2_C1_0").matches, false);
  assert.equal(compareCapstoneAssembly(fixture, "mrs x0").matches, false);
});

test("ADRP comparison preserves the full signed 33-bit byte offset", () => {
  const fixture = { sourceFile: "basic-a64-instructions.s.yaml", caseIndex: 1340, word: 0xf07f_ffe9, asmText: "adrp x9, #4294963200" };
  assert.ok(compareCapstoneAssembly(fixture, "adrp x9, .+0xfffff000").matches);
  assert.equal(compareCapstoneAssembly(fixture, "adrp x9, .-0x1000").matches, false);
  assert.equal(compare("adrp x20, #-4294967296", "adrp x20, .+0x0").matches, false);
});
