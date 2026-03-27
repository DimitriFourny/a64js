import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "lsl_z_zi",
    "encodingId": "lsl_z_zi_",
    "mnemonic": "LSL",
    "className": "SVE",
    "fileName": "lsl_z_zi.xml",
    "mask": 4280351744,
    "value": 69245952,
    "bitCount": 15,
    "fields": [
      {
        "name": "tszh",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "tszl",
        "lsb": 19,
        "width": 2
      },
      {
        "name": "imm3",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "opc",
        "lsb": 10,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zd",
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
