import { OperandDecodeError } from "./operand-errors.ts";
import { operandField, operandFieldOneOf, vectorGroup } from "./operand-schemas.ts";
import type { ZaOperand } from "./operand-types.ts";
import type { DecodedInstruction, Operand, VectorRegisterOperand } from "./types.ts";

function vecReg(index: number, lane?: "b" | "h" | "s" | "d"): VectorRegisterOperand {
  return { kind: "vec", index, lane };
}

function sveVectorLaneFromSize(size: number | undefined): "b" | "h" | "s" | "d" {
  return (["b", "h", "s", "d"] as const)[size ?? 0];
}

export function smeDotGroupCount(className: string): 2 | 4 {
  return className.includes("Four") ? 4 : 2;
}

export function smeDotAccumulatorLane(inst: DecodedInstruction): "h" | "s" | "d" {
  if (inst.encoding!.fileName.includes("z8z8")) {
    return inst.encoding!.fileName.includes("za32") ? "s" : "h";
  }
  if (inst.encoding!.fileName.includes("za32")) {
    return "s";
  }
  if (inst.fields?.sz !== undefined) {
    return inst.fields.sz === 1 ? "d" : "s";
  }
  return inst.encoding!.className.includes("64-bit") || /_d[24]xi$/.test(inst.encoding!.encodingId) ? "d" : "s";
}

function smeDotSourceLane(inst: DecodedInstruction, accLane: "h" | "s" | "d"): "b" | "h" {
  if (inst.encoding!.fileName.includes("z8z8")) {
    return "b";
  }
  return accLane === "d" ||
      inst.encoding!.fileName.includes("za32") ||
      inst.encoding!.fileName.startsWith("bfvdot_") ||
      inst.encoding!.fileName.startsWith("fvdot_") ||
      inst.encoding!.fileName.startsWith("bfdot_") ||
      inst.encoding!.fileName.startsWith("fdot_")
    ? "h"
    : "b";
}

function smeAccumulatorLane(inst: DecodedInstruction): "s" | "h" | "d" {
  const encoding = inst.encoding!;
  if (encoding.mnemonic.startsWith("BF") || encoding.className.includes("half-precision") || encoding.encodingId.endsWith("_16")) return "h";
  if (encoding.className.includes("double-precision") || encoding.className.includes("64-bit") || /_d(?:[24]x)?i?$/.test(encoding.encodingId)) return "d";
  if (inst.fields?.size !== undefined) return sveVectorLaneFromSize(inst.fields.size) as "h" | "s" | "d";
  return inst.fields?.sz === 1 ? "d" : "s";
}

function smeMultiVectorArithmeticLane(inst: DecodedInstruction): "b" | "h" | "s" | "d" {
  if (inst.encoding!.mnemonic.startsWith("BF")) {
    return "h";
  }
  return sveVectorLaneFromSize(operandField(inst, "size"));
}

export function smeMultiVectorArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  const lane = smeMultiVectorArithmeticLane(inst);
  const group = vectorGroup((operandField(inst, "Zdn")) * count, count, lane) satisfies Operand;
  const second: Operand = inst.encoding!.fileName.endsWith("_zzw.xml")
    ? vectorGroup((operandField(inst, "Zm")) * count, count, lane)
    : vecReg(operandField(inst, "Zm"), lane);
  return [group, group, second];
}

export function smeMultiVectorClampOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  const lane = inst.encoding!.mnemonic.startsWith("BF") ? "h" : sveVectorLaneFromSize(fields.size);
  return [
    vectorGroup((operandField(inst, "Zd")) * count, count, lane),
    vecReg(operandField(inst, "Zn"), lane),
    vecReg(operandField(inst, "Zm"), lane),
  ];
}

export function smeIntFloatConvertOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  return [
    vectorGroup((operandField(inst, "Zd")) * count, count, "s"),
    vectorGroup((operandField(inst, "Zn")) * count, count, "s"),
  ];
}

