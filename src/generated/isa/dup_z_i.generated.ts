import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "dup_z_i",
    "encodingId": "dup_z_i_",
    "mnemonic": "DUP",
    "className": "SVE",
    "fileName": "dup_z_i.xml",
    "mask": 4282368000,
    "value": 624476160,
    "bitCount": 16,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 17,
        "width": 2
      },
      {
        "name": "sh",
        "lsb": 13,
        "width": 1
      },
      {
        "name": "imm8",
        "lsb": 5,
        "width": 8
      },
      {
        "name": "Zd",
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
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 0
          },
          {
            "kind": "eq",
            "field": "sh",
            "mask": 1,
            "lsb": 0,
            "value": 1
          }
        ]
      }
    ]
  }
];
