import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "histseg_z_zz",
    "encodingId": "histseg_z_zz_",
    "mnemonic": "HISTSEG",
    "className": "SVE2",
    "fileName": "histseg_z_zz.xml",
    "mask": 4280351744,
    "value": 1159766016,
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
      "FEAT_SVE2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE2",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "ne",
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
