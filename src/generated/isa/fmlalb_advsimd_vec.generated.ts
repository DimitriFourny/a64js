import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FMLALB_advsimd_vec",
    "encodingId": "FMLALB_asimdsame2_J",
    "mnemonic": "FMLALB",
    "className": "Advanced SIMD",
    "fileName": "fmlalb_advsimd_vec.xml",
    "mask": 4292934656,
    "value": 247528448,
    "bitCount": 17,
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
        "lsb": 11,
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
      "FEAT_FP8FMA"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_FP8FMA",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "FMLALB_advsimd_vec",
    "encodingId": "FMLALT_asimdsame2_J",
    "mnemonic": "FMLALT",
    "className": "Advanced SIMD",
    "fileName": "fmlalb_advsimd_vec.xml",
    "mask": 4292934656,
    "value": 1321270272,
    "bitCount": 17,
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
        "lsb": 11,
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
      "FEAT_FP8FMA"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_FP8FMA",
        "all": []
      }
    ],
    "guards": []
  }
];
