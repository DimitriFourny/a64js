// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 2222981120,
    "asmText": "ld1sh { z0.s }, p0/z, [x0, z0.s, uxtw]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 2227175424,
    "asmText": "ld1sh { z0.s }, p0/z, [x0, z0.s, sxtw]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 2227118079,
    "asmText": "ld1sh { z31.s }, p7/z, [sp, z31.s, uxtw #1]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 2231312383,
    "asmText": "ld1sh { z31.s }, p7/z, [sp, z31.s, sxtw #1]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3302989823,
    "asmText": "ld1sh { z31.d }, p7/z, [sp, z31.d]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 3303574967,
    "asmText": "ld1sh { z23.d }, p3/z, [x13, z8.d, lsl #1]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 3298104661,
    "asmText": "ld1sh { z21.d }, p5/z, [x10, z21.d, uxtw]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3302298965,
    "asmText": "ld1sh { z21.d }, p5/z, [x10, z21.d, sxtw]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3298820096,
    "asmText": "ld1sh { z0.d }, p0/z, [x0, z0.d, uxtw #1]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 9,
    "word": 3303014400,
    "asmText": "ld1sh { z0.d }, p0/z, [x0, z0.d, sxtw #1]",
    "encodingFile": "ld1sh_z_p_bz.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 10,
    "word": 2227150847,
    "asmText": "ld1sh { z31.s }, p7/z, [z31.s, #62]",
    "encodingFile": "ld1sh_z_p_ai.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 11,
    "word": 2225111040,
    "asmText": "ld1sh { z0.s }, p0/z, [z0.s]",
    "encodingFile": "ld1sh_z_p_ai.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 12,
    "word": 3300892671,
    "asmText": "ld1sh { z31.d }, p7/z, [z31.d, #62]",
    "encodingFile": "ld1sh_z_p_ai.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sh-sve-only.s.yaml",
    "caseIndex": 13,
    "word": 3298852864,
    "asmText": "ld1sh { z0.d }, p0/z, [z0.d]",
    "encodingFile": "ld1sh_z_p_ai.xml",
    "mnemonic": "LD1SH",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
