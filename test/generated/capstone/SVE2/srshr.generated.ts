export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 8,
    "word": 80748767,
    "asmText": "movprfx z31.d, p0/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 10,
    "word": 69254367,
    "asmText": "movprfx z31, z6",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 20,
    "word": 80748767,
    "asmText": "movprfx z31.d, p0/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 22,
    "word": 69254367,
    "asmText": "movprfx z31, z6",
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
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 0,
    "word": 67928544,
    "asmText": "srshr z0.b, p0/m, z0.b, #1",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 1,
    "word": 67928351,
    "asmText": "srshr z31.b, p0/m, z31.b, #8",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 2,
    "word": 67929056,
    "asmText": "srshr z0.h, p0/m, z0.h, #1",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 3,
    "word": 67928607,
    "asmText": "srshr z31.h, p0/m, z31.h, #16",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 4,
    "word": 72123360,
    "asmText": "srshr z0.s, p0/m, z0.s, #1",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 5,
    "word": 72122399,
    "asmText": "srshr z31.s, p0/m, z31.s, #32",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 6,
    "word": 80511968,
    "asmText": "srshr z0.d, p0/m, z0.d, #1",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 7,
    "word": 76316703,
    "asmText": "srshr z31.d, p0/m, z31.d, #64",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 9,
    "word": 76316703,
    "asmText": "srshr z31.d, p0/m, z31.d, #64",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 11,
    "word": 76316703,
    "asmText": "srshr z31.d, p0/m, z31.d, #64",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 12,
    "word": 67928544,
    "asmText": "srshr z0.b, p0/m, z0.b, #1",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 13,
    "word": 67928351,
    "asmText": "srshr z31.b, p0/m, z31.b, #8",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 14,
    "word": 67929056,
    "asmText": "srshr z0.h, p0/m, z0.h, #1",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 15,
    "word": 67928607,
    "asmText": "srshr z31.h, p0/m, z31.h, #16",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 16,
    "word": 72123360,
    "asmText": "srshr z0.s, p0/m, z0.s, #1",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 17,
    "word": 72122399,
    "asmText": "srshr z31.s, p0/m, z31.s, #32",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 18,
    "word": 80511968,
    "asmText": "srshr z0.d, p0/m, z0.d, #1",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 19,
    "word": 76316703,
    "asmText": "srshr z31.d, p0/m, z31.d, #64",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 21,
    "word": 76316703,
    "asmText": "srshr z31.d, p0/m, z31.d, #64",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/srshr.s.yaml",
    "caseIndex": 23,
    "word": 76316703,
    "asmText": "srshr z31.d, p0/m, z31.d, #64",
    "encodingFile": "srshr_z_p_zi.xml",
    "mnemonic": "SRSHR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
