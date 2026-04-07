import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "PACDB",
    "encodingId": "PACDZB_64Z_dp_1src",
    "mnemonic": "PACDZB",
    "className": "Integer",
    "fileName": "pacdb.xml",
    "mask": 4294967264,
    "value": 3670093792,
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
    "instructionId": "PACDB",
    "encodingId": "PACDB_64P_dp_1src",
    "mnemonic": "PACDB",
    "className": "Integer",
    "fileName": "pacdb.xml",
    "mask": 4294966272,
    "value": 3670084608,
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
