export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 20,
    "word": 69254340,
    "asmText": "movprfx z4, z6",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 22,
    "word": 69255061,
    "asmText": "movprfx z21, z28",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 44,
    "word": 69254340,
    "asmText": "movprfx z4, z6",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 46,
    "word": 69255061,
    "asmText": "movprfx z21, z28",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 0,
    "word": 1140989984,
    "asmText": "cmla z0.b, z1.b, z2.b, #0",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 1,
    "word": 1145184288,
    "asmText": "cmla z0.h, z1.h, z2.h, #0",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 2,
    "word": 1149378592,
    "asmText": "cmla z0.s, z1.s, z2.s, #0",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 3,
    "word": 1153572896,
    "asmText": "cmla z0.d, z1.d, z2.d, #0",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 4,
    "word": 1142892509,
    "asmText": "cmla z29.b, z30.b, z31.b, #90",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 5,
    "word": 1147086813,
    "asmText": "cmla z29.h, z30.h, z31.h, #90",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 6,
    "word": 1151281117,
    "asmText": "cmla z29.s, z30.s, z31.s, #90",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 7,
    "word": 1155475421,
    "asmText": "cmla z29.d, z30.d, z31.d, #90",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 8,
    "word": 1142893567,
    "asmText": "cmla z31.b, z31.b, z31.b, #180",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 9,
    "word": 1147087871,
    "asmText": "cmla z31.h, z31.h, z31.h, #180",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 10,
    "word": 1151282175,
    "asmText": "cmla z31.s, z31.s, z31.s, #180",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 11,
    "word": 1155476479,
    "asmText": "cmla z31.d, z31.d, z31.d, #180",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 12,
    "word": 1141976591,
    "asmText": "cmla z15.b, z16.b, z17.b, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 13,
    "word": 1146170895,
    "asmText": "cmla z15.h, z16.h, z17.h, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 14,
    "word": 1150365199,
    "asmText": "cmla z15.s, z16.s, z17.s, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 15,
    "word": 1154559503,
    "asmText": "cmla z15.d, z16.d, z17.d, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 16,
    "word": 1151492128,
    "asmText": "cmla z0.h, z1.h, z2.h[0], #0",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 17,
    "word": 1155686432,
    "asmText": "cmla z0.s, z1.s, z2.s[0], #0",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 18,
    "word": 1151822815,
    "asmText": "cmla z31.h, z30.h, z7.h[0], #180",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 19,
    "word": 1156017119,
    "asmText": "cmla z31.s, z30.s, z7.s[0], #180",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 21,
    "word": 1155477476,
    "asmText": "cmla z4.d, z31.d, z31.d, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 23,
    "word": 1156932949,
    "asmText": "cmla z21.s, z10.s, z5.s[1], #90",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 24,
    "word": 1140989984,
    "asmText": "cmla z0.b, z1.b, z2.b, #0",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 25,
    "word": 1145184288,
    "asmText": "cmla z0.h, z1.h, z2.h, #0",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 26,
    "word": 1149378592,
    "asmText": "cmla z0.s, z1.s, z2.s, #0",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 27,
    "word": 1153572896,
    "asmText": "cmla z0.d, z1.d, z2.d, #0",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 28,
    "word": 1142892509,
    "asmText": "cmla z29.b, z30.b, z31.b, #90",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 29,
    "word": 1147086813,
    "asmText": "cmla z29.h, z30.h, z31.h, #90",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 30,
    "word": 1151281117,
    "asmText": "cmla z29.s, z30.s, z31.s, #90",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 31,
    "word": 1155475421,
    "asmText": "cmla z29.d, z30.d, z31.d, #90",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 32,
    "word": 1142893567,
    "asmText": "cmla z31.b, z31.b, z31.b, #180",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 33,
    "word": 1147087871,
    "asmText": "cmla z31.h, z31.h, z31.h, #180",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 34,
    "word": 1151282175,
    "asmText": "cmla z31.s, z31.s, z31.s, #180",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 35,
    "word": 1155476479,
    "asmText": "cmla z31.d, z31.d, z31.d, #180",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 36,
    "word": 1141976591,
    "asmText": "cmla z15.b, z16.b, z17.b, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 37,
    "word": 1146170895,
    "asmText": "cmla z15.h, z16.h, z17.h, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 38,
    "word": 1150365199,
    "asmText": "cmla z15.s, z16.s, z17.s, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 39,
    "word": 1154559503,
    "asmText": "cmla z15.d, z16.d, z17.d, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 40,
    "word": 1151492128,
    "asmText": "cmla z0.h, z1.h, z2.h[0], #0",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 41,
    "word": 1155686432,
    "asmText": "cmla z0.s, z1.s, z2.s[0], #0",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 42,
    "word": 1151822815,
    "asmText": "cmla z31.h, z30.h, z7.h[0], #180",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 43,
    "word": 1156017119,
    "asmText": "cmla z31.s, z30.s, z7.s[0], #180",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 45,
    "word": 1155477476,
    "asmText": "cmla z4.d, z31.d, z31.d, #270",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/cmla.s.yaml",
    "caseIndex": 47,
    "word": 1156932949,
    "asmText": "cmla z21.s, z10.s, z5.s[1], #90",
    "encodingFile": "cmla_z_zzzi.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
