export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/movs.s.yaml",
    "caseIndex": 0,
    "word": 633356288,
    "asmText": "movs p0.b, p0.b",
    "encodingFile": "movs_orrs_p_p_pp.xml",
    "mnemonic": "ORRS",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/movs.s.yaml",
    "caseIndex": 1,
    "word": 634355183,
    "asmText": "movs p15.b, p15.b",
    "encodingFile": "movs_orrs_p_p_pp.xml",
    "mnemonic": "ORRS",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/movs.s.yaml",
    "caseIndex": 2,
    "word": 624967680,
    "asmText": "movs p0.b, p0/z, p0.b",
    "encodingFile": "ands_p_p_pp.xml",
    "mnemonic": "ANDS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/movs.s.yaml",
    "caseIndex": 3,
    "word": 625966575,
    "asmText": "movs p15.b, p15/z, p15.b",
    "encodingFile": "ands_p_p_pp.xml",
    "mnemonic": "ANDS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/movs.s.yaml",
    "caseIndex": 4,
    "word": 633356288,
    "asmText": "movs p0.b, p0.b",
    "encodingFile": "movs_orrs_p_p_pp.xml",
    "mnemonic": "ORRS",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/movs.s.yaml",
    "caseIndex": 5,
    "word": 634355183,
    "asmText": "movs p15.b, p15.b",
    "encodingFile": "movs_orrs_p_p_pp.xml",
    "mnemonic": "ORRS",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/movs.s.yaml",
    "caseIndex": 6,
    "word": 624967680,
    "asmText": "movs p0.b, p0/z, p0.b",
    "encodingFile": "ands_p_p_pp.xml",
    "mnemonic": "ANDS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/movs.s.yaml",
    "caseIndex": 7,
    "word": 625966575,
    "asmText": "movs p15.b, p15/z, p15.b",
    "encodingFile": "ands_p_p_pp.xml",
    "mnemonic": "ANDS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
