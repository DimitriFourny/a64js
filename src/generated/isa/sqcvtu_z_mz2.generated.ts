import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sqcvtu_z_mz2",
    "encodingId": "sqcvtu_z_mz2_",
    "mnemonic": "SQCVTU",
    "className": "SME2",
    "fileName": "sqcvtu_z_mz2.xml",
    "mask": 4294966304,
    "value": 3244548096,
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
        "name": "U",
        "lsb": 5,
        "width": 1
      },
      {
        "name": "Zd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SME2",
        "all": []
      }
    ],
    "guards": []
  }
];
