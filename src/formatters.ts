import type {
  DecodedInstruction,
  GeneratedEncoding,
  Operand,
  PredicateRegisterOperand,
  RegisterName,
  SystemRegisterOperand,
  VectorRegisterOperand,
} from "./types.ts";

const COND_NAMES = [
  "eq",
  "ne",
  "cs",
  "cc",
  "mi",
  "pl",
  "vs",
  "vc",
  "hi",
  "ls",
  "ge",
  "lt",
  "gt",
  "le",
  "al",
  "nv",
] as const;

function signExtend(value: number, bits: number): bigint {
  const mask = (1n << BigInt(bits)) - 1n;
  let result = BigInt(value) & mask;
  const signBit = 1n << BigInt(bits - 1);
  if ((result & signBit) !== 0n) {
    result -= 1n << BigInt(bits);
  }
  return result;
}

function reg(width: 32 | 64, index: number, zeroName: "zr" | "sp"): RegisterName {
  return { kind: "reg", width, index, zeroName };
}

function widthFromSf(sf: number | undefined): 32 | 64 {
  return sf === 1 ? 64 : 32;
}

function gpReg(width: 32 | 64, index: number, zeroName: "zr" | "sp" = "zr"): RegisterName {
  return reg(width, index, zeroName);
}

function sysReg(op0: number, op1: number, CRn: number, CRm: number, op2: number): SystemRegisterOperand {
  return { kind: "sysreg", op0, op1, CRn, CRm, op2 };
}

function vecReg(index: number, lane?: "b" | "h" | "s" | "d" | "q"): VectorRegisterOperand {
  return { kind: "vec", index, lane };
}

function predReg(index: number, mode?: "m" | "z", lane?: "b" | "h" | "s" | "d"): PredicateRegisterOperand {
  return { kind: "pred", index, mode, lane };
}

function labelFromOffset(offset: bigint): Operand {
  return { kind: "label", offset };
}

function labelFromPc(offset: bigint, pc: bigint, pageRelative = false): Operand {
  return { kind: "label", offset, absolute: pc + offset, pageRelative };
}

function addSubImmediateOperands(inst: DecodedInstruction, encoding: GeneratedEncoding): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  const mnemonic = encoding.mnemonic;
  const shift = fields.sh === 1 ? 12 : 0;
  const imm = BigInt(fields.imm12) << BigInt(shift);
  const rdZero = mnemonic === "ADD" || mnemonic === "SUB" ? "sp" : "zr";
  const rnZero = "sp";
  const ops: Operand[] = [
    gpReg(width, fields.Rd, rdZero),
    gpReg(width, fields.Rn, rnZero),
    { kind: "imm", value: imm, shift },
  ];
  return ops;
}

function addSubShiftedOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  const imm6 = fields.imm6 ?? 0;
  const shiftType = ["lsl", "lsr", "asr"][fields.shift ?? 0] ?? "lsl";
  const ops: Operand[] = [
    gpReg(width, fields.Rd, "zr"),
    gpReg(width, fields.Rn, "zr"),
    gpReg(width, fields.Rm, "zr"),
  ];
  if (imm6 !== 0) {
    ops.push({ kind: "imm", value: BigInt(imm6), signed: false, shift: 0 });
    (ops[3] as any).displayHint = shiftType;
  }
  return ops;
}

function moveWideOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  const shift = (fields.hw ?? 0) << 4;
  const ops: Operand[] = [
    gpReg(width, fields.Rd, "zr"),
    { kind: "imm", value: BigInt(fields.imm16), shift },
  ];
  return ops;
}

function branchOffsetOperand(inst: DecodedInstruction, field: "imm26" | "imm19" | "imm14"): Operand[] {
  const fields = inst.fields!;
  const width = field === "imm26" ? 28 : field === "imm19" ? 21 : 16;
  const offset = signExtend(fields[field] << 2, width);
  return [labelFromOffset(offset)];
}

function adrOperands(inst: DecodedInstruction, pageRelative: boolean): Operand[] {
  const fields = inst.fields!;
  const imm = (fields.immhi << 2) | fields.immlo;
  const bits = pageRelative ? 33 : 21;
  const offset = pageRelative ? signExtend(imm << 12, bits) : signExtend(imm, bits);
  return [gpReg(64, fields.Rd, "zr"), { kind: "label", offset, pageRelative }];
}

function cbzOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  const offset = signExtend(fields.imm19 << 2, 21);
  return [gpReg(width, fields.Rt, "zr"), labelFromOffset(offset)];
}

function tbzOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = fields.b5 === 1 ? 64 : 32;
  const bit = (fields.b5 << 5) | fields.b40;
  const offset = signExtend(fields.imm14 << 2, 16);
  return [
    gpReg(width, fields.Rt, "zr"),
    { kind: "imm", value: BigInt(bit) },
    labelFromOffset(offset),
  ];
}

function registerBranchOperands(inst: DecodedInstruction, omitDefaultRet = false): Operand[] {
  const fields = inst.fields!;
  if (omitDefaultRet && fields.Rn === 30) {
    return [];
  }
  return [gpReg(64, fields.Rn, "zr")];
}

function authBranchOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const ops: Operand[] = [gpReg(64, fields.Rn, "zr")];
  if (fields.Z === 1) {
    ops.push(gpReg(64, fields.Rm, "sp"));
  }
  return ops;
}

function authGenericOperands(inst: DecodedInstruction, mnemonic: string): Operand[] {
  const fields = inst.fields!;
  if (fields.Rd !== undefined && fields.Rn !== undefined && !mnemonic.endsWith("ZA") && !mnemonic.endsWith("ZB")) {
    return [gpReg(64, fields.Rd, "zr"), gpReg(64, fields.Rn, "sp")];
  }
  if (fields.Rd !== undefined && (mnemonic.endsWith("ZA") || mnemonic.endsWith("ZB"))) {
    return [gpReg(64, fields.Rd, "zr")];
  }
  return [];
}

function labelFromImm16Negative(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const offset = BigInt((fields.imm16 ?? 0) << 2);
  return [{ kind: "label", offset: -offset }];
}

function bCondOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const offset = signExtend(fields.imm19 << 2, 21);
  const cond = fields.cond & 0xf;
  return [{ kind: "cond", code: cond, suffix: COND_NAMES[cond] }, labelFromOffset(offset)];
}

function adcOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [
    gpReg(width, fields.Rd, "zr"),
    gpReg(width, fields.Rn, "zr"),
    gpReg(width, fields.Rm, "zr"),
  ];
}

function systemMoveOperands(inst: DecodedInstruction, mnemonic: string): Operand[] {
  const fields = inst.fields!;
  const systemRegister = sysReg(2 + (fields.o0 ?? 0), fields.op1 ?? 0, fields.CRn ?? 0, fields.CRm ?? 0, fields.op2 ?? 0);
  const xt = gpReg(64, fields.Rt, "zr");
  return mnemonic === "MRS" ? [xt, systemRegister] : [systemRegister, xt];
}

function sveLaneFromSize(size: number | undefined): "h" | "s" | "d" {
  return (["h", "s", "d"] as const)[(size ?? 1) - 1] ?? "h";
}

function sveVectorLaneFromSize(size: number | undefined): "b" | "h" | "s" | "d" {
  return (["b", "h", "s", "d"] as const)[size ?? 0] ?? "b";
}

function sveSignedImmediate(value: number, bits: number): bigint {
  return signExtend(value, bits);
}

function svePatternName(pattern: number): string | undefined {
  return (
    [
      "pow2",
      "vl1",
      "vl2",
      "vl3",
      "vl4",
      "vl5",
      "vl6",
      "vl7",
      "vl8",
      "vl16",
      "vl32",
      "vl64",
      "vl128",
      "vl256",
    ] as const
  )[pattern];
}

