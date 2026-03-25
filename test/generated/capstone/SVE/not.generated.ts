export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 6,
    "word": 80755908,
    "asmText": "movprfx z4.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 8,
    "word": 69254340,
    "asmText": "movprfx z4, z6",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 16,
    "word": 80755908,
    "asmText": "movprfx z4.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 18,
    "word": 69254340,
    "asmText": "movprfx z4, z6",
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
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 0,
    "word": 69124095,
    "asmText": "not z31.b, p7/m, z31.b",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 1,
    "word": 73318399,
    "asmText": "not z31.h, p7/m, z31.h",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 2,
    "word": 77512703,
    "asmText": "not z31.s, p7/m, z31.s",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 3,
    "word": 81707007,
    "asmText": "not z31.d, p7/m, z31.d",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 4,
    "word": 620773888,
    "asmText": "not p0.b, p0/z, p0.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 5,
    "word": 621772783,
    "asmText": "not p15.b, p15/z, p15.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 7,
    "word": 81706980,
    "asmText": "not z4.d, p7/m, z31.d",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 9,
    "word": 81706980,
    "asmText": "not z4.d, p7/m, z31.d",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 10,
    "word": 69124095,
    "asmText": "not z31.b, p7/m, z31.b",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 11,
    "word": 73318399,
    "asmText": "not z31.h, p7/m, z31.h",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 12,
    "word": 77512703,
    "asmText": "not z31.s, p7/m, z31.s",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 13,
    "word": 81707007,
    "asmText": "not z31.d, p7/m, z31.d",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 14,
    "word": 620773888,
    "asmText": "not p0.b, p0/z, p0.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 15,
    "word": 621772783,
    "asmText": "not p15.b, p15/z, p15.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 17,
    "word": 81706980,
    "asmText": "not z4.d, p7/m, z31.d",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/not.s.yaml",
    "caseIndex": 19,
    "word": 81706980,
    "asmText": "not z4.d, p7/m, z31.d",
    "encodingFile": "not_z_p_z.xml",
    "mnemonic": "NOT",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
