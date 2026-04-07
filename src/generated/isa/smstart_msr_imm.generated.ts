import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SMSTART_MSR_imm",
    "encodingId": "SMSTART_MSR_SI_pstate",
    "mnemonic": "MSR",
    "className": "System",
    "fileName": "smstart_msr_imm.xml",
    "mask": 4294965759,
    "value": 3573760383,
    "bitCount": 30,
    "fields": [
      {
        "name": "op1",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "CRm",
        "lsb": 8,
        "width": 4
      },
      {
        "name": "op2",
        "lsb": 5,
        "width": 3
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SME"
    ],
    "featureGuards": [],
    "guards": []
  }
];
