import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "uqdech_z_zs",
    "encodingId": "uqdech_z_zs_",
    "mnemonic": "UQDECH",
    "className": "SVE",
    "fileName": "uqdech_z_zs.xml",
    "mask": 4293983232,
    "value": 73452544,
    "bitCount": 18,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "imm4",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "D",
        "lsb": 11,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "pattern",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zdn",
        "lsb": 0,
        "width": 5
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
