import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "CNT_advsimd",
    "encodingId": "CNT_asimdmisc_R",
    "mnemonic": "CNT",
    "className": "Vector",
    "fileName": "cnt_advsimd.xml",
    "mask": 3208641536,
    "value": 237000704,
    "bitCount": 19,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opcode",
        "lsb": 12,
        "width": 5
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_AdvSIMD"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "ne",
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
