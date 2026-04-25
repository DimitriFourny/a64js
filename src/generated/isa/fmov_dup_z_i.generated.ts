import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fmov_dup_z_i",
    "encodingId": "fmov_z_0__dup_z_i_",
    "mnemonic": "DUP",
    "className": "SVE",
    "fileName": "fmov_dup_z_i.xml",
    "mask": 4282384352,
    "value": 624476160,
    "bitCount": 25,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 17,
        "width": 2
      },
      {
        "name": "sh",
        "lsb": 13,
        "width": 1
      },
      {
        "name": "imm8",
        "lsb": 5,
        "width": 8
      },
      {
        "name": "Zd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME"
    ],
    "featureGuards": [],
    "guards": []
  }
];
