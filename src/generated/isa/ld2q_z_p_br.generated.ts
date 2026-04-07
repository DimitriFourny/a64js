import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ld2q_z_p_br",
    "encodingId": "ld2q_z_p_br_contiguous",
    "mnemonic": "LD2Q",
    "className": "SVE2",
    "fileName": "ld2q_z_p_br.xml",
    "mask": 4292927488,
    "value": 2761981952,
    "bitCount": 14,
    "fields": [
      {
        "name": "num",
        "lsb": 23,
        "width": 2
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "Pg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE2p1 || FEAT_SME2p1",
        "all": []
      }
    ],
    "guards": [
      {
        "all": [
          {
            "kind": "eq",
            "field": "Rm",
            "mask": 31,
            "lsb": 0,
            "value": 31
          }
        ]
      }
    ]
  }
];
