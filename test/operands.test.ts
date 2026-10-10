import test from "node:test";
import assert from "node:assert/strict";
import { decode, disasm, format } from "../src/index.ts";
import { buildOperands, formatOperand, getOperandFamilyId, listOperandFamilies } from "../src/formatters.ts";
import { OperandDecodeError } from "../src/operand-errors.ts";
import { OperandFamilyRegistry } from "../src/operand-registry.ts";
import { vectorGroup } from "../src/operand-schemas.ts";
import type { DecodedInstruction, GeneratedEncoding } from "../src/types.ts";
import { SUPPORTED_CAPSTONE_CASES } from "./generated/capstone/index.generated.ts";
import { SUPPORTED_FILES } from "../tools/supported-files.ts";

const RESTORED_OPERAND_FILES = new Set([
  "bfcvt_float", "autiasppcr", "autibsppcr", "retasppcr_reg", "famax_mz_zzw", "famin_mz_zzw",
  "fscale_mz_zzv", "fscale_mz_zzw", "fdot_advsimd_2wayvec", "fdot_advsimd_4wayvec",
  "fdot_advsimd_2wayelem", "fdot_advsimd_4wayelem", "ldnt1sb_z_p_ar", "ldnt1sh_z_p_ar",
  "ldnt1sw_z_p_ar", "sqrshr_z_mz2", "sqrshru_z_mz2", "uqrshr_z_mz2", "fcvt_z_p_z",
  "fcvtzs_z_p_z", "fcvtzu_z_p_z", "scvtf_z_p_z", "ucvtf_z_p_z", "sqrshrn_z_mz2",
  "sqrshrun_z_mz2", "uqrshrn_z_mz2",
].map((file) => `${file}.xml`));

test("restored operand families match every independent corpus operand reference", () => {
  const cases = SUPPORTED_CAPSTONE_CASES.filter((entry) => RESTORED_OPERAND_FILES.has(entry.encodingFile));
  assert.ok(cases.length >= 206);
  for (const entry of cases) {
    const actual = disasm(entry.word, undefined, { features: entry.features });
    // PAuth LR register forms use an R suffix in this XML revision. Compare their
    // operands here; mnemonic dialect is tested independently from operand decoding.
    const registerPauth = ["autiasppcr.xml", "autibsppcr.xml", "retasppcr_reg.xml"].includes(entry.encodingFile);
    const operandText = (text: string) => text.slice(text.indexOf(" ") + 1).replace(/\s+/g, " ").trim();
    assert.equal(registerPauth ? operandText(actual) : actual, registerPauth ? operandText(entry.asmText) : entry.asmText,
      `${entry.sourceFile}#${entry.caseIndex} 0x${entry.word.toString(16)}`);
  }
});

test("SIMD scalar, arranged vector and indexed dot operands retain their structure", () => {
  assert.deepEqual(decode(0x1e634020, { features: ["FEAT_BF16"] }).operands, [
    { kind: "simd", index: 0, scalar: "h" }, { kind: "simd", index: 1, scalar: "s" },
  ]);
  const dot = decode(1333725184, { features: ["FEAT_FP8DOT2"] });
  assert.deepEqual(dot.operands?.[2], {
    kind: "simd", index: 15, arrangement: { lanes: 2, element: "b" }, laneIndex: 7,
  });
  assert.equal(format(dot), "fdot v0.8h, v0.16b, v15.2b[7]");
});

