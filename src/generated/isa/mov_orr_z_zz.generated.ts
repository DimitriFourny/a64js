import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "mov_orr_z_zz",
    "encodingId": "mov_z_z__orr_z_zz_",
    "mnemonic": "ORR",
    "className": "SVE",
    "fileName": "mov_orr_z_zz.xml",
    "mask": 4292934656,
    "value": 73412608,
    "bitCount": 17,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 5
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
      "FEAT_SVE || FEAT_SME"
    ],
    "featureGuards": [],
    "guards": []
  }
];
