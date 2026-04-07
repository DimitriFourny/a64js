import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "PMULL_advsimd",
    "encodingId": "PMULL_asimddiff_L",
    "mnemonic": "PMULL",
    "className": "Three registers, not all the same type",
    "fileName": "pmull_advsimd.xml",
    "mask": 3206609920,
    "value": 237035520,
    "bitCount": 14,
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
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "opcode",
        "lsb": 12,
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
      },
      {
        "feature": "FEAT_PMULL",
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
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 1
          }
        ]
      }
    ]
  }
];
