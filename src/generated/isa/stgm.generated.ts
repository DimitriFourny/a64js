import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "STGM",
    "encodingId": "STGM_64bulk_ldsttags",
    "mnemonic": "STGM",
    "className": "Integer",
    "fileName": "stgm.xml",
    "mask": 4294966272,
    "value": 3651141632,
    "bitCount": 22,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "imm9",
        "lsb": 12,
        "width": 9
      },
      {
        "name": "op2",
        "lsb": 10,
        "width": 2
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_MTE2"
    ],
    "guards": []
  }
];
