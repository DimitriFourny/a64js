export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 7,
    "word": 80748773,
    "asmText": "movprfx z5.d, p0/z, z7.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 9,
    "word": 69254373,
    "asmText": "movprfx z5, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 18,
    "word": 80748773,
    "asmText": "movprfx z5.d, p0/z, z7.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 20,
    "word": 69254373,
    "asmText": "movprfx z5, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 0,
    "word": 1700438016,
    "asmText": "fcvtzs z0.h, p0/m, z0.h",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 1,
    "word": 1700569088,
    "asmText": "fcvtzs z0.s, p0/m, z0.h",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 2,
    "word": 1704763392,
    "asmText": "fcvtzs z0.s, p0/m, z0.s",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 3,
    "word": 1708695552,
    "asmText": "fcvtzs z0.s, p0/m, z0.d",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 4,
    "word": 1700700160,
    "asmText": "fcvtzs z0.d, p0/m, z0.h",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 5,
    "word": 1708957696,
    "asmText": "fcvtzs z0.d, p0/m, z0.s",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 6,
    "word": 1709088768,
    "asmText": "fcvtzs z0.d, p0/m, z0.d",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 8,
    "word": 1709088773,
    "asmText": "fcvtzs z5.d, p0/m, z0.d",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 10,
    "word": 1709088773,
    "asmText": "fcvtzs z5.d, p0/m, z0.d",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 11,
    "word": 1700438016,
    "asmText": "fcvtzs z0.h, p0/m, z0.h",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 12,
    "word": 1700569088,
    "asmText": "fcvtzs z0.s, p0/m, z0.h",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 13,
    "word": 1704763392,
    "asmText": "fcvtzs z0.s, p0/m, z0.s",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 14,
    "word": 1708695552,
    "asmText": "fcvtzs z0.s, p0/m, z0.d",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 15,
    "word": 1700700160,
    "asmText": "fcvtzs z0.d, p0/m, z0.h",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 16,
    "word": 1708957696,
    "asmText": "fcvtzs z0.d, p0/m, z0.s",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 17,
    "word": 1709088768,
    "asmText": "fcvtzs z0.d, p0/m, z0.d",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 19,
    "word": 1709088773,
    "asmText": "fcvtzs z5.d, p0/m, z0.d",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fcvtzs.s.yaml",
    "caseIndex": 21,
    "word": 1709088773,
    "asmText": "fcvtzs z5.d, p0/m, z0.d",
    "encodingFile": "fcvtzs_z_p_z.xml",
    "mnemonic": "FCVTZS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
