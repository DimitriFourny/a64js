import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "UABAL_advsimd",
    "encodingId": "UABAL_asimddiff_L",
    "mnemonic": "UABAL",
    "className": "Three registers, not all the same type",
    "fileName": "uabal_advsimd.xml",
    "mask": 3206609920,
    "value": 773869568,
    "bitCount": 14,
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
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "op",
        "lsb": 13,
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
