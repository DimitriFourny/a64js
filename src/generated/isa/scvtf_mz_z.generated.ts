import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "scvtf_mz_z",
    "encodingId": "scvtf_mz_z_4",
    "mnemonic": "SCVTF",
    "className": "Four registers",
    "fileName": "scvtf_mz_z.xml",
    "mask": 4294966371,
    "value": 3241336832,
    "bitCount": 26,
    "fields": [
      {
        "name": "Zn",
        "lsb": 7,
        "width": 3
      },
      {
        "name": "U",
        "lsb": 5,
        "width": 1
      },
      {
        "name": "Zd",
        "lsb": 2,
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
    "instructionId": "scvtf_mz_z",
    "encodingId": "scvtf_mz_z_2",
    "mnemonic": "SCVTF",
    "className": "Two registers",
    "fileName": "scvtf_mz_z.xml",
    "mask": 4294966305,
    "value": 3240288256,
    "bitCount": 24,
    "fields": [
      {
        "name": "Zn",
        "lsb": 6,
        "width": 4
      },
      {
        "name": "U",
        "lsb": 5,
        "width": 1
      },
      {
        "name": "Zd",
        "lsb": 1,
        "width": 4
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
