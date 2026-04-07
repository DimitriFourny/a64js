import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "cpy_z_o_i",
    "encodingId": "cpy_z_o_i_",
    "mnemonic": "CPY",
    "className": "SVE",
    "fileName": "cpy_z_o_i.xml",
    "mask": 4281384960,
    "value": 84934656,
    "bitCount": 12,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Pg",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "M",
        "lsb": 14,
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
