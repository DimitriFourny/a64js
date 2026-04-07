import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "tbx_z_zz",
    "encodingId": "tbx_z_zz_",
    "mnemonic": "TBX",
    "className": "SVE2",
    "fileName": "tbx_z_zz.xml",
    "mask": 4280351744,
    "value": 85994496,
    "bitCount": 15,
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
        "name": "op",
        "lsb": 10,
        "width": 1
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
  }
];
