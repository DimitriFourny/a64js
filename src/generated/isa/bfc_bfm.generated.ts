import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "BFC_BFM",
    "encodingId": "BFC_BFM_32M_bitfield",
    "mnemonic": "BFM",
    "className": "Leaving other bits unchanged",
    "fileName": "bfc_bfm.xml",
    "mask": 4290773984,
    "value": 855639008,
    "bitCount": 15,
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
    "features": [
      "FEAT_ASMv8p2"
    ],
    "featureGuards": [],
    "guards": []
  },
  {
    "instructionId": "BFC_BFM",
    "encodingId": "BFC_BFM_64M_bitfield",
    "mnemonic": "BFM",
    "className": "Leaving other bits unchanged",
    "fileName": "bfc_bfm.xml",
    "mask": 4290773984,
    "value": 3007316960,
    "bitCount": 15,
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
    "features": [
      "FEAT_ASMv8p2"
    ],
    "featureGuards": [],
    "guards": []
  }
];
