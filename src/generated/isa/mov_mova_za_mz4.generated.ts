import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "mov_mova_za_mz4",
    "encodingId": "mov_za_mz4_1_mova_za_mz4_1",
    "mnemonic": "MOVA",
    "className": "SME2",
    "fileName": "mov_mova_za_mz4.xml",
    "mask": 4294941816,
    "value": 3221490688,
    "bitCount": 24,
    "fields": [
      {
        "name": "Rv",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 7,
        "width": 3
      },
      {
        "name": "off3",
        "lsb": 0,
        "width": 3
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "guards": []
  }
];
