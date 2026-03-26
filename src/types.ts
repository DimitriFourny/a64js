export type FeatureName = string;

export type GuardCheck =
  | {
      kind: "eq";
      field: string;
      mask: number;
      lsb: number;
      value: number;
    }
  | {
      kind: "ne";
      field: string;
      mask: number;
      lsb: number;
      value: number;
    }
  | {
      kind: "eq_field";
      field: string;
      otherField: string;
    }
  | {
      kind: "ne_field";
      field: string;
      otherField: string;
    }
  | {
      kind: "eq_concat";
      parts: Array<{
        field: string;
        msb: number;
        lsb: number;
      }>;
      value: number;
    }
  | {
      kind: "ne_concat";
      parts: Array<{
        field: string;
        msb: number;
        lsb: number;
      }>;
      value: number;
    };

export type Guard = {
  all: GuardCheck[];
};

export type GeneratedField = {
  name: string;
  lsb: number;
  width: number;
};

export type GeneratedEncoding = {
  instructionId: string;
  encodingId: string;
  mnemonic: string;
  className: string;
  fileName: string;
  mask: number;
  value: number;
  fields: GeneratedField[];
  features: FeatureName[];
  guards: Guard[];
};

export type RegisterName = {
  kind: "reg";
  width: 32 | 64;
  index: number;
  zeroName: "zr" | "sp";
};

export type ImmediateOperand = {
  kind: "imm";
  value: bigint;
  signed?: boolean;
  shift?: number;
};

export type LabelOperand = {
  kind: "label";
  offset: bigint;
  absolute?: bigint;
  pageRelative?: boolean;
};

export type ConditionOperand = {
  kind: "cond";
  code: number;
  suffix: string;
};

export type SystemRegisterOperand = {
  kind: "sysreg";
  op0: number;
  op1: number;
  CRn: number;
  CRm: number;
  op2: number;
};

export type VectorRegisterOperand = {
  kind: "vec";
  index: number;
  lane?: "b" | "h" | "s" | "d" | "q";
};

export type PredicateRegisterOperand = {
  kind: "pred";
  index: number;
  lane?: "b" | "h" | "s" | "d";
  mode?: "m" | "z";
};

export type FloatingImmediateOperand = {
  kind: "fpimm";
  value: number;
};

export type TextOperand = {
  kind: "text";
  text: string;
};

export type Operand =
  | RegisterName
  | ImmediateOperand
  | LabelOperand
  | ConditionOperand
  | SystemRegisterOperand
  | VectorRegisterOperand
  | PredicateRegisterOperand
  | FloatingImmediateOperand
  | TextOperand;

export type DecodeStatus = "ok" | "unknown" | "undefined";

export type DecodedInstruction = {
  status: DecodeStatus;
  word: number;
  encoding?: GeneratedEncoding;
  mnemonic?: string;
  fields?: Record<string, number>;
  operands?: Operand[];
  errors?: string[];
};

export type DecodeOptions = {
  features?: Iterable<FeatureName>;
};

export type ProfileName = "arm-a64-canonical" | "apple-arm64e";

export type FormatOptions = {
  profile?: ProfileName;
  pc?: bigint | number;
  onUnknown?: "error" | "raw";
};

export type DecodedLine = {
  address: bigint;
  word: number;
  text: string;
  decoded: DecodedInstruction;
};