function smeLutiVectorGroupOperand(inst: DecodedInstruction, count: 1 | 2 | 4, lane: "b" | "h" | "s" | "d"): Operand {
  if (count === 1) return vecReg(operandField(inst, "Zd"), lane);
  if (inst.encoding!.encodingId.endsWith("_1")) return vectorGroup(operandField(inst, "Zd") * count, count, lane);
  const start = (operandField(inst, "D") << 4) | operandField(inst, "Zd");
  const stride = count === 2 ? 8 : 4;
  return { kind: "vector-group", style: "list", registers: Array.from({ length: count }, (_, index) => vecReg(start + stride * index, lane)) };
}

function smeLutiIndex(inst: DecodedInstruction): number {
  const fields = inst.fields!;
  switch (inst.encoding!.fileName) {
    case "luti2_z_ztz.xml":
      return operandField(inst, "i4");
    case "luti2_mz2_ztz.xml":
      return operandField(inst, "i3");
    case "luti4_z_ztz.xml":
      return operandField(inst, "i3");
    case "luti2_mz4_ztz.xml":
    case "luti4_mz2_ztz.xml":
      return operandField(inst, "i2");
    case "luti4_mz4_ztz.xml":
      return operandField(inst, "i1");
    default:
      return 0;
  }
}

export function smeLutiOperands(inst: DecodedInstruction, count: 1 | 2 | 4): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    smeLutiVectorGroupOperand(inst, count, lane),
    { kind: "text", text: "zt0" },
    { kind: "vec", index: operandField(inst, "Zn"), laneIndex: smeLutiIndex(inst) },
  ];
}

export function smeFp8LutiMixedOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const sourceStart = (operandField(inst, "Zn")) * 2;
  return [
    smeLutiVectorGroupOperand(inst, 4, "b"),
    { kind: "text", text: "zt0" },
    { kind: "vector-group", style: "list", registers: [vecReg(sourceStart), vecReg((sourceStart + 1) & 31)] },
  ];
}

export function smeIndexedSourceOperand(inst: DecodedInstruction, lane: "b" | "s" | "h" | "d"): VectorRegisterOperand {
  const fields = inst.fields!;
  const widthByName = new Map(inst.encoding!.fields.map((field) => [field.name, field.width] as const));
  let index: number | undefined;
  if (widthByName.has("i4A")) {
    index = (operandField(inst, "i4A") << 3) | (operandField(inst, "i4B") << 1) | operandField(inst, "i4C");
  } else {
    for (const bits of [4, 3, 2]) {
      const highName = `i${bits}h`;
      const lowName = `i${bits}l`;
      if (widthByName.has(highName) || widthByName.has(lowName)) {
        const high = widthByName.has(highName) ? operandField(inst, highName) : 0;
        const low = widthByName.has(lowName) ? operandField(inst, lowName) : 0;
        index = (high << (widthByName.get(lowName) ?? 0)) | low;
        break;
      }
    }
    if (index === undefined) {
      index = operandFieldOneOf(inst, ["i4", "i3", "i2", "i1"]);
      if (widthByName.has("i2") && widthByName.has("i1")) index = (operandField(inst, "i2") << 1) | operandField(inst, "i1");
    }
  }
  return { kind: "vec", index: operandField(inst, "Zm"), lane, laneIndex: index };
}

export function smeIndexedSourceText(inst: DecodedInstruction, lane: "b" | "s" | "h" | "d"): string {
  const operand = smeIndexedSourceOperand(inst, lane);
  return `z${operand.index}.${operand.lane}[${operand.laneIndex}]`;
}

