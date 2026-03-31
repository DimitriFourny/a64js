import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "UMOV_advsimd",
    "encodingId": "UMOV_asimdins_X_x",
    "mnemonic": "UMOV",
    "className": "Advanced SIMD",
    "fileName": "umov_advsimd.xml",
    "mask": 4293917696,
    "value": 1309162496,
    "bitCount": 21,
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
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "imm5",
            "mask": 15,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  },
  {
    "instructionId": "UMOV_advsimd",
    "encodingId": "UMOV_asimdins_W_w",
    "mnemonic": "UMOV",
    "className": "Advanced SIMD",
    "fileName": "umov_advsimd.xml",
    "mask": 4292934656,
    "value": 234896384,
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
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "imm5",
            "mask": 15,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  }
];
