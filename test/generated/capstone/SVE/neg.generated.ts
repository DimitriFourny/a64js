export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 8,
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
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 10,
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
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 20,
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
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 22,
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
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 0,
    "word": 68657152,
    "asmText": "neg z0.b, p0/m, z0.b",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 1,
    "word": 72851456,
    "asmText": "neg z0.h, p0/m, z0.h",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 2,
    "word": 77045760,
    "asmText": "neg z0.s, p0/m, z0.s",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 3,
    "word": 81240064,
    "asmText": "neg z0.d, p0/m, z0.d",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 4,
    "word": 68665343,
    "asmText": "neg z31.b, p7/m, z31.b",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 5,
    "word": 72859647,
    "asmText": "neg z31.h, p7/m, z31.h",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 6,
    "word": 77053951,
    "asmText": "neg z31.s, p7/m, z31.s",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 7,
    "word": 81248255,
    "asmText": "neg z31.d, p7/m, z31.d",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 9,
    "word": 81248228,
    "asmText": "neg z4.d, p7/m, z31.d",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 11,
    "word": 81248228,
    "asmText": "neg z4.d, p7/m, z31.d",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 12,
    "word": 68657152,
    "asmText": "neg z0.b, p0/m, z0.b",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 13,
    "word": 72851456,
    "asmText": "neg z0.h, p0/m, z0.h",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 14,
    "word": 77045760,
    "asmText": "neg z0.s, p0/m, z0.s",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 15,
    "word": 81240064,
    "asmText": "neg z0.d, p0/m, z0.d",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 16,
    "word": 68665343,
    "asmText": "neg z31.b, p7/m, z31.b",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 17,
    "word": 72859647,
    "asmText": "neg z31.h, p7/m, z31.h",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 18,
    "word": 77053951,
    "asmText": "neg z31.s, p7/m, z31.s",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 19,
    "word": 81248255,
    "asmText": "neg z31.d, p7/m, z31.d",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 21,
    "word": 81248228,
    "asmText": "neg z4.d, p7/m, z31.d",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/neg.s.yaml",
    "caseIndex": 23,
    "word": 81248228,
    "asmText": "neg z4.d, p7/m, z31.d",
    "encodingFile": "neg_z_p_z.xml",
    "mnemonic": "NEG",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
