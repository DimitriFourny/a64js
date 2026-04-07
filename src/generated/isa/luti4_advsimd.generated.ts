import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "LUTI4_advsimd",
    "encodingId": "LUTI4_asimdtbl_L5",
    "mnemonic": "LUTI4",
    "className": "Advanced SIMD",
    "fileName": "luti4_advsimd.xml",
    "mask": 4292918272,
    "value": 1312825344,
    "bitCount": 16,
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
        "name": "len",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "op",
        "lsb": 12,
        "width": 1
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
      "FEAT_AdvSIMD && FEAT_LUT"
    ],
    "featureGuards": [],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "len",
            "mask": 1,
            "lsb": 0,
            "value": 0
          },
          {
            "kind": "eq",
            "field": "op",
            "mask": 1,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  },
  {
    "instructionId": "LUTI4_advsimd",
    "encodingId": "LUTI4_asimdtbl_L7",
    "mnemonic": "LUTI4",
    "className": "Advanced SIMD",
    "fileName": "luti4_advsimd.xml",
    "mask": 4292910080,
    "value": 1312821248,
    "bitCount": 15,
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
        "name": "len",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "op",
        "lsb": 12,
        "width": 1
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
      "FEAT_AdvSIMD && FEAT_LUT"
    ],
    "featureGuards": [],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "len",
            "mask": 1,
            "lsb": 0,
            "value": 0
          },
          {
            "kind": "eq",
            "field": "op",
            "mask": 1,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  }
];
