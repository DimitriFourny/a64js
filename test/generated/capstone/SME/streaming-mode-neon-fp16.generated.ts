// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SME/streaming-mode-neon-fp16.s.yaml",
    "caseIndex": 0,
    "word": 1581390880,
    "asmText": "fmulx h0, h1, h2",
    "encodingFile": "fmulx_advsimd_vec.xml",
    "mnemonic": "FMULX",
    "features": [
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "SME/streaming-mode-neon-fp16.s.yaml",
    "caseIndex": 1,
    "word": 1581399072,
    "asmText": "frecps h0, h1, h2",
    "encodingFile": "frecps_advsimd.xml",
    "mnemonic": "FRECPS",
    "features": [
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "SME/streaming-mode-neon-fp16.s.yaml",
    "caseIndex": 2,
    "word": 1589787680,
    "asmText": "frsqrts h0, h1, h2",
    "encodingFile": "frsqrts_advsimd.xml",
    "mnemonic": "FRSQRTS",
    "features": [
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "SME/streaming-mode-neon-fp16.s.yaml",
    "caseIndex": 3,
    "word": 1593432096,
    "asmText": "frecpe h0, h1",
    "encodingFile": "frecpe_advsimd.xml",
    "mnemonic": "FRECPE",
    "features": [
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "SME/streaming-mode-neon-fp16.s.yaml",
    "caseIndex": 4,
    "word": 1593440288,
    "asmText": "frecpx h0, h1",
    "encodingFile": "frecpx_advsimd.xml",
    "mnemonic": "FRECPX",
    "features": [
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "SME/streaming-mode-neon-fp16.s.yaml",
    "caseIndex": 5,
    "word": 2130303008,
    "asmText": "frsqrte h0, h1",
    "encodingFile": "frsqrte_advsimd.xml",
    "mnemonic": "FRSQRTE",
    "features": [
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
