import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "clasta_z_p_zz",
    "encodingId": "clasta_z_p_zz_",
    "mnemonic": "CLASTA",
    "className": "SVE",
    "fileName": "clasta_z_p_zz.xml",
    "mask": 4282376192,
    "value": 86540288,
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
        "name": "Zdn",
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
