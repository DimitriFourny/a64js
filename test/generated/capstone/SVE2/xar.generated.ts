export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 8,
    "word": 69254399,
    "asmText": "movprfx z31, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 18,
    "word": 69254399,
    "asmText": "movprfx z31, z7",
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
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 0,
    "word": 70202400,
    "asmText": "xar z0.b, z0.b, z1.b, #1",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 1,
    "word": 69744607,
    "asmText": "xar z31.b, z31.b, z30.b, #8",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 2,
    "word": 71250976,
    "asmText": "xar z0.h, z0.h, z1.h, #1",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 3,
    "word": 70268895,
    "asmText": "xar z31.h, z31.h, z30.h, #16",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 4,
    "word": 75445280,
    "asmText": "xar z0.s, z0.s, z1.s, #1",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 5,
    "word": 73414623,
    "asmText": "xar z31.s, z31.s, z30.s, #32",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 6,
    "word": 83833888,
    "asmText": "xar z0.d, z0.d, z1.d, #1",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 7,
    "word": 77608927,
    "asmText": "xar z31.d, z31.d, z30.d, #64",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 9,
    "word": 77608927,
    "asmText": "xar z31.d, z31.d, z30.d, #64",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 10,
    "word": 70202400,
    "asmText": "xar z0.b, z0.b, z1.b, #1",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 11,
    "word": 69744607,
    "asmText": "xar z31.b, z31.b, z30.b, #8",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 12,
    "word": 71250976,
    "asmText": "xar z0.h, z0.h, z1.h, #1",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 13,
    "word": 70268895,
    "asmText": "xar z31.h, z31.h, z30.h, #16",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 14,
    "word": 75445280,
    "asmText": "xar z0.s, z0.s, z1.s, #1",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 15,
    "word": 73414623,
    "asmText": "xar z31.s, z31.s, z30.s, #32",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 16,
    "word": 83833888,
    "asmText": "xar z0.d, z0.d, z1.d, #1",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 17,
    "word": 77608927,
    "asmText": "xar z31.d, z31.d, z30.d, #64",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/xar.s.yaml",
    "caseIndex": 19,
    "word": 77608927,
    "asmText": "xar z31.d, z31.d, z30.d, #64",
    "encodingFile": "xar_z_zzi.xml",
    "mnemonic": "XAR",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
