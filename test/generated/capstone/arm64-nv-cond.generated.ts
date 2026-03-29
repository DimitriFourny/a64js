export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "arm64-nv-cond.s.yaml",
    "caseIndex": 0,
    "word": 511705084,
    "asmText": "fcsel d28, d31, d31, nv",
    "encodingFile": "fcsel_float.xml",
    "mnemonic": "FCSEL",
    "features": [
      "FEAT_FP",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "arm64-nv-cond.s.yaml",
    "caseIndex": 1,
    "word": 2592141312,
    "asmText": "csel x0, x0, x0, nv",
    "encodingFile": "csel.xml",
    "mnemonic": "CSEL",
    "features": []
  },
  {
    "sourceFile": "arm64-nv-cond.s.yaml",
    "caseIndex": 2,
    "word": 4198559744,
    "asmText": "ccmp x0, x0, #0, nv",
    "encodingFile": "ccmp_reg.xml",
    "mnemonic": "CCMP",
    "features": []
  },
  {
    "sourceFile": "arm64-nv-cond.s.yaml",
    "caseIndex": 3,
    "word": 1409286159,
    "asmText": "b.nv #0",
    "encodingFile": "b_cond.xml",
    "mnemonic": "B",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
