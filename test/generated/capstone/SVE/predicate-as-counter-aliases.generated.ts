export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 0,
    "word": 2239758336,
    "asmText": "ldr p0, [x0]",
    "encodingFile": "ldr_p_bi.xml",
    "mnemonic": "LDR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 1,
    "word": 2241797445,
    "asmText": "ldr p5, [x10, #255, mul vl]",
    "encodingFile": "ldr_p_bi.xml",
    "mnemonic": "LDR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 2,
    "word": 3850371072,
    "asmText": "str p0, [x0]",
    "encodingFile": "str_p_bi.xml",
    "mnemonic": "STR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 3,
    "word": 3852410181,
    "asmText": "str p5, [x10, #255, mul vl]",
    "encodingFile": "str_p_bi.xml",
    "mnemonic": "STR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 4,
    "word": 629161984,
    "asmText": "mov p0.b, p0.b",
    "encodingFile": "mov_orr_p_p_pp.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 5,
    "word": 622388239,
    "asmText": "pfalse p15.b",
    "encodingFile": "pfalse_p.xml",
    "mnemonic": "PFALSE",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 6,
    "word": 2239758336,
    "asmText": "ldr p0, [x0]",
    "encodingFile": "ldr_p_bi.xml",
    "mnemonic": "LDR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 7,
    "word": 2241797445,
    "asmText": "ldr p5, [x10, #255, mul vl]",
    "encodingFile": "ldr_p_bi.xml",
    "mnemonic": "LDR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 8,
    "word": 3850371072,
    "asmText": "str p0, [x0]",
    "encodingFile": "str_p_bi.xml",
    "mnemonic": "STR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 9,
    "word": 3852410181,
    "asmText": "str p5, [x10, #255, mul vl]",
    "encodingFile": "str_p_bi.xml",
    "mnemonic": "STR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 10,
    "word": 629161984,
    "asmText": "mov p0.b, p0.b",
    "encodingFile": "mov_orr_p_p_pp.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/predicate-as-counter-aliases.s.yaml",
    "caseIndex": 11,
    "word": 622388239,
    "asmText": "pfalse p15.b",
    "encodingFile": "pfalse_p.xml",
    "mnemonic": "PFALSE",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
