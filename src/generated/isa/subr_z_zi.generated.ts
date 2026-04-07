import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "subr_z_zi",
    "encodingId": "subr_z_zi_",
    "mnemonic": "SUBR",
    "className": "SVE",
    "fileName": "subr_z_zi.xml",
    "mask": 4282368000,
    "value": 623099904,
    "bitCount": 16,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 16,
        "width": 3
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
