import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "whilegt_pp_rr",
    "encodingId": "whilegt_pp_rr_",
    "mnemonic": "WHILEGT",
    "className": "SVE2",
    "fileName": "whilegt_pp_rr.xml",
    "mask": 4280351761,
    "value": 622874641,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "U",
        "lsb": 11,
        "width": 1
      },
      {
        "name": "lt",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Pd",
        "lsb": 1,
        "width": 3
      },
      {
        "name": "eq",
        "lsb": 0,
        "width": 1
      }
    ],
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ],
    "guards": []
  }
];
