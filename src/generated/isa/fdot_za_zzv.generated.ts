import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fdot_za_zzv",
    "encodingId": "fdot_za_zzv_2x1",
    "mnemonic": "FDOT",
    "className": "Two ZA single-vectors",
    "fileName": "fdot_za_zzv.xml",
    "mask": 4293958680,
    "value": 3240103936,
    "bitCount": 18,
    "fields": [
      {
        "name": "Zm",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "Rv",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "opc",
        "lsb": 3,
        "width": 2
      },
      {
        "name": "off3",
        "lsb": 0,
        "width": 3
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SME2",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "fdot_za_zzv",
    "encodingId": "fdot_za_zzv_4x1",
    "mnemonic": "FDOT",
    "className": "Four ZA single-vectors",
    "fileName": "fdot_za_zzv.xml",
    "mask": 4293958680,
    "value": 3241152512,
    "bitCount": 18,
    "fields": [
      {
        "name": "Zm",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "Rv",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "opc",
        "lsb": 3,
        "width": 2
      },
      {
        "name": "off3",
        "lsb": 0,
        "width": 3
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SME2",
        "all": []
      }
    ],
    "guards": []
  }
];
