import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "bic_and_z_zi",
    "encodingId": "bic_z_zi__and_z_zi_",
    "mnemonic": "AND",
    "className": "SVE",
    "fileName": "bic_and_z_zi.xml",
    "mask": 4294705152,
    "value": 92274688,
    "bitCount": 14,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "imm13",
        "lsb": 5,
        "width": 13
      },
      {
        "name": "Zdn",
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
