import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fcpy_z_p_i",
    "encodingId": "fcpy_z_p_i_",
    "mnemonic": "FCPY",
    "className": "SVE",
    "fileName": "fcpy_z_p_i.xml",
    "mask": 4281393152,
    "value": 84983808,
    "bitCount": 13,
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
          }
        ]
      }
    ]
  }
];
