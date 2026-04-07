import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ptrue_pn_i",
    "encodingId": "ptrue_pn_i_",
    "mnemonic": "PTRUE",
    "className": "SVE2",
    "fileName": "ptrue_pn_i.xml",
    "mask": 4282384376,
    "value": 622884880,
    "bitCount": 27,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "PNd",
        "lsb": 0,
        "width": 3
      }
    ],
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SME2 || FEAT_SVE2p1",
        "all": []
      }
    ],
    "guards": []
  }
];
