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

test("decodes CPA checked-pointer arithmetic forms", () => {
  assert.equal(disasm(2583830560, undefined, { features: ["FEAT_CPA"] }), "addpt x0, x1, x2");
  assert.equal(disasm(2583838719, undefined, { features: ["FEAT_CPA"] }), "addpt sp, sp, x2, lsl #7");
  assert.equal(disasm(3657579552, undefined, { features: ["FEAT_CPA"] }), "subpt x0, x1, x2, lsl #7");
  assert.equal(disasm(2606894112, undefined, { features: ["FEAT_CPA"] }), "maddpt x0, x1, x2, x3");
  assert.equal(disasm(2606926880, undefined, { features: ["FEAT_CPA"] }), "msubpt x0, x1, x2, x3");
});

test("decodes GCS and CHK extension instructions", () => {
  assert.equal(disasm(3574298453, undefined, { features: ["FEAT_GCS"] }), "gcsss1 x21");
  assert.equal(disasm(3574298393, undefined, { features: ["FEAT_GCS"] }), "gcspushm x25");
  assert.equal(disasm(3573752447, undefined, { features: ["FEAT_GCS"] }), "gcsb dsync");
  assert.equal(disasm(3573753119, undefined, { features: ["FEAT_CHK"] }), "chkfeat x16");
});

test("decodes LDAPR base-register and post-index forms", () => {
  assert.equal(disasm(0xb8bfc020, undefined, { features: ["FEAT_LRCPC"] }), "ldapr w0, [x1]");
  assert.equal(disasm(0xf8bfc000, undefined, { features: ["FEAT_LRCPC"] }), "ldapr x0, [x0]");
  assert.equal(disasm(0x99c00be3, undefined, { features: ["FEAT_LRCPC3"] }), "ldapr w3, [sp], #4");
  assert.equal(disasm(0xd9c009e3, undefined, { features: ["FEAT_LRCPC3"] }), "ldapr x3, [x15], #8");
});

test("decodes scalar load/store immediate and unscaled forms", () => {
  assert.equal(disasm(4181723124), "ldr x20, [sp, #0x8]");
  assert.equal(disasm(3107980365), "ldr w13, [x2, #0x4]");
  assert.equal(disasm(4177527806), "str x30, [sp]");
  assert.equal(disasm(3107978388), "str w20, [x4, #0x3ffc]");
  assert.equal(disasm(3112174754), "ldrsw x2, [x5, #0x4]");
  assert.equal(disasm(2034237570), "ldrh w2, [x4]");
  assert.equal(disasm(960619642), "ldrb w26, [x3, #0x79]");
  assert.equal(disasm(2030050644), "strh w20, [x10, #0xe]");
  assert.equal(disasm(960494711), "strb w23, [x3, #0xfff]");
  assert.equal(disasm(3092247532), "ldur w12, [sp, #0xff]");
  assert.equal(disasm(3088056336), "stur w16, [x0, #-0x100]");
  assert.equal(disasm(3092250611), "ldr w19, [sp, #0xff]!");
  assert.equal(disasm(3088054259), "str w19, [sp], #0xff");
  assert.equal(disasm(3088059797), "str w21, [x12, #-0x100]!");
});

test("decodes core scalar memory pair, signed-load, register-offset, and prfm forms", () => {
  assert.equal(disasm(692066275), "ldp w3, w5, [sp]");
  assert.equal(disasm(683677667), "ldp w3, w5, [sp], #0");
  assert.equal(disasm(1765845993), "ldpsw x9, x10, [sp, #4]");
  assert.equal(disasm(3093789642), "ldr w10, [x30, x7, lsl #2]");
  assert.equal(disasm(3093556139), "ldr w11, [x29, x3, sxtx]");
  assert.equal(disasm(946072491), "ldrb w11, [x29, x3, sxtx]");
  assert.equal(disasm(2020047818), "ldrh w10, [x30, x7, lsl #1]");
  assert.equal(disasm(675326953), "ldnp w9, w10, [sp, #4]");
  assert.equal(disasm(740322299, undefined, { features: ["FEAT_FP"] }), "stnp s27, s26, [sp, #-256]");
  assert.equal(disasm(1006638048, undefined, { features: ["FEAT_FP"] }), "stur b0, [sp, #1]");
  assert.equal(disasm(1019224109, undefined, { features: ["FEAT_FP"] }), "ldur q13, [x1, #2]");
  assert.equal(disasm(947919970), "ldrsb x2, [x3, #1]!");
  assert.equal(disasm(2025856098), "ldrsh w2, [x3, #1]!");
  assert.equal(disasm(4185917408), "prfm pldl1keep, [sp, #8]");
  assert.equal(disasm(4185916399), "prfm plislcstrm, [sp]");
});

test("decodes the remaining core A64 scalar load/store promotion batch", () => {
  assert.equal(disasm(411041760), "ldr w0, #1048572");
  assert.equal(disasm(1484783626), "ldr x10, #-1048576");
  assert.equal(disasm(411041760, 0x1000n), "ldr w0, 0x100ffc");
  assert.equal(disasm(134315106), "stxrb w1, w2, [x3]");
  assert.equal(disasm(3355802854), "stxr w5, x6, [x7]");
  assert.equal(disasm(140475687), "ldxrb w7, [x9]");
  assert.equal(disasm(3363781101), "ldxp x13, x14, [x15]");
  assert.equal(disasm(3356688019), "stlxr w18, x19, [x20]");
  assert.equal(disasm(3361734389), "ldaxr x21, [x23]");
  assert.equal(disasm(3363828699), "ldaxp x27, x28, [x30]");
  assert.equal(disasm(3370122305), "ldar x1, [x2]");
  assert.equal(disasm(939525097), "sturb w9, [sp]");
  assert.equal(disasm(2014310815), "sturh wzr, [x12, #255]");
  assert.equal(disasm(944763521), "ldurb w1, [x20, #255]");
  assert.equal(disasm(3096445428), "ldursw x20, [x15, #-256]");
  assert.equal(disasm(4170187746), "prfum pldl2keep, [sp, #-256]");
  assert.equal(disasm(943717260), "strb w12, [x28, xzr, sxtx]");
  assert.equal(disasm(2015620011), "strh w11, [x29, x3, sxtx]");
  assert.equal(disasm(3098135281), "ldrsw x17, [x23, w9, sxtw]");
  assert.equal(disasm(4171647808), "prfm pldl1keep, [x26, w6, uxtw]");
  assert.equal(disasm(3088058384), "sttr w16, [x0, #-256]");
  assert.equal(disasm(3092249580), "ldtr w12, [sp, #255]");
  assert.equal(disasm(948963561), "ldtrsb x9, [x7, #-256]");
  assert.equal(disasm(673163263), "stnp wzr, w9, [sp, #252]");
  assert.equal(disasm(954690506), "ldrsb w10, [x30, x7]");
  assert.equal(disasm(950721234), "ldrsb x18, [x22, w10, sxtw]");
  assert.equal(disasm(2028493584), "ldrsh w16, [x24, w8, uxtw #1]");
  assert.equal(disasm(3089496941), "str w13, [x27, x5, sxtx #2]");
  assert.equal(disasm(4163267433), "str x9, [x27, x6]");
  assert.equal(disasm(689940479), "stp wzr, w9, [sp, #252]");
  assert.equal(disasm(681551871), "stp wzr, w9, [sp], #252");
  assert.equal(disasm(698329087), "stp wzr, w9, [sp, #252]!");
  assert.equal(disasm(2285887254), "stlxp wzr, w22, w23, [x24]");
  assert.equal(disasm(3359240186), "stlxp w25, x26, x27, [sp]");
  assert.equal(disasm(744485885, undefined, { features: ["FEAT_FP"] }), "ldnp s29, s28, [sp, #252]");
  assert.equal(disasm(2892002359, undefined, { features: ["FEAT_FP"] }), "ldnp q23, q29, [x1, #-1024]");
});

test("decodes add/sub extended-register forms and compare aliases", () => {
  assert.equal(disasm(2334457986), "add x2, x4, w5, uxtb");
  assert.equal(disasm(3408359551), "sub sp, x3, x7, lsl #4");
  assert.equal(disasm(186861538), "add w2, wsp, w3, lsl #1");
  assert.equal(disasm(2871419903), "cmn sp, x6");
  assert.equal(disasm(1797866495), "cmp wsp, w9");
  assert.equal(disasm(3946090303), "cmp x25, w20, sxtb #3");
});

