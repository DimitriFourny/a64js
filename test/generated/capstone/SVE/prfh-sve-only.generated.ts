// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/prfh-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 2218079557,
    "asmText": "prfh pldl3strm, p5, [x10, z21.s, uxtw #1]",
    "encodingFile": "prfh_i_p_bz.xml",
    "mnemonic": "PRFH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfh-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 2222273861,
    "asmText": "prfh pldl3strm, p5, [x10, z21.s, sxtw #1]",
    "encodingFile": "prfh_i_p_bz.xml",
    "mnemonic": "PRFH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfh-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3291821381,
    "asmText": "prfh pldl3strm, p5, [x10, z21.d, uxtw #1]",
    "encodingFile": "prfh_i_p_bz.xml",
    "mnemonic": "PRFH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfh-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3296015685,
    "asmText": "prfh pldl3strm, p5, [x10, z21.d, sxtw #1]",
    "encodingFile": "prfh_i_p_bz.xml",
    "mnemonic": "PRFH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfh-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3294666752,
    "asmText": "prfh pldl1keep, p0, [x0, z0.d, lsl #1]",
    "encodingFile": "prfh_i_p_bz.xml",
    "mnemonic": "PRFH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfh-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 2223046639,
    "asmText": "prfh #15, p7, [z31.s]",
    "encodingFile": "prfh_i_p_ai.xml",
    "mnemonic": "PRFH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfh-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 2225078255,
    "asmText": "prfh #15, p7, [z31.s, #62]",
    "encodingFile": "prfh_i_p_ai.xml",
    "mnemonic": "PRFH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfh-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3296788463,
    "asmText": "prfh #15, p7, [z31.d]",
    "encodingFile": "prfh_i_p_ai.xml",
    "mnemonic": "PRFH",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfh-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3298820079,
    "asmText": "prfh #15, p7, [z31.d, #62]",
    "encodingFile": "prfh_i_p_ai.xml",
    "mnemonic": "PRFH",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
