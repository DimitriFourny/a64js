export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/brkpas.s.yaml",
    "caseIndex": 0,
    "word": 625146912,
    "asmText": "brkpas p0.b, p15/z, p1.b, p2.b",
    "encodingFile": "brkpas_p_p_pp.xml",
    "mnemonic": "BRKPAS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/brkpas.s.yaml",
    "caseIndex": 1,
    "word": 625999343,
    "asmText": "brkpas p15.b, p15/z, p15.b, p15.b",
    "encodingFile": "brkpas_p_p_pp.xml",
    "mnemonic": "BRKPAS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/brkpas.s.yaml",
    "caseIndex": 2,
    "word": 625146912,
    "asmText": "brkpas p0.b, p15/z, p1.b, p2.b",
    "encodingFile": "brkpas_p_p_pp.xml",
    "mnemonic": "BRKPAS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/brkpas.s.yaml",
    "caseIndex": 3,
    "word": 625999343,
    "asmText": "brkpas p15.b, p15/z, p15.b, p15.b",
    "encodingFile": "brkpas_p_p_pp.xml",
    "mnemonic": "BRKPAS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
