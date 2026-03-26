import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "UADDLP_advsimd",
    "encodingId": "UADDLP_asimdmisc_P",
    "mnemonic": "UADDLP",
    "className": "Vector",
    "fileName": "uaddlp_advsimd.xml",
    "mask": 3208641536,
    "value": 773859328,
    "bitCount": 19,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "op",
        "lsb": 14,
        "width": 1
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_AdvSIMD"
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 3
          }
        ]
      }
    ]
  }
];
