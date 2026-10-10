// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/st1d-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 3850403840,
    "asmText": "st1d { z0.d }, p0, [x0, z0.d, uxtw]",
    "encodingFile": "st1d_z_p_bz.xml",
    "mnemonic": "ST1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1d-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 3850420224,
    "asmText": "st1d { z0.d }, p0, [x0, z0.d, sxtw]",
    "encodingFile": "st1d_z_p_bz.xml",
    "mnemonic": "ST1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1d-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3852500992,
    "asmText": "st1d { z0.d }, p0, [x0, z0.d, uxtw #3]",
    "encodingFile": "st1d_z_p_bz.xml",
    "mnemonic": "ST1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1d-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3852517376,
    "asmText": "st1d { z0.d }, p0, [x0, z0.d, sxtw #3]",
    "encodingFile": "st1d_z_p_bz.xml",
    "mnemonic": "ST1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1d-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3850412032,
    "asmText": "st1d { z0.d }, p0, [x0, z0.d]",
    "encodingFile": "st1d_z_p_bz.xml",
    "mnemonic": "ST1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1d-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 3852509184,
    "asmText": "st1d { z0.d }, p0, [x0, z0.d, lsl #3]",
    "encodingFile": "st1d_z_p_bz.xml",
    "mnemonic": "ST1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1d-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 3856646143,
    "asmText": "st1d { z31.d }, p7, [z31.d, #248]",
    "encodingFile": "st1d_z_p_ai.xml",
    "mnemonic": "ST1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1d-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3854613504,
    "asmText": "st1d { z0.d }, p7, [z0.d]",
    "encodingFile": "st1d_z_p_ai.xml",
    "mnemonic": "ST1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1d-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3854613504,
    "asmText": "st1d { z0.d }, p7, [z0.d]",
    "encodingFile": "st1d_z_p_ai.xml",
    "mnemonic": "ST1D",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
