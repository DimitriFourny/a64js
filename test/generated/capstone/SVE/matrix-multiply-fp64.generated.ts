export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 0,
    "word": 1692591136,
    "asmText": "fmmla z0.d, z1.d, z2.d",
    "encodingFile": "fmmla_z_zzz.xml",
    "mnemonic": "FMMLA",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 1,
    "word": 2754028608,
    "asmText": "ld1rob { z0.b }, p1/z, [x2, #224]",
    "encodingFile": "ld1rob_z_p_bi.xml",
    "mnemonic": "LD1ROB",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 2,
    "word": 2762417216,
    "asmText": "ld1roh { z0.h }, p1/z, [x2, #224]",
    "encodingFile": "ld1roh_z_p_bi.xml",
    "mnemonic": "LD1ROH",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 3,
    "word": 2770805824,
    "asmText": "ld1row { z0.s }, p1/z, [x2, #224]",
    "encodingFile": "ld1row_z_p_bi.xml",
    "mnemonic": "LD1ROW",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 4,
    "word": 2779194432,
    "asmText": "ld1rod { z0.d }, p1/z, [x2, #224]",
    "encodingFile": "ld1rod_z_p_bi.xml",
    "mnemonic": "LD1ROD",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 5,
    "word": 2754094144,
    "asmText": "ld1rob { z0.b }, p1/z, [x2, #-256]",
    "encodingFile": "ld1rob_z_p_bi.xml",
    "mnemonic": "LD1ROB",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 6,
    "word": 2762482752,
    "asmText": "ld1roh { z0.h }, p1/z, [x2, #-256]",
    "encodingFile": "ld1roh_z_p_bi.xml",
    "mnemonic": "LD1ROH",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 7,
    "word": 2770871360,
    "asmText": "ld1row { z0.s }, p1/z, [x2, #-256]",
    "encodingFile": "ld1row_z_p_bi.xml",
    "mnemonic": "LD1ROW",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 8,
    "word": 2779259968,
    "asmText": "ld1rod { z0.d }, p1/z, [x2, #-256]",
    "encodingFile": "ld1rod_z_p_bi.xml",
    "mnemonic": "LD1ROD",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 9,
    "word": 2753569856,
    "asmText": "ld1rob { z0.b }, p1/z, [x2]",
    "encodingFile": "ld1rob_z_p_bi.xml",
    "mnemonic": "LD1ROB",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 10,
    "word": 2761958464,
    "asmText": "ld1roh { z0.h }, p1/z, [x2]",
    "encodingFile": "ld1roh_z_p_bi.xml",
    "mnemonic": "LD1ROH",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 11,
    "word": 2770347072,
    "asmText": "ld1row { z0.s }, p1/z, [x2]",
    "encodingFile": "ld1row_z_p_bi.xml",
    "mnemonic": "LD1ROW",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 12,
    "word": 2778735680,
    "asmText": "ld1rod { z0.d }, p1/z, [x2]",
    "encodingFile": "ld1rod_z_p_bi.xml",
    "mnemonic": "LD1ROD",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 13,
    "word": 2753569856,
    "asmText": "ld1rob { z0.b }, p1/z, [x2]",
    "encodingFile": "ld1rob_z_p_bi.xml",
    "mnemonic": "LD1ROB",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 14,
    "word": 2761958464,
    "asmText": "ld1roh { z0.h }, p1/z, [x2]",
    "encodingFile": "ld1roh_z_p_bi.xml",
    "mnemonic": "LD1ROH",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 15,
    "word": 2770347072,
    "asmText": "ld1row { z0.s }, p1/z, [x2]",
    "encodingFile": "ld1row_z_p_bi.xml",
    "mnemonic": "LD1ROW",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 16,
    "word": 2778735680,
    "asmText": "ld1rod { z0.d }, p1/z, [x2]",
    "encodingFile": "ld1rod_z_p_bi.xml",
    "mnemonic": "LD1ROD",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 17,
    "word": 2754028608,
    "asmText": "ld1rob { z0.b }, p1/z, [x2, #224]",
    "encodingFile": "ld1rob_z_p_bi.xml",
    "mnemonic": "LD1ROB",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 18,
    "word": 2762417216,
    "asmText": "ld1roh { z0.h }, p1/z, [x2, #224]",
    "encodingFile": "ld1roh_z_p_bi.xml",
    "mnemonic": "LD1ROH",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 19,
    "word": 2770805824,
    "asmText": "ld1row { z0.s }, p1/z, [x2, #224]",
    "encodingFile": "ld1row_z_p_bi.xml",
    "mnemonic": "LD1ROW",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 20,
    "word": 2779194432,
    "asmText": "ld1rod { z0.d }, p1/z, [x2, #224]",
    "encodingFile": "ld1rod_z_p_bi.xml",
    "mnemonic": "LD1ROD",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 21,
    "word": 2754094144,
    "asmText": "ld1rob { z0.b }, p1/z, [x2, #-256]",
    "encodingFile": "ld1rob_z_p_bi.xml",
    "mnemonic": "LD1ROB",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 22,
    "word": 2762482752,
    "asmText": "ld1roh { z0.h }, p1/z, [x2, #-256]",
    "encodingFile": "ld1roh_z_p_bi.xml",
    "mnemonic": "LD1ROH",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 23,
    "word": 2770871360,
    "asmText": "ld1row { z0.s }, p1/z, [x2, #-256]",
    "encodingFile": "ld1row_z_p_bi.xml",
    "mnemonic": "LD1ROW",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 24,
    "word": 2779259968,
    "asmText": "ld1rod { z0.d }, p1/z, [x2, #-256]",
    "encodingFile": "ld1rod_z_p_bi.xml",
    "mnemonic": "LD1ROD",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 25,
    "word": 2753758272,
    "asmText": "ld1rob { z0.b }, p1/z, [x2, x3]",
    "encodingFile": "ld1rob_z_p_br.xml",
    "mnemonic": "LD1ROB",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 26,
    "word": 2762146880,
    "asmText": "ld1roh { z0.h }, p1/z, [x2, x3, lsl #1]",
    "encodingFile": "ld1roh_z_p_br.xml",
    "mnemonic": "LD1ROH",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 27,
    "word": 2770535488,
    "asmText": "ld1row { z0.s }, p1/z, [x2, x3, lsl #2]",
    "encodingFile": "ld1row_z_p_br.xml",
    "mnemonic": "LD1ROW",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 28,
    "word": 2778924096,
    "asmText": "ld1rod { z0.d }, p1/z, [x2, x3, lsl #3]",
    "encodingFile": "ld1rod_z_p_br.xml",
    "mnemonic": "LD1ROD",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 29,
    "word": 2753758272,
    "asmText": "ld1rob { z0.b }, p1/z, [x2, x3]",
    "encodingFile": "ld1rob_z_p_br.xml",
    "mnemonic": "LD1ROB",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 30,
    "word": 2762146880,
    "asmText": "ld1roh { z0.h }, p1/z, [x2, x3, lsl #1]",
    "encodingFile": "ld1roh_z_p_br.xml",
    "mnemonic": "LD1ROH",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 31,
    "word": 2770535488,
    "asmText": "ld1row { z0.s }, p1/z, [x2, x3, lsl #2]",
    "encodingFile": "ld1row_z_p_br.xml",
    "mnemonic": "LD1ROW",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 32,
    "word": 2778924096,
    "asmText": "ld1rod { z0.d }, p1/z, [x2, x3, lsl #3]",
    "encodingFile": "ld1rod_z_p_br.xml",
    "mnemonic": "LD1ROD",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 33,
    "word": 94502944,
    "asmText": "zip1 z0.q, z1.q, z2.q",
    "encodingFile": "zip1_z_zz.xml",
    "mnemonic": "ZIP1",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 34,
    "word": 94503968,
    "asmText": "zip2 z0.q, z1.q, z2.q",
    "encodingFile": "zip1_z_zz.xml",
    "mnemonic": "ZIP2",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 35,
    "word": 94504992,
    "asmText": "uzp1 z0.q, z1.q, z2.q",
    "encodingFile": "uzp1_z_zz.xml",
    "mnemonic": "UZP1",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 36,
    "word": 94506016,
    "asmText": "uzp2 z0.q, z1.q, z2.q",
    "encodingFile": "uzp1_z_zz.xml",
    "mnemonic": "UZP2",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 37,
    "word": 94509088,
    "asmText": "trn1 z0.q, z1.q, z2.q",
    "encodingFile": "trn1_z_zz.xml",
    "mnemonic": "TRN1",
    "features": [
      "FEAT_F64MM"
    ]
  },
  {
    "sourceFile": "SVE/matrix-multiply-fp64.s.yaml",
    "caseIndex": 38,
    "word": 94510112,
    "asmText": "trn2 z0.q, z1.q, z2.q",
    "encodingFile": "trn1_z_zz.xml",
    "mnemonic": "TRN2",
    "features": [
      "FEAT_F64MM"
    ]
  }
];
