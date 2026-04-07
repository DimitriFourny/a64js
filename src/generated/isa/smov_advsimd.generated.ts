import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SMOV_advsimd",
    "encodingId": "SMOV_asimdins_W_w",
    "mnemonic": "SMOV",
    "className": "Advanced SIMD",
    "fileName": "smov_advsimd.xml",
    "mask": 4292934656,
    "value": 234892288,
    "bitCount": 17,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "imm5",
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
            "field": "imm5",
            "mask": 7,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  },
  {
    "instructionId": "SMOV_advsimd",
    "encodingId": "SMOV_asimdins_X_x",
    "mnemonic": "SMOV",
    "className": "Advanced SIMD",
    "fileName": "smov_advsimd.xml",
    "mask": 4292934656,
    "value": 1308634112,
    "bitCount": 17,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "imm5",
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
            "field": "imm5",
            "mask": 7,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  }
];
