import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sbclb_z_zzz",
    "encodingId": "sbclb_z_zzz_",
    "mnemonic": "SBCLB",
    "className": "SVE2",
    "fileName": "sbclb_z_zzz.xml",
    "mask": 4288740352,
    "value": 1166069760,
    "bitCount": 16,
    "fields": [
      {
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "T",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zda",
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
