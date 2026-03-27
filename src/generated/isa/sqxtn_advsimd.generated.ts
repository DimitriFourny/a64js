import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SQXTN_advsimd",
    "encodingId": "SQXTN_asisdmisc_N",
    "mnemonic": "SQXTN",
    "className": "Scalar",
    "fileName": "sqxtn_advsimd.xml",
    "mask": 4282383360,
    "value": 1579239424,
    "bitCount": 20,
    "fields": [
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
        "name": "opcode",
        "lsb": 12,
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
  },
  {
    "instructionId": "SQXTN_advsimd",
    "encodingId": "SQXTN_asimdmisc_N",
    "mnemonic": "SQXTN",
    "className": "Vector",
    "fileName": "sqxtn_advsimd.xml",
    "mask": 3208641536,
    "value": 237062144,
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
        "name": "opcode",
        "lsb": 12,
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
