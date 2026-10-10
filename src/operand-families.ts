import { OperandDecodeError } from "./operand-errors.ts";
import { buildOperandSchema, gpOperand, operandField, vectorGroup } from "./operand-schemas.ts";
import type { OperandRule } from "./operand-schemas.ts";
import type { ElementSize } from "./operand-types.ts";
import type { DecodedInstruction, Operand } from "./types.ts";

type OperandBuilder = (instruction: DecodedInstruction) => Operand[];
const schema = (rules: readonly OperandRule[]): OperandBuilder => (instruction) => buildOperandSchema(instruction, rules);
const laneFromSize = (instruction: DecodedInstruction): ElementSize => (["b", "h", "s", "d"] as const)[operandField(instruction, "size")];
const groupCount = (instruction: DecodedInstruction): number => instruction.encoding!.className === "Four registers" ? 4 : 2;

function multiVectorArithmetic(instruction: DecodedInstruction): Operand[] {
  const count = groupCount(instruction);
  const lane = instruction.encoding!.mnemonic.startsWith("BF") ? "h" : laneFromSize(instruction);
  const group: OperandRule = { kind: "group", field: "Zdn", count, lane };
  return buildOperandSchema(instruction, [group, group,
    instruction.encoding!.fileName.endsWith("_zzw.xml")
      ? { kind: "group", field: "Zm", count, lane }
      : { kind: "vector", field: "Zm", lane },
  ]);
}

function fp8Dot(instruction: DecodedInstruction): Operand[] {
  const file = instruction.encoding!.fileName;
  const twoWay = file.includes("2way");
  const vectorBits = operandField(instruction, "Q") === 1 ? 128 : 64;
  const destinationLane = twoWay ? "h" : "s";
  const destinationElements = vectorBits / (twoWay ? 16 : 32);
  const source: OperandRule = { kind: "simd", field: "Rn", lane: "b", lanes: vectorBits / 8 };
  const third: OperandRule = file.endsWith("vec.xml")
    ? { ...source, field: "Rm" }
    : {
        kind: "simd", field: "Rm", lane: "b", lanes: twoWay ? 2 : 4,
        index: operandField(instruction, "Rm") | (twoWay ? 0 : operandField(instruction, "M") << 4),
        laneIndex: (operandField(instruction, "H") << (twoWay ? 2 : 1)) |
          (operandField(instruction, "L") << (twoWay ? 1 : 0)) |
          (twoWay ? operandField(instruction, "M") : 0),
      };
  return buildOperandSchema(instruction, [
    { kind: "simd", field: "Rd", lane: destinationLane, lanes: destinationElements }, source, third,
  ]);
}

function predicatedConversion(instruction: DecodedInstruction): Operand[] {
  // XML names describe semantic source and destination types; x/w mean 64/32-bit integers.
  const suffix = instruction.encoding!.encodingId.split("_").at(-1)!;
  const match = /^(fp16|fp32|fp64|[hwsdx])2(fp16|fp32|fp64|[hwsdx])(z)?$/.exec(suffix);
  if (!match) {
    throw new OperandDecodeError("unsupported", `unsupported conversion layout: ${suffix}`, instruction.encoding!.fileName);
  }
  const lanes: Record<string, "h" | "s" | "d"> = { h: "h", fp16: "h", w: "s", s: "s", fp32: "s", x: "d", d: "d", fp64: "d" };
  return buildOperandSchema(instruction, [
    { kind: "vector", field: "Zd", lane: lanes[match[2]] },
    { kind: "predicate", field: "Pg", mode: match[3] ? "z" : "m" },
    { kind: "vector", field: "Zn", lane: lanes[match[1]] },
  ]);
}

function signedNonTemporalLoad(instruction: DecodedInstruction): Operand[] {
  const fields = instruction.fields!;
  const lane = instruction.encoding!.encodingId.includes("_s_") ? "s" : "d";
  return [
    vectorGroup(operandField(instruction, "Zt"), 1, lane),
    { kind: "pred", index: operandField(instruction, "Pg"), mode: "z" },
    {
      kind: "mem", base: { kind: "vec", index: operandField(instruction, "Zn"), lane },
      offset: fields.Rm === 31 ? undefined : gpOperand(operandField(instruction, "Rm")),
    },
  ];
}

function twoVectorNarrowingShift(instruction: DecodedInstruction): Operand[] {
  const byteDestination = instruction.encoding!.encodingId.endsWith("_b");
  const destinationBits = byteDestination ? 8 : 16;
  return buildOperandSchema(instruction, [
    { kind: "vector", field: "Zd", lane: byteDestination ? "b" : "h" },
    { kind: "group", field: "Zn", count: 2, lane: byteDestination ? "h" : "s" },
    { kind: "immediate", value: BigInt(destinationBits - operandField(instruction, byteDestination ? "imm3" : "imm4")), signed: true },
  ]);
}

const FAMILY_BUILDERS: Record<string, OperandBuilder> = {
  "bfcvt_float.xml": schema([{ kind: "scalar", field: "Rd", lane: "h" }, { kind: "scalar", field: "Rn", lane: "s" }]),
  "autiasppcr.xml": schema([{ kind: "gp", field: "Rn", width: 64 }]),
  "autibsppcr.xml": schema([{ kind: "gp", field: "Rn", width: 64 }]),
  "retasppcr_reg.xml": schema([{ kind: "gp", field: "Rm", width: 64 }]),
  "famax_mz_zzw.xml": multiVectorArithmetic,
  "famin_mz_zzw.xml": multiVectorArithmetic,
  "fscale_mz_zzv.xml": multiVectorArithmetic,
  "fscale_mz_zzw.xml": multiVectorArithmetic,
  "fdot_advsimd_2wayvec.xml": fp8Dot,
  "fdot_advsimd_4wayvec.xml": fp8Dot,
  "fdot_advsimd_2wayelem.xml": fp8Dot,
  "fdot_advsimd_4wayelem.xml": fp8Dot,
  "ldnt1sb_z_p_ar.xml": signedNonTemporalLoad,
  "ldnt1sh_z_p_ar.xml": signedNonTemporalLoad,
  "ldnt1sw_z_p_ar.xml": signedNonTemporalLoad,
  "sqrshr_z_mz2.xml": twoVectorNarrowingShift,
  "sqrshru_z_mz2.xml": twoVectorNarrowingShift,
  "uqrshr_z_mz2.xml": twoVectorNarrowingShift,
  "sqrshrn_z_mz2.xml": twoVectorNarrowingShift,
  "sqrshrun_z_mz2.xml": twoVectorNarrowingShift,
  "uqrshrn_z_mz2.xml": twoVectorNarrowingShift,
  "fcvt_z_p_z.xml": predicatedConversion,
  "fcvtzs_z_p_z.xml": predicatedConversion,
  "fcvtzu_z_p_z.xml": predicatedConversion,
  "scvtf_z_p_z.xml": predicatedConversion,
  "ucvtf_z_p_z.xml": predicatedConversion,
};

export function buildFamilyOperands(instruction: DecodedInstruction): Operand[] | undefined {
  const builder = FAMILY_BUILDERS[instruction.encoding!.fileName];
  return builder?.(instruction);
}
