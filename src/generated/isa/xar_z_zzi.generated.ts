import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "xar_z_zzi",
    "encodingId": "xar_z_zzi_",
    "mnemonic": "XAR",
    "className": "SVE2",
    "fileName": "xar_z_zzi.xml",
    "mask": 4280351744,
    "value": 69219328,
    "bitCount": 15,
    "fields": [
      {
        "name": "tszh",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "tszl",
        "lsb": 19,
        "width": 2
      },
      {
        "name": "imm3",
        "lsb": 16,
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
