import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FSQRT_advsimd",
    "encodingId": "FSQRT_asimdmiscfp16_R",
    "mnemonic": "FSQRT",
    "className": "Half-precision",
    "fileName": "fsqrt_advsimd.xml",
    "mask": 3221224448,
    "value": 788133888,
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
        "name": "a",
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
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ],
    "guards": []
  },
  {
    "instructionId": "FSQRT_advsimd",
    "encodingId": "FSQRT_asimdmisc_R",
    "mnemonic": "FSQRT",
    "className": "Single-precision and double-precision",
    "fileName": "fsqrt_advsimd.xml",
    "mask": 3217030144,
    "value": 782366720,
    "bitCount": 20,
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
