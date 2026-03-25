export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 0,
    "word": 1582048618,
    "asmText": "fcmeq h10, h11, h12",
    "encodingFile": "fcmeq_advsimd_reg.xml",
    "mnemonic": "FCMEQ",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 1,
    "word": 1580000618,
    "asmText": "fcmeq s10, s11, s12",
    "encodingFile": "fcmeq_advsimd_reg.xml",
    "mnemonic": "FCMEQ",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 2,
    "word": 1584850612,
    "asmText": "fcmeq d20, d21, d22",
    "encodingFile": "fcmeq_advsimd_reg.xml",
    "mnemonic": "FCMEQ",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 3,
    "word": 1593366890,
    "asmText": "fcmeq h10, h11, #0.0",
    "encodingFile": "fcmeq_advsimd_zero.xml",
    "mnemonic": "FCMEQ",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 4,
    "word": 1587599722,
    "asmText": "fcmeq s10, s11, #0.0",
    "encodingFile": "fcmeq_advsimd_zero.xml",
    "mnemonic": "FCMEQ",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 5,
    "word": 1591794356,
    "asmText": "fcmeq d20, d21, #0.0",
    "encodingFile": "fcmeq_advsimd_zero.xml",
    "mnemonic": "FCMEQ",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 6,
    "word": 1593366890,
    "asmText": "fcmeq h10, h11, #0.0",
    "encodingFile": "fcmeq_advsimd_zero.xml",
    "mnemonic": "FCMEQ",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 7,
    "word": 1587599722,
    "asmText": "fcmeq s10, s11, #0.0",
    "encodingFile": "fcmeq_advsimd_zero.xml",
    "mnemonic": "FCMEQ",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 8,
    "word": 1591794356,
    "asmText": "fcmeq d20, d21, #0.0",
    "encodingFile": "fcmeq_advsimd_zero.xml",
    "mnemonic": "FCMEQ",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 9,
    "word": 2118919530,
    "asmText": "fcmge h10, h11, h12",
    "encodingFile": "fcmge_advsimd_reg.xml",
    "mnemonic": "FCMGE",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 10,
    "word": 2116871530,
    "asmText": "fcmge s10, s11, s12",
    "encodingFile": "fcmge_advsimd_reg.xml",
    "mnemonic": "FCMGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 11,
    "word": 2121721524,
    "asmText": "fcmge d20, d21, d22",
    "encodingFile": "fcmge_advsimd_reg.xml",
    "mnemonic": "FCMGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 12,
    "word": 2130233706,
    "asmText": "fcmge h10, h11, #0.0",
    "encodingFile": "fcmge_advsimd_zero.xml",
    "mnemonic": "FCMGE",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 13,
    "word": 2124466538,
    "asmText": "fcmge s10, s11, #0.0",
    "encodingFile": "fcmge_advsimd_zero.xml",
    "mnemonic": "FCMGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 14,
    "word": 2128661172,
    "asmText": "fcmge d20, d21, #0.0",
    "encodingFile": "fcmge_advsimd_zero.xml",
    "mnemonic": "FCMGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 15,
    "word": 2130233706,
    "asmText": "fcmge h10, h11, #0.0",
    "encodingFile": "fcmge_advsimd_zero.xml",
    "mnemonic": "FCMGE",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 16,
    "word": 2124466538,
    "asmText": "fcmge s10, s11, #0.0",
    "encodingFile": "fcmge_advsimd_zero.xml",
    "mnemonic": "FCMGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 17,
    "word": 2128661172,
    "asmText": "fcmge d20, d21, #0.0",
    "encodingFile": "fcmge_advsimd_zero.xml",
    "mnemonic": "FCMGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 18,
    "word": 2127308138,
    "asmText": "fcmgt h10, h11, h12",
    "encodingFile": "fcmgt_advsimd_reg.xml",
    "mnemonic": "FCMGT",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 19,
    "word": 2125260138,
    "asmText": "fcmgt s10, s11, s12",
    "encodingFile": "fcmgt_advsimd_reg.xml",
    "mnemonic": "FCMGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 20,
    "word": 2130110132,
    "asmText": "fcmgt d20, d21, d22",
    "encodingFile": "fcmgt_advsimd_reg.xml",
    "mnemonic": "FCMGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 21,
    "word": 1593362794,
    "asmText": "fcmgt h10, h11, #0.0",
    "encodingFile": "fcmgt_advsimd_zero.xml",
    "mnemonic": "FCMGT",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 22,
    "word": 1587595626,
    "asmText": "fcmgt s10, s11, #0.0",
    "encodingFile": "fcmgt_advsimd_zero.xml",
    "mnemonic": "FCMGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 23,
    "word": 1591790260,
    "asmText": "fcmgt d20, d21, #0.0",
    "encodingFile": "fcmgt_advsimd_zero.xml",
    "mnemonic": "FCMGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 24,
    "word": 1593362794,
    "asmText": "fcmgt h10, h11, #0.0",
    "encodingFile": "fcmgt_advsimd_zero.xml",
    "mnemonic": "FCMGT",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 25,
    "word": 1587595626,
    "asmText": "fcmgt s10, s11, #0.0",
    "encodingFile": "fcmgt_advsimd_zero.xml",
    "mnemonic": "FCMGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 26,
    "word": 1591790260,
    "asmText": "fcmgt d20, d21, #0.0",
    "encodingFile": "fcmgt_advsimd_zero.xml",
    "mnemonic": "FCMGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 27,
    "word": 2130237802,
    "asmText": "fcmle h10, h11, #0.0",
    "encodingFile": "fcmle_advsimd.xml",
    "mnemonic": "FCMLE",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 28,
    "word": 2124470634,
    "asmText": "fcmle s10, s11, #0.0",
    "encodingFile": "fcmle_advsimd.xml",
    "mnemonic": "FCMLE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 29,
    "word": 2128665268,
    "asmText": "fcmle d20, d21, #0.0",
    "encodingFile": "fcmle_advsimd.xml",
    "mnemonic": "FCMLE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 30,
    "word": 2130237802,
    "asmText": "fcmle h10, h11, #0.0",
    "encodingFile": "fcmle_advsimd.xml",
    "mnemonic": "FCMLE",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 31,
    "word": 2124470634,
    "asmText": "fcmle s10, s11, #0.0",
    "encodingFile": "fcmle_advsimd.xml",
    "mnemonic": "FCMLE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 32,
    "word": 2128665268,
    "asmText": "fcmle d20, d21, #0.0",
    "encodingFile": "fcmle_advsimd.xml",
    "mnemonic": "FCMLE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 33,
    "word": 1593370986,
    "asmText": "fcmlt h10, h11, #0.0",
    "encodingFile": "fcmlt_advsimd.xml",
    "mnemonic": "FCMLT",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 34,
    "word": 1587603818,
    "asmText": "fcmlt s10, s11, #0.0",
    "encodingFile": "fcmlt_advsimd.xml",
    "mnemonic": "FCMLT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 35,
    "word": 1591798452,
    "asmText": "fcmlt d20, d21, #0.0",
    "encodingFile": "fcmlt_advsimd.xml",
    "mnemonic": "FCMLT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 36,
    "word": 1593370986,
    "asmText": "fcmlt h10, h11, #0.0",
    "encodingFile": "fcmlt_advsimd.xml",
    "mnemonic": "FCMLT",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 37,
    "word": 1587603818,
    "asmText": "fcmlt s10, s11, #0.0",
    "encodingFile": "fcmlt_advsimd.xml",
    "mnemonic": "FCMLT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 38,
    "word": 1591798452,
    "asmText": "fcmlt d20, d21, #0.0",
    "encodingFile": "fcmlt_advsimd.xml",
    "mnemonic": "FCMLT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 39,
    "word": 2118921578,
    "asmText": "facge h10, h11, h12",
    "encodingFile": "facge_advsimd.xml",
    "mnemonic": "FACGE",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 40,
    "word": 2116873578,
    "asmText": "facge s10, s11, s12",
    "encodingFile": "facge_advsimd.xml",
    "mnemonic": "FACGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 41,
    "word": 2121723572,
    "asmText": "facge d20, d21, d22",
    "encodingFile": "facge_advsimd.xml",
    "mnemonic": "FACGE",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 42,
    "word": 2127310186,
    "asmText": "facgt h10, h11, h12",
    "encodingFile": "facgt_advsimd.xml",
    "mnemonic": "FACGT",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 43,
    "word": 2125262186,
    "asmText": "facgt s10, s11, s12",
    "encodingFile": "facgt_advsimd.xml",
    "mnemonic": "FACGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-scalar-fp-compare.s.yaml",
    "caseIndex": 44,
    "word": 2130112180,
    "asmText": "facgt d20, d21, d22",
    "encodingFile": "facgt_advsimd.xml",
    "mnemonic": "FACGT",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];
