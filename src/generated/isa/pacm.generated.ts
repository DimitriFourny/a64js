import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "PACM",
    "encodingId": "PACM_HI_hints",
    "mnemonic": "PACM",
    "className": "System",
    "fileName": "pacm.xml",
    "mask": 4294967295,
    "value": 3573753087,
    "bitCount": 32,
    "fields": [
      {
        "name": "CRm",
        "lsb": 8,
        "width": 4
      },
      {
        "name": "op2",
        "lsb": 5,
        "width": 3
      }
    ],
    "features": [
      "FEAT_PAuth_LR"
    ],
    "guards": []
  }
];
