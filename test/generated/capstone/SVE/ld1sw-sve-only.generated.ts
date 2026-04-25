export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ld1sw-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 3311378431,
    "asmText": "ld1sw { z31.d }, p7/z, [sp, z31.d]",
    "encodingFile": "ld1sw_z_p_bz.xml",
    "mnemonic": "LD1SW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sw-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 3311963575,
    "asmText": "ld1sw { z23.d }, p3/z, [x13, z8.d, lsl #2]",
    "encodingFile": "ld1sw_z_p_bz.xml",
    "mnemonic": "LD1SW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sw-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3306493269,
    "asmText": "ld1sw { z21.d }, p5/z, [x10, z21.d, uxtw]",
    "encodingFile": "ld1sw_z_p_bz.xml",
    "mnemonic": "LD1SW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sw-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3310687573,
    "asmText": "ld1sw { z21.d }, p5/z, [x10, z21.d, sxtw]",
    "encodingFile": "ld1sw_z_p_bz.xml",
    "mnemonic": "LD1SW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sw-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3307208704,
    "asmText": "ld1sw { z0.d }, p0/z, [x0, z0.d, uxtw #2]",
    "encodingFile": "ld1sw_z_p_bz.xml",
    "mnemonic": "LD1SW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sw-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 3311403008,
    "asmText": "ld1sw { z0.d }, p0/z, [x0, z0.d, sxtw #2]",
    "encodingFile": "ld1sw_z_p_bz.xml",
    "mnemonic": "LD1SW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sw-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 3309281279,
    "asmText": "ld1sw { z31.d }, p7/z, [z31.d, #124]",
    "encodingFile": "ld1sw_z_p_ai.xml",
    "mnemonic": "LD1SW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ld1sw-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3307241472,
    "asmText": "ld1sw { z0.d }, p0/z, [z0.d]",
    "encodingFile": "ld1sw_z_p_ai.xml",
    "mnemonic": "LD1SW",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
