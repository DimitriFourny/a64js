import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FMAXP_advsimd_pair",
    "encodingId": "FMAXP_asisdpair_only_H",
    "mnemonic": "FMAXP",
    "className": "Half-precision",
    "fileName": "fmaxp_advsimd_pair.xml",
    "mask": 4294966272,
    "value": 1580267520,
    "bitCount": 22,
    "fields": [
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
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "sz",
            "mask": 1,
            "lsb": 0,
            "value": 1
          }
        ]
      }
    ]
  },
  {
    "instructionId": "FMAXP_advsimd_pair",
    "encodingId": "FMAXP_asisdpair_only_SD",
    "mnemonic": "FMAXP",
    "className": "Single-precision and double-precision",
    "fileName": "fmaxp_advsimd_pair.xml",
    "mask": 4290771968,
    "value": 2117138432,
    "bitCount": 21,
    "fields": [
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
    "guards": []
  }
];
