import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fneg_z_p_z",
    "encodingId": "fneg_z_p_z_m",
    "mnemonic": "FNEG",
    "className": "Merging",
    "fileName": "fneg_z_p_z.xml",
    "mask": 4282376192,
    "value": 69050368,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "M",
        "lsb": 20,
        "width": 1
      },
      {
        "name": "opc",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "Pg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE || FEAT_SME",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  },
  {
    "instructionId": "fneg_z_p_z",
    "encodingId": "fneg_z_p_z_z",
    "mnemonic": "FNEG",
    "className": "Zeroing",
    "fileName": "fneg_z_p_z.xml",
    "mask": 4282376192,
    "value": 68001792,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "M",
        "lsb": 20,
        "width": 1
      },
      {
        "name": "opc",
        "lsb": 16,
        "width": 3
      },
      {
        "name": "Pg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE2p2 || FEAT_SME2p2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE2p2 || FEAT_SME2p2",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 0
          }
        ]
      }
    ]
  }
];
