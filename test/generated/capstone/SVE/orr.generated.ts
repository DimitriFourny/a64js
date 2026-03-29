export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 0,
    "word": 83898021,
    "asmText": "orr z5.b, z5.b, #0xf9",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 1,
    "word": 83914167,
    "asmText": "orr z23.h, z23.h, #0xfff9",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 2,
    "word": 83946400,
    "asmText": "orr z0.s, z0.s, #0xfffffff9",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 3,
    "word": 84144032,
    "asmText": "orr z0.d, z0.d, #0xfffffffffffffff9",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 4,
    "word": 83901989,
    "asmText": "orr z5.b, z5.b, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 5,
    "word": 83917879,
    "asmText": "orr z23.h, z23.h, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 6,
    "word": 83949600,
    "asmText": "orr z0.s, z0.s, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 7,
    "word": 84146208,
    "asmText": "orr z0.d, z0.d, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 8,
    "word": 73412608,
    "asmText": "mov z0.d, z0.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 9,
    "word": 73937335,
    "asmText": "orr z23.d, z13.d, z8.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 10,
    "word": 68689919,
    "asmText": "orr z31.b, p7/m, z31.b, z31.b",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 11,
    "word": 72884223,
    "asmText": "orr z31.h, p7/m, z31.h, z31.h",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 12,
    "word": 77078527,
    "asmText": "orr z31.s, p7/m, z31.s, z31.s",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 13,
    "word": 81272831,
    "asmText": "orr z31.d, p7/m, z31.d, z31.d",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 14,
    "word": 629227520,
    "asmText": "orr p0.b, p0/z, p0.b, p1.b",
    "encodingFile": "mov_orr_p_p_pp.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 15,
    "word": 629161984,
    "asmText": "mov p0.b, p0.b",
    "encodingFile": "mov_orr_p_p_pp.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 16,
    "word": 630160879,
    "asmText": "mov p15.b, p15.b",
    "encodingFile": "mov_orr_p_p_pp.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 17,
    "word": 73412608,
    "asmText": "mov z0.d, z0.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 18,
    "word": 73412608,
    "asmText": "mov z0.d, z0.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 19,
    "word": 73412608,
    "asmText": "mov z0.d, z0.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 20,
    "word": 73937335,
    "asmText": "orr z23.d, z13.d, z8.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 21,
    "word": 73937335,
    "asmText": "orr z23.d, z13.d, z8.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 22,
    "word": 73937335,
    "asmText": "orr z23.d, z13.d, z8.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 23,
    "word": 80755908,
    "asmText": "movprfx z4.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 24,
    "word": 81272804,
    "asmText": "orr z4.d, p7/m, z4.d, z31.d",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 25,
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
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 26,
    "word": 81272804,
    "asmText": "orr z4.d, p7/m, z4.d, z31.d",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 27,
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
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 28,
    "word": 84146208,
    "asmText": "orr z0.d, z0.d, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 29,
    "word": 83898021,
    "asmText": "orr z5.b, z5.b, #0xf9",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 30,
    "word": 83914167,
    "asmText": "orr z23.h, z23.h, #0xfff9",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 31,
    "word": 83946400,
    "asmText": "orr z0.s, z0.s, #0xfffffff9",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 32,
    "word": 84144032,
    "asmText": "orr z0.d, z0.d, #0xfffffffffffffff9",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 33,
    "word": 83901989,
    "asmText": "orr z5.b, z5.b, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 34,
    "word": 83917879,
    "asmText": "orr z23.h, z23.h, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 35,
    "word": 83949600,
    "asmText": "orr z0.s, z0.s, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 36,
    "word": 84146208,
    "asmText": "orr z0.d, z0.d, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 37,
    "word": 73412608,
    "asmText": "mov z0.d, z0.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 38,
    "word": 73937335,
    "asmText": "orr z23.d, z13.d, z8.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 39,
    "word": 68689919,
    "asmText": "orr z31.b, p7/m, z31.b, z31.b",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 40,
    "word": 72884223,
    "asmText": "orr z31.h, p7/m, z31.h, z31.h",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 41,
    "word": 77078527,
    "asmText": "orr z31.s, p7/m, z31.s, z31.s",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 42,
    "word": 81272831,
    "asmText": "orr z31.d, p7/m, z31.d, z31.d",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 43,
    "word": 629227520,
    "asmText": "orr p0.b, p0/z, p0.b, p1.b",
    "encodingFile": "mov_orr_p_p_pp.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 44,
    "word": 629161984,
    "asmText": "mov p0.b, p0.b",
    "encodingFile": "mov_orr_p_p_pp.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 45,
    "word": 630160879,
    "asmText": "mov p15.b, p15.b",
    "encodingFile": "mov_orr_p_p_pp.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 46,
    "word": 73412608,
    "asmText": "mov z0.d, z0.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 47,
    "word": 73412608,
    "asmText": "mov z0.d, z0.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 48,
    "word": 73412608,
    "asmText": "mov z0.d, z0.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 49,
    "word": 73937335,
    "asmText": "orr z23.d, z13.d, z8.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 50,
    "word": 73937335,
    "asmText": "orr z23.d, z13.d, z8.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 51,
    "word": 73937335,
    "asmText": "orr z23.d, z13.d, z8.d",
    "encodingFile": "mov_orr_z_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 52,
    "word": 80755908,
    "asmText": "movprfx z4.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 53,
    "word": 81272804,
    "asmText": "orr z4.d, p7/m, z4.d, z31.d",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 54,
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
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 55,
    "word": 81272804,
    "asmText": "orr z4.d, p7/m, z4.d, z31.d",
    "encodingFile": "orr_z_p_zz.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 56,
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
    "sourceFile": "SVE/orr.s.yaml",
    "caseIndex": 57,
    "word": 84146208,
    "asmText": "orr z0.d, z0.d, #0x6",
    "encodingFile": "orn_orr_z_zi.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_SVE || FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
