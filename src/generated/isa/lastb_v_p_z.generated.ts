import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "lastb_v_p_z",
    "encodingId": "lastb_v_p_z_",
    "mnemonic": "LASTB",
    "className": "SVE",
    "fileName": "lastb_v_p_z.xml",
    "mask": 4282376192,
    "value": 86212608,
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
        "name": "Vd",
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
