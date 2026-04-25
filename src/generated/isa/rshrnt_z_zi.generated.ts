import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "rshrnt_z_zi",
    "encodingId": "rshrnt_z_zi_",
    "mnemonic": "RSHRNT",
    "className": "SVE2",
    "fileName": "rshrnt_z_zi.xml",
    "mask": 4288740352,
    "value": 1159732224,
    "bitCount": 16,
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
        "name": "imm3",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "op",
        "lsb": 13,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 12,
        "width": 1
      },
      {
        "name": "R",
        "lsb": 11,
        "width": 1
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
