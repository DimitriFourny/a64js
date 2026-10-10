// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/armv9.5a-cpa.s.yaml",
    "caseIndex": 0,
    "word": 82315703,
    "asmText": "addpt z23.d, z13.d, z8.d",
    "encodingFile": "addpt_z_zz.xml",
    "mnemonic": "ADDPT",
    "features": [
      "FEAT_SVE",
      "FEAT_CPA"
    ]
  },
  {
    "sourceFile": "SVE/armv9.5a-cpa.s.yaml",
    "caseIndex": 1,
    "word": 79957431,
    "asmText": "addpt z23.d, p3/m, z23.d, z13.d",
    "encodingFile": "addpt_z_p_zz.xml",
    "mnemonic": "ADDPT",
    "features": [
      "FEAT_SVE",
      "FEAT_CPA"
    ]
  },
  {
    "sourceFile": "SVE/armv9.5a-cpa.s.yaml",
    "caseIndex": 2,
    "word": 82316727,
    "asmText": "subpt z23.d, z13.d, z8.d",
    "encodingFile": "subpt_z_zz.xml",
    "mnemonic": "SUBPT",
    "features": [
      "FEAT_SVE",
      "FEAT_CPA"
    ]
  },
  {
    "sourceFile": "SVE/armv9.5a-cpa.s.yaml",
    "caseIndex": 3,
    "word": 80022967,
    "asmText": "subpt z23.d, p3/m, z23.d, z13.d",
    "encodingFile": "subpt_z_p_zz.xml",
    "mnemonic": "SUBPT",
    "features": [
      "FEAT_SVE",
      "FEAT_CPA"
    ]
  },
  {
    "sourceFile": "SVE/armv9.5a-cpa.s.yaml",
    "caseIndex": 4,
    "word": 1153555424,
    "asmText": "madpt z0.d, z1.d, z31.d",
    "encodingFile": "madpt_z_zzz.xml",
    "mnemonic": "MADPT",
    "features": [
      "FEAT_SVE",
      "FEAT_CPA"
    ]
  },
  {
    "sourceFile": "SVE/armv9.5a-cpa.s.yaml",
    "caseIndex": 5,
    "word": 1155518496,
    "asmText": "mlapt z0.d, z1.d, z31.d",
    "encodingFile": "mlapt_z_zzz.xml",
    "mnemonic": "MLAPT",
    "features": [
      "FEAT_SVE",
      "FEAT_CPA"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
