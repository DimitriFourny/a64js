import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "PACDA",
    "encodingId": "PACDZA_64Z_dp_1src",
    "mnemonic": "PACDZA",
    "className": "Integer",
    "fileName": "pacda.xml",
    "mask": 4294967264,
    "value": 3670092768,
    "bitCount": 27,
    "fields": [
      {
        "name": "sf",
        "lsb": 31,
        "width": 1
      },
      {
        "name": "S",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "opcode2",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "Z",
        "lsb": 13,
        "width": 1
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
      "FEAT_PAuth"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_PAuth",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "PACDA",
    "encodingId": "PACDA_64P_dp_1src",
    "mnemonic": "PACDA",
    "className": "Integer",
    "fileName": "pacda.xml",
    "mask": 4294966272,
    "value": 3670083584,
    "bitCount": 22,
    "fields": [
      {
        "name": "sf",
        "lsb": 31,
        "width": 1
      },
      {
        "name": "S",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "opcode2",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "Z",
        "lsb": 13,
        "width": 1
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
      "FEAT_PAuth"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_PAuth",
        "all": []
      }
    ],
    "guards": []
  }
];
