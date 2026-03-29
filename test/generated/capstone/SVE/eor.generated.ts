export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 0,
    "word": 88092325,
    "asmText": "eor z5.b, z5.b, #0xf9",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 1,
    "word": 88108471,
    "asmText": "eor z23.h, z23.h, #0xfff9",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 2,
    "word": 88140704,
    "asmText": "eor z0.s, z0.s, #0xfffffff9",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 3,
    "word": 88338336,
    "asmText": "eor z0.d, z0.d, #0xfffffffffffffff9",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 4,
    "word": 88096293,
    "asmText": "eor z5.b, z5.b, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 5,
    "word": 88112183,
    "asmText": "eor z23.h, z23.h, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 6,
    "word": 88143904,
    "asmText": "eor z0.s, z0.s, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 7,
    "word": 88340512,
    "asmText": "eor z0.d, z0.d, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 8,
    "word": 78131639,
    "asmText": "eor z23.d, z13.d, z8.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 9,
    "word": 77606912,
    "asmText": "eor z0.d, z0.d, z0.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 10,
    "word": 77144063,
    "asmText": "eor z31.s, p7/m, z31.s, z31.s",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 11,
    "word": 72949759,
    "asmText": "eor z31.h, p7/m, z31.h, z31.h",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 12,
    "word": 81338367,
    "asmText": "eor z31.d, p7/m, z31.d, z31.d",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 13,
    "word": 68755455,
    "asmText": "eor z31.b, p7/m, z31.b, z31.b",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 14,
    "word": 620839424,
    "asmText": "eor p0.b, p0/z, p0.b, p1.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 15,
    "word": 620773888,
    "asmText": "not p0.b, p0/z, p0.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 16,
    "word": 621772783,
    "asmText": "not p15.b, p15/z, p15.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 17,
    "word": 77606912,
    "asmText": "eor z0.d, z0.d, z0.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 18,
    "word": 77606912,
    "asmText": "eor z0.d, z0.d, z0.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 19,
    "word": 77606912,
    "asmText": "eor z0.d, z0.d, z0.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 20,
    "word": 68172996,
    "asmText": "movprfx z4.b, p7/z, z6.b",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 21,
    "word": 68755428,
    "asmText": "eor z4.b, p7/m, z4.b, z31.b",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 22,
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
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 23,
    "word": 68755428,
    "asmText": "eor z4.b, p7/m, z4.b, z31.b",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 24,
    "word": 69254368,
    "asmText": "movprfx z0, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 25,
    "word": 88340512,
    "asmText": "eor z0.d, z0.d, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 26,
    "word": 88092325,
    "asmText": "eor z5.b, z5.b, #0xf9",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 27,
    "word": 88108471,
    "asmText": "eor z23.h, z23.h, #0xfff9",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 28,
    "word": 88140704,
    "asmText": "eor z0.s, z0.s, #0xfffffff9",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 29,
    "word": 88338336,
    "asmText": "eor z0.d, z0.d, #0xfffffffffffffff9",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 30,
    "word": 88096293,
    "asmText": "eor z5.b, z5.b, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 31,
    "word": 88112183,
    "asmText": "eor z23.h, z23.h, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 32,
    "word": 88143904,
    "asmText": "eor z0.s, z0.s, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 33,
    "word": 88340512,
    "asmText": "eor z0.d, z0.d, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 34,
    "word": 78131639,
    "asmText": "eor z23.d, z13.d, z8.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 35,
    "word": 77606912,
    "asmText": "eor z0.d, z0.d, z0.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 36,
    "word": 77144063,
    "asmText": "eor z31.s, p7/m, z31.s, z31.s",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 37,
    "word": 72949759,
    "asmText": "eor z31.h, p7/m, z31.h, z31.h",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 38,
    "word": 81338367,
    "asmText": "eor z31.d, p7/m, z31.d, z31.d",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 39,
    "word": 68755455,
    "asmText": "eor z31.b, p7/m, z31.b, z31.b",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 40,
    "word": 620839424,
    "asmText": "eor p0.b, p0/z, p0.b, p1.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 41,
    "word": 620773888,
    "asmText": "not p0.b, p0/z, p0.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 42,
    "word": 621772783,
    "asmText": "not p15.b, p15/z, p15.b",
    "encodingFile": "eor_p_p_pp.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 43,
    "word": 77606912,
    "asmText": "eor z0.d, z0.d, z0.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 44,
    "word": 77606912,
    "asmText": "eor z0.d, z0.d, z0.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 45,
    "word": 77606912,
    "asmText": "eor z0.d, z0.d, z0.d",
    "encodingFile": "eor_z_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 46,
    "word": 68172996,
    "asmText": "movprfx z4.b, p7/z, z6.b",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 47,
    "word": 68755428,
    "asmText": "eor z4.b, p7/m, z4.b, z31.b",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 48,
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
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 49,
    "word": 68755428,
    "asmText": "eor z4.b, p7/m, z4.b, z31.b",
    "encodingFile": "eor_z_p_zz.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 50,
    "word": 69254368,
    "asmText": "movprfx z0, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/eor.s.yaml",
    "caseIndex": 51,
    "word": 88340512,
    "asmText": "eor z0.d, z0.d, #0x6",
    "encodingFile": "eon_eor_z_zi.xml",
    "mnemonic": "EOR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
