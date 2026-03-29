import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FRINTI_float",
    "encodingId": "FRINTI_D_floatdp1",
    "mnemonic": "FRINTI",
    "className": "Floating-point",
    "fileName": "frinti_float.xml",
    "mask": 4294966272,
    "value": 510115840,
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
        "name": "rmode",
        "lsb": 15,
        "width": 3
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
      "FEAT_FP",
      "FEAT_FP16"
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
    "instructionId": "FRINTI_float",
    "encodingId": "FRINTI_H_floatdp1",
    "mnemonic": "FRINTI",
    "className": "Floating-point",
    "fileName": "frinti_float.xml",
    "mask": 4294966272,
    "value": 518504448,
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
        "name": "rmode",
        "lsb": 15,
        "width": 3
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
      "FEAT_FP",
      "FEAT_FP16"
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
    "instructionId": "FRINTI_float",
    "encodingId": "FRINTI_S_floatdp1",
    "mnemonic": "FRINTI",
    "className": "Floating-point",
    "fileName": "frinti_float.xml",
    "mask": 4294966272,
    "value": 505921536,
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
        "name": "rmode",
        "lsb": 15,
        "width": 3
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
      "FEAT_FP",
      "FEAT_FP16"
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
