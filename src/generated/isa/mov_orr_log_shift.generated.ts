import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "MOV_ORR_log_shift",
    "encodingId": "MOV_ORR_32_log_shift",
    "mnemonic": "ORR",
    "className": "Not setting the condition flags",
    "fileName": "mov_orr_log_shift.xml",
    "mask": 4292935648,
    "value": 704644064,
    "bitCount": 22,
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
        "name": "shift",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "N",
        "lsb": 21,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "imm6",
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
    "featureGuards": [],
    "guards": []
  },
  {
    "instructionId": "MOV_ORR_log_shift",
    "encodingId": "MOV_ORR_64_log_shift",
    "mnemonic": "ORR",
    "className": "Not setting the condition flags",
    "fileName": "mov_orr_log_shift.xml",
    "mask": 4292935648,
    "value": 2852127712,
    "bitCount": 22,
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
        "name": "shift",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "N",
        "lsb": 21,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "imm6",
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
    "featureGuards": [],
    "guards": []
  }
];
