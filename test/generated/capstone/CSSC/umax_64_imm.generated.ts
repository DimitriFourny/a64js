// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/umax_64_imm.s.yaml",
    "caseIndex": 0,
    "word": 2445541376,
    "asmText": "umax x0, x0, #0",
    "encodingFile": "umax_imm.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umax_64_imm.s.yaml",
    "caseIndex": 1,
    "word": 2445628757,
    "asmText": "umax x21, x10, #85",
    "encodingFile": "umax_imm.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umax_64_imm.s.yaml",
    "caseIndex": 2,
    "word": 2445602231,
    "asmText": "umax x23, x13, #59",
    "encodingFile": "umax_imm.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umax_64_imm.s.yaml",
    "caseIndex": 3,
    "word": 2445803519,
    "asmText": "umax xzr, xzr, #255",
    "encodingFile": "umax_imm.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
