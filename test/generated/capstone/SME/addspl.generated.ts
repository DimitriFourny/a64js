// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SME/addspl.s.yaml",
    "caseIndex": 0,
    "word": 74799125,
    "asmText": "addspl x21, x21, #0",
    "encodingFile": "addspl_r_ri.xml",
    "mnemonic": "ADDSPL",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/addspl.s.yaml",
    "caseIndex": 1,
    "word": 73949175,
    "asmText": "addspl x23, x8, #-1",
    "encodingFile": "addspl_r_ri.xml",
    "mnemonic": "ADDSPL",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/addspl.s.yaml",
    "caseIndex": 2,
    "word": 75455487,
    "asmText": "addspl sp, sp, #31",
    "encodingFile": "addspl_r_ri.xml",
    "mnemonic": "ADDSPL",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/addspl.s.yaml",
    "caseIndex": 3,
    "word": 73423872,
    "asmText": "addspl x0, x0, #-32",
    "encodingFile": "addspl_r_ri.xml",
    "mnemonic": "ADDSPL",
    "features": [
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
