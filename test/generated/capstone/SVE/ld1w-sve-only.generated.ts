export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 2231386112,
    "asmText": "ld1w { z0.s }, p0/z, [x0, z0.s, uxtw]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 2235580416,
    "asmText": "ld1w { z0.s }, p0/z, [x0, z0.s, sxtw]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 2235523071,
    "asmText": "ld1w { z31.s }, p7/z, [sp, z31.s, uxtw #2]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 2239717375,
    "asmText": "ld1w { z31.s }, p7/z, [sp, z31.s, sxtw #2]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3311394815,
    "asmText": "ld1w { z31.d }, p7/z, [sp, z31.d]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 3311979959,
    "asmText": "ld1w { z23.d }, p3/z, [x13, z8.d, lsl #2]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 3306509653,
    "asmText": "ld1w { z21.d }, p5/z, [x10, z21.d, uxtw]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3310703957,
    "asmText": "ld1w { z21.d }, p5/z, [x10, z21.d, sxtw]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3307225088,
    "asmText": "ld1w { z0.d }, p0/z, [x0, z0.d, uxtw #2]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 9,
    "word": 3311419392,
    "asmText": "ld1w { z0.d }, p0/z, [x0, z0.d, sxtw #2]",
    "encodingFile": "ld1w_z_p_bz.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 10,
    "word": 2235555839,
    "asmText": "ld1w { z31.s }, p7/z, [z31.s, #124]",
    "encodingFile": "ld1w_z_p_ai.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 11,
    "word": 2233516032,
    "asmText": "ld1w { z0.s }, p0/z, [z0.s]",
    "encodingFile": "ld1w_z_p_ai.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 12,
    "word": 3309297663,
    "asmText": "ld1w { z31.d }, p7/z, [z31.d, #124]",
    "encodingFile": "ld1w_z_p_ai.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1w-sve-only.s.yaml",
    "caseIndex": 13,
    "word": 3307257856,
    "asmText": "ld1w { z0.d }, p0/z, [z0.d]",
    "encodingFile": "ld1w_z_p_ai.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SVE"
    ]
  }
];
