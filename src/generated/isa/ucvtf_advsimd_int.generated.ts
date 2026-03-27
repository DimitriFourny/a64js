import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "UCVTF_advsimd_int",
    "encodingId": "UCVTF_asisdmiscfp16_R",
    "mnemonic": "UCVTF",
    "className": "Scalar half-precision",
    "fileName": "ucvtf_advsimd_int.xml",
    "mask": 4294966272,
    "value": 2121914368,
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
    "instructionId": "UCVTF_advsimd_int",
    "encodingId": "UCVTF_asimdmiscfp16_R",
    "mnemonic": "UCVTF",
    "className": "Vector half-precision",
    "fileName": "ucvtf_advsimd_int.xml",
    "mask": 3221224448,
    "value": 779737088,
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
    "instructionId": "UCVTF_advsimd_int",
    "encodingId": "UCVTF_asisdmisc_R",
    "mnemonic": "UCVTF",
    "className": "Scalar single-precision and double-precision",
    "fileName": "ucvtf_advsimd_int.xml",
    "mask": 4290771968,
    "value": 2116147200,
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
    "instructionId": "UCVTF_advsimd_int",
    "encodingId": "UCVTF_asimdmisc_R",
    "mnemonic": "UCVTF",
    "className": "Vector single-precision and double-precision",
    "fileName": "ucvtf_advsimd_int.xml",
    "mask": 3217030144,
    "value": 773969920,
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
