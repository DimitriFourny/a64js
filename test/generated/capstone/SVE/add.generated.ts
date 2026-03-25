export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/add.s.yaml",
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
    "sourceFile": "SVE/add.s.yaml",
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
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 50,
    "word": 69254367,
    "asmText": "movprfx z31, z6",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 98,
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
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 100,
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
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 102,
    "word": 69254367,
    "asmText": "movprfx z31, z6",
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
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 0,
    "word": 79627263,
    "asmText": "add z31.s, z31.s, z31.s",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 1,
    "word": 82313655,
    "asmText": "add z23.d, z13.d, z8.d",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 2,
    "word": 67112375,
    "asmText": "add z23.b, p3/m, z23.b, z13.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 3,
    "word": 77594624,
    "asmText": "add z0.s, z0.s, z0.s",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 4,
    "word": 83821567,
    "asmText": "add z31.d, z31.d, z31.d",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 5,
    "word": 70582613,
    "asmText": "add z21.b, z10.b, z21.b",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 6,
    "word": 71238655,
    "asmText": "add z31.b, z31.b, z31.b",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 7,
    "word": 71303168,
    "asmText": "add z0.h, p0/m, z0.h, z0.h",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 8,
    "word": 73400320,
    "asmText": "add z0.h, z0.h, z0.h",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 9,
    "word": 67108864,
    "asmText": "add z0.b, p0/m, z0.b, z0.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 10,
    "word": 75497472,
    "asmText": "add z0.s, p0/m, z0.s, z0.s",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 11,
    "word": 69730743,
    "asmText": "add z23.b, z13.b, z8.b",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 12,
    "word": 81788928,
    "asmText": "add z0.d, z0.d, z0.d",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 13,
    "word": 79691776,
    "asmText": "add z0.d, p0/m, z0.d, z0.d",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 14,
    "word": 75432959,
    "asmText": "add z31.h, z31.h, z31.h",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 15,
    "word": 69206016,
    "asmText": "add z0.b, z0.b, z0.b",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 16,
    "word": 83165525,
    "asmText": "add z21.d, z10.d, z21.d",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 17,
    "word": 71306679,
    "asmText": "add z23.h, p3/m, z23.h, z13.h",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 18,
    "word": 75500983,
    "asmText": "add z23.s, p3/m, z23.s, z13.s",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 19,
    "word": 75505663,
    "asmText": "add z31.s, p7/m, z31.s, z31.s",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 20,
    "word": 74776917,
    "asmText": "add z21.h, z10.h, z21.h",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 21,
    "word": 79695287,
    "asmText": "add z23.d, p3/m, z23.d, z13.d",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 22,
    "word": 79697237,
    "asmText": "add z21.d, p5/m, z21.d, z10.d",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 23,
    "word": 67114325,
    "asmText": "add z21.b, p5/m, z21.b, z10.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 24,
    "word": 78971221,
    "asmText": "add z21.s, z10.s, z21.s",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 25,
    "word": 71308629,
    "asmText": "add z21.h, p5/m, z21.h, z10.h",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 26,
    "word": 71311359,
    "asmText": "add z31.h, p7/m, z31.h, z31.h",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 27,
    "word": 73925047,
    "asmText": "add z23.h, z13.h, z8.h",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 28,
    "word": 79699967,
    "asmText": "add z31.d, p7/m, z31.d, z31.d",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 29,
    "word": 75502933,
    "asmText": "add z21.s, p5/m, z21.s, z10.s",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 30,
    "word": 67117055,
    "asmText": "add z31.b, p7/m, z31.b, z31.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 31,
    "word": 78119351,
    "asmText": "add z23.s, z13.s, z8.s",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 32,
    "word": 622903296,
    "asmText": "add z0.b, z0.b, #0",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 33,
    "word": 622911487,
    "asmText": "add z31.b, z31.b, #255",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 34,
    "word": 627097600,
    "asmText": "add z0.h, z0.h, #0",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 35,
    "word": 627105792,
    "asmText": "add z0.h, z0.h, #0, lsl #8",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 36,
    "word": 627113983,
    "asmText": "add z31.h, z31.h, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 37,
    "word": 627113983,
    "asmText": "add z31.h, z31.h, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 38,
    "word": 631291904,
    "asmText": "add z0.s, z0.s, #0",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 39,
    "word": 631300096,
    "asmText": "add z0.s, z0.s, #0, lsl #8",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 40,
    "word": 631308287,
    "asmText": "add z31.s, z31.s, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 41,
    "word": 631308287,
    "asmText": "add z31.s, z31.s, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 42,
    "word": 635486208,
    "asmText": "add z0.d, z0.d, #0",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 43,
    "word": 635494400,
    "asmText": "add z0.d, z0.d, #0, lsl #8",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 44,
    "word": 635502591,
    "asmText": "add z31.d, z31.d, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 45,
    "word": 635502591,
    "asmText": "add z31.d, z31.d, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 47,
    "word": 67117028,
    "asmText": "add z4.b, p7/m, z4.b, z31.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 49,
    "word": 67117028,
    "asmText": "add z4.b, p7/m, z4.b, z31.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 51,
    "word": 635502591,
    "asmText": "add z31.d, z31.d, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 52,
    "word": 79627263,
    "asmText": "add z31.s, z31.s, z31.s",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 53,
    "word": 82313655,
    "asmText": "add z23.d, z13.d, z8.d",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 54,
    "word": 67112375,
    "asmText": "add z23.b, p3/m, z23.b, z13.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 55,
    "word": 77594624,
    "asmText": "add z0.s, z0.s, z0.s",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 56,
    "word": 83821567,
    "asmText": "add z31.d, z31.d, z31.d",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 57,
    "word": 70582613,
    "asmText": "add z21.b, z10.b, z21.b",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 58,
    "word": 71238655,
    "asmText": "add z31.b, z31.b, z31.b",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 59,
    "word": 71303168,
    "asmText": "add z0.h, p0/m, z0.h, z0.h",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 60,
    "word": 73400320,
    "asmText": "add z0.h, z0.h, z0.h",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 61,
    "word": 67108864,
    "asmText": "add z0.b, p0/m, z0.b, z0.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 62,
    "word": 75497472,
    "asmText": "add z0.s, p0/m, z0.s, z0.s",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 63,
    "word": 69730743,
    "asmText": "add z23.b, z13.b, z8.b",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 64,
    "word": 81788928,
    "asmText": "add z0.d, z0.d, z0.d",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 65,
    "word": 79691776,
    "asmText": "add z0.d, p0/m, z0.d, z0.d",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 66,
    "word": 75432959,
    "asmText": "add z31.h, z31.h, z31.h",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 67,
    "word": 69206016,
    "asmText": "add z0.b, z0.b, z0.b",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 68,
    "word": 83165525,
    "asmText": "add z21.d, z10.d, z21.d",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 69,
    "word": 71306679,
    "asmText": "add z23.h, p3/m, z23.h, z13.h",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 70,
    "word": 75500983,
    "asmText": "add z23.s, p3/m, z23.s, z13.s",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 71,
    "word": 75505663,
    "asmText": "add z31.s, p7/m, z31.s, z31.s",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 72,
    "word": 74776917,
    "asmText": "add z21.h, z10.h, z21.h",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 73,
    "word": 79695287,
    "asmText": "add z23.d, p3/m, z23.d, z13.d",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 74,
    "word": 79697237,
    "asmText": "add z21.d, p5/m, z21.d, z10.d",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 75,
    "word": 67114325,
    "asmText": "add z21.b, p5/m, z21.b, z10.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 76,
    "word": 78971221,
    "asmText": "add z21.s, z10.s, z21.s",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 77,
    "word": 71308629,
    "asmText": "add z21.h, p5/m, z21.h, z10.h",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 78,
    "word": 71311359,
    "asmText": "add z31.h, p7/m, z31.h, z31.h",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 79,
    "word": 73925047,
    "asmText": "add z23.h, z13.h, z8.h",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 80,
    "word": 79699967,
    "asmText": "add z31.d, p7/m, z31.d, z31.d",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 81,
    "word": 75502933,
    "asmText": "add z21.s, p5/m, z21.s, z10.s",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 82,
    "word": 67117055,
    "asmText": "add z31.b, p7/m, z31.b, z31.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 83,
    "word": 78119351,
    "asmText": "add z23.s, z13.s, z8.s",
    "encodingFile": "add_z_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 84,
    "word": 622903296,
    "asmText": "add z0.b, z0.b, #0",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 85,
    "word": 622911487,
    "asmText": "add z31.b, z31.b, #255",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 86,
    "word": 627097600,
    "asmText": "add z0.h, z0.h, #0",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 87,
    "word": 627105792,
    "asmText": "add z0.h, z0.h, #0, lsl #8",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 88,
    "word": 627113983,
    "asmText": "add z31.h, z31.h, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 89,
    "word": 627113983,
    "asmText": "add z31.h, z31.h, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 90,
    "word": 631291904,
    "asmText": "add z0.s, z0.s, #0",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 91,
    "word": 631300096,
    "asmText": "add z0.s, z0.s, #0, lsl #8",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 92,
    "word": 631308287,
    "asmText": "add z31.s, z31.s, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 93,
    "word": 631308287,
    "asmText": "add z31.s, z31.s, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 94,
    "word": 635486208,
    "asmText": "add z0.d, z0.d, #0",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 95,
    "word": 635494400,
    "asmText": "add z0.d, z0.d, #0, lsl #8",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 96,
    "word": 635502591,
    "asmText": "add z31.d, z31.d, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 97,
    "word": 635502591,
    "asmText": "add z31.d, z31.d, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 99,
    "word": 67117028,
    "asmText": "add z4.b, p7/m, z4.b, z31.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 101,
    "word": 67117028,
    "asmText": "add z4.b, p7/m, z4.b, z31.b",
    "encodingFile": "add_z_p_zz.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/add.s.yaml",
    "caseIndex": 103,
    "word": 635502591,
    "asmText": "add z31.d, z31.d, #65280",
    "encodingFile": "add_z_zi.xml",
    "mnemonic": "ADD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
