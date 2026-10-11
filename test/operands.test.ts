import test from "node:test";
import assert from "node:assert/strict";
import { decode, disasm, format } from "../src/index.ts";
import { buildOperands, formatOperand, getOperandFamilyId, listOperandFamilies } from "../src/formatters.ts";
import { OperandDecodeError } from "../src/operand-errors.ts";
import { OperandFamilyRegistry } from "../src/operand-registry.ts";
import { vectorGroup } from "../src/operand-schemas.ts";
import type { DecodedInstruction, GeneratedEncoding } from "../src/types.ts";
import { SUPPORTED_FILES } from "../tools/supported-files.ts";

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
  // LDNT1SB's 32-bit vector-base form: fixed bits 100 0010 00 00,
  // Rm[20:16], 10, U=0, Pg[12:10], Zn[9:5], Zt[4:0].
  // Encoding fields come from the local 2025-12 ldnt1sb_z_p_ar.xml.
  const word = (0x8400_8000 | (9 << 16) | (5 << 10) | (17 << 5) | 3) >>> 0;
  const features = ["FEAT_SVE2"];
  const instruction = decode(word, { features });
  assert.equal(instruction.status, "ok");
  assert.equal(instruction.operands?.[0].kind, "vector-group");
  const memory = instruction.operands?.[2];
  assert.equal(memory?.kind, "mem");
  if (memory?.kind === "mem") {
    assert.deepEqual(memory.base, { kind: "vec", index: 17, lane: "s" });
    assert.deepEqual(memory.offset, { kind: "reg", width: 64, index: 9, zeroName: "zr" });
  }
  const noOffset = (word | (31 << 16)) >>> 0;
  const withoutOffset = decode(noOffset, { features });
  assert.equal(withoutOffset.status, "ok");
  assert.equal(withoutOffset.operands?.[2].kind, "mem");
  if (withoutOffset.operands?.[2].kind === "mem") {
    assert.deepEqual(withoutOffset.operands[2].base, { kind: "vec", index: 17, lane: "s" });
    assert.equal(withoutOffset.operands[2].offset, undefined);
  }
});

test("vector groups retain ordered members and handle wraparound", () => {
  const wrap = vectorGroup(31, 2, "s");
  assert.deepEqual(wrap.registers.map((register) => register.index), [31, 0]);
  assert.equal(formatOperand(wrap), "{ z31.s, z0.s }");
  assert.equal(formatOperand(vectorGroup(28, 4, "d")), "{ z28.d - z31.d }");
});

test("SME arithmetic preserves accumulator widths, encoded group alignment and split indices", () => {
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
