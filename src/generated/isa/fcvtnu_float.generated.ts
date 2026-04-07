import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FCVTNU_float",
    "encodingId": "FCVTNU_32D_float2int",
    "mnemonic": "FCVTNU",
    "className": "Floating-point",
    "fileName": "fcvtnu_float.xml",
    "mask": 4294966272,
    "value": 509673472,
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
    "instructionId": "FCVTNU_float",
    "encodingId": "FCVTNU_32H_float2int",
    "mnemonic": "FCVTNU",
    "className": "Floating-point",
    "fileName": "fcvtnu_float.xml",
    "mask": 4294966272,
    "value": 518062080,
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
    "instructionId": "FCVTNU_float",
    "encodingId": "FCVTNU_32S_float2int",
    "mnemonic": "FCVTNU",
    "className": "Floating-point",
    "fileName": "fcvtnu_float.xml",
    "mask": 4294966272,
    "value": 505479168,
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
    "instructionId": "FCVTNU_float",
    "encodingId": "FCVTNU_64D_float2int",
    "mnemonic": "FCVTNU",
    "className": "Floating-point",
    "fileName": "fcvtnu_float.xml",
    "mask": 4294966272,
    "value": 2657157120,
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
    "instructionId": "FCVTNU_float",
    "encodingId": "FCVTNU_64H_float2int",
    "mnemonic": "FCVTNU",
    "className": "Floating-point",
    "fileName": "fcvtnu_float.xml",
    "mask": 4294966272,
    "value": 2665545728,
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
    "instructionId": "FCVTNU_float",
    "encodingId": "FCVTNU_64S_float2int",
    "mnemonic": "FCVTNU",
    "className": "Floating-point",
    "fileName": "fcvtnu_float.xml",
    "mask": 4294966272,
    "value": 2652962816,
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
