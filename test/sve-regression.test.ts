import test from "node:test";
import assert from "node:assert/strict";
import { decode, disasm } from "../src/index.ts";

const sve = { features: ["FEAT_SVE"] };
const sme = { features: ["FEAT_SME2"] };

test("SVE integer unary operands preserve every encoded size, predicate, and register", () => {
  for (const [size, lane] of ["b", "h", "s", "d"].entries()) {
    for (const index of [0, 7, 15, 31]) {
      const source = 31 - index;
      const predicate = index & 7;
      const word = (0x0416_a000 | (size << 22) | (predicate << 10) | (source << 5) | index) >>> 0;
      assert.equal(disasm(word, undefined, sve), `abs z${index}.${lane}, p${predicate}/m, z${source}.${lane}`);
      const operands = decode(word, sve).operands!;
      assert.equal(operands.length, 3);
      assert.equal(operands[0].kind, "vec");
    }
  }
});

test("SME memory groups use encoded contiguous alignment and interleaved stride", () => {
  for (const count of [2, 4]) {
    const countBit = count === 4 ? 0x8000 : 0;
    for (const strided of [false, true]) {
      const base = (strided ? 0xa100_0000 : 0xa000_0000) | countBit;
      const starts = strided ? (count === 2 ? [0, 3, 7, 16, 19, 23] : [0, 1, 3, 16, 17, 19])
        : Array.from({ length: 32 / count }, (_, index) => index * count);
      for (const start of starts) {
        const word = (base | start | (5 << 10) | (13 << 5) | (8 << 16)) >>> 0;
        const registers = Array.from({ length: count }, (_, index) => `z${start + index * (strided ? 16 / count : 1)}.b`);
        const group = !strided && count === 4
          ? `{ z${start}.b - z${start + count - 1}.b }`
          : `{ ${registers.join(", ")} }`;
        assert.equal(disasm(word, undefined, sme), `ld1b ${group}, pn13/z, [x13, x8]`);
      }
    }
  }
});

test("SVE arithmetic distinguishes signed, unsigned, widened, and indexed operands", () => {
  const unsignedCompare = decode(0x243f_c010, sve);
  assert.equal(unsignedCompare.mnemonic, "CMPHI");
  const compareOperands = unsignedCompare.operands!;
  assert.equal(compareOperands.length, 4);
  assert.equal(compareOperands[0].kind, "pred");
  if (compareOperands[0].kind === "pred") {
    assert.equal(compareOperands[0].index, 0);
    assert.equal(compareOperands[0].lane, "b");
  }
  assert.equal(compareOperands[1].kind, "pred");
  if (compareOperands[1].kind === "pred") {
    assert.equal(compareOperands[1].index, 0);
    assert.equal(compareOperands[1].mode, "z");
  }
  assert.deepEqual(compareOperands[2], { kind: "vec", index: 0, lane: "b" });
  assert.deepEqual(compareOperands[3], { kind: "imm", value: 127n, signed: false });
  for (const [word, expected, features] of [
    [0x2530_d01f, "mul z31.b, z31.b, #-128", ["FEAT_SVE"]],
    [0x0428_9c00, "lsl z0.b, z0.b, #0", ["FEAT_SVE"]],
    [0x4508_a000, "sshllb z0.h, z0.b, #0", ["FEAT_SVE2"]],
    [0x4542_4020, "saddwb z0.h, z1.h, z2.b", ["FEAT_SVE2"]],
    [0x447f_f820, "mul z0.h, z1.h, z7.h[7]", ["FEAT_SVE2"]],
    [0x655e_8000, "fmax z0.h, p0/m, z0.h, #0.0", ["FEAT_SVE"]],
  ] as const) {
    assert.equal(disasm(word, undefined, { features: [...features] }), expected);
  }
});
