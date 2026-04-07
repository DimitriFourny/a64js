import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sunpk_mz_z",
    "encodingId": "sunpk_mz_z_4",
    "mnemonic": "SUNPK",
    "className": "Four registers",
    "fileName": "sunpk_mz_z.xml",
    "mask": 4282383395,
    "value": 3241533440,
    "bitCount": 23,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 6,
        "width": 4
      },
      {
        "name": "Zd",
        "lsb": 2,
        "width": 3
      },
      {
        "name": "U",
        "lsb": 0,
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
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  },
  {
    "instructionId": "sunpk_mz_z",
    "encodingId": "sunpk_mz_z_2",
    "mnemonic": "SUNPK",
    "className": "Two registers",
    "fileName": "sunpk_mz_z.xml",
    "mask": 4282383361,
    "value": 3240484864,
    "bitCount": 21,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
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
        "name": "U",
        "lsb": 0,
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
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  }
];
