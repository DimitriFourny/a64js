export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-shift.s.yaml",
    "caseIndex": 0,
    "word": 1592281073,
    "asmText": "sshl d17, d31, d8",
    "encodingFile": "sshl_advsimd.xml",
    "mnemonic": "SSHL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-shift.s.yaml",
    "caseIndex": 1,
    "word": 2129151985,
    "asmText": "ushl d17, d31, d8",
    "encodingFile": "ushl_advsimd.xml",
    "mnemonic": "USHL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];
