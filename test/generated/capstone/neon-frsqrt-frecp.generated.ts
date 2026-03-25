export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 0,
    "word": 248528864,
    "asmText": "frsqrts v0.4h, v31.4h, v16.4h",
    "encodingFile": "frsqrts_advsimd.xml",
    "mnemonic": "FRSQRTS",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 1,
    "word": 1322204388,
    "asmText": "frsqrts v4.8h, v7.8h, v15.8h",
    "encodingFile": "frsqrts_advsimd.xml",
    "mnemonic": "FRSQRTS",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 2,
    "word": 246480864,
    "asmText": "frsqrts v0.2s, v31.2s, v16.2s",
    "encodingFile": "frsqrts_advsimd.xml",
    "mnemonic": "FRSQRTS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 3,
    "word": 1320156388,
    "asmText": "frsqrts v4.4s, v7.4s, v15.4s",
    "encodingFile": "frsqrts_advsimd.xml",
    "mnemonic": "FRSQRTS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 4,
    "word": 1323695197,
    "asmText": "frsqrts v29.2d, v2.2d, v5.2d",
    "encodingFile": "frsqrts_advsimd.xml",
    "mnemonic": "FRSQRTS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 5,
    "word": 239877379,
    "asmText": "frecps v3.4h, v8.4h, v12.4h",
    "encodingFile": "frecps_advsimd.xml",
    "mnemonic": "FRECPS",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 6,
    "word": 1314668479,
    "asmText": "frecps v31.8h, v29.8h, v28.8h",
    "encodingFile": "frecps_advsimd.xml",
    "mnemonic": "FRECPS",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 7,
    "word": 1312620479,
    "asmText": "frecps v31.4s, v29.4s, v28.4s",
    "encodingFile": "frecps_advsimd.xml",
    "mnemonic": "FRECPS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 8,
    "word": 237829379,
    "asmText": "frecps v3.2s, v8.2s, v12.2s",
    "encodingFile": "frecps_advsimd.xml",
    "mnemonic": "FRECPS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-frsqrt-frecp.s.yaml",
    "caseIndex": 9,
    "word": 1315831281,
    "asmText": "frecps v17.2d, v15.2d, v13.2d",
    "encodingFile": "frecps_advsimd.xml",
    "mnemonic": "FRECPS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];
