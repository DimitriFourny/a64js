import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "MSR_imm",
    "encodingId": "MSR_SI_pstate",
    "mnemonic": "MSR",
    "className": "System",
    "fileName": "msr_imm.xml",
    "mask": 4294504479,
    "value": 3573563423,
    "bitCount": 22,
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
      "FEAT_VHE"
    ],
    "guards": []
  }
];
