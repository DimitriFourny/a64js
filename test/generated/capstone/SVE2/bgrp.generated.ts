export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/bgrp.s.yaml",
    "caseIndex": 0,
    "word": 1159706656,
    "asmText": "bgrp z0.b, z1.b, z31.b",
    "encodingFile": "bgrp_z_zz.xml",
    "mnemonic": "BGRP",
    "features": [
      "FEAT_SVE_BitPerm"
    ]
  },
  {
    "sourceFile": "SVE2/bgrp.s.yaml",
    "caseIndex": 1,
    "word": 1163900960,
    "asmText": "bgrp z0.h, z1.h, z31.h",
    "encodingFile": "bgrp_z_zz.xml",
    "mnemonic": "BGRP",
    "features": [
      "FEAT_SVE_BitPerm"
    ]
  },
  {
    "sourceFile": "SVE2/bgrp.s.yaml",
    "caseIndex": 2,
    "word": 1168095264,
    "asmText": "bgrp z0.s, z1.s, z31.s",
    "encodingFile": "bgrp_z_zz.xml",
    "mnemonic": "BGRP",
    "features": [
      "FEAT_SVE_BitPerm"
    ]
  },
  {
    "sourceFile": "SVE2/bgrp.s.yaml",
    "caseIndex": 3,
    "word": 1172289568,
    "asmText": "bgrp z0.d, z1.d, z31.d",
    "encodingFile": "bgrp_z_zz.xml",
    "mnemonic": "BGRP",
    "features": [
      "FEAT_SVE_BitPerm"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
