import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "str_p_bi",
    "encodingId": "str_p_bi_",
    "mnemonic": "STR",
    "className": "SVE",
    "fileName": "str_p_bi.xml",
    "mask": 4290830352,
    "value": 3850371072,
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
