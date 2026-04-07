import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fmlalltb_z32_z8z8z8i",
    "encodingId": "fmlalltb_z32_z8z8z8i_",
    "mnemonic": "FMLALLTB",
    "className": "SVE2",
    "fileName": "fmlalltb_z32_z8z8z8i.xml",
    "mask": 4292931584,
    "value": 1688256512,
    "bitCount": 15,
    "fields": [
      {
        "name": "TT",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "i4h",
        "lsb": 19,
        "width": 2
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "i4l",
        "lsb": 10,
        "width": 2
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
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ],
    "featureGuards": [],
    "guards": []
  }
];
