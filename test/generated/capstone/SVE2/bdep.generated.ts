export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/bdep.s.yaml",
    "caseIndex": 0,
    "word": 1159705632,
    "asmText": "bdep z0.b, z1.b, z31.b",
    "encodingFile": "bdep_z_zz.xml",
    "mnemonic": "BDEP",
    "features": [
      "FEAT_SVE_BitPerm"
    ]
  },
  {
    "sourceFile": "SVE2/bdep.s.yaml",
    "caseIndex": 1,
    "word": 1163899936,
    "asmText": "bdep z0.h, z1.h, z31.h",
    "encodingFile": "bdep_z_zz.xml",
    "mnemonic": "BDEP",
    "features": [
      "FEAT_SVE_BitPerm"
    ]
  },
  {
    "sourceFile": "SVE2/bdep.s.yaml",
    "caseIndex": 2,
    "word": 1168094240,
    "asmText": "bdep z0.s, z1.s, z31.s",
    "encodingFile": "bdep_z_zz.xml",
    "mnemonic": "BDEP",
    "features": [
      "FEAT_SVE_BitPerm"
    ]
  },
  {
    "sourceFile": "SVE2/bdep.s.yaml",
    "caseIndex": 3,
    "word": 1172288544,
    "asmText": "bdep z0.d, z1.d, z31.d",
    "encodingFile": "bdep_z_zz.xml",
    "mnemonic": "BDEP",
    "features": [
      "FEAT_SVE_BitPerm"
    ]
  }
];
