// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8/dot.s.yaml",
    "caseIndex": 0,
    "word": 239139871,
    "asmText": "fdot v31.4h, v0.8b, v0.8b",
    "encodingFile": "fdot_advsimd_2wayvec.xml",
    "mnemonic": "FDOT",
    "features": [
      "FEAT_FP8DOT2"
    ]
  },
  {
    "sourceFile": "FP8/dot.s.yaml",
    "caseIndex": 1,
    "word": 1314913311,
    "asmText": "fdot v31.8h, v0.16b, v31.16b",
    "encodingFile": "fdot_advsimd_2wayvec.xml",
    "mnemonic": "FDOT",
    "features": [
      "FEAT_FP8DOT2"
    ]
  },
  {
    "sourceFile": "FP8/dot.s.yaml",
    "caseIndex": 2,
    "word": 236977152,
    "asmText": "fdot v0.2s, v0.8b, v31.8b",
    "encodingFile": "fdot_advsimd_4wayvec.xml",
    "mnemonic": "FDOT",
    "features": [
      "FEAT_FP8DOT4"
    ]
  },
  {
    "sourceFile": "FP8/dot.s.yaml",
    "caseIndex": 3,
    "word": 1310719007,
    "asmText": "fdot v31.4s, v0.16b, v31.16b",
    "encodingFile": "fdot_advsimd_4wayvec.xml",
    "mnemonic": "FDOT",
    "features": [
      "FEAT_FP8DOT4"
    ]
  },
  {
    "sourceFile": "FP8/dot.s.yaml",
    "caseIndex": 4,
    "word": 256836607,
    "asmText": "fdot v31.4h, v31.8b, v15.2b[0]",
    "encodingFile": "fdot_advsimd_2wayelem.xml",
    "mnemonic": "FDOT",
    "features": [
      "FEAT_FP8DOT2"
    ]
  },
  {
    "sourceFile": "FP8/dot.s.yaml",
    "caseIndex": 5,
    "word": 1330184922,
    "asmText": "fdot v26.8h, v22.16b, v9.2b[0]",
    "encodingFile": "fdot_advsimd_2wayelem.xml",
    "mnemonic": "FDOT",
    "features": [
      "FEAT_FP8DOT2"
    ]
  },
  {
    "sourceFile": "FP8/dot.s.yaml",
    "caseIndex": 6,
    "word": 1333725184,
    "asmText": "fdot v0.8h, v0.16b, v15.2b[7]",
    "encodingFile": "fdot_advsimd_2wayelem.xml",
    "mnemonic": "FDOT",
    "features": [
      "FEAT_FP8DOT2"
    ]
  },
  {
    "sourceFile": "FP8/dot.s.yaml",
    "caseIndex": 7,
    "word": 253689856,
    "asmText": "fdot v0.2s, v0.8b, v31.4b[0]",
    "encodingFile": "fdot_advsimd_4wayelem.xml",
    "mnemonic": "FDOT",
    "features": [
      "FEAT_FP8DOT4"
    ]
  },
  {
    "sourceFile": "FP8/dot.s.yaml",
    "caseIndex": 8,
    "word": 1327500256,
    "asmText": "fdot v0.4s, v31.16b, v0.4b[3]",
    "encodingFile": "fdot_advsimd_4wayelem.xml",
    "mnemonic": "FDOT",
    "features": [
      "FEAT_FP8DOT4"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
