import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SMAXV_advsimd",
    "encodingId": "SMAXV_asimdall_only",
    "mnemonic": "SMAXV",
    "className": "Advanced SIMD",
    "fileName": "smaxv_advsimd.xml",
    "mask": 3208641536,
    "value": 238069760,
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
        "name": "op",
        "lsb": 16,
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
      "FEAT_AdvSIMD"
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq_concat",
            "parts": [
              {
                "field": "size",
                "msb": 1,
                "lsb": 0
              },
              {
                "field": "Q",
                "msb": 0,
                "lsb": 0
              }
            ],
            "value": 4
          }
        ]
      },
      {
        "all": [
          {
            "kind": "eq",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 3
          }
        ]
      }
    ]
  }
];
