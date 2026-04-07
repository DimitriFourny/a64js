import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "mov_sel_z_p_zz",
    "encodingId": "mov_z_p_z__sel_z_p_zz_",
    "mnemonic": "SEL",
    "className": "SVE",
    "fileName": "mov_sel_z_p_zz.xml",
    "mask": 4280336384,
    "value": 86032384,
    "bitCount": 11,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "Pv",
        "lsb": 10,
        "width": 4
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
      "FEAT_SVE || FEAT_SME"
    ],
    "featureGuards": [],
    "guards": []
  }
];
