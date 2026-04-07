import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SXTB_SBFM",
    "encodingId": "SXTB_SBFM_32M_bitfield",
    "mnemonic": "SBFM",
    "className": "With sign replication to left and zeros to right",
    "fileName": "sxtb_sbfm.xml",
    "mask": 4294966272,
    "value": 318774272,
    "bitCount": 22,
    "fields": [
      {
        "name": "sf",
        "lsb": 31,
        "width": 1
      },
      {
        "name": "opc",
        "lsb": 29,
        "width": 2
      },
      {
        "name": "N",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "immr",
        "lsb": 16,
        "width": 6
      },
      {
        "name": "imms",
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
    "features": [],
    "featureGuards": [],
    "guards": []
  },
  {
    "instructionId": "SXTB_SBFM",
    "encodingId": "SXTB_SBFM_64M_bitfield",
    "mnemonic": "SBFM",
    "className": "With sign replication to left and zeros to right",
    "fileName": "sxtb_sbfm.xml",
    "mask": 4294966272,
    "value": 2470452224,
    "bitCount": 22,
    "fields": [
      {
        "name": "sf",
        "lsb": 31,
        "width": 1
      },
      {
        "name": "opc",
        "lsb": 29,
        "width": 2
      },
      {
        "name": "N",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "immr",
        "lsb": 16,
        "width": 6
      },
      {
        "name": "imms",
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
    "features": [],
    "featureGuards": [],
    "guards": []
  }
];
