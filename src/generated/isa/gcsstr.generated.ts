import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "GCSSTR",
    "encodingId": "GCSSTR_64_ldst_gcs",
    "mnemonic": "GCSSTR",
    "className": "Integer",
    "fileName": "gcsstr.xml",
    "mask": 4294966272,
    "value": 3642690560,
    "bitCount": 22,
    "fields": [
      {
        "name": "opc",
        "lsb": 12,
        "width": 3
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_GCS"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_GCS",
        "all": []
      }
    ],
    "guards": []
  }
];
