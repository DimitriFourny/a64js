import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FABS_float",
    "encodingId": "FABS_D_floatdp1",
    "mnemonic": "FABS",
    "className": "Floating-point",
    "fileName": "fabs_float.xml",
    "mask": 4294966272,
    "value": 509657088,
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
        "name": "opc",
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
    "instructionId": "FABS_float",
    "encodingId": "FABS_H_floatdp1",
    "mnemonic": "FABS",
    "className": "Floating-point",
    "fileName": "fabs_float.xml",
    "mask": 4294966272,
    "value": 518045696,
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
        "name": "opc",
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
    "instructionId": "FABS_float",
    "encodingId": "FABS_S_floatdp1",
    "mnemonic": "FABS",
    "className": "Floating-point",
    "fileName": "fabs_float.xml",
    "mask": 4294966272,
    "value": 505462784,
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
        "name": "opc",
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
