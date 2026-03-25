import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "sub_za_zzw",
    "encodingId": "sub_za_zzw_4x4",
    "mnemonic": "SUB",
    "className": "Four ZA single-vectors",
    "fileName": "sub_za_zzw.xml",
    "mask": 4288912504,
    "value": 3248560152,
    "bitCount": 20,
    "fields": [
      {
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Zm",
        "lsb": 18,
        "width": 3
      },
      {
        "name": "Rv",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 7,
        "width": 3
      },
      {
        "name": "S",
        "lsb": 3,
        "width": 1
      },
      {
        "name": "off3",
        "lsb": 0,
        "width": 3
      }
    ],
    "features": [
      "FEAT_SME2",
      "FEAT_SME_I16I64"
    ],
    "guards": []
  },
  {
    "instructionId": "sub_za_zzw",
    "encodingId": "sub_za_zzw_2x2",
    "mnemonic": "SUB",
    "className": "Two ZA single-vectors",
    "fileName": "sub_za_zzw.xml",
    "mask": 4288781368,
    "value": 3248494616,
    "bitCount": 18,
    "fields": [
      {
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Zm",
        "lsb": 17,
        "width": 4
      },
      {
        "name": "Rv",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 6,
        "width": 4
      },
      {
        "name": "S",
        "lsb": 3,
        "width": 1
      },
      {
        "name": "off3",
        "lsb": 0,
        "width": 3
      }
    ],
    "features": [
      "FEAT_SME2",
      "FEAT_SME_I16I64"
    ],
    "guards": []
  }
];
