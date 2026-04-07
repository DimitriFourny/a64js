import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "bsl2n_z_zzz",
    "encodingId": "bsl2n_z_zzz_",
    "mnemonic": "BSL2N",
    "className": "SVE2",
    "fileName": "bsl2n_z_zzz.xml",
    "mask": 4292934656,
    "value": 77609984,
    "bitCount": 17,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "o2",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "Zk",
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
