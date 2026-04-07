import type {
  DecodedInstruction,
  GeneratedEncoding,
  Operand,
  OperandAction,
  OperandSchema,
  PredicateRegisterOperand,
  RegisterName,
  SystemRegisterOperand,
  VectorRegisterOperand,
} from "./types.ts";

const COND_NAMES = [
  "eq",
  "ne",
  "hs",
  "lo",
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

const BARRIER_OPTION_NAMES = new Map<number, string>([
  [0b0001, "oshld"],
  [0b0010, "oshst"],
  [0b0011, "osh"],
  [0b0101, "nshld"],
  [0b0110, "nshst"],
  [0b0111, "nsh"],
  [0b1001, "ishld"],
  [0b1010, "ishst"],
  [0b1011, "ish"],
  [0b1101, "ld"],
  [0b1110, "st"],
  [0b1111, "sy"],
]);

type SystemAlias = {
  mnemonic: "at" | "dc" | "ic" | "tlbi";
  op: string;
  hasRegister: boolean;
};

const AT_SYSTEM_ALIASES = new Map<string, SystemAlias>([
  ["0:7:8:0", { mnemonic: "at", op: "s1e1r", hasRegister: true }],
  ["0:7:8:1", { mnemonic: "at", op: "s1e1w", hasRegister: true }],
  ["0:7:8:2", { mnemonic: "at", op: "s1e0r", hasRegister: true }],
  ["0:7:8:3", { mnemonic: "at", op: "s1e0w", hasRegister: true }],
  ["0:7:9:0", { mnemonic: "at", op: "s1e1rp", hasRegister: true }],
  ["0:7:9:1", { mnemonic: "at", op: "s1e1wp", hasRegister: true }],
  ["0:7:9:2", { mnemonic: "at", op: "s1e1a", hasRegister: true }],
  ["4:7:8:0", { mnemonic: "at", op: "s1e2r", hasRegister: true }],
  ["4:7:8:1", { mnemonic: "at", op: "s1e2w", hasRegister: true }],
  ["4:7:8:4", { mnemonic: "at", op: "s12e1r", hasRegister: true }],
  ["4:7:8:5", { mnemonic: "at", op: "s12e1w", hasRegister: true }],
  ["4:7:8:6", { mnemonic: "at", op: "s12e0r", hasRegister: true }],
  ["4:7:8:7", { mnemonic: "at", op: "s12e0w", hasRegister: true }],
  ["4:7:9:2", { mnemonic: "at", op: "s1e2a", hasRegister: true }],
  ["6:7:8:0", { mnemonic: "at", op: "s1e3r", hasRegister: true }],
  ["6:7:8:1", { mnemonic: "at", op: "s1e3w", hasRegister: true }],
  ["6:7:9:2", { mnemonic: "at", op: "s1e3a", hasRegister: true }],
]);

const DC_SYSTEM_ALIASES = new Map<string, SystemAlias>([
  ["0:7:1:0", { mnemonic: "ic", op: "ialluis", hasRegister: false }],
  ["0:7:5:0", { mnemonic: "ic", op: "iallu", hasRegister: false }],
  ["3:7:5:1", { mnemonic: "ic", op: "ivau", hasRegister: true }],
  ["0:7:6:1", { mnemonic: "dc", op: "ivac", hasRegister: true }],
  ["0:7:6:2", { mnemonic: "dc", op: "isw", hasRegister: true }],
  ["0:7:6:3", { mnemonic: "dc", op: "igvac", hasRegister: true }],
  ["0:7:6:4", { mnemonic: "dc", op: "igsw", hasRegister: true }],
  ["0:7:6:5", { mnemonic: "dc", op: "igdvac", hasRegister: true }],
  ["0:7:6:6", { mnemonic: "dc", op: "igdsw", hasRegister: true }],
  ["0:7:10:2", { mnemonic: "dc", op: "csw", hasRegister: true }],
  ["0:7:10:4", { mnemonic: "dc", op: "cgsw", hasRegister: true }],
  ["0:7:10:6", { mnemonic: "dc", op: "cgdsw", hasRegister: true }],
  ["0:7:14:2", { mnemonic: "dc", op: "cisw", hasRegister: true }],
  ["0:7:14:4", { mnemonic: "dc", op: "cigsw", hasRegister: true }],
  ["0:7:14:6", { mnemonic: "dc", op: "cigdsw", hasRegister: true }],
  ["3:7:4:1", { mnemonic: "dc", op: "zva", hasRegister: true }],
  ["3:7:4:3", { mnemonic: "dc", op: "gva", hasRegister: true }],
  ["3:7:4:4", { mnemonic: "dc", op: "gzva", hasRegister: true }],
  ["3:7:10:1", { mnemonic: "dc", op: "cvac", hasRegister: true }],
  ["3:7:10:3", { mnemonic: "dc", op: "cgvac", hasRegister: true }],
  ["3:7:10:5", { mnemonic: "dc", op: "cgdvac", hasRegister: true }],
  ["3:7:11:1", { mnemonic: "dc", op: "cvau", hasRegister: true }],
  ["3:7:12:1", { mnemonic: "dc", op: "cvap", hasRegister: true }],
  ["3:7:12:3", { mnemonic: "dc", op: "cgvap", hasRegister: true }],
  ["3:7:12:5", { mnemonic: "dc", op: "cgdvap", hasRegister: true }],
  ["3:7:13:1", { mnemonic: "dc", op: "cvadp", hasRegister: true }],
  ["3:7:13:3", { mnemonic: "dc", op: "cgvadp", hasRegister: true }],
  ["3:7:13:5", { mnemonic: "dc", op: "cgdvadp", hasRegister: true }],
  ["3:7:14:1", { mnemonic: "dc", op: "civac", hasRegister: true }],
  ["3:7:14:3", { mnemonic: "dc", op: "cigvac", hasRegister: true }],
  ["3:7:14:5", { mnemonic: "dc", op: "cigdvac", hasRegister: true }],
  ["4:7:14:0", { mnemonic: "dc", op: "cipae", hasRegister: true }],
  ["4:7:14:7", { mnemonic: "dc", op: "cigdpae", hasRegister: true }],
]);

const TLBI_SYSTEM_ALIASES = new Map<string, SystemAlias>([
  ["0:8:3:0", { mnemonic: "tlbi", op: "vmalle1is", hasRegister: false }],
  ["0:8:3:1", { mnemonic: "tlbi", op: "vae1is", hasRegister: true }],
  ["0:8:3:2", { mnemonic: "tlbi", op: "aside1is", hasRegister: true }],
  ["0:8:3:3", { mnemonic: "tlbi", op: "vaae1is", hasRegister: true }],
  ["0:8:3:5", { mnemonic: "tlbi", op: "vale1is", hasRegister: true }],
  ["0:8:3:7", { mnemonic: "tlbi", op: "vaale1is", hasRegister: true }],
  ["0:8:7:0", { mnemonic: "tlbi", op: "vmalle1", hasRegister: false }],
  ["0:8:7:1", { mnemonic: "tlbi", op: "vae1", hasRegister: true }],
  ["0:8:7:2", { mnemonic: "tlbi", op: "aside1", hasRegister: true }],
  ["0:8:7:3", { mnemonic: "tlbi", op: "vaae1", hasRegister: true }],
  ["0:8:7:5", { mnemonic: "tlbi", op: "vale1", hasRegister: true }],
  ["0:8:7:7", { mnemonic: "tlbi", op: "vaale1", hasRegister: true }],
  ["4:8:0:1", { mnemonic: "tlbi", op: "ipas2e1is", hasRegister: true }],
  ["4:8:0:5", { mnemonic: "tlbi", op: "ipas2le1is", hasRegister: true }],
  ["4:8:2:2", { mnemonic: "tlbi", op: "vmallws2e1is", hasRegister: false }],
  ["4:8:3:0", { mnemonic: "tlbi", op: "alle2is", hasRegister: false }],
  ["4:8:3:1", { mnemonic: "tlbi", op: "vae2is", hasRegister: true }],
  ["4:8:3:4", { mnemonic: "tlbi", op: "alle1is", hasRegister: false }],
  ["4:8:3:5", { mnemonic: "tlbi", op: "vale2is", hasRegister: true }],
  ["4:8:3:6", { mnemonic: "tlbi", op: "vmalls12e1is", hasRegister: false }],
  ["4:8:4:1", { mnemonic: "tlbi", op: "ipas2e1", hasRegister: true }],
  ["4:8:4:5", { mnemonic: "tlbi", op: "ipas2le1", hasRegister: true }],
  ["4:8:5:2", { mnemonic: "tlbi", op: "vmallws2e1os", hasRegister: false }],
  ["4:8:6:2", { mnemonic: "tlbi", op: "vmallws2e1", hasRegister: false }],
  ["4:8:7:0", { mnemonic: "tlbi", op: "alle2", hasRegister: false }],
  ["4:8:7:1", { mnemonic: "tlbi", op: "vae2", hasRegister: true }],
  ["4:8:7:4", { mnemonic: "tlbi", op: "alle1", hasRegister: false }],
  ["4:8:7:5", { mnemonic: "tlbi", op: "vale2", hasRegister: true }],
  ["4:8:7:6", { mnemonic: "tlbi", op: "vmalls12e1", hasRegister: false }],
  ["4:9:2:2", { mnemonic: "tlbi", op: "vmallws2e1isnxs", hasRegister: false }],
  ["4:9:5:2", { mnemonic: "tlbi", op: "vmallws2e1osnxs", hasRegister: false }],
  ["4:9:6:2", { mnemonic: "tlbi", op: "vmallws2e1nxs", hasRegister: false }],
  ["6:8:3:0", { mnemonic: "tlbi", op: "alle3is", hasRegister: false }],
  ["6:8:3:1", { mnemonic: "tlbi", op: "vae3is", hasRegister: true }],
  ["6:8:7:0", { mnemonic: "tlbi", op: "alle3", hasRegister: false }],
  ["6:8:7:1", { mnemonic: "tlbi", op: "vae3", hasRegister: true }],
  ["6:8:7:5", { mnemonic: "tlbi", op: "vale3", hasRegister: true }],
  ["6:8:3:5", { mnemonic: "tlbi", op: "vale3is", hasRegister: true }],
]);

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

const OPERAND_SCHEMAS: Record<string, OperandSchema> = {
  "gp-rd-rn-rm-sf": {
    id: "gp-rd-rn-rm-sf",
    actions: [
      { kind: "gp-reg", field: "Rd", width: "sf", zeroName: "zr" },
      { kind: "gp-reg", field: "Rn", width: "sf", zeroName: "zr" },
      { kind: "gp-reg", field: "Rm", width: "sf", zeroName: "zr" },
    ],
  },
};

function widthFromSchemaAction(action: OperandAction, fields: Record<string, number>): 32 | 64 {
  return action.width === "sf" ? widthFromSf(fields.sf) : action.width;
}

function buildSchemaActionOperand(action: OperandAction, fields: Record<string, number>): Operand {
  switch (action.kind) {
    case "gp-reg":
      return gpReg(widthFromSchemaAction(action, fields), fields[action.field], action.zeroName);
  }
}

function buildSchemaOperands(inst: DecodedInstruction, encoding: GeneratedEncoding): Operand[] | undefined {
  const schemaId = encoding.operandSchemaId;
  if (!schemaId) {
    return undefined;
  }
  const schema = OPERAND_SCHEMAS[schemaId];
  if (!schema) {
    return undefined;
  }
  const fields = inst.fields!;
  return schema.actions.map((action) => buildSchemaActionOperand(action, fields));
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

function checkedPointerAddSubOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const shift = fields.imm3 ?? 0;
  const ops: Operand[] = [
    gpReg(64, fields.Rd, "sp"),
    gpReg(64, fields.Rn, "sp"),
    gpReg(64, fields.Rm, "zr"),
  ];
  if (shift !== 0) {
    ops.push({ kind: "text", text: `lsl #${shift}` });
  }
  return ops;
}

function addSubExtendedPreferredLsl(width: 32 | 64, option: number, rd: number | undefined, rn: number): boolean {
  if (width === 32) {
    return option === 2 && (rd === 31 || rn === 31);
  }
  return option === 3 && (rd === 31 || rn === 31);
}

function addSubExtendedOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  const fileName = inst.encoding!.fileName;
  const isAlias = fileName === "cmn_adds_addsub_ext.xml" || fileName === "cmp_subs_addsub_ext.xml";
  const option = fields.option ?? 0;
  const shift = fields.imm3 ?? 0;
  const sourceWidth = width === 32 ? 32 : option === 3 || option === 7 ? 64 : 32;
  const extendNames = ["uxtb", "uxth", "uxtw", "uxtx", "sxtb", "sxth", "sxtw", "sxtx"] as const;
  const ops: Operand[] = [];

  if (!isAlias) {
    const rdZero = fileName === "add_addsub_ext.xml" || fileName === "sub_addsub_ext.xml" ? "sp" : "zr";
    ops.push(gpReg(width, fields.Rd, rdZero));
  }

  ops.push(gpReg(width, fields.Rn, "sp"));
  ops.push(gpReg(sourceWidth, fields.Rm, "zr"));

  if (addSubExtendedPreferredLsl(width, option, fields.Rd, fields.Rn)) {
    if (shift !== 0) {
      ops.push({ kind: "text", text: `lsl #${shift}` });
    }
    return ops;
  }

  const extend = extendNames[option] ?? "uxtb";
  ops.push({ kind: "text", text: shift === 0 ? extend : `${extend} #${shift}` });
  return ops;
}

function threeSourceIntegerOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [
    gpReg(width, fields.Rd, "zr"),
    gpReg(width, fields.Rn, "zr"),
    gpReg(width, fields.Rm, "zr"),
    gpReg(width, fields.Ra, "zr"),
  ];
}

function oneSourceIntegerOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [gpReg(width, fields.Rd, "zr"), gpReg(width, fields.Rn, "zr")];
}

function twoSourceIntegerOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [
    gpReg(width, fields.Rd, "zr"),
    gpReg(width, fields.Rn, "zr"),
    gpReg(width, fields.Rm, "zr"),
  ];
}

function crc32Operands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const rmWidth = (fields.sf ?? 0) === 1 ? 64 : 32;
  return [
    gpReg(32, fields.Rd, "zr"),
    gpReg(32, fields.Rn, "zr"),
    gpReg(rmWidth, fields.Rm, "zr"),
  ];
}

function exceptionImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const imm = BigInt(fields.imm16 ?? 0);
  return [{ kind: "text", text: imm === 0n ? "#0" : formatSignedHexImmediate(imm) }];
}

function signExtendImmediate(value: number, width: number): number {
  const shift = 32 - width;
  return (value << shift) >> shift;
}

function minMaxImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  const fileName = inst.encoding!.fileName;
  const immediate =
    fileName.startsWith("smax_") || fileName.startsWith("smin_")
      ? signExtendImmediate(fields.imm8 ?? 0, 8)
      : (fields.imm8 ?? 0);
  return [gpReg(width, fields.Rd, "zr"), gpReg(width, fields.Rn, "zr"), { kind: "text", text: `#${immediate}` }];
}

function mulAliasOperands(inst: DecodedInstruction): Operand[] {
  return threeSourceIntegerOperands(inst).slice(0, 3);
}

function scalarMultiplyLongOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(64, fields.Rd, "zr"),
    gpReg(32, fields.Rn, "zr"),
    gpReg(32, fields.Rm, "zr"),
    gpReg(64, fields.Ra, "zr"),
  ];
}

function scalarMultiplyLongAliasOperands(inst: DecodedInstruction): Operand[] {
  return scalarMultiplyLongOperands(inst).slice(0, 3);
}

function multiplyHighOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [gpReg(64, fields.Rd, "zr"), gpReg(64, fields.Rn, "zr"), gpReg(64, fields.Rm, "zr")];
}

function logicalShiftedRegisterOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  const shiftType = (["lsl", "lsr", "asr", "ror"] as const)[fields.shift ?? 0] ?? "lsl";
  const shiftAmount = fields.imm6 ?? 0;
  const ops: Operand[] = inst.encoding!.fileName === "tst_ands_log_shift.xml"
    ? [
      gpReg(width, fields.Rn, "zr"),
      gpReg(width, fields.Rm, "zr"),
    ]
    : [
      gpReg(width, fields.Rd, "zr"),
      gpReg(width, fields.Rn, "zr"),
      gpReg(width, fields.Rm, "zr"),
    ];

  if (shiftAmount !== 0 || shiftType !== "lsl") {
    ops.push({ kind: "text", text: `${shiftType} #${shiftAmount}` });
  }

  return ops;
}

function movRegisterAliasOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [gpReg(width, fields.Rd, "zr"), gpReg(width, fields.Rm, "zr")];
}

function highestSetBit(value: number): number {
  for (let bit = 31; bit >= 0; bit -= 1) {
    if (((value >>> bit) & 1) === 1) {
      return bit;
    }
  }
  return -1;
}

function rotateRight(value: bigint, shift: number, width: number): bigint {
  const normalizedShift = ((shift % width) + width) % width;
  const mask = (1n << BigInt(width)) - 1n;
  if (normalizedShift === 0) {
    return value & mask;
  }
  return ((value >> BigInt(normalizedShift)) | (value << BigInt(width - normalizedShift))) & mask;
}

function decodeLogicalImmediate(fields: Record<string, number>, width: 32 | 64): bigint | null {
  const n = fields.N ?? 0;
  const immr = fields.immr ?? 0;
  const imms = fields.imms ?? 0;
  const len = highestSetBit((n << 6) | ((~imms) & 0x3f));

  if (len < 1) {
    return null;
  }

  const size = 1 << len;
  const levels = size - 1;
  const s = imms & levels;
  const r = immr & levels;

  if (s === levels) {
    return null;
  }

  const element = rotateRight((1n << BigInt(s + 1)) - 1n, r, size);
  let value = 0n;
  for (let offset = 0; offset < width; offset += size) {
    value |= element << BigInt(offset);
  }
  return value;
}

function logicalImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  const imm = decodeLogicalImmediate(fields, width);

  if (imm === null) {
    return [];
  }

  if (inst.encoding!.fileName === "tst_ands_log_imm.xml") {
    return [gpReg(width, fields.Rn, "zr"), { kind: "imm", value: imm }];
  }

  if (inst.encoding!.fileName === "mov_orr_log_imm.xml") {
    return [gpReg(width, fields.Rd, "zr"), { kind: "imm", value: imm }];
  }

  return [
    gpReg(width, fields.Rd, "zr"),
    gpReg(width, fields.Rn, "zr"),
    { kind: "imm", value: imm },
  ];
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

function hintOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const imm = ((fields.CRm ?? 0) << 3) | (fields.op2 ?? 0);
  return [{ kind: "text", text: `#${imm}` }];
}

function btiOperands(inst: DecodedInstruction): Operand[] {
  const targets = ((inst.fields!.op2 ?? 0) >> 1) & 0b11;
  switch (targets) {
    case 0b01:
      return [{ kind: "text", text: "c" }];
    case 0b10:
      return [{ kind: "text", text: "j" }];
    case 0b11:
      return [{ kind: "text", text: "jc" }];
    default:
      return [];
  }
}

function noOperands(): Operand[] {
  return [];
}

function setfOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [gpReg(32, fields.Rn, "zr")];
}

function rmifOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(64, fields.Rn, "zr"),
    { kind: "text", text: `#${fields.imm6 ?? 0}` },
    { kind: "text", text: `#${fields.mask ?? 0}` },
  ];
}

function bitfieldImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [
    gpReg(width, fields.Rd, "zr"),
    gpReg(width, fields.Rn, "zr"),
    { kind: "imm", value: BigInt(fields.immr ?? 0) },
    { kind: "imm", value: BigInt(fields.imms ?? 0) },
  ];
}

function extractRegisterOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [
    gpReg(width, fields.Rd, "zr"),
    gpReg(width, fields.Rn, "zr"),
    gpReg(width, fields.Rm, "zr"),
    { kind: "text", text: `#${fields.imms ?? 0}` },
  ];
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

export function conditionSuffix(code: number): string {
  return COND_NAMES[code & 0xf] ?? "nv";
}

export function invertConditionCode(code: number): number {
  const normalized = code & 0xf;
  return normalized >= 0xe ? normalized : normalized ^ 1;
}

function conditionOperand(code: number): Operand {
  const normalized = code & 0xf;
  return { kind: "cond", code: normalized, suffix: conditionSuffix(normalized) };
}

function bCondOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const offset = signExtend(fields.imm19 << 2, 21);
  return [conditionOperand(fields.cond), labelFromOffset(offset)];
}

function conditionalSelectOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [
    gpReg(width, fields.Rd, "zr"),
    gpReg(width, fields.Rn, "zr"),
    gpReg(width, fields.Rm, "zr"),
    conditionOperand(fields.cond),
  ];
}

function conditionalCompareImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [
    gpReg(width, fields.Rn, "zr"),
    { kind: "text", text: `#${fields.imm5 ?? 0}` },
    { kind: "text", text: `#${fields.nzcv ?? 0}` },
    conditionOperand(fields.cond),
  ];
}

function conditionalCompareRegisterOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = widthFromSf(fields.sf);
  return [
    gpReg(width, fields.Rn, "zr"),
    gpReg(width, fields.Rm, "zr"),
    { kind: "text", text: `#${fields.nzcv ?? 0}` },
    conditionOperand(fields.cond),
  ];
}

function systemMoveOperands(inst: DecodedInstruction, mnemonic: string): Operand[] {
  const fields = inst.fields!;
  const systemRegister = sysReg(2 + (fields.o0 ?? 0), fields.op1 ?? 0, fields.CRn ?? 0, fields.CRm ?? 0, fields.op2 ?? 0);
  const xt = gpReg(64, fields.Rt, "zr");
  return mnemonic === "MRS" ? [xt, systemRegister] : [systemRegister, xt];
}

function systemMove128Operands(inst: DecodedInstruction, mnemonic: string): Operand[] {
  const fields = inst.fields!;
  const systemRegister = sysReg(2 + (fields.o0 ?? 0), fields.op1 ?? 0, fields.CRn ?? 0, fields.CRm ?? 0, fields.op2 ?? 0);
  const xt = gpReg(64, fields.Rt, "zr");
  const xt2 = gpReg(64, (fields.Rt + 1) & 31, "zr");
  return mnemonic === "MRRS" ? [xt, xt2, systemRegister] : [systemRegister, xt, xt2];
}

function systemAliasKey(fields: Record<string, number>): string {
  return `${fields.op1 ?? 0}:${fields.CRn ?? 0}:${fields.CRm ?? 0}:${fields.op2 ?? 0}`;
}

function barrierOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const option = BARRIER_OPTION_NAMES.get(fields.CRm ?? 0) ?? `#${fields.CRm ?? 0}`;
  return [{ kind: "text", text: option }];
}

function clrexOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return (fields.CRm ?? 0) === 15 ? [] : [{ kind: "text", text: `#${fields.CRm ?? 0}` }];
}

function isbOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return (fields.CRm ?? 0) === 15 ? [] : [{ kind: "text", text: `#${fields.CRm ?? 0}` }];
}

function pstateFieldName(fields: Record<string, number>): string | null {
  const op1 = fields.op1 ?? 0;
  const op2 = fields.op2 ?? 0;
  const CRm = fields.CRm ?? 0;

  if (op1 === 0 && op2 === 3) {
    return "UAO";
  }
  if (op1 === 0 && op2 === 4) {
    return "PAN";
  }
  if (op1 === 0 && op2 === 5) {
    return "SPSel";
  }
  if (op1 === 1 && op2 === 0) {
    if ((CRm & 0b1110) === 0) {
      return "ALLINT";
    }
    if ((CRm & 0b1110) === 0b0010) {
      return "PM";
    }
    return null;
  }
  if (op1 === 3 && op2 === 1) {
    return "SSBS";
  }
  if (op1 === 3 && op2 === 2) {
    return "DIT";
  }
  if (op1 === 3 && op2 === 3) {
    if ((CRm & 0b1110) === 0b0010) {
      return "SVCRSM";
    }
    if ((CRm & 0b1110) === 0b0100) {
      return "SVCRZA";
    }
    if ((CRm & 0b1110) === 0b0110) {
      return "SVCRSMZA";
    }
    return null;
  }
  if (op1 === 3 && op2 === 4) {
    return "TCO";
  }
  if (op1 === 3 && op2 === 6) {
    return "DAIFSet";
  }
  if (op1 === 3 && op2 === 7) {
    return "DAIFClr";
  }
  return null;
}

function pstateImmediateValue(fields: Record<string, number>): number {
  const fieldName = pstateFieldName(fields);
  const CRm = fields.CRm ?? 0;
  if (fieldName === "ALLINT" || fieldName === "PM" || fieldName?.startsWith("SVCR")) {
    return CRm & 1;
  }
  return CRm;
}

function msrImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const fieldName = pstateFieldName(fields);
  if (!fieldName) {
    return [];
  }
  return [{ kind: "text", text: fieldName }, { kind: "text", text: `#${pstateImmediateValue(fields)}` }];
}

function syslOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(64, fields.Rt, "zr"),
    { kind: "text", text: `#${fields.op1 ?? 0}` },
    { kind: "text", text: `c${fields.CRn ?? 0}` },
    { kind: "text", text: `c${fields.CRm ?? 0}` },
    { kind: "text", text: `#${fields.op2 ?? 0}` },
  ];
}

function smstartSmstopOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const CRm = fields.CRm ?? 0;
  if ((CRm & 0b0110) === 0b0110) {
    return [];
  }
  if ((CRm & 0b0110) === 0b0010) {
    return [{ kind: "text", text: "sm" }];
  }
  if ((CRm & 0b0110) === 0b0100) {
    return [{ kind: "text", text: "za" }];
  }
  return [];
}

function gcsSyslAliasOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return fields.Rt === 31 ? [] : [gpReg(64, fields.Rt, "zr")];
}

function chkfeatOperands(): Operand[] {
  return [gpReg(64, 16, "zr")];
}

function gcsbOperands(): Operand[] {
  return [{ kind: "text", text: "dsync" }];
}

function specResContextOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [{ kind: "text", text: "rctx" }, gpReg(64, fields.Rt, "zr")];
}

function rawSysOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const ops: Operand[] = [
    { kind: "text", text: `#${fields.op1 ?? 0}` },
    { kind: "text", text: `c${fields.CRn ?? 0}` },
    { kind: "text", text: `c${fields.CRm ?? 0}` },
    { kind: "text", text: `#${fields.op2 ?? 0}` },
  ];
  if ((fields.Rt ?? 31) !== 31) {
    ops.push(gpReg(64, fields.Rt, "zr"));
  }
  return ops;
}

function systemInstructionAliasOperands(inst: DecodedInstruction, aliases: Map<string, SystemAlias>): Operand[] {
  const fields = inst.fields!;
  const alias = aliases.get(systemAliasKey(fields));
  if (!alias) {
    return rawSysOperands(inst);
  }

  const ops: Operand[] = [{ kind: "text", text: alias.op }];
  if (alias.hasRegister) {
    ops.push(gpReg(64, fields.Rt, "zr"));
  }
  return alias.mnemonic === "dc" || alias.mnemonic === "ic"
    ? [{ kind: "text", text: alias.mnemonic }, ...ops]
    : ops;
}

function ldaprOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = (fields.size ?? 0) === 3 ? 64 : 32;
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  const memory = inst.encoding!.encodingId.includes("writeback")
    ? `[${base}], #${width / 8}`
    : `[${base}]`;
  return [gpReg(width, fields.Rt, "zr"), { kind: "text", text: memory }];
}

function ldiappOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = (fields.size ?? 0) === 3 ? 64 : 32;
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  const postIndexAmount = width === 64 ? 16 : 8;
  const memory = ((fields.opc2 ?? 0) & 1) === 0 ? `[${base}], #${postIndexAmount}` : `[${base}]`;
  return [
    gpReg(width, fields.Rt, "zr"),
    gpReg(width, fields.Rt2, "zr"),
    { kind: "text", text: memory },
  ];
}

