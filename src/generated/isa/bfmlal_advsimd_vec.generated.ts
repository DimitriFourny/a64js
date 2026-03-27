import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "BFMLAL_advsimd_vec",
    "encodingId": "BFMLAL_asimdsame2_F_",
    "mnemonic": "BFMLAL",
    "className": "Vector",
    "fileName": "bfmlal_advsimd_vec.xml",
    "mask": 3219192832,
    "value": 784399360,
    "bitCount": 16,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "opcode",
        "lsb": 11,
        "width": 4
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
    "features": [
      "FEAT_BF16"
    ],
    "guards": []
  }
];
