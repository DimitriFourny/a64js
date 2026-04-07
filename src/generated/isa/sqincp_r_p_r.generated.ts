import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sqincp_r_p_r",
    "encodingId": "sqincp_r_p_r_sx",
    "mnemonic": "SQINCP",
    "className": "32-bit",
    "fileName": "sqincp_r_p_r.xml",
    "mask": 4282383872,
    "value": 623413248,
    "bitCount": 21,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "D",
        "lsb": 17,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 16,
        "width": 1
      },
      {
        "name": "sf",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 9,
        "width": 1
      },
      {
        "name": "Pm",
        "lsb": 5,
        "width": 4
      },
      {
        "name": "Rdn",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE || FEAT_SME",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "sqincp_r_p_r",
    "encodingId": "sqincp_r_p_r_x",
    "mnemonic": "SQINCP",
    "className": "64-bit",
    "fileName": "sqincp_r_p_r.xml",
    "mask": 4282383872,
    "value": 623414272,
    "bitCount": 21,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "D",
        "lsb": 17,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 16,
        "width": 1
      },
      {
        "name": "sf",
        "lsb": 10,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 9,
        "width": 1
      },
      {
        "name": "Pm",
        "lsb": 5,
        "width": 4
      },
      {
        "name": "Rdn",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE || FEAT_SME"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE || FEAT_SME",
        "all": []
      }
    ],
    "guards": []
  }
];
