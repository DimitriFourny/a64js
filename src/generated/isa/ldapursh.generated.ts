import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "LDAPURSH",
    "encodingId": "LDAPURSH_32_ldapstl_unscaled",
    "mnemonic": "LDAPURSH",
    "className": "Unscaled offset",
    "fileName": "ldapursh.xml",
    "mask": 4292873216,
    "value": 1505755136,
    "bitCount": 13,
    "fields": [
      {
        "name": "size",
        "lsb": 30,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "imm9",
        "lsb": 12,
        "width": 9
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
      "FEAT_LRCPC2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_LRCPC2",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "LDAPURSH",
    "encodingId": "LDAPURSH_64_ldapstl_unscaled",
    "mnemonic": "LDAPURSH",
    "className": "Unscaled offset",
    "fileName": "ldapursh.xml",
    "mask": 4292873216,
    "value": 1501560832,
    "bitCount": 13,
    "fields": [
      {
        "name": "size",
        "lsb": 30,
        "width": 2
      },
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "imm9",
        "lsb": 12,
        "width": 9
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
      "FEAT_LRCPC2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_LRCPC2",
        "all": []
      }
    ],
    "guards": []
  }
];
