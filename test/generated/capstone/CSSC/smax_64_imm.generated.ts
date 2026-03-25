export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/smax_64_imm.s.yaml",
    "caseIndex": 0,
    "word": 2445279232,
    "asmText": "smax x0, x0, #0",
    "encodingFile": "smax_imm.xml",
    "mnemonic": "SMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smax_64_imm.s.yaml",
    "caseIndex": 1,
    "word": 2445366613,
    "asmText": "smax x21, x10, #85",
    "encodingFile": "smax_imm.xml",
    "mnemonic": "SMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smax_64_imm.s.yaml",
    "caseIndex": 2,
    "word": 2445340087,
    "asmText": "smax x23, x13, #59",
    "encodingFile": "smax_imm.xml",
    "mnemonic": "SMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smax_64_imm.s.yaml",
    "caseIndex": 3,
    "word": 2445541375,
    "asmText": "smax xzr, xzr, #-1",
    "encodingFile": "smax_imm.xml",
    "mnemonic": "SMAX",
    "features": [
      "FEAT_CSSC"
    ]
  }
];
