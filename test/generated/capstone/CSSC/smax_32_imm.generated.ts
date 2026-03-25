export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/smax_32_imm.s.yaml",
    "caseIndex": 0,
    "word": 297795584,
    "asmText": "smax w0, w0, #0",
    "encodingFile": "smax_imm.xml",
    "mnemonic": "SMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smax_32_imm.s.yaml",
    "caseIndex": 1,
    "word": 297882965,
    "asmText": "smax w21, w10, #85",
    "encodingFile": "smax_imm.xml",
    "mnemonic": "SMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smax_32_imm.s.yaml",
    "caseIndex": 2,
    "word": 297856439,
    "asmText": "smax w23, w13, #59",
    "encodingFile": "smax_imm.xml",
    "mnemonic": "SMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/smax_32_imm.s.yaml",
    "caseIndex": 3,
    "word": 298057727,
    "asmText": "smax wzr, wzr, #-1",
    "encodingFile": "smax_imm.xml",
    "mnemonic": "SMAX",
    "features": [
      "FEAT_CSSC"
    ]
  }
];
