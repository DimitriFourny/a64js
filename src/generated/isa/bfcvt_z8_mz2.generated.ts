import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "bfcvt_z8_mz2",
    "encodingId": "bfcvt_z8_mz2_",
    "mnemonic": "BFCVT",
    "className": "SME2",
    "fileName": "bfcvt_z8_mz2.xml",
    "mask": 4294966304,
    "value": 3244613632,
    "bitCount": 23,
    "fields": [
      {
        "name": "op",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Zn",
        "lsb": 6,
        "width": 4
      },
      {
        "name": "Zd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SME2 && FEAT_FP8"
    ],
    "featureGuards": [],
    "guards": []
  }
];
