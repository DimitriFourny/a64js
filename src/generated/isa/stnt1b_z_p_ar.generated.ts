import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "stnt1b_z_p_ar",
    "encodingId": "stnt1b_z_p_ar_d_64_unscaled",
    "mnemonic": "STNT1B",
    "className": "64-bit unscaled offset",
    "fileName": "stnt1b_z_p_ar.xml",
    "mask": 4292927488,
    "value": 3825213440,
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
        "name": "Zn",
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
      "FEAT_SVE2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE2",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "stnt1b_z_p_ar",
    "encodingId": "stnt1b_z_p_ar_s_x32_unscaled",
    "mnemonic": "STNT1B",
    "className": "32-bit unscaled offset",
    "fileName": "stnt1b_z_p_ar.xml",
    "mask": 4292927488,
    "value": 3829407744,
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
        "name": "Zn",
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
      "FEAT_SVE2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE2",
        "all": []
      }
    ],
    "guards": []
  }
];
