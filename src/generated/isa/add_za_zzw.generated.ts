import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "add_za_zzw",
    "encodingId": "add_za_zzw_4x4",
    "mnemonic": "ADD",
    "className": "Four ZA single-vectors",
    "fileName": "add_za_zzw.xml",
    "mask": 4288912504,
    "value": 3248560144,
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
      "FEAT_SME2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SME2",
        "all": []
      },
      {
        "feature": "FEAT_SME_I16I64",
        "all": [
          {
            "kind": "eq",
            "field": "sz",
            "mask": 1,
            "lsb": 0,
            "value": 1
          }
        ]
      }
    ],
    "guards": []
  },
  {
    "instructionId": "add_za_zzw",
    "encodingId": "add_za_zzw_2x2",
    "mnemonic": "ADD",
    "className": "Two ZA single-vectors",
    "fileName": "add_za_zzw.xml",
    "mask": 4288781368,
    "value": 3248494608,
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
      "FEAT_SME2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SME2",
        "all": []
      },
      {
        "feature": "FEAT_SME_I16I64",
        "all": [
          {
            "kind": "eq",
            "field": "sz",
            "mask": 1,
            "lsb": 0,
            "value": 1
          }
        ]
      }
    ],
    "guards": []
  }
];
