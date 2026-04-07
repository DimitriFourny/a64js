import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "WFIT",
    "encodingId": "WFIT_only_systeminstrswithreg",
    "mnemonic": "WFIT",
    "className": "System",
    "fileName": "wfit.xml",
    "mask": 4294967264,
    "value": 3573747744,
    "bitCount": 27,
    "fields": [
      {
        "name": "CRm",
        "lsb": 8,
        "width": 4
      },
      {
        "name": "op2",
        "lsb": 5,
        "width": 3
      },
      {
        "name": "Rd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_WFxT"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_WFxT",
        "all": []
      }
    ],
    "guards": []
  }
];
