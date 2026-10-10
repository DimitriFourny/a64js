// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 0,
    "word": 603979808,
    "asmText": "cmphs p0.b, p0/z, z1.b, z0.b",
    "encodingFile": "cmpeq_p_p_zz.xml",
    "mnemonic": "CMPHS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 1,
    "word": 608174112,
    "asmText": "cmphs p0.h, p0/z, z1.h, z0.h",
    "encodingFile": "cmpeq_p_p_zz.xml",
    "mnemonic": "CMPHS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 2,
    "word": 612368416,
    "asmText": "cmphs p0.s, p0/z, z1.s, z0.s",
    "encodingFile": "cmpeq_p_p_zz.xml",
    "mnemonic": "CMPHS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 3,
    "word": 616562720,
    "asmText": "cmphs p0.d, p0/z, z1.d, z0.d",
    "encodingFile": "cmpeq_p_p_zz.xml",
    "mnemonic": "CMPHS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 4,
    "word": 604037136,
    "asmText": "cmpls p0.b, p0/z, z0.b, z0.d",
    "encodingFile": "cmpeq_p_p_zw.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 5,
    "word": 608231440,
    "asmText": "cmpls p0.h, p0/z, z0.h, z0.d",
    "encodingFile": "cmpeq_p_p_zw.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 6,
    "word": 612425744,
    "asmText": "cmpls p0.s, p0/z, z0.s, z0.d",
    "encodingFile": "cmpeq_p_p_zw.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 7,
    "word": 606085136,
    "asmText": "cmpls p0.b, p0/z, z0.b, #0",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 8,
    "word": 610279440,
    "asmText": "cmpls p0.h, p0/z, z0.h, #0",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 9,
    "word": 614473744,
    "asmText": "cmpls p0.s, p0/z, z0.s, #0",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 10,
    "word": 618668048,
    "asmText": "cmpls p0.d, p0/z, z0.d, #0",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 11,
    "word": 608165904,
    "asmText": "cmpls p0.b, p0/z, z0.b, #127",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 12,
    "word": 612360208,
    "asmText": "cmpls p0.h, p0/z, z0.h, #127",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 13,
    "word": 616554512,
    "asmText": "cmpls p0.s, p0/z, z0.s, #127",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 14,
    "word": 620748816,
    "asmText": "cmpls p0.d, p0/z, z0.d, #127",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 15,
    "word": 603979808,
    "asmText": "cmphs p0.b, p0/z, z1.b, z0.b",
    "encodingFile": "cmpeq_p_p_zz.xml",
    "mnemonic": "CMPHS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 16,
    "word": 608174112,
    "asmText": "cmphs p0.h, p0/z, z1.h, z0.h",
    "encodingFile": "cmpeq_p_p_zz.xml",
    "mnemonic": "CMPHS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 17,
    "word": 612368416,
    "asmText": "cmphs p0.s, p0/z, z1.s, z0.s",
    "encodingFile": "cmpeq_p_p_zz.xml",
    "mnemonic": "CMPHS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 18,
    "word": 616562720,
    "asmText": "cmphs p0.d, p0/z, z1.d, z0.d",
    "encodingFile": "cmpeq_p_p_zz.xml",
    "mnemonic": "CMPHS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 19,
    "word": 604037136,
    "asmText": "cmpls p0.b, p0/z, z0.b, z0.d",
    "encodingFile": "cmpeq_p_p_zw.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 20,
    "word": 608231440,
    "asmText": "cmpls p0.h, p0/z, z0.h, z0.d",
    "encodingFile": "cmpeq_p_p_zw.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 21,
    "word": 612425744,
    "asmText": "cmpls p0.s, p0/z, z0.s, z0.d",
    "encodingFile": "cmpeq_p_p_zw.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 22,
    "word": 606085136,
    "asmText": "cmpls p0.b, p0/z, z0.b, #0",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 23,
    "word": 610279440,
    "asmText": "cmpls p0.h, p0/z, z0.h, #0",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 24,
    "word": 614473744,
    "asmText": "cmpls p0.s, p0/z, z0.s, #0",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 25,
    "word": 618668048,
    "asmText": "cmpls p0.d, p0/z, z0.d, #0",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 26,
    "word": 608165904,
    "asmText": "cmpls p0.b, p0/z, z0.b, #127",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 27,
    "word": 612360208,
    "asmText": "cmpls p0.h, p0/z, z0.h, #127",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 28,
    "word": 616554512,
    "asmText": "cmpls p0.s, p0/z, z0.s, #127",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cmpls.s.yaml",
    "caseIndex": 29,
    "word": 620748816,
    "asmText": "cmpls p0.d, p0/z, z0.d, #127",
    "encodingFile": "cmpeq_p_p_zi.xml",
    "mnemonic": "CMPLS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
