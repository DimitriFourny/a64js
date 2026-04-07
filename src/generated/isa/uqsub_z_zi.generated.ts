import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "uqsub_z_zi",
    "encodingId": "uqsub_z_zi_",
    "mnemonic": "UQSUB",
    "className": "SVE",
    "fileName": "uqsub_z_zi.xml",
    "mask": 4282368000,
    "value": 623362048,
    "bitCount": 16,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "U",
        "lsb": 16,
        "width": 1
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
