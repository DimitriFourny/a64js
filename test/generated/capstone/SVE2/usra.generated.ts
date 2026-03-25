export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 8,
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
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 18,
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
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 0,
    "word": 1158669312,
    "asmText": "usra z0.b, z0.b, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 1,
    "word": 1158211583,
    "asmText": "usra z31.b, z31.b, #8",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 2,
    "word": 1159717888,
    "asmText": "usra z0.h, z0.h, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 3,
    "word": 1158735871,
    "asmText": "usra z31.h, z31.h, #16",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 4,
    "word": 1163912192,
    "asmText": "usra z0.s, z0.s, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 5,
    "word": 1161881599,
    "asmText": "usra z31.s, z31.s, #32",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 6,
    "word": 1172300800,
    "asmText": "usra z0.d, z0.d, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 7,
    "word": 1166075903,
    "asmText": "usra z31.d, z31.d, #64",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 9,
    "word": 1172300832,
    "asmText": "usra z0.d, z1.d, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 10,
    "word": 1158669312,
    "asmText": "usra z0.b, z0.b, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 11,
    "word": 1158211583,
    "asmText": "usra z31.b, z31.b, #8",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 12,
    "word": 1159717888,
    "asmText": "usra z0.h, z0.h, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 13,
    "word": 1158735871,
    "asmText": "usra z31.h, z31.h, #16",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 14,
    "word": 1163912192,
    "asmText": "usra z0.s, z0.s, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 15,
    "word": 1161881599,
    "asmText": "usra z31.s, z31.s, #32",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 16,
    "word": 1172300800,
    "asmText": "usra z0.d, z0.d, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 17,
    "word": 1166075903,
    "asmText": "usra z31.d, z31.d, #64",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/usra.s.yaml",
    "caseIndex": 19,
    "word": 1172300832,
    "asmText": "usra z0.d, z1.d, #1",
    "encodingFile": "usra_z_zi.xml",
    "mnemonic": "USRA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
