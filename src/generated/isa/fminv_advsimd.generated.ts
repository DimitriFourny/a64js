import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FMINV_advsimd",
    "encodingId": "FMINV_asimdall_only_SD",
    "mnemonic": "FMINV",
    "className": "Single-precision",
    "fileName": "fminv_advsimd.xml",
    "mask": 4294966272,
    "value": 1857091584,
    "bitCount": 22,
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
        "name": "o1",
        "lsb": 23,
        "width": 1
      },
      {
        "name": "sz",
        "lsb": 22,
        "width": 1
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
            "kind": "ne_concat",
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
            "value": 1
          }
        ]
      }
    ]
  },
  {
    "instructionId": "FMINV_advsimd",
    "encodingId": "FMINV_asimdall_only_H",
    "mnemonic": "FMINV",
    "className": "Half-precision",
    "fileName": "fminv_advsimd.xml",
    "mask": 3221224448,
    "value": 246478848,
    "bitCount": 21,
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
        "name": "o1",
        "lsb": 23,
        "width": 1
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
      "FEAT_AdvSIMD && FEAT_FP16"
    ],
    "featureGuards": [],
    "guards": []
  }
];
