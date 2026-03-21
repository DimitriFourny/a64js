import test from "node:test";
import assert from "node:assert/strict";
import { decode, disasm } from "../src/index.ts";

const FEATURES = {
  features: ["FEAT_PAuth", "FEAT_PAuth_LR", "FEAT_BTI"],
} as const;

test("decodes ADR and resolves the PC-relative label", () => {
  assert.equal(disasm(0x10000020, 0x1000n), "adr x0, 0x1004");
});

test("decodes BL immediate", () => {
  assert.equal(disasm(0x94000010, 0x2000n), "bl 0x2040");
});

test("decodes RET default operand elision", () => {
  assert.equal(disasm(0xd65f03c0), "ret");
});

test("decodes TBZ", () => {
  assert.equal(disasm(0x36280041, 0x4000n), "tbz w1, #0x5, 0x4008");
});

test("decodes MOVZ with shift", () => {
  assert.equal(disasm(0xd2a24682), "movz x2, #0x1234, lsl #16");
});

test("decodes MRS with generic system register syntax", () => {
  assert.equal(disasm(0xd53802e0), "mrs x0, S3_0_C0_C2_7");
});

test("decodes MSR (register) with generic system register syntax", () => {
  assert.equal(disasm(0xd5181020), "msr S3_0_C1_C0_1, x0");
});

test("decodes PACIASP from XML-generated data", () => {
  const decoded = decode(0xd503233f, FEATURES);
  assert.equal(decoded.status, "ok");
  assert.equal(decoded.mnemonic, "PACIASP");
  assert.equal(disasm(0xd503233f, undefined, FEATURES), "paciasp");
});

test("decodes BRAAZ", () => {
  const decoded = decode(0xd61f081f, FEATURES);
  assert.equal(decoded.status, "ok");
  assert.equal(decoded.mnemonic, "BRAAZ");
  assert.equal(disasm(0xd61f081f, undefined, FEATURES), "braaz x0");
});

test("decodes MRS with generic system register formatting", () => {
  assert.equal(disasm(0xd53802e0), "mrs x0, S3_0_C0_C2_7");
});

test("decodes MSR with generic system register formatting", () => {
  assert.equal(disasm(0xd51ff200), "msr S3_7_C15_C2_0, x0");
});

test("decodes SVE MOVPRFX", () => {
  assert.equal(disasm(0x0420bff7, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "movprfx z23, z31");
});

test("decodes SVE FCPY using the FMOV alias", () => {
  assert.equal(disasm(0x0550d800, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "fmov z0.h, p0/m, #-0.12500000");
});

test("decodes SVE FDUP using the FMOV alias", () => {
  assert.equal(disasm(0x2579d800, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "fmov z0.h, #-0.12500000");
});

test("marks feature-gated PAuth instructions undefined when features are disabled", () => {
  const decoded = decode(0xd503233f);
  assert.equal(decoded.status, "undefined");
});
