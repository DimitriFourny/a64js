import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "stnt1h_z_p_bi",
    "encodingId": "stnt1h_z_p_bi_contiguous",
    "mnemonic": "STNT1H",
    "className": "SVE",
    "fileName": "stnt1h_z_p_bi.xml",
    "mask": 4293976064,
    "value": 3834699776,
    "bitCount": 15,
    "fields": [
      {
        "name": "msz",
        "lsb": 23,
        "width": 2
      },
      {
        "name": "imm4",
        "lsb": 16,
        "width": 4
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
    "guards": []
  }
];
