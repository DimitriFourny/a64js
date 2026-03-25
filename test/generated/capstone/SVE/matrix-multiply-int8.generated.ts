export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
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
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 5,
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
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 7,
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
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 10,
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
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
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
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 16,
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
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 0,
    "word": 1170380832,
    "asmText": "ummla z0.s, z1.b, z2.b",
    "encodingFile": "ummla_z_zzz.xml",
    "mnemonic": "UMMLA",
    "features": [
      "FEAT_SVE && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 1,
    "word": 1157797920,
    "asmText": "smmla z0.s, z1.b, z2.b",
    "encodingFile": "smmla_z_zzz.xml",
    "mnemonic": "SMMLA",
    "features": [
      "FEAT_SVE && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 2,
    "word": 1166186528,
    "asmText": "usmmla z0.s, z1.b, z2.b",
    "encodingFile": "usmmla_z_zzz.xml",
    "mnemonic": "USMMLA",
    "features": [
      "FEAT_SVE && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 4,
    "word": 1170380832,
    "asmText": "ummla z0.s, z1.b, z2.b",
    "encodingFile": "ummla_z_zzz.xml",
    "mnemonic": "UMMLA",
    "features": [
      "FEAT_SVE && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 6,
    "word": 1157797920,
    "asmText": "smmla z0.s, z1.b, z2.b",
    "encodingFile": "smmla_z_zzz.xml",
    "mnemonic": "SMMLA",
    "features": [
      "FEAT_SVE && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 8,
    "word": 1166186528,
    "asmText": "usmmla z0.s, z1.b, z2.b",
    "encodingFile": "usmmla_z_zzz.xml",
    "mnemonic": "USMMLA",
    "features": [
      "FEAT_SVE && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 9,
    "word": 1149401120,
    "asmText": "usdot z0.s, z1.b, z2.b",
    "encodingFile": "usdot_z_zzz.xml",
    "mnemonic": "USDOT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 11,
    "word": 1149401120,
    "asmText": "usdot z0.s, z1.b, z2.b",
    "encodingFile": "usdot_z_zzz.xml",
    "mnemonic": "USDOT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 12,
    "word": 1151473696,
    "asmText": "usdot z0.s, z1.b, z2.b[0]",
    "encodingFile": "usdot_z_zzzi.xml",
    "mnemonic": "USDOT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 13,
    "word": 1153047584,
    "asmText": "sudot z0.s, z1.b, z2.b[3]",
    "encodingFile": "sudot_z_zzzi.xml",
    "mnemonic": "SUDOT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 15,
    "word": 1151473696,
    "asmText": "usdot z0.s, z1.b, z2.b[0]",
    "encodingFile": "usdot_z_zzzi.xml",
    "mnemonic": "USDOT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_I8MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-int8.s.yaml",
    "caseIndex": 17,
    "word": 1151474720,
    "asmText": "sudot z0.s, z1.b, z2.b[0]",
    "encodingFile": "sudot_z_zzzi.xml",
    "mnemonic": "SUDOT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_I8MM",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_I8MM"
    ]
  }
];
