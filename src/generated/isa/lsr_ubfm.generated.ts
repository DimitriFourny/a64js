import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "LSR_UBFM",
    "encodingId": "LSR_UBFM_32M_bitfield",
    "mnemonic": "UBFM",
    "className": "With zeros to left and right",
    "fileName": "lsr_ubfm.xml",
    "mask": 4290837504,
    "value": 1392540672,
    "bitCount": 16,
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
    "guards": []
  },
  {
    "instructionId": "LSR_UBFM",
    "encodingId": "LSR_UBFM_64M_bitfield",
    "mnemonic": "UBFM",
    "className": "With zeros to left and right",
    "fileName": "lsr_ubfm.xml",
    "mask": 4290837504,
    "value": 3544251392,
    "bitCount": 16,
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
    "guards": []
  }
];
