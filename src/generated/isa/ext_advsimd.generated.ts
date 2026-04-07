import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "EXT_advsimd",
    "encodingId": "EXT_asimdext_only",
    "mnemonic": "EXT",
    "className": "Advanced SIMD",
    "fileName": "ext_advsimd.xml",
    "mask": 3219162112,
    "value": 771751936,
    "bitCount": 12,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "op2",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "imm4",
        "lsb": 11,
        "width": 4
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
            "kind": "eq",
            "field": "Q",
            "mask": 1,
            "lsb": 0,
            "value": 0
          },
          {
            "kind": "eq",
            "field": "imm4",
            "mask": 8,
            "lsb": 3,
            "value": 1
          }
        ]
      }
    ]
  }
];
