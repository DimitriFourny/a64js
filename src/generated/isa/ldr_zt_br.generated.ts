import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ldr_zt_br",
    "encodingId": "ldr_zt_br_",
    "mnemonic": "LDR",
    "className": "SME2",
    "fileName": "ldr_zt_br.xml",
    "mask": 4294966303,
    "value": 3776937984,
    "bitCount": 27,
    "fields": [
      {
        "name": "opc",
        "lsb": 16,
        "width": 6
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "opc2",
        "lsb": 0,
        "width": 2
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SME2",
        "all": []
      }
    ],
    "guards": []
  }
];
