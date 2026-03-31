export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-rounding-shift.s.yaml",
    "caseIndex": 0,
    "word": 1592285169,
    "asmText": "srshl d17, d31, d8",
    "encodingFile": "srshl_advsimd.xml",
    "mnemonic": "SRSHL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-rounding-shift.s.yaml",
    "caseIndex": 1,
    "word": 2129156081,
    "asmText": "urshl d17, d31, d8",
    "encodingFile": "urshl_advsimd.xml",
    "mnemonic": "URSHL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
