import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "PACIA",
    "encodingId": "PACIA1716_HI_hints",
    "mnemonic": "PACIA1716",
    "className": "System",
    "fileName": "pacia.xml",
    "mask": 4294967295,
    "value": 3573752095,
    "bitCount": 32,
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
      }
    ],
    "features": [
      "FEAT_PAuth"
    ],
    "featureGuards": [],
    "guards": []
  },
  {
    "instructionId": "PACIA",
    "encodingId": "PACIASP_HI_hints",
    "mnemonic": "PACIASP",
    "className": "System",
    "fileName": "pacia.xml",
    "mask": 4294967295,
    "value": 3573752639,
    "bitCount": 32,
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
      }
    ],
    "features": [
      "FEAT_PAuth"
    ],
    "featureGuards": [],
    "guards": []
  },
  {
    "instructionId": "PACIA",
    "encodingId": "PACIAZ_HI_hints",
    "mnemonic": "PACIAZ",
    "className": "System",
    "fileName": "pacia.xml",
    "mask": 4294967295,
    "value": 3573752607,
    "bitCount": 32,
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
      }
    ],
    "features": [
      "FEAT_PAuth"
    ],
    "featureGuards": [],
    "guards": []
  },
  {
    "instructionId": "PACIA",
    "encodingId": "PACIZA_64Z_dp_1src",
    "mnemonic": "PACIZA",
    "className": "Integer",
    "fileName": "pacia.xml",
    "mask": 4294967264,
    "value": 3670090720,
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
    "instructionId": "PACIA",
    "encodingId": "PACIA_64P_dp_1src",
    "mnemonic": "PACIA",
    "className": "Integer",
    "fileName": "pacia.xml",
    "mask": 4294966272,
    "value": 3670081536,
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
