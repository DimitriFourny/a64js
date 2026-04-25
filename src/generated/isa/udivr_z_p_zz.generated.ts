import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "udivr_z_p_zz",
    "encodingId": "udivr_z_p_zz_",
    "mnemonic": "UDIVR",
    "className": "SVE",
    "fileName": "udivr_z_p_zz.xml",
    "mask": 4282376192,
    "value": 68616192,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "R",
        "lsb": 17,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 16,
        "width": 1
      },
      {
        "name": "Pg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Zm",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zdn",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE || FEAT_SME",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "size",
            "mask": -1,
            "lsb": 0,
            "value": null
          }
        ]
      }
    ]
  }
];
