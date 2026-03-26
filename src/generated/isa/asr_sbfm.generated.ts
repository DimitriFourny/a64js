import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ASR_SBFM",
    "encodingId": "ASR_SBFM_32M_bitfield",
    "mnemonic": "SBFM",
    "className": "With sign replication to left and zeros to right",
    "fileName": "asr_sbfm.xml",
    "mask": 4290837504,
    "value": 318798848,
    "bitCount": 16,
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
    "guards": []
  },
  {
    "instructionId": "ASR_SBFM",
    "encodingId": "ASR_SBFM_64M_bitfield",
    "mnemonic": "SBFM",
    "className": "With sign replication to left and zeros to right",
    "fileName": "asr_sbfm.xml",
    "mask": 4290837504,
    "value": 2470509568,
    "bitCount": 16,
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
    "guards": []
  }
];
