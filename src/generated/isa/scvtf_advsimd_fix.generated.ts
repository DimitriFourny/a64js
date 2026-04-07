import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SCVTF_advsimd_fix",
    "encodingId": "SCVTF_asisdshf_C",
    "mnemonic": "SCVTF",
    "className": "Scalar",
    "fileName": "scvtf_advsimd_fix.xml",
    "mask": 4286643200,
    "value": 1593893888,
    "bitCount": 15,
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
        "name": "opcode",
        "lsb": 11,
        "width": 5
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
    "guards": []
  },
  {
    "instructionId": "SCVTF_advsimd_fix",
    "encodingId": "SCVTF_asimdshf_C",
    "mnemonic": "SCVTF",
    "className": "Vector",
    "fileName": "scvtf_advsimd_fix.xml",
    "mask": 3212901376,
    "value": 251716608,
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
        "name": "opcode",
        "lsb": 11,
        "width": 5
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
