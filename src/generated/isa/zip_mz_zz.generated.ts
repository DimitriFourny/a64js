import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "zip_mz_zz",
    "encodingId": "zip_mz_zz_2q",
    "mnemonic": "ZIP",
    "className": "128-bit element",
    "fileName": "zip_mz_zz.xml",
    "mask": 4292934657,
    "value": 3240154112,
    "bitCount": 18,
    "fields": [
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
        "lsb": 1,
        "width": 4
      },
      {
        "name": "op",
        "lsb": 0,
        "width": 1
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "guards": []
  },
  {
    "instructionId": "zip_mz_zz",
    "encodingId": "zip_mz_zz_2",
    "mnemonic": "ZIP",
    "className": "8-bit to 64-bit elements",
    "fileName": "zip_mz_zz.xml",
    "mask": 4280351745,
    "value": 3240153088,
    "bitCount": 16,
    "fields": [
      {
        "name": "size",
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
        "lsb": 1,
        "width": 4
      },
      {
        "name": "op",
        "lsb": 0,
        "width": 1
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "guards": []
  }
];
