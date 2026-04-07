import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "FCVTPS_float",
    "encodingId": "FCVTPS_32D_float2int",
    "mnemonic": "FCVTPS",
    "className": "Floating-point",
    "fileName": "fcvtps_float.xml",
    "mask": 4294966272,
    "value": 510132224,
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
    "instructionId": "FCVTPS_float",
    "encodingId": "FCVTPS_32H_float2int",
    "mnemonic": "FCVTPS",
    "className": "Floating-point",
    "fileName": "fcvtps_float.xml",
    "mask": 4294966272,
    "value": 518520832,
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
    "instructionId": "FCVTPS_float",
    "encodingId": "FCVTPS_32S_float2int",
    "mnemonic": "FCVTPS",
    "className": "Floating-point",
    "fileName": "fcvtps_float.xml",
    "mask": 4294966272,
    "value": 505937920,
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
    "instructionId": "FCVTPS_float",
    "encodingId": "FCVTPS_64D_float2int",
    "mnemonic": "FCVTPS",
    "className": "Floating-point",
    "fileName": "fcvtps_float.xml",
    "mask": 4294966272,
    "value": 2657615872,
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
    "instructionId": "FCVTPS_float",
    "encodingId": "FCVTPS_64H_float2int",
    "mnemonic": "FCVTPS",
    "className": "Floating-point",
    "fileName": "fcvtps_float.xml",
    "mask": 4294966272,
    "value": 2666004480,
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
    "instructionId": "FCVTPS_float",
    "encodingId": "FCVTPS_64S_float2int",
    "mnemonic": "FCVTPS",
    "className": "Floating-point",
    "fileName": "fcvtps_float.xml",
    "mask": 4294966272,
    "value": 2653421568,
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
