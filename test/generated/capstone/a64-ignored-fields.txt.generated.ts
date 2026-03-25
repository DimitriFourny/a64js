export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "a64-ignored-fields.txt.yaml",
    "caseIndex": 0,
    "word": 505422824,
    "asmText": "fcmp s31, #0.0",
    "encodingFile": "fcmp_float.xml",
    "mnemonic": "FCMP",
    "features": [
      "FEAT_FP",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "a64-ignored-fields.txt.yaml",
    "caseIndex": 1,
    "word": 505422824,
    "asmText": "fcmp s31, #0.0",
    "encodingFile": "fcmp_float.xml",
    "mnemonic": "FCMP",
    "features": [
      "FEAT_FP",
      "FEAT_FP16"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
