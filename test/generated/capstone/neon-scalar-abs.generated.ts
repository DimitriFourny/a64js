export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-abs.s.yaml",
    "caseIndex": 0,
    "word": 1591786269,
    "asmText": "abs d29, d24",
    "encodingFile": "abs_advsimd.xml",
    "mnemonic": "ABS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-abs.s.yaml",
    "caseIndex": 1,
    "word": 2127828765,
    "asmText": "fabd h29, h24, h20",
    "encodingFile": "fabd_advsimd.xml",
    "mnemonic": "FABD",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-abs.s.yaml",
    "caseIndex": 2,
    "word": 2125780765,
    "asmText": "fabd s29, s24, s20",
    "encodingFile": "fabd_advsimd.xml",
    "mnemonic": "FABD",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-abs.s.yaml",
    "caseIndex": 3,
    "word": 2129975069,
    "asmText": "fabd d29, d24, d20",
    "encodingFile": "fabd_advsimd.xml",
    "mnemonic": "FABD",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-abs.s.yaml",
    "caseIndex": 4,
    "word": 1579186643,
    "asmText": "sqabs b19, b14",
    "encodingFile": "sqabs_advsimd.xml",
    "mnemonic": "SQABS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-abs.s.yaml",
    "caseIndex": 5,
    "word": 1583380981,
    "asmText": "sqabs h21, h15",
    "encodingFile": "sqabs_advsimd.xml",
    "mnemonic": "SQABS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-abs.s.yaml",
    "caseIndex": 6,
    "word": 1587575188,
    "asmText": "sqabs s20, s12",
    "encodingFile": "sqabs_advsimd.xml",
    "mnemonic": "SQABS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-abs.s.yaml",
    "caseIndex": 7,
    "word": 1591769490,
    "asmText": "sqabs d18, d12",
    "encodingFile": "sqabs_advsimd.xml",
    "mnemonic": "SQABS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];
