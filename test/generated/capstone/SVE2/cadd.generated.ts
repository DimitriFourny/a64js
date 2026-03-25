export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/cadd.s.yaml",
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
    "sourceFile": "SVE2/cadd.s.yaml",
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
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 0,
    "word": 1157683200,
    "asmText": "cadd z0.b, z0.b, z0.b, #90",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 1,
    "word": 1161877504,
    "asmText": "cadd z0.h, z0.h, z0.h, #90",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 2,
    "word": 1166071808,
    "asmText": "cadd z0.s, z0.s, z0.s, #90",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 3,
    "word": 1170266112,
    "asmText": "cadd z0.d, z0.d, z0.d, #90",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 4,
    "word": 1157685247,
    "asmText": "cadd z31.b, z31.b, z31.b, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 5,
    "word": 1161879551,
    "asmText": "cadd z31.h, z31.h, z31.h, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 6,
    "word": 1166073855,
    "asmText": "cadd z31.s, z31.s, z31.s, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 7,
    "word": 1170268159,
    "asmText": "cadd z31.d, z31.d, z31.d, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 9,
    "word": 1170268132,
    "asmText": "cadd z4.d, z4.d, z31.d, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 10,
    "word": 1157683200,
    "asmText": "cadd z0.b, z0.b, z0.b, #90",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 11,
    "word": 1161877504,
    "asmText": "cadd z0.h, z0.h, z0.h, #90",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 12,
    "word": 1166071808,
    "asmText": "cadd z0.s, z0.s, z0.s, #90",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 13,
    "word": 1170266112,
    "asmText": "cadd z0.d, z0.d, z0.d, #90",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 14,
    "word": 1157685247,
    "asmText": "cadd z31.b, z31.b, z31.b, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 15,
    "word": 1161879551,
    "asmText": "cadd z31.h, z31.h, z31.h, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 16,
    "word": 1166073855,
    "asmText": "cadd z31.s, z31.s, z31.s, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 17,
    "word": 1170268159,
    "asmText": "cadd z31.d, z31.d, z31.d, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cadd.s.yaml",
    "caseIndex": 19,
    "word": 1170268132,
    "asmText": "cadd z4.d, z4.d, z31.d, #270",
    "encodingFile": "cadd_z_zz.xml",
    "mnemonic": "CADD",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
