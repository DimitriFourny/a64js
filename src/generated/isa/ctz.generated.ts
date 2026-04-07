import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "CTZ",
    "encodingId": "CTZ_32_dp_1src",
    "mnemonic": "CTZ",
    "className": "Integer",
    "fileName": "ctz.xml",
    "mask": 4294966272,
    "value": 1522538496,
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
        "name": "opcode",
        "lsb": 10,
        "width": 6
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
      "FEAT_CSSC"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_CSSC",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "CTZ",
    "encodingId": "CTZ_64_dp_1src",
    "mnemonic": "CTZ",
    "className": "Integer",
    "fileName": "ctz.xml",
    "mask": 4294966272,
    "value": 3670022144,
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
        "name": "opcode",
        "lsb": 10,
        "width": 6
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
      "FEAT_CSSC"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_CSSC",
        "all": []
      }
    ],
    "guards": []
  }
];
