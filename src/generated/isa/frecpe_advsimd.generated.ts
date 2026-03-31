import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FRECPE_advsimd",
    "encodingId": "FRECPE_asisdmiscfp16_R",
    "mnemonic": "FRECPE",
    "className": "Scalar half-precision",
    "fileName": "frecpe_advsimd.xml",
    "mask": 4294966272,
    "value": 1593432064,
    "bitCount": 22,
    "fields": [
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
    "instructionId": "FRECPE_advsimd",
    "encodingId": "FRECPE_asimdmiscfp16_R",
    "mnemonic": "FRECPE",
    "className": "Vector half-precision",
    "fileName": "frecpe_advsimd.xml",
    "mask": 3221224448,
    "value": 251254784,
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
    "instructionId": "FRECPE_advsimd",
    "encodingId": "FRECPE_asisdmisc_R",
    "mnemonic": "FRECPE",
    "className": "Scalar single-precision and double-precision",
    "fileName": "frecpe_advsimd.xml",
    "mask": 4290771968,
    "value": 1587664896,
    "bitCount": 21,
    "fields": [
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
  },
  {
    "instructionId": "FRECPE_advsimd",
    "encodingId": "FRECPE_asimdmisc_R",
    "mnemonic": "FRECPE",
    "className": "Vector single-precision and double-precision",
    "fileName": "frecpe_advsimd.xml",
    "mask": 3217030144,
    "value": 245487616,
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