function rcpcUnscaledMemoryText(inst: DecodedInstruction): string {
  const fields = inst.fields!;
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  const offset = signExtend(fields.imm9 ?? 0, 9);
  return offset === 0n ? `[${base}]` : `[${base}, ${formatSignedDecimalImmediate(offset)}]`;
}

function rcpcGeneralUnscaledWidth(fileName: string, fields: Record<string, number>): 32 | 64 {
  switch (fileName) {
    case "ldapursw.xml":
      return 64;
    case "ldapursb.xml":
    case "ldapursh.xml":
      return (fields.opc ?? 0) === 0b10 ? 64 : 32;
    case "stlur_gen.xml":
    case "ldapur_gen.xml":
    case "stlr.xml":
      return (fields.size ?? 0) === 0b11 ? 64 : 32;
    default:
      return 32;
  }
}

function rcpcUnscaledOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const fileName = inst.encoding!.fileName;
  const memory = rcpcUnscaledMemoryText(inst);

  if (fileName === "stlur_fpsimd.xml" || fileName === "ldapur_fpsimd.xml") {
    return [
      { kind: "text", text: fpSimdRegisterText(fields.size, fields.opc, fields.Rt) },
      { kind: "text", text: memory },
    ];
  }

  return [
    gpReg(rcpcGeneralUnscaledWidth(fileName, fields), fields.Rt, "zr"),
    { kind: "text", text: memory },
  ];
}

function stlrOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = rcpcGeneralUnscaledWidth(inst.encoding!.fileName, fields);
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  const offset = width === 64 ? -8n : -4n;
  const memory = inst.encoding!.encodingId.includes("writeback")
    ? `[${base}, ${formatSignedDecimalImmediate(offset)}]!`
    : `[${base}]`;
  return [gpReg(width, fields.Rt, "zr"), { kind: "text", text: memory }];
}

function stilpOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = (fields.size ?? 0) === 0b11 ? 64 : 32;
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  const offset = width === 64 ? -16n : -8n;
  const memory = ((fields.opc2 ?? 0) & 1) === 0 ? `[${base}, ${formatSignedDecimalImmediate(offset)}]!` : `[${base}]`;
  return [
    gpReg(width, fields.Rt, "zr"),
    gpReg(width, fields.Rt2, "zr"),
    { kind: "text", text: memory },
  ];
}

function formatSignedHexImmediate(value: bigint): string {
  if (value < 0) {
    return `#-0x${(-value).toString(16)}`;
  }
  return `#0x${value.toString(16)}`;
}

function formatSignedDecimalImmediate(value: bigint): string {
  return `#${value.toString()}`;
}

function prfmOpText(value: number): string {
  const accessNames = ["pld", "pli", "pst", "ir"];
  const levelNames = ["l1", "l2", "l3", "slc"];
  const policyNames = ["keep", "strm"];
  const accessName = accessNames[value >> 3];
  const levelName = levelNames[(value >> 1) & 0x3];
  const policyName = policyNames[value & 0x1];
  if (!accessName || !levelName || !policyName) {
    return `#${value}`;
  }
  return `${accessName}${levelName}${policyName}`;
}

function scalarLoadStoreRegisterWidth(fileName: string, size: number | undefined): 32 | 64 {
  switch (fileName) {
    case "ldr_imm_gen.xml":
    case "str_imm_gen.xml":
    case "ldur_gen.xml":
    case "stur_gen.xml":
    case "ldtr.xml":
    case "sttr.xml":
    case "ldr_reg_gen.xml":
    case "str_reg_gen.xml":
      return size === 3 ? 64 : 32;
    case "ldrsw_imm.xml":
    case "ldursw.xml":
    case "ldtrsw.xml":
    case "ldrsw_reg.xml":
      return 64;
    default:
      return 32;
  }
}

function fpSimdRegisterText(size: number | undefined, opc: number | undefined, index: number): string {
  if ((size ?? 0) === 0 && ((opc ?? 0) & 0b10) !== 0) {
    return `q${index}`;
  }
  return `${advsimdLaneFromSize(size)}${index}`;
}

function fpSimdPairRegisterText(opc: number | undefined, index: number): string {
  switch (opc ?? 0) {
    case 0:
      return `s${index}`;
    case 1:
      return `d${index}`;
    case 2:
      return `q${index}`;
    default:
      return `s${index}`;
  }
}

function isFpSimdLoadStore(fileName: string): boolean {
  switch (fileName) {
    case "ldr_imm_fpsimd.xml":
    case "str_imm_fpsimd.xml":
    case "ldur_fpsimd.xml":
    case "stur_fpsimd.xml":
    case "ldr_reg_fpsimd.xml":
    case "str_reg_fpsimd.xml":
    case "ldp_fpsimd.xml":
    case "stp_fpsimd.xml":
    case "stnp_fpsimd.xml":
      return true;
    default:
      return false;
  }
}

function scalarLoadStoreImmediateScale(fileName: string, size: number | undefined): bigint {
  switch (fileName) {
    case "ldr_imm_gen.xml":
    case "str_imm_gen.xml":
      return 1n << BigInt(size ?? 0);
    case "ldrh_imm.xml":
    case "strh_imm.xml":
      return 2n;
    case "ldrsh_imm.xml":
      return 2n;
    case "ldrsw_imm.xml":
      return 4n;
    case "prfm_imm.xml":
      return 8n;
    default:
      return 1n;
  }
}

function isScalarRegisterOffsetLoadStore(fileName: string): boolean {
  switch (fileName) {
    case "ldr_reg_gen.xml":
    case "ldrb_reg.xml":
    case "ldrh_reg.xml":
    case "ldrsb_reg.xml":
    case "ldrsh_reg.xml":
    case "ldrsw_reg.xml":
    case "str_reg_gen.xml":
    case "strb_reg.xml":
    case "strh_reg.xml":
    case "ldr_reg_fpsimd.xml":
    case "str_reg_fpsimd.xml":
    case "prfm_reg.xml":
      return true;
    default:
      return false;
  }
}

function isDecimalUnscaledLoadStore(fileName: string): boolean {
  switch (fileName) {
    case "ldursb.xml":
    case "ldursh.xml":
    case "ldursw.xml":
    case "sturb.xml":
    case "sturh.xml":
    case "ldurb.xml":
    case "ldurh.xml":
    case "prfum.xml":
    case "sttr.xml":
    case "sttrb.xml":
    case "sttrh.xml":
    case "ldtr.xml":
    case "ldtrb.xml":
    case "ldtrh.xml":
    case "ldtrsb.xml":
    case "ldtrsh.xml":
    case "ldtrsw.xml":
      return true;
    default:
      return false;
  }
}

function scalarRegisterOffsetMemoryText(inst: DecodedInstruction): string {
  const fields = inst.fields!;
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  const option = fields.option ?? 0;
  const shift =
    fields.S === 1
      ? isFpSimdLoadStore(inst.encoding!.fileName)
        ? (fields.opc ?? 0) === 3 ? 4 : (fields.size ?? 0)
        : (fields.size ?? 0)
      : 0;
  const indexWidth = (option & 1) === 0 ? 32 : 64;
  const index = formatRegister(gpReg(indexWidth === 32 ? 32 : 64, fields.Rm, "zr"));

  if (option === 3 && shift === 0) {
    return `[${base}, ${index}]`;
  }

  const extendNames = ["uxtb", "uxth", "uxtw", "lsl", "sxtb", "sxth", "sxtw", "sxtx"] as const;
  const extend = extendNames[option] ?? "lsl";
  return shift === 0 ? `[${base}, ${index}, ${extend}]` : `[${base}, ${index}, ${extend} #${shift}]`;
}

function scalarLoadStoreMemoryText(inst: DecodedInstruction): string {
  const fields = inst.fields!;
  const encodingId = inst.encoding!.encodingId;
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));

  if (
    isScalarRegisterOffsetLoadStore(inst.encoding!.fileName)
  ) {
    return scalarRegisterOffsetMemoryText(inst);
  }

  if (fields.imm12 !== undefined) {
    const offset =
      BigInt(fields.imm12) *
      (inst.encoding!.fileName === "ldr_imm_fpsimd.xml" || inst.encoding!.fileName === "str_imm_fpsimd.xml"
        ? (fields.size ?? 0) === 0 && ((fields.opc ?? 0) & 0b10) !== 0
          ? 16n
          : 1n << BigInt(fields.size ?? 0)
        : scalarLoadStoreImmediateScale(inst.encoding!.fileName, fields.size));
    if (inst.encoding!.fileName === "prfm_imm.xml" || isFpSimdLoadStore(inst.encoding!.fileName)) {
      return offset === 0n ? `[${base}]` : `[${base}, ${formatSignedDecimalImmediate(offset)}]`;
    }
    return offset === 0n ? `[${base}]` : `[${base}, ${formatSignedHexImmediate(offset)}]`;
  }

  const offset = signExtend(fields.imm9 ?? 0, 9);
  if (
    inst.encoding!.fileName === "ldrsb_imm.xml" ||
    inst.encoding!.fileName === "ldrsh_imm.xml" ||
    isDecimalUnscaledLoadStore(inst.encoding!.fileName) ||
    isFpSimdLoadStore(inst.encoding!.fileName)
  ) {
    if (encodingId.includes("immpost")) {
      return `[${base}], ${formatSignedDecimalImmediate(offset)}`;
    }
    if (encodingId.includes("immpre")) {
      return `[${base}, ${formatSignedDecimalImmediate(offset)}]!`;
    }
    return offset === 0n ? `[${base}]` : `[${base}, ${formatSignedDecimalImmediate(offset)}]`;
  }
  if (encodingId.includes("immpost")) {
    return `[${base}], ${formatSignedHexImmediate(offset)}`;
  }
  if (encodingId.includes("immpre")) {
    return `[${base}, ${formatSignedHexImmediate(offset)}]!`;
  }
  return offset === 0n ? `[${base}]` : `[${base}, ${formatSignedHexImmediate(offset)}]`;
}

function pairLoadStoreScaledImmediate(inst: DecodedInstruction): bigint {
  const fields = inst.fields!;
  if (inst.encoding!.fileName === "ldpsw.xml") {
    return signExtend(fields.imm7 ?? 0, 7) * 4n;
  }
  if (
    inst.encoding!.fileName === "ldp_fpsimd.xml" ||
    inst.encoding!.fileName === "stp_fpsimd.xml" ||
    inst.encoding!.fileName === "stnp_fpsimd.xml" ||
    inst.encoding!.fileName === "ldnp_fpsimd.xml"
  ) {
    const scale = (fields.opc ?? 0) === 2 ? 16n : (fields.opc ?? 0) === 1 ? 8n : 4n;
    return signExtend(fields.imm7 ?? 0, 7) * scale;
  }
  const width = (fields.opc ?? 0) === 2 ? 64 : 32;
  return signExtend(fields.imm7 ?? 0, 7) * BigInt(width / 8);
}

function pairLoadStoreMemoryText(inst: DecodedInstruction): string {
  const fields = inst.fields!;
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  const offset = pairLoadStoreScaledImmediate(inst);
  const encodingId = inst.encoding!.encodingId;

  if (encodingId.includes("_post")) {
    return `[${base}], ${formatSignedDecimalImmediate(offset)}`;
  }
  if (encodingId.includes("_pre")) {
    return `[${base}, ${formatSignedDecimalImmediate(offset)}]!`;
  }
  return offset === 0n ? `[${base}]` : `[${base}, ${formatSignedDecimalImmediate(offset)}]`;
}

function pairLoadStoreOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  if (
    inst.encoding!.fileName === "ldp_fpsimd.xml" ||
    inst.encoding!.fileName === "stp_fpsimd.xml" ||
    inst.encoding!.fileName === "stnp_fpsimd.xml" ||
    inst.encoding!.fileName === "ldnp_fpsimd.xml"
  ) {
    return [
      { kind: "text", text: fpSimdPairRegisterText(fields.opc, fields.Rt) },
      { kind: "text", text: fpSimdPairRegisterText(fields.opc, fields.Rt2) },
      { kind: "text", text: pairLoadStoreMemoryText(inst) },
    ];
  }
  const width = inst.encoding!.fileName === "ldpsw.xml" ? 64 : (fields.opc ?? 0) === 2 ? 64 : 32;
  return [
    gpReg(width, fields.Rt, "zr"),
    gpReg(width, fields.Rt2, "zr"),
    { kind: "text", text: pairLoadStoreMemoryText(inst) },
  ];
}

function scalarLoadStoreOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  if (inst.encoding!.fileName === "prfm_imm.xml" || inst.encoding!.fileName === "prfm_reg.xml" || inst.encoding!.fileName === "prfum.xml") {
    return [
      { kind: "text", text: prfmOpText(fields.Rt) },
      { kind: "text", text: scalarLoadStoreMemoryText(inst) },
    ];
  }
  if (
    inst.encoding!.fileName === "ldrsb_imm.xml" ||
    inst.encoding!.fileName === "ldrsh_imm.xml" ||
    inst.encoding!.fileName === "ldrsb_reg.xml" ||
    inst.encoding!.fileName === "ldrsh_reg.xml" ||
    inst.encoding!.fileName === "ldursb.xml" ||
    inst.encoding!.fileName === "ldursh.xml" ||
    inst.encoding!.fileName === "ldtrsb.xml" ||
    inst.encoding!.fileName === "ldtrsh.xml"
  ) {
    const width: 32 | 64 = (fields.opc ?? 0) === 2 ? 64 : 32;
    return [gpReg(width, fields.Rt, "zr"), { kind: "text", text: scalarLoadStoreMemoryText(inst) }];
  }
  if (isFpSimdLoadStore(inst.encoding!.fileName)) {
    return [
      { kind: "text", text: fpSimdRegisterText(fields.size, fields.opc, fields.Rt) },
      { kind: "text", text: scalarLoadStoreMemoryText(inst) },
    ];
  }
  const width = scalarLoadStoreRegisterWidth(inst.encoding!.fileName, fields.size);
  return [gpReg(width, fields.Rt, "zr"), { kind: "text", text: scalarLoadStoreMemoryText(inst) }];
}

function orderedMemoryWidth(fileName: string, fields: Record<string, number>): 32 | 64 {
  switch (fileName) {
    case "ldarb.xml":
    case "ldarh.xml":
      return 32;
    case "ldar.xml":
    case "ldxr.xml":
    case "ldaxr.xml":
    case "stxr.xml":
    case "stlxr.xml":
      return (fields.size ?? 0) === 0b11 ? 64 : 32;
    case "stxrb.xml":
    case "stxrh.xml":
    case "ldxrb.xml":
    case "ldxrh.xml":
    case "stlxrb.xml":
    case "stlxrh.xml":
    case "ldaxrb.xml":
    case "ldaxrh.xml":
      return 32;
    case "ldxp.xml":
    case "stxp.xml":
    case "ldaxp.xml":
      return (fields.sz ?? 0) === 1 ? 64 : 32;
    default:
      return 32;
  }
}

function orderedMemoryAddress(inst: DecodedInstruction): Operand {
  const base = formatRegister(gpReg(64, inst.fields!.Rn, "sp"));
  return { kind: "text", text: `[${base}]` };
}

function ldrLiteralOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width: 32 | 64 = ((fields.opc ?? 0) & 1) === 1 ? 64 : 32;
  return [
    gpReg(width, fields.Rt, "zr"),
    labelFromOffset(signExtend((fields.imm19 ?? 0) << 2, 21)),
  ];
}

function storeExclusiveOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = orderedMemoryWidth(inst.encoding!.fileName, fields);
  return [
    gpReg(32, fields.Rs, "zr"),
    gpReg(width, fields.Rt, "zr"),
    orderedMemoryAddress(inst),
  ];
}

function loadExclusiveOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(orderedMemoryWidth(inst.encoding!.fileName, fields), fields.Rt, "zr"),
    orderedMemoryAddress(inst),
  ];
}

function exclusivePairOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width = orderedMemoryWidth(inst.encoding!.fileName, fields);
  const ops: Operand[] = [];
  if (inst.encoding!.fileName === "stxp.xml") {
    ops.push(gpReg(32, fields.Rs, "zr"));
  }
  ops.push(gpReg(width, fields.Rt, "zr"));
  ops.push(gpReg(width, fields.Rt2, "zr"));
  ops.push(orderedMemoryAddress(inst));
  return ops;
}

function stlxpOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const width: 32 | 64 = (fields.sz ?? 0) === 1 ? 64 : 32;
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  return [
    gpReg(32, fields.Rs, "zr"),
    gpReg(width, fields.Rt, "zr"),
    gpReg(width, fields.Rt2, "zr"),
    { kind: "text", text: `[${base}]` },
  ];
}

function mteTagOffset(value: number | undefined, bits: number): bigint {
  return signExtend(value ?? 0, bits) * 16n;
}

function mteTagMemoryText(inst: DecodedInstruction, offsetField: "imm9" | "simm7", bits: number): string {
  const fields = inst.fields!;
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  const offset = mteTagOffset(fields[offsetField], bits);
  const encodingId = inst.encoding!.encodingId;

  if (encodingId.includes("post")) {
    return `[${base}], ${formatSignedDecimalImmediate(offset)}`;
  }
  if (encodingId.includes("pre")) {
    return `[${base}, ${formatSignedDecimalImmediate(offset)}]!`;
  }
  return offset === 0n ? `[${base}]` : `[${base}, ${formatSignedDecimalImmediate(offset)}]`;
}

function mteTagStoreOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(64, fields.Rt, "sp"),
    { kind: "text", text: mteTagMemoryText(inst, "imm9", 9) },
  ];
}

function mteTagLoadOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(64, fields.Rt, "zr"),
    { kind: "text", text: mteTagMemoryText(inst, "imm9", 9) },
  ];
}

function mteTagPairStoreOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(64, fields.Rt, "zr"),
    gpReg(64, fields.Rt2, "zr"),
    { kind: "text", text: mteTagMemoryText(inst, "simm7", 7) },
  ];
}

function mteInsertRandomTagOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const ops: Operand[] = [
    gpReg(64, fields.Rd, "sp"),
    gpReg(64, fields.Rn, "sp"),
  ];
  if ((fields.Rm ?? 31) !== 31) {
    ops.push(gpReg(64, fields.Rm, "zr"));
  }
  return ops;
}

function mteAddSubTagOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(64, fields.Rd, "sp"),
    gpReg(64, fields.Rn, "sp"),
    { kind: "text", text: `#${((fields.imm6 ?? 0) << 4)}` },
    { kind: "text", text: `#${fields.imm4 ?? 0}` },
  ];
}

function mteTagMaskInsertOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(64, fields.Rd, "zr"),
    gpReg(64, fields.Rn, "sp"),
    gpReg(64, fields.Rm, "zr"),
  ];
}

function mteSubtractPointerOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    gpReg(64, fields.Rd, "zr"),
    gpReg(64, fields.Rn, "sp"),
    gpReg(64, fields.Rm, "sp"),
  ];
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
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "mul4",
      "mul3",
    ] as const
  )[pattern];
}

function expandVfpImmediate(imm8: number, width: 16 | 32 | 64): number {
  const exponentBits = width === 16 ? 5 : width === 32 ? 8 : 11;
  const fractionBits = width - exponentBits - 1;
  const exponentBias = width === 16 ? 15 : width === 32 ? 127 : 1023;
  const sign = (imm8 >>> 7) & 1;
  const immBit6 = (imm8 >>> 6) & 1;
  const exponent =
    (((immBit6 ^ 1) & 1) << (exponentBits - 1)) |
    (((immBit6 === 1 ? 1 : 0) * ((1 << (exponentBits - 3)) - 1)) << 2) |
    ((imm8 >>> 4) & 0x3);
  const fraction = (imm8 & 0xf) * 2 ** (fractionBits - 4);
  const magnitude =
    exponent === 0 ? 2 ** (1 - exponentBias) * (fraction / 2 ** fractionBits) : 2 ** (exponent - exponentBias) * (1 + fraction / 2 ** fractionBits);
  return (sign ? -1 : 1) * magnitude;
}

function sveFloatingImmediate(imm8: number, size: number | undefined): Operand {
  const width = (size === 1 ? 16 : size === 2 ? 32 : 64) as 16 | 32 | 64;
  return { kind: "fpimm", value: expandVfpImmediate(imm8, width) };
}

function scalarFpLaneFromFtype(ftype: number | undefined): "h" | "s" | "d" {
  switch (ftype ?? 0) {
    case 3:
      return "h";
    case 1:
      return "d";
    default:
      return "s";
  }
}

function scalarFpRegisterText(index: number, lane: "h" | "s" | "d"): string {
  return `${lane}${index}`;
}

function scalarFpCompareOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = scalarFpLaneFromFtype(fields.ftype);
  const lhs = { kind: "text", text: scalarFpRegisterText(fields.Rn, lane) } satisfies Operand;
  if (((fields.opc ?? 0) & 1) === 1) {
    return [lhs, { kind: "text", text: "#0.0" }];
  }
  return [lhs, { kind: "text", text: scalarFpRegisterText(fields.Rm, lane) }];
}

function scalarFpConditionalCompareOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = scalarFpLaneFromFtype(fields.ftype);
  return [
    { kind: "text", text: scalarFpRegisterText(fields.Rn, lane) },
    { kind: "text", text: scalarFpRegisterText(fields.Rm, lane) },
    { kind: "text", text: `#${fields.nzcv ?? 0}` },
    conditionOperand(fields.cond),
  ];
}

function scalarFpConditionalSelectOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = scalarFpLaneFromFtype(fields.ftype);
  return [
    { kind: "text", text: scalarFpRegisterText(fields.Rd, lane) },
    { kind: "text", text: scalarFpRegisterText(fields.Rn, lane) },
    { kind: "text", text: scalarFpRegisterText(fields.Rm, lane) },
    conditionOperand(fields.cond),
  ];
}

function scalarFpConvertPrecisionOperands(inst: DecodedInstruction): Operand[] {
  const encodingId = inst.encoding!.encodingId;
  const match = /^FCVT_([HSD])([HSD])_/.exec(encodingId);
  if (match) {
    const destLane = match[1].toLowerCase() as "h" | "s" | "d";
    const sourceLane = match[2].toLowerCase() as "h" | "s" | "d";
    const fields = inst.fields!;
    return [
      { kind: "text", text: scalarFpRegisterText(fields.Rd, destLane) },
      { kind: "text", text: scalarFpRegisterText(fields.Rn, sourceLane) },
    ];
  }

  const fields = inst.fields!;
  if (encodingId === "BFCVT_BS_floatdp1") {
    return [
      { kind: "text", text: scalarFpRegisterText(fields.Rd, "h") },
      { kind: "text", text: scalarFpRegisterText(fields.Rn, "s") },
    ];
  }

  return [];
}

function scalarFpMoveGeneralOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  switch (inst.encoding!.encodingId) {
    case "FMOV_32H_float2int":
      return [gpReg(32, fields.Rd, "zr"), { kind: "text", text: scalarFpRegisterText(fields.Rn, "h") }];
    case "FMOV_64H_float2int":
      return [gpReg(64, fields.Rd, "zr"), { kind: "text", text: scalarFpRegisterText(fields.Rn, "h") }];
    case "FMOV_H32_float2int":
      return [{ kind: "text", text: scalarFpRegisterText(fields.Rd, "h") }, gpReg(32, fields.Rn, "zr")];
    case "FMOV_S32_float2int":
      return [{ kind: "text", text: scalarFpRegisterText(fields.Rd, "s") }, gpReg(32, fields.Rn, "zr")];
    case "FMOV_32S_float2int":
      return [gpReg(32, fields.Rd, "zr"), { kind: "text", text: scalarFpRegisterText(fields.Rn, "s") }];
    case "FMOV_H64_float2int":
      return [{ kind: "text", text: scalarFpRegisterText(fields.Rd, "h") }, gpReg(64, fields.Rn, "zr")];
    case "FMOV_D64_float2int":
      return [{ kind: "text", text: scalarFpRegisterText(fields.Rd, "d") }, gpReg(64, fields.Rn, "zr")];
    case "FMOV_V64I_float2int":
      return [{ kind: "text", text: `v${fields.Rd}.d[1]` }, gpReg(64, fields.Rn, "zr")];
    case "FMOV_64D_float2int":
      return [gpReg(64, fields.Rd, "zr"), { kind: "text", text: scalarFpRegisterText(fields.Rn, "d") }];
    case "FMOV_64VX_float2int":
      return [gpReg(64, fields.Rd, "zr"), { kind: "text", text: `v${fields.Rn}.d[1]` }];
    default:
      return [];
  }
}

function scalarFpMoveImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = scalarFpLaneFromFtype(fields.ftype);
  const width = lane === "h" ? 16 : lane === "s" ? 32 : 64;
  return [{ kind: "text", text: scalarFpRegisterText(fields.Rd, lane) }, { kind: "fpimm", value: expandVfpImmediate(fields.imm8 ?? 0, width) }];
}

function scalarFpToIntegerOperands(inst: DecodedInstruction, fixedPoint = false): Operand[] {
  const fields = inst.fields!;
  const lane = scalarFpLaneFromFtype(fields.ftype);
  const ops: Operand[] = [
    gpReg(widthFromSf(fields.sf), fields.Rd, "zr"),
    { kind: "text", text: scalarFpRegisterText(fields.Rn, lane) },
  ];
  if (fixedPoint) {
    ops.push({ kind: "text", text: `#${64 - (fields.scale ?? 0)}` });
  }
  return ops;
}

function scalarIntegerToFpOperands(inst: DecodedInstruction, fixedPoint = false): Operand[] {
  const fields = inst.fields!;
  const lane = scalarFpLaneFromFtype(fields.ftype);
  const ops: Operand[] = [
    { kind: "text", text: scalarFpRegisterText(fields.Rd, lane) },
    gpReg(widthFromSf(fields.sf), fields.Rn, "zr"),
  ];
  if (fixedPoint) {
    ops.push({ kind: "text", text: `#${64 - (fields.scale ?? 0)}` });
  }
  return ops;
}

function scalarFpUnaryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = scalarFpLaneFromFtype(fields.ftype);
  return [
    { kind: "text", text: scalarFpRegisterText(fields.Rd, lane) },
    { kind: "text", text: scalarFpRegisterText(fields.Rn, lane) },
  ];
}

function scalarFpBinaryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = scalarFpLaneFromFtype(fields.ftype);
  return [
    { kind: "text", text: scalarFpRegisterText(fields.Rd, lane) },
    { kind: "text", text: scalarFpRegisterText(fields.Rn, lane) },
    { kind: "text", text: scalarFpRegisterText(fields.Rm, lane) },
  ];
}

function scalarFpTernaryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = scalarFpLaneFromFtype(fields.ftype);
  return [
    { kind: "text", text: scalarFpRegisterText(fields.Rd, lane) },
    { kind: "text", text: scalarFpRegisterText(fields.Rn, lane) },
    { kind: "text", text: scalarFpRegisterText(fields.Rm, lane) },
    { kind: "text", text: scalarFpRegisterText(fields.Ra, lane) },
  ];
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

function sveDupIndexedLane(tsz: number): { lane: "b" | "h" | "s" | "d" | "q"; lsb: number } {
  const lowestBit = tsz & -tsz;
  switch (lowestBit) {
    case 1:
      return { lane: "b", lsb: 0 };
    case 2:
      return { lane: "h", lsb: 1 };
    case 4:
      return { lane: "s", lsb: 2 };
    case 8:
      return { lane: "d", lsb: 3 };
    case 16:
      return { lane: "q", lsb: 4 };
    default:
      return { lane: "b", lsb: 0 };
  }
}

function sveDupIndexedOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const encodedImm = ((fields.imm2 ?? 0) << 5) | (fields.tsz ?? 0);
  const { lane, lsb } = sveDupIndexedLane(fields.tsz ?? 0);
  const index = encodedImm >> (lsb + 1);
  const source =
    encodedImm !== 0 && (encodedImm & (encodedImm - 1)) === 0
      ? `${lane}${fields.Zn ?? 0}`
      : `z${fields.Zn ?? 0}.${lane}[${index}]`;
  return [vecReg(fields.Zd, lane), { kind: "text", text: source }];
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

function sveCopyImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  let imm = Number(signExtend(fields.imm8, 8));
  if ((fields.sh ?? 0) === 1) {
    imm <<= 8;
  }
  return [vecReg(fields.Zd, lane), predReg(fields.Pg, "z"), { kind: "imm", value: BigInt(imm), signed: true }];
}

function sveCopyMergingImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  let imm = Number(signExtend(fields.imm8, 8));
  if ((fields.sh ?? 0) === 1) {
    imm <<= 8;
  }
  return [vecReg(fields.Zd, lane), predReg(fields.Pg, "m"), { kind: "imm", value: BigInt(imm), signed: true }];
}

function sveCopyScalarOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const width = fields.size === 3 ? 64 : 32;
  return [vecReg(fields.Zd, lane), predReg(fields.Pg, "m"), gpReg(width, fields.Rn, "sp")];
}

function sveCopyScalarVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [vecReg(fields.Zd, lane), predReg(fields.Pg, "m"), { kind: "text", text: `${lane}${fields.Vn ?? 0}` }];
}

function advsimdLaneFromSize(size: number | undefined): "b" | "h" | "s" | "d" {
  switch (size ?? 0) {
    case 0:
      return "b";
    case 1:
      return "h";
    case 2:
      return "s";
    case 3:
      return "d";
    default:
      return "b";
  }
}

function advsimdArrangementFromSizeQ(
  size: number | undefined,
  q: number | undefined,
): "8b" | "16b" | "4h" | "8h" | "2s" | "4s" | "1d" | "2d" {
  const lane = advsimdLaneFromSize(size);
  const count =
    lane === "b" ? (q === 1 ? 16 : 8) :
    lane === "h" ? (q === 1 ? 8 : 4) :
    lane === "s" ? (q === 1 ? 4 : 2) :
    q === 1 ? 2 : 1;
  return `${count}${lane}`;
}

function advsimdScalarRegisterText(index: number, size: number | undefined): string {
  return `${advsimdLaneFromSize(size)}${index}`;
}

function advsimdVectorRegisterText(index: number, size: number | undefined, q: number | undefined): string {
  return `v${index}.${advsimdArrangementFromSizeQ(size, q)}`;
}

function advsimdImmediateImm8(fields: Record<string, number>): number {
  return (
    ((fields.a ?? 0) << 7) |
    ((fields.b ?? 0) << 6) |
    ((fields.c ?? 0) << 5) |
    ((fields.d ?? 0) << 4) |
    ((fields.e ?? 0) << 3) |
    ((fields.f ?? 0) << 2) |
    ((fields.g ?? 0) << 1) |
    (fields.h ?? 0)
  );
}

function replicatePattern(pattern: bigint, patternWidth: number, totalWidth: number): bigint {
  let value = 0n;
  for (let offset = 0; offset < totalWidth; offset += patternWidth) {
    value |= pattern << BigInt(offset);
  }
  return value;
}

function advsimdExpandImmediate(op: number, cmode: number, imm8: number): bigint {
  const cmodeHigh = (cmode >>> 1) & 0x7;
  const cmodeLow = cmode & 1;
  const imm = BigInt(imm8);

  switch (cmodeHigh) {
    case 0:
      return replicatePattern(imm, 32, 64);
    case 1:
      return replicatePattern(imm << 8n, 32, 64);
    case 2:
      return replicatePattern(imm << 16n, 32, 64);
    case 3:
      return replicatePattern(imm << 24n, 32, 64);
    case 4:
      return replicatePattern(imm, 16, 64);
    case 5:
      return replicatePattern(imm << 8n, 16, 64);
    case 6:
      return cmodeLow === 0
        ? replicatePattern((imm << 8n) | 0xffn, 32, 64)
        : replicatePattern((imm << 16n) | 0xffffn, 32, 64);
    case 7:
      if (cmodeLow === 0 && op === 0) {
        return replicatePattern(imm, 8, 64);
      }
      if (cmodeLow === 0 && op === 1) {
        let value = 0n;
        for (let bit = 7; bit >= 0; bit -= 1) {
          value = (value << 8n) | (((imm8 >>> bit) & 1) === 1 ? 0xffn : 0n);
        }
        return value;
      }
      break;
    default:
      break;
  }

  return 0n;
}

function advsimdImmediateVectorText(fields: Record<string, number>, size: number, scalar = false): string {
  if (scalar) {
    return advsimdScalarRegisterText(fields.Rd ?? 0, size);
  }
  return advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q);
}

function advsimdImmediateShiftText(cmode: number, masked = false): string | null {
  if (masked) {
    return (cmode & 1) === 0 ? "msl #8" : "msl #16";
  }

  const shift = ((cmode >>> 1) & 0x3) << 3;
  return shift === 0 ? null : `lsl #${shift}`;
}

function advsimdMoveImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const fileName = inst.encoding!.fileName;
  const className = inst.encoding!.className.toLowerCase();
  const imm8 = advsimdImmediateImm8(fields);
  const cmode = fields.cmode ?? 0;
  const op = fields.op ?? 0;
  const cmodeHigh = (cmode >>> 1) & 0x7;
  const cmodeLow = cmode & 1;
  const is64BitImmediate = (cmode === 0b1110) && op === 1;
  const isMaskedImmediate = cmodeHigh === 0b110;
  const size =
    fileName === "fmov_advsimd.xml"
      ? (className.includes("half-precision") ? 1 : op === 1 ? 3 : 2)
      : is64BitImmediate
        ? 3
        : cmodeHigh <= 0b011 || cmodeHigh === 0b110
          ? 2
          : cmodeHigh <= 0b101
            ? 1
            : (cmodeLow === 0 && op === 0 ? 0 : 3);
  const destination = advsimdImmediateVectorText(fields, size, fileName === "movi_advsimd.xml" && is64BitImmediate && (fields.Q ?? 0) === 0);

  if (fileName === "fmov_advsimd.xml") {
    const width = size === 1 ? 16 : size === 2 ? 32 : 64;
    return [{ kind: "text", text: destination }, { kind: "fpimm", value: expandVfpImmediate(imm8, width as 16 | 32 | 64) }];
  }

  if (is64BitImmediate) {
    const imm64 = advsimdExpandImmediate(op, cmode, imm8);
    return [{ kind: "text", text: destination }, { kind: "text", text: `#0x${imm64.toString(16)}` }];
  }

  const operands: Operand[] = [
    { kind: "text", text: destination },
    { kind: "text", text: `#${imm8}` },
  ];
  const shiftText = advsimdImmediateShiftText(cmode, isMaskedImmediate);
  if (shiftText) {
    operands.push({ kind: "text", text: shiftText });
  }
  return operands;
}

function advsimdMoveRegisterAliasOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, 0, fields.Q) },
    { kind: "text", text: advsimdVectorRegisterText(fields.Rn ?? 0, 0, fields.Q) },
  ];
}

function advsimdLaneSizeFromImm5(imm5: number | undefined): number {
  const encoded = imm5 ?? 0;
  for (let size = 0; size < 4; size += 1) {
    if (((encoded >> size) & 1) === 1) {
      return size;
    }
  }
  return 0;
}

function advsimdLaneIndexFromImm5(imm5: number | undefined, size: number): number {
  return (imm5 ?? 0) >> (size + 1);
}

function advsimdCopyGeneralToElementOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = advsimdLaneSizeFromImm5(fields.imm5);
  const lane = advsimdLaneFromSize(size);
  const index = advsimdLaneIndexFromImm5(fields.imm5, size);
  const width = lane === "d" ? 64 : 32;
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${lane}[${index}]` },
    gpReg(width, fields.Rn ?? 0, "zr"),
  ];
}

function advsimdCopyElementToElementOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = advsimdLaneSizeFromImm5(fields.imm5);
  const lane = advsimdLaneFromSize(size);
  const dstIndex = advsimdLaneIndexFromImm5(fields.imm5, size);
  const srcIndex = (fields.imm4 ?? 0) >> size;
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${lane}[${dstIndex}]` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${lane}[${srcIndex}]` },
  ];
}

function advsimdCopyElementToGeneralOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = advsimdLaneSizeFromImm5(fields.imm5);
  const lane = advsimdLaneFromSize(size);
  const index = advsimdLaneIndexFromImm5(fields.imm5, size);
  const width = (fields.Q ?? 0) === 1 ? 64 : 32;
  return [
    gpReg(width, fields.Rd ?? 0, "zr"),
    { kind: "text", text: `v${fields.Rn ?? 0}.${lane}[${index}]` },
  ];
}

function advsimdScalarDuplicateElementOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = advsimdLaneSizeFromImm5(fields.imm5);
  const lane = advsimdLaneFromSize(size);
  const index = advsimdLaneIndexFromImm5(fields.imm5, size);
  return [
    { kind: "text", text: `${lane}${fields.Rd ?? 0}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${lane}[${index}]` },
  ];
}

function advsimdExtractOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const arrangement = (fields.Q ?? 0) === 1 ? "16b" : "8b";
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${arrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${arrangement}` },
    { kind: "text", text: `v${fields.Rm ?? 0}.${arrangement}` },
    { kind: "text", text: `#${fields.imm4 ?? 0}` },
  ];
}

function advsimdElementSize(inst: DecodedInstruction): number {
  const fields = inst.fields!;
  const className = inst.encoding!.className.toLowerCase();
  if (fields.size !== undefined) {
    return fields.size;
  }
  if (className.includes("half-precision")) {
    return 1;
  }
  if (fields.sz !== undefined) {
    return fields.sz + 2;
  }
  return 0;
}

function highestSetBitNZ(value: number | undefined): number {
  const n = value ?? 0;
  return n === 0 ? 0 : 31 - Math.clz32(n);
}

function advsimdScalarRegisterFromImmh(index: number, immh: number | undefined): string {
  return advsimdScalarRegisterText(index, highestSetBitNZ(immh));
}

function advsimdVectorRegisterFromImmh(index: number, immh: number | undefined, q: number | undefined): string {
  return advsimdVectorRegisterText(index, highestSetBitNZ(immh), q);
}

function advsimdImmediateShiftOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const fileName = inst.encoding!.fileName;
  const isScalar = inst.encoding!.className.toLowerCase().includes("scalar");
  const immh = fields.immh ?? 0;
  const imm = (immh << 3) | (fields.immb ?? 0);
  const isLeftShift =
    fileName === "shl_advsimd.xml" ||
    fileName === "sqshl_advsimd_imm.xml" ||
    fileName === "sqshlu_advsimd.xml" ||
    fileName === "sli_advsimd.xml";
  const esize = isScalar && (fileName !== "sqshl_advsimd_imm.xml" && fileName !== "sqshlu_advsimd.xml")
    ? 64
    : 8 << highestSetBitNZ(immh);
  const shift = isLeftShift ? imm - esize : (esize * 2) - imm;

  const registerText = isScalar
    ? (fileName === "sqshl_advsimd_imm.xml" || fileName === "sqshlu_advsimd.xml"
      ? (index: number) => advsimdScalarRegisterFromImmh(index, immh)
      : (index: number) => advsimdScalarRegisterText(index, 3))
    : (index: number) => advsimdVectorRegisterFromImmh(index, immh, fields.Q);

  return [
    { kind: "text", text: registerText(fields.Rd ?? 0) },
    { kind: "text", text: registerText(fields.Rn ?? 0) },
    { kind: "text", text: `#${shift}` },
  ];
}

function advsimdNarrowingImmediateShiftOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const immh = fields.immh ?? 0;
  const size = highestSetBitNZ(immh);
  const esize = 8 << size;
  const shift = (2 * esize) - ((immh << 3) | (fields.immb ?? 0));
  const isScalar = inst.encoding!.className.toLowerCase().includes("scalar");

  if (isScalar) {
    return [
      { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, size) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, size + 1) },
      { kind: "text", text: `#${shift}` },
    ];
  }

  return [
    { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q) },
    { kind: "text", text: `v${fields.Rn ?? 0}.${advsimdNarrowSourceArrangement(size)}` },
    { kind: "text", text: `#${shift}` },
  ];
}

function advsimdDotProductSourceText(index: number, q: number | undefined): string {
  return `v${index}.${q === 1 ? "16b" : "8b"}`;
}

function advsimdBfloat16DotProductSourceText(index: number, q: number | undefined): string {
  return `v${index}.${q === 1 ? "8h" : "4h"}`;
}

function advsimdUnaryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const isScalar = inst.encoding!.className.toLowerCase().includes("scalar");
  const size = advsimdElementSize(inst);

  if (isScalar) {
    return [
      { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, size) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, size) },
    ];
  }

  return [
    { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q) },
    { kind: "text", text: advsimdVectorRegisterText(fields.Rn ?? 0, size, fields.Q) },
  ];
}

function advsimdUnaryWithImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const operands = advsimdUnaryOperands(inst);
  operands.push({ kind: "text", text: `#${64 - (fields.scale ?? 0)}` });
  return operands;
}

function advsimdFloatingConvertNarrowOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const destArrangement = (fields.sz ?? 0) === 1
    ? ((fields.Q ?? 0) === 1 ? "4s" : "2s")
    : ((fields.Q ?? 0) === 1 ? "8h" : "4h");
  const sourceArrangement = (fields.sz ?? 0) === 1
    ? ((fields.Q ?? 0) === 1 ? "4d" : "2d")
    : ((fields.Q ?? 0) === 1 ? "8s" : "4s");

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${destArrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${sourceArrangement}` },
  ];
}

function advsimdFloatingConvertLongOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const destArrangement = (fields.sz ?? 0) === 1 ? "2d" : "4s";
  const sourceArrangement = (fields.sz ?? 0) === 1
    ? ((fields.Q ?? 0) === 1 ? "4s" : "2s")
    : ((fields.Q ?? 0) === 1 ? "8h" : "4h");

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${destArrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${sourceArrangement}` },
  ];
}

function advsimdThreeSameOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = advsimdElementSize(inst);
  return [
    { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q) },
    { kind: "text", text: advsimdVectorRegisterText(fields.Rn ?? 0, size, fields.Q) },
    { kind: "text", text: advsimdVectorRegisterText(fields.Rm ?? 0, size, fields.Q) },
  ];
}

function advsimdTableLookupOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const arrangement = (fields.Q ?? 0) === 1 ? "16b" : "8b";
  const registerCount = ((fields.len ?? 0) & 0x3) + 1;
  const tableRegisters = Array.from({ length: registerCount }, (_, index) => `v${((fields.Rn ?? 0) + index) & 31}.16b`);

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${arrangement}` },
    { kind: "text", text: `{ ${tableRegisters.join(", ")} }` },
    { kind: "text", text: `v${fields.Rm ?? 0}.${arrangement}` },
  ];
}

function advsimdFloatingPairwiseOperands(inst: DecodedInstruction): Operand[] {
  if (inst.encoding!.fileName.endsWith("_vec.xml")) {
    return advsimdThreeSameOperands(inst);
  }

  const fields = inst.fields!;
  const className = inst.encoding!.className.toLowerCase();
  const size = className.includes("half") ? 1 : (fields.sz ?? 0) + 2;
  const sourceArrangement = size === 1 ? "2h" : size === 2 ? "2s" : "2d";

  return [
    { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, size) },
    { kind: "text", text: `v${fields.Rn ?? 0}.${sourceArrangement}` },
  ];
}

function advsimdIntegerPairwiseOperands(inst: DecodedInstruction): Operand[] {
  if (inst.encoding!.fileName.endsWith("_vec.xml")) {
    return advsimdThreeSameOperands(inst);
  }

  const fields = inst.fields!;
  return [
    { kind: "text", text: `d${fields.Rd ?? 0}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.2d` },
  ];
}

function advsimdFp8ConvertLongOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.8h` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${(fields.Q ?? 0) === 1 ? "16b" : "8b"}` },
  ];
}

function advsimdFp8NarrowPairOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const fileName = inst.encoding!.fileName;
  const sourceArrangement = fileName === "fcvtn_advsimd_168.xml"
    ? advsimdArrangementFromSizeQ(1, fields.Q)
    : "4s";

  return [
    { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, 0, fields.Q) },
    { kind: "text", text: `v${fields.Rn ?? 0}.${sourceArrangement}` },
    { kind: "text", text: `v${fields.Rm ?? 0}.${sourceArrangement}` },
  ];
}

function complexRotateDegrees(inst: DecodedInstruction): number {
  const fields = inst.fields ?? {};
  if (inst.encoding?.fileName === "fcadd_advsimd_vec.xml" || inst.encoding?.fileName === "fcadd_z_p_zz.xml") {
    return (((fields.rot ?? 0) & 0x1) * 180) + 90;
  }
  return ((fields.rot ?? 0) & 0x3) * 90;
}

function advsimdComplexVectorArrangement(inst: DecodedInstruction): "4h" | "8h" | "2s" | "4s" | "2d" {
  const fields = inst.fields!;
  const size = fields.size ?? 0;
  const q = fields.Q ?? 0;
  if (size === 1) {
    return q === 1 ? "8h" : "4h";
  }
  if (size === 2) {
    return q === 1 ? "4s" : "2s";
  }
  return "2d";
}

function advsimdComplexByElementLane(inst: DecodedInstruction): "h" | "s" {
  return (inst.fields!.size ?? 0) === 1 ? "h" : "s";
}

function advsimdComplexByElementSourceIndex(inst: DecodedInstruction): number {
  const fields = inst.fields!;
  if ((fields.size ?? 0) === 1) {
    return fields.Rm ?? 0;
  }
  return (((fields.M ?? 0) << 4) | (fields.Rm ?? 0));
}

function advsimdComplexByElementIndex(inst: DecodedInstruction): number {
  const fields = inst.fields!;
  if ((fields.size ?? 0) === 1) {
    return (((fields.H ?? 0) << 1) | (fields.L ?? 0));
  }
  return fields.H ?? 0;
}

function advsimdComplexVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const arrangement = advsimdComplexVectorArrangement(inst);
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${arrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${arrangement}` },
    { kind: "text", text: `v${fields.Rm ?? 0}.${arrangement}` },
    { kind: "text", text: `#${complexRotateDegrees(inst)}` },
  ];
}

function advsimdComplexByElementOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const arrangement = advsimdComplexVectorArrangement(inst);
  const lane = advsimdComplexByElementLane(inst);
  const sourceIndex = advsimdComplexByElementSourceIndex(inst);
  const elementIndex = advsimdComplexByElementIndex(inst);
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${arrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${arrangement}` },
    { kind: "text", text: `v${sourceIndex}.${lane}[${elementIndex}]` },
    { kind: "text", text: `#${complexRotateDegrees(inst)}` },
  ];
}

function advsimdFpLongMultiplyAccumulateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const destArrangement = (fields.Q ?? 0) === 1 ? "4s" : "2s";
  const sourceArrangement = (fields.Q ?? 0) === 1 ? "4h" : "2h";

  if (inst.encoding!.fileName.endsWith("_vec.xml")) {
    return [
      { kind: "text", text: `v${fields.Rd ?? 0}.${destArrangement}` },
      { kind: "text", text: `v${fields.Rn ?? 0}.${sourceArrangement}` },
      { kind: "text", text: `v${fields.Rm ?? 0}.${sourceArrangement}` },
    ];
  }

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${destArrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${sourceArrangement}` },
    { kind: "text", text: `v${advsimdFpByElementSourceIndex(inst)}.h[${advsimdFpByElementIndex(inst)}]` },
  ];
}

function advsimdPairwiseLongOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, (fields.size ?? 0) + 1, fields.Q) },
    { kind: "text", text: advsimdVectorRegisterText(fields.Rn ?? 0, fields.size, fields.Q) },
  ];
}

function advsimdAcrossLaneOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const fileName = inst.encoding!.fileName;
  const isLongReduction = fileName === "saddlv_advsimd.xml" || fileName === "uaddlv_advsimd.xml";
  const sourceSize = fields.size ?? (fields.sz ?? 0) + 2;
  const destinationSize = isLongReduction ? sourceSize + 1 : sourceSize;

  return [
    { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, destinationSize) },
    { kind: "text", text: advsimdVectorRegisterText(fields.Rn ?? 0, sourceSize, fields.Q) },
  ];
}

function advsimdLongDestArrangement(size: number | undefined): "8h" | "4s" | "2d" {
  switch (size ?? 0) {
    case 0:
      return "8h";
    case 1:
      return "4s";
    default:
      return "2d";
  }
}

function advsimdLongSourceArrangement(size: number | undefined, q: number | undefined): "8b" | "16b" | "4h" | "8h" | "2s" | "4s" {
  if ((size ?? 0) === 0) {
    return q === 1 ? "16b" : "8b";
  }
  if ((size ?? 0) === 1) {
    return q === 1 ? "8h" : "4h";
  }
  return q === 1 ? "4s" : "2s";
}

function advsimdNarrowSourceArrangement(size: number | undefined): "8h" | "4s" | "2d" {
  switch (size ?? 0) {
    case 0:
      return "8h";
    case 1:
      return "4s";
    default:
      return "2d";
  }
}

function advsimdNarrowOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = advsimdElementSize(inst);
  const isScalar = inst.encoding!.className.toLowerCase().includes("scalar");

  if (isScalar) {
    return [
      { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, size) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, size + 1) },
    ];
  }

  return [
    { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q) },
    { kind: "text", text: `v${fields.Rn ?? 0}.${advsimdNarrowSourceArrangement(size)}` },
  ];
}

function advsimdShiftLeftLongOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = fields.size ?? (highestSetBitNZ(fields.immh) as 0 | 1 | 2);
  const shift = fields.size !== undefined
    ? 8 << size
    : (((fields.immh ?? 0) << 3) | (fields.immb ?? 0)) - (8 << size);

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${advsimdLongDestArrangement(size)}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${advsimdLongSourceArrangement(size, fields.Q)}` },
    { kind: "text", text: `#${shift}` },
  ];
}

function advsimdExtendLongOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = highestSetBitNZ(fields.immh) as 0 | 1 | 2;

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${advsimdLongDestArrangement(size)}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${advsimdLongSourceArrangement(size, fields.Q)}` },
  ];
}

function advsimdWideningThreeRegOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const className = inst.encoding!.className.toLowerCase();

  if (className.includes("scalar")) {
    const sourceSize = fields.size ?? 0;
    return [
      { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, sourceSize + 1) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, sourceSize) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rm ?? 0, sourceSize) },
    ];
  }

  const destArrangement = advsimdLongDestArrangement(fields.size);
  const sourceArrangement = advsimdLongSourceArrangement(fields.size, fields.Q);

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${destArrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${sourceArrangement}` },
    { kind: "text", text: `v${fields.Rm ?? 0}.${sourceArrangement}` },
  ];
}

function advsimdWideThreeRegOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const destArrangement = advsimdLongDestArrangement(fields.size);
  const sourceArrangement = advsimdLongSourceArrangement(fields.size, fields.Q);

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${destArrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${destArrangement}` },
    { kind: "text", text: `v${fields.Rm ?? 0}.${sourceArrangement}` },
  ];
}

function advsimdScalarOrVectorThreeSameOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const className = inst.encoding!.className.toLowerCase();
  const size = advsimdElementSize(inst);

  if (className.includes("scalar")) {
    return [
      { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, size) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, size) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rm ?? 0, size) },
    ];
  }

  return [
    { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q) },
    { kind: "text", text: advsimdVectorRegisterText(fields.Rn ?? 0, size, fields.Q) },
    { kind: "text", text: advsimdVectorRegisterText(fields.Rm ?? 0, size, fields.Q) },
  ];
}

function advsimdCryptoBinaryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: "v" + (fields.Rd ?? 0) + ".16b" },
    { kind: "text", text: "v" + (fields.Rn ?? 0) + ".16b" },
  ];
}

function advsimdCryptoSha1HashOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, 2) },
    { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, 2) },
  ];
}

function advsimdCryptoVector4sBinaryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.4s` },
    { kind: "text", text: `v${fields.Rn ?? 0}.4s` },
  ];
}

function advsimdCryptoSha1ThreeRegOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: `q${fields.Rd ?? 0}` },
    { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, 2) },
    { kind: "text", text: `v${fields.Rm ?? 0}.4s` },
  ];
}

function advsimdCryptoSha256HashOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: `q${fields.Rd ?? 0}` },
    { kind: "text", text: `q${fields.Rn ?? 0}` },
    { kind: "text", text: `v${fields.Rm ?? 0}.4s` },
  ];
}

function advsimdCryptoVector4sThreeRegOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.4s` },
    { kind: "text", text: `v${fields.Rn ?? 0}.4s` },
    { kind: "text", text: `v${fields.Rm ?? 0}.4s` },
  ];
}

function advsimdHighNarrowThreeRegOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const destArrangement = advsimdArrangementFromSizeQ(fields.size, fields.Q);
  const sourceArrangement = advsimdNarrowSourceArrangement(fields.size);

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${destArrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${sourceArrangement}` },
    { kind: "text", text: `v${fields.Rm ?? 0}.${sourceArrangement}` },
  ];
}

function advsimdStructureRegisterCount(encodingId: string): 1 | 2 | 3 | 4 {
  const match = /_(?:R|I)([1-4])(?:_|$)/.exec(encodingId);
  if (!match) {
    return 1;
  }
  return Number(match[1]) as 1 | 2 | 3 | 4;
}

function advsimdStructureRegisterGroupText(
  start: number,
  count: 1 | 2 | 3 | 4,
  size: number | undefined,
  q: number | undefined,
): string {
  const arrangement = advsimdArrangementFromSizeQ(size, q);
  const registers = Array.from({ length: count }, (_, index) => `v${(start + index) & 31}.${arrangement}`);
  return `{ ${registers.join(", ")} }`;
}

function advsimdStructureMemoryText(base: number, postIndex: number | undefined, count: 1 | 2 | 3 | 4, q: number | undefined): string {
  const baseText = formatRegister(gpReg(64, base, "sp"));
  if (postIndex === undefined) {
    return `[${baseText}]`;
  }
  if (postIndex === 31) {
    const amount = BigInt(count * (8 << (q ?? 0)));
    return `[${baseText}], #${amount.toString()}`;
  }
  return `[${baseText}], ${formatRegister(gpReg(64, postIndex, "zr"))}`;
}

function advsimdSingleStructureRegisterCount(fileName: string): 1 | 2 | 3 | 4 {
  const match = /^(?:ld|st)([1-4])r?_advsimd(?:_sngl)?\.xml$/.exec(fileName);
  if (!match) {
    return 1;
  }
  return Number(match[1]) as 1 | 2 | 3 | 4;
}

function advsimdSingleStructureElementSize(fileName: string, encodingId: string, fields: Record<string, number>): number {
  if (fileName.endsWith("_sngl.xml")) {
    if (encodingId.includes("_B")) {
      return 0;
    }
    if (encodingId.includes("_H")) {
      return 1;
    }
    if (encodingId.includes("_S")) {
      return 2;
    }
    if (encodingId.includes("_D")) {
      return 3;
    }
  }

  return fields.size ?? 0;
}

function advsimdSingleStructureLaneIndex(size: number, fields: Record<string, number>): number {
  const q = fields.Q ?? 0;
  const s = fields.S ?? 0;
  const encodedSize = fields.size ?? 0;

  switch (size) {
    case 0:
      return (q << 3) | (s << 2) | encodedSize;
    case 1:
      return (q << 2) | (s << 1) | (encodedSize >> 1);
    case 2:
      return (q << 1) | s;
    case 3:
      return q;
    default:
      return 0;
  }
}

function advsimdSingleStructureRegistersText(start: number, count: 1 | 2 | 3 | 4, lane: "b" | "h" | "s" | "d", laneIndex: number): string {
  const registers = Array.from({ length: count }, (_, index) => `v${(start + index) & 31}.${lane}`);
  return `{ ${registers.join(", ")} }[${laneIndex}]`;
}

