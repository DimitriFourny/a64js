import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fcvtx_z_p_z",
    "encodingId": "fcvtx_z_p_z_d2s",
    "mnemonic": "FCVTX",
    "className": "Double-precision to single-precision, merging",
    "fileName": "fcvtx_z_p_z.xml",
    "mask": 4294959104,
    "value": 1695195136,
    "bitCount": 19,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc2",
        "lsb": 16,
        "width": 2
      },
      {
        "name": "Pg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE2 || FEAT_SME"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE2 || FEAT_SME",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "fcvtx_z_p_z",
    "encodingId": "fcvtx_z_p_z_d2sz",
    "mnemonic": "FCVTX",
    "className": "Double-precision to single-precision, zeroing",
    "fileName": "fcvtx_z_p_z.xml",
    "mask": 4294959104,
    "value": 1679474688,
    "bitCount": 19,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "opc2",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Pg",
        "lsb": 10,
        "width": 3
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE2p2 || FEAT_SME2p2"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SVE2p2 || FEAT_SME2p2",
        "all": []
      }
    ],
    "guards": []
  }
];
