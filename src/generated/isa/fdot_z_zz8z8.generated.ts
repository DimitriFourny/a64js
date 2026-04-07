import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fdot_z_zz8z8",
    "encodingId": "fdot_z_zz8z8_",
    "mnemonic": "FDOT",
    "className": "SVE2",
    "fileName": "fdot_z_zz8z8.xml",
    "mask": 4292934656,
    "value": 1679852544,
    "bitCount": 17,
    "fields": [
      {
        "name": "op",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "o2",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zda",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "(FEAT_SVE2 && FEAT_FP8DOT2) || FEAT_SSVE_FP8DOT2"
    ],
    "featureGuards": [],
    "guards": []
  }
];
