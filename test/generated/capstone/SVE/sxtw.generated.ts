export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 2,
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
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 4,
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
    "sourceFile": "SVE/sxtw.s.yaml",
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
    "sourceFile": "SVE/sxtw.s.yaml",
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
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 0,
    "word": 81043456,
    "asmText": "sxtw z0.d, p0/m, z0.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 1,
    "word": 81051647,
    "asmText": "sxtw z31.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 3,
    "word": 81051620,
    "asmText": "sxtw z4.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 5,
    "word": 81051620,
    "asmText": "sxtw z4.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 6,
    "word": 81043456,
    "asmText": "sxtw z0.d, p0/m, z0.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 7,
    "word": 81051647,
    "asmText": "sxtw z31.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 9,
    "word": 81051620,
    "asmText": "sxtw z4.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtw.s.yaml",
    "caseIndex": 11,
    "word": 81051620,
    "asmText": "sxtw z4.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTW",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
