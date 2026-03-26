import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "CCMN_reg",
    "encodingId": "CCMN_32_condcmp_reg",
    "mnemonic": "CCMN",
    "className": "Integer",
    "fileName": "ccmn_reg.xml",
    "mask": 4292873232,
    "value": 977272832,
    "bitCount": 14,
    "fields": [
      {
        "name": "sf",
        "lsb": 31,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "S",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "cond",
        "lsb": 12,
        "width": 4
      },
      {
        "name": "o2",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "o3",
        "lsb": 4,
        "width": 1
      },
      {
        "name": "nzcv",
        "lsb": 0,
        "width": 4
      }
    ],
    "features": [],
    "guards": []
  },
  {
    "instructionId": "CCMN_reg",
    "encodingId": "CCMN_64_condcmp_reg",
    "mnemonic": "CCMN",
    "className": "Integer",
    "fileName": "ccmn_reg.xml",
    "mask": 4292873232,
    "value": 3124756480,
    "bitCount": 14,
    "fields": [
      {
        "name": "sf",
        "lsb": 31,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "S",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "cond",
        "lsb": 12,
        "width": 4
      },
      {
        "name": "o2",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "o3",
        "lsb": 4,
        "width": 1
      },
      {
        "name": "nzcv",
        "lsb": 0,
        "width": 4
      }
    ],
    "features": [],
    "guards": []
  }
];