function expandVfpImmediate(imm8: number, width: 16 | 32 | 64): number {
  const exponentBits = width === 16 ? 5 : width === 32 ? 8 : 11;
  const fractionBits = width - exponentBits - 1;
  const sign = (imm8 >>> 7) & 1;
  const immBit6 = (imm8 >>> 6) & 1;
  const exponent =
    (((immBit6 ^ 1) & 1) << (exponentBits - 1)) |
    (((immBit6 === 1 ? 1 : 0) * ((1 << (exponentBits - 3)) - 1)) << 2) |
    ((imm8 >>> 4) & 0x3);
  const fraction = (imm8 & 0xf) << (fractionBits - 4);

  if (width === 16) {
    const half = (sign << 15) | (exponent << 10) | fraction;
    const halfExponent = (half >>> 10) & 0x1f;
    const halfFraction = half & 0x3ff;
    if (halfExponent === 0) {
      return (sign ? -1 : 1) * 2 ** -14 * (halfFraction / 2 ** 10);
    }
    return (sign ? -1 : 1) * 2 ** (halfExponent - 15) * (1 + halfFraction / 2 ** 10);
  }

  const buffer = new ArrayBuffer(width / 8);
  const view = new DataView(buffer);
  if (width === 32) {
    view.setUint32(0, ((sign << 31) | (exponent << 23) | fraction) >>> 0);
    return view.getFloat32(0);
  }

  const bits = (BigInt(sign) << 63n) | (BigInt(exponent) << 52n) | BigInt(fraction);
  view.setBigUint64(0, bits);
  return view.getFloat64(0);
}

function sveFloatingImmediate(imm8: number, size: number | undefined): Operand {
  const width = (size === 1 ? 16 : size === 2 ? 32 : 64) as 16 | 32 | 64;
  return { kind: "fpimm", value: expandVfpImmediate(imm8, width) };
}

function sveMovprfxOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [vecReg(fields.Zd), vecReg(fields.Zn)];
}

function svePredicatedMovprfxOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [vecReg(fields.Zd, lane), predReg(fields.Pg, "z"), vecReg(fields.Zn, lane)];
}

function sveFcpyOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveLaneFromSize(fields.size);
  return [vecReg(fields.Zd, lane), predReg(fields.Pg, "m"), sveFloatingImmediate(fields.imm8, fields.size)];
}

function sveFdupOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveLaneFromSize(fields.size);
  return [vecReg(fields.Zd, lane), sveFloatingImmediate(fields.imm8, fields.size)];
}

function sveDupImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  let imm = Number(signExtend(fields.imm8, 8));
  if ((fields.sh ?? 0) === 1) {
    imm <<= 8;
  }
  return [vecReg(fields.Zd, lane), { kind: "imm", value: BigInt(imm), signed: true }];
}

function sveCopyScalarOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const width = fields.size === 3 ? 64 : 32;
  return [vecReg(fields.Zd, lane), predReg(fields.Pg, "m"), gpReg(width, fields.Rn, "sp")];
}

function sveCompareImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const immField = fields.imm5 ?? fields.imm7 ?? 0;
  const immBits = fields.imm5 !== undefined ? 5 : 7;
  return [
    predReg(fields.Pd, undefined, lane),
    predReg(fields.Pg, "z"),
    vecReg(fields.Zn, lane),
    { kind: "imm", value: sveSignedImmediate(immField, immBits), signed: true },
  ];
}

function sveIncDecScalarOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const pattern = fields.pattern ?? 0;
  const multiplier = (fields.imm4 ?? 0) + 1;
  const ops: Operand[] = [gpReg(64, fields.Rdn, "sp")];
  const patternName = pattern === 31 ? "all" : svePatternName(pattern);

  if (patternName) {
    if (!(pattern === 31 && (fields.imm4 ?? 0) === 0)) {
      ops.push({ kind: "text", text: patternName });
    }
  } else if (pattern !== 31) {
    ops.push({ kind: "imm", value: BigInt(pattern), signed: true });
  }

  if ((fields.imm4 ?? 0) !== 0) {
    ops.push({ kind: "text", text: `mul #${multiplier}` });
  }

  return ops;
}

function movaLaneFromClassName(className: string): "b" | "h" | "s" | "d" | "q" {
  switch (className) {
    case "16-bit":
      return "h";
    case "32-bit":
      return "s";
    case "64-bit":
      return "d";
    case "128-bit":
      return "q";
    default:
      return "b";
  }
}

function movaTileIndex(fields: Record<string, number>, fieldName: "ZAn" | "ZAd", className: string): number {
  return className === "8-bit" ? 0 : (fields[fieldName] ?? 0);
}

function movaOrientation(fields: Record<string, number>): "h" | "v" {
  return fields.V === 1 ? "v" : "h";
}

