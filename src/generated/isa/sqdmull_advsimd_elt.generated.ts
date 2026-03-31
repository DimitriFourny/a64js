import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SQDMULL_advsimd_elt",
    "encodingId": "SQDMULL_asisdelem_L",
    "mnemonic": "SQDMULL",
    "className": "Scalar",
    "fileName": "sqdmull_advsimd_elt.xml",
    "mask": 4278252544,
    "value": 1593880576,
    "bitCount": 13,
    "fields": [
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
    "guards": []
  },
  {
    "instructionId": "SQDMULL_advsimd_elt",
    "encodingId": "SQDMULL_asimdelem_L",
    "mnemonic": "SQDMULL",
    "className": "Vector",
    "fileName": "sqdmull_advsimd_elt.xml",
    "mask": 3204510720,
    "value": 251703296,
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
    "guards": []
  }
];
