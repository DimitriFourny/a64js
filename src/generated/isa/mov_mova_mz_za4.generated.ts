import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "mov_mova_mz_za4",
    "encodingId": "mov_mz_za4_1_mova_mz_za4_1",
    "mnemonic": "MOVA",
    "className": "SME2",
    "fileName": "mov_mova_mz_za4.xml",
    "mask": 4294942467,
    "value": 3221621760,
    "bitCount": 24,
    "fields": [
      {
        "name": "Rv",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "off3",
        "lsb": 5,
        "width": 3
      },
      {
        "name": "Zd",
        "lsb": 2,
        "width": 3
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "featureGuards": [],
    "guards": []
  }
];
