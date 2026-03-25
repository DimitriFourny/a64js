export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 0,
    "word": 3837820928,
    "asmText": "st1h { z0.s }, p0, [x0, z0.s, uxtw]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 1,
    "word": 3837837312,
    "asmText": "st1h { z0.s }, p0, [x0, z0.s, sxtw]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 2,
    "word": 3833626624,
    "asmText": "st1h { z0.d }, p0, [x0, z0.d, uxtw]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 3,
    "word": 3833643008,
    "asmText": "st1h { z0.d }, p0, [x0, z0.d, sxtw]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 4,
    "word": 3839918080,
    "asmText": "st1h { z0.s }, p0, [x0, z0.s, uxtw #1]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 5,
    "word": 3839934464,
    "asmText": "st1h { z0.s }, p0, [x0, z0.s, sxtw #1]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 6,
    "word": 3835723776,
    "asmText": "st1h { z0.d }, p0, [x0, z0.d, uxtw #1]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 7,
    "word": 3835740160,
    "asmText": "st1h { z0.d }, p0, [x0, z0.d, sxtw #1]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 8,
    "word": 3833634816,
    "asmText": "st1h { z0.d }, p0, [x0, z0.d]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 9,
    "word": 3835731968,
    "asmText": "st1h { z0.d }, p0, [x0, z0.d, lsl #1]",
    "encodingFile": "st1h_z_p_bz.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 10,
    "word": 3841966079,
    "asmText": "st1h { z31.s }, p7, [z31.s, #62]",
    "encodingFile": "st1h_z_p_ai.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 11,
    "word": 3839868927,
    "asmText": "st1h { z31.d }, p7, [z31.d, #62]",
    "encodingFile": "st1h_z_p_ai.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 12,
    "word": 3839933440,
    "asmText": "st1h { z0.s }, p7, [z0.s]",
    "encodingFile": "st1h_z_p_ai.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 13,
    "word": 3839933440,
    "asmText": "st1h { z0.s }, p7, [z0.s]",
    "encodingFile": "st1h_z_p_ai.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 14,
    "word": 3837836288,
    "asmText": "st1h { z0.d }, p7, [z0.d]",
    "encodingFile": "st1h_z_p_ai.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/st1h-sve-only.s.yaml",
    "caseIndex": 15,
    "word": 3837836288,
    "asmText": "st1h { z0.d }, p7, [z0.d]",
    "encodingFile": "st1h_z_p_ai.xml",
    "mnemonic": "ST1H",
    "features": [
      "FEAT_SVE"
    ]
  }
];