test("vector-base non-temporal loads expose the address and omit the zero offset register", () => {
  const entry = SUPPORTED_CAPSTONE_CASES.find((entry) => entry.encodingFile === "ldnt1sb_z_p_ar.xml" && entry.asmText.includes(", x"))!;
  const instruction = decode(entry.word, { features: entry.features });
  assert.equal(instruction.operands?.[0].kind, "vector-group");
  const memory = instruction.operands?.[2];
  assert.equal(memory?.kind, "mem");
  if (memory?.kind === "mem") {
    assert.equal(memory.base.kind, "vec");
    assert.equal(memory.offset?.kind, "reg");
  }
  const noOffset = (entry.word | (31 << 16)) >>> 0;
  const withoutOffset = decode(noOffset, { features: entry.features });
  assert.equal(withoutOffset.status, "ok");
  assert.equal(withoutOffset.operands?.[2].kind, "mem");
  if (withoutOffset.operands?.[2].kind === "mem") assert.equal(withoutOffset.operands[2].offset, undefined);
});

test("vector groups retain ordered members and handle wraparound", () => {
  const wrap = vectorGroup(31, 2, "s");
  assert.deepEqual(wrap.registers.map((register) => register.index), [31, 0]);
  assert.equal(formatOperand(wrap), "{ z31.s, z0.s }");
  assert.equal(formatOperand(vectorGroup(28, 4, "d")), "{ z28.d - z31.d }");
});

test("SME arithmetic preserves accumulator widths, encoded group alignment and split indices", () => {
  for (const word of [0xc1d00000, 0xc1800000, 0xc1255955, 0xc1b44141, 0xc1508020, 0xc1cfefef, 0xc08b03dc, 0xc00800b7, 0xc12f63e3, 0xc04f33ff]) {
    const entry = SUPPORTED_CAPSTONE_CASES.find((entry) => entry.word === word)!;
    assert.equal(disasm(word, undefined, { features: entry.features }), entry.asmText.replace(/\s+/g, " "));
  }
  const dot = decode(0xc1508020, { features: ["FEAT_SME2"] });
  assert.deepEqual(dot.operands?.[0], { kind: "za", lane: "s", slice: { selector: 8, offset: 0, group: 4 } });
  assert.equal(dot.operands?.[1].kind, "vector-group");
  assert.deepEqual(dot.operands?.[2], { kind: "vec", index: 0, lane: "b", laneIndex: 0 });
});

test("scalar memory operands expose writeback, signed offsets, SIMD widths and register modifiers", () => {
  const pre = decode(3092250611).operands?.[1];
  assert.deepEqual(pre, {
    kind: "mem", base: { kind: "reg", width: 64, index: 31, zeroName: "sp" },
    offset: { kind: "imm", value: 255n }, mode: "pre-index", immediateFormat: "hex",
  });
  const registerOffset = decode(3093789642).operands?.[1];
  assert.deepEqual(registerOffset, {
    kind: "mem", base: { kind: "reg", width: 64, index: 30, zeroName: "sp" },
    offset: { kind: "reg", width: 64, index: 7, zeroName: "zr" }, modifier: { kind: "lsl", amount: 2 },
  });
  assert.deepEqual(decode(1019224109, { features: ["FEAT_FP"] }).operands?.[0], { kind: "simd", index: 13, scalar: "q" });
  assert.equal(disasm(3088056336), "stur w16, [x0, #-0x100]");
  assert.equal(disasm(0x3ca5fb6d, undefined, { features: ["FEAT_FP"] }), "str q13, [x27, x5, sxtx #4]");
});

function synthetic(fileName: string, fields: Record<string, number> = {}): DecodedInstruction {
  const encoding: GeneratedEncoding = {
    instructionId: "TEST", encodingId: "TEST", mnemonic: "TEST", className: "test", fileName,
    mask: 0, value: 0, fields: [], features: [], featureGuards: [], guards: [],
  };
  return { status: "ok", word: 0, encoding, mnemonic: "TEST", fields };
}

