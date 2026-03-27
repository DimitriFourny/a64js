export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SME/streaming-mode-neon-bf16.s.yaml",
    "caseIndex": 0,
    "word": 509821029,
    "asmText": "bfcvt h5, s3",
    "encodingFile": "bfcvt_float.xml",
    "mnemonic": "BFCVT",
    "features": [
      "FEAT_BF16"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
