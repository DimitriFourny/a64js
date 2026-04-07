import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "UHSUB_advsimd",
    "encodingId": "UHSUB_asimdsame_only",
    "mnemonic": "UHSUB",
    "className": "Three registers of the same type",
    "fileName": "uhsub_advsimd.xml",
    "mask": 3206609920,
    "value": 773858304,
    "bitCount": 14,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
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
        "name": "opcode",
        "lsb": 11,
        "width": 5
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_AdvSIMD"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": []
  }
];
