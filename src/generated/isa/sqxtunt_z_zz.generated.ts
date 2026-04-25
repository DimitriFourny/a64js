import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sqxtunt_z_zz",
    "encodingId": "sqxtunt_z_zz_",
    "mnemonic": "SQXTUNT",
    "className": "SVE2",
    "fileName": "sqxtunt_z_zz.xml",
    "mask": 4289199104,
    "value": 1159746560,
    "bitCount": 19,
    "fields": [
      {
        "name": "tszh",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "tszl",
        "lsb": 19,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 11,
        "width": 2
      },
      {
        "name": "T",
        "lsb": 10,
        "width": 1
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
      "FEAT_SVE2 || FEAT_SME"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE2 || FEAT_SME",
        "all": []
      }
    ],
    "guards": []
  }
];
