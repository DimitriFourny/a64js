import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fadda_v_p_z",
    "encodingId": "fadda_v_p_z_",
    "mnemonic": "FADDA",
    "className": "SVE",
    "fileName": "fadda_v_p_z.xml",
    "mask": 4282376192,
    "value": 1696079872,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 16,
        "width": 2
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
        "name": "Vdn",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE",
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
