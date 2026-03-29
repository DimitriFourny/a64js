import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "orn_orr_z_zi",
    "encodingId": "orn_z_zi__orr_z_zi_",
    "mnemonic": "ORR",
    "className": "SVE",
    "fileName": "orn_orr_z_zi.xml",
    "mask": 4294705152,
    "value": 83886080,
    "bitCount": 14,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "imm13",
        "lsb": 5,
        "width": 13
      },
      {
        "name": "Zdn",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME"
    ],
    "guards": []
  }
];