test("decodes subtract-with-carry forms and ngc aliases", () => {
  assert.equal(disasm(1511588733), "sbc w29, w27, w25");
  assert.equal(disasm(1510605801), "ngc w9, w10");
  assert.equal(disasm(1511981076), "sbc w20, w0, wzr");
  assert.equal(disasm(3659072381), "sbc x29, x27, x25");
  assert.equal(disasm(3658089449), "ngc x9, x10");
  assert.equal(disasm(2048459645), "sbcs w29, w27, w25");
  assert.equal(disasm(2047476713), "ngcs w9, w10");
  assert.equal(disasm(4195943293), "sbcs x29, x27, x25");
  assert.equal(disasm(4194960361), "ngcs x9, x10");
  assert.equal(disasm(4196335636), "sbcs x20, x0, xzr");
});

test("decodes bitfield and shift-immediate aliases", () => {
  assert.equal(disasm(2474638467), "asr x3, x4, #63");
  assert.equal(disasm(2470837577), "asr x9, x10, #5");
  assert.equal(disasm(3545038021), "lsr x5, x6, #12");
  assert.equal(disasm(3548113225), "lsl x9, x10, #5");
  assert.equal(disasm(3544983716), "ubfiz x4, x5, #52, #11");
  assert.equal(disasm(1392509257), "ubfx w9, w10, #0, #1");
  assert.equal(disasm(3008112804), "bfi x4, x5, #52, #11");
  assert.equal(disasm(3008167109), "bfxil x5, x6, #12, #52");
  assert.equal(disasm(3011450852, undefined, { features: ["FEAT_ASMv8p2"] }), "bfi x4, xzr, #1, #6");
  assert.equal(disasm(3007992831, undefined, { features: ["FEAT_ASMv8p2"] }), "bfxil xzr, xzr, #10, #11");
  assert.equal(disasm(3010866175, undefined, { features: ["FEAT_ASMv8p2"] }), "bfi xzr, xzr, #10, #11");
  assert.equal(disasm(318774337), "sxtb w1, w2");
  assert.equal(disasm(2470452351), "sxtb xzr, w3");
  assert.equal(disasm(2470477763), "sxtw x3, w30");
  assert.equal(disasm(1392516161), "uxtb w1, w2");
  assert.equal(disasm(1392524617), "uxth w9, w10");
});

test("decodes conditional select forms and aliases", () => {
  assert.equal(disasm(445845505), "csel w1, w0, w19, ne");
  assert.equal(disasm(2592482277), "csel x5, xzr, x6, hs");
  assert.equal(disasm(446633955), "cset w3, eq");
  assert.equal(disasm(2594129897), "cset x9, pl");
  assert.equal(disasm(1520370676), "csetm w20, ne");
  assert.equal(disasm(3667899390), "csetm x30, ge");
  assert.equal(disasm(445846529), "csinc w1, w0, w19, ne");
  assert.equal(disasm(444978339), "cinc w3, w5, gt");
  assert.equal(disasm(1519587329), "csinv w1, w0, w19, ne");
  assert.equal(disasm(1518719139), "cinv w3, w5, gt");
  assert.equal(disasm(1519588353), "csneg w1, w0, w19, ne");
  assert.equal(disasm(3667896297), "cneg x9, xzr, lt");
});

test("decodes conditional compare immediate and register forms", () => {
  assert.equal(disasm(2053048352), "ccmp w1, #31, #0, eq");
  assert.equal(disasm(3126843680), "ccmn x9, #31, #0, le");
  assert.equal(disasm(4200583456), "ccmp x9, xzr, #0, le");
  assert.equal(disasm(977281135), "ccmn w3, w0, #15, hs");
});

test("decodes AdvSIMD FP8 miscellaneous forms", () => {
  const options = { features: ["FEAT_FP8"] } as const;
  assert.equal(disasm(782333952, undefined, options), "bf1cvtl v0.8h, v0.8b");
  assert.equal(disasm(1851881472, undefined, options), "f2cvtl2 v0.8h, v0.16b");
  assert.equal(disasm(239137792, undefined, options), "fcvtn v0.8b, v0.4h, v0.4h");
  assert.equal(disasm(1308685312, undefined, options), "fcvtn2 v0.16b, v0.4s, v0.4s");
  assert.equal(disasm(1858092032, undefined, options), "fscale v0.8h, v0.8h, v0.8h");
  assert.equal(disasm(1856044032, undefined, options), "fscale v0.4s, v0.4s, v0.4s");
});

test("decodes AdvSIMD integer matrix-multiply and mixed dot-product forms", () => {
  const options = { features: ["FEAT_I8MM"] } as const;
  assert.equal(disasm(1319085569, undefined, options), "smmla v1.4s, v16.16b, v31.16b");
  assert.equal(disasm(1855956481, undefined, options), "ummla v1.4s, v16.16b, v31.16b");
  assert.equal(disasm(1319087617, undefined, options), "usmmla v1.4s, v16.16b, v31.16b");
  assert.equal(disasm(245276131, undefined, options), "usdot v3.2s, v15.8b, v30.8b");
  assert.equal(disasm(1319017955, undefined, options), "usdot v3.4s, v15.16b, v30.16b");
  assert.equal(disasm(262338623, undefined, options), "usdot v31.2s, v1.8b, v2.4b[3]");
  assert.equal(disasm(1336080447, undefined, options), "usdot v31.4s, v1.16b, v2.4b[3]");
  assert.equal(disasm(253950015, undefined, options), "sudot v31.2s, v1.8b, v2.4b[3]");
  assert.equal(disasm(1327691839, undefined, options), "sudot v31.4s, v1.16b, v2.4b[3]");
});

test("decodes AdvSIMD absolute-difference and accumulate forms", () => {
  const options = { features: ["FEAT_AdvSIMD"] } as const;
  assert.equal(disasm(774011936, undefined, options), "uaba v0.8b, v1.8b, v2.8b");
  assert.equal(disasm(237141024, undefined, options), "saba v0.8b, v1.8b, v2.8b");
  assert.equal(disasm(782398496, undefined, options), "uabd v0.2s, v1.2s, v2.2s");
  assert.equal(disasm(1319269408, undefined, options), "sabd v0.4s, v1.4s, v2.4s");
  assert.equal(disasm(237129760, undefined, options), "sabal v0.8h, v1.8b, v2.8b");
  assert.equal(disasm(1856131104, undefined, options), "uabal2 v0.2d, v1.4s, v2.4s");
  assert.equal(disasm(1310879776, undefined, options), "sabdl2 v0.8h, v1.16b, v2.16b");
  assert.equal(disasm(778203168, undefined, options), "uabdl v0.4s, v1.4h, v2.4h");
});

test("decodes AdvSIMD add/sub and halving families", () => {
  const advsimdOptions = { features: ["FEAT_AdvSIMD"] } as const;
  const advsimdFp16Options = { features: ["FEAT_AdvSIMD", "FEAT_FP16"] } as const;
  assert.equal(disasm(1319273504, undefined, advsimdOptions), "add v0.4s, v1.4s, v2.4s");
  assert.equal(disasm(1860338720, undefined, advsimdOptions), "sub v0.2d, v1.2d, v2.2d");
  assert.equal(disasm(1312953376, undefined, advsimdFp16Options), "fadd v0.8h, v1.8h, v2.8h");
  assert.equal(disasm(1323488288, undefined, advsimdOptions), "fsub v0.2d, v1.2d, v2.2d");
  assert.equal(disasm(1319240736, undefined, advsimdOptions), "shadd v0.4s, v1.4s, v2.4s");
  assert.equal(disasm(1851917344, undefined, advsimdOptions), "uhadd v0.8h, v1.8h, v2.8h");
  assert.equal(disasm(245507104, undefined, advsimdOptions), "shsub v0.2s, v1.2s, v2.2s");
  assert.equal(disasm(1847731232, undefined, advsimdOptions), "uhsub v0.16b, v1.16b, v2.16b");
  assert.equal(disasm(1315050528, undefined, advsimdOptions), "srhadd v0.8h, v1.8h, v2.8h");
  assert.equal(disasm(782373920, undefined, advsimdOptions), "urhadd v0.2s, v1.2s, v2.2s");
});

