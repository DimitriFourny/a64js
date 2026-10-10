import test from "node:test";
import assert from "node:assert/strict";
import { decode, disasm } from "../src/index.ts";

test("bitfield aliases inherit canonical validity for all immediate combinations", () => {
  for (let immr = 0; immr < 64; immr++) {
    for (let imms = 0; imms < 64; imms++) {
      const word = (0x53000020 | (immr << 16) | (imms << 10)) >>> 0;
      assert.equal(decode(word).status === "ok", immr < 32 && imms < 32, word.toString(16));
    }
  }
  assert.equal(disasm(0x53008020), ".inst 0x53008020");
  assert.equal(disasm(0x53200020), ".inst 0x53200020");
});

test("logical immediate validity rejects reserved bitmasks instead of dropping operands", () => {
  // Independent DecodeBitMasks validity conditions; rotation does not affect validity.
  for (let sf = 0; sf <= 1; sf++) {
    for (let n = 0; n <= 1; n++) {
      for (let imms = 0; imms < 64; imms++) {
        for (const immr of [0, 1, 31, 32, 63]) {
          const word = (0x12000020 | (sf << 31) | (n << 22) | (immr << 16) | (imms << 10)) >>> 0;
          const length = 31 - Math.clz32((n << 6) | ((~imms) & 63));
          const levels = (1 << length) - 1;
          const valid = (sf === 1 || n === 0) && length >= 1 && (imms & levels) !== levels;
          assert.equal(decode(word).status === "ok", valid, word.toString(16));
        }
      }
    }
  }
  assert.throws(() => disasm(0x1200fc20, undefined, { onUnknown: "error" }), /logical immediate/);
});

test("feature-disabled hints preserve their recognized identity and NOP behavior", () => {
  for (const [word, feature, mnemonic] of [
    [0xd503245f, "FEAT_BTI", "BTI"],
    [0xd503233f, "FEAT_PAuth", "PACIASP"],
  ] as const) {
    const disabled = decode(word);
    assert.equal(disabled.status, "ok");
    assert.equal(disabled.mnemonic, mnemonic);
    assert.equal(disabled.behavior, "nop");
    assert.equal(disabled.availability, "unavailable");
    assert.equal(disasm(word), "nop");
    assert.equal(decode(word, { features: [feature] }).behavior, "instruction");
  }
  assert.equal(decode(0xdac10020).status, "undefined");
});

test("named permanent traps and unconditional hints retain their assembly", () => {
  assert.equal(disasm(0x00000201), "udf #513");
  assert.equal(decode(0x00000201).behavior, "undefined");
  assert.equal(disasm(0xd5032fff), "hint #127");
  assert.equal(decode(0xd5032fff).behavior, "nop");
});
