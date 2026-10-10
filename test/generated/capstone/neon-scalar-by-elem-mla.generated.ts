// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 0,
    "word": 1594955808,
    "asmText": "fmla h0, h1, v1.h[5]",
    "encodingFile": "fmla_advsimd_elt.xml",
    "mnemonic": "FMLA",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 1,
    "word": 1602293792,
    "asmText": "fmla s0, s1, v1.s[0]",
    "encodingFile": "fmla_advsimd_elt.xml",
    "mnemonic": "FMLA",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 2,
    "word": 1604391294,
    "asmText": "fmla s30, s11, v1.s[1]",
    "encodingFile": "fmla_advsimd_elt.xml",
    "mnemonic": "FMLA",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 3,
    "word": 1602689188,
    "asmText": "fmla s4, s5, v7.s[2]",
    "encodingFile": "fmla_advsimd_elt.xml",
    "mnemonic": "FMLA",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 4,
    "word": 1605376720,
    "asmText": "fmla s16, s22, v16.s[3]",
    "encodingFile": "fmla_advsimd_elt.xml",
    "mnemonic": "FMLA",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 5,
    "word": 1606488096,
    "asmText": "fmla d0, d1, v1.d[0]",
    "encodingFile": "fmla_advsimd_elt.xml",
    "mnemonic": "FMLA",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 6,
    "word": 1606490494,
    "asmText": "fmla d30, d11, v1.d[1]",
    "encodingFile": "fmla_advsimd_elt.xml",
    "mnemonic": "FMLA",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 7,
    "word": 1595168866,
    "asmText": "fmls h2, h3, v4.h[5]",
    "encodingFile": "fmls_advsimd_elt.xml",
    "mnemonic": "FMLS",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 8,
    "word": 1602506850,
    "asmText": "fmls s2, s3, v4.s[0]",
    "encodingFile": "fmls_advsimd_elt.xml",
    "mnemonic": "FMLS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 9,
    "word": 1606177117,
    "asmText": "fmls s29, s10, v28.s[1]",
    "encodingFile": "fmls_advsimd_elt.xml",
    "mnemonic": "FMLS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 10,
    "word": 1603754373,
    "asmText": "fmls s5, s12, v23.s[2]",
    "encodingFile": "fmls_advsimd_elt.xml",
    "mnemonic": "FMLS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 11,
    "word": 1606048295,
    "asmText": "fmls s7, s17, v26.s[3]",
    "encodingFile": "fmls_advsimd_elt.xml",
    "mnemonic": "FMLS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 12,
    "word": 1606504480,
    "asmText": "fmls d0, d1, v1.d[0]",
    "encodingFile": "fmls_advsimd_elt.xml",
    "mnemonic": "FMLS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-by-elem-mla.s.yaml",
    "caseIndex": 13,
    "word": 1606506878,
    "asmText": "fmls d30, d11, v1.d[1]",
    "encodingFile": "fmls_advsimd_elt.xml",
    "mnemonic": "FMLS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
