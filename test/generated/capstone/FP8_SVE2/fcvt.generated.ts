export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 0,
    "word": 1695035392,
    "asmText": "f1cvt z0.h, z0.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 1,
    "word": 1695036384,
    "asmText": "f1cvt z0.h, z31.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 2,
    "word": 1695035423,
    "asmText": "f1cvt z31.h, z0.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 3,
    "word": 1695036415,
    "asmText": "f1cvt z31.h, z31.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 4,
    "word": 1695036416,
    "asmText": "f2cvt z0.h, z0.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 5,
    "word": 1695037408,
    "asmText": "f2cvt z0.h, z31.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 6,
    "word": 1695036447,
    "asmText": "f2cvt z31.h, z0.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 7,
    "word": 1695037439,
    "asmText": "f2cvt z31.h, z31.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 8,
    "word": 1695037440,
    "asmText": "bf1cvt z0.h, z0.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 9,
    "word": 1695038432,
    "asmText": "bf1cvt z0.h, z31.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 10,
    "word": 1695037471,
    "asmText": "bf1cvt z31.h, z0.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 11,
    "word": 1695038463,
    "asmText": "bf1cvt z31.h, z31.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 12,
    "word": 1695038464,
    "asmText": "bf2cvt z0.h, z0.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 13,
    "word": 1695039456,
    "asmText": "bf2cvt z0.h, z31.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 14,
    "word": 1695038495,
    "asmText": "bf2cvt z31.h, z0.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 15,
    "word": 1695039487,
    "asmText": "bf2cvt z31.h, z31.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 16,
    "word": 1695100928,
    "asmText": "f1cvtlt z0.h, z0.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 17,
    "word": 1695101920,
    "asmText": "f1cvtlt z0.h, z31.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 18,
    "word": 1695100959,
    "asmText": "f1cvtlt z31.h, z0.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 19,
    "word": 1695101951,
    "asmText": "f1cvtlt z31.h, z31.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 20,
    "word": 1695101952,
    "asmText": "f2cvtlt z0.h, z0.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 21,
    "word": 1695102944,
    "asmText": "f2cvtlt z0.h, z31.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 22,
    "word": 1695101983,
    "asmText": "f2cvtlt z31.h, z0.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 23,
    "word": 1695102975,
    "asmText": "f2cvtlt z31.h, z31.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 24,
    "word": 1695102976,
    "asmText": "bf1cvtlt z0.h, z0.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 25,
    "word": 1695103968,
    "asmText": "bf1cvtlt z0.h, z31.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 26,
    "word": 1695103007,
    "asmText": "bf1cvtlt z31.h, z0.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 27,
    "word": 1695103999,
    "asmText": "bf1cvtlt z31.h, z31.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 28,
    "word": 1695104000,
    "asmText": "bf2cvtlt z0.h, z0.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 29,
    "word": 1695104992,
    "asmText": "bf2cvtlt z0.h, z31.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 30,
    "word": 1695104031,
    "asmText": "bf2cvtlt z31.h, z0.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 31,
    "word": 1695105023,
    "asmText": "bf2cvtlt z31.h, z31.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 32,
    "word": 1695035392,
    "asmText": "f1cvt z0.h, z0.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 33,
    "word": 1695036384,
    "asmText": "f1cvt z0.h, z31.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 34,
    "word": 1695035423,
    "asmText": "f1cvt z31.h, z0.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 35,
    "word": 1695036415,
    "asmText": "f1cvt z31.h, z31.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 36,
    "word": 1695036416,
    "asmText": "f2cvt z0.h, z0.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 37,
    "word": 1695037408,
    "asmText": "f2cvt z0.h, z31.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 38,
    "word": 1695036447,
    "asmText": "f2cvt z31.h, z0.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 39,
    "word": 1695037439,
    "asmText": "f2cvt z31.h, z31.b",
    "encodingFile": "f1cvt_z_z8.xml",
    "mnemonic": "F2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 40,
    "word": 1695037440,
    "asmText": "bf1cvt z0.h, z0.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 41,
    "word": 1695038432,
    "asmText": "bf1cvt z0.h, z31.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 42,
    "word": 1695037471,
    "asmText": "bf1cvt z31.h, z0.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 43,
    "word": 1695038463,
    "asmText": "bf1cvt z31.h, z31.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF1CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 44,
    "word": 1695038464,
    "asmText": "bf2cvt z0.h, z0.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 45,
    "word": 1695039456,
    "asmText": "bf2cvt z0.h, z31.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 46,
    "word": 1695038495,
    "asmText": "bf2cvt z31.h, z0.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 47,
    "word": 1695039487,
    "asmText": "bf2cvt z31.h, z31.b",
    "encodingFile": "bf1cvt_z_z8.xml",
    "mnemonic": "BF2CVT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 48,
    "word": 1695100928,
    "asmText": "f1cvtlt z0.h, z0.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 49,
    "word": 1695101920,
    "asmText": "f1cvtlt z0.h, z31.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 50,
    "word": 1695100959,
    "asmText": "f1cvtlt z31.h, z0.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 51,
    "word": 1695101951,
    "asmText": "f1cvtlt z31.h, z31.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 52,
    "word": 1695101952,
    "asmText": "f2cvtlt z0.h, z0.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 53,
    "word": 1695102944,
    "asmText": "f2cvtlt z0.h, z31.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 54,
    "word": 1695101983,
    "asmText": "f2cvtlt z31.h, z0.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 55,
    "word": 1695102975,
    "asmText": "f2cvtlt z31.h, z31.b",
    "encodingFile": "f1cvtlt_z_z8.xml",
    "mnemonic": "F2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 56,
    "word": 1695102976,
    "asmText": "bf1cvtlt z0.h, z0.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 57,
    "word": 1695103968,
    "asmText": "bf1cvtlt z0.h, z31.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 58,
    "word": 1695103007,
    "asmText": "bf1cvtlt z31.h, z0.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 59,
    "word": 1695103999,
    "asmText": "bf1cvtlt z31.h, z31.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF1CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 60,
    "word": 1695104000,
    "asmText": "bf2cvtlt z0.h, z0.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 61,
    "word": 1695104992,
    "asmText": "bf2cvtlt z0.h, z31.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 62,
    "word": 1695104031,
    "asmText": "bf2cvtlt z31.h, z0.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fcvt.s.yaml",
    "caseIndex": 63,
    "word": 1695105023,
    "asmText": "bf2cvtlt z31.h, z31.b",
    "encodingFile": "bf1cvtlt_z_z8.xml",
    "mnemonic": "BF2CVTLT",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_FP8"
    ]
  }
];
