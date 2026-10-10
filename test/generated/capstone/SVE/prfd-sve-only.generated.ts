// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/prfd-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 2216714240,
    "asmText": "prfd pldl1keep, p0, [x0, z0.s, uxtw #3]",
    "encodingFile": "prfd_i_p_bz.xml",
    "mnemonic": "PRFD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfd-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 2220908544,
    "asmText": "prfd pldl1keep, p0, [x0, z0.s, sxtw #3]",
    "encodingFile": "prfd_i_p_bz.xml",
    "mnemonic": "PRFD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfd-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3290456064,
    "asmText": "prfd pldl1keep, p0, [x0, z0.d, uxtw #3]",
    "encodingFile": "prfd_i_p_bz.xml",
    "mnemonic": "PRFD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfd-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3294650368,
    "asmText": "prfd pldl1keep, p0, [x0, z0.d, sxtw #3]",
    "encodingFile": "prfd_i_p_bz.xml",
    "mnemonic": "PRFD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfd-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3294683136,
    "asmText": "prfd pldl1keep, p0, [x0, z0.d, lsl #3]",
    "encodingFile": "prfd_i_p_bz.xml",
    "mnemonic": "PRFD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfd-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 2239823855,
    "asmText": "prfd #15, p7, [z31.s]",
    "encodingFile": "prfd_i_p_ai.xml",
    "mnemonic": "PRFD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfd-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 2241855471,
    "asmText": "prfd #15, p7, [z31.s, #248]",
    "encodingFile": "prfd_i_p_ai.xml",
    "mnemonic": "PRFD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfd-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3313565679,
    "asmText": "prfd #15, p7, [z31.d]",
    "encodingFile": "prfd_i_p_ai.xml",
    "mnemonic": "PRFD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfd-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3315597295,
    "asmText": "prfd #15, p7, [z31.d, #248]",
    "encodingFile": "prfd_i_p_ai.xml",
    "mnemonic": "PRFD",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
