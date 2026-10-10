import test from "node:test";
import assert from "node:assert/strict";
import { decode, disasm } from "../src/index.ts";

test("SVE aliases inherit canonical validity while either documented feature branch enables them", () => {
  // EOR immediate, also described by the EON alias page.
  const word = 0x05403e25;
  assert.equal(decode(word).status, "undefined");
  for (const feature of ["FEAT_SVE", "FEAT_SME"]) {
    const instruction = decode(word, { features: [feature] });
    assert.equal(instruction.status, "ok");
    assert.equal(instruction.availability, "available");
    assert.equal(instruction.encoding?.canonicalFileName, "eor_z_zi.xml");
    assert.equal(instruction.encoding?.canonicalEncodingId, "eor_z_zi_");
    assert.equal(instruction.fields?.imm13, 497);
    assert.equal(disasm(word, undefined, { features: [feature] }), "eor z5.b, z5.b, #0x6");
  }
  assert.equal(decode(word, { features: ["FEAT_SVE || FEAT_SME"] }).status, "undefined");
});

test("FP8 helper feature availability honors both conjunction and streaming alternative", () => {
  // FDOT z0.h, z0.b, z0.b[0]: HaveSVE2FP8DOT2 = (SVE2 && FP8DOT2) || SSVE_FP8DOT2.
  for (const sve of [false, true]) for (const dot of [false, true]) for (const streaming of [false, true]) {
    const features = [
      ...(sve ? ["FEAT_SVE2"] : []),
      ...(dot ? ["FEAT_FP8DOT2"] : []),
      ...(streaming ? ["FEAT_SSVE_FP8DOT2"] : []),
    ];
    const decoded = decode(0x64204400, { features });
    assert.equal(decoded.status, (sve && dot) || streaming ? "ok" : "undefined", JSON.stringify(features));
    assert.equal(decoded.availability, (sve && dot) || streaming ? "available" : "unavailable");
  }
});

test("named hints take precedence over HINT and feature fallback keeps their identity", () => {
  for (const [word, feature, mnemonic, assembly] of [
    [0xd50320df, "FEAT_DGH", "DGH", "dgh"],
    [0xd503221f, "FEAT_RAS", "ESB", "esb"],
    [0xd503225f, "FEAT_TRF", "TSB", "tsb csync"],
    [0xd503227f, "FEAT_GCS", "GCSB", "gcsb dsync"],
    [0xd50322df, "FEAT_CLRBHB", "CLRBHB", "clrbhb"],
    [0xd503251f, "FEAT_CHK", "CHKFEAT", "chkfeat x16"],
  ] as const) {
    const missing = decode(word);
    assert.equal(missing.status, "ok");
    assert.equal(missing.mnemonic, mnemonic);
    assert.equal(missing.behavior, "nop");
    assert.equal(missing.availability, "unavailable");
    assert.equal(disasm(word, undefined, { onUnknown: "error" }), "nop");
    const enabled = decode(word, { features: [feature] });
    assert.equal(enabled.mnemonic, mnemonic);
    assert.equal(enabled.behavior, "instruction");
    assert.equal(enabled.availability, "available");
    assert.equal(disasm(word, undefined, { features: [feature], onUnknown: "error" }), assembly);
  }
});

test("recognized permanent undefined instructions remain distinct from malformed bitfields", () => {
  assert.equal(disasm(0x0000ffff, undefined, { onUnknown: "error" }), "udf #65535");
  assert.equal(decode(0x0000ffff).behavior, "undefined");
  assert.equal(decode(0x0000ffff).availability, "available");
  assert.equal(decode(0x53200020).status, "undefined");
  assert.throws(() => disasm(0x53200020, undefined, { onUnknown: "error" }), /decode guard/);
});
