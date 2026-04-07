export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 0,
    "word": 1695166464,
    "asmText": "fcvtn z0.b, { z0.h, z1.h }",
    "encodingFile": "fcvtn_z8_mz2.xml",
    "mnemonic": "FCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 1,
    "word": 1695167424,
    "asmText": "fcvtn z0.b, { z30.h, z31.h }",
    "encodingFile": "fcvtn_z8_mz2.xml",
    "mnemonic": "FCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 2,
    "word": 1695166495,
    "asmText": "fcvtn z31.b, { z0.h, z1.h }",
    "encodingFile": "fcvtn_z8_mz2.xml",
    "mnemonic": "FCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 3,
    "word": 1695167455,
    "asmText": "fcvtn z31.b, { z30.h, z31.h }",
    "encodingFile": "fcvtn_z8_mz2.xml",
    "mnemonic": "FCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 4,
    "word": 1695167488,
    "asmText": "fcvtnb z0.b, { z0.s, z1.s }",
    "encodingFile": "fcvtnb_z8_mz2.xml",
    "mnemonic": "FCVTNB",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 5,
    "word": 1695168448,
    "asmText": "fcvtnb z0.b, { z30.s, z31.s }",
    "encodingFile": "fcvtnb_z8_mz2.xml",
    "mnemonic": "FCVTNB",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 6,
    "word": 1695167519,
    "asmText": "fcvtnb z31.b, { z0.s, z1.s }",
    "encodingFile": "fcvtnb_z8_mz2.xml",
    "mnemonic": "FCVTNB",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 7,
    "word": 1695168479,
    "asmText": "fcvtnb z31.b, { z30.s, z31.s }",
    "encodingFile": "fcvtnb_z8_mz2.xml",
    "mnemonic": "FCVTNB",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 8,
    "word": 1695168512,
    "asmText": "bfcvtn z0.b, { z0.h, z1.h }",
    "encodingFile": "bfcvtn_z8_mz2.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 9,
    "word": 1695169472,
    "asmText": "bfcvtn z0.b, { z30.h, z31.h }",
    "encodingFile": "bfcvtn_z8_mz2.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 10,
    "word": 1695168543,
    "asmText": "bfcvtn z31.b, { z0.h, z1.h }",
    "encodingFile": "bfcvtn_z8_mz2.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 11,
    "word": 1695169503,
    "asmText": "bfcvtn z31.b, { z30.h, z31.h }",
    "encodingFile": "bfcvtn_z8_mz2.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 12,
    "word": 1695169536,
    "asmText": "fcvtnt z0.b, { z0.s, z1.s }",
    "encodingFile": "fcvtnt_z8_mz2.xml",
    "mnemonic": "FCVTNT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 13,
    "word": 1695170496,
    "asmText": "fcvtnt z0.b, { z30.s, z31.s }",
    "encodingFile": "fcvtnt_z8_mz2.xml",
    "mnemonic": "FCVTNT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 14,
    "word": 1695169567,
    "asmText": "fcvtnt z31.b, { z0.s, z1.s }",
    "encodingFile": "fcvtnt_z8_mz2.xml",
    "mnemonic": "FCVTNT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 15,
    "word": 1695170527,
    "asmText": "fcvtnt z31.b, { z30.s, z31.s }",
    "encodingFile": "fcvtnt_z8_mz2.xml",
    "mnemonic": "FCVTNT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 16,
    "word": 1695166464,
    "asmText": "fcvtn z0.b, { z0.h, z1.h }",
    "encodingFile": "fcvtn_z8_mz2.xml",
    "mnemonic": "FCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 17,
    "word": 1695167424,
    "asmText": "fcvtn z0.b, { z30.h, z31.h }",
    "encodingFile": "fcvtn_z8_mz2.xml",
    "mnemonic": "FCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 18,
    "word": 1695166495,
    "asmText": "fcvtn z31.b, { z0.h, z1.h }",
    "encodingFile": "fcvtn_z8_mz2.xml",
    "mnemonic": "FCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 19,
    "word": 1695167455,
    "asmText": "fcvtn z31.b, { z30.h, z31.h }",
    "encodingFile": "fcvtn_z8_mz2.xml",
    "mnemonic": "FCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 20,
    "word": 1695167488,
    "asmText": "fcvtnb z0.b, { z0.s, z1.s }",
    "encodingFile": "fcvtnb_z8_mz2.xml",
    "mnemonic": "FCVTNB",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 21,
    "word": 1695168448,
    "asmText": "fcvtnb z0.b, { z30.s, z31.s }",
    "encodingFile": "fcvtnb_z8_mz2.xml",
    "mnemonic": "FCVTNB",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 22,
    "word": 1695167519,
    "asmText": "fcvtnb z31.b, { z0.s, z1.s }",
    "encodingFile": "fcvtnb_z8_mz2.xml",
    "mnemonic": "FCVTNB",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 23,
    "word": 1695168479,
    "asmText": "fcvtnb z31.b, { z30.s, z31.s }",
    "encodingFile": "fcvtnb_z8_mz2.xml",
    "mnemonic": "FCVTNB",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 24,
    "word": 1695168512,
    "asmText": "bfcvtn z0.b, { z0.h, z1.h }",
    "encodingFile": "bfcvtn_z8_mz2.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 25,
    "word": 1695169472,
    "asmText": "bfcvtn z0.b, { z30.h, z31.h }",
    "encodingFile": "bfcvtn_z8_mz2.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 26,
    "word": 1695168543,
    "asmText": "bfcvtn z31.b, { z0.h, z1.h }",
    "encodingFile": "bfcvtn_z8_mz2.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 27,
    "word": 1695169503,
    "asmText": "bfcvtn z31.b, { z30.h, z31.h }",
    "encodingFile": "bfcvtn_z8_mz2.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 28,
    "word": 1695169536,
    "asmText": "fcvtnt z0.b, { z0.s, z1.s }",
    "encodingFile": "fcvtnt_z8_mz2.xml",
    "mnemonic": "FCVTNT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 29,
    "word": 1695170496,
    "asmText": "fcvtnt z0.b, { z30.s, z31.s }",
    "encodingFile": "fcvtnt_z8_mz2.xml",
    "mnemonic": "FCVTNT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 30,
    "word": 1695169567,
    "asmText": "fcvtnt z31.b, { z0.s, z1.s }",
    "encodingFile": "fcvtnt_z8_mz2.xml",
    "mnemonic": "FCVTNT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvtn.s.yaml",
    "caseIndex": 31,
    "word": 1695170527,
    "asmText": "fcvtnt z31.b, { z30.s, z31.s }",
    "encodingFile": "fcvtnt_z8_mz2.xml",
    "mnemonic": "FCVTNT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
