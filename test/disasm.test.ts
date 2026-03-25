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

test("decodes MRRS with generic system register syntax", () => {
  assert.equal(disasm(3581419520, undefined, { features: ["FEAT_SYSREG128"] }), "mrrs x0, x1, S3_0_C2_C0_0");
});

test("decodes MSRR with generic system register syntax", () => {
  assert.equal(disasm(3579322368, undefined, { features: ["FEAT_SYSREG128"] }), "msrr S3_0_C2_C0_0, x0, x1");
});

test("decodes LDAPR base-register and post-index forms", () => {
  assert.equal(disasm(0xb8bfc020, undefined, { features: ["FEAT_LRCPC"] }), "ldapr w0, [x1]");
  assert.equal(disasm(0xf8bfc000, undefined, { features: ["FEAT_LRCPC"] }), "ldapr x0, [x0]");
  assert.equal(disasm(0x99c00be3, undefined, { features: ["FEAT_LRCPC3"] }), "ldapr w3, [sp], #4");
  assert.equal(disasm(0xd9c009e3, undefined, { features: ["FEAT_LRCPC3"] }), "ldapr x3, [x15], #8");
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

test("decodes predicated SVE MOVPRFX", () => {
  assert.equal(disasm(0x04d03cc4, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "movprfx z4.d, p7/z, z6.d");
});

test("decodes SVE FCPY using the FMOV alias", () => {
  assert.equal(disasm(0x0550d800, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "fmov z0.h, p0/m, #-0.12500000");
});

test("decodes SVE FDUP using the FMOV alias", () => {
  assert.equal(disasm(0x2579d800, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "fmov z0.h, #-0.12500000");
});

test("decodes SVE compare immediate", () => {
  assert.equal(disasm(0x25108000, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "cmpeq p0.b, p0/z, z0.b, #-16");
});

test("decodes SVE compare vector", () => {
  assert.equal(disasm(0x2400a000, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "cmpeq p0.b, p0/z, z0.b, z0.b");
});

test("decodes SVE compare wide-vector forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(603987968, undefined, options), "cmpeq p0.b, p0/z, z0.b, z0.d");
  assert.equal(disasm(608198656, undefined, options), "cmplt p0.h, p0/z, z0.h, z0.d");
  assert.equal(disasm(612425744, undefined, options), "cmpls p0.s, p0/z, z0.s, z0.d");
});

test("decodes PTRUE predicate patterns", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(622387200, undefined, options), "ptrue p0.b, pow2");
  assert.equal(disasm(630776743, undefined, options), "ptrue p7.s, mul4");
  assert.equal(disasm(630776807, undefined, options), "ptrue p7.s");
});

test("decodes PTRUES predicate patterns", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(630842279, undefined, options), "ptrues p7.s, mul4");
  assert.equal(disasm(630842343, undefined, options), "ptrues p7.s");
});

test("decodes SVE predicated FRINT* unary forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(1699004415, undefined, options), "frinta z31.h, p7/m, z31.h");
  assert.equal(disasm(1707589604, undefined, options), "frinti z4.d, p7/m, z31.d");
  assert.equal(disasm(1707524095, undefined, options), "frintx z31.d, p7/m, z31.d");
});

test("decodes SVE scalar-plus-immediate prefetch forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(2243952640, undefined, options), "prfb pldl1keep, p0, [x0]");
  assert.equal(disasm(2243952654, undefined, options), "prfb #14, p0, [x0]");
  assert.equal(disasm(2245992417, undefined, options), "prfb pldl1strm, p7, [sp, #31, mul vl]");
  assert.equal(disasm(2243977216, undefined, options), "prfd pldl1keep, p0, [x0]");
  assert.equal(disasm(2243960832, undefined, options), "prfh pldl1keep, p0, [x0]");
  assert.equal(disasm(2243969024, undefined, options), "prfw pldl1keep, p0, [x0]");
});

test("decodes SVE INCB and DECB scalar patterns", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(0x0430e3e0, undefined, options), "incb x0");
  assert.equal(disasm(0x0430e400, undefined, options), "decb x0, pow2");
  assert.equal(disasm(0x043fe7e0, undefined, options), "decb x0, all, mul #16");
});

test("decodes signed SVE scalar saturating INCB and DECB forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(70317024, undefined, options), "sqincb x0");
  assert.equal(disasm(69268448, undefined, options), "sqincb x0, w0");
  assert.equal(disasm(70319072, undefined, options), "sqdecb x0");
  assert.equal(disasm(69270496, undefined, options), "sqdecb x0, w0");
});

