export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 4,
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
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 6,
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
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 12,
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
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 14,
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
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 0,
    "word": 68648960,
    "asmText": "lslr z0.b, p0/m, z0.b, z0.b",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 1,
    "word": 72843264,
    "asmText": "lslr z0.h, p0/m, z0.h, z0.h",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 2,
    "word": 77037568,
    "asmText": "lslr z0.s, p0/m, z0.s, z0.s",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 3,
    "word": 81231872,
    "asmText": "lslr z0.d, p0/m, z0.d, z0.d",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 5,
    "word": 81231877,
    "asmText": "lslr z5.d, p0/m, z5.d, z0.d",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 7,
    "word": 81231877,
    "asmText": "lslr z5.d, p0/m, z5.d, z0.d",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 8,
    "word": 68648960,
    "asmText": "lslr z0.b, p0/m, z0.b, z0.b",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 9,
    "word": 72843264,
    "asmText": "lslr z0.h, p0/m, z0.h, z0.h",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 10,
    "word": 77037568,
    "asmText": "lslr z0.s, p0/m, z0.s, z0.s",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 11,
    "word": 81231872,
    "asmText": "lslr z0.d, p0/m, z0.d, z0.d",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 13,
    "word": 81231877,
    "asmText": "lslr z5.d, p0/m, z5.d, z0.d",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/lslr.s.yaml",
    "caseIndex": 15,
    "word": 81231877,
    "asmText": "lslr z5.d, p0/m, z5.d, z0.d",
    "encodingFile": "lslr_z_p_zz.xml",
    "mnemonic": "LSLR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
