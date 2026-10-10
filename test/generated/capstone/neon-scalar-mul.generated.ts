// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 0,
    "word": 1584182634,
    "asmText": "sqdmulh h10, h11, h12",
    "encodingFile": "sqdmulh_advsimd_vec.xml",
    "mnemonic": "SQDMULH",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 1,
    "word": 1587721908,
    "asmText": "sqdmulh s20, s21, s2",
    "encodingFile": "sqdmulh_advsimd_vec.xml",
    "mnemonic": "SQDMULH",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 2,
    "word": 2121053546,
    "asmText": "sqrdmulh h10, h11, h12",
    "encodingFile": "sqrdmulh_advsimd_vec.xml",
    "mnemonic": "SQRDMULH",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 3,
    "word": 2124592820,
    "asmText": "sqrdmulh s20, s21, s2",
    "encodingFile": "sqrdmulh_advsimd_vec.xml",
    "mnemonic": "SQRDMULH",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 4,
    "word": 1582243540,
    "asmText": "fmulx h20, h22, h15",
    "encodingFile": "fmulx_advsimd_vec.xml",
    "mnemonic": "FMULX",
    "features": [
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 5,
    "word": 1580195540,
    "asmText": "fmulx s20, s22, s15",
    "encodingFile": "fmulx_advsimd_vec.xml",
    "mnemonic": "FMULX",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 6,
    "word": 1583471991,
    "asmText": "fmulx d23, d11, d1",
    "encodingFile": "fmulx_advsimd_vec.xml",
    "mnemonic": "FMULX",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 7,
    "word": 1584173937,
    "asmText": "sqdmlal s17, h27, h12",
    "encodingFile": "sqdmlal_advsimd_vec.xml",
    "mnemonic": "SQDMLAL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 8,
    "word": 1588368147,
    "asmText": "sqdmlal d19, s24, s12",
    "encodingFile": "sqdmlal_advsimd_vec.xml",
    "mnemonic": "SQDMLAL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 9,
    "word": 1585033614,
    "asmText": "sqdmlsl s14, h12, h25",
    "encodingFile": "sqdmlsl_advsimd_vec.xml",
    "mnemonic": "SQDMLSL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 10,
    "word": 1588441836,
    "asmText": "sqdmlsl d12, s23, s13",
    "encodingFile": "sqdmlsl_advsimd_vec.xml",
    "mnemonic": "SQDMLSL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 11,
    "word": 1584190156,
    "asmText": "sqdmull s12, h22, h12",
    "encodingFile": "sqdmull_advsimd_vec.xml",
    "mnemonic": "SQDMULL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-mul.s.yaml",
    "caseIndex": 12,
    "word": 1588384463,
    "asmText": "sqdmull d15, s22, s12",
    "encodingFile": "sqdmull_advsimd_vec.xml",
    "mnemonic": "SQDMULL",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
