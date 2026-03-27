export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/umax_32_imm.s.yaml",
    "caseIndex": 0,
    "word": 298057728,
    "asmText": "umax w0, w0, #0",
    "encodingFile": "umax_imm.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umax_32_imm.s.yaml",
    "caseIndex": 1,
    "word": 298145109,
    "asmText": "umax w21, w10, #85",
    "encodingFile": "umax_imm.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umax_32_imm.s.yaml",
    "caseIndex": 2,
    "word": 298118583,
    "asmText": "umax w23, w13, #59",
    "encodingFile": "umax_imm.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umax_32_imm.s.yaml",
    "caseIndex": 3,
    "word": 298319871,
    "asmText": "umax wzr, wzr, #255",
    "encodingFile": "umax_imm.xml",
    "mnemonic": "UMAX",
    "features": [
      "FEAT_CSSC"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