function advsimdSingleStructureMemoryText(
  base: number,
  postIndex: number | undefined,
  count: 1 | 2 | 3 | 4,
  elementSize: number,
): string {
  const baseText = formatRegister(gpReg(64, base, "sp"));
  if (postIndex === undefined) {
    return `[${baseText}]`;
  }
  if (postIndex === 31) {
    const amount = BigInt(count << elementSize);
    return `[${baseText}], #${amount.toString()}`;
  }
  return `[${baseText}], ${formatRegister(gpReg(64, postIndex, "zr"))}`;
}

function advsimdSingleStructureOperands(inst: DecodedInstruction): Operand[] {
  const encoding = inst.encoding!;
  const fields = inst.fields!;
  const fileName = encoding.fileName;
  const count = advsimdSingleStructureRegisterCount(fileName);
  const elementSize = advsimdSingleStructureElementSize(fileName, encoding.encodingId, fields);
  const start = fields.Rt ?? 0;

  if (fileName.endsWith("r_advsimd.xml")) {
    const registers = advsimdStructureRegisterGroupText(start, count, elementSize, fields.Q);
    const memory = advsimdSingleStructureMemoryText(fields.Rn ?? 0, fields.Rm, count, elementSize);
    return [{ kind: "text", text: registers }, { kind: "text", text: memory }];
  }

  const lane = advsimdLaneFromSize(elementSize);
  const laneIndex = advsimdSingleStructureLaneIndex(elementSize, fields);
  const registers = advsimdSingleStructureRegistersText(start, count, lane, laneIndex);
  const memory = advsimdSingleStructureMemoryText(fields.Rn ?? 0, fields.Rm, count, elementSize);
  return [{ kind: "text", text: registers }, { kind: "text", text: memory }];
}

function advsimdByElementSourceIndex(fields: Record<string, number>, size: number | undefined): number {
  return size === 2 ? (((fields.M ?? 0) << 4) | (fields.Rm ?? 0)) : (fields.Rm ?? 0);
}

function advsimdByElementIndex(fields: Record<string, number>, size: number | undefined): number {
  if (size === 2) {
    return ((fields.H ?? 0) << 1) | (fields.L ?? 0);
  }
  return ((fields.H ?? 0) << 2) | ((fields.L ?? 0) << 1) | (fields.M ?? 0);
}

function advsimdFpByElementLane(inst: DecodedInstruction): "h" | "s" | "d" {
  const className = inst.encoding!.className.toLowerCase();
  if (className.includes("half")) {
    return "h";
  }
  return (inst.fields!.sz ?? 0) === 1 ? "d" : "s";
}

function advsimdFpByElementVectorArrangement(inst: DecodedInstruction): "4h" | "8h" | "2s" | "4s" | "2d" {
  const lane = advsimdFpByElementLane(inst);
  const q = inst.fields!.Q ?? 0;
  if (lane === "h") {
    return q === 1 ? "8h" : "4h";
  }
  if (lane === "s") {
    return q === 1 ? "4s" : "2s";
  }
  return "2d";
}

function advsimdFpByElementSourceIndex(inst: DecodedInstruction): number {
  const className = inst.encoding!.className.toLowerCase();
  const fields = inst.fields!;
  return className.includes("half") ? (fields.Rm ?? 0) : (((fields.M ?? 0) << 4) | (fields.Rm ?? 0));
}

function advsimdFpByElementIndex(inst: DecodedInstruction): number {
  const className = inst.encoding!.className.toLowerCase();
  const fields = inst.fields!;
  if (className.includes("half")) {
    return ((fields.H ?? 0) << 2) | ((fields.L ?? 0) << 1) | (fields.M ?? 0);
  }
  return (fields.sz ?? 0) === 1 ? (fields.H ?? 0) : (((fields.H ?? 0) << 1) | (fields.L ?? 0));
}

function advsimdByElementMultiplyAccumulateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const fileName = inst.encoding!.fileName;

  if (fileName === "mla_advsimd_elt.xml" || fileName === "mls_advsimd_elt.xml") {
    const lane = advsimdLaneFromSize(fields.size);
    return [
      { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, fields.size, fields.Q) },
      { kind: "text", text: advsimdVectorRegisterText(fields.Rn ?? 0, fields.size, fields.Q) },
      { kind: "text", text: `v${advsimdByElementSourceIndex(fields, fields.size)}.${lane}[${advsimdByElementIndex(fields, fields.size)}]` },
    ];
  }

  const lane = advsimdFpByElementLane(inst);
  const sourceIndex = advsimdFpByElementSourceIndex(inst);
  const elementIndex = advsimdFpByElementIndex(inst);
  const className = inst.encoding!.className.toLowerCase();

  if (className.includes("scalar")) {
    return [
      { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, lane === "h" ? 1 : lane === "s" ? 2 : 3) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, lane === "h" ? 1 : lane === "s" ? 2 : 3) },
      { kind: "text", text: `v${sourceIndex}.${lane}[${elementIndex}]` },
    ];
  }

  const arrangement = advsimdFpByElementVectorArrangement(inst);
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${arrangement}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${arrangement}` },
    { kind: "text", text: `v${sourceIndex}.${lane}[${elementIndex}]` },
  ];
}

function advsimdByElementLongOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = fields.size;
  const lane = advsimdLaneFromSize(size);
  const sourceIndex = advsimdByElementSourceIndex(fields, size);
  const elementIndex = advsimdByElementIndex(fields, size);

  if (inst.encoding!.className.toLowerCase().includes("scalar")) {
    const destSize = (size ?? 0) + 1;
    return [
      { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, destSize) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, size) },
      { kind: "text", text: `v${sourceIndex}.${lane}[${elementIndex}]` },
    ];
  }

  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.${advsimdLongDestArrangement(size)}` },
    { kind: "text", text: `v${fields.Rn ?? 0}.${advsimdLongSourceArrangement(size, fields.Q)}` },
    { kind: "text", text: `v${sourceIndex}.${lane}[${elementIndex}]` },
  ];
}

function advsimdSaturatingRoundingDoublingMultiplyOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const size = fields.size;
  const lane = advsimdLaneFromSize(size);

  if (inst.encoding!.className === "Scalar") {
    if (inst.encoding!.fileName.endsWith("_vec.xml")) {
      return [
        { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, size) },
        { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, size) },
        { kind: "text", text: advsimdScalarRegisterText(fields.Rm ?? 0, size) },
      ];
    }
    return [
      { kind: "text", text: advsimdScalarRegisterText(fields.Rd ?? 0, size) },
      { kind: "text", text: advsimdScalarRegisterText(fields.Rn ?? 0, size) },
      { kind: "text", text: `v${advsimdByElementSourceIndex(fields, size)}.${lane}[${advsimdByElementIndex(fields, size)}]` },
    ];
  }

  if (inst.encoding!.fileName.endsWith("_vec.xml")) {
    return [
      { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q) },
      { kind: "text", text: advsimdVectorRegisterText(fields.Rn ?? 0, size, fields.Q) },
      { kind: "text", text: advsimdVectorRegisterText(fields.Rm ?? 0, size, fields.Q) },
    ];
  }

  if (inst.encoding!.fileName.endsWith("_elt.xml")) {
    return [
      { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q) },
      { kind: "text", text: advsimdVectorRegisterText(fields.Rn ?? 0, size, fields.Q) },
      { kind: "text", text: `v${advsimdByElementSourceIndex(fields, size)}.${lane}[${advsimdByElementIndex(fields, size)}]` },
    ];
  }

  return [];
}

function advsimdDotProductOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const fileName = inst.encoding!.fileName;
  const isBfloat16 = fileName.startsWith("bfdot_");
  const isMixedSignByElement = fileName === "sudot_advsimd_elt.xml" || fileName === "usdot_advsimd_elt.xml";
  const size = isMixedSignByElement ? 2 : fields.size;

  if (fileName.endsWith("_vec.xml")) {
    return [
      { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q) },
      {
        kind: "text",
        text: isBfloat16
          ? advsimdBfloat16DotProductSourceText(fields.Rn ?? 0, fields.Q)
          : advsimdDotProductSourceText(fields.Rn ?? 0, fields.Q),
      },
      {
        kind: "text",
        text: isBfloat16
          ? advsimdBfloat16DotProductSourceText(fields.Rm ?? 0, fields.Q)
          : advsimdDotProductSourceText(fields.Rm ?? 0, fields.Q),
      },
    ];
  }

  if (fileName.endsWith("_elt.xml")) {
    const sourceIndex = isMixedSignByElement
      ? (((fields.M ?? 0) << 4) | (fields.Rm ?? 0))
      : advsimdByElementSourceIndex(fields, size);
    const elementIndex = isMixedSignByElement
      ? (((fields.H ?? 0) << 1) | (fields.L ?? 0))
      : advsimdByElementIndex(fields, size);
    return [
      { kind: "text", text: advsimdVectorRegisterText(fields.Rd ?? 0, size, fields.Q) },
      {
        kind: "text",
        text: isBfloat16
          ? advsimdBfloat16DotProductSourceText(fields.Rn ?? 0, fields.Q)
          : advsimdDotProductSourceText(fields.Rn ?? 0, fields.Q),
      },
      {
        kind: "text",
        text: isBfloat16
          ? `v${sourceIndex}.2h[${elementIndex}]`
          : `v${sourceIndex}.4b[${elementIndex}]`,
      },
    ];
  }

  return [];
}

function advsimdBfloat16MultiplyAccumulateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;

  if (inst.encoding!.fileName === "bfmmla_advsimd.xml") {
    return [
      { kind: "text", text: "v" + (fields.Rd ?? 0) + ".4s" },
      { kind: "text", text: "v" + (fields.Rn ?? 0) + ".8h" },
      { kind: "text", text: "v" + (fields.Rm ?? 0) + ".8h" },
    ];
  }

  if (inst.encoding!.fileName === "bfmlal_advsimd_vec.xml") {
    return [
      { kind: "text", text: "v" + (fields.Rd ?? 0) + ".4s" },
      { kind: "text", text: "v" + (fields.Rn ?? 0) + ".8h" },
      { kind: "text", text: "v" + (fields.Rm ?? 0) + ".8h" },
    ];
  }

  if (inst.encoding!.fileName === "bfmlal_advsimd_elt.xml") {
    return [
      { kind: "text", text: "v" + (fields.Rd ?? 0) + ".4s" },
      { kind: "text", text: "v" + (fields.Rn ?? 0) + ".8h" },
      { kind: "text", text: `v${advsimdByElementSourceIndex(fields, fields.size)}.h[${advsimdByElementIndex(fields, fields.size)}]` },
    ];
  }

  return [];
}

function advsimdMatrixMultiplyAccumulateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: `v${fields.Rd ?? 0}.4s` },
    { kind: "text", text: `v${fields.Rn ?? 0}.16b` },
    { kind: "text", text: `v${fields.Rm ?? 0}.16b` },
  ];
}

function advsimdMultipleStructureOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const encodingId = inst.encoding!.encodingId;
  const regCount = advsimdStructureRegisterCount(encodingId);
  const start = fields.Rt ?? 0;
  const registers = advsimdStructureRegisterGroupText(start, regCount, fields.size, fields.Q);
  const memory = advsimdStructureMemoryText(fields.Rn ?? 0, fields.Rm, regCount, fields.Q);
  return [{ kind: "text", text: registers }, { kind: "text", text: memory }];
}

function advsimdFpCompareLane(inst: DecodedInstruction): "h" | "s" | "d" {
  const className = inst.encoding!.className.toLowerCase();
  if (className.includes("half")) {
    return "h";
  }
  return (inst.fields!.sz ?? 0) === 1 ? "d" : "s";
}

function advsimdFpCompareVectorArrangement(inst: DecodedInstruction): "4h" | "8h" | "2s" | "4s" | "2d" {
  const lane = advsimdFpCompareLane(inst);
  const q = inst.fields!.Q ?? 0;
  if (lane === "h") {
    return q === 1 ? "8h" : "4h";
  }
  if (lane === "s") {
    return q === 1 ? "4s" : "2s";
  }
  return "2d";
}

function advsimdCompareOperands(inst: DecodedInstruction): Operand[] {
  const encoding = inst.encoding!;
  const fields = inst.fields!;
  const fileName = encoding.fileName;
  const className = encoding.className.toLowerCase();
  const isFloat = fileName.startsWith("fcm") || fileName.startsWith("facg");
  const isScalar = className.includes("scalar");
  const isZeroForm =
    fileName.includes("_zero") ||
    fileName === "cmle_advsimd.xml" ||
    fileName === "cmlt_advsimd.xml" ||
    fileName === "fcmle_advsimd.xml" ||
    fileName === "fcmlt_advsimd.xml";

  if (isFloat) {
    const lane = advsimdFpCompareLane(inst);
    const destination = isScalar
      ? scalarFpRegisterText(fields.Rd ?? 0, lane)
      : `v${fields.Rd ?? 0}.${advsimdFpCompareVectorArrangement(inst)}`;
    const source = isScalar
      ? scalarFpRegisterText(fields.Rn ?? 0, lane)
      : `v${fields.Rn ?? 0}.${advsimdFpCompareVectorArrangement(inst)}`;

    if (isZeroForm) {
      return [
        { kind: "text", text: destination },
        { kind: "text", text: source },
        { kind: "text", text: "#0.0" },
      ];
    }

    const other = isScalar
      ? scalarFpRegisterText(fields.Rm ?? 0, lane)
      : `v${fields.Rm ?? 0}.${advsimdFpCompareVectorArrangement(inst)}`;
    return [
      { kind: "text", text: destination },
      { kind: "text", text: source },
      { kind: "text", text: other },
    ];
  }

  const destination = isScalar
    ? advsimdScalarRegisterText(fields.Rd ?? 0, fields.size)
    : advsimdVectorRegisterText(fields.Rd ?? 0, fields.size, fields.Q);
  const source = isScalar
    ? advsimdScalarRegisterText(fields.Rn ?? 0, fields.size)
    : advsimdVectorRegisterText(fields.Rn ?? 0, fields.size, fields.Q);

  if (isZeroForm) {
    return [
      { kind: "text", text: destination },
      { kind: "text", text: source },
      { kind: "text", text: "#0" },
    ];
  }

  const other = isScalar
    ? advsimdScalarRegisterText(fields.Rm ?? 0, fields.size)
    : advsimdVectorRegisterText(fields.Rm ?? 0, fields.size, fields.Q);
  return [
    { kind: "text", text: destination },
    { kind: "text", text: source },
    { kind: "text", text: other },
  ];
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

function sveFloatingCompareImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveLaneFromSize(fields.size);
  return [
    predReg(fields.Pd, undefined, lane),
    predReg(fields.Pg, "z"),
    vecReg(fields.Zn, lane),
    { kind: "text", text: "#0.0" },
  ];
}

function sveCompareVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    predReg(fields.Pd, undefined, lane),
    predReg(fields.Pg, "z"),
    vecReg(fields.Zn, lane),
    vecReg(fields.Zm, lane),
  ];
}

function sveCompareWideVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    predReg(fields.Pd, undefined, lane),
    predReg(fields.Pg, "z"),
    vecReg(fields.Zn, lane),
    vecReg(fields.Zm, "d"),
  ];
}

function sveIncDecScalarOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const pattern = fields.pattern ?? 0;
  const multiplier = (fields.imm4 ?? 0) + 1;
  const ops = sveIncDecScalarRegisters(inst);
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

function sveIncDecScalarRegisters(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const isUnsignedScalar32 = inst.encoding!.className === "32-bit" && inst.encoding!.mnemonic.startsWith("UQ");
  const rd = fields.Rdn ?? fields.Rd ?? 0;
  const ops: Operand[] = [gpReg(isUnsignedScalar32 ? 32 : 64, rd, "zr")];
  if (inst.encoding!.className === "32-bit" && !isUnsignedScalar32) {
    ops.push(gpReg(32, rd, "zr"));
  }
  return ops;
}

function sveIncDecPredicateScalarOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const ops = sveIncDecScalarRegisters(inst);
  const [dst, ...rest] = ops;
  return [dst, predReg(fields.Pm ?? 0, undefined, lane), ...rest];
}

function sveCountPredicateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);

  if (inst.encoding!.fileName === "cntp_r_pn.xml") {
    return [
      gpReg(64, fields.Rd ?? 0),
      { kind: "text", text: svePredicateCounterText(fields.PNn ?? 0, lane) },
      { kind: "text", text: `vlx${2 << (fields.vl ?? 0)}` },
    ];
  }

  return [
    gpReg(64, fields.Rd ?? 0),
    predReg(fields.Pg ?? 0),
    predReg(fields.Pn ?? 0, undefined, lane),
  ];
}

function svePtrueOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const pattern = fields.pattern ?? 31;
  const ops: Operand[] = [predReg(fields.Pd, undefined, lane)];
  const patternName = pattern === 31 ? "all" : svePatternName(pattern);

  if (patternName) {
    if (pattern !== 31) {
      ops.push({ kind: "text", text: patternName });
    }
  } else if (pattern !== 31) {
    ops.push({ kind: "imm", value: BigInt(pattern), signed: false });
  }

  return ops;
}

function svePredicatePairText(pd: number, lane: "b" | "h" | "s" | "d"): string {
  const first = pd << 1;
  return `{ p${first}.${lane}, p${first + 1}.${lane} }`;
}

function svePredicateCounterText(pnd: number, lane: "b" | "h" | "s" | "d"): string {
  return `pn${8 + pnd}.${lane}`;
}

function sveWhileCompareOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const fileName = inst.encoding!.fileName;

  if (fileName.endsWith("_p_p_rr.xml")) {
    const width = widthFromSf(fields.sf);
    return [
      predReg(fields.Pd, undefined, lane),
      gpReg(width, fields.Rn, "zr"),
      gpReg(width, fields.Rm, "zr"),
    ];
  }

  if (fileName.endsWith("_pp_rr.xml")) {
    return [
      { kind: "text", text: svePredicatePairText(fields.Pd, lane) },
      gpReg(64, fields.Rn, "zr"),
      gpReg(64, fields.Rm, "zr"),
    ];
  }

  if (fileName.endsWith("_pn_rr.xml")) {
    return [
      { kind: "text", text: svePredicateCounterText(fields.PNd, lane) },
      gpReg(64, fields.Rn, "zr"),
      gpReg(64, fields.Rm, "zr"),
      { kind: "text", text: `vlx${2 << (fields.vl ?? 0)}` },
    ];
  }

  return [];
}

function svePtruePredicateCounterOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [{ kind: "text", text: svePredicateCounterText(fields.PNd, lane) }];
}

function svePmovLane(inst: DecodedInstruction): "b" | "h" | "s" | "d" {
  const encodingId = inst.encoding!.encodingId;
  if (encodingId.endsWith("_d")) {
    return "d";
  }
  if (encodingId.endsWith("_s")) {
    return "s";
  }
  if (encodingId.endsWith("_h")) {
    return "h";
  }
  return "b";
}

function svePmovIndex(fields: Record<string, number>): number {
  if (fields.i3h !== undefined || fields.i3l !== undefined) {
    return ((fields.i3h ?? 0) << 2) | (fields.i3l ?? 0);
  }
  if (fields.i2 !== undefined) {
    return fields.i2;
  }
  if (fields.i1 !== undefined) {
    return fields.i1;
  }
  return 0;
}

function svePmovPredicateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = svePmovLane(inst);
  const index = svePmovIndex(fields);
  const source = index === 0 && lane === "b" ? `z${fields.Zn ?? 0}` : `z${fields.Zn ?? 0}[${index}]`;
  return [predReg(fields.Pd ?? 0, undefined, lane), { kind: "text", text: source }];
}

function svePmovVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = svePmovLane(inst);
  const index = svePmovIndex(fields);
  const destination = index === 0 && lane === "b" ? `z${fields.Zd ?? 0}` : `z${fields.Zd ?? 0}[${index}]`;
  return [{ kind: "text", text: destination }, predReg(fields.Pn ?? 0, undefined, lane)];
}

function svePextOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const source = { kind: "text", text: `pn${8 + (fields.PNn ?? 0)}[${fields.imm2 ?? fields.i1 ?? 0}]` } as const;

  if (inst.encoding!.fileName === "pext_pp_rr.xml") {
    return [{ kind: "text", text: svePredicatePairText(fields.Pd ?? 0, lane) }, source];
  }

  return [predReg(fields.Pd ?? 0, undefined, lane), source];
}

function svePredicateBreakOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;

  return [
    predReg(fields.Pd ?? 0, undefined, "b"),
    predReg(fields.Pg ?? 0, (fields.M ?? 0) === 1 ? "m" : "z"),
    predReg(fields.Pn ?? 0, undefined, "b"),
  ];
}

function svePredicateFlowOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = inst.encoding!.fileName === "pnext_p_p_p.xml" ? sveVectorLaneFromSize(fields.size) : "b";
  const pdn = predReg(fields.Pdn ?? 0, undefined, lane);
  const pgField = inst.encoding!.fileName === "pnext_p_p_p.xml" ? "Pv" : "Pg";
  return [pdn, predReg(fields[pgField] ?? 0), pdn];
}

function svePredicateBreakPropagationOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const pdm = fields.Pdm ?? 0;

  return [
    predReg(pdm, undefined, "b"),
    predReg(fields.Pg ?? 0, "z"),
    predReg(fields.Pn ?? 0, undefined, "b"),
    predReg(pdm, undefined, "b"),
  ];
}

function svePredicateBreakPairOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;

  return [
    predReg(fields.Pd ?? 0, undefined, "b"),
    predReg(fields.Pg ?? 0, "z"),
    predReg(fields.Pn ?? 0, undefined, "b"),
    predReg(fields.Pm ?? 0, undefined, "b"),
  ];
}

function svePredicateTestOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [predReg(fields.Pg ?? 0), predReg(fields.Pn ?? 0, undefined, "b")];
}

function sveRdffrOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;

  switch (inst.encoding!.fileName) {
    case "rdffr_p_f.xml":
      return [predReg(fields.Pd ?? 0, undefined, "b")];
    case "rdffr_p_p_f.xml":
    case "rdffrs_p_p_f.xml":
      return [predReg(fields.Pd ?? 0, undefined, "b"), predReg(fields.Pg ?? 0, "z")];
    default:
      return [];
  }
}

function svePredicatedUnaryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveLaneFromSize(fields.size);
  const mode = inst.encoding!.encodingId.endsWith("_z") ? "z" : "m";
  return [vecReg(fields.Zd, lane), predReg(fields.Pg, mode), vecReg(fields.Zn, lane)];
}

function svePredicatePermutationOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    predReg(fields.Pd ?? 0, undefined, lane),
    predReg(fields.Pn ?? 0, undefined, lane),
    predReg(fields.Pm ?? 0, undefined, lane),
  ];
}

function svePredicateLogicalOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const pd = predReg(fields.Pd ?? 0, undefined, "b");
  const pn = predReg(fields.Pn ?? 0, undefined, "b");
  const pg = predReg(fields.Pg ?? 0, "z");
  const pm = predReg(fields.Pm ?? 0, undefined, "b");

  switch (inst.encoding!.fileName) {
    case "and_p_p_pp.xml":
    case "mov_and_p_p_pp.xml":
    case "ands_p_p_pp.xml":
    case "movs_ands_p_p_pp.xml":
      if ((fields.S ?? 0) === 0 && fields.Pn === fields.Pm) {
        return [pd, pg, pn];
      }
      if ((fields.S ?? 0) === 1 && fields.Pn === fields.Pm) {
        return [pd, pg, pn];
      }
      return [pd, pg, pn, pm];
    case "orr_p_p_pp.xml":
    case "mov_orr_p_p_pp.xml":
    case "orrs_p_p_pp.xml":
    case "movs_orrs_p_p_pp.xml":
      if ((fields.S ?? 0) === 0 && fields.Pn === fields.Pm && fields.Pm === fields.Pg) {
        return [pd, pn];
      }
      if ((fields.S ?? 0) === 1 && fields.Pn === fields.Pm && fields.Pm === fields.Pg) {
        return [pd, pn];
      }
      return [pd, pg, pn, pm];
    case "eor_p_p_pp.xml":
    case "eors_p_p_pp.xml":
    case "nots_eors_p_p_pp.xml":
      if ((fields.S ?? 0) === 1 && fields.Pm === fields.Pg) {
        return [pd, pg, pn];
      }
      return [pd, pg, pn, pm];
    case "bic_p_p_pp.xml":
    case "bics_p_p_pp.xml":
    case "nands_p_p_pp.xml":
    case "nors_p_p_pp.xml":
      return [pd, pg, pn, pm];
    default:
      return [];
  }
}

function sveBinaryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  if ((inst.encoding!.fileName === "orr_z_zz.xml" || inst.encoding!.fileName === "mov_orr_z_zz.xml") && fields.Zn === fields.Zm) {
    return [vecReg(fields.Zd ?? 0, lane), vecReg(fields.Zn ?? 0, lane)];
  }
  return [vecReg(fields.Zd ?? 0, lane), vecReg(fields.Zn ?? 0, lane), vecReg(fields.Zm ?? 0, lane)];
}

function svePredicatedBinaryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    vecReg(fields.Zdn ?? 0, lane),
    predReg(fields.Pg ?? 0, "m"),
    vecReg(fields.Zdn ?? 0, lane),
    vecReg(fields.Zm ?? 0, lane),
  ];
}

function sveHorizontalReductionOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const destinationLane =
    inst.encoding!.fileName === "saddv_r_p_z.xml" || inst.encoding!.fileName === "uaddv_r_p_z.xml"
      ? "d"
      : lane;

  return [
    { kind: "text", text: `${destinationLane}${fields.Vd ?? 0}` },
    predReg(fields.Pg ?? 0),
    vecReg(fields.Zn ?? 0, lane),
  ];
}

function sveMoveMaskLane(imm13: number): "b" | "h" | "s" | "d" {
  if (((imm13 >>> 12) & 1) === 1) {
    return "d";
  }
  const imms = imm13 & 0x3f;
  if ((imms & 0x20) === 0) {
    return "s";
  }
  if ((imms & 0x10) === 0) {
    return "h";
  }
  return "b";
}

function sveMaskImmediate(imm13: number): bigint | null {
  return decodeLogicalImmediate(
    {
      N: (imm13 >>> 12) & 1,
      immr: (imm13 >>> 6) & 0x3f,
      imms: imm13 & 0x3f,
    },
    64,
  );
}

function sveLogicalImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const imm13 = fields.imm13 ?? 0;
  const imm = sveMaskImmediate(imm13);
  if (imm === null) {
    return [];
  }

  const lane = sveMoveMaskLane(imm13);
  return [vecReg(fields.Zdn ?? 0, lane), vecReg(fields.Zdn ?? 0, lane), { kind: "imm", value: imm }];
}

function sveDupMaskImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const imm13 = fields.imm13 ?? 0;
  const imm = sveMaskImmediate(imm13);
  if (imm === null) {
    return [];
  }

  return [vecReg(fields.Zd ?? 0, sveMoveMaskLane(imm13)), { kind: "imm", value: imm }];
}

function sveDupScalarOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const width = (fields.size ?? 0) === 3 ? 64 : 32;
  return [vecReg(fields.Zd ?? 0, lane), gpReg(width, fields.Rn ?? 0, "sp")];
}

function sveSelectPredicateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const pd = predReg(fields.Pd ?? 0, undefined, "b");
  const pn = predReg(fields.Pn ?? 0, undefined, "b");
  if (fields.Pd === fields.Pm) {
    return [pd, predReg(fields.Pg ?? 0, "m"), pn];
  }
  return [pd, predReg(fields.Pg ?? 0), pn, predReg(fields.Pm ?? 0, undefined, "b")];
}

function sveSelectVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const zd = vecReg(fields.Zd ?? 0, lane);
  const zn = vecReg(fields.Zn ?? 0, lane);
  if (fields.Zd === fields.Zm) {
    return [zd, predReg(fields.Pv ?? 0, "m"), zn];
  }
  return [zd, predReg(fields.Pv ?? 0), zn, vecReg(fields.Zm ?? 0, lane)];
}

