import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "ST4_advsimd_mult",
    "encodingId": "ST4_asisdlse_R4",
    "mnemonic": "ST4",
    "className": "No offset",
    "fileName": "st4_advsimd_mult.xml",
    "mask": 3221221376,
    "value": 201326592,
    "bitCount": 19,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "L",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "opcode",
        "lsb": 12,
        "width": 4
      },
      {
        "name": "size",
        "lsb": 10,
        "width": 2
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_AdvSIMD"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "ST4_advsimd_mult",
    "encodingId": "ST4_asisdlsep_I4_i",
    "mnemonic": "ST4",
    "className": "Post-index",
    "fileName": "st4_advsimd_mult.xml",
    "mask": 3221221376,
    "value": 211746816,
    "bitCount": 19,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "L",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "opcode",
        "lsb": 12,
        "width": 4
      },
      {
        "name": "size",
        "lsb": 10,
        "width": 2
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_AdvSIMD"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "ST4_advsimd_mult",
    "encodingId": "ST4_asisdlsep_R4_r",
    "mnemonic": "ST4",
    "className": "Post-index",
    "fileName": "st4_advsimd_mult.xml",
    "mask": 3219189760,
    "value": 209715200,
    "bitCount": 14,
    "fields": [
      {
        "name": "Q",
        "lsb": 30,
        "width": 1
      },
      {
        "name": "L",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Rm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "opcode",
        "lsb": 12,
        "width": 4
      },
      {
        "name": "size",
        "lsb": 10,
        "width": 2
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_AdvSIMD"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": []
  }
];
