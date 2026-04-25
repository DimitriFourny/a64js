import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ursqrte_z_p_z",
    "encodingId": "ursqrte_z_p_z_m",
    "mnemonic": "URSQRTE",
    "className": "Merging",
    "fileName": "ursqrte_z_p_z.xml",
    "mask": 4282376192,
    "value": 1140957184,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Q",
        "lsb": 19,
        "width": 1
      },
      {
        "name": "Z",
        "lsb": 17,
        "width": 1
      },
      {
        "name": "op",
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
            "kind": "ne",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 2
          }
        ]
      }
    ]
  },
  {
    "instructionId": "ursqrte_z_p_z",
    "encodingId": "ursqrte_z_p_z_z",
    "mnemonic": "URSQRTE",
    "className": "Zeroing",
    "fileName": "ursqrte_z_p_z.xml",
    "mask": 4282376192,
    "value": 1141088256,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Q",
        "lsb": 19,
        "width": 1
      },
      {
        "name": "Z",
        "lsb": 17,
        "width": 1
      },
      {
        "name": "op",
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
            "kind": "ne",
            "field": "size",
            "mask": 3,
            "lsb": 0,
            "value": 2
          }
        ]
      }
    ]
  }
];
