export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/umin_32_reg.s.yaml",
    "caseIndex": 0,
    "word": 448818176,
    "asmText": "umin w0, w0, w0",
    "encodingFile": "umin_reg.xml",
    "mnemonic": "UMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umin_32_reg.s.yaml",
    "caseIndex": 1,
    "word": 450194773,
    "asmText": "umin w21, w10, w21",
    "encodingFile": "umin_reg.xml",
    "mnemonic": "UMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umin_32_reg.s.yaml",
    "caseIndex": 2,
    "word": 449342903,
    "asmText": "umin w23, w13, w8",
    "encodingFile": "umin_reg.xml",
    "mnemonic": "UMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umin_32_reg.s.yaml",
    "caseIndex": 3,
    "word": 450850815,
    "asmText": "umin wzr, wzr, wzr",
    "encodingFile": "umin_reg.xml",
    "mnemonic": "UMIN",
    "features": [
      "FEAT_CSSC"
    ]
  }
];
