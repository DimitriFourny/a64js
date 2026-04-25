import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "srsra_z_zi",
    "encodingId": "srsra_z_zi_",
    "mnemonic": "SRSRA",
    "className": "SVE2",
    "fileName": "srsra_z_zi.xml",
    "mask": 4280351744,
    "value": 1157687296,
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
        "name": "R",
        "lsb": 11,
        "width": 1
      },
      {
        "name": "U",
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
