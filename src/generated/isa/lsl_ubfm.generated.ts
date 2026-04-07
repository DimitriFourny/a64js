import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "LSL_UBFM",
    "encodingId": "LSL_UBFM_32M_bitfield",
    "mnemonic": "UBFM",
    "className": "With zeros to left and right",
    "fileName": "lsl_ubfm.xml",
    "mask": 4290772992,
    "value": 1392508928,
    "bitCount": 10,
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
    "instructionId": "LSL_UBFM",
    "encodingId": "LSL_UBFM_64M_bitfield",
    "mnemonic": "UBFM",
    "className": "With zeros to left and right",
    "fileName": "lsl_ubfm.xml",
    "mask": 4290772992,
    "value": 3544186880,
    "bitCount": 10,
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
