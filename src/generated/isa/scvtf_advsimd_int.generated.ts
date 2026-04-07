import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "SCVTF_advsimd_int",
    "encodingId": "SCVTF_asisdmiscfp16_R",
    "mnemonic": "SCVTF",
    "className": "Scalar half-precision",
    "fileName": "scvtf_advsimd_int.xml",
    "mask": 4294966272,
    "value": 1585043456,
    "bitCount": 22,
    "fields": [
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "a",
        "lsb": 23,
        "width": 1
      },
      {
        "name": "opcode",
        "lsb": 12,
        "width": 5
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
      "FEAT_AdvSIMD && FEAT_FP16"
    ],
    "featureGuards": [],
    "guards": []
  },
  {
    "instructionId": "SCVTF_advsimd_int",
    "encodingId": "SCVTF_asimdmiscfp16_R",
    "mnemonic": "SCVTF",
    "className": "Vector half-precision",
    "fileName": "scvtf_advsimd_int.xml",
    "mask": 3221224448,
    "value": 242866176,
    "bitCount": 21,
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
        "name": "a",
        "lsb": 23,
        "width": 1
      },
      {
        "name": "opcode",
        "lsb": 12,
        "width": 5
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
      "FEAT_AdvSIMD && FEAT_FP16"
    ],
    "featureGuards": [],
    "guards": []
  },
  {
    "instructionId": "SCVTF_advsimd_int",
    "encodingId": "SCVTF_asisdmisc_R",
    "mnemonic": "SCVTF",
    "className": "Scalar single-precision and double-precision",
    "fileName": "scvtf_advsimd_int.xml",
    "mask": 4290771968,
    "value": 1579276288,
    "bitCount": 21,
    "fields": [
      {
        "name": "U",
        "lsb": 29,
        "width": 1
      },
      {
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "opcode",
        "lsb": 12,
        "width": 5
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
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": []
  },
  {
    "instructionId": "SCVTF_advsimd_int",
    "encodingId": "SCVTF_asimdmisc_R",
    "mnemonic": "SCVTF",
    "className": "Vector single-precision and double-precision",
    "fileName": "scvtf_advsimd_int.xml",
    "mask": 3217030144,
    "value": 237099008,
    "bitCount": 20,
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
        "name": "sz",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "opcode",
        "lsb": 12,
        "width": 5
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
    "featureGuards": [
      {
        "feature": "FEAT_AdvSIMD",
        "all": []
      }
    ],
    "guards": []
  }
];
