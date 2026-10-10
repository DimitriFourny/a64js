import { OperandDecodeError } from "./operand-errors.ts";
import { vectorGroup } from "./operand-schemas.ts";
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



function smeVectorGroupText(start: number, count: 2 | 4, lane: "b" | "h" | "s" | "d" | "q"): string {
  const regs = Array.from({ length: count }, (_, index) => `z${(start + index) & 31}.${lane}`);
  if (count === 4 && start <= 28) {
    return `{ ${regs[0]} - ${regs[3]} }`;
  }
  return `{ ${regs.join(", ")} }`;
}

function smeMultiVectorArithmeticLane(inst: DecodedInstruction): "b" | "h" | "s" | "d" {
  if (inst.encoding!.mnemonic.startsWith("BF")) {
    return "h";
  }
  return sveVectorLaneFromSize(inst.fields?.size);
}

export function smeMultiVectorArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  const lane = smeMultiVectorArithmeticLane(inst);
  const group = vectorGroup((fields.Zdn ?? 0) * count, count, lane) satisfies Operand;
  const second: Operand = inst.encoding!.fileName.endsWith("_zzw.xml")
    ? vectorGroup((fields.Zm ?? 0) * count, count, lane)
    : vecReg(fields.Zm ?? 0, lane);
  return [group, group, second];
}

export function smeMultiVectorClampOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  const lane = inst.encoding!.mnemonic.startsWith("BF") ? "h" : sveVectorLaneFromSize(fields.size);
  return [
    vectorGroup((fields.Zd ?? 0) * count, count, lane),
    vecReg(fields.Zn ?? 0, lane),
    vecReg(fields.Zm ?? 0, lane),
  ];
}

export function smeIntFloatConvertOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  return [
    vectorGroup((fields.Zd ?? 0) * count, count, "s"),
    vectorGroup((fields.Zn ?? 0) * count, count, "s"),
  ];
}

function smeLutiVectorGroupText(inst: DecodedInstruction, count: 1 | 2 | 4, lane: "b" | "h" | "s" | "d"): string {
  const fields = inst.fields!;
  if (count === 1) {
    return `z${fields.Zd ?? 0}.${lane}`;
  }

  const encodingId = inst.encoding!.encodingId;
  if (encodingId.endsWith("_1")) {
    return smeVectorGroupText((fields.Zd ?? 0) * count, count, lane);
  }

  const start = ((fields.D ?? 0) << 4) | (fields.Zd ?? 0);
  const stride = count === 2 ? 8 : 4;
  const regs = Array.from({ length: count }, (_, index) => `z${start + stride * index}.${lane}`);
  return `{ ${regs.join(", ")} }`;
}

function smeLutiIndex(inst: DecodedInstruction): number {
  const fields = inst.fields!;
  switch (inst.encoding!.fileName) {
    case "luti2_z_ztz.xml":
      return fields.i4 ?? 0;
    case "luti2_mz2_ztz.xml":
      return fields.i3 ?? 0;
    case "luti4_z_ztz.xml":
      return fields.i3 ?? 0;
    case "luti2_mz4_ztz.xml":
    case "luti4_mz2_ztz.xml":
      return fields.i2 ?? 0;
    case "luti4_mz4_ztz.xml":
      return fields.i1 ?? 0;
    default:
      return 0;
  }
}

export function smeLutiOperands(inst: DecodedInstruction, count: 1 | 2 | 4): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    { kind: "text", text: smeLutiVectorGroupText(inst, count, lane) },
    { kind: "text", text: "zt0" },
    { kind: "text", text: `z${fields.Zn ?? 0}[${smeLutiIndex(inst)}]` },
  ];
}

export function smeFp8LutiMixedOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const sourceStart = (fields.Zn ?? 0) * 2;
  return [
    { kind: "text", text: smeLutiVectorGroupText(inst, 4, "b") },
    { kind: "text", text: "zt0" },
    { kind: "text", text: `{ z${sourceStart}, z${(sourceStart + 1) & 31} }` },
  ];
}

export function smeIndexedSourceOperand(inst: DecodedInstruction, lane: "b" | "s" | "h" | "d"): VectorRegisterOperand {
  const fields = inst.fields!;
  const widthByName = new Map(inst.encoding!.fields.map((field) => [field.name, field.width] as const));
  let index = fields.i4 ?? fields.i3 ?? (fields.i1 === undefined ? fields.i2 ?? 0 : ((fields.i2 ?? 0) << 1) | fields.i1);
  for (const bits of [4, 3, 2]) {
    const high = fields[`i${bits}h`];
    const low = fields[`i${bits}l`];
    if (high !== undefined || low !== undefined) index = ((high ?? 0) << (widthByName.get(`i${bits}l`) ?? 0)) | (low ?? 0);
  }
  if (fields.i4A !== undefined) index = (fields.i4A << 3) | (fields.i4B << 1) | fields.i4C;
  return { kind: "vec", index: fields.Zm ?? 0, lane, laneIndex: index };
}

export function smeIndexedSourceText(inst: DecodedInstruction, lane: "b" | "s" | "h" | "d"): string {
  const operand = smeIndexedSourceOperand(inst, lane);
  return `z${operand.index}.${operand.lane}[${operand.laneIndex}]`;
}

