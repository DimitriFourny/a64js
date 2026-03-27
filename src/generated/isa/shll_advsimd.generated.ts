import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SHLL_advsimd",
    "encodingId": "SHLL_asimdmisc_S",
    "mnemonic": "SHLL",
    "className": "Vector",
    "fileName": "shll_advsimd.xml",
    "mask": 3208641536,
    "value": 773928960,
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