test("decodes complex arithmetic rotates and applies FP16 gating only to half-precision forms", () => {
  const fcmaOnly = { features: ["FEAT_FCMA"] } as const;
  const fcmaFp16 = { features: ["FEAT_FCMA", "FEAT_FP16"] } as const;
  const sveOnly = { features: ["FEAT_SVE"] } as const;

  assert.equal(disasm(780325920, undefined, fcmaOnly), "fcmla v0.2s, v1.2s, v2.2s, #180");
  assert.equal(disasm(780334112, undefined, fcmaOnly), "fcadd v0.2s, v1.2s, v2.2s, #270");
  assert.equal(disasm(776127520, undefined, fcmaFp16), "fcmla v0.4h, v1.4h, v2.4h, #0");
  assert.equal(disasm(792858656, undefined, fcmaFp16), "fcmla v0.4h, v1.4h, v2.h[0], #0");
  assert.deepEqual(
    decode(776127520, fcmaOnly).errors,
    ["missing features: FEAT_FP16"],
  );

  assert.equal(disasm(1681948672, undefined, sveOnly), "fcadd z0.h, p0/m, z0.h, z0.h, #90");
  assert.equal(disasm(1690411007, undefined, sveOnly), "fcadd z31.d, p7/m, z31.d, z31.d, #270");
  assert.equal(disasm(1681915904, undefined, sveOnly), "fcmla z0.h, p0/m, z0.h, z0.h, #0");
  assert.equal(disasm(1692368868, undefined, sveOnly), "fcmla z4.d, p7/m, z31.d, z31.d, #270");
  assert.equal(disasm(1693783381, undefined, sveOnly), "fcmla z21.s, z10.s, z5.s[1], #90");
});

test("decodes AdvSIMD shift register and long-shift forms", () => {
  const advsimdOptions = { features: ["FEAT_AdvSIMD"] } as const;
  assert.equal(disasm(237126688, undefined, advsimdOptions), "sshl v0.8b, v1.8b, v2.8b");
  assert.equal(disasm(2129151985, undefined, advsimdOptions), "ushl d17, d31, d8");
  assert.equal(disasm(237130784, undefined, advsimdOptions), "srshl v0.8b, v1.8b, v2.8b");
  assert.equal(disasm(2129158129, undefined, advsimdOptions), "uqrshl d17, d31, d8");
  assert.equal(disasm(1598838087, undefined, advsimdOptions), "shl d7, d10, #12");
  assert.equal(disasm(252421152, undefined, advsimdOptions), "sshll v0.8h, v1.8b, #3");
  assert.equal(disasm(1863033888, undefined, advsimdOptions), "ushll2 v0.8h, v1.16b, #3");
});

test("decodes AdvSIMD crypto families", () => {
  assert.equal(disasm(1311262752, undefined, { features: ["FEAT_AES"] }), "aese v0.16b, v1.16b");
  assert.equal(disasm(1311275040, undefined, { features: ["FEAT_AES"] }), "aesimc v0.16b, v1.16b");
  assert.equal(disasm(1579681824, undefined, { features: ["FEAT_SHA1"] }), "sha1h s0, s1");
  assert.equal(disasm(1577189408, undefined, { features: ["FEAT_SHA1"] }), "sha1c q0, s1, v2.4s");
  assert.equal(disasm(1577201696, undefined, { features: ["FEAT_SHA1"] }), "sha1su0 v0.4s, v1.4s, v2.4s");
  assert.equal(disasm(1579690016, undefined, { features: ["FEAT_SHA256"] }), "sha256su0 v0.4s, v1.4s");
  assert.equal(disasm(1577205792, undefined, { features: ["FEAT_SHA256"] }), "sha256h q0, q1, v2.4s");
  assert.equal(disasm(1577213984, undefined, { features: ["FEAT_SHA256"] }), "sha256su1 v0.4s, v1.4s, v2.4s");
});

test("decodes integer datapath multiply and logical forms", () => {
  assert.equal(disasm(453409956), "mul w4, w5, w6");
  assert.equal(disasm(453447777), "madd w1, w3, w7, w4");
  assert.equal(disasm(453480545), "msub w1, w3, w7, w4");
  assert.equal(disasm(449448160), "udiv w0, w7, w10");
  assert.equal(disasm(448794284), "sdiv w12, w21, w0");
  assert.equal(disasm(168494019), "and w3, w30, w11");
  assert.equal(disasm(176882627), "and w3, w30, w11, asr #0");
  assert.equal(disasm(2325741191), "and x7, x20, xzr, asr #63");
  assert.equal(disasm(838897635), "mov w3, #0xf000f");
  assert.equal(disasm(2318319245), "bic x13, x20, x14, lsl #47");
  assert.equal(disasm(839925027), "orr w3, w9, #0xffff0000");
  assert.equal(disasm(302024683), "and w11, wzr, #0x30003");
  assert.equal(disasm(1912661651), "ands w19, w20, #0x33333333");
  assert.equal(disasm(4060145299), "ands x19, x20, #0x3333333333333333");
  assert.equal(disasm(1912792671), "tst w18, #0xcccccccc");
  assert.equal(disasm(4060213375), "tst x3, #0xaaaaaaaaaaaaaaaa");
  assert.equal(disasm(1778875519), "tst w3, w7, lsl #31");
  assert.equal(disasm(1375979715), "eor w3, w6, #0xe0e0e0e0");
  assert.equal(disasm(1377662512), "eor w16, w17, #0xfffffff9");
});

test("decodes scalar bit-manipulation aliases and data movement leftovers", () => {
  assert.equal(disasm(1522534418), "rev w18, w0");
  assert.equal(disasm(3670019158), "rev x22, x2");
  assert.equal(disasm(1522537635), "cls w3, w5");
  assert.equal(disasm(3670018100), "rev32 x20, x1");
  assert.equal(disasm(449651083), "lsl w11, w12, w13");
  assert.equal(disasm(2597725876), "lsr x20, x21, x22");
  assert.equal(disasm(450439959), "asr w23, w24, w25");
  assert.equal(disasm(2596613251), "ror x3, x4, x5");
  assert.equal(disasm(327614627), "extr w3, w5, w7, #0");
  assert.equal(disasm(2479307939), "extr x3, x5, x7, #15");
  assert.equal(disasm(2480366323), "ror x19, x23, #24");
  assert.equal(disasm(328039849), "ror w9, w13, #31");
});

test("decodes SVE rearrangement and reverse families", () => {
  const sveOptions = { features: ["FEAT_SVE"] };
  assert.equal(disasm(88045567, undefined, sveOptions), "trn2 z31.b, z31.b, z31.b");
  assert.equal(disasm(86988271, undefined, sveOptions), "trn2 p15.b, p15.b, p15.b");
  assert.equal(disasm(85999616, undefined, sveOptions), "zip1 p0.b, p0.b, p0.b");
  assert.equal(disasm(86986223, undefined, sveOptions), "uzp2 p15.b, p15.b, p15.b");
  assert.equal(disasm(87571424, undefined, sveOptions), "rev z0.b, z31.b");
  assert.equal(disasm(90480608, undefined, sveOptions), "revb z0.h, p7/m, z31.h");
  assert.equal(disasm(94740448, undefined, sveOptions), "revh z0.s, p7/m, z31.s");
  assert.equal(disasm(99000288, undefined, sveOptions), "revw z0.d, p7/m, z31.d");
  assert.equal(disasm(94478335, undefined, sveOptions), "compact z31.s, p7, z31.s");
});

test("decodes barrier and cache/TLB maintenance system instructions", () => {
  assert.equal(disasm(3573759935), "dmb sy");
  assert.equal(disasm(3573759167), "dmb #12");
  assert.equal(disasm(3573759135), "dfb");
  assert.equal(disasm(3573758623), "dsb ishst");
  assert.equal(disasm(3573756063), "ssbb");
  assert.equal(disasm(3574297897), "ic ivau, x9");
  assert.equal(disasm(3574101279), "ic iallu");
  assert.equal(disasm(3574297644), "dc zva, x12");
  assert.equal(disasm(3574101567), "dc ivac, xzr");
  assert.equal(disasm(3574102067), "at s1e1w, x19");
  assert.equal(disasm(3574364308), "at s12e1r, x20");
  assert.equal(disasm(3574366244), "tlbi ipas2e1is, x4");
  assert.equal(disasm(3574104863), "tlbi vmalle1is");
  assert.equal(disasm(3574367199), "tlbi vmalls12e1is");
  assert.equal(disasm(3574305316), "sys #3, c9, c2, #1, x4");
  assert.equal(disasm(3574553061), "sys #7, c5, c9, #7, x5");
});

