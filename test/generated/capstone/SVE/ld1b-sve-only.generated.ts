// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ld1b-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 2214608896,
    "asmText": "ld1b { z0.s }, p0/z, [x0, z0.s, uxtw]",
    "encodingFile": "ld1b_z_p_bz.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1b-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 2218803200,
    "asmText": "ld1b { z0.s }, p0/z, [x0, z0.s, sxtw]",
    "encodingFile": "ld1b_z_p_bz.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1b-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3294617599,
    "asmText": "ld1b { z31.d }, p7/z, [sp, z31.d]",
    "encodingFile": "ld1b_z_p_bz.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1b-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3289732437,
    "asmText": "ld1b { z21.d }, p5/z, [x10, z21.d, uxtw]",
    "encodingFile": "ld1b_z_p_bz.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1b-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3293926741,
    "asmText": "ld1b { z21.d }, p5/z, [x10, z21.d, sxtw]",
    "encodingFile": "ld1b_z_p_bz.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1b-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 2218778623,
    "asmText": "ld1b { z31.s }, p7/z, [z31.s, #31]",
    "encodingFile": "ld1b_z_p_ai.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1b-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 2216738816,
    "asmText": "ld1b { z0.s }, p0/z, [z0.s]",
    "encodingFile": "ld1b_z_p_ai.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1b-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3292520447,
    "asmText": "ld1b { z31.d }, p7/z, [z31.d, #31]",
    "encodingFile": "ld1b_z_p_ai.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1b-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3290480640,
    "asmText": "ld1b { z0.d }, p0/z, [z0.d]",
    "encodingFile": "ld1b_z_p_ai.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