function movaSingleOffset(fields: Record<string, number>, className: string): number {
  switch (className) {
    case "16-bit":
      return fields.off3 ?? 0;
    case "32-bit":
      return fields.off2 ?? 0;
    case "64-bit":
      return fields.o1 ?? 0;
    case "128-bit":
      return 0;
    default:
      return fields.off4 ?? 0;
  }
}

function movaSliceRange(fields: Record<string, number>, className: string, count: 2 | 4): [number, number] {
  if (count === 2) {
    switch (className) {
      case "16-bit": {
        const base = (fields.off2 ?? 0) * 2;
        return [base, base + 1];
      }
      case "32-bit": {
        const base = (fields.o1 ?? 0) * 2;
        return [base, base + 1];
      }
      case "64-bit":
        return [0, 1];
      default: {
        const base = (fields.off3 ?? 0) * 2;
        return [base, base + 1];
      }
    }
  }

  switch (className) {
    case "16-bit": {
      const base = (fields.o1 ?? 0) * 4;
      return [base, base + 3];
    }
    case "32-bit":
    case "64-bit":
      return [0, 3];
    default: {
      const base = (fields.off2 ?? 0) * 4;
      return [base, base + 3];
    }
  }
}

function movaVectorGroupText(start: number, count: 2 | 4, lane: "b" | "h" | "s" | "d"): string {
  if (count === 2) {
    return `{ z${start}.${lane}, z${start + 1}.${lane} }`;
  }
  return `{ z${start}.${lane} - z${start + 3}.${lane} }`;
}

function movaSingleZaText(
  fields: Record<string, number>,
  className: string,
  fieldName: "ZAn" | "ZAd",
): string {
  const lane = movaLaneFromClassName(className);
  const tile = movaTileIndex(fields, fieldName, className);
  const selector = 12 + (fields.Rs ?? 0);
  const offset = movaSingleOffset(fields, className);
  return `za${tile}${movaOrientation(fields)}.${lane}[w${selector}, ${offset}]`;
}

function movaSliceZaText(
  fields: Record<string, number>,
  className: string,
  fieldName: "ZAn" | "ZAd",
  count: 2 | 4,
): string {
  const lane = movaLaneFromClassName(className);
  const tile = movaTileIndex(fields, fieldName, className);
  const selector = 12 + (fields.Rs ?? 0);
  const [start, end] = movaSliceRange(fields, className, count);
  return `za${tile}${movaOrientation(fields)}.${lane}[w${selector}, ${start}:${end}]`;
}

function movaArrayZaText(fields: Record<string, number>, count: 2 | 4): string {
  return `za.d[w${8 + (fields.Rv ?? 0)}, ${fields.off3 ?? 0}, vgx${count}]`;
}

function movaSingleToVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const className = inst.encoding!.className;
  const lane = movaLaneFromClassName(className);
  return [vecReg(fields.Zd, lane), predReg(fields.Pg, "m"), { kind: "text", text: movaSingleZaText(fields, className, "ZAn") }];
}

function movazSingleToVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const className = inst.encoding!.className;
  const lane = movaLaneFromClassName(className);
  return [vecReg(fields.Zd, lane), { kind: "text", text: movaSingleZaText(fields, className, "ZAn") }];
}

function movaVectorToSingleOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const className = inst.encoding!.className;
  const lane = movaLaneFromClassName(className);
  return [{ kind: "text", text: movaSingleZaText(fields, className, "ZAd") }, predReg(fields.Pg, "m"), vecReg(fields.Zn, lane)];
}

function movaSliceToVectorsOperands(inst: DecodedInstruction, count: 2 | 4): Operand[] {
  const fields = inst.fields!;
  const className = inst.encoding!.className;
  const lane = movaLaneFromClassName(className) as "b" | "h" | "s" | "d";
  const start = (fields.Zd ?? 0) * count;
  return [ { kind: "text", text: movaVectorGroupText(start, count, lane) }, { kind: "text", text: movaSliceZaText(fields, className, "ZAn", count) } ];
}

function movaVectorsToSliceOperands(inst: DecodedInstruction, count: 2 | 4): Operand[] {
  const fields = inst.fields!;
  const className = inst.encoding!.className;
  const lane = movaLaneFromClassName(className) as "b" | "h" | "s" | "d";
  const start = (fields.Zn ?? 0) * count;
  return [{ kind: "text", text: movaSliceZaText(fields, className, "ZAd", count) }, { kind: "text", text: movaVectorGroupText(start, count, lane) }];
}