function sveArithmeticImmediateText(fields: Record<string, number>): string {
  const imm8 = fields.imm8 ?? 0;
  if ((fields.sh ?? 0) === 1) {
    return imm8 === 0 ? "#0, lsl #8" : `#${imm8 << 8}`;
  }
  return `#${imm8}`;
}

function sveDestructiveImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const zdn = fields.Zdn ?? 0;
  return [vecReg(zdn, lane), vecReg(zdn, lane), { kind: "text", text: sveArithmeticImmediateText(fields) }];
}

function sveShiftImmediateInfo(fields: Record<string, number>, leftShift: boolean): { lane: "b" | "h" | "s" | "d"; shift: number } {
  const tsize = ((fields.tszh ?? 0) << 2) | (fields.tszl ?? 0);
  const elementLog2 = highestSetBitNZ(tsize);
  const esize = 8 << elementLog2;
  const encoded = (tsize << 3) | (fields.imm3 ?? 0);
  return {
    lane: sveVectorLaneFromSize(elementLog2),
    shift: leftShift ? encoded - esize : (2 * esize) - encoded,
  };
}

function sveShiftImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const { lane, shift } = sveShiftImmediateInfo(fields, inst.encoding!.fileName.startsWith("lsl_"));

  if (inst.encoding!.fileName.includes("_p_")) {
    const zdn = fields.Zdn ?? 0;
    return [vecReg(zdn, lane), predReg(fields.Pg ?? 0, "m"), vecReg(zdn, lane), { kind: "text", text: `#${shift}` }];
  }

  return [
    vecReg(fields.Zd ?? 0, lane),
    vecReg(fields.Zn ?? 0, lane),
    { kind: "text", text: `#${shift}` },
  ];
}

function sveWideShiftOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  const wideSource = vecReg(fields.Zm ?? 0, "d");

  if (inst.encoding!.fileName.includes("_p_")) {
    const zdn = fields.Zdn ?? 0;
    return [vecReg(zdn, lane), predReg(fields.Pg ?? 0, "m"), vecReg(zdn, lane), wideSource];
  }

  return [vecReg(fields.Zd ?? 0, lane), vecReg(fields.Zn ?? 0, lane), wideSource];
}

function sveCountVectorLane(mnemonic: string): "b" | "h" | "s" | "d" {
  switch (mnemonic) {
    case "INCH":
      return "h";
    case "INCW":
      return "s";
    case "INCD":
      return "d";
    default:
      return "b";
  }
}

function sveIncDecVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const pattern = fields.pattern ?? 0;
  const multiplier = (fields.imm4 ?? 0) + 1;
  const lane = sveCountVectorLane(inst.encoding!.mnemonic);
  const ops: Operand[] = [vecReg(fields.Zdn ?? 0, lane)];
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

function sveIncDecPredicateVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [vecReg(fields.Zdn ?? 0, lane), predReg(fields.Pm ?? 0, undefined, lane)];
}

function sveBfSubOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveLaneFromSize(fields.size);

  switch (inst.encoding!.fileName) {
    case "bfsub_z_p_zz.xml":
      return [
        vecReg(fields.Zdn ?? 0, lane),
        predReg(fields.Pg ?? 0, "m"),
        vecReg(fields.Zdn ?? 0, lane),
        vecReg(fields.Zm ?? 0, lane),
      ];
    case "bfsub_z_zz.xml":
      return [vecReg(fields.Zd ?? 0, lane), vecReg(fields.Zn ?? 0, lane), vecReg(fields.Zm ?? 0, lane)];
    default:
      return [];
  }
}

function sveBfmlsOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveLaneFromSize(fields.size);
  const dest = vecReg(fields.Zda ?? 0, lane);
  const first = vecReg(fields.Zn ?? 0, lane);

  switch (inst.encoding!.fileName) {
    case "bfmls_z_p_zzz.xml":
      return [dest, predReg(fields.Pg ?? 0, "m"), first, vecReg(fields.Zm ?? 0, lane)];
    case "bfmls_z_zzzi.xml":
      return [dest, first, { kind: "text", text: smeIndexedSourceText(inst, lane) }];
    default:
      return [];
  }
}

function sveFpMultiplyAccumulateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;

  if (inst.encoding!.fileName.endsWith("_p_zzz.xml")) {
    const lane = sveLaneFromSize(fields.size);
    const dest = vecReg(fields.Zda ?? 0, lane);
    return [dest, predReg(fields.Pg ?? 0, "m"), vecReg(fields.Zn ?? 0, lane), vecReg(fields.Zm ?? 0, lane)];
  }

  const lane = inst.encoding!.encodingId.endsWith("_s") ? "s" : inst.encoding!.encodingId.endsWith("_d") ? "d" : "h";
  return [vecReg(fields.Zda ?? 0, lane), vecReg(fields.Zn ?? 0, lane), { kind: "text", text: smeIndexedSourceText(inst, lane) }];
}

function sveLd1bLaneFromEncodingId(encodingId: string): "b" | "h" | "s" | "d" {
  if (encodingId.endsWith("_u16")) {
    return "h";
  }
  if (encodingId.endsWith("_u32")) {
    return "s";
  }
  if (encodingId.endsWith("_u64")) {
    return "d";
  }
  return "b";
}

function sveLd1roLaneFromFile(fileName: string): "b" | "h" | "s" | "d" {
  switch (fileName) {
    case "ld1roh_z_p_bi.xml":
    case "ld1roh_z_p_br.xml":
      return "h";
    case "ld1row_z_p_bi.xml":
    case "ld1row_z_p_br.xml":
      return "s";
    case "ld1rod_z_p_bi.xml":
    case "ld1rod_z_p_br.xml":
      return "d";
    default:
      return "b";
  }
}

function sveReplicateLoadLaneFromEncoding(inst: DecodedInstruction): "b" | "h" | "s" | "d" {
  const fileName = inst.encoding!.fileName;

  if (fileName.startsWith("ld1ro")) {
    return sveLd1roLaneFromFile(fileName);
  }

  if (fileName.startsWith("ld1rq")) {
    switch (fileName) {
      case "ld1rqh_z_p_bi.xml":
      case "ld1rqh_z_p_br.xml":
        return "h";
      case "ld1rqw_z_p_bi.xml":
      case "ld1rqw_z_p_br.xml":
        return "s";
      case "ld1rqd_z_p_bi.xml":
      case "ld1rqd_z_p_br.xml":
        return "d";
      default:
        return "b";
    }
  }

  if (inst.encoding!.encodingId.endsWith("16")) {
    return "h";
  }
  if (inst.encoding!.encodingId.endsWith("32")) {
    return "s";
  }
  if (inst.encoding!.encodingId.endsWith("64")) {
    return "d";
  }
  return "b";
}

function sveReplicateLoadImmediateScale(fileName: string): bigint {
  if (fileName.startsWith("ld1ro")) {
    return 32n;
  }
  if (fileName.startsWith("ld1rq")) {
    return 16n;
  }

  const mnemonic = fileName.split("_")[0] ?? "";
  switch (mnemonic.at(-1)) {
    case "h":
      return 2n;
    case "w":
      return 4n;
    case "d":
      return 8n;
    default:
      return 1n;
  }
}

function sveReplicateLoadImmediateOffset(inst: DecodedInstruction): bigint {
  const fileName = inst.encoding!.fileName;
  const scale = sveReplicateLoadImmediateScale(fileName);

  if (fileName.startsWith("ld1rq") || fileName.startsWith("ld1ro")) {
    return signExtend(inst.fields!.imm4 ?? 0, 4) * scale;
  }

  return BigInt(inst.fields!.imm6 ?? 0) * scale;
}

function sveLd1roRegisterShift(lane: "b" | "h" | "s" | "d"): number {
  switch (lane) {
    case "h":
      return 1;
    case "s":
      return 2;
    case "d":
      return 3;
    default:
      return 0;
  }
}

function sveSingleVectorListText(register: number, lane: "b" | "h" | "s" | "d"): string {
  return `{ z${register}.${lane} }`;
}

function isSveContiguousMemoryFile(fileName: string): boolean {
  return /^(?:ld1b|st1[bhwd]|ld[234][bhwd]|st[234][bhwd]|stnt1[bhwd])_z_p_(?:bi|br)\.xml$/.test(fileName);
}

function sveElementShiftFromMnemonic(mnemonic: string): number {
  switch (mnemonic.at(-1)?.toLowerCase()) {
    case "h":
      return 1;
    case "w":
      return 2;
    case "d":
      return 3;
    default:
      return 0;
  }
}

function sveMemoryLaneFromEncoding(inst: DecodedInstruction): "b" | "h" | "s" | "d" {
  const fileName = inst.encoding!.fileName;
  const fields = inst.fields!;

  if (fileName.startsWith("ld1b_")) {
    return sveLd1bLaneFromEncodingId(inst.encoding!.encodingId);
  }

  if (fileName.startsWith("st1b_") || fileName.startsWith("st1h_")) {
    return sveVectorLaneFromSize(fields.size);
  }

  if (fileName.startsWith("st1w_")) {
    return (fields.sz ?? 0) === 0 ? "s" : "d";
  }

  switch (inst.encoding!.mnemonic.at(-1)?.toLowerCase()) {
    case "h":
      return "h";
    case "w":
      return "s";
    case "d":
      return "d";
    default:
      return "b";
  }
}

function sveMemoryRegisterCount(mnemonic: string): number {
  const match = /^(?:LD|ST)([234])/.exec(mnemonic);
  return match ? Number(match[1]) : 1;
}

function sveContiguousVectorListText(start: number, count: number, lane: "b" | "h" | "s" | "d"): string {
  if (count === 1) {
    return sveSingleVectorListText(start, lane);
  }

  const end = start + count - 1;
  if (count > 2 && end < 32) {
    return `{ z${start}.${lane} - z${end}.${lane} }`;
  }

  const registers = Array.from({ length: count }, (_, index) => `z${(start + index) & 31}.${lane}`);
  return `{ ${registers.join(", ")} }`;
}

function isSveFaultTolerantLoadFile(fileName: string): boolean {
  return /^ld(?:ff|nf)1(?:s?[bhw]|d)_z_p_(?:ai|bi|br|bz)\.xml$/.test(fileName);
}

function sveFaultLoadLaneFromEncodingId(encodingId: string): "b" | "h" | "s" | "d" {
  if (encodingId.endsWith("16")) {
    return "h";
  }
  if (encodingId.endsWith("32") || encodingId.includes("_s_") || encodingId.endsWith("_s")) {
    return "s";
  }
  if (encodingId.endsWith("64") || encodingId.includes("_d_") || encodingId.endsWith("_d")) {
    return "d";
  }
  return "b";
}

function sveFaultLoadSourceByteSize(mnemonic: string): number {
  const lower = mnemonic.toLowerCase();
  if (lower.endsWith("h") || lower.endsWith("sh")) {
    return 2;
  }
  if (lower.endsWith("w") || lower.endsWith("sw")) {
    return 4;
  }
  if (lower.endsWith("d")) {
    return 8;
  }
  return 1;
}

function sveFaultLoadSourceShift(inst: DecodedInstruction): number {
  const sourceBytes = sveFaultLoadSourceByteSize(inst.encoding!.mnemonic);
  return sourceBytes === 8 ? 3 : sourceBytes === 4 ? 2 : sourceBytes === 2 ? 1 : 0;
}

function sveFaultLoadVectorOffsetMemoryText(inst: DecodedInstruction, base: string): string {
  const fields = inst.fields!;
  const lane = sveFaultLoadLaneFromEncodingId(inst.encoding!.encodingId);
  const shift = inst.encoding!.encodingId.includes("scaled") && !inst.encoding!.encodingId.includes("unscaled")
    ? sveFaultLoadSourceShift(inst)
    : 0;
  const index = `z${fields.Zm ?? 0}.${lane}`;
  let modifier: string | undefined;

  if (inst.encoding!.encodingId.includes("_64_")) {
    modifier = shift === 0 ? undefined : `lsl #${shift}`;
  } else {
    modifier = (fields.xs ?? 0) === 0 ? "uxtw" : "sxtw";
    if (shift !== 0) {
      modifier += ` #${shift}`;
    }
  }

  return modifier ? `[${base}, ${index}, ${modifier}]` : `[${base}, ${index}]`;
}

function sveFaultTolerantLoadOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveFaultLoadLaneFromEncodingId(inst.encoding!.encodingId);
  const destination = { kind: "text" as const, text: sveSingleVectorListText(fields.Zt ?? 0, lane) };
  const predicate = predReg(fields.Pg ?? 0, "z");
  const fileName = inst.encoding!.fileName;

  if (fileName.endsWith("_ai.xml")) {
    const sourceBytes = sveFaultLoadSourceByteSize(inst.encoding!.mnemonic);
    const imm = (fields.imm5 ?? 0) * sourceBytes;
    const base = `z${fields.Zn ?? 0}.${lane}`;
    const memory = imm === 0 ? `[${base}]` : `[${base}, #${imm}]`;
    return [destination, predicate, { kind: "text", text: memory }];
  }

  const base = formatRegister(gpReg(64, fields.Rn ?? 0, "sp"));

  if (fileName.endsWith("_bi.xml")) {
    const imm = Number(signExtend(fields.imm4 ?? 0, 4));
    const memory = imm === 0 ? `[${base}]` : `[${base}, #${imm}, mul vl]`;
    return [destination, predicate, { kind: "text", text: memory }];
  }

  if (fileName.endsWith("_br.xml")) {
    const offsetRegister = fields.Rm ?? 31;
    if (offsetRegister === 31) {
      return [destination, predicate, { kind: "text", text: `[${base}]` }];
    }

    const offset = formatRegister(gpReg(64, offsetRegister, "zr"));
    const shift = sveFaultLoadSourceShift(inst);
    const memory = shift === 0 ? `[${base}, ${offset}]` : `[${base}, ${offset}, lsl #${shift}]`;
    return [destination, predicate, { kind: "text", text: memory }];
  }

  return [destination, predicate, { kind: "text", text: sveFaultLoadVectorOffsetMemoryText(inst, base) }];
}

function sveContiguousByteMemoryOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const fileName = inst.encoding!.fileName;
  const lane = sveMemoryLaneFromEncoding(inst);
  const registerCount = sveMemoryRegisterCount(inst.encoding!.mnemonic);
  const register = {
    kind: "text" as const,
    text: sveContiguousVectorListText(fields.Zt ?? 0, registerCount, lane),
  };
  const predicate = fileName.startsWith("ld") ? predReg(fields.Pg ?? 0, "z") : predReg(fields.Pg ?? 0);
  const base = formatRegister(gpReg(64, fields.Rn ?? 0, "sp"));

  if (fileName.endsWith("_bi.xml")) {
    const imm = Number(signExtend(fields.imm4 ?? 0, 4)) * registerCount;
    const memory = imm === 0 ? `[${base}]` : `[${base}, #${imm}, mul vl]`;
    return [register, predicate, { kind: "text", text: memory }];
  }

  const offset = formatRegister(gpReg(64, fields.Rm ?? 0, "zr"));
  const shift = sveElementShiftFromMnemonic(inst.encoding!.mnemonic);
  const memory = shift === 0 ? `[${base}, ${offset}]` : `[${base}, ${offset}, lsl #${shift}]`;
  return [register, predicate, { kind: "text", text: memory }];
}

function sveReplicateLoadOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveReplicateLoadLaneFromEncoding(inst);
  const register = { kind: "text" as const, text: sveSingleVectorListText(fields.Zt ?? 0, lane) };
  const base = formatRegister(gpReg(64, fields.Rn ?? 0, "sp"));

  if (inst.encoding!.fileName.endsWith("_bi.xml")) {
    const imm = sveReplicateLoadImmediateOffset(inst);
    const memory = imm === 0n ? `[${base}]` : `[${base}, ${formatSignedDecimalImmediate(imm)}]`;
    return [register, predReg(fields.Pg ?? 0, "z"), { kind: "text", text: memory }];
  }

  const offset = formatRegister(gpReg(64, fields.Rm ?? 0, "zr"));
  const shift = sveLd1roRegisterShift(lane);
  const memory = shift === 0 ? `[${base}, ${offset}]` : `[${base}, ${offset}, lsl #${shift}]`;
  return [register, predReg(fields.Pg ?? 0, "z"), { kind: "text", text: memory }];
}

function sveBfmlalOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;

  switch (inst.encoding!.fileName) {
    case "bfmlalb_z_zzz.xml":
    case "bfmlalt_z_zzz.xml":
      return [vecReg(fields.Zda ?? 0, "s"), vecReg(fields.Zn ?? 0, "h"), vecReg(fields.Zm ?? 0, "h")];
    case "bfmlalb_z_zzzi.xml":
    case "bfmlalt_z_zzzi.xml": {
      const index = ((fields.i3h ?? 0) << 2) | (fields.i3l ?? 0);
      return [
        vecReg(fields.Zda ?? 0, "s"),
        vecReg(fields.Zn ?? 0, "h"),
        { kind: "text", text: `z${fields.Zm ?? 0}.h[${index}]` },
      ];
    }
    default:
      return [];
  }
}

function sveComplexRotateImmediate(inst: DecodedInstruction): Operand {
  return { kind: "text", text: `#${complexRotateDegrees(inst)}` };
}

function sveComplexVectorOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    vecReg(fields.Zda ?? 0, lane),
    vecReg(fields.Zn ?? 0, lane),
    vecReg(fields.Zm ?? 0, lane),
    sveComplexRotateImmediate(inst),
  ];
}

function sveFcmlaPredicatedOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    vecReg(fields.Zda ?? 0, lane),
    predReg(fields.Pg ?? 0, "m"),
    vecReg(fields.Zn ?? 0, lane),
    vecReg(fields.Zm ?? 0, lane),
    sveComplexRotateImmediate(inst),
  ];
}

function sveFcaddOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    vecReg(fields.Zdn ?? 0, lane),
    predReg(fields.Pg ?? 0, "m"),
    vecReg(fields.Zdn ?? 0, lane),
    vecReg(fields.Zm ?? 0, lane),
    sveComplexRotateImmediate(inst),
  ];
}

function sveComplexIndexedOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = inst.encoding!.encodingId.endsWith("_s") ? "s" : "h";
  const index = fields.i2 ?? fields.i1 ?? 0;
  return [
    vecReg(fields.Zda ?? 0, lane),
    vecReg(fields.Zn ?? 0, lane),
    { kind: "text", text: `z${fields.Zm ?? 0}.${lane}[${index}]` },
    sveComplexRotateImmediate(inst),
  ];
}

function sveFp8ConvertOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [vecReg(fields.Zd ?? 0, "h"), vecReg(fields.Zn ?? 0, "b")];
}

function sveFmulImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveLaneFromSize(fields.size);
  const immediate = (fields.i1 ?? 0) === 0 ? "#0.5" : "#2.0";
  return [vecReg(fields.Zdn ?? 0, lane), predReg(fields.Pg ?? 0, "m"), vecReg(fields.Zdn ?? 0, lane), { kind: "text", text: immediate }];
}

function sveFpAddSubImmediateOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveLaneFromSize(fields.size);
  const immediate = (fields.i1 ?? 0) === 0 ? "#0.5" : "#1.0";
  return [vecReg(fields.Zdn ?? 0, lane), predReg(fields.Pg ?? 0, "m"), vecReg(fields.Zdn ?? 0, lane), { kind: "text", text: immediate }];
}

function sveFmulIndexedOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  let lane: "h" | "s" | "d" = "h";
  let index = 0;

  if (inst.encoding!.encodingId.endsWith("_s")) {
    lane = "s";
    index = fields.i2 ?? 0;
  } else if (inst.encoding!.encodingId.endsWith("_d")) {
    lane = "d";
    index = fields.i1 ?? 0;
  } else {
    index = ((fields.i3h ?? 0) << 2) | (fields.i3l ?? 0);
  }

  return [
    vecReg(fields.Zd ?? 0, lane),
    vecReg(fields.Zn ?? 0, lane),
    { kind: "text", text: `z${fields.Zm ?? 0}.${lane}[${index}]` },
  ];
}

function sveFmadOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveLaneFromSize(fields.size);
  return [
    vecReg(fields.Zdn ?? 0, lane),
    predReg(fields.Pg ?? 0, "m"),
    vecReg(fields.Zm ?? 0, lane),
    vecReg(fields.Za ?? 0, lane),
  ];
}

function sveFmmlaOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = inst.encoding!.encodingId.endsWith("_d") ? "d" : inst.encoding!.encodingId.endsWith("_s") ? "s" : "h";
  return [vecReg(fields.Zda ?? 0, lane), vecReg(fields.Zn ?? 0, lane), vecReg(fields.Zm ?? 0, lane)];
}

function sveMatrixMultiplyOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;

  switch (inst.encoding!.fileName) {
    case "bfmmla_z_zzz.xml":
      return [vecReg(fields.Zda ?? 0, "s"), vecReg(fields.Zn ?? 0, "h"), vecReg(fields.Zm ?? 0, "h")];
    case "bfmmla_z16_zzz.xml":
      return [vecReg(fields.Zda ?? 0, "h"), vecReg(fields.Zn ?? 0, "h"), vecReg(fields.Zm ?? 0, "h")];
    case "smmla_z_zzz.xml":
    case "ummla_z_zzz.xml":
    case "usmmla_z_zzz.xml":
      return [vecReg(fields.Zda ?? 0, "s"), vecReg(fields.Zn ?? 0, "b"), vecReg(fields.Zm ?? 0, "b")];
    default:
      return sveFmmlaOperands(inst);
  }
}

function sveDotLanes(inst: DecodedInstruction): { destination: "h" | "s" | "d"; source: "b" | "h" } {
  const fileName = inst.encoding!.fileName;
  const encodingId = inst.encoding!.encodingId;
  const fields = inst.fields!;

  if (fileName.startsWith("bfdot_")) {
    return { destination: "s", source: "h" };
  }

  if (fileName === "sudot_z_zzzi.xml" || fileName === "usdot_z_zzz.xml" || fileName === "usdot_z_zzzi.xml") {
    return { destination: "s", source: "b" };
  }

  if (encodingId.includes("_z16_") || encodingId.endsWith("_h")) {
    return { destination: "h", source: "b" };
  }

  if (fileName.includes("_z32_")) {
    return { destination: "s", source: "h" };
  }

  if ((fields.size ?? 0) === 3 || encodingId.endsWith("_d")) {
    return { destination: "d", source: "h" };
  }

  return { destination: "s", source: "b" };
}

function sveDotIndexedSourceText(inst: DecodedInstruction, sourceLane: "b" | "h"): string {
  const fields = inst.fields!;
  const widthByName = new Map(inst.encoding!.fields.map((field) => [field.name, field.width] as const));
  let index = 0;

  if (fields.i3h !== undefined || fields.i3l !== undefined) {
    index = ((fields.i3h ?? 0) << (widthByName.get("i3l") ?? 0)) | (fields.i3l ?? 0);
  } else if (fields.i2 !== undefined) {
    index = fields.i2;
  } else if (fields.i1 !== undefined) {
    index = fields.i1;
  }

  return `z${fields.Zm ?? 0}.${sourceLane}[${index}]`;
}

function sveDotProductOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lanes = sveDotLanes(inst);
  const ops: Operand[] = [
    vecReg(fields.Zda ?? 0, lanes.destination),
    vecReg(fields.Zn ?? 0, lanes.source),
  ];

  if (inst.encoding!.fileName.endsWith("_zzzi.xml")) {
    ops.push({ kind: "text", text: sveDotIndexedSourceText(inst, lanes.source) });
  } else {
    ops.push(vecReg(fields.Zm ?? 0, lanes.source));
  }

  return ops;
}

function svePermutationOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = inst.encoding!.encodingId.endsWith("_q") ? "q" : sveVectorLaneFromSize(fields.size);
  return [vecReg(fields.Zd ?? 0, lane), vecReg(fields.Zn ?? 0, lane), vecReg(fields.Zm ?? 0, lane)];
}

function sveUnaryPermutationOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [vecReg(fields.Zd ?? 0, lane), vecReg(fields.Zn ?? 0, lane)];
}

function sveCompactOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = inst.encoding!.encodingId.endsWith("_s")
    ? sveVectorLaneFromSize(fields.sz)
    : sveVectorLaneFromSize((fields.sz ?? 0) + 2);
  return [vecReg(fields.Zd ?? 0, lane), predReg(fields.Pg ?? 0), vecReg(fields.Zn ?? 0, lane)];
}

function svePrefetchOpText(prfop: number): string {
  switch (prfop) {
    case 0:
      return "pldl1keep";
    case 1:
      return "pldl1strm";
    case 2:
      return "pldl2keep";
    case 3:
      return "pldl2strm";
    case 4:
      return "pldl3keep";
    case 5:
      return "pldl3strm";
    case 8:
      return "pstl1keep";
    case 9:
      return "pstl1strm";
    case 10:
      return "pstl2keep";
    case 11:
      return "pstl2strm";
    case 12:
      return "pstl3keep";
    case 13:
      return "pstl3strm";
    default:
      return `#${prfop}`;
  }
}

function sveScalarImmediatePrefetchOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const imm = Number(signExtend(fields.imm6 ?? 0, 6));
  const base = formatRegister(gpReg(64, fields.Rn, "sp"));
  const memory = imm === 0 ? `[${base}]` : `[${base}, #${imm}, mul vl]`;
  return [
    { kind: "text", text: svePrefetchOpText(fields.prfop ?? 0) },
    predReg(fields.Pg),
    { kind: "text", text: memory },
  ];
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

function smeWideningFloatConvertOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  return [
    { kind: "text", text: smeVectorGroupText((fields.Zd ?? 0) * 2, 2, "s") },
    vecReg(fields.Zn ?? 0, "h"),
  ];
}

type SmeZeroMaskEntry = {
  text: string;
  mask: number;
};

const SME_ZERO_MASK_ENTRIES: SmeZeroMaskEntry[] = [
  { text: "za", mask: 0xff },
  { text: "za0.h", mask: 0x55 },
  { text: "za1.h", mask: 0xaa },
  { text: "za0.s", mask: 0x11 },
  { text: "za1.s", mask: 0x22 },
  { text: "za2.s", mask: 0x44 },
  { text: "za3.s", mask: 0x88 },
  { text: "za0.d", mask: 0x01 },
  { text: "za1.d", mask: 0x02 },
  { text: "za2.d", mask: 0x04 },
  { text: "za3.d", mask: 0x08 },
  { text: "za4.d", mask: 0x10 },
  { text: "za5.d", mask: 0x20 },
  { text: "za6.d", mask: 0x40 },
  { text: "za7.d", mask: 0x80 },
];

const SME_ZERO_MASK_TEXT_CACHE = new Map<number, string>();

function smeZeroMaskText(mask: number): string {
  const normalizedMask = mask & 0xff;
  const cached = SME_ZERO_MASK_TEXT_CACHE.get(normalizedMask);
  if (cached !== undefined) {
    return cached;
  }

  const bestByMask = new Map<number, string[]>([[0, []]]);

  for (let currentMask = 1; currentMask <= normalizedMask; currentMask += 1) {
    let best: string[] | undefined;

    for (const entry of SME_ZERO_MASK_ENTRIES) {
      if ((currentMask & entry.mask) !== entry.mask) {
        continue;
      }

      const remainder = currentMask ^ entry.mask;
      const remainderBest = bestByMask.get(remainder);
      if (!remainderBest) {
        continue;
      }

      const candidate = [entry.text, ...remainderBest];
      if (
        !best ||
        candidate.length < best.length ||
        (candidate.length === best.length && candidate.join(", ") < best.join(", "))
      ) {
        best = candidate;
      }
    }

    if (best) {
      bestByMask.set(currentMask, best);
    }
  }

  const selected = bestByMask.get(normalizedMask) ?? [];
  const text = selected.length === 0 ? "{}" : `{${selected.join(", ")}}`;
  SME_ZERO_MASK_TEXT_CACHE.set(normalizedMask, text);
  return text;
}

function smeZeroGroupCount(encodingId: string): 1 | 2 | 4 {
  if (encodingId.endsWith("_4")) {
    return 4;
  }
  if (encodingId.endsWith("_2")) {
    return 2;
  }
  return 1;
}

