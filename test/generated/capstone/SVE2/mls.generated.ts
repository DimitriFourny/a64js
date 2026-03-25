export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/mls.s.yaml",
    "caseIndex": 3,
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
    "sourceFile": "SVE2/mls.s.yaml",
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
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/mls.s.yaml",
    "caseIndex": 0,
    "word": 1149176864,
    "asmText": "mls z0.h, z1.h, z7.h[7]",
    "encodingFile": "mls_z_zzzi.xml",
    "mnemonic": "MLS",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/mls.s.yaml",
    "caseIndex": 1,
    "word": 1153371168,
    "asmText": "mls z0.s, z1.s, z7.s[3]",
    "encodingFile": "mls_z_zzzi.xml",
    "mnemonic": "MLS",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/mls.s.yaml",
    "caseIndex": 2,
    "word": 1157041184,
    "asmText": "mls z0.d, z1.d, z7.d[1]",
    "encodingFile": "mls_z_zzzi.xml",
    "mnemonic": "MLS",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/mls.s.yaml",
    "caseIndex": 4,
    "word": 1157041184,
    "asmText": "mls z0.d, z1.d, z7.d[1]",
    "encodingFile": "mls_z_zzzi.xml",
    "mnemonic": "MLS",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/mls.s.yaml",
    "caseIndex": 5,
    "word": 1149176864,
    "asmText": "mls z0.h, z1.h, z7.h[7]",
    "encodingFile": "mls_z_zzzi.xml",
    "mnemonic": "MLS",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/mls.s.yaml",
    "caseIndex": 6,
    "word": 1153371168,
    "asmText": "mls z0.s, z1.s, z7.s[3]",
    "encodingFile": "mls_z_zzzi.xml",
    "mnemonic": "MLS",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/mls.s.yaml",
    "caseIndex": 7,
    "word": 1157041184,
    "asmText": "mls z0.d, z1.d, z7.d[1]",
    "encodingFile": "mls_z_zzzi.xml",
    "mnemonic": "MLS",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/mls.s.yaml",
    "caseIndex": 9,
    "word": 1157041184,
    "asmText": "mls z0.d, z1.d, z7.d[1]",
    "encodingFile": "mls_z_zzzi.xml",
    "mnemonic": "MLS",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
