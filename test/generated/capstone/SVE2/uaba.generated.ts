export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 4,
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
    "sourceFile": "SVE2/uaba.s.yaml",
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
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 0,
    "word": 1159724064,
    "asmText": "uaba z0.b, z1.b, z31.b",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 1,
    "word": 1163918368,
    "asmText": "uaba z0.h, z1.h, z31.h",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 2,
    "word": 1168112672,
    "asmText": "uaba z0.s, z1.s, z31.s",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 3,
    "word": 1172306976,
    "asmText": "uaba z0.d, z1.d, z31.d",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 5,
    "word": 1172306976,
    "asmText": "uaba z0.d, z1.d, z31.d",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 6,
    "word": 1159724064,
    "asmText": "uaba z0.b, z1.b, z31.b",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 7,
    "word": 1163918368,
    "asmText": "uaba z0.h, z1.h, z31.h",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 8,
    "word": 1168112672,
    "asmText": "uaba z0.s, z1.s, z31.s",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 9,
    "word": 1172306976,
    "asmText": "uaba z0.d, z1.d, z31.d",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uaba.s.yaml",
    "caseIndex": 11,
    "word": 1172306976,
    "asmText": "uaba z0.d, z1.d, z31.d",
    "encodingFile": "uaba_z_zzz.xml",
    "mnemonic": "UABA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
