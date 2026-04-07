import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fcvtzs_mz_z",
    "encodingId": "fcvtzs_mz_z_4",
    "mnemonic": "FCVTZS",
    "className": "Four registers",
    "fileName": "fcvtzs_mz_z.xml",
    "mask": 4294966371,
    "value": 3241271296,
    "bitCount": 26,
    "fields": [
      {
        "name": "Zn",
        "lsb": 7,
        "width": 3
      },
      {
        "name": "U",
        "lsb": 5,
        "width": 1
      },
      {
        "name": "Zd",
        "lsb": 2,
        "width": 3
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
  },
  {
    "instructionId": "fcvtzs_mz_z",
    "encodingId": "fcvtzs_mz_z_2",
    "mnemonic": "FCVTZS",
    "className": "Two registers",
    "fileName": "fcvtzs_mz_z.xml",
    "mask": 4294966305,
    "value": 3240222720,
    "bitCount": 24,
    "fields": [
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
        "lsb": 1,
        "width": 4
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
