export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 0,
    "word": 2130087604,
    "asmText": "cmeq d20, d21, d22",
    "encodingFile": "cmeq_advsimd_reg.xml",
    "mnemonic": "CMEQ",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 1,
    "word": 1591777972,
    "asmText": "cmeq d20, d21, #0",
    "encodingFile": "cmeq_advsimd_zero.xml",
    "mnemonic": "CMEQ",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 2,
    "word": 2130067124,
    "asmText": "cmhs d20, d21, d22",
    "encodingFile": "cmhs_advsimd.xml",
    "mnemonic": "CMHS",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 3,
    "word": 1593196212,
    "asmText": "cmge d20, d21, d22",
    "encodingFile": "cmge_advsimd_reg.xml",
    "mnemonic": "CMGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 4,
    "word": 2128644788,
    "asmText": "cmge d20, d21, #0",
    "encodingFile": "cmge_advsimd_zero.xml",
    "mnemonic": "CMGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 5,
    "word": 2130065076,
    "asmText": "cmhi d20, d21, d22",
    "encodingFile": "cmhi_advsimd.xml",
    "mnemonic": "CMHI",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 6,
    "word": 1593194164,
    "asmText": "cmgt d20, d21, d22",
    "encodingFile": "cmgt_advsimd_reg.xml",
    "mnemonic": "CMGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 7,
    "word": 1591773876,
    "asmText": "cmgt d20, d21, #0",
    "encodingFile": "cmgt_advsimd_zero.xml",
    "mnemonic": "CMGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 8,
    "word": 2128648884,
    "asmText": "cmle d20, d21, #0",
    "encodingFile": "cmle_advsimd.xml",
    "mnemonic": "CMLE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 9,
    "word": 1591782068,
    "asmText": "cmlt d20, d21, #0",
    "encodingFile": "cmlt_advsimd.xml",
    "mnemonic": "CMLT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-compare.s.yaml",
    "caseIndex": 10,
    "word": 1593216692,
    "asmText": "cmtst d20, d21, d22",
    "encodingFile": "cmtst_advsimd.xml",
    "mnemonic": "CMTST",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];
