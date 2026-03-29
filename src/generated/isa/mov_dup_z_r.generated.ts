import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "mov_dup_z_r",
    "encodingId": "mov_z_r__dup_z_r_",
    "mnemonic": "DUP",
    "className": "SVE",
    "fileName": "mov_dup_z_r.xml",
    "mask": 4282383360,
    "value": 85997568,
    "bitCount": 20,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Rn",
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
      "FEAT_SVE || FEAT_SME"
    ],
    "guards": []
  }
];
