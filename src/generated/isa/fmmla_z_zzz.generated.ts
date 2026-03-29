import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fmmla_z_zzz",
    "encodingId": "fmmla_z_zzz_d",
    "mnemonic": "FMMLA",
    "className": "64-bit element",
    "fileName": "fmmla_z_zzz.xml",
    "mask": 4292934656,
    "value": 1692460032,
    "bitCount": 17,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zda",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_F64MM"
    ],
    "guards": []
  },
  {
    "instructionId": "fmmla_z_zzz",
    "encodingId": "fmmla_z_zzz_h",
    "mnemonic": "FMMLA",
    "className": "16-bit element",
    "fileName": "fmmla_z_zzz.xml",
    "mask": 4292934656,
    "value": 1688264704,
    "bitCount": 17,
    "fields": [
      {
        "name": "op",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zda",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SVE2p2 && FEAT_F16MM",
      "FEAT_SVE2p2",
      "FEAT_F16MM"
    ],
    "guards": []
  },
  {
    "instructionId": "fmmla_z_zzz",
    "encodingId": "fmmla_z_zzz_s",
    "mnemonic": "FMMLA",
    "className": "32-bit element",
    "fileName": "fmmla_z_zzz.xml",
    "mask": 4292934656,
    "value": 1688265728,
    "bitCount": 17,
    "fields": [
      {
        "name": "opc",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zda",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_F32MM"
    ],
    "guards": []
  }
];
