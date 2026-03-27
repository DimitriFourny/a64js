import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "UMAX_imm",
    "encodingId": "UMAX_32U_minmax_imm",
    "mnemonic": "UMAX",
    "className": "Integer",
    "fileName": "umax_imm.xml",
    "mask": 4294705152,
    "value": 298057728,
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
        "name": "opc",
        "lsb": 18,
        "width": 4
      },
      {
        "name": "imm8",
        "lsb": 10,
        "width": 8
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
      "FEAT_CSSC"
    ],
    "guards": []
  },
  {
    "instructionId": "UMAX_imm",
    "encodingId": "UMAX_64U_minmax_imm",
    "mnemonic": "UMAX",
    "className": "Integer",
    "fileName": "umax_imm.xml",
    "mask": 4294705152,
    "value": 2445541376,
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
        "name": "opc",
        "lsb": 18,
        "width": 4
      },
      {
        "name": "imm8",
        "lsb": 10,
        "width": 8
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
      "FEAT_CSSC"
    ],
    "guards": []
  }
];
