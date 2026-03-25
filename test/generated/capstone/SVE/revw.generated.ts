export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 1,
    "word": 80755936,
    "asmText": "movprfx z0.d, p7/z, z7.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 3,
    "word": 69254368,
    "asmText": "movprfx z0, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 6,
    "word": 80755936,
    "asmText": "movprfx z0.d, p7/z, z7.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 8,
    "word": 69254368,
    "asmText": "movprfx z0, z7",
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
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 0,
    "word": 99000288,
    "asmText": "revw z0.d, p7/m, z31.d",
    "encodingFile": "revb_z_z.xml",
    "mnemonic": "REVW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 2,
    "word": 99000288,
    "asmText": "revw z0.d, p7/m, z31.d",
    "encodingFile": "revb_z_z.xml",
    "mnemonic": "REVW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 4,
    "word": 99000288,
    "asmText": "revw z0.d, p7/m, z31.d",
    "encodingFile": "revb_z_z.xml",
    "mnemonic": "REVW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 5,
    "word": 99000288,
    "asmText": "revw z0.d, p7/m, z31.d",
    "encodingFile": "revb_z_z.xml",
    "mnemonic": "REVW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 7,
    "word": 99000288,
    "asmText": "revw z0.d, p7/m, z31.d",
    "encodingFile": "revb_z_z.xml",
    "mnemonic": "REVW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/revw.s.yaml",
    "caseIndex": 9,
    "word": 99000288,
    "asmText": "revw z0.d, p7/m, z31.d",
    "encodingFile": "revb_z_z.xml",
    "mnemonic": "REVW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
