export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/prfb-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 2216689664,
    "asmText": "prfb pldl1keep, p0, [x0, z0.s, uxtw]",
    "encodingFile": "prfb_i_p_bz.xml",
    "mnemonic": "PRFB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfb-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 2218071365,
    "asmText": "prfb pldl3strm, p5, [x10, z21.s, uxtw]",
    "encodingFile": "prfb_i_p_bz.xml",
    "mnemonic": "PRFB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfb-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3290431488,
    "asmText": "prfb pldl1keep, p0, [x0, z0.d, uxtw]",
    "encodingFile": "prfb_i_p_bz.xml",
    "mnemonic": "PRFB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfb-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3296007493,
    "asmText": "prfb pldl3strm, p5, [x10, z21.d, sxtw]",
    "encodingFile": "prfb_i_p_bz.xml",
    "mnemonic": "PRFB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfb-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3294658560,
    "asmText": "prfb pldl1keep, p0, [x0, z0.d]",
    "encodingFile": "prfb_i_p_bz.xml",
    "mnemonic": "PRFB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfb-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 2214653351,
    "asmText": "prfb #7, p3, [z13.s]",
    "encodingFile": "prfb_i_p_ai.xml",
    "mnemonic": "PRFB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfb-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 2216684967,
    "asmText": "prfb #7, p3, [z13.s, #31]",
    "encodingFile": "prfb_i_p_ai.xml",
    "mnemonic": "PRFB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfb-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3288397125,
    "asmText": "prfb pldl3strm, p5, [z10.d]",
    "encodingFile": "prfb_i_p_ai.xml",
    "mnemonic": "PRFB",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/prfb-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3290428741,
    "asmText": "prfb pldl3strm, p5, [z10.d, #31]",
    "encodingFile": "prfb_i_p_ai.xml",
    "mnemonic": "PRFB",
    "features": [
      "FEAT_SVE"
    ]
  }
];
