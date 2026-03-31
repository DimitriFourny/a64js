export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-extract.s.yaml",
    "caseIndex": 0,
    "word": 771889184,
    "asmText": "ext v0.8b, v1.8b, v2.8b, #3",
    "encodingFile": "ext_advsimd.xml",
    "mnemonic": "EXT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-extract.s.yaml",
    "caseIndex": 1,
    "word": 1845631008,
    "asmText": "ext v0.16b, v1.16b, v2.16b, #3",
    "encodingFile": "ext_advsimd.xml",
    "mnemonic": "EXT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
