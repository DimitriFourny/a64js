import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "addpt_z_p_zz",
    "encodingId": "addpt_z_p_zz_",
    "mnemonic": "ADDPT",
    "className": "SVE2",
    "fileName": "addpt_z_p_zz.xml",
    "mask": 4294959104,
    "value": 79953920,
    "bitCount": 19,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 16,
        "width": 3
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
      "FEAT_SVE && FEAT_CPA"
    ],
    "featureGuards": [],
    "guards": []
  }
];
