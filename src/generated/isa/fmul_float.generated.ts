import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FMUL_float",
    "encodingId": "FMUL_D_floatdp2",
    "mnemonic": "FMUL",
    "className": "Floating-point",
    "fileName": "fmul_float.xml",
    "mask": 4292934656,
    "value": 509609984,
    "bitCount": 17,
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
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "op",
        "lsb": 15,
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
    "features": [],
    "featureGuards": [
      {
        "feature": "FEAT_FP",
        "all": []
      },
      {
        "feature": "FEAT_FP16",
        "all": [
          {
            "kind": "eq",
            "field": "ftype",
            "mask": 3,
            "lsb": 0,
            "value": 3
          }
        ]
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
    "instructionId": "FMUL_float",
    "encodingId": "FMUL_H_floatdp2",
    "mnemonic": "FMUL",
    "className": "Floating-point",
    "fileName": "fmul_float.xml",
    "mask": 4292934656,
    "value": 517998592,
    "bitCount": 17,
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
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "op",
        "lsb": 15,
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
    "features": [],
    "featureGuards": [
      {
        "feature": "FEAT_FP",
        "all": []
      },
      {
        "feature": "FEAT_FP16",
        "all": [
          {
            "kind": "eq",
            "field": "ftype",
            "mask": 3,
            "lsb": 0,
            "value": 3
          }
        ]
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
    "instructionId": "FMUL_float",
    "encodingId": "FMUL_S_floatdp2",
    "mnemonic": "FMUL",
    "className": "Floating-point",
    "fileName": "fmul_float.xml",
    "mask": 4292934656,
    "value": 505415680,
    "bitCount": 17,
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
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "op",
        "lsb": 15,
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
    "features": [],
    "featureGuards": [
      {
        "feature": "FEAT_FP",
        "all": []
      },
      {
        "feature": "FEAT_FP16",
        "all": [
          {
            "kind": "eq",
            "field": "ftype",
            "mask": 3,
            "lsb": 0,
            "value": 3
          }
        ]
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
