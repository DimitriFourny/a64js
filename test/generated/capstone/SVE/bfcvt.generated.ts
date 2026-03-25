export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 1,
    "word": 76619840,
    "asmText": "movprfx z0.s, p0/m, z2.s",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 3,
    "word": 69254208,
    "asmText": "movprfx z0, z2",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 6,
    "word": 76619840,
    "asmText": "movprfx z0.s, p0/m, z2.s",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 8,
    "word": 69254208,
    "asmText": "movprfx z0, z2",
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
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 0,
    "word": 1703583776,
    "asmText": "bfcvt z0.h, p0/m, z1.s",
    "encodingFile": "bfcvt_z_p_z.xml",
    "mnemonic": "BFCVT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_BF16",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 2,
    "word": 1703583776,
    "asmText": "bfcvt z0.h, p0/m, z1.s",
    "encodingFile": "bfcvt_z_p_z.xml",
    "mnemonic": "BFCVT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_BF16",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 4,
    "word": 1703583776,
    "asmText": "bfcvt z0.h, p0/m, z1.s",
    "encodingFile": "bfcvt_z_p_z.xml",
    "mnemonic": "BFCVT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_BF16",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 5,
    "word": 1703583776,
    "asmText": "bfcvt z0.h, p0/m, z1.s",
    "encodingFile": "bfcvt_z_p_z.xml",
    "mnemonic": "BFCVT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_BF16",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 7,
    "word": 1703583776,
    "asmText": "bfcvt z0.h, p0/m, z1.s",
    "encodingFile": "bfcvt_z_p_z.xml",
    "mnemonic": "BFCVT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_BF16",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "SVE/bfcvt.s.yaml",
    "caseIndex": 9,
    "word": 1703583776,
    "asmText": "bfcvt z0.h, p0/m, z1.s",
    "encodingFile": "bfcvt_z_p_z.xml",
    "mnemonic": "BFCVT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_BF16",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_BF16"
    ]
  }
];
