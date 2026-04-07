import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "MUL_advsimd_elt",
    "encodingId": "MUL_asimdelem_R",
    "mnemonic": "MUL",
    "className": "Vector",
    "fileName": "mul_advsimd_elt.xml",
    "mask": 3204510720,
    "value": 251691008,
    "bitCount": 12,
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
        "name": "L",
        "lsb": 21,
        "width": 1
      },
      {
        "name": "M",
        "lsb": 20,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "opcode",
        "lsb": 12,
        "width": 4
      },
      {
        "name": "H",
        "lsb": 11,
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
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": []
  }
];
