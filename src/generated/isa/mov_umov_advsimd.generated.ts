import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "MOV_UMOV_advsimd",
    "encodingId": "MOV_UMOV_asimdins_X_x",
    "mnemonic": "UMOV",
    "className": "Advanced SIMD",
    "fileName": "mov_umov_advsimd.xml",
    "mask": 4293917696,
    "value": 1309162496,
    "bitCount": 21,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "imm5",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "imm4",
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
      "FEAT_AdvSIMD"
    ],
    "guards": []
  },
  {
    "instructionId": "MOV_UMOV_advsimd",
    "encodingId": "MOV_UMOV_asimdins_W_w",
    "mnemonic": "UMOV",
    "className": "Advanced SIMD",
    "fileName": "mov_umov_advsimd.xml",
    "mask": 4293393408,
    "value": 235158528,
    "bitCount": 20,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "op",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "imm5",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "imm4",
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
      "FEAT_AdvSIMD"
    ],
    "guards": []
  }
];
