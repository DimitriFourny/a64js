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

function predReg(index: number, mode?: "m" | "z"): PredicateRegisterOperand {
  return { kind: "pred", index, mode };
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
    case "fcpy_z_p_i.xml":
      return sveFcpyOperands(inst);
    case "fdup_z_i.xml":
      return sveFdupOperands(inst);
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
  return register.mode ? `p${register.index}/${register.mode}` : `p${register.index}`;
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
  }
}