function smeFp8LongArithmeticZaText(inst: DecodedInstruction): ZaOperand {
  const fields = inst.fields!;
  const isHalf = inst.encoding!.fileName.startsWith("fmlal_za_z8z8");
  const start = isHalf ? 2 * (fields.off3 ?? fields.off2 ?? 0) : 4 * (fields.off2 ?? 0);
  const count = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  return { kind: "za", lane: isHalf ? "h" : "s", slice: { selector: 8 + (fields.Rv ?? 0), offset: start,
    end: start + (isHalf ? 1 : 3), group: count === 1 ? undefined : count } };
}

function smeLongArithmeticLane(inst: DecodedInstruction): "s" | "d" {
  return inst.encoding!.className.includes("64-bit") || /_d(?:[24]xi)?$/.test(inst.encoding!.encodingId) || inst.fields?.sz === 1 ? "d" : "s";
}

function smeLongArithmeticSourceLane(accLane: "s" | "d"): "b" | "h" {
  return accLane === "d" ? "h" : "b";
}


function smeFloatLongArithmeticZaText(inst: DecodedInstruction): ZaOperand {
  const fields = inst.fields!;
  const start = 2 * (fields.off3 ?? fields.off2 ?? 0);
  const count = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  return { kind: "za", lane: "s", slice: { selector: 8 + (fields.Rv ?? 0), offset: start,
    end: start + 1, group: count === 1 ? undefined : count } };
}

function smeFloatLongArithmeticSourceLane(): "h" {
  return "h";
}

function smeLongArithmeticZaText(inst: DecodedInstruction, lane: "s" | "d"): ZaOperand {
  const fields = inst.fields!;
  const start = 4 * (fields.off2 ?? fields.o1 ?? 0);
  const count = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  return { kind: "za", lane, slice: { selector: 8 + (fields.Rv ?? 0), offset: start,
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
  return (inst.fields![fieldName] ?? 0) << (5 - field.width);
}

function smeLongArithmeticSecondSource(inst: DecodedInstruction, lane: "b" | "h"): Operand {
  const encodingId = inst.encoding!.encodingId;
  if (/_zzi_|_z8z8i_/.test(encodingId)) return smeIndexedSourceOperand(inst, lane);
  if (!/_zzw_|_z8z8w_/.test(encodingId)) return vecReg(inst.fields!.Zm ?? 0, lane);
  return vectorGroup(smeGroupStart(inst, "Zm"), smeLongArithmeticGroupSize(encodingId), lane);
}

function smeLongArithmeticFirstSource(inst: DecodedInstruction, lane: "b" | "h"): Operand {
  const groupSize = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  return groupSize === 1 ? vecReg(inst.fields!.Zn ?? 0, lane) : vectorGroup(smeGroupStart(inst, "Zn"), groupSize, lane);
}

export function smeLongArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = smeLongArithmeticLane(inst);
  const srcLane = smeInt16LongArithmeticFiles(inst.encoding!.fileName) ? "h" : smeLongArithmeticSourceLane(lane);
  const za = smeInt16LongArithmeticFiles(inst.encoding!.fileName)
    ? smeFloatLongArithmeticZaText(inst) : smeLongArithmeticZaText(inst, lane);
  const first = smeLongArithmeticFirstSource(inst, srcLane);
  const second = smeLongArithmeticSecondSource(inst, srcLane);

  return [za, first, second];
}

export function smeFloatLongArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const srcLane = smeFloatLongArithmeticSourceLane();
  const za = smeFloatLongArithmeticZaText(inst);
  const first = smeLongArithmeticFirstSource(inst, srcLane);
  const second = smeLongArithmeticSecondSource(inst, srcLane);

  return [za, first, second];
}

export function smeFp8LongArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const za = smeFp8LongArithmeticZaText(inst);
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
    const group = vectorGroup((fields.Zdn ?? 0) * count, count, lane);
    return [group, group, inst.encoding!.fileName.endsWith("_zzw.xml")
      ? vectorGroup(smeGroupStart(inst, "Zm"), count, lane) : vecReg(fields.Zm ?? 0, lane)];
  }
  const za: Operand = { kind: "za", lane, slice: { selector: 8 + (fields.Rv ?? 0), offset: fields.off3 ?? 0, group: count } };
  if (inst.encoding!.fileName.endsWith("_zw.xml")) return [za, vectorGroup(smeGroupStart(inst, "Zm"), count, lane)];
  const first = vectorGroup(smeGroupStart(inst, "Zn"), count, lane);
  if (inst.encoding!.fileName.endsWith("_zzi.xml")) return [za, first, smeIndexedSourceOperand(inst, lane)];
  return [za, first, inst.encoding!.fileName.endsWith("_zzw.xml")
    ? vectorGroup(smeGroupStart(inst, "Zm"), count, lane) : vecReg(fields.Zm ?? 0, lane)];
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
  const za: Operand = { kind: "za", lane: accLane, slice: { selector: 8 + (fields.Rv ?? 0), offset: fields.off3 ?? 0, group: count } };
  const first = vectorGroup(smeGroupStart(inst, "Zn"), firstCount, srcLane);

  if (/(?:_zzi|_z8z8i)\.xml$/.test(inst.encoding!.fileName)) return [za, first, smeIndexedSourceOperand(inst, srcLane)];
  return [za, first, /(?:_zzw|_z8z8w)\.xml$/.test(inst.encoding!.fileName)
    ? vectorGroup(smeGroupStart(inst, "Zm"), count, srcLane) : vecReg(fields.Zm ?? 0, srcLane)];
}
