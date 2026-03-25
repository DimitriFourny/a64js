export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ptest.s.yaml",
    "caseIndex": 0,
    "word": 626064384,
    "asmText": "ptest p15, p0.b",
    "encodingFile": "ptest_p_p.xml",
    "mnemonic": "PTEST",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ptest.s.yaml",
    "caseIndex": 1,
    "word": 626064864,
    "asmText": "ptest p15, p15.b",
    "encodingFile": "ptest_p_p.xml",
    "mnemonic": "PTEST",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ptest.s.yaml",
    "caseIndex": 2,
    "word": 626064384,
    "asmText": "ptest p15, p0.b",
    "encodingFile": "ptest_p_p.xml",
    "mnemonic": "PTEST",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ptest.s.yaml",
    "caseIndex": 3,
    "word": 626064864,
    "asmText": "ptest p15, p15.b",
    "encodingFile": "ptest_p_p.xml",
    "mnemonic": "PTEST",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
