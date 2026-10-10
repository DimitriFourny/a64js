// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ld1sb-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 2218786816,
    "asmText": "ld1sb { z0.s }, p0/z, [x0, z0.s, sxtw]",
    "encodingFile": "ld1sb_z_p_bz.xml",
    "mnemonic": "LD1SB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sb-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 3294601215,
    "asmText": "ld1sb { z31.d }, p7/z, [sp, z31.d]",
    "encodingFile": "ld1sb_z_p_bz.xml",
    "mnemonic": "LD1SB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sb-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3289716053,
    "asmText": "ld1sb { z21.d }, p5/z, [x10, z21.d, uxtw]",
    "encodingFile": "ld1sb_z_p_bz.xml",
    "mnemonic": "LD1SB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sb-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3293910357,
    "asmText": "ld1sb { z21.d }, p5/z, [x10, z21.d, sxtw]",
    "encodingFile": "ld1sb_z_p_bz.xml",
    "mnemonic": "LD1SB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sb-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 2218762239,
    "asmText": "ld1sb { z31.s }, p7/z, [z31.s, #31]",
    "encodingFile": "ld1sb_z_p_ai.xml",
    "mnemonic": "LD1SB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sb-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 2216722432,
    "asmText": "ld1sb { z0.s }, p0/z, [z0.s]",
    "encodingFile": "ld1sb_z_p_ai.xml",
    "mnemonic": "LD1SB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sb-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 3292504063,
    "asmText": "ld1sb { z31.d }, p7/z, [z31.d, #31]",
    "encodingFile": "ld1sb_z_p_ai.xml",
    "mnemonic": "LD1SB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sb-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3290464256,
    "asmText": "ld1sb { z0.d }, p0/z, [z0.d]",
    "encodingFile": "ld1sb_z_p_ai.xml",
    "mnemonic": "LD1SB",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
