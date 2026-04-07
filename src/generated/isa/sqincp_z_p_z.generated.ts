import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sqincp_z_p_z",
    "encodingId": "sqincp_z_p_z_",
    "mnemonic": "SQINCP",
    "className": "SVE",
    "fileName": "sqincp_z_p_z.xml",
    "mask": 4282383872,
    "value": 623411200,
    "bitCount": 21,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "D",
        "lsb": 17,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 16,
        "width": 1
      },
      {
        "name": "opc",
        "lsb": 9,
        "width": 2
      },
      {
        "name": "Pm",
        "lsb": 5,
        "width": 4
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
          }
        ]
      }
    ]
  }
];
