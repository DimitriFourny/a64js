import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FMINP_advsimd_pair",
    "encodingId": "FMINP_asisdpair_only_H",
    "mnemonic": "FMINP",
    "className": "Half-precision",
    "fileName": "fminp_advsimd_pair.xml",
    "mask": 4294966272,
    "value": 1588656128,
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
    "instructionId": "FMINP_advsimd_pair",
    "encodingId": "FMINP_asisdpair_only_SD",
    "mnemonic": "FMINP",
    "className": "Single-precision and double-precision",
    "fileName": "fminp_advsimd_pair.xml",
    "mask": 4290771968,
    "value": 2125527040,
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
