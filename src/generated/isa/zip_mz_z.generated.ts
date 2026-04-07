import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "zip_mz_z",
    "encodingId": "zip_mz_z_4q",
    "mnemonic": "ZIP",
    "className": "128-bit element",
    "fileName": "zip_mz_z.xml",
    "mask": 4294966371,
    "value": 3241664512,
    "bitCount": 26,
    "fields": [
      {
        "name": "Zn",
        "lsb": 7,
        "width": 3
      },
      {
        "name": "Zd",
        "lsb": 2,
        "width": 3
      },
      {
        "name": "op",
        "lsb": 1,
        "width": 1
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
    "instructionId": "zip_mz_z",
    "encodingId": "zip_mz_z_4",
    "mnemonic": "ZIP",
    "className": "8-bit to 64-bit elements",
    "fileName": "zip_mz_z.xml",
    "mask": 4282383459,
    "value": 3241598976,
    "bitCount": 24,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 7,
        "width": 3
      },
      {
        "name": "Zd",
        "lsb": 2,
        "width": 3
      },
      {
        "name": "op",
        "lsb": 1,
        "width": 1
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