test("every supported XML has an explicit operand family with immutable coverage metadata", () => {
  const families = listOperandFamilies();
  assert.ok(Object.isFrozen(families));
  const fileFamilies = new Map<string, string>();
  for (const family of families) {
    assert.ok(Object.isFrozen(family));
    assert.ok(Object.isFrozen(family.files));
    for (const file of family.files) {
      assert.ok(!fileFamilies.has(file), `duplicate coverage for ${file}`);
      fileFamilies.set(file, family.id);
    }
  }
  for (const file of SUPPORTED_FILES) {
    assert.ok(fileFamilies.has(file), `missing operand implementation for ${file}`);
    assert.equal(getOperandFamilyId(file), fileFamilies.get(file));
  }
  assert.equal(getOperandFamilyId("unimplemented.xml"), undefined);
  assert.equal(getOperandFamilyId("nop.xml"), "no-operands");
});

test("operand family registration rejects conflicting ids and file ownership", () => {
  const build = () => [{ kind: "imm" as const, value: 0n }];
  assert.throws(() => new OperandFamilyRegistry([
    { id: "one", files: ["one.xml"], build },
    { id: "one", files: ["two.xml"], build },
  ]), /duplicate operand family id: one/);
  assert.throws(() => new OperandFamilyRegistry([
    { id: "one", files: ["same.xml"], build },
    { id: "two", files: ["same.xml"], build },
  ]), /duplicate operand family file: same.xml/);
  assert.throws(() => new OperandFamilyRegistry([{ id: "empty", files: [], build }]), /at least one file/);
});

test("generated family ids select their handler and reject unknown or mismatched metadata", () => {
  const instruction = synthetic("bfcvt_float.xml", { Rd: 1, Rn: 2 });
  const expected = buildOperands(instruction);
  instruction.encoding!.operandFamilyId = getOperandFamilyId("bfcvt_float.xml");
  assert.deepEqual(buildOperands(instruction), expected);
  instruction.encoding!.operandFamilyId = "unimplemented-family";
  assert.throws(() => buildOperands(instruction),
    (error: unknown) => error instanceof OperandDecodeError && error.reason === "unsupported");
  instruction.encoding!.operandFamilyId = "no-operands";
  assert.throws(() => buildOperands(instruction),
    (error: unknown) => error instanceof OperandDecodeError && error.reason === "invalid");
});

test("unsupported operand families and schemas fail explicitly", () => {
  assert.throws(() => buildOperands(synthetic("unimplemented.xml")),
    (error: unknown) => error instanceof OperandDecodeError && error.reason === "unsupported");
  const instruction = synthetic("adc.xml", { sf: 1, Rd: 0, Rn: 1, Rm: 2 });
  instruction.encoding!.operandSchemaId = "unimplemented-schema";
  assert.throws(() => buildOperands(instruction), /unsupported operand schema/);
  assert.throws(() => buildOperands(synthetic("bfcvt_float.xml", { Rd: 0 })), /missing operand field: Rn/);
});

test("invalid logical immediates cannot produce a mnemonic with no operands", () => {
  const instruction = synthetic("and_log_imm.xml", { sf: 0, N: 0, imms: 63, immr: 0, Rd: 0, Rn: 1 });
  assert.throws(() => buildOperands(instruction),
    (error: unknown) => error instanceof OperandDecodeError && error.reason === "invalid");
  assert.throws(() => buildOperands(synthetic("and_log_imm.xml", { sf: 0, N: 1, imms: 1, immr: 0, Rd: 0, Rn: 1 })),
    (error: unknown) => error instanceof OperandDecodeError && error.reason === "invalid");
  const decoded = decode(0x1200fc20);
  assert.equal(decoded.status, "undefined");
  assert.equal(format(decoded), ".inst 0x1200fc20");
});

test("intentional zero operands remain valid", () => {
  assert.deepEqual(decode(0xd503201f).operands, []);
  assert.equal(disasm(0xd503201f), "nop");
  assert.deepEqual(decode(0xd65f03c0).operands, []);
  assert.equal(disasm(0xd65f03c0), "ret");
  const operands = decode(0xd503201f).operands!;
  operands.push({ kind: "imm", value: 1n });
  assert.deepEqual(decode(0xd503201f).operands, []);
});
