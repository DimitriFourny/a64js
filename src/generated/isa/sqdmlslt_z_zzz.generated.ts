import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sqdmlslt_z_zzz",
    "encodingId": "sqdmlslt_z_zzz_",
    "mnemonic": "SQDMLSLT",
    "className": "SVE2",
    "fileName": "sqdmlslt_z_zzz.xml",
    "mask": 4280351744,
    "value": 1140878336,
    "bitCount": 15,
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
        "name": "S",
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
