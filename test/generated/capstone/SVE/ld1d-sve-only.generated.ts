export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ld1d-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 3319783423,
    "asmText": "ld1d { z31.d }, p7/z, [sp, z31.d]",
    "encodingFile": "ld1d_z_p_bz.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1d-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 3320368567,
    "asmText": "ld1d { z23.d }, p3/z, [x13, z8.d, lsl #3]",
    "encodingFile": "ld1d_z_p_bz.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1d-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3314898261,
    "asmText": "ld1d { z21.d }, p5/z, [x10, z21.d, uxtw]",
    "encodingFile": "ld1d_z_p_bz.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1d-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3319092565,
    "asmText": "ld1d { z21.d }, p5/z, [x10, z21.d, sxtw]",
    "encodingFile": "ld1d_z_p_bz.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1d-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3315613696,
    "asmText": "ld1d { z0.d }, p0/z, [x0, z0.d, uxtw #3]",
    "encodingFile": "ld1d_z_p_bz.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1d-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 3319808000,
    "asmText": "ld1d { z0.d }, p0/z, [x0, z0.d, sxtw #3]",
    "encodingFile": "ld1d_z_p_bz.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1d-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 3317686271,
    "asmText": "ld1d { z31.d }, p7/z, [z31.d, #248]",
    "encodingFile": "ld1d_z_p_ai.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1d-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3315646464,
    "asmText": "ld1d { z0.d }, p0/z, [z0.d]",
    "encodingFile": "ld1d_z_p_ai.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
