import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "flogb_z_p_z",
    "encodingId": "flogb_z_p_z_m",
    "mnemonic": "FLOGB",
    "className": "Merging",
    "fileName": "flogb_z_p_z.xml",
    "mask": 4294565888,
    "value": 1696112640,
    "bitCount": 17,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "size",
        "lsb": 17,
        "width": 2
      },
      {
        "name": "U",
        "lsb": 16,
        "width": 1
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
      "FEAT_SVE2 || FEAT_SME"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE2 || FEAT_SME",
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
    "instructionId": "flogb_z_p_z",
    "encodingId": "flogb_z_p_z_z",
    "mnemonic": "FLOGB",
    "className": "Zeroing",
    "fileName": "flogb_z_p_z.xml",
    "mask": 4294934528,
    "value": 1679720448,
    "bitCount": 17,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "o2",
        "lsb": 16,
        "width": 1
      },
      {
        "name": "size",
        "lsb": 13,
        "width": 2
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
