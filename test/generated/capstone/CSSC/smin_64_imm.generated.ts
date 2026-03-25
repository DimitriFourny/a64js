export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/smin_64_imm.s.yaml",
    "caseIndex": 0,
    "word": 2445803520,
    "asmText": "smin x0, x0, #0",
    "encodingFile": "smin_imm.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smin_64_imm.s.yaml",
    "caseIndex": 1,
    "word": 2445890901,
    "asmText": "smin x21, x10, #85",
    "encodingFile": "smin_imm.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smin_64_imm.s.yaml",
    "caseIndex": 2,
    "word": 2445864375,
    "asmText": "smin x23, x13, #59",
    "encodingFile": "smin_imm.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smin_64_imm.s.yaml",
    "caseIndex": 3,
    "word": 2446065663,
    "asmText": "smin xzr, xzr, #-1",
    "encodingFile": "smin_imm.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  }
];
