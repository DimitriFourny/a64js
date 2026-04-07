import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "bfmul_z_zz",
    "encodingId": "bfmul_z_zz_",
    "mnemonic": "BFMUL",
    "className": "SVE2",
    "fileName": "bfmul_z_zz.xml",
    "mask": 4292934656,
    "value": 1694500864,
    "bitCount": 17,
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
        "name": "opc",
        "lsb": 10,
        "width": 3
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
      "FEAT_SVE_B16B16"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE_B16B16",
        "all": []
      }
    ],
    "guards": []
  }
];
