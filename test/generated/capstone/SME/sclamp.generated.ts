export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 16,
    "word": 69255031,
    "asmText": "movprfx z23, z27",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 18,
    "word": 69255031,
    "asmText": "movprfx z23, z27",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 20,
    "word": 69255031,
    "asmText": "movprfx z23, z27",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 22,
    "word": 69255031,
    "asmText": "movprfx z23, z27",
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
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 0,
    "word": 1140899840,
    "asmText": "sclamp z0.b, z0.b, z0.b",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 1,
    "word": 1142276437,
    "asmText": "sclamp z21.b, z10.b, z21.b",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 2,
    "word": 1141424567,
    "asmText": "sclamp z23.b, z13.b, z8.b",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 3,
    "word": 1142932479,
    "asmText": "sclamp z31.b, z31.b, z31.b",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 4,
    "word": 1145094144,
    "asmText": "sclamp z0.h, z0.h, z0.h",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 5,
    "word": 1146470741,
    "asmText": "sclamp z21.h, z10.h, z21.h",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 6,
    "word": 1145618871,
    "asmText": "sclamp z23.h, z13.h, z8.h",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 7,
    "word": 1147126783,
    "asmText": "sclamp z31.h, z31.h, z31.h",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 8,
    "word": 1149288448,
    "asmText": "sclamp z0.s, z0.s, z0.s",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 9,
    "word": 1150665045,
    "asmText": "sclamp z21.s, z10.s, z21.s",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 10,
    "word": 1149813175,
    "asmText": "sclamp z23.s, z13.s, z8.s",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 11,
    "word": 1151321087,
    "asmText": "sclamp z31.s, z31.s, z31.s",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 12,
    "word": 1153482752,
    "asmText": "sclamp z0.d, z0.d, z0.d",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 13,
    "word": 1154859349,
    "asmText": "sclamp z21.d, z10.d, z21.d",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 14,
    "word": 1154007479,
    "asmText": "sclamp z23.d, z13.d, z8.d",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 15,
    "word": 1155515391,
    "asmText": "sclamp z31.d, z31.d, z31.d",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 17,
    "word": 1141424567,
    "asmText": "sclamp z23.b, z13.b, z8.b",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 19,
    "word": 1145618871,
    "asmText": "sclamp z23.h, z13.h, z8.h",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 21,
    "word": 1149813175,
    "asmText": "sclamp z23.s, z13.s, z8.s",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SME/sclamp.s.yaml",
    "caseIndex": 23,
    "word": 1154007479,
    "asmText": "sclamp z23.d, z13.d, z8.d",
    "encodingFile": "sclamp_z_zz.xml",
    "mnemonic": "SCLAMP",
    "features": [
      "FEAT_SME || FEAT_SVE2p1",
      "FEAT_SME",
      "FEAT_SVE2p1"
    ]
  }
];
