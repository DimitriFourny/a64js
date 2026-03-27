export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "CSSC/umin_64_imm.s.yaml",
    "caseIndex": 0,
    "word": 2446065664,
    "asmText": "umin x0, x0, #0",
    "encodingFile": "umin_imm.xml",
    "mnemonic": "UMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umin_64_imm.s.yaml",
    "caseIndex": 1,
    "word": 2446153045,
    "asmText": "umin x21, x10, #85",
    "encodingFile": "umin_imm.xml",
    "mnemonic": "UMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umin_64_imm.s.yaml",
    "caseIndex": 2,
    "word": 2446126519,
    "asmText": "umin x23, x13, #59",
    "encodingFile": "umin_imm.xml",
    "mnemonic": "UMIN",
    "features": [
      "FEAT_CSSC"
    ]
  },
  {
    "sourceFile": "CSSC/umin_64_imm.s.yaml",
    "caseIndex": 3,
    "word": 2446327807,
    "asmText": "umin xzr, xzr, #255",
    "encodingFile": "umin_imm.xml",
    "mnemonic": "UMIN",
    "features": [
      "FEAT_CSSC"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
