import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ptrues_p_s",
    "encodingId": "ptrues_p_s_",
    "mnemonic": "PTRUES",
    "className": "Setting the condition flags",
    "fileName": "ptrues_p_s.xml",
    "mask": 4282383376,
    "value": 622452736,
    "bitCount": 21,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "S",
        "lsb": 16,
        "width": 1
      },
      {
        "name": "pattern",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Pd",
        "lsb": 0,
        "width": 4
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ],
    "guards": []
  }
];
