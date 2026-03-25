export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/brkbs.s.yaml",
    "caseIndex": 0,
    "word": 634420704,
    "asmText": "brkbs p0.b, p15/z, p15.b",
    "encodingFile": "brkbs_p_p_p.xml",
    "mnemonic": "BRKBS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/brkbs.s.yaml",
    "caseIndex": 1,
    "word": 634420704,
    "asmText": "brkbs p0.b, p15/z, p15.b",
    "encodingFile": "brkbs_p_p_p.xml",
    "mnemonic": "BRKBS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
