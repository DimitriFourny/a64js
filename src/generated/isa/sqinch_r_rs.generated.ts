import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sqinch_r_rs",
    "encodingId": "sqinch_r_rs_sx",
    "mnemonic": "SQINCH",
    "className": "32-bit",
    "fileName": "sqinch_r_rs.xml",
    "mask": 4293983232,
    "value": 73461760,
    "bitCount": 18,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "sf",
        "lsb": 20,
        "width": 1
      },
      {
        "name": "imm4",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "D",
        "lsb": 11,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "pattern",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rdn",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ],
    "guards": []
  },
  {
    "instructionId": "sqinch_r_rs",
    "encodingId": "sqinch_r_rs_x",
    "mnemonic": "SQINCH",
    "className": "64-bit",
    "fileName": "sqinch_r_rs.xml",
    "mask": 4293983232,
    "value": 74510336,
    "bitCount": 18,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "sf",
        "lsb": 20,
        "width": 1
      },
      {
        "name": "imm4",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "D",
        "lsb": 11,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "pattern",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rdn",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ],
    "guards": []
  }
];