function movaArrayToVectorsOperands(inst: DecodedInstruction, count: 2 | 4): Operand[] {
  const fields = inst.fields!;
  const start = (fields.Zd ?? 0) * count;
  return [
    { kind: "text", text: movaVectorGroupText(start, count, "d") },
    { kind: "text", text: movaArrayZaText(fields, count) },
  ];
}

function movaVectorsToArrayOperands(inst: DecodedInstruction, count: 2 | 4): Operand[] {
  const fields = inst.fields!;
  const start = (fields.Zn ?? 0) * count;
  return [
    { kind: "text", text: movaArrayZaText(fields, count) },
    { kind: "text", text: movaVectorGroupText(start, count, "d") },
  ];
}

function smeDotGroupCount(className: string): 2 | 4 {
  return className.includes("Four") ? 4 : 2;
}

function smeDotAccumulatorLane(inst: DecodedInstruction): "s" | "d" {
  if (inst.encoding!.fileName.includes("za32")) {
    return "s";
  }
  if (inst.fields?.sz !== undefined) {
    return inst.fields.sz === 1 ? "d" : "s";
  }
  return inst.encoding!.className.includes("64-bit") ? "d" : "s";
}

function smeDotSourceLane(inst: DecodedInstruction, accLane: "s" | "d"): "b" | "h" {
  return accLane === "d" || inst.encoding!.fileName.includes("za32") ? "h" : "b";
}

function smeDotZaText(fields: Record<string, number>, count: 2 | 4, lane: "s" | "d"): string {
  return `za.${lane}[w${8 + (fields.Rv ?? 0)}, ${fields.off3 ?? 0}, vgx${count}]`;
}

function smeAccumulatorLane(inst: DecodedInstruction): "s" | "h" | "d" {
  const sz = inst.fields?.sz ?? 0;
  return inst.encoding!.mnemonic.startsWith("F") ? (sz === 1 ? "d" : "h") : sz === 1 ? "d" : "s";
}

function smeZaText(fields: Record<string, number>, count: 2 | 4, lane: "s" | "h" | "d"): string {
  return `za.${lane}[w${8 + (fields.Rv ?? 0)}, ${fields.off3 ?? 0}, vgx${count}]`;
}

function smeDotVectorGroupText(start: number, count: 2 | 4, lane: "b" | "h" | "s" | "d"): string {
  const regs = Array.from({ length: count }, (_, index) => `z${(start + index) & 31}.${lane}`);
  if (count === 4 && start <= 28) {
    return `{ ${regs[0]} - ${regs[3]} }`;
  }
  return `{ ${regs.join(", ")} }`;
}

function smeIndexedSourceText(fields: Record<string, number>, lane: "s" | "h" | "d"): string {
  const index = fields.i3h !== undefined || fields.i3l !== undefined ? ((fields.i3h ?? 0) << 3) | (fields.i3l ?? 0) : fields.i2 ?? fields.i1 ?? 0;
  return `z${fields.Zm ?? 0}.${lane}[${index}]`;
}

function smeArithmeticSourceStart(inst: DecodedInstruction, fieldName: "Zn" | "Zm"): number {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  switch (inst.encoding!.fileName) {
    case "add_za_zzv.xml":
    case "sub_za_zzv.xml":
    case "add_za_zzw.xml":
    case "sub_za_zzw.xml":
    case "add_za_zw.xml":
    case "sub_za_zw.xml":
    case "fmla_za_zzw.xml":
    case "fmls_za_zzw.xml":
      return (fields[fieldName] ?? 0) * count;
    case "fadd_za_zw.xml":
    case "fsub_za_zw.xml":
      return (fields.Zm ?? 0) * count;
    case "fmla_za_zzv.xml":
    case "fmls_za_zzv.xml":
      return fields[fieldName] ?? 0;
    case "fmla_za_zzi.xml":
    case "fmls_za_zzi.xml":
      return fieldName === "Zn" ? (fields.Zn ?? 0) * count : (fields.Zm ?? 0);
    default:
      return fields[fieldName] ?? 0;
  }
}

function smeArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  const lane = smeAccumulatorLane(inst);
  const za = { kind: "text", text: smeZaText(fields, count, lane) } satisfies Operand;
  const first = {
    kind: "text",
    text: smeDotVectorGroupText(smeArithmeticSourceStart(inst, "Zn"), count, lane),
  } satisfies Operand;

  switch (inst.encoding!.fileName) {
    case "add_za_zzv.xml":
    case "sub_za_zzv.xml":
      return [za, first, { kind: "text", text: `z${fields.Zm ?? 0}.${lane}` }];
    case "add_za_zw.xml":
    case "sub_za_zw.xml":
    case "add_za_zzw.xml":
    case "sub_za_zzw.xml":
      return [
        za,
        first,
        { kind: "text", text: smeDotVectorGroupText(smeArithmeticSourceStart(inst, "Zm"), count, lane) },
      ];
    case "fadd_za_zw.xml":
    case "fsub_za_zw.xml":
      return [za, { kind: "text", text: smeDotVectorGroupText(smeArithmeticSourceStart(inst, "Zm"), count, lane) }];
    case "fmla_za_zzv.xml":
    case "fmls_za_zzv.xml":
      return [za, first, { kind: "text", text: `z${fields.Zm ?? 0}.${lane}` }];
    case "fmla_za_zzi.xml":
    case "fmls_za_zzi.xml":
      return [za, first, { kind: "text", text: smeIndexedSourceText(fields, lane) }];
    case "fmla_za_zzw.xml":
    case "fmls_za_zzw.xml":
      return [
        za,
        first,
        { kind: "text", text: smeDotVectorGroupText(smeArithmeticSourceStart(inst, "Zm"), count, lane) },
      ];
    default:
      return [];
  }
}

function smeDotSourceStart(inst: DecodedInstruction, fieldName: "Zn" | "Zm"): number {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  switch (inst.encoding!.fileName) {
    case "sdot_za32_zzv.xml":
    case "udot_za32_zzv.xml":
    case "sdot_za_zzv.xml":
    case "udot_za_zzv.xml":
      return fields[fieldName] ?? 0;
    case "sdot_za32_zzi.xml":
    case "udot_za32_zzi.xml":
    case "sdot_za_zzi.xml":
    case "udot_za_zzi.xml":
      return fieldName === "Zn" ? (fields.Zn ?? 0) * count : (fields.Zm ?? 0);
    case "sdot_za32_zzw.xml":
    case "udot_za32_zzw.xml":
    case "sdot_za_zzw.xml":
    case "udot_za_zzw.xml":
      return (fields[fieldName] ?? 0) * count;
    default:
      return fields[fieldName] ?? 0;
  }
}

function smeDotOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  const accLane = smeDotAccumulatorLane(inst);
  const srcLane = smeDotSourceLane(inst, accLane);
  const za = { kind: "text", text: smeZaText(fields, count, accLane) } satisfies Operand;
  const first = {
    kind: "text",
    text: smeDotVectorGroupText(smeDotSourceStart(inst, "Zn"), count, srcLane),
  } satisfies Operand;

  switch (inst.encoding!.fileName) {
    case "sdot_za32_zzv.xml":
    case "udot_za32_zzv.xml":
    case "sdot_za_zzv.xml":
    case "udot_za_zzv.xml":
      return [za, first, { kind: "text", text: `z${fields.Zm ?? 0}.${srcLane}` }];
    case "sdot_za32_zzi.xml":
    case "udot_za32_zzi.xml":
    case "sdot_za_zzi.xml":
    case "udot_za_zzi.xml":
      return [za, first, { kind: "text", text: smeIndexedSourceText(fields, srcLane) }];
    case "sdot_za32_zzw.xml":
    case "udot_za32_zzw.xml":
    case "sdot_za_zzw.xml":
    case "udot_za_zzw.xml":
      return [
        za,
        first,
        { kind: "text", text: smeDotVectorGroupText(smeDotSourceStart(inst, "Zm"), count, srcLane) },
      ];
    default:
      return [];
  }
}

function rprfmOpText(fields: Record<string, number>): string {
  const operation = (((fields.option ?? 0) >> 2) << 5) | (((fields.option ?? 0) & 1) << 4) | ((fields.S ?? 0) << 3) | ((fields.Rt ?? 0) & 0x7);
  switch (operation) {
    case 0:
      return "pldkeep";
    case 1:
      return "pstkeep";
    case 4:
      return "pldstrm";
    case 5:
      return "pststrm";
    default:
      return `#${operation}`;
  }
}

function rprfmOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: rprfmOpText(fields) },
    gpReg(64, fields.Rm, "zr"),
    { kind: "text", text: `[${formatRegister(gpReg(64, fields.Rn, "sp"))}]` },
  ];
}

export function buildOperands(inst: DecodedInstruction): Operand[] {
  const encoding = inst.encoding;
  if (!encoding || !inst.fields) {
    return [];
  }

  switch (encoding.fileName) {
    case "adc.xml":
    case "adcs.xml":
      return adcOperands(inst);
    case "mrs.xml":
    case "msr_reg.xml":
      return systemMoveOperands(inst, encoding.mnemonic);
    case "movprfx_z_z.xml":
      return sveMovprfxOperands(inst);
    case "movprfx_z_p_z.xml":
      return svePredicatedMovprfxOperands(inst);
    case "fcpy_z_p_i.xml":
      return sveFcpyOperands(inst);
    case "fdup_z_i.xml":
      return sveFdupOperands(inst);
    case "dup_z_i.xml":
      return sveDupImmediateOperands(inst);
    case "cpy_z_p_r.xml":
      return sveCopyScalarOperands(inst);
    case "mov_mova_z_p_rza.xml":
      return movaSingleToVectorOperands(inst);
    case "movaz_z_rza.xml":
      return movazSingleToVectorOperands(inst);
    case "mov_mova_za_p_rz.xml":
      return movaVectorToSingleOperands(inst);
    case "mov_mova_mz2_za.xml":
      return movaSliceToVectorsOperands(inst, 2);
    case "mov_mova_za2_z.xml":
      return movaVectorsToSliceOperands(inst, 2);
    case "mov_mova_za4_z.xml":
      return movaVectorsToSliceOperands(inst, 4);
    case "mov_mova_mz4_za.xml":
      return movaSliceToVectorsOperands(inst, 4);
    case "mov_mova_mz_za2.xml":
      return movaArrayToVectorsOperands(inst, 2);
    case "movaz_mz_za2.xml":
      return movaArrayToVectorsOperands(inst, 2);
    case "mov_mova_mz_za4.xml":
      return movaArrayToVectorsOperands(inst, 4);
    case "movaz_mz_za4.xml":
      return movaArrayToVectorsOperands(inst, 4);
    case "mov_mova_za_mz2.xml":
      return movaVectorsToArrayOperands(inst, 2);
    case "mov_mova_za_mz4.xml":
      return movaVectorsToArrayOperands(inst, 4);
    case "add_za_zzv.xml":
    case "sub_za_zzv.xml":
    case "add_za_zw.xml":
    case "sub_za_zw.xml":
    case "add_za_zzw.xml":
    case "sub_za_zzw.xml":
    case "fadd_za_zw.xml":
    case "fsub_za_zw.xml":
    case "fmla_za_zzv.xml":
    case "fmla_za_zzi.xml":
    case "fmla_za_zzw.xml":
    case "fmls_za_zzv.xml":
    case "fmls_za_zzi.xml":
    case "fmls_za_zzw.xml":
      return smeArithmeticOperands(inst);
    case "sdot_za32_zzv.xml":
    case "sdot_za32_zzi.xml":
    case "sdot_za32_zzw.xml":
    case "sdot_za_zzv.xml":
    case "sdot_za_zzi.xml":
    case "sdot_za_zzw.xml":
    case "udot_za32_zzv.xml":
    case "udot_za32_zzi.xml":
    case "udot_za32_zzw.xml":
    case "udot_za_zzv.xml":
    case "udot_za_zzi.xml":
    case "udot_za_zzw.xml":
      return smeDotOperands(inst);
    case "cmpeq_p_p_zi.xml":
      return sveCompareImmediateOperands(inst);
    case "incb_r_rs.xml":
    case "decb_r_rs.xml":
      return sveIncDecScalarOperands(inst);
    case "add_addsub_imm.xml":
    case "adds_addsub_imm.xml":
    case "sub_addsub_imm.xml":
    case "subs_addsub_imm.xml":
      return addSubImmediateOperands(inst, encoding);
    case "add_addsub_shift.xml":
    case "adds_addsub_shift.xml":
    case "sub_addsub_shift.xml":
    case "subs_addsub_shift.xml":
      return addSubShiftedOperands(inst);
    case "movz.xml":
    case "movn.xml":
    case "movk.xml":
      return moveWideOperands(inst);
    case "adr.xml":
      return adrOperands(inst, false);
    case "adrp.xml":
      return adrOperands(inst, true);
    case "b_uncond.xml":
    case "bl.xml":
      return branchOffsetOperand(inst, "imm26");
    case "b_cond.xml":
      return bCondOperands(inst);
    case "cbz.xml":
    case "cbnz.xml":
      return cbzOperands(inst);
    case "tbz.xml":
    case "tbnz.xml":
      return tbzOperands(inst);
    case "br.xml":
    case "blr.xml":
      return registerBranchOperands(inst);
    case "ret.xml":
      return registerBranchOperands(inst, true);
    case "bra.xml":
    case "blra.xml":
      return authBranchOperands(inst);
    case "reta.xml":
    case "autia171615.xml":
    case "autib171615.xml":
    case "pacia171615.xml":
    case "pacib171615.xml":
    case "autiasppcr.xml":
    case "autibsppcr.xml":
    case "paciasppc.xml":
    case "pacibsppc.xml":
    case "retasppcr_reg.xml":
      return [];
    case "autiasppc_imm.xml":
    case "autibsppc_imm.xml":
    case "retasppc_imm.xml":
      return labelFromImm16Negative(inst);
    case "autia.xml":
    case "autib.xml":
    case "pacia.xml":
    case "pacib.xml":
      return authGenericOperands(inst, encoding.mnemonic);
    case "xpac.xml":
      if (encoding.mnemonic === "XPACLRI") {
        return [];
      }
      return [gpReg(64, inst.fields.Rd, "zr")];
    case "rprfm_reg.xml":
      return rprfmOperands(inst);
    default:
      return [];
  }
}

