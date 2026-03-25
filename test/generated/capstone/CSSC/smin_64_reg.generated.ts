export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/smin_64_reg.s.yaml",
    "caseIndex": 0,
    "word": 2596300800,
    "asmText": "smin x0, x0, x0",
    "encodingFile": "smin_reg.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smin_64_reg.s.yaml",
    "caseIndex": 1,
    "word": 2597677397,
    "asmText": "smin x21, x10, x21",
    "encodingFile": "smin_reg.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smin_64_reg.s.yaml",
    "caseIndex": 2,
    "word": 2596825527,
    "asmText": "smin x23, x13, x8",
    "encodingFile": "smin_reg.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smin_64_reg.s.yaml",
    "caseIndex": 3,
    "word": 2598333439,
    "asmText": "smin xzr, xzr, xzr",
    "encodingFile": "smin_reg.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  }
];
