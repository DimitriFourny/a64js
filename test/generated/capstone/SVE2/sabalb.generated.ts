export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 3,
    "word": 69255061,
    "asmText": "movprfx z21, z28",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 8,
    "word": 69255061,
    "asmText": "movprfx z21, z28",
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
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 0,
    "word": 1163903008,
    "asmText": "sabalb z0.h, z1.b, z31.b",
    "encodingFile": "sabalb_z_zzz.xml",
    "mnemonic": "SABALB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 1,
    "word": 1168097312,
    "asmText": "sabalb z0.s, z1.h, z31.h",
    "encodingFile": "sabalb_z_zzz.xml",
    "mnemonic": "SABALB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 2,
    "word": 1172291616,
    "asmText": "sabalb z0.d, z1.s, z31.s",
    "encodingFile": "sabalb_z_zzz.xml",
    "mnemonic": "SABALB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 4,
    "word": 1172291637,
    "asmText": "sabalb z21.d, z1.s, z31.s",
    "encodingFile": "sabalb_z_zzz.xml",
    "mnemonic": "SABALB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 5,
    "word": 1163903008,
    "asmText": "sabalb z0.h, z1.b, z31.b",
    "encodingFile": "sabalb_z_zzz.xml",
    "mnemonic": "SABALB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 6,
    "word": 1168097312,
    "asmText": "sabalb z0.s, z1.h, z31.h",
    "encodingFile": "sabalb_z_zzz.xml",
    "mnemonic": "SABALB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 7,
    "word": 1172291616,
    "asmText": "sabalb z0.d, z1.s, z31.s",
    "encodingFile": "sabalb_z_zzz.xml",
    "mnemonic": "SABALB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/sabalb.s.yaml",
    "caseIndex": 9,
    "word": 1172291637,
    "asmText": "sabalb z21.d, z1.s, z31.s",
    "encodingFile": "sabalb_z_zzz.xml",
    "mnemonic": "SABALB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
