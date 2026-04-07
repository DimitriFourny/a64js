import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "UXTH_UBFM",
    "encodingId": "UXTH_UBFM_32M_bitfield",
    "mnemonic": "UBFM",
    "className": "With zeros to left and right",
    "fileName": "uxth_ubfm.xml",
    "mask": 4294966272,
    "value": 1392524288,
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
