export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
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
    "sourceFile": "SVE2/sqcadd.s.yaml",
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
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 0,
    "word": 1157748736,
    "asmText": "sqcadd z0.b, z0.b, z0.b, #90",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 1,
    "word": 1161943040,
    "asmText": "sqcadd z0.h, z0.h, z0.h, #90",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 2,
    "word": 1166137344,
    "asmText": "sqcadd z0.s, z0.s, z0.s, #90",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 3,
    "word": 1170331648,
    "asmText": "sqcadd z0.d, z0.d, z0.d, #90",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 4,
    "word": 1157750783,
    "asmText": "sqcadd z31.b, z31.b, z31.b, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 5,
    "word": 1161945087,
    "asmText": "sqcadd z31.h, z31.h, z31.h, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 6,
    "word": 1166139391,
    "asmText": "sqcadd z31.s, z31.s, z31.s, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 7,
    "word": 1170333695,
    "asmText": "sqcadd z31.d, z31.d, z31.d, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 9,
    "word": 1170333668,
    "asmText": "sqcadd z4.d, z4.d, z31.d, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 10,
    "word": 1157748736,
    "asmText": "sqcadd z0.b, z0.b, z0.b, #90",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 11,
    "word": 1161943040,
    "asmText": "sqcadd z0.h, z0.h, z0.h, #90",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 12,
    "word": 1166137344,
    "asmText": "sqcadd z0.s, z0.s, z0.s, #90",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 13,
    "word": 1170331648,
    "asmText": "sqcadd z0.d, z0.d, z0.d, #90",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 14,
    "word": 1157750783,
    "asmText": "sqcadd z31.b, z31.b, z31.b, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 15,
    "word": 1161945087,
    "asmText": "sqcadd z31.h, z31.h, z31.h, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 16,
    "word": 1166139391,
    "asmText": "sqcadd z31.s, z31.s, z31.s, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 17,
    "word": 1170333695,
    "asmText": "sqcadd z31.d, z31.d, z31.d, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sqcadd.s.yaml",
    "caseIndex": 19,
    "word": 1170333668,
    "asmText": "sqcadd z4.d, z4.d, z31.d, #270",
    "encodingFile": "sqcadd_z_zz.xml",
    "mnemonic": "SQCADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
