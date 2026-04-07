import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "stnt1h_mzx_p_bi",
    "encodingId": "stnt1h_mzx_p_bi_4x4",
    "mnemonic": "STNT1H",
    "className": "Four registers",
    "fileName": "stnt1h_mzx_p_bi.xml",
    "mask": 4293976076,
    "value": 2707464200,
    "bitCount": 17,
    "fields": [
      {
        "name": "imm4",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "msz",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "PNg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "T",
        "lsb": 4,
        "width": 1
      },
      {
        "name": "N",
        "lsb": 3,
        "width": 1
      },
      {
        "name": "Zt",
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
      }
    ],
    "guards": []
  },
  {
    "instructionId": "stnt1h_mzx_p_bi",
    "encodingId": "stnt1h_mzx_p_bi_2x8",
    "mnemonic": "STNT1H",
    "className": "Two registers",
    "fileName": "stnt1h_mzx_p_bi.xml",
    "mask": 4293976072,
    "value": 2707431432,
    "bitCount": 16,
    "fields": [
      {
        "name": "imm4",
        "lsb": 16,
        "width": 4
      },
      {
        "name": "msz",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "PNg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "T",
        "lsb": 4,
        "width": 1
      },
      {
        "name": "N",
        "lsb": 3,
        "width": 1
      },
      {
        "name": "Zt",
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
