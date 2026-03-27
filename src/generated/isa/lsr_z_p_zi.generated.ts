import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "lsr_z_p_zi",
    "encodingId": "lsr_z_p_zi_",
    "mnemonic": "LSR",
    "className": "SVE",
    "fileName": "lsr_z_p_zi.xml",
    "mask": 4282376192,
    "value": 67207168,
    "bitCount": 17,
    "fields": [
      {
        "name": "tszh",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 18,
        "width": 2
      },
      {
        "name": "L",
        "lsb": 17,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 16,
        "width": 1
      },
      {
        "name": "Pg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "tszl",
        "lsb": 8,
        "width": 2
      },
      {
        "name": "imm3",
        "lsb": 5,
        "width": 3
      },
      {
        "name": "Zdn",
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
