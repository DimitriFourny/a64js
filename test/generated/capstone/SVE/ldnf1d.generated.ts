export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ldnf1d.s.yaml",
    "caseIndex": 0,
    "word": 2784010240,
    "asmText": "ldnf1d { z0.d }, p0/z, [x0]",
    "encodingFile": "ldnf1d_z_p_bi.xml",
    "mnemonic": "LDNF1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ldnf1d.s.yaml",
    "caseIndex": 1,
    "word": 2784010240,
    "asmText": "ldnf1d { z0.d }, p0/z, [x0]",
    "encodingFile": "ldnf1d_z_p_bi.xml",
    "mnemonic": "LDNF1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ldnf1d.s.yaml",
    "caseIndex": 2,
    "word": 2785001471,
    "asmText": "ldnf1d { z31.d }, p7/z, [sp, #-1, mul vl]",
    "encodingFile": "ldnf1d_z_p_bi.xml",
    "mnemonic": "LDNF1D",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ldnf1d.s.yaml",
    "caseIndex": 3,
    "word": 2784343381,
    "asmText": "ldnf1d { z21.d }, p5/z, [x10, #5, mul vl]",
    "encodingFile": "ldnf1d_z_p_bi.xml",
    "mnemonic": "LDNF1D",
    "features": [
      "FEAT_SVE"
    ]
  }
];
