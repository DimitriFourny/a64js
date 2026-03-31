import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FRSQRTS_advsimd",
    "encodingId": "FRSQRTS_asisdsamefp16_only",
    "mnemonic": "FRSQRTS",
    "className": "Scalar half-precision",
    "fileName": "frsqrts_advsimd.xml",
    "mask": 4292934656,
    "value": 1589656576,
    "bitCount": 17,
    "fields": [
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "a",
        "lsb": 23,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "opcode",
        "lsb": 11,
        "width": 3
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
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ],
    "guards": []
  },
  {
    "instructionId": "FRSQRTS_advsimd",
    "encodingId": "FRSQRTS_asimdsamefp16_only",
    "mnemonic": "FRSQRTS",
    "className": "Vector half-precision",
    "fileName": "frsqrts_advsimd.xml",
    "mask": 3219192832,
    "value": 247479296,
    "bitCount": 16,
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
        "name": "a",
        "lsb": 23,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "opcode",
        "lsb": 11,
        "width": 3
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
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ],
    "guards": []
  },
  {
    "instructionId": "FRSQRTS_advsimd",
    "encodingId": "FRSQRTS_asisdsame_only",
    "mnemonic": "FRSQRTS",
    "className": "Scalar single-precision and double-precision",
    "fileName": "frsqrts_advsimd.xml",
    "mask": 4288740352,
    "value": 1587608576,
    "bitCount": 16,
    "fields": [
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "opcode",
        "lsb": 11,
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
    "guards": []
  },
  {
    "instructionId": "FRSQRTS_advsimd",
    "encodingId": "FRSQRTS_asimdsame_only",
    "mnemonic": "FRSQRTS",
    "className": "Vector single-precision and double-precision",
    "fileName": "frsqrts_advsimd.xml",
    "mask": 3214998528,
    "value": 245431296,
    "bitCount": 15,
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
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "opcode",
        "lsb": 11,
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
    "guards": [
      {
        "all": [
          {
            "kind": "eq_concat",
            "parts": [
              {
                "field": "sz",
                "msb": 0,
                "lsb": 0
              },
              {
                "field": "Q",
                "msb": 0,
                "lsb": 0
              }
            ],
            "value": 2
          }
        ]
      }
    ]
  }
];