function smeZeroBaseOperands(inst: DecodedInstruction): Operand[] {
  return [{ kind: "text", text: smeZeroMaskText(inst.fields!.imm8 ?? 0) }];
}

function smeZeroSingleVectorOperands(inst: DecodedInstruction): Operand[] {
  const count = smeZeroGroupCount(inst.encoding!.encodingId);
  return [{ kind: "text", text: movaArrayZaText(inst.fields!, count === 1 ? 2 : count) }];
}

function smeZeroGroupedOperands(inst: DecodedInstruction, vectorsPerGroup: 2 | 4): Operand[] {
  const fields = inst.fields!;
  const start = vectorsPerGroup === 2 ? 2 * (fields.off3 ?? fields.off2 ?? 0) : 4 * (fields.off2 ?? fields.o1 ?? 0);
  const end = start + vectorsPerGroup - 1;
  const groupCount = smeZeroGroupCount(inst.encoding!.encodingId);
  const vgx = groupCount === 1 ? "" : `, vgx${groupCount}`;
  return [{ kind: "text", text: `za.d[w${8 + (fields.Rv ?? 0)}, ${start}:${end}${vgx}]` }];
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

function smeZaTileSliceLane(fileName: string): "b" | "h" | "s" | "d" | "q" {
  if (fileName.includes("1b_")) {
    return "b";
  }
  if (fileName.includes("1h_")) {
    return "h";
  }
  if (fileName.includes("1w_")) {
    return "s";
  }
  if (fileName.includes("1d_")) {
    return "d";
  }
  return "q";
}

function smeZaTileSliceMemoryShift(fileName: string): number {
  switch (smeZaTileSliceLane(fileName)) {
    case "b":
      return 0;
    case "h":
      return 1;
    case "s":
      return 2;
    case "d":
      return 3;
    case "q":
      return 4;
  }
}

function smeZaTileSliceText(inst: DecodedInstruction): string {
  const fields = inst.fields!;
  const lane = smeZaTileSliceLane(inst.encoding!.fileName);
  const tile = fields.ZAt ?? 0;
  const orientation = (fields.V ?? 0) === 1 ? "v" : "h";
  const selector = 12 + (fields.Rs ?? 0);
  const offset = fields.off4 ?? fields.off3 ?? fields.off2 ?? fields.o1 ?? 0;
  return `za${tile}${orientation}.${lane}[w${selector}, ${offset}]`;
}

function smeZaTileSliceMemoryText(inst: DecodedInstruction): string {
  const fields = inst.fields!;
  const base = formatRegister(gpReg(64, fields.Rn ?? 0, "sp"));
  const rm = fields.Rm ?? 0;
  if (rm === 31) {
    return `[${base}]`;
  }

  const offset = formatRegister(gpReg(64, rm, "zr"));
  const shift = smeZaTileSliceMemoryShift(inst.encoding!.fileName);
  return shift === 0 ? `[${base}, ${offset}]` : `[${base}, ${offset}, lsl #${shift}]`;
}

function smeZaTileSliceOperands(inst: DecodedInstruction): Operand[] {
  const predicateMode = inst.encoding!.mnemonic.startsWith("LD") ? "z" : undefined;
  return [
    { kind: "text", text: `{${smeZaTileSliceText(inst)}}` },
    predReg(inst.fields!.Pg ?? 0, predicateMode),
    { kind: "text", text: smeZaTileSliceMemoryText(inst) },
  ];
}

function smeDotGroupCount(className: string): 2 | 4 {
  return className.includes("Four") ? 4 : 2;
}

function smeDotAccumulatorLane(inst: DecodedInstruction): "h" | "s" | "d" {
  if (inst.encoding!.fileName.includes("z8z8")) {
    return inst.encoding!.fileName.includes("za32") ? "s" : "h";
  }
  if (inst.encoding!.fileName.includes("za32")) {
    return "s";
  }
  if (inst.fields?.sz !== undefined) {
    return inst.fields.sz === 1 ? "d" : "s";
  }
  return inst.encoding!.className.includes("64-bit") ? "d" : "s";
}

function smeDotSourceLane(inst: DecodedInstruction, accLane: "h" | "s" | "d"): "b" | "h" {
  if (inst.encoding!.fileName.includes("z8z8")) {
    return "b";
  }
  return accLane === "d" ||
      inst.encoding!.fileName.includes("za32") ||
      inst.encoding!.fileName.startsWith("bfdot_") ||
      inst.encoding!.fileName.startsWith("fdot_")
    ? "h"
    : "b";
}

function smeDotZaText(fields: Record<string, number>, count: 2 | 4, lane: "s" | "d"): string {
  return `za.${lane}[w${8 + (fields.Rv ?? 0)}, ${fields.off3 ?? 0}, vgx${count}]`;
}

function smeAccumulatorLane(inst: DecodedInstruction): "s" | "h" | "d" {
  switch (inst.encoding!.fileName) {
    case "fmax_mz_zzv.xml":
    case "fmax_mz_zzw.xml":
    case "fmaxnm_mz_zzv.xml":
    case "fmaxnm_mz_zzw.xml":
    case "fmin_mz_zzv.xml":
    case "fmin_mz_zzw.xml":
    case "fminnm_mz_zzv.xml":
    case "fminnm_mz_zzw.xml": {
      const lane = sveVectorLaneFromSize(inst.fields?.size);
      return lane === "d" ? "d" : lane === "s" ? "s" : "h";
    }
  }
  if (inst.encoding!.mnemonic.startsWith("BF")) {
    return "h";
  }
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

function smeVectorGroupText(start: number, count: 2 | 4, lane: "b" | "h" | "s" | "d" | "q"): string {
  const regs = Array.from({ length: count }, (_, index) => `z${(start + index) & 31}.${lane}`);
  if (count === 4 && start <= 28) {
    return `{ ${regs[0]} - ${regs[3]} }`;
  }
  return `{ ${regs.join(", ")} }`;
}

function smeLutiVectorGroupText(inst: DecodedInstruction, count: 2 | 4, lane: "b" | "h" | "s" | "d"): string {
  const fields = inst.fields!;
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
    case "luti2_mz2_ztz.xml":
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

function smeLutiOperands(inst: DecodedInstruction, count: 2 | 4): Operand[] {
  const fields = inst.fields!;
  const lane = sveVectorLaneFromSize(fields.size);
  return [
    { kind: "text", text: smeLutiVectorGroupText(inst, count, lane) },
    { kind: "text", text: "zt0" },
    { kind: "text", text: `z${fields.Zn ?? 0}[${smeLutiIndex(inst)}]` },
  ];
}

function smeIndexedSourceText(inst: DecodedInstruction, lane: "b" | "s" | "h" | "d"): string {
  const fields = inst.fields!;
  const encodingFields = inst.encoding!.fields;
  const widthByName = new Map(encodingFields.map((field) => [field.name, field.width] as const));

  const i4h = fields.i4h;
  const i4l = fields.i4l;
  if (i4h !== undefined || i4l !== undefined) {
    const lowWidth = widthByName.get("i4l") ?? 0;
    return `z${fields.Zm ?? 0}.${lane}[${((i4h ?? 0) << lowWidth) | (i4l ?? 0)}]`;
  }

  const i3h = fields.i3h;
  const i3l = fields.i3l;
  if (i3h !== undefined || i3l !== undefined) {
    const lowWidth = widthByName.get("i3l") ?? 0;
    return `z${fields.Zm ?? 0}.${lane}[${((i3h ?? 0) << lowWidth) | (i3l ?? 0)}]`;
  }

  return `z${fields.Zm ?? 0}.${lane}[${((fields.i2 ?? 0) << 1) | (fields.i1 ?? 0)}]`;
}

function smeFp8LongArithmeticZaText(inst: DecodedInstruction): string {
  const fields = inst.fields!;
  const isHalf = inst.encoding!.fileName.startsWith("fmlal_za_z8z8");
  const start = isHalf ? 2 * (fields.off3 ?? 0) : 4 * (fields.off2 ?? 0);
  const end = start + (isHalf ? 1 : 3);
  const groupSize = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  const vgx = groupSize === 1 ? "" : `, vgx${groupSize}`;
  return `za.${isHalf ? "h" : "s"}[w${8 + (fields.Rv ?? 0)}, ${start}:${end}${vgx}]`;
}

function smeLongArithmeticLane(inst: DecodedInstruction): "s" | "d" {
  switch (inst.encoding!.fileName) {
    case "smlal_za_zzi.xml":
    case "smlal_za_zzv.xml":
    case "smlal_za_zzw.xml":
    case "smlsl_za_zzi.xml":
    case "smlsl_za_zzv.xml":
    case "smlsl_za_zzw.xml":
    case "umlal_za_zzi.xml":
    case "umlal_za_zzv.xml":
    case "umlal_za_zzw.xml":
      return "s";
  }
  return inst.fields?.sz === 1 ? "d" : "s";
}

function smeLongArithmeticSourceLane(accLane: "s" | "d"): "b" | "h" {
  return accLane === "d" ? "h" : "b";
}

function smeFloatLongArithmeticLane(): "s" {
  return "s";
}

function smeFloatLongArithmeticZaText(inst: DecodedInstruction): string {
  const fields = inst.fields!;
  const start = 2 * (fields.off3 ?? fields.off2 ?? 0);
  const groupSize = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  const vgx = groupSize === 1 ? "" : `, vgx${groupSize}`;
  return `za.s[w${8 + (fields.Rv ?? 0)}, ${start}:${start + 1}${vgx}]`;
}

function smeFloatLongArithmeticSourceLane(): "h" {
  return "h";
}

function smeLongArithmeticZaText(inst: DecodedInstruction, lane: "s" | "d"): string {
  const fields = inst.fields!;
  const start = 4 * (fields.off2 ?? fields.o1 ?? 0);
  const groupSize = smeLongArithmeticGroupSize(inst.encoding!.encodingId);
  const vgx = groupSize === 1 ? "" : `, vgx${groupSize}`;
  return `za.${lane}[w${8 + (fields.Rv ?? 0)}, ${start}:${start + 3}${vgx}]`;
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

function smeLongArithmeticSecondSource(inst: DecodedInstruction, lane: "b" | "h"): Operand {
  const fields = inst.fields!;
  const encodingId = inst.encoding!.encodingId;
  const sourceStart = fields.Zm ?? 0;

  if (encodingId.includes("_zzi_")) {
    return { kind: "text", text: smeIndexedSourceText(inst, lane) };
  }

  if (!encodingId.includes("_zzw_")) {
    return { kind: "text", text: `z${sourceStart}.${lane}` };
  }

  const groupSize = smeLongArithmeticGroupSize(encodingId);
  return { kind: "text", text: smeDotVectorGroupText(sourceStart, groupSize, lane) };
}

function smeLongArithmeticFirstSource(inst: DecodedInstruction, lane: "b" | "h"): Operand {
  const fields = inst.fields!;
  const encodingId = inst.encoding!.encodingId;
  const sourceStart = fields.Zn ?? 0;
  const groupSize = smeLongArithmeticGroupSize(encodingId);

  if (encodingId.includes("_zzi_")) {
    return { kind: "text", text: smeLongArithmeticGroupSize(encodingId) === 1
      ? `z${sourceStart}.${lane}`
      : smeDotVectorGroupText(sourceStart, groupSize, lane) };
  }

  if (groupSize === 1) {
    return { kind: "text", text: `z${sourceStart}.${lane}` };
  }
  return { kind: "text", text: smeDotVectorGroupText(sourceStart, groupSize, lane) };
}

function smeLongArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = smeLongArithmeticLane(inst);
  const srcLane = smeInt16LongArithmeticFiles(inst.encoding!.fileName) ? "h" : smeLongArithmeticSourceLane(lane);
  const za = {
    kind: "text",
    text: smeInt16LongArithmeticFiles(inst.encoding!.fileName)
      ? smeFloatLongArithmeticZaText(inst)
      : smeLongArithmeticZaText(inst, lane),
  } satisfies Operand;
  const first = smeLongArithmeticFirstSource(inst, srcLane);
  const second = smeLongArithmeticSecondSource(inst, srcLane);

  switch (inst.encoding!.encodingId) {
    case "smlal_za_zzv_1":
    case "smlal_za_zzv_2x1":
    case "smlal_za_zzv_4x1":
    case "smlall_za_zzv_1":
    case "smlall_za_zzv_2x1":
    case "smlall_za_zzv_4x1":
    case "smlsl_za_zzv_1":
    case "smlsl_za_zzv_2x1":
    case "smlsl_za_zzv_4x1":
    case "smlsll_za_zzv_1":
    case "smlsll_za_zzv_2x1":
    case "smlsll_za_zzv_4x1":
    case "umlal_za_zzv_1":
    case "umlal_za_zzv_2x1":
    case "umlal_za_zzv_4x1":
    case "umlall_za_zzv_1":
    case "umlall_za_zzv_2x1":
    case "umlall_za_zzv_4x1":
    case "umlsl_za_zzv_1":
    case "umlsl_za_zzv_2x1":
    case "umlsl_za_zzv_4x1":
    case "umlsll_za_zzv_1":
    case "umlsll_za_zzv_2x1":
    case "umlsll_za_zzv_4x1":
    case "sumlall_za_zzv_s2x1":
    case "sumlall_za_zzv_s4x1":
    case "usmlall_za_zzv_s":
    case "usmlall_za_zzv_s2x1":
    case "usmlall_za_zzv_s4x1":
    case "smlal_za_zzi_1":
    case "smlal_za_zzi_2xi":
    case "smlal_za_zzi_4xi":
    case "smlall_za_zzi_s":
    case "smlall_za_zzi_d":
    case "smlall_za_zzi_s2xi":
    case "smlall_za_zzi_d2xi":
    case "smlall_za_zzi_s4xi":
    case "smlall_za_zzi_d4xi":
    case "smlsl_za_zzi_1":
    case "smlsl_za_zzi_2xi":
    case "smlsl_za_zzi_4xi":
    case "smlsll_za_zzi_s":
    case "smlsll_za_zzi_d":
    case "smlsll_za_zzi_s2xi":
    case "smlsll_za_zzi_d2xi":
    case "smlsll_za_zzi_s4xi":
    case "smlsll_za_zzi_d4xi":
    case "umlal_za_zzi_1":
    case "umlal_za_zzi_2xi":
    case "umlal_za_zzi_4xi":
    case "umlall_za_zzi_s":
    case "umlall_za_zzi_d":
    case "umlall_za_zzi_s2xi":
    case "umlall_za_zzi_d2xi":
    case "umlall_za_zzi_s4xi":
    case "umlall_za_zzi_d4xi":
    case "umlsl_za_zzi_1":
    case "umlsl_za_zzi_2xi":
    case "umlsl_za_zzi_4xi":
    case "umlsll_za_zzi_s":
    case "umlsll_za_zzi_d":
    case "umlsll_za_zzi_s2xi":
    case "umlsll_za_zzi_d2xi":
    case "umlsll_za_zzi_s4xi":
    case "umlsll_za_zzi_d4xi":
    case "sumlall_za_zzi_s":
    case "sumlall_za_zzi_s2xi":
    case "sumlall_za_zzi_s4xi":
    case "usmlall_za_zzi_s":
    case "usmlall_za_zzi_s2xi":
    case "usmlall_za_zzi_s4xi":
    case "smlal_za_zzw_2x2":
    case "smlal_za_zzw_4x4":
    case "smlall_za_zzw_2x2":
    case "smlall_za_zzw_4x4":
    case "smlsl_za_zzw_2x2":
    case "smlsl_za_zzw_4x4":
    case "smlsll_za_zzw_2x2":
    case "smlsll_za_zzw_4x4":
    case "umlal_za_zzw_2x2":
    case "umlal_za_zzw_4x4":
    case "umlall_za_zzw_2x2":
    case "umlall_za_zzw_4x4":
    case "umlsl_za_zzw_2x2":
    case "umlsl_za_zzw_4x4":
    case "umlsll_za_zzw_2x2":
    case "umlsll_za_zzw_4x4":
    case "usmlall_za_zzw_s2x2":
    case "usmlall_za_zzw_s4x4":
      return [za, first, second];
    default:
      return [];
  }
}

function smeFloatLongArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const srcLane = smeFloatLongArithmeticSourceLane();
  const za = { kind: "text", text: smeFloatLongArithmeticZaText(inst) } satisfies Operand;
  const first = smeLongArithmeticFirstSource(inst, srcLane);
  const second = smeLongArithmeticSecondSource(inst, srcLane);

  switch (inst.encoding!.encodingId) {
    case "bfmlal_za_zzv_1":
    case "bfmlal_za_zzv_2x1":
    case "bfmlal_za_zzv_4x1":
    case "bfmlal_za_zzi_1":
    case "bfmlal_za_zzi_2xi":
    case "bfmlal_za_zzi_4xi":
    case "bfmlal_za_zzw_2x2":
    case "bfmlal_za_zzw_4x4":
    case "bfmlsl_za_zzv_1":
    case "bfmlsl_za_zzv_2x1":
    case "bfmlsl_za_zzv_4x1":
    case "bfmlsl_za_zzi_1":
    case "bfmlsl_za_zzi_2xi":
    case "bfmlsl_za_zzi_4xi":
    case "bfmlsl_za_zzw_2x2":
    case "bfmlsl_za_zzw_4x4":
    case "fmlal_za_zzv_1":
    case "fmlal_za_zzv_2x1":
    case "fmlal_za_zzv_4x1":
    case "fmlal_za_zzi_1":
    case "fmlal_za_zzi_2xi":
    case "fmlal_za_zzi_4xi":
    case "fmlal_za_zzw_2x2":
    case "fmlal_za_zzw_4x4":
    case "fmlsl_za_zzv_1":
    case "fmlsl_za_zzv_2x1":
    case "fmlsl_za_zzv_4x1":
    case "fmlsl_za_zzi_1":
    case "fmlsl_za_zzi_2xi":
    case "fmlsl_za_zzi_4xi":
    case "fmlsl_za_zzw_2x2":
    case "fmlsl_za_zzw_4x4":
      return [za, first, second];
    default:
      return [];
  }
}

function smeFp8LongArithmeticOperands(inst: DecodedInstruction): Operand[] {
  const za = { kind: "text", text: smeFp8LongArithmeticZaText(inst) } satisfies Operand;
  const first = smeLongArithmeticFirstSource(inst, "b");
  const second = smeLongArithmeticSecondSource(inst, "b");

  switch (inst.encoding!.encodingId) {
    case "fmlal_za_z8z8v_1":
    case "fmlal_za_z8z8v_2x1":
    case "fmlal_za_z8z8v_4x1":
    case "fmlal_za_z8z8i_1":
    case "fmlal_za_z8z8i_2xi":
    case "fmlal_za_z8z8i_4xi":
    case "fmlal_za_z8z8w_2x2":
    case "fmlal_za_z8z8w_4x4":
    case "fmlall_za32_z8z8v_1":
    case "fmlall_za32_z8z8v_2x1":
    case "fmlall_za32_z8z8v_4x1":
    case "fmlall_za32_z8z8i_1":
    case "fmlall_za32_z8z8i_2xi":
    case "fmlall_za32_z8z8i_4xi":
    case "fmlall_za32_z8z8w_2x2":
    case "fmlall_za32_z8z8w_4x4":
      return [za, first, second];
    default:
      return [];
  }
}

function smeArithmeticSourceStart(inst: DecodedInstruction, fieldName: "Zn" | "Zm"): number {
  const fields = inst.fields!;
  const count = smeDotGroupCount(inst.encoding!.className);
  switch (inst.encoding!.fileName) {
    case "add_za_zzv.xml":
    case "sub_za_zzv.xml":
    case "smax_mz_zzv.xml":
    case "smin_mz_zzv.xml":
    case "umax_mz_zzv.xml":
    case "umin_mz_zzv.xml":
    case "bfmax_mz_zzv.xml":
    case "bfmaxnm_mz_zzv.xml":
    case "bfmin_mz_zzv.xml":
    case "bfminnm_mz_zzv.xml":
    case "fmax_mz_zzv.xml":
    case "fmaxnm_mz_zzv.xml":
    case "fmin_mz_zzv.xml":
    case "fminnm_mz_zzv.xml":
    case "sqdmulh_mz_zzv.xml":
    case "srshl_mz_zzv.xml":
    case "urshl_mz_zzv.xml":
    case "add_za_zzw.xml":
    case "sub_za_zzw.xml":
    case "smax_mz_zzw.xml":
    case "smin_mz_zzw.xml":
    case "umax_mz_zzw.xml":
    case "umin_mz_zzw.xml":
    case "bfmax_mz_zzw.xml":
    case "bfmaxnm_mz_zzw.xml":
    case "bfmin_mz_zzw.xml":
    case "bfminnm_mz_zzw.xml":
    case "fmax_mz_zzw.xml":
    case "fmaxnm_mz_zzw.xml":
    case "fmin_mz_zzw.xml":
    case "fminnm_mz_zzw.xml":
    case "sqdmulh_mz_zzw.xml":
    case "srshl_mz_zzw.xml":
    case "urshl_mz_zzw.xml":
    case "add_za_zw.xml":
    case "sub_za_zw.xml":
    case "fmla_za_zzw.xml":
    case "fmls_za_zzw.xml":
    case "bfmla_za_zzw.xml":
    case "bfmls_za_zzw.xml":
      return (fields[fieldName] ?? 0) * count;
    case "fadd_za_zw.xml":
    case "fsub_za_zw.xml":
    case "bfadd_za_zw.xml":
    case "bfsub_za_zw.xml":
      return (fields.Zm ?? 0) * count;
    case "fmla_za_zzv.xml":
    case "fmls_za_zzv.xml":
    case "bfmla_za_zzv.xml":
    case "bfmls_za_zzv.xml":
      return fields[fieldName] ?? 0;
    case "fmla_za_zzi.xml":
    case "fmls_za_zzi.xml":
    case "bfmla_za_zzi.xml":
    case "bfmls_za_zzi.xml":
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
    case "smax_mz_zzv.xml":
    case "smin_mz_zzv.xml":
    case "umax_mz_zzv.xml":
    case "umin_mz_zzv.xml":
    case "bfmax_mz_zzv.xml":
    case "bfmaxnm_mz_zzv.xml":
    case "bfmin_mz_zzv.xml":
    case "bfminnm_mz_zzv.xml":
    case "fmax_mz_zzv.xml":
    case "fmaxnm_mz_zzv.xml":
    case "fmin_mz_zzv.xml":
    case "fminnm_mz_zzv.xml":
    case "sqdmulh_mz_zzv.xml":
    case "srshl_mz_zzv.xml":
    case "urshl_mz_zzv.xml":
      return [za, first, { kind: "text", text: `z${fields.Zm ?? 0}.${lane}` }];
    case "add_za_zw.xml":
    case "sub_za_zw.xml":
    case "add_za_zzw.xml":
    case "sub_za_zzw.xml":
    case "smax_mz_zzw.xml":
    case "smin_mz_zzw.xml":
    case "umax_mz_zzw.xml":
    case "umin_mz_zzw.xml":
    case "bfmax_mz_zzw.xml":
    case "bfmaxnm_mz_zzw.xml":
    case "bfmin_mz_zzw.xml":
    case "bfminnm_mz_zzw.xml":
    case "fmax_mz_zzw.xml":
    case "fmaxnm_mz_zzw.xml":
    case "fmin_mz_zzw.xml":
    case "fminnm_mz_zzw.xml":
    case "sqdmulh_mz_zzw.xml":
    case "srshl_mz_zzw.xml":
    case "urshl_mz_zzw.xml":
      return [
        za,
        first,
        { kind: "text", text: smeDotVectorGroupText(smeArithmeticSourceStart(inst, "Zm"), count, lane) },
      ];
    case "fadd_za_zw.xml":
    case "fsub_za_zw.xml":
    case "bfadd_za_zw.xml":
    case "bfsub_za_zw.xml":
      return [za, { kind: "text", text: smeDotVectorGroupText(smeArithmeticSourceStart(inst, "Zm"), count, lane) }];
    case "fmla_za_zzv.xml":
    case "fmls_za_zzv.xml":
    case "bfmla_za_zzv.xml":
    case "bfmls_za_zzv.xml":
      return [za, first, { kind: "text", text: `z${fields.Zm ?? 0}.${lane}` }];
    case "fmla_za_zzi.xml":
    case "fmls_za_zzi.xml":
    case "bfmla_za_zzi.xml":
    case "bfmls_za_zzi.xml":
      return [za, first, { kind: "text", text: smeIndexedSourceText(inst, lane) }];
    case "fmla_za_zzw.xml":
    case "fmls_za_zzw.xml":
    case "bfmla_za_zzw.xml":
    case "bfmls_za_zzw.xml":
      return [
        za,
        first,
        { kind: "text", text: smeDotVectorGroupText(smeArithmeticSourceStart(inst, "Zm"), count, lane) },
      ];
    default:
      return [];
  }
}

function smeOuterProductLane(inst: DecodedInstruction): "h" | "s" | "d" {
  switch (inst.encoding!.className) {
    case "Half-precision":
      return "h";
    case "Single-precision":
      return "s";
    case "Double-precision":
      return "d";
    default:
      return "h";
  }
}

function smeOuterProductOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = smeOuterProductLane(inst);
  return [
    { kind: "text", text: `za${fields.ZAda ?? 0}.${lane}` },
    predReg(fields.Pn ?? 0, "m"),
    predReg(fields.Pm ?? 0, "m"),
    vecReg(fields.Zn ?? 0, lane),
    vecReg(fields.Zm ?? 0, lane),
  ];
}

function smePermutationOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const lane = inst.encoding!.className.includes("128-bit") ? "q" : sveVectorLaneFromSize(fields.size);
  return [
    { kind: "text", text: smeVectorGroupText((fields.Zd ?? 0) * 2, 2, lane) },
    vecReg(fields.Zn ?? 0, lane),
    vecReg(fields.Zm ?? 0, lane),
  ];
}

function smeDotSourceStart(inst: DecodedInstruction, fieldName: "Zn" | "Zm"): number {
  const fields = inst.fields!;
  switch (inst.encoding!.fileName) {
    case "bfdot_za_zzv.xml":
    case "fdot_za_zzv.xml":
    case "fdot_za_z8z8v.xml":
    case "fdot_za32_z8z8v.xml":
    case "sudot_za_zzv.xml":
    case "usdot_za_zzv.xml":
    case "sdot_za32_zzv.xml":
    case "udot_za32_zzv.xml":
    case "sdot_za_zzv.xml":
    case "udot_za_zzv.xml":
      return fields[fieldName] ?? 0;
    case "bfdot_za_zzi.xml":
    case "fdot_za_zzi.xml":
    case "fdot_za_z8z8i.xml":
    case "fdot_za32_z8z8i.xml":
    case "svdot_za_zzi.xml":
    case "svdot_za32_zzi.xml":
    case "sudot_za_zzi.xml":
    case "uvdot_za_zzi.xml":
    case "uvdot_za32_zzi.xml":
    case "usdot_za_zzi.xml":
    case "sdot_za32_zzi.xml":
    case "udot_za32_zzi.xml":
    case "sdot_za_zzi.xml":
    case "udot_za_zzi.xml":
      return fieldName === "Zn" ? (fields.Zn ?? 0) * smeDotGroupCount(inst.encoding!.className) : (fields.Zm ?? 0);
    case "fvdot_za_z8z8i.xml":
    case "fvdotb_za32_z8z8i.xml":
    case "fvdott_za32_z8z8i.xml":
      return fieldName === "Zn" ? (fields.Zn ?? 0) * 2 : (fields.Zm ?? 0);
    case "bfdot_za_zzw.xml":
    case "fdot_za_zzw.xml":
    case "fdot_za_z8z8w.xml":
    case "fdot_za32_z8z8w.xml":
    case "usdot_za_zzw.xml":
    case "sdot_za32_zzw.xml":
    case "udot_za32_zzw.xml":
    case "sdot_za_zzw.xml":
    case "udot_za_zzw.xml":
      return (fields[fieldName] ?? 0) * smeDotGroupCount(inst.encoding!.className);
    default:
      return fields[fieldName] ?? 0;
  }
}

