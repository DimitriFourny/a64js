// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/prfw-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 2216706048,
    "asmText": "prfw pldl1keep, p0, [x0, z0.s, uxtw #2]",
    "encodingFile": "prfw_i_p_bz.xml",
    "mnemonic": "PRFW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfw-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 2222282053,
    "asmText": "prfw pldl3strm, p5, [x10, z21.s, sxtw #2]",
    "encodingFile": "prfw_i_p_bz.xml",
    "mnemonic": "PRFW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfw-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3290975655,
    "asmText": "prfw #7, p3, [x13, z8.d, uxtw #2]",
    "encodingFile": "prfw_i_p_bz.xml",
    "mnemonic": "PRFW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfw-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3294642176,
    "asmText": "prfw pldl1keep, p0, [x0, z0.d, sxtw #2]",
    "encodingFile": "prfw_i_p_bz.xml",
    "mnemonic": "PRFW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfw-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3296056645,
    "asmText": "prfw pldl3strm, p5, [x10, z21.d, lsl #2]",
    "encodingFile": "prfw_i_p_bz.xml",
    "mnemonic": "PRFW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfw-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 2231435247,
    "asmText": "prfw #15, p7, [z31.s]",
    "encodingFile": "prfw_i_p_ai.xml",
    "mnemonic": "PRFW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfw-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 2233466863,
    "asmText": "prfw #15, p7, [z31.s, #124]",
    "encodingFile": "prfw_i_p_ai.xml",
    "mnemonic": "PRFW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfw-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3305177071,
    "asmText": "prfw #15, p7, [z31.d]",
    "encodingFile": "prfw_i_p_ai.xml",
    "mnemonic": "PRFW",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfw-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3307208687,
    "asmText": "prfw #15, p7, [z31.d, #124]",
    "encodingFile": "prfw_i_p_ai.xml",
    "mnemonic": "PRFW",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
