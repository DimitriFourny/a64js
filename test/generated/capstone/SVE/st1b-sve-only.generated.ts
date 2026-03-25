export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 3829432320,
    "asmText": "st1b { z0.s }, p0, [x0, z0.s, uxtw]",
    "encodingFile": "st1b_z_p_bz.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 3829448704,
    "asmText": "st1b { z0.s }, p0, [x0, z0.s, sxtw]",
    "encodingFile": "st1b_z_p_bz.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3825238016,
    "asmText": "st1b { z0.d }, p0, [x0, z0.d, uxtw]",
    "encodingFile": "st1b_z_p_bz.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3825254400,
    "asmText": "st1b { z0.d }, p0, [x0, z0.d, sxtw]",
    "encodingFile": "st1b_z_p_bz.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3825246208,
    "asmText": "st1b { z0.d }, p0, [x0, z0.d]",
    "encodingFile": "st1b_z_p_bz.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 3833577471,
    "asmText": "st1b { z31.s }, p7, [z31.s, #31]",
    "encodingFile": "st1b_z_p_ai.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 3831480319,
    "asmText": "st1b { z31.d }, p7, [z31.d, #31]",
    "encodingFile": "st1b_z_p_ai.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3831544832,
    "asmText": "st1b { z0.s }, p7, [z0.s]",
    "encodingFile": "st1b_z_p_ai.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3831544832,
    "asmText": "st1b { z0.s }, p7, [z0.s]",
    "encodingFile": "st1b_z_p_ai.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 9,
    "word": 3829447680,
    "asmText": "st1b { z0.d }, p7, [z0.d]",
    "encodingFile": "st1b_z_p_ai.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1b-sve-only.s.yaml",
    "caseIndex": 10,
    "word": 3829447680,
    "asmText": "st1b { z0.d }, p7, [z0.d]",
    "encodingFile": "st1b_z_p_ai.xml",
    "mnemonic": "ST1B",
    "features": [
      "FEAT_SVE"
    ]
  }
];