function smeDotOperands(inst: DecodedInstruction): Operand[] {
  const fields = inst.fields!;
  const count =
    inst.encoding!.fileName === "fvdotb_za32_z8z8i.xml" || inst.encoding!.fileName === "fvdott_za32_z8z8i.xml"
      ? 4
      : smeDotGroupCount(inst.encoding!.className);
  const firstCount =
    inst.encoding!.fileName === "fvdot_za_z8z8i.xml" ||
    inst.encoding!.fileName === "fvdotb_za32_z8z8i.xml" ||
    inst.encoding!.fileName === "fvdott_za32_z8z8i.xml"
      ? 2
      : count;
  const accLane = smeDotAccumulatorLane(inst);
  const srcLane = smeDotSourceLane(inst, accLane);
  const za = { kind: "text", text: smeZaText(fields, count, accLane) } satisfies Operand;
  const first = {
    kind: "text",
    text: smeDotVectorGroupText(smeDotSourceStart(inst, "Zn"), firstCount, srcLane),
  } satisfies Operand;

  switch (inst.encoding!.fileName) {
    case "bfdot_za_zzv.xml":
    case "fdot_za_zzv.xml":
    case "fdot_za_z8z8v.xml":
    case "fdot_za32_z8z8v.xml":
    case "sudot_za_zzv.xml":
    case "usdot_za_zzv.xml":
    case "sdot_za32_zzv.xml":
    case "udot_za32_zzv.xml":
    case "sdot_za_zzv.xml":
    case "udot_za_zzv.xml":
      return [za, first, { kind: "text", text: `z${fields.Zm ?? 0}.${srcLane}` }];
    case "bfdot_za_zzi.xml":
    case "fdot_za_zzi.xml":
    case "fdot_za_z8z8i.xml":
    case "fdot_za32_z8z8i.xml":
    case "fvdot_za_z8z8i.xml":
    case "fvdotb_za32_z8z8i.xml":
    case "fvdott_za32_z8z8i.xml":
    case "svdot_za_zzi.xml":
    case "svdot_za32_zzi.xml":
    case "sudot_za_zzi.xml":
    case "uvdot_za_zzi.xml":
    case "uvdot_za32_zzi.xml":
    case "usdot_za_zzi.xml":
    case "sdot_za32_zzi.xml":
    case "udot_za32_zzi.xml":
    case "sdot_za_zzi.xml":
    case "udot_za_zzi.xml":
      return [za, first, { kind: "text", text: smeIndexedSourceText(inst, srcLane) }];
    case "bfdot_za_zzw.xml":
    case "fdot_za_zzw.xml":
    case "fdot_za_z8z8w.xml":
    case "fdot_za32_z8z8w.xml":
    case "usdot_za_zzw.xml":
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

  const schemaOperands = buildSchemaOperands(inst, encoding);
  if (schemaOperands) {
    return schemaOperands;
  }

  if (isSveFaultTolerantLoadFile(encoding.fileName)) {
    return sveFaultTolerantLoadOperands(inst);
  }

  if (isSveContiguousMemoryFile(encoding.fileName)) {
    return sveContiguousByteMemoryOperands(inst);
  }

  switch (encoding.fileName) {
    case "madd.xml":
    case "msub.xml":
    case "maddpt.xml":
    case "msubpt.xml":
      return threeSourceIntegerOperands(inst);
    case "clz_int.xml":
    case "rbit_int.xml":
    case "rev16_int.xml":
    case "rev32_int.xml":
    case "cls_int.xml":
    case "abs.xml":
    case "cnt.xml":
    case "ctz.xml":
      return oneSourceIntegerOperands(inst);
    case "mul_madd.xml":
      return mulAliasOperands(inst);
    case "mneg_msub.xml":
    case "udiv.xml":
    case "sdiv.xml":
      return twoSourceIntegerOperands(inst);
    case "crc32.xml":
    case "crc32c.xml":
      return crc32Operands(inst);
    case "smaddl.xml":
    case "smsubl.xml":
    case "umaddl.xml":
    case "umsubl.xml":
      return scalarMultiplyLongOperands(inst);
    case "smull_smaddl.xml":
    case "smnegl_smsubl.xml":
    case "umull_umaddl.xml":
    case "umnegl_umsubl.xml":
      return scalarMultiplyLongAliasOperands(inst);
    case "smulh.xml":
    case "umulh.xml":
      return multiplyHighOperands(inst);
    case "mrs.xml":
    case "msr_reg.xml":
      return systemMoveOperands(inst, encoding.mnemonic);
    case "mrrs.xml":
    case "msrr.xml":
      return systemMove128Operands(inst, encoding.mnemonic);
    case "dmb.xml":
    case "dsb.xml":
      return barrierOperands(inst);
    case "clrex.xml":
      return clrexOperands(inst);
    case "isb.xml":
      return isbOperands(inst);
    case "svc.xml":
    case "hvc.xml":
    case "smc.xml":
    case "brk.xml":
    case "hlt.xml":
    case "dcps1.xml":
    case "dcps2.xml":
    case "dcps3.xml":
      return exceptionImmediateOperands(inst);
    case "at_sys.xml":
      return systemInstructionAliasOperands(inst, AT_SYSTEM_ALIASES);
    case "dc_sys.xml":
      return systemInstructionAliasOperands(inst, DC_SYSTEM_ALIASES);
    case "tlbi_sys.xml":
      return systemInstructionAliasOperands(inst, TLBI_SYSTEM_ALIASES);
    case "msr_imm.xml":
      return msrImmediateOperands(inst);
    case "smstart_msr_imm.xml":
    case "smstop_msr_imm.xml":
      return smstartSmstopOperands(inst);
    case "sysl.xml":
      return syslOperands(inst);
    case "sys.xml":
      return rawSysOperands(inst);
    case "cfp_sys.xml":
    case "dvp_sys.xml":
    case "cpp_sys.xml":
    case "cosp_sys.xml":
      return specResContextOperands(inst);
    case "chkfeat.xml":
      return chkfeatOperands();
    case "gcsss2_sysl.xml":
    case "gcspopm_sysl.xml":
    case "gcsss1_sys.xml":
    case "gcspushm_sys.xml":
      return gcsSyslAliasOperands(inst);
    case "gcsb.xml":
      return gcsbOperands();
    case "ldapr.xml":
      return ldaprOperands(inst);
    case "ldiapp.xml":
      return ldiappOperands(inst);
    case "ldapursb.xml":
    case "ldapursh.xml":
    case "ldapur_gen.xml":
    case "ldapurb.xml":
    case "ldapurh.xml":
    case "ldapursw.xml":
    case "stlur_gen.xml":
    case "stlurb.xml":
    case "stlurh.xml":
    case "stlur_fpsimd.xml":
    case "ldapur_fpsimd.xml":
      return rcpcUnscaledOperands(inst);
    case "stlr.xml":
    case "stlrb.xml":
    case "stlrh.xml":
      return stlrOperands(inst);
    case "stilp.xml":
      return stilpOperands(inst);
    case "movprfx_z_z.xml":
      return sveMovprfxOperands(inst);
    case "movprfx_z_p_z.xml":
      return svePredicatedMovprfxOperands(inst);
    case "fcpy_z_p_i.xml":
      return sveFcpyOperands(inst);
    case "fdup_z_i.xml":
      return sveFdupOperands(inst);
    case "fcmp_float.xml":
    case "fcmpe_float.xml":
      return scalarFpCompareOperands(inst);
    case "fccmp_float.xml":
    case "fccmpe_float.xml":
      return scalarFpConditionalCompareOperands(inst);
    case "fcsel_float.xml":
      return scalarFpConditionalSelectOperands(inst);
    case "fcvt_float.xml":
      return scalarFpConvertPrecisionOperands(inst);
    case "fmov_float.xml":
    case "fabs_float.xml":
    case "fneg_float.xml":
    case "fsqrt_float.xml":
    case "frintn_float.xml":
    case "frintp_float.xml":
    case "frintm_float.xml":
    case "frintz_float.xml":
    case "frinta_float.xml":
    case "frintx_float.xml":
    case "frinti_float.xml":
      return scalarFpUnaryOperands(inst);
    case "fmov_float_gen.xml":
      return scalarFpMoveGeneralOperands(inst);
    case "fmov_float_imm.xml":
      return scalarFpMoveImmediateOperands(inst);
    case "frint32z_float.xml":
    case "frint64z_float.xml":
    case "frint32x_float.xml":
    case "frint64x_float.xml":
      return scalarFpUnaryOperands(inst);
    case "fcvtns_float.xml":
    case "fcvtnu_float.xml":
    case "fcvtas_float.xml":
    case "fcvtau_float.xml":
    case "fcvtps_float.xml":
    case "fcvtpu_float.xml":
    case "fcvtms_float.xml":
    case "fcvtmu_float.xml":
    case "fcvtzs_float_int.xml":
    case "fcvtzu_float_int.xml":
      return scalarFpToIntegerOperands(inst);
    case "fcvtzs_float_fix.xml":
    case "fcvtzu_float_fix.xml":
      return scalarFpToIntegerOperands(inst, true);
    case "scvtf_float_int.xml":
    case "ucvtf_float_int.xml":
      return scalarIntegerToFpOperands(inst);
    case "scvtf_float_fix.xml":
    case "ucvtf_float_fix.xml":
      return scalarIntegerToFpOperands(inst, true);
    case "fmul_float.xml":
    case "fdiv_float.xml":
    case "fadd_float.xml":
    case "fsub_float.xml":
    case "fmax_float.xml":
    case "fmin_float.xml":
    case "fmaxnm_float.xml":
    case "fminnm_float.xml":
    case "fnmul_float.xml":
      return scalarFpBinaryOperands(inst);
    case "fmadd_float.xml":
    case "fmsub_float.xml":
    case "fnmadd_float.xml":
    case "fnmsub_float.xml":
      return scalarFpTernaryOperands(inst);
    case "and_log_shift.xml":
      return logicalShiftedRegisterOperands(inst);
    case "mov_orr_log_shift.xml":
      return movRegisterAliasOperands(inst);
    case "bic_log_shift.xml":
    case "orr_log_shift.xml":
    case "orn_log_shift.xml":
    case "ands_log_shift.xml":
    case "bics.xml":
    case "tst_ands_log_shift.xml":
      return logicalShiftedRegisterOperands(inst);
    case "and_log_imm.xml":
    case "ands_log_imm.xml":
    case "tst_ands_log_imm.xml":
    case "orr_log_imm.xml":
    case "eor_log_imm.xml":
    case "mov_orr_log_imm.xml":
      return logicalImmediateOperands(inst);
    case "ldr_imm_gen.xml":
    case "str_imm_gen.xml":
    case "ldur_gen.xml":
    case "stur_gen.xml":
    case "ldur_fpsimd.xml":
    case "stur_fpsimd.xml":
    case "ldrb_imm.xml":
    case "ldurb.xml":
    case "ldtrb.xml":
    case "ldrh_imm.xml":
    case "ldurh.xml":
    case "ldtrh.xml":
    case "strb_imm.xml":
    case "sturb.xml":
    case "sttrb.xml":
    case "strh_imm.xml":
    case "sturh.xml":
    case "sttrh.xml":
    case "ldr_reg_gen.xml":
    case "ldrsw_reg.xml":
    case "str_reg_gen.xml":
    case "strb_reg.xml":
    case "strh_reg.xml":
    case "ldrb_reg.xml":
    case "ldrh_reg.xml":
    case "ldrsb_reg.xml":
    case "ldrsh_reg.xml":
    case "ldr_imm_fpsimd.xml":
    case "str_imm_fpsimd.xml":
    case "ldr_reg_fpsimd.xml":
    case "str_reg_fpsimd.xml":
    case "ldrsb_imm.xml":
    case "ldrsh_imm.xml":
    case "ldrsw_imm.xml":
    case "ldursb.xml":
    case "ldursh.xml":
    case "ldursw.xml":
    case "ldtr.xml":
    case "sttr.xml":
    case "ldtrsb.xml":
    case "ldtrsh.xml":
    case "ldtrsw.xml":
    case "prfm_reg.xml":
    case "prfm_imm.xml":
    case "prfum.xml":
      return scalarLoadStoreOperands(inst);
    case "stxr.xml":
    case "stxrb.xml":
    case "stxrh.xml":
    case "stlxr.xml":
    case "stlxrb.xml":
    case "stlxrh.xml":
      return storeExclusiveOperands(inst);
    case "ldxr.xml":
    case "ldxrb.xml":
    case "ldxrh.xml":
    case "ldaxr.xml":
    case "ldaxrb.xml":
    case "ldaxrh.xml":
    case "ldar.xml":
    case "ldarb.xml":
    case "ldarh.xml":
      return loadExclusiveOperands(inst);
    case "stxp.xml":
    case "ldxp.xml":
    case "ldaxp.xml":
      return exclusivePairOperands(inst);
    case "ldr_lit_gen.xml":
      return ldrLiteralOperands(inst);
    case "stnp_gen.xml":
      return pairLoadStoreOperands(inst);
    case "csel.xml":
    case "cinc_csinc.xml":
    case "cinv_csinv.xml":
    case "cneg_csneg.xml":
    case "cset_csinc.xml":
    case "csetm_csinv.xml":
      return conditionalSelectOperands(inst);
    case "ccmp_imm.xml":
    case "ccmn_imm.xml":
      return conditionalCompareImmediateOperands(inst);
    case "ccmp_reg.xml":
    case "ccmn_reg.xml":
      return conditionalCompareRegisterOperands(inst);
    case "smax_reg.xml":
    case "smin_reg.xml":
    case "umax_reg.xml":
    case "umin_reg.xml":
      return twoSourceIntegerOperands(inst);
    case "smax_imm.xml":
    case "smin_imm.xml":
    case "umax_imm.xml":
    case "umin_imm.xml":
      return minMaxImmediateOperands(inst);
    case "bfm.xml":
    case "bfi_bfm.xml":
    case "bfc_bfm.xml":
    case "bfxil_bfm.xml":
    case "sbfm.xml":
    case "asr_sbfm.xml":
    case "sbfiz_sbfm.xml":
    case "sbfx_sbfm.xml":
    case "sxtb_sbfm.xml":
    case "sxth_sbfm.xml":
    case "sxtw_sbfm.xml":
    case "ubfm.xml":
    case "lsl_ubfm.xml":
    case "lsr_ubfm.xml":
    case "ubfiz_ubfm.xml":
    case "ubfx_ubfm.xml":
    case "uxtb_ubfm.xml":
    case "uxth_ubfm.xml":
      return bitfieldImmediateOperands(inst);
    case "ldp_gen.xml":
    case "stp_gen.xml":
    case "ldnp_gen.xml":
    case "ldp_fpsimd.xml":
    case "ldnp_fpsimd.xml":
    case "stp_fpsimd.xml":
    case "stnp_fpsimd.xml":
    case "ldpsw.xml":
      return pairLoadStoreOperands(inst);
    case "stlxp.xml":
      return stlxpOperands(inst);
    case "dup_z_zi.xml":
      return sveDupIndexedOperands(inst);
    case "dup_z_i.xml":
      return sveDupImmediateOperands(inst);
    case "pmov_p_zi.xml":
      return svePmovPredicateOperands(inst);
    case "pmov_z_pi.xml":
      return svePmovVectorOperands(inst);
    case "pext_pn_rr.xml":
    case "pext_pp_rr.xml":
      return svePextOperands(inst);
    case "cpy_z_o_i.xml":
      return sveCopyImmediateOperands(inst);
    case "cpy_z_p_i.xml":
      return sveCopyMergingImmediateOperands(inst);
    case "cpy_z_p_r.xml":
      return sveCopyScalarOperands(inst);
    case "cpy_z_p_v.xml":
      return sveCopyScalarVectorOperands(inst);
    case "extr.xml":
      return extractRegisterOperands(inst);
    case "bti.xml":
      return btiOperands(inst);
    case "hint.xml":
      return hintOperands(inst);
    case "setf.xml":
      return setfOperands(inst);
    case "rmif.xml":
      return rmifOperands(inst);
    case "nop.xml":
    case "yield.xml":
    case "wfe.xml":
    case "wfi.xml":
    case "sev.xml":
    case "sevl.xml":
    case "cfinv.xml":
    case "xaflag.xml":
    case "axflag.xml":
    case "dgh.xml":
    case "esb.xml":
    case "csdb.xml":
    case "ssbb_dsb.xml":
    case "pssbb_dsb.xml":
    case "sb.xml":
    case "eret.xml":
    case "drps.xml":
      return noOperands();
    case "rev.xml":
      return oneSourceIntegerOperands(inst);
    case "lsl_lslv.xml":
    case "lsr_lsrv.xml":
    case "asr_asrv.xml":
    case "ror_rorv.xml":
      return twoSourceIntegerOperands(inst);
    case "sqrdmlah_advsimd_vec.xml":
    case "sqrdmlah_advsimd_elt.xml":
    case "sqrdmlsh_advsimd_vec.xml":
    case "sqrdmlsh_advsimd_elt.xml":
    case "sqdmulh_advsimd_vec.xml":
    case "sqrdmulh_advsimd_vec.xml":
      return advsimdSaturatingRoundingDoublingMultiplyOperands(inst);
    case "mla_advsimd_elt.xml":
    case "mls_advsimd_elt.xml":
    case "mul_advsimd_elt.xml":
    case "fmla_advsimd_elt.xml":
    case "fmls_advsimd_elt.xml":
    case "fmul_advsimd_elt.xml":
    case "fmulx_advsimd_elt.xml":
      return advsimdByElementMultiplyAccumulateOperands(inst);
    case "smull_advsimd_elt.xml":
    case "umull_advsimd_elt.xml":
    case "sqdmull_advsimd_elt.xml":
      return advsimdByElementLongOperands(inst);
    case "sqdmulh_advsimd_elt.xml":
    case "sqrdmulh_advsimd_elt.xml":
      return advsimdSaturatingRoundingDoublingMultiplyOperands(inst);
    case "fcmla_advsimd_vec.xml":
    case "fcadd_advsimd_vec.xml":
      return advsimdComplexVectorOperands(inst);
    case "fcmla_advsimd_elt.xml":
      return advsimdComplexByElementOperands(inst);
    case "smlal_advsimd_elt.xml":
    case "smlsl_advsimd_elt.xml":
    case "sqdmlal_advsimd_elt.xml":
    case "umlal_advsimd_elt.xml":
    case "umlsl_advsimd_elt.xml":
    case "sqdmlsl_advsimd_elt.xml":
      return advsimdByElementLongOperands(inst);
    case "fmlal_advsimd_vec.xml":
    case "fmlsl_advsimd_vec.xml":
    case "fmlal_advsimd_elt.xml":
    case "fmlsl_advsimd_elt.xml":
      return advsimdFpLongMultiplyAccumulateOperands(inst);
    case "fmaxp_advsimd_pair.xml":
    case "fminp_advsimd_pair.xml":
    case "fmaxnmp_advsimd_pair.xml":
    case "fminnmp_advsimd_pair.xml":
    case "faddp_advsimd_vec.xml":
    case "faddp_advsimd_pair.xml":
    case "fmaxp_advsimd_vec.xml":
    case "fminp_advsimd_vec.xml":
    case "fmaxnmp_advsimd_vec.xml":
    case "fminnmp_advsimd_vec.xml":
      return advsimdFloatingPairwiseOperands(inst);
    case "addp_advsimd_vec.xml":
    case "addp_advsimd_pair.xml":
      return advsimdIntegerPairwiseOperands(inst);
    case "aese_advsimd.xml":
    case "aesd_advsimd.xml":
    case "aesmc_advsimd.xml":
    case "aesimc_advsimd.xml":
      return advsimdCryptoBinaryOperands(inst);
    case "fscale_advsimd.xml":
    case "add_advsimd.xml":
    case "sub_advsimd.xml":
    case "fadd_advsimd.xml":
    case "fsub_advsimd.xml":
    case "shadd_advsimd.xml":
    case "uhadd_advsimd.xml":
    case "shsub_advsimd.xml":
    case "uhsub_advsimd.xml":
    case "srhadd_advsimd.xml":
    case "urhadd_advsimd.xml":
    case "smaxp_advsimd.xml":
    case "sminp_advsimd.xml":
    case "umaxp_advsimd.xml":
    case "uminp_advsimd.xml":
    case "smax_advsimd.xml":
    case "smin_advsimd.xml":
    case "umax_advsimd.xml":
    case "umin_advsimd.xml":
    case "fmax_advsimd.xml":
    case "fmin_advsimd.xml":
    case "fmaxnm_advsimd.xml":
    case "fminnm_advsimd.xml":
    case "fabd_advsimd.xml":
    case "frecps_advsimd.xml":
    case "frsqrts_advsimd.xml":
    case "saba_advsimd.xml":
    case "uaba_advsimd.xml":
    case "sabd_advsimd.xml":
    case "uabd_advsimd.xml":
    case "sqadd_advsimd.xml":
    case "uqadd_advsimd.xml":
    case "sqsub_advsimd.xml":
    case "uqsub_advsimd.xml":
    case "mul_advsimd_vec.xml":
    case "mla_advsimd_vec.xml":
    case "mls_advsimd_vec.xml":
    case "fmul_advsimd_vec.xml":
    case "fdiv_advsimd.xml":
    case "pmul_advsimd.xml":
    case "fmulx_advsimd_vec.xml":
    case "fmla_advsimd_vec.xml":
    case "fmls_advsimd_vec.xml":
    case "and_advsimd.xml":
    case "eor_advsimd.xml":
    case "bit_advsimd.xml":
    case "bif_advsimd.xml":
    case "bsl_advsimd.xml":
    case "orn_advsimd.xml":
    case "bic_advsimd_reg.xml":
    case "sshl_advsimd.xml":
    case "ushl_advsimd.xml":
    case "srshl_advsimd.xml":
    case "urshl_advsimd.xml":
    case "sqshl_advsimd_reg.xml":
    case "uqshl_advsimd_reg.xml":
    case "sqrshl_advsimd.xml":
    case "uqrshl_advsimd.xml":
      return advsimdScalarOrVectorThreeSameOperands(inst);
    case "bfmmla_advsimd.xml":
    case "bfmlal_advsimd_vec.xml":
    case "bfmlal_advsimd_elt.xml":
      return advsimdBfloat16MultiplyAccumulateOperands(inst);
    case "smmla_advsimd_vec.xml":
    case "ummla_advsimd_vec.xml":
    case "usmmla_advsimd_vec.xml":
      return advsimdMatrixMultiplyAccumulateOperands(inst);
    case "sdot_advsimd_vec.xml":
    case "sdot_advsimd_elt.xml":
    case "sudot_advsimd_elt.xml":
    case "udot_advsimd_vec.xml":
    case "udot_advsimd_elt.xml":
    case "usdot_advsimd_vec.xml":
    case "usdot_advsimd_elt.xml":
    case "bfdot_advsimd_vec.xml":
    case "bfdot_advsimd_elt.xml":
      return advsimdDotProductOperands(inst);
    case "cmeq_advsimd_reg.xml":
    case "cmeq_advsimd_zero.xml":
    case "cmge_advsimd_reg.xml":
    case "cmge_advsimd_zero.xml":
    case "cmgt_advsimd_reg.xml":
    case "cmgt_advsimd_zero.xml":
    case "cmhi_advsimd.xml":
    case "cmhs_advsimd.xml":
    case "cmtst_advsimd.xml":
    case "cmle_advsimd.xml":
    case "cmlt_advsimd.xml":
    case "fcmeq_advsimd_reg.xml":
    case "fcmeq_advsimd_zero.xml":
    case "fcmge_advsimd_reg.xml":
    case "fcmge_advsimd_zero.xml":
    case "fcmgt_advsimd_reg.xml":
    case "fcmgt_advsimd_zero.xml":
    case "fcmle_advsimd.xml":
    case "fcmlt_advsimd.xml":
    case "facge_advsimd.xml":
    case "facgt_advsimd.xml":
      return advsimdCompareOperands(inst);
    case "sha1h_advsimd.xml":
      return advsimdCryptoSha1HashOperands(inst);
    case "sha1su1_advsimd.xml":
    case "sha256su0_advsimd.xml":
      return advsimdCryptoVector4sBinaryOperands(inst);
    case "sha1c_advsimd.xml":
    case "sha1p_advsimd.xml":
    case "sha1m_advsimd.xml":
      return advsimdCryptoSha1ThreeRegOperands(inst);
    case "sha1su0_advsimd.xml":
    case "sha256su1_advsimd.xml":
      return advsimdCryptoVector4sThreeRegOperands(inst);
    case "sha256h_advsimd.xml":
    case "sha256h2_advsimd.xml":
      return advsimdCryptoSha256HashOperands(inst);
    case "suqadd_advsimd.xml":
    case "usqadd_advsimd.xml":
    case "sqabs_advsimd.xml":
    case "sqneg_advsimd.xml":
    case "abs_advsimd.xml":
    case "neg_advsimd.xml":
    case "rev64_advsimd.xml":
    case "rev32_advsimd.xml":
    case "rev16_advsimd.xml":
    case "cls_advsimd.xml":
    case "clz_advsimd.xml":
    case "cnt_advsimd.xml":
    case "mvn_not_advsimd.xml":
    case "rbit_advsimd.xml":
    case "fabs_advsimd.xml":
    case "fneg_advsimd.xml":
    case "urecpe_advsimd.xml":
    case "ursqrte_advsimd.xml":
    case "frecpe_advsimd.xml":
    case "frecpx_advsimd.xml":
    case "frsqrte_advsimd.xml":
    case "fsqrt_advsimd.xml":
    case "frintn_advsimd.xml":
    case "frinta_advsimd.xml":
    case "frintp_advsimd.xml":
    case "frintm_advsimd.xml":
    case "frintx_advsimd.xml":
    case "frintz_advsimd.xml":
    case "frinti_advsimd.xml":
    case "frint32z_advsimd.xml":
    case "frint64z_advsimd.xml":
    case "frint32x_advsimd.xml":
    case "frint64x_advsimd.xml":
    case "fcvtas_advsimd.xml":
    case "fcvtau_advsimd.xml":
    case "fcvtps_advsimd.xml":
    case "fcvtpu_advsimd.xml":
    case "fcvtms_advsimd.xml":
    case "fcvtmu_advsimd.xml":
    case "fcvtnu_advsimd.xml":
    case "scvtf_advsimd_int.xml":
    case "ucvtf_advsimd_int.xml":
    case "fcvtzs_advsimd_int.xml":
    case "fcvtzu_advsimd_int.xml":
    case "fcvtns_advsimd.xml":
      return advsimdUnaryOperands(inst);
    case "fcvtn_advsimd.xml":
      return advsimdFloatingConvertNarrowOperands(inst);
    case "fcvtl_advsimd.xml":
      return advsimdFloatingConvertLongOperands(inst);
    case "scvtf_advsimd_fix.xml":
    case "ucvtf_advsimd_fix.xml":
    case "fcvtzs_advsimd_fix.xml":
    case "fcvtzu_advsimd_fix.xml":
      return advsimdUnaryWithImmediateOperands(inst);
    case "f12cvtl_advsimd.xml":
    case "bf12cvtl_advsimd.xml":
      return advsimdFp8ConvertLongOperands(inst);
    case "uzp1_advsimd.xml":
    case "uzp2_advsimd.xml":
    case "trn1_advsimd.xml":
    case "trn2_advsimd.xml":
    case "zip1_advsimd.xml":
    case "zip2_advsimd.xml":
      return advsimdThreeSameOperands(inst);
    case "tbl_advsimd.xml":
    case "tbx_advsimd.xml":
      return advsimdTableLookupOperands(inst);
    case "xtn_advsimd.xml":
    case "fcvtxn_advsimd.xml":
    case "bfcvtn_advsimd.xml":
    case "sqxtun_advsimd.xml":
    case "sqxtn_advsimd.xml":
    case "uqxtn_advsimd.xml":
      return advsimdNarrowOperands(inst);
    case "fcvtn_advsimd_168.xml":
    case "fcvtn_advsimd_328.xml":
      return advsimdFp8NarrowPairOperands(inst);
    case "shll_advsimd.xml":
    case "sshll_advsimd.xml":
    case "ushll_advsimd.xml":
      return advsimdShiftLeftLongOperands(inst);
    case "sxtl_sshll_advsimd.xml":
    case "uxtl_ushll_advsimd.xml":
      return advsimdExtendLongOperands(inst);
    case "saddlp_advsimd.xml":
    case "uaddlp_advsimd.xml":
    case "sadalp_advsimd.xml":
    case "uadalp_advsimd.xml":
      return advsimdPairwiseLongOperands(inst);
    case "saddlv_advsimd.xml":
    case "uaddlv_advsimd.xml":
    case "smaxv_advsimd.xml":
    case "sminv_advsimd.xml":
    case "umaxv_advsimd.xml":
    case "uminv_advsimd.xml":
    case "addv_advsimd.xml":
    case "fmaxnmv_advsimd.xml":
    case "fminnmv_advsimd.xml":
    case "fmaxv_advsimd.xml":
    case "fminv_advsimd.xml":
      return advsimdAcrossLaneOperands(inst);
    case "saddl_advsimd.xml":
    case "uaddl_advsimd.xml":
    case "ssubl_advsimd.xml":
    case "usubl_advsimd.xml":
    case "smull_advsimd_vec.xml":
    case "umull_advsimd_vec.xml":
    case "sabal_advsimd.xml":
    case "uabal_advsimd.xml":
    case "sabdl_advsimd.xml":
    case "uabdl_advsimd.xml":
    case "smlal_advsimd_vec.xml":
    case "umlal_advsimd_vec.xml":
    case "smlsl_advsimd_vec.xml":
    case "umlsl_advsimd_vec.xml":
    case "sqdmull_advsimd_vec.xml":
    case "sqdmlal_advsimd_vec.xml":
    case "sqdmlsl_advsimd_vec.xml":
      return advsimdWideningThreeRegOperands(inst);
    case "saddw_advsimd.xml":
    case "uaddw_advsimd.xml":
    case "ssubw_advsimd.xml":
    case "usubw_advsimd.xml":
      return advsimdWideThreeRegOperands(inst);
    case "sshr_advsimd.xml":
    case "ushr_advsimd.xml":
    case "ssra_advsimd.xml":
    case "usra_advsimd.xml":
    case "srshr_advsimd.xml":
    case "urshr_advsimd.xml":
    case "srsra_advsimd.xml":
    case "ursra_advsimd.xml":
    case "sri_advsimd.xml":
    case "sli_advsimd.xml":
    case "shl_advsimd.xml":
    case "sqshlu_advsimd.xml":
    case "sqshl_advsimd_imm.xml":
    case "uqshl_advsimd_imm.xml":
      return advsimdImmediateShiftOperands(inst);
    case "shrn_advsimd.xml":
    case "rshrn_advsimd.xml":
    case "addhn_advsimd.xml":
    case "raddhn_advsimd.xml":
      return advsimdHighNarrowThreeRegOperands(inst);
    case "sqshrn_advsimd.xml":
    case "uqshrn_advsimd.xml":
    case "sqrshrn_advsimd.xml":
    case "uqrshrn_advsimd.xml":
    case "sqshrun_advsimd.xml":
    case "sqrshrun_advsimd.xml":
      return advsimdNarrowingImmediateShiftOperands(inst);
    case "movi_advsimd.xml":
    case "mvni_advsimd.xml":
    case "bic_advsimd_imm.xml":
    case "orr_advsimd_imm.xml":
    case "fmov_advsimd.xml":
      return advsimdMoveImmediateOperands(inst);
    case "mov_orr_advsimd_reg.xml":
      return advsimdMoveRegisterAliasOperands(inst);
    case "ins_advsimd_gen.xml":
      return advsimdCopyGeneralToElementOperands(inst);
    case "ins_advsimd_elt.xml":
      return advsimdCopyElementToElementOperands(inst);
    case "smov_advsimd.xml":
    case "umov_advsimd.xml":
    case "mov_umov_advsimd.xml":
      return advsimdCopyElementToGeneralOperands(inst);
    case "dup_advsimd_elt.xml":
      return advsimdScalarDuplicateElementOperands(inst);
    case "ext_advsimd.xml":
      return advsimdExtractOperands(inst);
    case "ld1r_advsimd.xml":
    case "ld2r_advsimd.xml":
    case "ld3r_advsimd.xml":
    case "ld4r_advsimd.xml":
    case "ld1_advsimd_sngl.xml":
    case "ld2_advsimd_sngl.xml":
    case "ld3_advsimd_sngl.xml":
    case "ld4_advsimd_sngl.xml":
    case "st1_advsimd_sngl.xml":
    case "st2_advsimd_sngl.xml":
    case "st3_advsimd_sngl.xml":
    case "st4_advsimd_sngl.xml":
    case "stl1_advsimd_sngl.xml":
    case "ldap1_advsimd_sngl.xml":
      return advsimdSingleStructureOperands(inst);
    case "ld1_advsimd_mult.xml":
    case "ld2_advsimd_mult.xml":
    case "ld3_advsimd_mult.xml":
    case "ld4_advsimd_mult.xml":
    case "st1_advsimd_mult.xml":
    case "st2_advsimd_mult.xml":
    case "st3_advsimd_mult.xml":
    case "st4_advsimd_mult.xml":
      return advsimdMultipleStructureOperands(inst);
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
    case "fcvt_mz2_z.xml":
    case "fcvtl_mz2_z.xml":
      return smeWideningFloatConvertOperands(inst);
    case "zero_za_i.xml":
      return smeZeroBaseOperands(inst);
    case "zero_za1_ri.xml":
      return smeZeroSingleVectorOperands(inst);
    case "zero_za2_ri.xml":
      return smeZeroGroupedOperands(inst, 2);
    case "zero_za4_ri.xml":
      return smeZeroGroupedOperands(inst, 4);
    case "ld1b_za_p_rrr.xml":
    case "ld1h_za_p_rrr.xml":
    case "ld1w_za_p_rrr.xml":
    case "ld1d_za_p_rrr.xml":
    case "ld1q_za_p_rrr.xml":
    case "st1b_za_p_rrr.xml":
    case "st1h_za_p_rrr.xml":
    case "st1w_za_p_rrr.xml":
    case "st1d_za_p_rrr.xml":
    case "st1q_za_p_rrr.xml":
      return smeZaTileSliceOperands(inst);
    case "add_za_zzv.xml":
    case "sub_za_zzv.xml":
    case "smax_mz_zzv.xml":
    case "smin_mz_zzv.xml":
    case "umax_mz_zzv.xml":
    case "umin_mz_zzv.xml":
    case "bfmax_mz_zzv.xml":
    case "bfmaxnm_mz_zzv.xml":
    case "bfmin_mz_zzv.xml":
    case "bfminnm_mz_zzv.xml":
    case "fmax_mz_zzv.xml":
    case "fmaxnm_mz_zzv.xml":
    case "fmin_mz_zzv.xml":
    case "fminnm_mz_zzv.xml":
    case "sqdmulh_mz_zzv.xml":
    case "srshl_mz_zzv.xml":
    case "urshl_mz_zzv.xml":
    case "add_za_zw.xml":
    case "sub_za_zw.xml":
    case "add_za_zzw.xml":
    case "sub_za_zzw.xml":
    case "smax_mz_zzw.xml":
    case "smin_mz_zzw.xml":
    case "umax_mz_zzw.xml":
    case "umin_mz_zzw.xml":
    case "bfmax_mz_zzw.xml":
    case "bfmaxnm_mz_zzw.xml":
    case "bfmin_mz_zzw.xml":
    case "bfminnm_mz_zzw.xml":
    case "fmax_mz_zzw.xml":
    case "fmaxnm_mz_zzw.xml":
    case "fmin_mz_zzw.xml":
    case "fminnm_mz_zzw.xml":
    case "sqdmulh_mz_zzw.xml":
    case "srshl_mz_zzw.xml":
    case "urshl_mz_zzw.xml":
    case "fadd_za_zw.xml":
    case "fsub_za_zw.xml":
    case "bfadd_za_zw.xml":
    case "bfsub_za_zw.xml":
    case "fmla_za_zzv.xml":
    case "fmla_za_zzi.xml":
    case "fmla_za_zzw.xml":
    case "fmls_za_zzv.xml":
    case "fmls_za_zzi.xml":
    case "fmls_za_zzw.xml":
    case "bfmla_za_zzv.xml":
    case "bfmla_za_zzi.xml":
    case "bfmla_za_zzw.xml":
    case "bfmls_za_zzv.xml":
    case "bfmls_za_zzi.xml":
    case "bfmls_za_zzw.xml":
      return smeArithmeticOperands(inst);
    case "fmopa_za_pp_zz.xml":
    case "fmops_za_pp_zz.xml":
      return smeOuterProductOperands(inst);
    case "zip_mz_zz.xml":
    case "uzp_mz_zz.xml":
      return smePermutationOperands(inst);
    case "luti2_mz2_ztz.xml":
    case "luti4_mz2_ztz.xml":
      return smeLutiOperands(inst, 2);
    case "luti2_mz4_ztz.xml":
    case "luti4_mz4_ztz.xml":
      return smeLutiOperands(inst, 4);
    case "smlall_za_zzi.xml":
    case "smlall_za_zzv.xml":
    case "smlall_za_zzw.xml":
    case "smlal_za_zzi.xml":
    case "smlal_za_zzv.xml":
    case "smlal_za_zzw.xml":
    case "smlsl_za_zzi.xml":
    case "smlsl_za_zzv.xml":
    case "smlsl_za_zzw.xml":
    case "smlsll_za_zzi.xml":
    case "smlsll_za_zzv.xml":
    case "smlsll_za_zzw.xml":
    case "umlal_za_zzi.xml":
    case "umlal_za_zzv.xml":
    case "umlal_za_zzw.xml":
    case "umlall_za_zzi.xml":
    case "umlall_za_zzv.xml":
    case "umlall_za_zzw.xml":
    case "umlsl_za_zzi.xml":
    case "umlsl_za_zzv.xml":
    case "umlsl_za_zzw.xml":
    case "umlsll_za_zzi.xml":
    case "umlsll_za_zzv.xml":
    case "umlsll_za_zzw.xml":
    case "sumlall_za_zzi.xml":
    case "sumlall_za_zzv.xml":
    case "usmlall_za_zzi.xml":
    case "usmlall_za_zzv.xml":
    case "usmlall_za_zzw.xml":
      return smeLongArithmeticOperands(inst);
    case "bfmlal_za_zzi.xml":
    case "bfmlal_za_zzv.xml":
    case "bfmlal_za_zzw.xml":
    case "bfmlsl_za_zzi.xml":
    case "bfmlsl_za_zzv.xml":
    case "bfmlsl_za_zzw.xml":
    case "fmlal_za_zzi.xml":
    case "fmlal_za_zzv.xml":
    case "fmlal_za_zzw.xml":
    case "fmlsl_za_zzi.xml":
    case "fmlsl_za_zzv.xml":
    case "fmlsl_za_zzw.xml":
      return smeFloatLongArithmeticOperands(inst);
    case "fmlal_za_z8z8i.xml":
    case "fmlal_za_z8z8v.xml":
    case "fmlal_za_z8z8w.xml":
    case "fmlall_za32_z8z8i.xml":
    case "fmlall_za32_z8z8v.xml":
    case "fmlall_za32_z8z8w.xml":
      return smeFp8LongArithmeticOperands(inst);
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
    case "bfdot_za_zzv.xml":
    case "bfdot_za_zzi.xml":
    case "bfdot_za_zzw.xml":
    case "fdot_za_zzv.xml":
    case "fdot_za_zzi.xml":
    case "fdot_za_zzw.xml":
    case "fdot_za_z8z8v.xml":
    case "fdot_za_z8z8i.xml":
    case "fdot_za_z8z8w.xml":
    case "fdot_za32_z8z8v.xml":
    case "fdot_za32_z8z8i.xml":
    case "fdot_za32_z8z8w.xml":
    case "fvdot_za_z8z8i.xml":
    case "fvdotb_za32_z8z8i.xml":
    case "fvdott_za32_z8z8i.xml":
    case "svdot_za_zzi.xml":
    case "svdot_za32_zzi.xml":
    case "sudot_za_zzv.xml":
    case "sudot_za_zzi.xml":
    case "uvdot_za_zzi.xml":
    case "uvdot_za32_zzi.xml":
    case "usdot_za_zzv.xml":
    case "usdot_za_zzi.xml":
    case "usdot_za_zzw.xml":
      return smeDotOperands(inst);
    case "cmpeq_p_p_zi.xml":
      return sveCompareImmediateOperands(inst);
    case "fcmeq_p_p_z0.xml":
      return sveFloatingCompareImmediateOperands(inst);
    case "cmpeq_p_p_zz.xml":
    case "fcmeq_p_p_zz.xml":
    case "facge_p_p_zz.xml":
      return sveCompareVectorOperands(inst);
    case "cmpeq_p_p_zw.xml":
      return sveCompareWideVectorOperands(inst);
    case "ptrue_p_s.xml":
    case "ptrues_p_s.xml":
      return svePtrueOperands(inst);
    case "ptrue_pn_i.xml":
      return svePtruePredicateCounterOperands(inst);
    case "brka_p_p_p.xml":
    case "brkas_p_p_p.xml":
    case "brkb_p_p_p.xml":
    case "brkbs_p_p_p.xml":
      return svePredicateBreakOperands(inst);
    case "brkn_p_p_pp.xml":
    case "brkns_p_p_pp.xml":
      return svePredicateBreakPropagationOperands(inst);
    case "brkpa_p_p_pp.xml":
    case "brkpas_p_p_pp.xml":
    case "brkpb_p_p_pp.xml":
    case "brkpbs_p_p_pp.xml":
      return svePredicateBreakPairOperands(inst);
    case "pfirst_p_p_p.xml":
    case "pnext_p_p_p.xml":
      return svePredicateFlowOperands(inst);
    case "ptest_p_p.xml":
      return svePredicateTestOperands(inst);
    case "rdffr_p_f.xml":
    case "rdffr_p_p_f.xml":
    case "rdffrs_p_p_f.xml":
      return sveRdffrOperands(inst);
    case "and_p_p_pp.xml":
    case "mov_and_p_p_pp.xml":
    case "ands_p_p_pp.xml":
    case "movs_ands_p_p_pp.xml":
    case "orr_p_p_pp.xml":
    case "mov_orr_p_p_pp.xml":
    case "orrs_p_p_pp.xml":
    case "movs_orrs_p_p_pp.xml":
    case "eor_p_p_pp.xml":
    case "eors_p_p_pp.xml":
    case "nots_eors_p_p_pp.xml":
    case "bic_p_p_pp.xml":
    case "bics_p_p_pp.xml":
    case "nands_p_p_pp.xml":
    case "nors_p_p_pp.xml":
      return svePredicateLogicalOperands(inst);
    case "zip1_p_pp.xml":
    case "uzp1_p_pp.xml":
    case "trn1_p_pp.xml":
      return svePredicatePermutationOperands(inst);
    case "frinta_z_p_z.xml":
    case "revb_z_z.xml":
      return svePredicatedUnaryOperands(inst);
    case "add_z_p_zz.xml":
    case "sub_z_p_zz.xml":
    case "subr_z_p_zz.xml":
    case "and_z_p_zz.xml":
    case "orr_z_p_zz.xml":
    case "eor_z_p_zz.xml":
    case "bic_z_p_zz.xml":
      return svePredicatedBinaryOperands(inst);
    case "add_z_zz.xml":
    case "sqadd_z_zz.xml":
    case "sub_z_zz.xml":
    case "sqsub_z_zz.xml":
    case "and_z_zz.xml":
    case "orr_z_zz.xml":
    case "mov_orr_z_zz.xml":
    case "eor_z_zz.xml":
    case "bic_z_zz.xml":
    case "uqadd_z_zz.xml":
    case "uqsub_z_zz.xml":
      return sveBinaryOperands(inst);
    case "and_z_zi.xml":
    case "bic_and_z_zi.xml":
    case "orr_z_zi.xml":
    case "orn_orr_z_zi.xml":
    case "eor_z_zi.xml":
    case "eon_eor_z_zi.xml":
      return sveLogicalImmediateOperands(inst);
    case "dupm_z_i.xml":
    case "mov_dupm_z_i.xml":
      return sveDupMaskImmediateOperands(inst);
    case "dup_z_r.xml":
    case "mov_dup_z_r.xml":
      return sveDupScalarOperands(inst);
    case "sel_p_p_pp.xml":
    case "mov_sel_p_p_pp.xml":
      return sveSelectPredicateOperands(inst);
    case "sel_z_p_zz.xml":
    case "mov_sel_z_p_zz.xml":
      return sveSelectVectorOperands(inst);
    case "add_z_zi.xml":
    case "sqadd_z_zi.xml":
    case "sub_z_zi.xml":
    case "sqsub_z_zi.xml":
    case "subr_z_zi.xml":
    case "uqadd_z_zi.xml":
    case "uqsub_z_zi.xml":
      return sveDestructiveImmediateOperands(inst);
    case "asr_z_zi.xml":
    case "lsl_z_zi.xml":
    case "lsr_z_zi.xml":
    case "asr_z_p_zi.xml":
    case "lsl_z_p_zi.xml":
    case "lsr_z_p_zi.xml":
      return sveShiftImmediateOperands(inst);
    case "asr_z_p_zz.xml":
    case "lsl_z_p_zz.xml":
    case "lsr_z_p_zz.xml":
      return svePredicatedBinaryOperands(inst);
    case "saddv_r_p_z.xml":
    case "uaddv_r_p_z.xml":
    case "smaxv_r_p_z.xml":
    case "umaxv_r_p_z.xml":
    case "sminv_r_p_z.xml":
    case "uminv_r_p_z.xml":
    case "orv_r_p_z.xml":
    case "eorv_r_p_z.xml":
    case "andv_r_p_z.xml":
    case "faddv_v_p_z.xml":
    case "fmaxnmv_v_p_z.xml":
    case "fminnmv_v_p_z.xml":
    case "fmaxv_v_p_z.xml":
    case "fminv_v_p_z.xml":
      return sveHorizontalReductionOperands(inst);
    case "asr_z_zw.xml":
    case "lsl_z_zw.xml":
    case "lsr_z_zw.xml":
    case "asr_z_p_zw.xml":
    case "lsl_z_p_zw.xml":
    case "lsr_z_p_zw.xml":
      return sveWideShiftOperands(inst);
    case "bfsub_z_p_zz.xml":
    case "bfsub_z_zz.xml":
      return sveBfSubOperands(inst);
    case "fcadd_z_p_zz.xml":
      return sveFcaddOperands(inst);
    case "cmla_z_zzz.xml":
    case "sqrdcmlah_z_zzz.xml":
      return sveComplexVectorOperands(inst);
    case "fcmla_z_p_zzz.xml":
      return sveFcmlaPredicatedOperands(inst);
    case "cmla_z_zzzi.xml":
    case "fcmla_z_zzzi.xml":
    case "sqrdcmlah_z_zzzi.xml":
      return sveComplexIndexedOperands(inst);
    case "bfmlalb_z_zzz.xml":
    case "bfmlalt_z_zzz.xml":
    case "bfmlalb_z_zzzi.xml":
    case "bfmlalt_z_zzzi.xml":
      return sveBfmlalOperands(inst);
    case "bfmls_z_p_zzz.xml":
    case "bfmls_z_zzzi.xml":
      return sveBfmlsOperands(inst);
    case "fmla_z_p_zzz.xml":
    case "fmla_z_zzzi.xml":
    case "fmls_z_p_zzz.xml":
    case "fmls_z_zzzi.xml":
    case "fnmla_z_p_zzz.xml":
    case "fnmls_z_p_zzz.xml":
      return sveFpMultiplyAccumulateOperands(inst);
    case "fadd_z_p_zs.xml":
    case "fsub_z_p_zs.xml":
      return sveFpAddSubImmediateOperands(inst);
    case "ld1b_z_p_bi.xml":
    case "ld1b_z_p_br.xml":
    case "st1b_z_p_bi.xml":
    case "st1b_z_p_br.xml":
      return sveContiguousByteMemoryOperands(inst);
    case "ld1rb_z_p_bi.xml":
    case "ld1rh_z_p_bi.xml":
    case "ld1rw_z_p_bi.xml":
    case "ld1rd_z_p_bi.xml":
    case "ld1rsb_z_p_bi.xml":
    case "ld1rsh_z_p_bi.xml":
    case "ld1rsw_z_p_bi.xml":
    case "ld1rqb_z_p_bi.xml":
    case "ld1rqh_z_p_bi.xml":
    case "ld1rqw_z_p_bi.xml":
    case "ld1rqd_z_p_bi.xml":
    case "ld1rqb_z_p_br.xml":
    case "ld1rqh_z_p_br.xml":
    case "ld1rqw_z_p_br.xml":
    case "ld1rqd_z_p_br.xml":
    case "ld1rob_z_p_bi.xml":
    case "ld1roh_z_p_bi.xml":
    case "ld1row_z_p_bi.xml":
    case "ld1rod_z_p_bi.xml":
    case "ld1rob_z_p_br.xml":
    case "ld1roh_z_p_br.xml":
    case "ld1row_z_p_br.xml":
    case "ld1rod_z_p_br.xml":
      return sveReplicateLoadOperands(inst);
    case "fmul_z_p_zs.xml":
      return sveFmulImmediateOperands(inst);
    case "fmul_z_zzi.xml":
      return sveFmulIndexedOperands(inst);
    case "fadd_z_p_zz.xml":
    case "fsub_z_p_zz.xml":
    case "fdiv_z_p_zz.xml":
      return svePredicatedBinaryOperands(inst);
    case "fmad_z_p_zzz.xml":
      return sveFmadOperands(inst);
    case "fmul_z_p_zz.xml":
      return svePredicatedBinaryOperands(inst);
    case "fmul_z_zz.xml":
      return sveBinaryOperands(inst);
    case "sdot_z_zzz.xml":
    case "sdot_z_zzzi.xml":
    case "sdot_z32_zzz.xml":
    case "sdot_z32_zzzi.xml":
    case "udot_z_zzz.xml":
    case "udot_z_zzzi.xml":
    case "udot_z32_zzz.xml":
    case "udot_z32_zzzi.xml":
    case "bfdot_z_zzz.xml":
    case "bfdot_z_zzzi.xml":
    case "usdot_z_zzz.xml":
    case "usdot_z_zzzi.xml":
    case "sudot_z_zzzi.xml":
      return sveDotProductOperands(inst);
    case "fmmla_z_zzz.xml":
    case "bfmmla_z_zzz.xml":
    case "bfmmla_z16_zzz.xml":
    case "smmla_z_zzz.xml":
    case "ummla_z_zzz.xml":
    case "usmmla_z_zzz.xml":
      return sveMatrixMultiplyOperands(inst);
    case "zip1_z_zz.xml":
    case "uzp1_z_zz.xml":
    case "trn1_z_zz.xml":
      return svePermutationOperands(inst);
    case "rev_z_z.xml":
      return sveUnaryPermutationOperands(inst);
    case "compact_z_p_z.xml":
      return sveCompactOperands(inst);
    case "f1cvt_z_z8.xml":
    case "bf1cvt_z_z8.xml":
    case "f1cvtlt_z_z8.xml":
    case "bf1cvtlt_z_z8.xml":
      return sveFp8ConvertOperands(inst);
    case "prfb_i_p_bi.xml":
    case "prfd_i_p_bi.xml":
    case "prfh_i_p_bi.xml":
    case "prfw_i_p_bi.xml":
      return sveScalarImmediatePrefetchOperands(inst);
    case "cntb_r_s.xml":
    case "incb_r_rs.xml":
    case "decb_r_rs.xml":
    case "sqincb_r_rs.xml":
    case "sqincd_r_rs.xml":
    case "sqinch_r_rs.xml":
    case "sqincw_r_rs.xml":
    case "uqincb_r_rs.xml":
    case "uqincd_r_rs.xml":
    case "uqinch_r_rs.xml":
    case "uqincw_r_rs.xml":
    case "sqdecb_r_rs.xml":
    case "sqdecd_r_rs.xml":
    case "sqdech_r_rs.xml":
    case "sqdecw_r_rs.xml":
    case "uqdecb_r_rs.xml":
    case "uqdecd_r_rs.xml":
    case "uqdech_r_rs.xml":
    case "uqdecw_r_rs.xml":
      return sveIncDecScalarOperands(inst);
    case "sqincp_r_p_r.xml":
    case "uqincp_r_p_r.xml":
    case "sqdecp_r_p_r.xml":
    case "uqdecp_r_p_r.xml":
      return sveIncDecPredicateScalarOperands(inst);
    case "cntp_r_p_p.xml":
    case "cntp_r_pn.xml":
      return sveCountPredicateOperands(inst);
    case "incd_z_zs.xml":
      return sveIncDecVectorOperands(inst);
    case "sqincp_z_p_z.xml":
    case "uqincp_z_p_z.xml":
    case "sqdecp_z_p_z.xml":
    case "uqdecp_z_p_z.xml":
      return sveIncDecPredicateVectorOperands(inst);
    case "whilege_p_p_rr.xml":
    case "whilegt_p_p_rr.xml":
    case "whilehi_p_p_rr.xml":
    case "whilehs_p_p_rr.xml":
    case "whilele_p_p_rr.xml":
    case "whilelo_p_p_rr.xml":
    case "whilels_p_p_rr.xml":
    case "whilelt_p_p_rr.xml":
    case "whilege_pp_rr.xml":
    case "whilegt_pp_rr.xml":
    case "whilehi_pp_rr.xml":
    case "whilehs_pp_rr.xml":
    case "whilele_pp_rr.xml":
    case "whilelo_pp_rr.xml":
    case "whilels_pp_rr.xml":
    case "whilelt_pp_rr.xml":
    case "whilege_pn_rr.xml":
    case "whilegt_pn_rr.xml":
    case "whilehi_pn_rr.xml":
    case "whilehs_pn_rr.xml":
    case "whilele_pn_rr.xml":
    case "whilelo_pn_rr.xml":
    case "whilels_pn_rr.xml":
    case "whilelt_pn_rr.xml":
      return sveWhileCompareOperands(inst);
    case "irg.xml":
      return mteInsertRandomTagOperands(inst);
    case "addg.xml":
    case "subg.xml":
      return mteAddSubTagOperands(inst);
    case "gmi.xml":
      return mteTagMaskInsertOperands(inst);
    case "stg.xml":
    case "stzg.xml":
    case "st2g.xml":
    case "stz2g.xml":
      return mteTagStoreOperands(inst);
    case "stgp.xml":
      return mteTagPairStoreOperands(inst);
    case "cmpp_subps.xml":
    case "subp.xml":
    case "subps.xml":
      return mteSubtractPointerOperands(inst);
    case "ldg.xml":
    case "ldgm.xml":
    case "stgm.xml":
    case "stzgm.xml":
      return mteTagLoadOperands(inst);
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
    case "addpt.xml":
    case "subpt.xml":
      return checkedPointerAddSubOperands(inst);
    case "add_addsub_ext.xml":
    case "adds_addsub_ext.xml":
    case "sub_addsub_ext.xml":
    case "subs_addsub_ext.xml":
    case "cmn_adds_addsub_ext.xml":
    case "cmp_subs_addsub_ext.xml":
      return addSubExtendedOperands(inst);
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
  if (register.index === 31) {
    if (register.zeroName === "sp") {
      return register.width === 64 ? "sp" : "wsp";
    }
    return register.width === 64 ? "xzr" : "wzr";
  }
  const prefix = register.width === 64 ? "x" : "w";
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
