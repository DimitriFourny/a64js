import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "orr_z_p_zz",
    "encodingId": "orr_z_p_zz_",
    "mnemonic": "ORR",
    "className": "SVE",
    "fileName": "orr_z_p_zz.xml",
    "mask": 4282376192,
    "value": 68681728,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "Pg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Zm",
        "lsb": 5,
        "width": 5
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
