export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-add-sub.s.yaml",
    "caseIndex": 0,
    "word": 1592820767,
    "asmText": "add d31, d0, d16",
    "encodingFile": "add_advsimd.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-add-sub.s.yaml",
    "caseIndex": 1,
    "word": 2129167585,
    "asmText": "sub d1, d7, d8",
    "encodingFile": "sub_advsimd.xml",
    "mnemonic": "SUB",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];
