export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SME/feature.s.yaml",
    "caseIndex": 0,
    "word": 86125600,
    "asmText": "tbx z0.b, z1.b, z2.b",
    "encodingFile": "tbx_z_zz.xml",
    "mnemonic": "TBX",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/feature.s.yaml",
    "caseIndex": 1,
    "word": 1684176928,
    "asmText": "bfdot z0.s, z1.h, z2.h",
    "encodingFile": "bfdot_z_zzz.xml",
    "mnemonic": "BFDOT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_BF16",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "SME/feature.s.yaml",
    "caseIndex": 2,
    "word": 86125600,
    "asmText": "tbx z0.b, z1.b, z2.b",
    "encodingFile": "tbx_z_zz.xml",
    "mnemonic": "TBX",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/feature.s.yaml",
    "caseIndex": 3,
    "word": 1684176928,
    "asmText": "bfdot z0.s, z1.h, z2.h",
    "encodingFile": "bfdot_z_zzz.xml",
    "mnemonic": "BFDOT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_BF16",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "SME/feature.s.yaml",
    "caseIndex": 4,
    "word": 86125600,
    "asmText": "tbx z0.b, z1.b, z2.b",
    "encodingFile": "tbx_z_zz.xml",
    "mnemonic": "TBX",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/feature.s.yaml",
    "caseIndex": 5,
    "word": 1684176928,
    "asmText": "bfdot z0.s, z1.h, z2.h",
    "encodingFile": "bfdot_z_zzz.xml",
    "mnemonic": "BFDOT",
    "features": [
      "(FEAT_SVE || FEAT_SME) && FEAT_BF16",
      "FEAT_SVE",
      "FEAT_SME",
      "FEAT_BF16"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
