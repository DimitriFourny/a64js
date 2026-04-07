import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "splice_z_p_zz",
    "encodingId": "splice_z_p_zz_con",
    "mnemonic": "SPLICE",
    "className": "Constructive",
    "fileName": "splice_z_p_zz.xml",
    "mask": 4282376192,
    "value": 86867968,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Pv",
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
    "guards": []
  },
  {
    "instructionId": "splice_z_p_zz",
    "encodingId": "splice_z_p_zz_des",
    "mnemonic": "SPLICE",
    "className": "Destructive",
    "fileName": "splice_z_p_zz.xml",
    "mask": 4282376192,
    "value": 86802432,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Pv",
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