export function resolvePcRelativeOperands(operands: Operand[], pc: bigint | undefined): Operand[] {
  if (pc === undefined) {
    return operands;
  }

  return operands.map((operand) => {
    if (operand.kind !== "label" || operand.absolute !== undefined) {
      return operand;
    }
    return labelFromPc(operand.offset, pc, operand.pageRelative === true);
  });
}

export function formatRegister(register: RegisterName): string {
  const prefix = register.width === 64 ? "x" : "w";
  if (register.index === 31) {
    return `${prefix}${register.zeroName}`;
  }
  return `${prefix}${register.index}`;
}

function formatVectorRegister(register: VectorRegisterOperand): string {
  return register.lane ? `z${register.index}.${register.lane}` : `z${register.index}`;
}

function formatPredicateRegister(register: PredicateRegisterOperand): string {
  const lane = register.lane ? `.${register.lane}` : "";
  return register.mode ? `p${register.index}${lane}/${register.mode}` : `p${register.index}${lane}`;
}

function formatFloatingImmediate(value: number): string {
  const normalized = Object.is(value, -0) ? 0 : value;
  return `#${normalized.toFixed(8)}`;
}

export function formatOperand(operand: Operand): string {
  switch (operand.kind) {
    case "reg":
      return formatRegister(operand);
    case "imm":
      return operand.shift && operand.shift !== 0
        ? `#0x${operand.value.toString(16)}, lsl #${operand.shift}`
        : operand.signed
          ? `#${operand.value.toString()}`
          : `#0x${operand.value.toString(16)}`;
    case "label":
      if (operand.absolute !== undefined) {
        return `0x${operand.absolute.toString(16)}`;
      }
      if (operand.offset < 0) {
        return `.-0x${(-operand.offset).toString(16)}`;
      }
      return `.+0x${operand.offset.toString(16)}`;
    case "cond":
      return operand.suffix;
    case "sysreg":
      return `S${operand.op0}_${operand.op1}_C${operand.CRn}_C${operand.CRm}_${operand.op2}`;
    case "vec":
      return formatVectorRegister(operand);
    case "pred":
      return formatPredicateRegister(operand);
    case "fpimm":
      return formatFloatingImmediate(operand.value);
    case "text":
      return operand.text;
  }
}