test("decodes CRC, exception, hint, and zero-operand core A64 leftovers", () => {
  const crcOptions = { features: ["FEAT_CRC32"] };
  assert.equal(disasm(450117861, undefined, crcOptions), "crc32b w5, w7, w20");
  assert.equal(disasm(2597604647, undefined, crcOptions), "crc32x w7, w9, x20");
  assert.equal(disasm(449073321, undefined, crcOptions), "crc32cb w9, w5, w4");
  assert.equal(disasm(2598329874, undefined, crcOptions), "crc32cx w18, w16, xzr");
  assert.equal(disasm(3556769793), "svc #0");
  assert.equal(disasm(3556769826), "hvc #0x1");
  assert.equal(disasm(3557153795), "smc #0x2ee0");
  assert.equal(disasm(3558867328), "brk #0xc");
  assert.equal(disasm(3560968032), "hlt #0x7b");
  assert.equal(disasm(3567256897), "dcps1 #0x2a");
  assert.equal(disasm(144703483), "stlrb w27, [sp]");
  assert.equal(disasm(3573751839), "nop");
  assert.equal(disasm(3573755903), "hint #127");
  assert.equal(disasm(3573751871), "yield");
  assert.equal(disasm(3573751903), "wfe");
  assert.equal(disasm(3573751935), "wfi");
  assert.equal(disasm(3573751967), "sev");
  assert.equal(disasm(3573751999), "sevl");
  assert.equal(disasm(3573752479), "csdb");
  assert.equal(disasm(3573752863, undefined, { features: ["FEAT_BTI"] }), "bti");
  assert.equal(disasm(3573752927, undefined, { features: ["FEAT_BTI"] }), "bti c");
  assert.equal(disasm(3573752991, undefined, { features: ["FEAT_BTI"] }), "bti j");
  assert.equal(disasm(3573753055, undefined, { features: ["FEAT_BTI"] }), "bti jc");
  assert.equal(disasm(3573752031, undefined, { features: ["FEAT_DGH"] }), "dgh");
  assert.equal(disasm(3573756159, undefined, { features: ["FEAT_SB"] }), "sb");
  assert.equal(disasm(3600745440), "eret");
  assert.equal(disasm(3602842592), "drps");
});

test("decodes pointer-auth LR extension leftovers", () => {
  const pauthLrOptions = { features: ["FEAT_PAuth_LR"] };
  assert.equal(disasm(3670115326, undefined, pauthLrOptions), "pacnbiasppc");
  assert.equal(disasm(3670116350, undefined, pauthLrOptions), "pacnbibsppc");
  assert.equal(disasm(3573753087, undefined, pauthLrOptions), "pacm");
});

test("decodes AdvSIMD compare register and zero forms", () => {
  const advsimdFp16Options = { features: ["FEAT_AdvSIMD && FEAT_FP16", "FEAT_AdvSIMD", "FEAT_FP16"] };
  assert.equal(disasm(1848131553, undefined, { features: ["FEAT_AdvSIMD"] }), "cmhs v1.16b, v31.16b, v8.16b");
  assert.equal(disasm(1591773876, undefined, { features: ["FEAT_AdvSIMD"] }), "cmgt d20, d21, #0");
  assert.equal(disasm(2128648884, undefined, { features: ["FEAT_AdvSIMD"] }), "cmle d20, d21, #0");
  assert.equal(disasm(2130087604, undefined, { features: ["FEAT_AdvSIMD"] }), "cmeq d20, d21, d22");
  assert.equal(disasm(2118919530, undefined, advsimdFp16Options), "fcmge h10, h11, h12");
  assert.equal(disasm(2130233706, undefined, advsimdFp16Options), "fcmge h10, h11, #0.0");
  assert.equal(disasm(1315300445, undefined, { features: ["FEAT_AdvSIMD"] }), "fcmeq v29.2d, v2.2d, v5.2d");
  assert.equal(disasm(1319168143, undefined, { features: ["FEAT_AdvSIMD"] }), "fcmlt v15.4s, v4.4s, #0.0");
});

test("decodes AdvSIMD widening long arithmetic forms", () => {
  const options = { features: ["FEAT_AdvSIMD"] };
  assert.equal(disasm(237109280, undefined, options), "saddl v0.8h, v1.8b, v2.8b");
  assert.equal(disasm(1319239712, undefined, options), "saddl2 v0.2d, v1.4s, v2.4s");
  assert.equal(disasm(1310871584, undefined, options), "sabal2 v0.8h, v1.16b, v2.16b");
  assert.equal(disasm(245526560, undefined, options), "sabdl v0.2d, v1.2s, v2.2s");
  assert.equal(disasm(245530656, undefined, options), "smlal v0.2d, v1.2s, v2.2s");
  assert.equal(disasm(1856151584, undefined, options), "umlsl2 v0.2d, v1.4s, v2.4s");
});

test("decodes AdvSIMD extend-long and scalar FABD forms", () => {
  const advsimdOptions = { features: ["FEAT_AdvSIMD"] } as const;
  const advsimdFp16Options = { features: ["FEAT_AdvSIMD && FEAT_FP16", "FEAT_AdvSIMD", "FEAT_FP16"] } as const;
  assert.equal(disasm(252224544, undefined, advsimdOptions), "sxtl v0.8h, v1.8b");
  assert.equal(disasm(1864410144, undefined, advsimdOptions), "uxtl2 v0.2d, v1.4s");
  assert.equal(disasm(2127828765, undefined, advsimdFp16Options), "fabd h29, h24, h20");
  assert.equal(disasm(2125780765, undefined, advsimdOptions), "fabd s29, s24, s20");
  assert.equal(disasm(2129975069, undefined, advsimdOptions), "fabd d29, d24, d20");
});

test("decodes AdvSIMD pairwise max/min forms", () => {
  const advsimdOptions = { features: ["FEAT_AdvSIMD"] } as const;
  const advsimdFp16Options = { features: ["FEAT_AdvSIMD && FEAT_FP16", "FEAT_AdvSIMD", "FEAT_FP16"] } as const;

  assert.equal(disasm(237151264, undefined, advsimdOptions), "smaxp v0.8b, v1.8b, v2.8b");
  assert.equal(disasm(241347616, undefined, advsimdOptions), "sminp v0.4h, v1.4h, v2.4h");
  assert.equal(disasm(1856152608, undefined, advsimdOptions), "umaxp v0.4s, v1.4s, v2.4s");
  assert.equal(disasm(778218528, undefined, advsimdOptions), "uminp v0.4h, v1.4h, v2.4h");

  assert.equal(disasm(776090656, undefined, advsimdFp16Options), "fmaxp v0.4h, v1.4h, v2.4h");
  assert.equal(disasm(1856435363, undefined, advsimdOptions), "fminp v3.4s, v5.4s, v6.4s");
  assert.equal(disasm(1853474055, undefined, advsimdOptions), "fmaxnmp v7.2d, v8.2d, v25.2d");
  assert.equal(disasm(785778154, undefined, advsimdFp16Options), "fminnmp v10.4h, v15.4h, v22.4h");

  assert.equal(disasm(1580267634, undefined, advsimdFp16Options), "fmaxp h18, v3.2h");
  assert.equal(disasm(2121332788, undefined, advsimdOptions), "fmaxp d20, v1.2d");
  assert.equal(disasm(2125527123, undefined, advsimdOptions), "fminp s19, v2.2s");
  assert.equal(disasm(1588643954, undefined, advsimdFp16Options), "fminnmp h18, v3.2h");
  assert.equal(disasm(2117126227, undefined, advsimdOptions), "fmaxnmp s19, v2.2s");
  assert.equal(disasm(2129709108, undefined, advsimdOptions), "fminnmp d20, v1.2d");
});

test("decodes AdvSIMD pairwise add forms", () => {
  const advsimdOptions = { features: ["FEAT_AdvSIMD"] } as const;
  const advsimdFp16Options = { features: ["FEAT_AdvSIMD && FEAT_FP16", "FEAT_AdvSIMD", "FEAT_FP16"] } as const;

  assert.equal(disasm(1310899232, undefined, advsimdOptions), "addp v0.16b, v1.16b, v2.16b");
  assert.equal(disasm(1592899616, undefined, advsimdOptions), "addp d0, v1.2d");
  assert.equal(disasm(1849824288, undefined, advsimdFp16Options), "faddp v0.8h, v1.8h, v2.8h");
  assert.equal(disasm(2121324596, undefined, advsimdOptions), "faddp d20, v1.2d");
});