function smeFp8LongArithmeticZaOperand(inst: DecodedInstruction): ZaOperand {
  const fields = inst.fields!;
  const isHalf = inst.encoding!.fileName.startsWith("fmlal_za_z8z8");
  const start = isHalf ? 2 * (operandFieldOneOf(inst, ["off3", "off2"])) : 4 * (operandFieldOneOf(inst, ["off2", "o1"]));
  const count = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  return { kind: "za", lane: isHalf ? "h" : "s", slice: { selector: 8 + (operandField(inst, "Rv")), offset: start,
    end: start + (isHalf ? 1 : 3), group: count === 1 ? undefined : count } };
}

function smeLongArithmeticLane(inst: DecodedInstruction): "s" | "d" {
  return inst.encoding!.className.includes("64-bit") || /_d(?:[24]xi)?$/.test(inst.encoding!.encodingId) || inst.fields?.sz === 1 ? "d" : "s";
}

function smeLongArithmeticSourceLane(accLane: "s" | "d"): "b" | "h" {
  return accLane === "d" ? "h" : "b";
}

function smeFloatLongArithmeticZaOperand(inst: DecodedInstruction): ZaOperand {
  const fields = inst.fields!;
  const start = 2 * (operandFieldOneOf(inst, ["off3", "off2"]));
  const count = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  return { kind: "za", lane: "s", slice: { selector: 8 + (operandField(inst, "Rv")), offset: start,
    end: start + 1, group: count === 1 ? undefined : count } };
}

function smeFloatLongArithmeticSourceLane(): "h" {
  return "h";
}

function smeLongArithmeticZaOperand(inst: DecodedInstruction, lane: "s" | "d"): ZaOperand {
  const fields = inst.fields!;
  const start = 4 * (operandFieldOneOf(inst, ["off2", "o1"]));
  const count = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  return { kind: "za", lane, slice: { selector: 8 + (operandField(inst, "Rv")), offset: start,
    end: start + 3, group: count === 1 ? undefined : count } };
}

function smeInt16LongArithmeticFiles(fileName: string): boolean {
  switch (fileName) {
    case "smlal_za_zzi.xml":
    case "smlal_za_zzv.xml":
    case "smlal_za_zzw.xml":
    case "smlsl_za_zzi.xml":
    case "smlsl_za_zzv.xml":
    case "smlsl_za_zzw.xml":
    case "umlal_za_zzi.xml":
    case "umlal_za_zzv.xml":
    case "umlal_za_zzw.xml":
    case "umlsl_za_zzi.xml":
    case "umlsl_za_zzv.xml":
    case "umlsl_za_zzw.xml":
      return true;
    default:
      return false;
  }
}

function smeLongArithmeticGroupSize(encodingId: string): 1 | 2 | 4 {
  if (encodingId.includes("4x")) {
    return 4;
  }
  if (encodingId.includes("2x")) {
    return 2;
  }
  return 1;
}

function smeGroupStart(inst: DecodedInstruction, fieldName: "Zn" | "Zm"): number {
  const field = inst.encoding!.fields.find((field) => field.name === fieldName);
  if (!field) throw new OperandDecodeError("invalid", `missing vector group field: ${fieldName}`, inst.encoding!.fileName);
  return operandField(inst, fieldName) << (5 - field.width);
}

function smeLongArithmeticSecondSource(inst: DecodedInstruction, lane: "b" | "h"): Operand {
  const encodingId = inst.encoding!.encodingId;
  if (/_zzi_|_z8z8i_/.test(encodingId)) return smeIndexedSourceOperand(inst, lane);
  if (!/_zzw_|_z8z8w_/.test(encodingId)) return vecReg(operandField(inst, "Zm"), lane);
  return vectorGroup(smeGroupStart(inst, "Zm"), smeLongArithmeticGroupSize(encodingId), lane);
}

function smeLongArithmeticFirstSource(inst: DecodedInstruction, lane: "b" | "h"): Operand {
  const groupSize = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  return groupSize === 1 ? vecReg(operandField(inst, "Zn"), lane) : vectorGroup(smeGroupStart(inst, "Zn"), groupSize, lane);
}

