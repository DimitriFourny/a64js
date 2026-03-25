export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 18,
    "word": 69254367,
    "asmText": "movprfx z31, z6",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 38,
    "word": 69254367,
    "asmText": "movprfx z31, z6",
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
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 0,
    "word": 69212160,
    "asmText": "sqsub z0.b, z0.b, z0.b",
    "encodingFile": "sqsub_z_zz.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 1,
    "word": 73406464,
    "asmText": "sqsub z0.h, z0.h, z0.h",
    "encodingFile": "sqsub_z_zz.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 2,
    "word": 77600768,
    "asmText": "sqsub z0.s, z0.s, z0.s",
    "encodingFile": "sqsub_z_zz.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 3,
    "word": 81795072,
    "asmText": "sqsub z0.d, z0.d, z0.d",
    "encodingFile": "sqsub_z_zz.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 4,
    "word": 623296512,
    "asmText": "sqsub z0.b, z0.b, #0",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 5,
    "word": 623304703,
    "asmText": "sqsub z31.b, z31.b, #255",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 6,
    "word": 627490816,
    "asmText": "sqsub z0.h, z0.h, #0",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 7,
    "word": 627499008,
    "asmText": "sqsub z0.h, z0.h, #0, lsl #8",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 8,
    "word": 627507199,
    "asmText": "sqsub z31.h, z31.h, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 9,
    "word": 627507199,
    "asmText": "sqsub z31.h, z31.h, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 10,
    "word": 631685120,
    "asmText": "sqsub z0.s, z0.s, #0",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 11,
    "word": 631693312,
    "asmText": "sqsub z0.s, z0.s, #0, lsl #8",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 12,
    "word": 631701503,
    "asmText": "sqsub z31.s, z31.s, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 13,
    "word": 631701503,
    "asmText": "sqsub z31.s, z31.s, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 14,
    "word": 635879424,
    "asmText": "sqsub z0.d, z0.d, #0",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 15,
    "word": 635887616,
    "asmText": "sqsub z0.d, z0.d, #0, lsl #8",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 16,
    "word": 635895807,
    "asmText": "sqsub z31.d, z31.d, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 17,
    "word": 635895807,
    "asmText": "sqsub z31.d, z31.d, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 19,
    "word": 635895807,
    "asmText": "sqsub z31.d, z31.d, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 20,
    "word": 69212160,
    "asmText": "sqsub z0.b, z0.b, z0.b",
    "encodingFile": "sqsub_z_zz.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 21,
    "word": 73406464,
    "asmText": "sqsub z0.h, z0.h, z0.h",
    "encodingFile": "sqsub_z_zz.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 22,
    "word": 77600768,
    "asmText": "sqsub z0.s, z0.s, z0.s",
    "encodingFile": "sqsub_z_zz.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 23,
    "word": 81795072,
    "asmText": "sqsub z0.d, z0.d, z0.d",
    "encodingFile": "sqsub_z_zz.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 24,
    "word": 623296512,
    "asmText": "sqsub z0.b, z0.b, #0",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 25,
    "word": 623304703,
    "asmText": "sqsub z31.b, z31.b, #255",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 26,
    "word": 627490816,
    "asmText": "sqsub z0.h, z0.h, #0",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 27,
    "word": 627499008,
    "asmText": "sqsub z0.h, z0.h, #0, lsl #8",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 28,
    "word": 627507199,
    "asmText": "sqsub z31.h, z31.h, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 29,
    "word": 627507199,
    "asmText": "sqsub z31.h, z31.h, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 30,
    "word": 631685120,
    "asmText": "sqsub z0.s, z0.s, #0",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 31,
    "word": 631693312,
    "asmText": "sqsub z0.s, z0.s, #0, lsl #8",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 32,
    "word": 631701503,
    "asmText": "sqsub z31.s, z31.s, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 33,
    "word": 631701503,
    "asmText": "sqsub z31.s, z31.s, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 34,
    "word": 635879424,
    "asmText": "sqsub z0.d, z0.d, #0",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 35,
    "word": 635887616,
    "asmText": "sqsub z0.d, z0.d, #0, lsl #8",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 36,
    "word": 635895807,
    "asmText": "sqsub z31.d, z31.d, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 37,
    "word": 635895807,
    "asmText": "sqsub z31.d, z31.d, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sqsub.s.yaml",
    "caseIndex": 39,
    "word": 635895807,
    "asmText": "sqsub z31.d, z31.d, #65280",
    "encodingFile": "sqsub_z_zi.xml",
    "mnemonic": "SQSUB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