test("decodes unsigned SVE scalar saturating INCB and DECB forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(70318048, undefined, options), "uqincb x0");
  assert.equal(disasm(69269472, undefined, options), "uqincb w0");
  assert.equal(disasm(70320096, undefined, options), "uqdecb x0");
  assert.equal(disasm(69271520, undefined, options), "uqdecb w0");
});

test("decodes SVE DUP indexed mov aliases", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(86056960, undefined, options), "mov z0.b, b0");
  assert.equal(disasm(86122496, undefined, options), "mov z0.h, h0");
  assert.equal(disasm(100606975, undefined, options), "mov z31.b, z31.b[63]");
  assert.equal(disasm(100148223, undefined, options), "mov z31.d, z31.d[7]");
  assert.equal(disasm(99623461, undefined, options), "mov z5.q, z17.q[3]");
});

test("decodes SME MOVA aliases", () => {
  assert.equal(disasm(0xc0020000, undefined, { features: ["FEAT_SME"] }), "mov z0.b, p0/m, za0h.b[w12, 0]");
  assert.equal(disasm(0xc0000000, undefined, { features: ["FEAT_SME"] }), "mov za0h.b[w12, 0], p0/m, z0.b");
});

test("decodes SME2 MOVA multi-vector aliases", () => {
  assert.equal(disasm(0xc0460000, undefined, { features: ["FEAT_SME2"] }), "mov { z0.h, z1.h }, za0h.h[w12, 0:1]");
  assert.equal(disasm(0xc0440000, undefined, { features: ["FEAT_SME2"] }), "mov za0h.h[w12, 0:1], { z0.h, z1.h }");
  assert.equal(disasm(0xc0060800, undefined, { features: ["FEAT_SME2"] }), "mov { z0.d, z1.d }, za.d[w8, 0, vgx2]");
  assert.equal(disasm(0xc0040800, undefined, { features: ["FEAT_SME2"] }), "mov za.d[w8, 0, vgx2], { z0.d, z1.d }");
});

