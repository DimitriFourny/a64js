import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ldr_p_bi",
    "encodingId": "ldr_p_bi_",
    "mnemonic": "LDR",
    "className": "SVE",
    "fileName": "ldr_p_bi.xml",
    "mask": 4290830352,
    "value": 2239758336,
    "bitCount": 14,
    "fields": [
      {
        "name": "imm9h",
        "lsb": 16,
        "width": 6
      },
      {
        "name": "imm9l",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Pt",
        "lsb": 0,
        "width": 4
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE || FEAT_SME",
        "all": []
      }
    ],
    "guards": []
  }
];
