export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ld1rd.s.yaml",
    "caseIndex": 0,
    "word": 2244009984,
    "asmText": "ld1rd { z0.d }, p0/z, [x0]",
    "encodingFile": "ld1rd_z_p_bi.xml",
    "mnemonic": "LD1RD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ld1rd.s.yaml",
    "caseIndex": 1,
    "word": 2248146943,
    "asmText": "ld1rd { z31.d }, p7/z, [sp, #504]",
    "encodingFile": "ld1rd_z_p_bi.xml",
    "mnemonic": "LD1RD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ld1rd.s.yaml",
    "caseIndex": 2,
    "word": 2244009984,
    "asmText": "ld1rd { z0.d }, p0/z, [x0]",
    "encodingFile": "ld1rd_z_p_bi.xml",
    "mnemonic": "LD1RD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ld1rd.s.yaml",
    "caseIndex": 3,
    "word": 2248146943,
    "asmText": "ld1rd { z31.d }, p7/z, [sp, #504]",
    "encodingFile": "ld1rd_z_p_bi.xml",
    "mnemonic": "LD1RD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
