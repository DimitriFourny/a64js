import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ABS",
    "encodingId": "ABS_32_dp_1src",
    "mnemonic": "ABS",
    "className": "Integer",
    "fileName": "abs.xml",
    "mask": 4294966272,
    "value": 1522540544,
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
    "instructionId": "ABS",
    "encodingId": "ABS_64_dp_1src",
    "mnemonic": "ABS",
    "className": "Integer",
    "fileName": "abs.xml",
    "mask": 4294966272,
    "value": 3670024192,
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
