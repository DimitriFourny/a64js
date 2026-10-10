// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/smin_32_imm.s.yaml",
    "caseIndex": 0,
    "word": 298319872,
    "asmText": "smin w0, w0, #0",
    "encodingFile": "smin_imm.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smin_32_imm.s.yaml",
    "caseIndex": 1,
    "word": 298407253,
    "asmText": "smin w21, w10, #85",
    "encodingFile": "smin_imm.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smin_32_imm.s.yaml",
    "caseIndex": 2,
    "word": 298380727,
    "asmText": "smin w23, w13, #59",
    "encodingFile": "smin_imm.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smin_32_imm.s.yaml",
    "caseIndex": 3,
    "word": 298582015,
    "asmText": "smin wzr, wzr, #-1",
    "encodingFile": "smin_imm.xml",
    "mnemonic": "SMIN",
    "features": [
      "FEAT_CSSC"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