test("decodes AdvSIMD max/min vector forms", () => {
  const advsimdOptions = { features: ["FEAT_AdvSIMD"] } as const;
  const advsimdFp16Options = { features: ["FEAT_AdvSIMD && FEAT_FP16", "FEAT_AdvSIMD", "FEAT_FP16"] } as const;

  assert.equal(disasm(237134880, undefined, advsimdOptions), "smax v0.8b, v1.8b, v2.8b");
  assert.equal(disasm(1851943968, undefined, advsimdOptions), "umin v0.8h, v1.8h, v2.8h");
  assert.equal(disasm(1311831551, undefined, advsimdOptions), "fmax v31.4s, v15.4s, v16.4s");
  assert.equal(disasm(248919530, undefined, advsimdFp16Options), "fmin v10.4h, v15.4h, v22.4h");
  assert.equal(disasm(1316603143, undefined, advsimdOptions), "fmaxnm v7.2d, v8.2d, v25.2d");
  assert.equal(disasm(246859242, undefined, advsimdOptions), "fminnm v10.2s, v15.2s, v22.2s");
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

test("decodes SVE BF16 subtraction forms", () => {
  const options = { features: ["FEAT_SVE_B16B16"] };
  assert.equal(disasm(1694600631, undefined, options), "bfsub z23.h, p3/m, z23.h, z13.h");
  assert.equal(disasm(1695024567, undefined, options), "bfsub z23.h, z13.h, z8.h");
  assert.equal(disasm(1697131959, undefined, options), "bfmls z23.h, p3/m, z13.h, z8.h");
  assert.equal(disasm(1684540855, undefined, options), "bfmls z23.h, z13.h, z0.h[5]");
});

test("decodes SVE floating multiply-accumulate forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(1702829088, undefined, options), "fmla z0.h, p7/m, z1.h, z31.h");
  assert.equal(disasm(1686044704, undefined, options), "fmla z0.h, z1.h, z7.h[7]");
  assert.equal(disasm(1702837280, undefined, options), "fmls z0.h, p7/m, z1.h, z31.h");
  assert.equal(disasm(1702845472, undefined, options), "fnmla z0.h, p7/m, z1.h, z31.h");
  assert.equal(disasm(1702853664, undefined, options), "fnmls z0.h, p7/m, z1.h, z31.h");
});

test("decodes SVE saturating integer add/sub forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(69210112, undefined, options), "sqadd z0.b, z0.b, z0.b");
  assert.equal(disasm(631570431, undefined, options), "sqadd z31.s, z31.s, #65280");
  assert.equal(disasm(69212160, undefined, options), "sqsub z0.b, z0.b, z0.b");
  assert.equal(disasm(635895807, undefined, options), "sqsub z31.d, z31.d, #65280");
  assert.equal(disasm(77599744, undefined, options), "uqadd z0.s, z0.s, z0.s");
  assert.equal(disasm(627441663, undefined, options), "uqadd z31.h, z31.h, #65280");
  assert.equal(disasm(81796096, undefined, options), "uqsub z0.d, z0.d, z0.d");
  assert.equal(disasm(631767039, undefined, options), "uqsub z31.s, z31.s, #65280");
});

test("decodes scalar FCMP and FCMPE forms", () => {
  const options = { features: ["FEAT_FP", "FEAT_FP16"] };
  assert.equal(disasm(505749600, undefined, options), "fcmp s3, s5");
  assert.equal(disasm(505422824, undefined, options), "fcmp s31, #0.0");
  assert.equal(disasm(510402688, undefined, options), "fcmp d4, d12");
  assert.equal(disasm(509616872, undefined, options), "fcmp d23, #0.0");
  assert.equal(disasm(507388848, undefined, options), "fcmpe s29, s30");
  assert.equal(disasm(505422328, undefined, options), "fcmpe s15, #0.0");
  assert.equal(disasm(511058768, undefined, options), "fcmpe d26, d22");
  assert.equal(disasm(509617080, undefined, options), "fcmpe d29, #0.0");
});

test("decodes scalar FP conditional compare and convert families", () => {
  const options = { features: ["FEAT_FP", "FEAT_FP16"] };
  assert.equal(disasm(507446304, undefined, options), "fccmp s1, s31, #0, eq");
  assert.equal(disasm(509941751, undefined, options), "fccmpe d31, d5, #7, ne");
  assert.equal(disasm(505594152, undefined, options), "fcvt d8, s9");
  assert.equal(disasm(509854058, undefined, options), "fcvt h10, d11");
  assert.equal(disasm(505414627, undefined, options), "fcvtns w3, s31");
  assert.equal(disasm(2654011688, undefined, options), "fcvtmu x8, s9");
  assert.equal(disasm(506986858, undefined, options), "fcvtzs w10, s11");
  assert.equal(disasm(507052526, undefined, options), "fcvtzu w14, s15");
  assert.equal(disasm(2657288983, undefined, options), "ucvtf d23, x24");
  assert.equal(disasm(504942239, undefined, options), "fcvtzs wzr, s20, #13");
  assert.equal(disasm(2652458956, undefined, options), "fcvtzu x12, s30, #45");
  assert.equal(disasm(503480334, undefined, options), "scvtf s14, w0, #32");
  assert.equal(disasm(2651042815, undefined, options), "ucvtf s31, xzr, #20");
});

test("decodes scalar FP select, unary, arithmetic, and fused arithmetic families", () => {
  const options = { features: ["FEAT_FP", "FEAT_FP16"] };
  assert.equal(disasm(0x1e295e83, undefined, options), "fcsel s3, s20, s9, pl");
  assert.equal(disasm(0x1e60c062, undefined, options), "fabs d2, d3");
  assert.equal(disasm(0x1e25c272, undefined, options), "frintz s18, s19");
  assert.equal(disasm(0x1e631841, undefined, options), "fdiv d1, d2, d3");
  assert.equal(disasm(0x1e388af6, undefined, options), "fnmul s22, s23, s24");
  assert.equal(disasm(0x1f40dda3, undefined, options), "fmsub d3, d13, d0, d23");
  assert.equal(disasm(0x1f267ca3, undefined, options), "fnmadd s3, s5, s6, s31");
});

test("decodes scalar multiply-long, high, and FMOV families", () => {
  const fpOptions = { features: ["FEAT_FP", "FEAT_FP16"] };
  assert.equal(disasm(453442724), "mneg w4, w5, w6");
  assert.equal(disasm(2602706083), "smaddl x3, w5, w2, x9");
  assert.equal(disasm(2603974291), "smull x19, w20, w21");
  assert.equal(disasm(2602738851), "smsubl x3, w5, w2, x9");
  assert.equal(disasm(2604007059), "smnegl x19, w20, w21");
  assert.equal(disasm(2611094691), "umaddl x3, w5, w2, x9");
  assert.equal(disasm(2612362899), "umull x19, w20, w21");
  assert.equal(disasm(2611127459), "umsubl x3, w5, w2, x9");
  assert.equal(disasm(2612395667), "umnegl x19, w20, w21");
  assert.equal(disasm(2606530494), "smulh x30, x29, x28");
  assert.equal(disasm(2614919102), "umulh x30, x29, x28");
  assert.equal(disasm(505807139, undefined, fpOptions), "fmov w3, s9");
  assert.equal(disasm(505872489, undefined, fpOptions), "fmov s9, w3");
  assert.equal(disasm(2657485812, undefined, fpOptions), "fmov x20, d31");
  assert.equal(disasm(2657550817, undefined, fpOptions), "fmov d1, x15");
  assert.equal(disasm(2662203779, undefined, fpOptions), "fmov x3, v12.d[1]");
  assert.equal(disasm(2662269537, undefined, fpOptions), "fmov v1.d[1], x19");
  assert.equal(disasm(505942018, undefined, fpOptions), "fmov s2, #0.12500000");
  assert.equal(disasm(510652426, undefined, fpOptions), "fmov d10, #1.93750000");
});

test("decodes SVE compare immediate", () => {
  assert.equal(disasm(0x25108000, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "cmpeq p0.b, p0/z, z0.b, #-16");
});

test("decodes SVE compare vector", () => {
  assert.equal(disasm(0x2400a000, undefined, { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] }), "cmpeq p0.b, p0/z, z0.b, z0.b");
});

