export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/brkas.s.yaml",
    "caseIndex": 0,
    "word": 626032096,
    "asmText": "brkas p0.b, p15/z, p15.b",
    "encodingFile": "brkas_p_p_p.xml",
    "mnemonic": "BRKAS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/brkas.s.yaml",
    "caseIndex": 1,
    "word": 626032096,
    "asmText": "brkas p0.b, p15/z, p15.b",
    "encodingFile": "brkas_p_p_p.xml",
    "mnemonic": "BRKAS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
