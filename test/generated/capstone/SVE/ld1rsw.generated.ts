export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ld1rsw.s.yaml",
    "caseIndex": 0,
    "word": 2227208192,
    "asmText": "ld1rsw { z0.d }, p0/z, [x0]",
    "encodingFile": "ld1rsw_z_p_bi.xml",
    "mnemonic": "LD1RSW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ld1rsw.s.yaml",
    "caseIndex": 1,
    "word": 2231345151,
    "asmText": "ld1rsw { z31.d }, p7/z, [sp, #252]",
    "encodingFile": "ld1rsw_z_p_bi.xml",
    "mnemonic": "LD1RSW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ld1rsw.s.yaml",
    "caseIndex": 2,
    "word": 2227208192,
    "asmText": "ld1rsw { z0.d }, p0/z, [x0]",
    "encodingFile": "ld1rsw_z_p_bi.xml",
    "mnemonic": "LD1RSW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ld1rsw.s.yaml",
    "caseIndex": 3,
    "word": 2231345151,
    "asmText": "ld1rsw { z31.d }, p7/z, [sp, #252]",
    "encodingFile": "ld1rsw_z_p_bi.xml",
    "mnemonic": "LD1RSW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
