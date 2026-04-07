import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "clasta_r_p_z",
    "encodingId": "clasta_r_p_z_",
    "mnemonic": "CLASTA",
    "className": "SVE",
    "fileName": "clasta_r_p_z.xml",
    "mask": 4282376192,
    "value": 87072768,
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
        "name": "Zm",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rdn",
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
