// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SME/addsvl.s.yaml",
    "caseIndex": 0,
    "word": 70604821,
    "asmText": "addsvl x21, x21, #0",
    "encodingFile": "addsvl_r_ri.xml",
    "mnemonic": "ADDSVL",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/addsvl.s.yaml",
    "caseIndex": 1,
    "word": 69754871,
    "asmText": "addsvl x23, x8, #-1",
    "encodingFile": "addsvl_r_ri.xml",
    "mnemonic": "ADDSVL",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/addsvl.s.yaml",
    "caseIndex": 2,
    "word": 71261183,
    "asmText": "addsvl sp, sp, #31",
    "encodingFile": "addsvl_r_ri.xml",
    "mnemonic": "ADDSVL",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/addsvl.s.yaml",
    "caseIndex": 3,
    "word": 69229568,
    "asmText": "addsvl x0, x0, #-32",
    "encodingFile": "addsvl_r_ri.xml",
    "mnemonic": "ADDSVL",
    "features": [
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