test("decodes SVE floating compare zero, vector, and absolute-vector forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] } as const;
  assert.equal(disasm(1699880960, undefined, options), "fcmeq p0.h, p0/z, z0.h, #0.0");
  assert.equal(disasm(1698783232, undefined, options), "fcmeq p0.h, p0/z, z0.h, z1.h");
  assert.equal(disasm(1698750512, undefined, options), "facgt p0.h, p0/z, z1.h, z0.h");
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

test("decodes SVE predicate break and test forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(621837808, undefined, options), "brka p0.b, p15/m, p15.b");
  assert.equal(disasm(621837792, undefined, options), "brka p0.b, p15/z, p15.b");
  assert.equal(disasm(626032096, undefined, options), "brkas p0.b, p15/z, p15.b");
  assert.equal(disasm(630226416, undefined, options), "brkb p0.b, p15/m, p15.b");
  assert.equal(disasm(634420704, undefined, options), "brkbs p0.b, p15/z, p15.b");
  assert.equal(disasm(622361632, undefined, options), "brkn p0.b, p15/z, p1.b, p0.b");
  assert.equal(disasm(626555936, undefined, options), "brkns p0.b, p15/z, p1.b, p0.b");
  assert.equal(disasm(620952608, undefined, options), "brkpa p0.b, p15/z, p1.b, p2.b");
  assert.equal(disasm(625146912, undefined, options), "brkpas p0.b, p15/z, p1.b, p2.b");
  assert.equal(disasm(620952624, undefined, options), "brkpb p0.b, p15/z, p1.b, p2.b");
  assert.equal(disasm(625146928, undefined, options), "brkpbs p0.b, p15/z, p1.b, p2.b");
  assert.equal(disasm(626573792, undefined, options), "pfirst p0.b, p15, p0.b");
  assert.equal(disasm(622446048, undefined, options), "pnext p0.b, p15, p0.b");
  assert.equal(disasm(626640352, undefined, options), "pnext p0.h, p15, p0.h");
  assert.equal(disasm(630834656, undefined, options), "pnext p0.s, p15, p0.s");
  assert.equal(disasm(635028960, undefined, options), "pnext p0.d, p15, p0.d");
  assert.equal(disasm(626064384, undefined, options), "ptest p15, p0.b");
});

test("decodes SVE predicate logical forms including flag-setting aliases", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(620773392, undefined, options), "bic p0.b, p0/z, p0.b, p0.b");
  assert.equal(disasm(624967696, undefined, options), "bics p0.b, p0/z, p0.b, p0.b");
  assert.equal(disasm(625033216, undefined, options), "ands p0.b, p0/z, p0.b, p1.b");
  assert.equal(disasm(624967680, undefined, options), "movs p0.b, p0/z, p0.b");
  assert.equal(disasm(633421824, undefined, options), "orrs p0.b, p0/z, p0.b, p1.b");
  assert.equal(disasm(633356288, undefined, options), "movs p0.b, p0.b");
  assert.equal(disasm(625033728, undefined, options), "eors p0.b, p0/z, p0.b, p1.b");
  assert.equal(disasm(624968192, undefined, options), "nots p0.b, p0/z, p0.b");
  assert.equal(disasm(633356816, undefined, options), "nands p0.b, p0/z, p0.b, p0.b");
  assert.equal(disasm(633356800, undefined, options), "nors p0.b, p0/z, p0.b, p0.b");
});

test("decodes SVE horizontal reduction forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(79773664, undefined, options), "uaddv d0, p7, z31.d");
  assert.equal(disasm(67649504, undefined, options), "smaxv b0, p7, z31.b");
  assert.equal(disasm(80363488, undefined, options), "sminv d0, p7, z31.d");
  assert.equal(disasm(77086688, undefined, options), "orv s0, p7, z31.s");
  assert.equal(disasm(1698971616, undefined, options), "fmaxnmv h0, p7, z31.h");
  assert.equal(disasm(1707425760, undefined, options), "fminnmv d0, p7, z31.d");
});

test("decodes RDFFR predicate forms", () => {
  const options = { features: ["FEAT_SVE"] };
  assert.equal(disasm(622456832, undefined, options), "rdffr p0.b");
  assert.equal(disasm(622391296, undefined, options), "rdffr p0.b, p0/z");
  assert.equal(disasm(626585600, undefined, options), "rdffrs p0.b, p0/z");
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

test("decodes SVE replicated and scalarizing load forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(2218819584, undefined, options), "ld1rb { z0.b }, p0/z, [x0]");
  assert.equal(disasm(2222981119, undefined, options), "ld1rb { z31.d }, p7/z, [sp, #63]");
  assert.equal(disasm(2231369727, undefined, options), "ld1rh { z31.d }, p7/z, [sp, #126]");
  assert.equal(disasm(2239758335, undefined, options), "ld1rw { z31.d }, p7/z, [sp, #252]");
  assert.equal(disasm(2248146943, undefined, options), "ld1rd { z31.d }, p7/z, [sp, #504]");
  assert.equal(disasm(2244001792, undefined, options), "ld1rsb { z0.h }, p0/z, [x0]");
  assert.equal(disasm(2235604992, undefined, options), "ld1rsh { z0.s }, p0/z, [x0]");
  assert.equal(disasm(2227208192, undefined, options), "ld1rsw { z0.d }, p0/z, [x0]");
  assert.equal(disasm(2751999415, undefined, options), "ld1rqb { z23.b }, p3/z, [x13, #-128]");
  assert.equal(disasm(2759852032, undefined, options), "ld1rqh { z0.h }, p0/z, [x0, x0, lsl #1]");
  assert.equal(disasm(2768240640, undefined, options), "ld1rqw { z0.s }, p0/z, [x0, x0, lsl #2]");
  assert.equal(disasm(2776629248, undefined, options), "ld1rqd { z0.d }, p0/z, [x0, x0, lsl #3]");
});

test("decodes SVE INCB and DECB scalar patterns", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(0x0430e3e0, undefined, options), "incb x0");
  assert.equal(disasm(0x0430e400, undefined, options), "decb x0, pow2");
  assert.equal(disasm(0x043fe7e0, undefined, options), "decb x0, all, mul #16");
});

test("decodes SVE CNTB/CNTH/CNTW/CNTD scalar count patterns", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(69264352, undefined, options), "cntb x0");
  assert.equal(disasm(73458656, undefined, options), "cnth x0");
  assert.equal(disasm(77652960, undefined, options), "cntw x0");
  assert.equal(disasm(81847264, undefined, options), "cntd x0");
  assert.equal(disasm(70247392, undefined, options), "cntb x0, all, mul #16");
  assert.equal(disasm(69263360, undefined, options), "cntb x0, pow2");
  assert.equal(disasm(69264256, undefined, options), "cntb x0, #28");
});

test("decodes SVE CNTP and WHILE predicate-loop forms", () => {
  const sveOptions = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(622902272, undefined, sveOptions), "cntp x0, p15, p0.b");
  assert.equal(disasm(624890911, undefined, sveOptions), "whilele p15.b, x0, xzr");
});

test("decodes SME ZA tile-slice load/store operands", () => {
  const options = { features: ["FEAT_SME"] };
  assert.equal(disasm(3758096384, undefined, options), "ld1b {za0h.b[w12, 0]}, p0/z, [x0, x0]");
  assert.equal(disasm(3758129152, undefined, options), "ld1b {za0v.b[w12, 0]}, p0/z, [x0, x0]");
  assert.equal(disasm(3772077381, undefined, options), "ld1d {za2h.d[w14, 1]}, p5/z, [x10, x21, lsl #3]");
  assert.equal(disasm(3788854597, undefined, options), "ld1q {za5h.q[w14, 0]}, p5/z, [x10, x21, lsl #4]");
  assert.equal(disasm(3769346439, undefined, options), "st1w {za1v.s[w13, 3]}, p2, [x12, x11, lsl #2]");
  assert.equal(disasm(3774840815, undefined, options), "st1d {za7h.d[w15, 1]}, p7, [sp]");
});

test("decodes SME ZERO tile-mask forms", () => {
  const options = { features: ["FEAT_SME"] };
  assert.equal(disasm(3221749760, undefined, options), "zero {}");
  assert.equal(disasm(3221749845, undefined, options), "zero {za0.h}");
  assert.equal(disasm(3221749811, undefined, options), "zero {za0.s, za1.s}");
  assert.equal(disasm(3221750015, undefined, options), "zero {za}");
});

