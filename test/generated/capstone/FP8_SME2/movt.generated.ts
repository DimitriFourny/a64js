// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8_SME2/movt.s.yaml",
    "caseIndex": 0,
    "word": 3226403808,
    "asmText": "movt zt0, z0",
    "encodingFile": "movt_zt_z.xml",
    "mnemonic": "MOVT",
    "features": [
      "FEAT_SME_LUTv2"
    ]
  },
  {
    "sourceFile": "FP8_SME2/movt.s.yaml",
    "caseIndex": 1,
    "word": 3226416127,
    "asmText": "movt zt0[3, mul vl], z31",
    "encodingFile": "movt_zt_z.xml",
    "mnemonic": "MOVT",
    "features": [
      "FEAT_SME_LUTv2"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
