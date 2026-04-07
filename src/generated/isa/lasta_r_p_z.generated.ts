import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "lasta_r_p_z",
    "encodingId": "lasta_r_p_z_",
    "mnemonic": "LASTA",
    "className": "SVE",
    "fileName": "lasta_r_p_z.xml",
    "mask": 4282376192,
    "value": 86024192,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "B",
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
        "name": "Rd",
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
    "guards": []
  }
];
