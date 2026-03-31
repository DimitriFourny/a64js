export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-reduce-pairwise.s.yaml",
    "caseIndex": 0,
    "word": 1592899616,
    "asmText": "addp d0, v1.2d",
    "encodingFile": "addp_advsimd_pair.xml",
    "mnemonic": "ADDP",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-reduce-pairwise.s.yaml",
    "caseIndex": 1,
    "word": 1580259442,
    "asmText": "faddp h18, v3.2h",
    "encodingFile": "faddp_advsimd_pair.xml",
    "mnemonic": "FADDP",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-reduce-pairwise.s.yaml",
    "caseIndex": 2,
    "word": 1580259442,
    "asmText": "faddp h18, v3.2h",
    "encodingFile": "faddp_advsimd_pair.xml",
    "mnemonic": "FADDP",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-reduce-pairwise.s.yaml",
    "caseIndex": 3,
    "word": 2117130323,
    "asmText": "faddp s19, v2.2s",
    "encodingFile": "faddp_advsimd_pair.xml",
    "mnemonic": "FADDP",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-reduce-pairwise.s.yaml",
    "caseIndex": 4,
    "word": 2121324596,
    "asmText": "faddp d20, v1.2d",
    "encodingFile": "faddp_advsimd_pair.xml",
    "mnemonic": "FADDP",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
