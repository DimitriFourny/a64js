import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SSRA_advsimd",
    "encodingId": "SSRA_asisdshf_R",
    "mnemonic": "SSRA",
    "className": "Scalar",
    "fileName": "ssra_advsimd.xml",
    "mask": 4290837504,
    "value": 1598034944,
    "bitCount": 16,
    "fields": [
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "immh",
        "lsb": 19,
        "width": 4
      },
      {
        "name": "immb",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "o1",
        "lsb": 13,
        "width": 1
      },
      {
        "name": "o0",
        "lsb": 12,
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
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "ne",
            "field": "immh",
            "mask": 8,
            "lsb": 3,
            "value": 1
          }
        ]
      }
    ]
  },
  {
    "instructionId": "SSRA_advsimd",
    "encodingId": "SSRA_asimdshf_R",
    "mnemonic": "SSRA",
    "className": "Vector",
    "fileName": "ssra_advsimd.xml",
    "mask": 3212901376,
    "value": 251663360,
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
        "name": "immh",
        "lsb": 19,
        "width": 4
      },
      {
        "name": "immb",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "o1",
        "lsb": 13,
        "width": 1
      },
      {
        "name": "o0",
        "lsb": 12,
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
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq_concat",
            "parts": [
              {
                "field": "immh",
                "msb": 3,
                "lsb": 3
              },
              {
                "field": "Q",
                "msb": 0,
                "lsb": 0
              }
            ],
            "value": 2
          }
        ]
      }
    ]
  }
];
