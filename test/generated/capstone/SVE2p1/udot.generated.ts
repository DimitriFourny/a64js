export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 0,
    "word": 69255159,
    "asmText": "movprfx z23, z31",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 6,
    "word": 69255159,
    "asmText": "movprfx z23, z31",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 12,
    "word": 69255159,
    "asmText": "movprfx z23, z31",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 18,
    "word": 69255159,
    "asmText": "movprfx z23, z31",
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
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 1,
    "word": 1149816247,
    "asmText": "udot z23.s, z13.h, z0.h[1]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 2,
    "word": 1149291520,
    "asmText": "udot z0.s, z0.h, z0.h[0]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 3,
    "word": 1150668117,
    "asmText": "udot z21.s, z10.h, z5.h[2]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 4,
    "word": 1149816247,
    "asmText": "udot z23.s, z13.h, z0.h[1]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 5,
    "word": 1151324159,
    "asmText": "udot z31.s, z31.h, z7.h[3]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 7,
    "word": 1141427639,
    "asmText": "udot z23.s, z13.h, z8.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 8,
    "word": 1140902912,
    "asmText": "udot z0.s, z0.h, z0.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 9,
    "word": 1142279509,
    "asmText": "udot z21.s, z10.h, z21.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 10,
    "word": 1141427639,
    "asmText": "udot z23.s, z13.h, z8.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 11,
    "word": 1142935551,
    "asmText": "udot z31.s, z31.h, z31.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 13,
    "word": 1149816247,
    "asmText": "udot z23.s, z13.h, z0.h[1]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 14,
    "word": 1149291520,
    "asmText": "udot z0.s, z0.h, z0.h[0]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 15,
    "word": 1150668117,
    "asmText": "udot z21.s, z10.h, z5.h[2]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 16,
    "word": 1149816247,
    "asmText": "udot z23.s, z13.h, z0.h[1]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 17,
    "word": 1151324159,
    "asmText": "udot z31.s, z31.h, z7.h[3]",
    "encodingFile": "udot_z32_zzzi.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 19,
    "word": 1141427639,
    "asmText": "udot z23.s, z13.h, z8.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 20,
    "word": 1140902912,
    "asmText": "udot z0.s, z0.h, z0.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 21,
    "word": 1142279509,
    "asmText": "udot z21.s, z10.h, z21.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 22,
    "word": 1141427639,
    "asmText": "udot z23.s, z13.h, z8.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/udot.s.yaml",
    "caseIndex": 23,
    "word": 1142935551,
    "asmText": "udot z31.s, z31.h, z31.h",
    "encodingFile": "udot_z32_zzz.xml",
    "mnemonic": "UDOT",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  }
];
