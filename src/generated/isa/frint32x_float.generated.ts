import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FRINT32X_float",
    "encodingId": "FRINT32X_D_floatdp1",
    "mnemonic": "FRINT32X",
    "className": "Floating-point",
    "fileName": "frint32x_float.xml",
    "mask": 4294966272,
    "value": 510181376,
    "bitCount": 22,
    "fields": [
      {
        "name": "M",
        "lsb": 31,
        "width": 1
      },
      {
        "name": "S",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "ftype",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "op",
        "lsb": 15,
        "width": 2
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
      "FEAT_FRINTTS"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_FRINTTS",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "ftype",
            "mask": 3,
            "lsb": 0,
            "value": 2
          }
        ]
      }
    ]
  },
  {
    "instructionId": "FRINT32X_float",
    "encodingId": "FRINT32X_S_floatdp1",
    "mnemonic": "FRINT32X",
    "className": "Floating-point",
    "fileName": "frint32x_float.xml",
    "mask": 4294966272,
    "value": 505987072,
    "bitCount": 22,
    "fields": [
      {
        "name": "M",
        "lsb": 31,
        "width": 1
      },
      {
        "name": "S",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "ftype",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "op",
        "lsb": 15,
        "width": 2
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
      "FEAT_FRINTTS"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_FRINTTS",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "ftype",
            "mask": 3,
            "lsb": 0,
            "value": 2
          }
        ]
      }
    ]
  }
];
