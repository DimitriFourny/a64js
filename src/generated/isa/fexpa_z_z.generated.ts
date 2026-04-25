import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fexpa_z_z",
    "encodingId": "fexpa_z_z_",
    "mnemonic": "FEXPA",
    "className": "SVE",
    "fileName": "fexpa_z_z.xml",
    "mask": 4282383360,
    "value": 69253120,
    "bitCount": 20,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc",
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
      "FEAT_SVE || FEAT_SSVE_FEXPA"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE || FEAT_SSVE_FEXPA",
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
