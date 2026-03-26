import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "LDAPURH",
    "encodingId": "LDAPURH_32_ldapstl_unscaled",
    "mnemonic": "LDAPURH",
    "className": "Unscaled offset",
    "fileName": "ldapurh.xml",
    "mask": 4292873216,
    "value": 1497366528,
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
    "guards": []
  }
];