export function smeLongArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = smeLongArithmeticLane(inst);
  const srcLane = smeInt16LongArithmeticFiles(inst.encoding!.fileName) ? "h" : smeLongArithmeticSourceLane(lane);
  const za = smeInt16LongArithmeticFiles(inst.encoding!.fileName)
    ? smeFloatLongArithmeticZaOperand(inst) : smeLongArithmeticZaOperand(inst, lane);
  const first = smeLongArithmeticFirstSource(inst, srcLane);
  const second = smeLongArithmeticSecondSource(inst, srcLane);

  return [za, first, second];
}

export function smeFloatLongArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const srcLane = smeFloatLongArithmeticSourceLane();
  const za = smeFloatLongArithmeticZaOperand(inst);
  const first = smeLongArithmeticFirstSource(inst, srcLane);
  const second = smeLongArithmeticSecondSource(inst, srcLane);

  return [za, first, second];
}

export function smeFp8LongArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const za = smeFp8LongArithmeticZaOperand(inst);
  const first = smeLongArithmeticFirstSource(inst, "b");
  const second = smeLongArithmeticSecondSource(inst, "b");

  return [za, first, second];
}

export function smeArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  const lane = inst.encoding!.fileName.includes("_mz_")
    ? smeMultiVectorArithmeticLane(inst) : smeAccumulatorLane(inst);
  if (inst.encoding!.fileName.includes("_mz_")) {
    const group = vectorGroup((operandField(inst, "Zdn")) * count, count, lane);
    return [group, group, inst.encoding!.fileName.endsWith("_zzw.xml")
      ? vectorGroup(smeGroupStart(inst, "Zm"), count, lane) : vecReg(operandField(inst, "Zm"), lane)];
  }
  const za: Operand = { kind: "za", lane, slice: { selector: 8 + (operandField(inst, "Rv")), offset: operandField(inst, "off3"), group: count } };
  if (inst.encoding!.fileName.endsWith("_zw.xml")) return [za, vectorGroup(smeGroupStart(inst, "Zm"), count, lane)];
  const first = vectorGroup(smeGroupStart(inst, "Zn"), count, lane);
  if (inst.encoding!.fileName.endsWith("_zzi.xml")) return [za, first, smeIndexedSourceOperand(inst, lane)];
  return [za, first, inst.encoding!.fileName.endsWith("_zzw.xml")
    ? vectorGroup(smeGroupStart(inst, "Zm"), count, lane) : vecReg(operandField(inst, "Zm"), lane)];
}

export function smeDotOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count =
    inst.encoding!.fileName === "fvdotb_za32_z8z8i.xml" || inst.encoding!.fileName === "fvdott_za32_z8z8i.xml"
      ? 4
      : inst.encoding!.encodingId.includes("4xi") ? 4 : smeDotGroupCount(inst.encoding!.className);
  const firstCount =
    inst.encoding!.fileName === "fvdot_za_z8z8i.xml" ||
    inst.encoding!.fileName === "fvdotb_za32_z8z8i.xml" ||
    inst.encoding!.fileName === "fvdott_za32_z8z8i.xml"
      ? 2
      : count;
  const accLane = smeDotAccumulatorLane(inst);
  const srcLane = smeDotSourceLane(inst, accLane);
  const za: Operand = { kind: "za", lane: accLane, slice: { selector: 8 + (operandField(inst, "Rv")), offset: operandField(inst, "off3"), group: count } };
  const first = vectorGroup(smeGroupStart(inst, "Zn"), firstCount, srcLane);

  if (/(?:_zzi|_z8z8i)\.xml$/.test(inst.encoding!.fileName)) return [za, first, smeIndexedSourceOperand(inst, srcLane)];
  return [za, first, /(?:_zzw|_z8z8w)\.xml$/.test(inst.encoding!.fileName)
    ? vectorGroup(smeGroupStart(inst, "Zm"), count, srcLane) : vecReg(operandField(inst, "Zm"), srcLane)];
}
