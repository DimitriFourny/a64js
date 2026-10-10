import test from "node:test";
import assert from "node:assert/strict";
import { decode, disasm, disasmBlock } from "../src/index.ts";

test("instruction inputs reject truncation and normalize signed bitwise words", () => {
  for (const word of [NaN, Infinity, 1.5, 0x1_0000_0000, -0x8000_0001]) {
    assert.throws(() => decode(word), RangeError);
  }
  assert.equal(decode(0xd65f03c0 | 0).word, 0xd65f03c0);
  assert.equal(disasm(0xd65f03c0 | 0), "ret");
});

test("partial blocks require an explicit truncation policy", () => {
  const bytes = new Uint8Array([0xc0, 0x03, 0x5f, 0xd6, 0xff]);
  assert.throws(() => disasmBlock(bytes, 0n), /multiple of four/);
  assert.equal(disasmBlock(bytes, 0n, { trailingBytes: "ignore" }).length, 1);
  assert.deepEqual(disasmBlock(new Uint8Array(), 0n), []);
});

test("block feature iterators apply to every instruction", () => {
  const bytes = new Uint8Array([0x3f, 0x23, 0x03, 0xd5, 0x3f, 0x23, 0x03, 0xd5]);
  function* features() { yield "FEAT_PAuth"; }
  const lines = disasmBlock(bytes, 0x1000n, { features: features() });
  assert.deepEqual(lines.map((line) => line.text), ["paciasp", "paciasp"]);
});

test("addresses preserve bigint precision and use the supplied options PC", () => {
  assert.throws(() => disasm(0x10000020, Number.MAX_SAFE_INTEGER + 1), /safe integers/);
  assert.throws(() => disasmBlock(new Uint8Array(), 1.5), /safe integers/);
  assert.equal(disasm(0x10000020, undefined, { pc: 0x1000n }), "adr x0, 0x1004");
  assert.equal(disasm(0x10000020, 0x2000n, { pc: 0x1000n }), "adr x0, 0x2004");
});

test("shifted arithmetic immediates are shifted exactly once", () => {
  assert.equal(disasm(0x91400420), "add x0, x1, #0x1, lsl #12");
  const immediate = decode(0x91400420).operands?.[2];
  assert.deepEqual(immediate, { kind: "imm", value: 1n, shift: 12 });
});

test("ADRP sign extension keeps all 33 offset bits and aligns the PC page", () => {
  const positive = decode(0xf07fffe0).operands?.[1];
  assert.equal(positive?.kind, "label");
  if (positive?.kind === "label") assert.equal(positive.offset, 0xfffff000n);
  const negative = decode(0x90800000).operands?.[1];
  if (negative?.kind === "label") assert.equal(negative.offset, -0x100000000n);
  else assert.fail("missing ADRP label");
  assert.equal(disasm(0x90000000, 0x1234n), "adrp x0, 0x1000");
});
