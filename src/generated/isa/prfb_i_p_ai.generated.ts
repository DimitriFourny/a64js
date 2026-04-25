import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "prfb_i_p_ai",
    "encodingId": "prfb_i_p_ai_d",
    "mnemonic": "PRFB",
    "className": "64-bit element",
    "fileName": "prfb_i_p_ai.xml",
    "mask": 4292927504,
    "value": 3288391680,
    "bitCount": 15,
    "fields": [
      {
        "name": "msz",
        "lsb": 23,
        "width": 2
      },
      {
        "name": "imm5",
        "lsb": 16,
        "width": 5
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
        "name": "prfop",
        "lsb": 0,
        "width": 4
      }
    ],
    "features": [
      "FEAT_SVE"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "prfb_i_p_ai",
    "encodingId": "prfb_i_p_ai_s",
    "mnemonic": "PRFB",
    "className": "32-bit element",
    "fileName": "prfb_i_p_ai.xml",
    "mask": 4292927504,
    "value": 2214649856,
    "bitCount": 15,
    "fields": [
      {
        "name": "msz",
        "lsb": 23,
        "width": 2
      },
      {
        "name": "imm5",
        "lsb": 16,
        "width": 5
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
        "name": "prfop",
        "lsb": 0,
        "width": 4
      }
    ],
    "features": [
      "FEAT_SVE"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE",
        "all": []
      }
    ],
    "guards": []
  }
];
