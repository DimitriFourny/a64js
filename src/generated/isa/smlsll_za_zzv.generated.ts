import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "smlsll_za_zzv",
    "encodingId": "smlsll_za_zzv_2x1",
    "mnemonic": "SMLSLL",
    "className": "Two ZA quad-vectors",
    "fileName": "smlsll_za_zzv.xml",
    "mask": 4289764382,
    "value": 3240099848,
    "bitCount": 19,
    "fields": [
      {
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
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
        "name": "U",
        "lsb": 4,
        "width": 1
      },
      {
        "name": "S",
        "lsb": 3,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 2,
        "width": 1
      },
      {
        "name": "o1",
        "lsb": 0,
        "width": 1
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
    "instructionId": "smlsll_za_zzv",
    "encodingId": "smlsll_za_zzv_4x1",
    "mnemonic": "SMLSLL",
    "className": "Four ZA quad-vectors",
    "fileName": "smlsll_za_zzv.xml",
    "mask": 4289764382,
    "value": 3241148424,
    "bitCount": 19,
    "fields": [
      {
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
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
        "name": "U",
        "lsb": 4,
        "width": 1
      },
      {
        "name": "S",
        "lsb": 3,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 2,
        "width": 1
      },
      {
        "name": "o1",
        "lsb": 0,
        "width": 1
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
    "instructionId": "smlsll_za_zzv",
    "encodingId": "smlsll_za_zzv_1",
    "mnemonic": "SMLSLL",
    "className": "One ZA quad-vector",
    "fileName": "smlsll_za_zzv.xml",
    "mask": 4289764380,
    "value": 3240100872,
    "bitCount": 18,
    "fields": [
      {
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
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
        "name": "U",
        "lsb": 4,
        "width": 1
      },
      {
        "name": "S",
        "lsb": 3,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 2,
        "width": 1
      },
      {
        "name": "off2",
        "lsb": 0,
        "width": 2
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
