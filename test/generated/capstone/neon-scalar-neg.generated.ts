export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-neg.s.yaml",
    "caseIndex": 0,
    "word": 2128657181,
    "asmText": "neg d29, d24",
    "encodingFile": "neg_advsimd.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-neg.s.yaml",
    "caseIndex": 1,
    "word": 2116057555,
    "asmText": "sqneg b19, b14",
    "encodingFile": "sqneg_advsimd.xml",
    "mnemonic": "SQNEG",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-neg.s.yaml",
    "caseIndex": 2,
    "word": 2120251893,
    "asmText": "sqneg h21, h15",
    "encodingFile": "sqneg_advsimd.xml",
    "mnemonic": "SQNEG",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-neg.s.yaml",
    "caseIndex": 3,
    "word": 2124446100,
    "asmText": "sqneg s20, s12",
    "encodingFile": "sqneg_advsimd.xml",
    "mnemonic": "SQNEG",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-neg.s.yaml",
    "caseIndex": 4,
    "word": 2128640402,
    "asmText": "sqneg d18, d12",
    "encodingFile": "sqneg_advsimd.xml",
    "mnemonic": "SQNEG",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];
