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

test("decodes integer datapath multiply and logical forms", () => {
  assert.equal(disasm(453409956), "mul w4, w5, w6");
  assert.equal(disasm(453447777), "madd w1, w3, w7, w4");
  assert.equal(disasm(453480545), "msub w1, w3, w7, w4");
  assert.equal(disasm(168494019), "and w3, w30, w11");
  assert.equal(disasm(176882627), "and w3, w30, w11, asr #0");
  assert.equal(disasm(2325741191), "and x7, x20, xzr, asr #63");
  assert.equal(disasm(839925027), "orr w3, w9, #0xffff0000");
  assert.equal(disasm(302024683), "and w11, wzr, #0x30003");
  assert.equal(disasm(1912661651), "ands w19, w20, #0x33333333");
  assert.equal(disasm(4060145299), "ands x19, x20, #0x3333333333333333");
  assert.equal(disasm(1912792671), "tst w18, #0xcccccccc");
  assert.equal(disasm(4060213375), "tst x3, #0xaaaaaaaaaaaaaaaa");
  assert.equal(disasm(1375979715), "eor w3, w6, #0xe0e0e0e0");
  assert.equal(disasm(1377662512), "eor w16, w17, #0xfffffff9");
});

test("decodes scalar bit-manipulation aliases and data movement leftovers", () => {
  assert.equal(disasm(1522534418), "rev w18, w0");
  assert.equal(disasm(3670019158), "rev x22, x2");
  assert.equal(disasm(449651083), "lsl w11, w12, w13");
  assert.equal(disasm(2597725876), "lsr x20, x21, x22");
  assert.equal(disasm(450439959), "asr w23, w24, w25");
  assert.equal(disasm(2596613251), "ror x3, x4, x5");
  assert.equal(disasm(327614627), "extr w3, w5, w7, #0");
  assert.equal(disasm(2479307939), "extr x3, x5, x7, #15");
  assert.equal(disasm(2480366323), "ror x19, x23, #24");
  assert.equal(disasm(328039849), "ror w9, w13, #31");
});

test("decodes barrier and cache/TLB maintenance system instructions", () => {
  assert.equal(disasm(3573759935), "dmb sy");
  assert.equal(disasm(3573759167), "dmb #12");
  assert.equal(disasm(3573759135), "dfb");
  assert.equal(disasm(3573758623), "dsb ishst");
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
  assert.equal(disasm(630226416, undefined, options), "brkb p0.b, p15/m, p15.b");
  assert.equal(disasm(622361632, undefined, options), "brkn p0.b, p15/z, p1.b, p0.b");
  assert.equal(disasm(626555936, undefined, options), "brkns p0.b, p15/z, p1.b, p0.b");
  assert.equal(disasm(620952608, undefined, options), "brkpa p0.b, p15/z, p1.b, p2.b");
  assert.equal(disasm(625146912, undefined, options), "brkpas p0.b, p15/z, p1.b, p2.b");
  assert.equal(disasm(620952624, undefined, options), "brkpb p0.b, p15/z, p1.b, p2.b");
  assert.equal(disasm(625146928, undefined, options), "brkpbs p0.b, p15/z, p1.b, p2.b");
  assert.equal(disasm(626064384, undefined, options), "ptest p15, p0.b");
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

test("decodes SME ZA tile-slice load/store operands", () => {
  const options = { features: ["FEAT_SME"] };
  assert.equal(disasm(3758096384, undefined, options), "ld1b {za0h.b[w12, 0]}, p0/z, [x0, x0]");
  assert.equal(disasm(3758129152, undefined, options), "ld1b {za0v.b[w12, 0]}, p0/z, [x0, x0]");
  assert.equal(disasm(3772077381, undefined, options), "ld1d {za2h.d[w14, 1]}, p5/z, [x10, x21, lsl #3]");
  assert.equal(disasm(3788854597, undefined, options), "ld1q {za5h.q[w14, 0]}, p5/z, [x10, x21, lsl #4]");
  assert.equal(disasm(3769346439, undefined, options), "st1w {za1v.s[w13, 3]}, p2, [x12, x11, lsl #2]");
  assert.equal(disasm(3774840815, undefined, options), "st1d {za7h.d[w15, 1]}, p7, [sp]");
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

test("decodes AdvSIMD multiple-structure LD1/ST1", () => {
  const options = { features: ["FEAT_AdvSIMD"] };
  assert.equal(disasm(0x4c007000, undefined, options), "st1 { v0.16b }, [x0]");
  assert.equal(disasm(0x4c407000, undefined, options), "ld1 { v0.16b }, [x0]");
  assert.equal(disasm(0x4c402bff, undefined, options), "ld1 { v31.4s, v0.4s, v1.4s, v2.4s }, [sp]");
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

test("marks feature-gated PAuth instructions undefined when features are disabled", () => {
  const decoded = decode(0xd503233f);
  assert.equal(decoded.status, "undefined");
});
