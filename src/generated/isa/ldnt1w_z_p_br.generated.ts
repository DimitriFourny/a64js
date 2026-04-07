import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ldnt1w_z_p_br",
    "encodingId": "ldnt1w_z_p_br_contiguous",
    "mnemonic": "LDNT1W",
    "className": "SVE",
    "fileName": "ldnt1w_z_p_br.xml",
    "mask": 4292927488,
    "value": 2768289792,
    "bitCount": 14,
    "fields": [
      {
        "name": "msz",
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
