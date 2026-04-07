import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FCVTZU_float_int",
    "encodingId": "FCVTZU_32D_float2int",
    "mnemonic": "FCVTZU",
    "className": "Floating-point",
    "fileName": "fcvtzu_float_int.xml",
    "mask": 4294966272,
    "value": 511246336,
    "bitCount": 22,
    "fields": [
      {
        "name": "sf",
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
        "lsb": 19,
        "width": 2
      },
      {
        "name": "opcode",
        "lsb": 16,
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
    "instructionId": "FCVTZU_float_int",
    "encodingId": "FCVTZU_32H_float2int",
    "mnemonic": "FCVTZU",
    "className": "Floating-point",
    "fileName": "fcvtzu_float_int.xml",
    "mask": 4294966272,
    "value": 519634944,
    "bitCount": 22,
    "fields": [
      {
        "name": "sf",
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
        "lsb": 19,
        "width": 2
      },
      {
        "name": "opcode",
        "lsb": 16,
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
    "instructionId": "FCVTZU_float_int",
    "encodingId": "FCVTZU_32S_float2int",
    "mnemonic": "FCVTZU",
    "className": "Floating-point",
    "fileName": "fcvtzu_float_int.xml",
    "mask": 4294966272,
    "value": 507052032,
    "bitCount": 22,
    "fields": [
      {
        "name": "sf",
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
        "lsb": 19,
        "width": 2
      },
      {
        "name": "opcode",
        "lsb": 16,
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
    "instructionId": "FCVTZU_float_int",
    "encodingId": "FCVTZU_64D_float2int",
    "mnemonic": "FCVTZU",
    "className": "Floating-point",
    "fileName": "fcvtzu_float_int.xml",
    "mask": 4294966272,
    "value": 2658729984,
    "bitCount": 22,
    "fields": [
      {
        "name": "sf",
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
        "lsb": 19,
        "width": 2
      },
      {
        "name": "opcode",
        "lsb": 16,
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
    "instructionId": "FCVTZU_float_int",
    "encodingId": "FCVTZU_64H_float2int",
    "mnemonic": "FCVTZU",
    "className": "Floating-point",
    "fileName": "fcvtzu_float_int.xml",
    "mask": 4294966272,
    "value": 2667118592,
    "bitCount": 22,
    "fields": [
      {
        "name": "sf",
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
        "lsb": 19,
        "width": 2
      },
      {
        "name": "opcode",
        "lsb": 16,
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
    "instructionId": "FCVTZU_float_int",
    "encodingId": "FCVTZU_64S_float2int",
    "mnemonic": "FCVTZU",
    "className": "Floating-point",
    "fileName": "fcvtzu_float_int.xml",
    "mask": 4294966272,
    "value": 2654535680,
    "bitCount": 22,
    "fields": [
      {
        "name": "sf",
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
        "lsb": 19,
        "width": 2
      },
      {
        "name": "opcode",
        "lsb": 16,
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
