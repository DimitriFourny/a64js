// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/bfmmla.s.yaml",
    "caseIndex": 0,
    "word": 1684202528,
    "asmText": "bfmmla z0.s, z1.h, z2.h",
    "encodingFile": "bfmmla_z_zzz.xml",
    "mnemonic": "BFMMLA",
    "features": [
      "FEAT_SVE",
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "SVE/bfmmla.s.yaml",
    "caseIndex": 1,
    "word": 69254368,
    "asmText": "movprfx z0, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/bfmmla.s.yaml",
    "caseIndex": 2,
    "word": 1684202528,
    "asmText": "bfmmla z0.s, z1.h, z2.h",
    "encodingFile": "bfmmla_z_zzz.xml",
    "mnemonic": "BFMMLA",
    "features": [
      "FEAT_SVE",
      "FEAT_BF16"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
