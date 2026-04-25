import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sri_z_zzi",
    "encodingId": "sri_z_zzi_",
    "mnemonic": "SRI",
    "className": "SVE2",
    "fileName": "sri_z_zzi.xml",
    "mask": 4280351744,
    "value": 1157689344,
    "bitCount": 15,
    "fields": [
      {
        "name": "tszh",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "tszl",
        "lsb": 19,
        "width": 2
      },
      {
        "name": "imm3",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "op",
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
