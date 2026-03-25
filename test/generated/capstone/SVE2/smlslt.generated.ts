export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 5,
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
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 7,
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
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 14,
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
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 16,
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
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 0,
    "word": 1147098144,
    "asmText": "smlslt z0.h, z1.b, z31.b",
    "encodingFile": "smlslt_z_zzz.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 1,
    "word": 1151292448,
    "asmText": "smlslt z0.s, z1.h, z31.h",
    "encodingFile": "smlslt_z_zzz.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 2,
    "word": 1155486752,
    "asmText": "smlslt z0.d, z1.s, z31.s",
    "encodingFile": "smlslt_z_zzz.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 3,
    "word": 1153412128,
    "asmText": "smlslt z0.s, z1.h, z7.h[7]",
    "encodingFile": "smlslt_z_zzzi.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 4,
    "word": 1156557856,
    "asmText": "smlslt z0.d, z1.s, z15.s[1]",
    "encodingFile": "smlslt_z_zzzi.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 6,
    "word": 1155486773,
    "asmText": "smlslt z21.d, z1.s, z31.s",
    "encodingFile": "smlslt_z_zzz.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 8,
    "word": 1155902805,
    "asmText": "smlslt z21.d, z10.s, z5.s[1]",
    "encodingFile": "smlslt_z_zzzi.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 9,
    "word": 1147098144,
    "asmText": "smlslt z0.h, z1.b, z31.b",
    "encodingFile": "smlslt_z_zzz.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 10,
    "word": 1151292448,
    "asmText": "smlslt z0.s, z1.h, z31.h",
    "encodingFile": "smlslt_z_zzz.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 11,
    "word": 1155486752,
    "asmText": "smlslt z0.d, z1.s, z31.s",
    "encodingFile": "smlslt_z_zzz.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 12,
    "word": 1153412128,
    "asmText": "smlslt z0.s, z1.h, z7.h[7]",
    "encodingFile": "smlslt_z_zzzi.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 13,
    "word": 1156557856,
    "asmText": "smlslt z0.d, z1.s, z15.s[1]",
    "encodingFile": "smlslt_z_zzzi.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 15,
    "word": 1155486773,
    "asmText": "smlslt z21.d, z1.s, z31.s",
    "encodingFile": "smlslt_z_zzz.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/smlslt.s.yaml",
    "caseIndex": 17,
    "word": 1155902805,
    "asmText": "smlslt z21.d, z10.s, z5.s[1]",
    "encodingFile": "smlslt_z_zzzi.xml",
    "mnemonic": "SMLSLT",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
