import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SSBB_DSB",
    "encodingId": "SSBB_DSB_BO_barriers",
    "mnemonic": "DSB",
    "className": "Memory barrier",
    "fileName": "ssbb_dsb.xml",
    "mask": 4294967295,
    "value": 3573756063,
    "bitCount": 32,
    "fields": [
      {
        "name": "CRm",
        "lsb": 8,
        "width": 4
      },
      {
        "name": "opc",
        "lsb": 5,
        "width": 2
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [],
    "featureGuards": [],
    "guards": []
  }
];
