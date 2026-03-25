export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 4,
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
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 6,
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
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 12,
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
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 14,
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
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 0,
    "word": 68362208,
    "asmText": "umulh z0.b, p7/m, z0.b, z31.b",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 1,
    "word": 72556512,
    "asmText": "umulh z0.h, p7/m, z0.h, z31.h",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 2,
    "word": 76750816,
    "asmText": "umulh z0.s, p7/m, z0.s, z31.s",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 3,
    "word": 80945120,
    "asmText": "umulh z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 5,
    "word": 80945120,
    "asmText": "umulh z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 7,
    "word": 80945120,
    "asmText": "umulh z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 8,
    "word": 68362208,
    "asmText": "umulh z0.b, p7/m, z0.b, z31.b",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 9,
    "word": 72556512,
    "asmText": "umulh z0.h, p7/m, z0.h, z31.h",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 10,
    "word": 76750816,
    "asmText": "umulh z0.s, p7/m, z0.s, z31.s",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 11,
    "word": 80945120,
    "asmText": "umulh z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 13,
    "word": 80945120,
    "asmText": "umulh z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/umulh.s.yaml",
    "caseIndex": 15,
    "word": 80945120,
    "asmText": "umulh z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "umulh_z_p_zz.xml",
    "mnemonic": "UMULH",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
