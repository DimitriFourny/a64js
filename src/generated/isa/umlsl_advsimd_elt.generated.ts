import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "UMLSL_advsimd_elt",
    "encodingId": "UMLSL_asimdelem_L",
    "mnemonic": "UMLSL",
    "className": "Vector",
    "fileName": "umlsl_advsimd_elt.xml",
    "mask": 3204510720,
    "value": 788553728,
    "bitCount": 12,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "L",
        "lsb": 21,
        "width": 1
      },
      {
        "name": "M",
        "lsb": 20,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "o2",
        "lsb": 14,
        "width": 1
      },
      {
        "name": "H",
        "lsb": 11,
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
      "FEAT_AdvSIMD"
    ],
    "guards": []
  }
];
