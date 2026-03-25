export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/umax_32_reg.s.yaml",
    "caseIndex": 0,
    "word": 448816128,
    "asmText": "umax w0, w0, w0",
    "encodingFile": "umax_reg.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umax_32_reg.s.yaml",
    "caseIndex": 1,
    "word": 450192725,
    "asmText": "umax w21, w10, w21",
    "encodingFile": "umax_reg.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umax_32_reg.s.yaml",
    "caseIndex": 2,
    "word": 449340855,
    "asmText": "umax w23, w13, w8",
    "encodingFile": "umax_reg.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umax_32_reg.s.yaml",
    "caseIndex": 3,
    "word": 450848767,
    "asmText": "umax wzr, wzr, wzr",
    "encodingFile": "umax_reg.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  }
];