test("decodes SME2p1 ZERO ZA group forms", () => {
  const options = { features: ["FEAT_SME2p1"] };
  assert.equal(disasm(3222044672, undefined, options), "zero za.d[w8, 0:1]");
  assert.equal(disasm(3222175744, undefined, options), "zero za.d[w8, 0:3]");
  assert.equal(disasm(3222011904, undefined, options), "zero za.d[w8, 0, vgx2]");
  assert.equal(disasm(3222142976, undefined, options), "zero za.d[w8, 0, vgx4]");
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

test("decodes SVE saturating increment/decrement by predicate-count forms", () => {
  const options = { features: ["FEAT_SVE || FEAT_SME", "FEAT_SVE", "FEAT_SME"] };
  assert.equal(disasm(623414272, undefined, options), "sqincp x0, p0.b");
  assert.equal(disasm(623610367, undefined, options), "uqdecp wzr, p15.b");
  assert.equal(disasm(635994112, undefined, options), "sqincp z0.d, p0.d");
  assert.equal(disasm(636190720, undefined, options), "uqdecp z0.d, p0.d");
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

test("decodes SME2 FDOT dot-product forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(3240103936, undefined, options), "fdot za.s[w8, 0, vgx2], { z0.h, z1.h }, z0.h");
  assert.equal(disasm(3243249672, undefined, options), "fdot za.s[w8, 0, vgx2], { z0.h, z1.h }, z0.h[0]");
  assert.equal(disasm(3248492544, undefined, options), "fdot za.s[w8, 0, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
});

test("decodes SME2 SUDOT and USDOT mixed-sign dot-product forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(3240104984, undefined, options), "sudot za.s[w8, 0, vgx2], { z0.b, z1.b }, z0.b");
  assert.equal(disasm(3243249720, undefined, options), "sudot za.s[w8, 0, vgx2], { z0.b, z1.b }, z0.b[0]");
  assert.equal(disasm(3240104968, undefined, options), "usdot za.s[w8, 0, vgx2], { z0.b, z1.b }, z0.b");
  assert.equal(disasm(3243249704, undefined, options), "usdot za.s[w8, 0, vgx2], { z0.b, z1.b }, z0.b[0]");
  assert.equal(disasm(3248493576, undefined, options), "usdot za.s[w8, 0, vgx2], { z0.b, z1.b }, { z0.b, z1.b }");
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

test("decodes SME2p1 floating ZA array arithmetic forms", () => {
  const options = { features: ["FEAT_SME_F16F16"] };
  assert.equal(disasm(3248757760, undefined, options), "fadd za.h[w8, 0, vgx2], { z0.h, z1.h }");
  assert.equal(disasm(3248757768, undefined, options), "fsub za.h[w8, 0, vgx2], { z0.h, z1.h }");
  assert.equal(disasm(3240107008, undefined, options), "fmla za.h[w8, 0, vgx2], { z0.h, z1.h }, z0.h");
  assert.equal(disasm(3240107016, undefined, options), "fmls za.h[w8, 0, vgx2], { z0.h, z1.h }, z0.h");
  assert.equal(disasm(2172649480, undefined, options), "fmopa za0.h, p0/m, p0/m, z0.h, z0.h");
  assert.equal(disasm(2174047577, undefined, options), "fmops za1.h, p5/m, p2/m, z10.h, z21.h");
});

test("decodes SME2 ADD destructive multi-vector arithmetic forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(3244335872, undefined, options), "add { z0.h, z1.h }, { z0.h, z1.h }, z0.h");
  assert.equal(disasm(3244663572, undefined, options), "add { z20.h, z21.h }, { z20.h, z21.h }, z5.h");
  assert.equal(disasm(3240143616, undefined, options), "add { z0.b - z3.b }, { z0.b - z3.b }, z0.b");
});

test("decodes SME2 BFMAX/BFMIN multi-vector arithmetic forms", () => {
  const options = { features: ["FEAT_SME2", "FEAT_SVE_B16B16"] };
  assert.equal(disasm(3240141056, undefined, options), "bfmax za.h[w8, 0, vgx2], { z0.h, z1.h }, z0.h");
  assert.equal(disasm(3240145184, undefined, options), "bfmaxnm za.h[w8, 0, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
  assert.equal(disasm(3240141057, undefined, options), "bfmin za.h[w8, 0, vgx2], { z0.h, z1.h }, z0.h");
  assert.equal(disasm(3240145185, undefined, options), "bfminnm za.h[w8, 0, vgx2], { z0.h, z1.h }, { z0.h, z1.h }");
});

test("decodes SME2 floating max/min multi-vector arithmetic forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(3244335360, undefined, options), "fmax za.h[w8, 0, vgx2], { z0.h, z1.h }, z0.h");
  assert.equal(disasm(3252728064, undefined, options), "fmax za.d[w8, 0, vgx2], { z0.d, z1.d }, { z0.d, z1.d }");
  assert.equal(disasm(3244335393, undefined, options), "fminnm za.h[w8, 0, vgx2], { z0.h, z1.h }, z0.h");
  assert.equal(disasm(3252728097, undefined, options), "fminnm za.d[w8, 0, vgx2], { z0.d, z1.d }, { z0.d, z1.d }");
});

test("decodes SME2 ZIP and UZP multi-vector permutation forms", () => {
  const options = { features: ["FEAT_SME2"] };
  assert.equal(disasm(3240154112, undefined, options), "zip { z0.q, z1.q }, z0.q, z0.q");
  assert.equal(disasm(3244872118, undefined, options), "zip { z22.h, z23.h }, z13.h, z8.h");
  assert.equal(disasm(3240154113, undefined, options), "uzp { z0.q, z1.q }, z0.q, z0.q");
  assert.equal(disasm(3254112597, undefined, options), "uzp { z20.d, z21.d }, z10.d, z21.d");
});

test("decodes SME2 and SME2p1 LUTI multi-vector forms", () => {
  assert.equal(disasm(3230420992, undefined, { features: ["FEAT_SME2"] }), "luti2 { z0.h, z1.h }, zt0, z0[0]");
  assert.equal(disasm(3230376956, undefined, { features: ["FEAT_SME2"] }), "luti4 { z28.s - z31.s }, zt0, z31[1]");
  assert.equal(disasm(3231535445, undefined, { features: ["FEAT_SME2p1"] }), "luti2 { z21.h, z29.h }, zt0, z10[2]");
  assert.equal(disasm(3231481856, undefined, { features: ["FEAT_SME2p1"] }), "luti2 { z0.b, z4.b, z8.b, z12.b }, zt0, z0[0]");
  assert.equal(disasm(3231400277, undefined, { features: ["FEAT_SME2p1"] }), "luti4 { z21.b, z29.b }, zt0, z10[2]");
  assert.equal(disasm(3231421427, undefined, { features: ["FEAT_SME2p1"] }), "luti4 { z19.h, z23.h, z27.h, z31.h }, zt0, z31[1]");
});

test("decodes LDIAPP ordered register-pair loads", () => {
  const options = { features: ["FEAT_LRCPC3"] };
  assert.equal(disasm(2571373212, undefined, options), "ldiapp w28, w4, [x20], #8");
  assert.equal(disasm(3645180605, undefined, options), "ldiapp x29, x5, [x21], #16");
  assert.equal(disasm(2571508734, undefined, options), "ldiapp w30, w6, [sp]");
  assert.equal(disasm(3645315839, undefined, options), "ldiapp xzr, x7, [x23]");
});

test("decodes RCpc and RCpc3 ordered load/store families", () => {
  assert.equal(disasm(420479297, undefined, { features: ["FEAT_LRCPC2"] }), "stlurb w1, [x10, #-256]");
  assert.equal(disasm(428864033, undefined, { features: ["FEAT_LRCPC2"] }), "ldapursb x1, [x17, #255]");
  assert.equal(disasm(3640689643, undefined, { features: ["FEAT_LRCPC2"] }), "stlur x11, [sp, #8]");
  assert.equal(disasm(3644888046, undefined, { features: ["FEAT_LRCPC2"] }), "ldapur x14, [sp, #9]");
  assert.equal(disasm(2566916632, undefined, { features: ["FEAT_LRCPC3"] }), "stilp w24, w0, [x16, #-8]!");
  assert.equal(disasm(3640859643, undefined, { features: ["FEAT_LRCPC3"] }), "stilp x27, x3, [sp]");
  assert.equal(disasm(2575305187, undefined, { features: ["FEAT_LRCPC3"] }), "stlr w3, [x15, #-4]!");
  assert.equal(disasm(3649047523, undefined, { features: ["FEAT_LRCPC3"] }), "stlr x3, [sp, #-8]!");
});

test("decodes RCpc3 FP/SIMD and AdvSIMD single-lane ordered memory forms", () => {
  const fpOptions = { features: ["FEAT_FP && FEAT_LRCPC3", "FEAT_FP", "FEAT_LRCPC3"] };
  assert.equal(disasm(488634851, undefined, fpOptions), "stlur b3, [x15, #-1]");
  assert.equal(disasm(3707784163, undefined, fpOptions), "stlur d3, [sp, #4]");
  assert.equal(disasm(1566546403, undefined, fpOptions), "ldapur h3, [x15, #-7]");
  assert.equal(disasm(499166179, undefined, fpOptions), "ldapur q3, [sp, #10]");

  const advsimdOptions = { features: ["FEAT_AdvSIMD && FEAT_LRCPC3", "FEAT_AdvSIMD", "FEAT_LRCPC3"] };
  assert.equal(disasm(218203619, undefined, advsimdOptions), "stl1 { v3.d }[0], [x15]");
  assert.equal(disasm(1291945955, undefined, advsimdOptions), "stl1 { v3.d }[1], [sp]");
  assert.equal(disasm(222398435, undefined, advsimdOptions), "ldap1 { v3.d }[0], [sp]");
  assert.equal(disasm(1296139747, undefined, advsimdOptions), "ldap1 { v3.d }[1], [x15]");
});

test("decodes AdvSIMD multiple-structure LD/ST families", () => {
  const options = { features: ["FEAT_AdvSIMD"] };
  assert.equal(disasm(0x4c007000, undefined, options), "st1 { v0.16b }, [x0]");
  assert.equal(disasm(0x4c407000, undefined, options), "ld1 { v0.16b }, [x0]");
  assert.equal(disasm(0x4c402bff, undefined, options), "ld1 { v31.4s, v0.4s, v1.4s, v2.4s }, [sp]");
  assert.equal(disasm(0x4c008000, undefined, options), "st2 { v0.16b, v1.16b }, [x0]");
  assert.equal(disasm(0x4c004000, undefined, options), "st3 { v0.16b, v1.16b, v2.16b }, [x0]");
  assert.equal(disasm(0x4c000000, undefined, options), "st4 { v0.16b, v1.16b, v2.16b, v3.16b }, [x0]");
  assert.equal(disasm(0x4cc18000, undefined, options), "ld2 { v0.16b, v1.16b }, [x0], x1");
  assert.equal(disasm(0x4cc14000, undefined, options), "ld3 { v0.16b, v1.16b, v2.16b }, [x0], x1");
  assert.equal(disasm(0x4c9f0c00, undefined, options), "st4 { v0.2d, v1.2d, v2.2d, v3.2d }, [x0], #64");
});

test("decodes AdvSIMD single-structure lane and replicate loads/stores", () => {
  const options = { features: ["FEAT_AdvSIMD"] };
  assert.equal(disasm(1296089088, undefined, options), "ld1r { v0.16b }, [x0]");
  assert.equal(disasm(233425919, undefined, options), "ld2r { v31.2s, v0.2s }, [sp], x9");
  assert.equal(disasm(1298168303, undefined, options), "ld4 { v15.h, v16.h, v17.h, v18.h }[7], [x15]");
  assert.equal(disasm(1304671231, undefined, options), "ld3 { v31.s, v0.s, v1.s }[3], [sp], x3");
  assert.equal(disasm(1304409087, undefined, options), "st4 { v31.s, v0.s, v1.s, v2.s }[3], [sp], #16");
});

test("decodes AdvSIMD dot-product vector and lane forms", () => {
  const options = { features: ["FEAT_DotProd"] };
  assert.equal(disasm(0x2e829420, undefined, options), "udot v0.2s, v1.8b, v2.8b");
  assert.equal(disasm(0x0e829420, undefined, options), "sdot v0.2s, v1.8b, v2.8b");
  assert.equal(disasm(0x6e829420, undefined, options), "udot v0.4s, v1.16b, v2.16b");
  assert.equal(disasm(0x4fa2e820, undefined, options), "sdot v0.4s, v1.16b, v2.4b[3]");
});

test("decodes AdvSIMD by-element multiply and MLA families", () => {
  assert.equal(disasm(797050912, undefined, { features: ["FEAT_AdvSIMD"] }), "mla v0.2s, v1.2s, v2.s[2]");
  assert.equal(disasm(1338120224, undefined, { features: ["FEAT_AdvSIMD"] }), "fmla v0.2d, v1.2d, v2.d[1]");
  assert.equal(disasm(1602689188, undefined, { features: ["FEAT_AdvSIMD"] }), "fmla s4, s5, v7.s[2]");
  assert.equal(disasm(1606506878, undefined, { features: ["FEAT_AdvSIMD"] }), "fmls d30, d11, v1.d[1]");
  assert.equal(disasm(2141887149, undefined, { features: ["FEAT_AdvSIMD"] }), "fmulx s13, s21, v10.s[3]");
  assert.equal(disasm(1335240736, undefined, { features: ["FEAT_AdvSIMD"] }), "smlal2 v0.2d, v1.4s, v22.s[2]");
  assert.equal(disasm(1598042112, undefined, { features: ["FEAT_AdvSIMD"] }), "sqdmlal s0, h0, v0.h[0]");
  assert.equal(disasm(1606187600, undefined, { features: ["FEAT_AdvSIMD"] }), "sqdmlsl d16, s18, v28.s[3]");
});

test("decodes AdvSIMD vector multiply, divide, and accumulate families", () => {
  assert.equal(disasm(237149216, undefined, { features: ["FEAT_AdvSIMD"] }), "mul v0.8b, v1.8b, v2.8b");
  assert.equal(disasm(774036512, undefined, { features: ["FEAT_AdvSIMD"] }), "fmul v0.2s, v1.2s, v2.2s");
  assert.equal(disasm(774044704, undefined, { features: ["FEAT_AdvSIMD"] }), "fdiv v0.2s, v1.2s, v2.2s");
  assert.equal(disasm(774938609, undefined, { features: ["FEAT_AdvSIMD"] }), "pmul v17.8b, v31.8b, v16.8b");
  assert.equal(disasm(237147168, undefined, { features: ["FEAT_AdvSIMD"] }), "mla v0.8b, v1.8b, v2.8b");
  assert.equal(disasm(774018080, undefined, { features: ["FEAT_AdvSIMD"] }), "mls v0.8b, v1.8b, v2.8b");
  assert.equal(disasm(237161504, undefined, { features: ["FEAT_AdvSIMD"] }), "fmla v0.2s, v1.2s, v2.2s");
  assert.equal(disasm(245550112, undefined, { features: ["FEAT_AdvSIMD"] }), "fmls v0.2s, v1.2s, v2.2s");
  assert.equal(disasm(241415970, undefined, { features: ["FEAT_AdvSIMD"] }), "sqdmulh v2.4h, v25.4h, v3.4h");
  assert.equal(disasm(1584182634, undefined, { features: ["FEAT_AdvSIMD"] }), "sqdmulh h10, h11, h12");
  assert.equal(disasm(2121053546, undefined, { features: ["FEAT_AdvSIMD"] }), "sqrdmulh h10, h11, h12");
  assert.equal(disasm(237886645, undefined, { features: ["FEAT_AdvSIMD"] }), "fmulx v21.2s, v5.2s, v13.2s");
  assert.equal(disasm(1580195540, undefined, { features: ["FEAT_AdvSIMD"] }), "fmulx s20, s22, s15");
  assert.equal(disasm(1584190156, undefined, { features: ["FEAT_AdvSIMD"] }), "sqdmull s12, h22, h12");
  assert.equal(disasm(1584173937, undefined, { features: ["FEAT_AdvSIMD"] }), "sqdmlal s17, h27, h12");
  assert.equal(disasm(1585033614, undefined, { features: ["FEAT_AdvSIMD"] }), "sqdmlsl s14, h12, h25");
  assert.equal(disasm(239209504, undefined, { features: ["FEAT_AdvSIMD", "FEAT_FP16"] }), "fmla v0.4h, v1.4h, v2.4h");
  assert.equal(disasm(247598112, undefined, { features: ["FEAT_AdvSIMD", "FEAT_FP16"] }), "fmls v0.4h, v1.4h, v2.4h");
});

test("decodes AdvSIMD move-immediate and move-alias forms", () => {
  const options = { features: ["FEAT_AdvSIMD"] };
  assert.equal(disasm(0x0f008420, undefined, options), "movi v0.4h, #1");
  assert.equal(disasm(0x4f00c420, undefined, options), "movi v0.4s, #1, msl #8");
  assert.equal(disasm(0x2f00d420, undefined, options), "mvni v0.2s, #1, msl #16");
  assert.equal(disasm(0x6f05e540, undefined, options), "movi v0.2d, #0xff00ff00ff00ff00");
  assert.equal(disasm(0x0f03f601, undefined, options), "fmov v1.2s, #1.00000000");
  assert.equal(disasm(0x0ebf1fe0, undefined, options), "mov v0.8b, v31.8b");
});

test("marks feature-gated PAuth instructions undefined when features are disabled", () => {
  const decoded = decode(0xd503233f);
  assert.equal(decoded.status, "undefined");
});
