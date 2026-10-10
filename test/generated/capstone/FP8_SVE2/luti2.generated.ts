// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8_SVE2/luti2.s.yaml",
    "caseIndex": 0,
    "word": 1159770112,
    "asmText": "luti2 z0.b, { z0.b }, z0[0]",
    "encodingFile": "luti2_z_zz.xml",
    "mnemonic": "LUTI2",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_LUT",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_LUT"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/luti2.s.yaml",
    "caseIndex": 1,
    "word": 1165341013,
    "asmText": "luti2 z21.b, { z10.b }, z21[1]",
    "encodingFile": "luti2_z_zz.xml",
    "mnemonic": "LUTI2",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_LUT",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_LUT"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/luti2.s.yaml",
    "caseIndex": 2,
    "word": 1174385663,
    "asmText": "luti2 z31.b, { z31.b }, z31[3]",
    "encodingFile": "luti2_z_zz.xml",
    "mnemonic": "LUTI2",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_LUT",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_LUT"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/luti2.s.yaml",
    "caseIndex": 3,
    "word": 1159768064,
    "asmText": "luti2 z0.h, { z0.h }, z0[0]",
    "encodingFile": "luti2_z_zz.xml",
    "mnemonic": "LUTI2",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_LUT",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_LUT"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/luti2.s.yaml",
    "caseIndex": 4,
    "word": 1165343061,
    "asmText": "luti2 z21.h, { z10.h }, z21[3]",
    "encodingFile": "luti2_z_zz.xml",
    "mnemonic": "LUTI2",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_LUT",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_LUT"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/luti2.s.yaml",
    "caseIndex": 5,
    "word": 1174387711,
    "asmText": "luti2 z31.h, { z31.h }, z31[7]",
    "encodingFile": "luti2_z_zz.xml",
    "mnemonic": "LUTI2",
    "features": [
      "(FEAT_SVE2 || FEAT_SME2) && FEAT_LUT",
      "FEAT_SVE2",
      "FEAT_SME2",
      "FEAT_LUT"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
