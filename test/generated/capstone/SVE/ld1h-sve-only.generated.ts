// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 2222997504,
    "asmText": "ld1h { z0.s }, p0/z, [x0, z0.s, uxtw]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 2227191808,
    "asmText": "ld1h { z0.s }, p0/z, [x0, z0.s, sxtw]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 2227134463,
    "asmText": "ld1h { z31.s }, p7/z, [sp, z31.s, uxtw #1]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 2231328767,
    "asmText": "ld1h { z31.s }, p7/z, [sp, z31.s, sxtw #1]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3303006207,
    "asmText": "ld1h { z31.d }, p7/z, [sp, z31.d]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 3303591351,
    "asmText": "ld1h { z23.d }, p3/z, [x13, z8.d, lsl #1]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 3298121045,
    "asmText": "ld1h { z21.d }, p5/z, [x10, z21.d, uxtw]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3302315349,
    "asmText": "ld1h { z21.d }, p5/z, [x10, z21.d, sxtw]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3298836480,
    "asmText": "ld1h { z0.d }, p0/z, [x0, z0.d, uxtw #1]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 9,
    "word": 3303030784,
    "asmText": "ld1h { z0.d }, p0/z, [x0, z0.d, sxtw #1]",
    "encodingFile": "ld1h_z_p_bz.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 10,
    "word": 2227167231,
    "asmText": "ld1h { z31.s }, p7/z, [z31.s, #62]",
    "encodingFile": "ld1h_z_p_ai.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 11,
    "word": 2225127424,
    "asmText": "ld1h { z0.s }, p0/z, [z0.s]",
    "encodingFile": "ld1h_z_p_ai.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 12,
    "word": 3300909055,
    "asmText": "ld1h { z31.d }, p7/z, [z31.d, #62]",
    "encodingFile": "ld1h_z_p_ai.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1h-sve-only.s.yaml",
    "caseIndex": 13,
    "word": 3298869248,
    "asmText": "ld1h { z0.d }, p0/z, [z0.d]",
    "encodingFile": "ld1h_z_p_ai.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