test("decodes SME2 FMLAL and FMLSL long multiply-accumulate forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(3240102912, undefined, options), "fmlal za.s[w8, 0:1], z0.h, z0.h");
  assert.equal(disasm(3246395392, undefined, options), "fmlal za.s[w8, 0:1], z0.h, z0.h[0]");
  assert.equal(disasm(3248490496, undefined, options), "fmlal za.s[w8, 0:1, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
  assert.equal(disasm(3240102920, undefined, options), "fmlsl za.s[w8, 0:1], z0.h, z0.h");
  assert.equal(disasm(3246395400, undefined, options), "fmlsl za.s[w8, 0:1], z0.h, z0.h[0]");
  assert.equal(disasm(3248490504, undefined, options), "fmlsl za.s[w8, 0:1, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
});

test("decodes SME2 BFMLAL and BFMLSL long multiply-accumulate forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(3240102928, undefined, options), "bfmlal za.s[w8, 0:1], z0.h, z0.h");
  assert.equal(disasm(3246395408, undefined, options), "bfmlal za.s[w8, 0:1], z0.h, z0.h[0]");
  assert.equal(disasm(3248490512, undefined, options), "bfmlal za.s[w8, 0:1, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
  assert.equal(disasm(3240102936, undefined, options), "bfmlsl za.s[w8, 0:1], z0.h, z0.h");
  assert.equal(disasm(3246395416, undefined, options), "bfmlsl za.s[w8, 0:1], z0.h, z0.h[0]");
  assert.equal(disasm(3248490520, undefined, options), "bfmlsl za.s[w8, 0:1, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
});

test("decodes SME2 SMLAL, SMLSL, and UMLAL long multiply-accumulate forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(3244297216, undefined, options), "smlal za.s[w8, 0:1], z0.h, z0.h");
  assert.equal(disasm(3250589696, undefined, options), "smlal za.s[w8, 0:1], z0.h, z0.h[0]");
  assert.equal(disasm(3252684800, undefined, options), "smlal za.s[w8, 0:1, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
  assert.equal(disasm(3244297224, undefined, options), "smlsl za.s[w8, 0:1], z0.h, z0.h");
  assert.equal(disasm(3250589704, undefined, options), "smlsl za.s[w8, 0:1], z0.h, z0.h[0]");
  assert.equal(disasm(3252684808, undefined, options), "smlsl za.s[w8, 0:1, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
  assert.equal(disasm(3244297232, undefined, options), "umlal za.s[w8, 0:1], z0.h, z0.h");
  assert.equal(disasm(3250589712, undefined, options), "umlal za.s[w8, 0:1], z0.h, z0.h[0]");
  assert.equal(disasm(3252684816, undefined, options), "umlal za.s[w8, 0:1, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
});

test("decodes SME2 SUMLALL, USMLALL, and UMLSL mixed-sign long multiply-accumulate forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(0xc1000014, undefined, options), "sumlall za.s[w8, 0:3], z0.b, z0.b[0]");
  assert.equal(disasm(0xc1200014, undefined, options), "sumlall za.s[w8, 0:3, vgx2], { z0.b, z1.b }, z0.b");
  assert.equal(disasm(0xc1000004, undefined, options), "usmlall za.s[w8, 0:3], z0.b, z0.b[0]");
  assert.equal(disasm(0xc1200004, undefined, options), "usmlall za.s[w8, 0:3, vgx2], { z0.b, z1.b }, z0.b");
  assert.equal(disasm(0xc1a00004, undefined, options), "usmlall za.s[w8, 0:3, vgx2], { z0.b, z1.b }, { z0.b, z1.b }");
  assert.equal(disasm(0xc1600c18, undefined, options), "umlsl za.s[w8, 0:1], z0.h, z0.h");
  assert.equal(disasm(0xc1c01018, undefined, options), "umlsl za.s[w8, 0:1], z0.h, z0.h[0]");
  assert.equal(disasm(0xc1600818, undefined, options), "umlsl za.s[w8, 0:1, vgx2], { z0.h, z1.h }, z0.h");
  assert.equal(disasm(0xc1e00818, undefined, options), "umlsl za.s[w8, 0:1, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
});

test("decodes SME2 BFDOT dot-product forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(3240103952, undefined, options), "bfdot za.s[w8, 0, vgx2], { z0.h, z1.h }, z0.h");
  assert.equal(disasm(3243249688, undefined, options), "bfdot za.s[w8, 0, vgx2], { z0.h, z1.h }, z0.h[0]");
  assert.equal(disasm(3248492560, undefined, options), "bfdot za.s[w8, 0, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
});

test("decodes SME2 BFADD/BFMLA/BFMLS BF16 arithmetic forms", () => {
  const options = { features: ["FEAT_SME_B16B16"] };
  assert.equal(disasm(3252952064, undefined, options), "bfadd za.h[w8, 0, vgx2], { z0.h, z1.h }");
  assert.equal(disasm(3253043079, undefined, options), "bfadd za.h[w11, 7, vgx4], { z28.h - z31.h }");
  assert.equal(disasm(3239055392, undefined, options), "bfmla za.h[w8, 0, vgx2], { z0.h, z1.h }, z0.h[0]");
  assert.equal(disasm(3252686856, undefined, options), "bfmla za.h[w8, 0, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
  assert.equal(disasm(3245349896, undefined, options), "bfmls za.h[w8, 0, vgx4], { z0.h - z3.h }, z0.h");
  assert.equal(disasm(3252686872, undefined, options), "bfmls za.h[w8, 0, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
});

test("decodes SME2 BFSUB BF16 arithmetic forms", () => {
  const options = { features: ["FEAT_SME_B16B16"] };
  assert.equal(disasm(3252952072, undefined, options), "bfsub za.h[w8, 0, vgx2], { z0.h, z1.h }");
  assert.equal(disasm(3253043087, undefined, options), "bfsub za.h[w11, 7, vgx4], { z28.h - z31.h }");
});

test("decodes AdvSIMD multiple-structure LD1/ST1", () => {
  const options = { features: ["FEAT_AdvSIMD"] };
  assert.equal(disasm(0x4c007000, undefined, options), "st1 { v0.16b }, [x0]");
  assert.equal(disasm(0x4c407000, undefined, options), "ld1 { v0.16b }, [x0]");
  assert.equal(disasm(0x4c402bff, undefined, options), "ld1 { v31.4s, v0.4s, v1.4s, v2.4s }, [sp]");
});

test("decodes AdvSIMD dot-product vector and lane forms", () => {
  const options = { features: ["FEAT_DotProd"] };
  assert.equal(disasm(0x2e829420, undefined, options), "udot v0.2s, v1.8b, v2.8b");
  assert.equal(disasm(0x0e829420, undefined, options), "sdot v0.2s, v1.8b, v2.8b");
  assert.equal(disasm(0x6e829420, undefined, options), "udot v0.4s, v1.16b, v2.16b");
  assert.equal(disasm(0x4fa2e820, undefined, options), "sdot v0.4s, v1.16b, v2.4b[3]");
});

test("marks feature-gated PAuth instructions undefined when features are disabled", () => {
  const decoded = decode(0xd503233f);
  assert.equal(decoded.status, "undefined");
});
