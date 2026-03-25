export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 0,
    "word": 419430751,
    "asmText": "stlurb wzr, [x10]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 1,
    "word": 419430721,
    "asmText": "stlurb w1, [x10]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 2,
    "word": 420479297,
    "asmText": "stlurb w1, [x10, #-256]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 3,
    "word": 420475234,
    "asmText": "stlurb w2, [x11, #255]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 4,
    "word": 421516259,
    "asmText": "stlurb w3, [sp, #-3]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 5,
    "word": 423625119,
    "asmText": "ldapurb wzr, [x12]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 6,
    "word": 423625092,
    "asmText": "ldapurb w4, [x12]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 7,
    "word": 424673668,
    "asmText": "ldapurb w4, [x12, #-256]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 8,
    "word": 424669605,
    "asmText": "ldapurb w5, [x13, #255]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 9,
    "word": 425714662,
    "asmText": "ldapurb w6, [sp, #-2]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 10,
    "word": 432013767,
    "asmText": "ldapursb w7, [x14]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 11,
    "word": 433062343,
    "asmText": "ldapursb w7, [x14, #-256]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 12,
    "word": 433058280,
    "asmText": "ldapursb w8, [x15, #255]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 13,
    "word": 434107369,
    "asmText": "ldapursb w9, [sp, #-1]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 14,
    "word": 427819520,
    "asmText": "ldapursb x0, [x16]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 15,
    "word": 428868096,
    "asmText": "ldapursb x0, [x16, #-256]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 16,
    "word": 428864033,
    "asmText": "ldapursb x1, [x17, #255]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 17,
    "word": 427820002,
    "asmText": "ldapursb x2, [sp]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 18,
    "word": 427820002,
    "asmText": "ldapursb x2, [sp]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 19,
    "word": 1493172810,
    "asmText": "stlurh w10, [x18]",
    "encodingFile": "stlurh.xml",
    "mnemonic": "STLURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 20,
    "word": 1494221386,
    "asmText": "stlurh w10, [x18, #-256]",
    "encodingFile": "stlurh.xml",
    "mnemonic": "STLURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 21,
    "word": 1494217323,
    "asmText": "stlurh w11, [x19, #255]",
    "encodingFile": "stlurh.xml",
    "mnemonic": "STLURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 22,
    "word": 1493177324,
    "asmText": "stlurh w12, [sp, #1]",
    "encodingFile": "stlurh.xml",
    "mnemonic": "STLURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 23,
    "word": 1497367181,
    "asmText": "ldapurh w13, [x20]",
    "encodingFile": "ldapurh.xml",
    "mnemonic": "LDAPURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 24,
    "word": 1498415757,
    "asmText": "ldapurh w13, [x20, #-256]",
    "encodingFile": "ldapurh.xml",
    "mnemonic": "LDAPURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 25,
    "word": 1498411694,
    "asmText": "ldapurh w14, [x21, #255]",
    "encodingFile": "ldapurh.xml",
    "mnemonic": "LDAPURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 26,
    "word": 1497375727,
    "asmText": "ldapurh w15, [sp, #2]",
    "encodingFile": "ldapurh.xml",
    "mnemonic": "LDAPURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 27,
    "word": 1505755856,
    "asmText": "ldapursh w16, [x22]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 28,
    "word": 1506804432,
    "asmText": "ldapursh w16, [x22, #-256]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 29,
    "word": 1506800369,
    "asmText": "ldapursh w17, [x23, #255]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 30,
    "word": 1505768434,
    "asmText": "ldapursh w18, [sp, #3]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 31,
    "word": 1501561603,
    "asmText": "ldapursh x3, [x24]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 32,
    "word": 1502610179,
    "asmText": "ldapursh x3, [x24, #-256]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 33,
    "word": 1502606116,
    "asmText": "ldapursh x4, [x25, #255]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 34,
    "word": 1501578213,
    "asmText": "ldapursh x5, [sp, #4]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 35,
    "word": 2566914899,
    "asmText": "stlur w19, [x26]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 36,
    "word": 2567963475,
    "asmText": "stlur w19, [x26, #-256]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 37,
    "word": 2567959412,
    "asmText": "stlur w20, [x27, #255]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 38,
    "word": 2566935541,
    "asmText": "stlur w21, [sp, #5]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 39,
    "word": 2571109270,
    "asmText": "ldapur w22, [x28]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 40,
    "word": 2572157846,
    "asmText": "ldapur w22, [x28, #-256]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 41,
    "word": 2572153783,
    "asmText": "ldapur w23, [x29, #255]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 42,
    "word": 2571133944,
    "asmText": "ldapur w24, [sp, #6]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 43,
    "word": 2575303622,
    "asmText": "ldapursw x6, [x30]",
    "encodingFile": "ldapursw.xml",
    "mnemonic": "LDAPURSW",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 44,
    "word": 2576352198,
    "asmText": "ldapursw x6, [x30, #-256]",
    "encodingFile": "ldapursw.xml",
    "mnemonic": "LDAPURSW",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 45,
    "word": 2576347143,
    "asmText": "ldapursw x7, [x0, #255]",
    "encodingFile": "ldapursw.xml",
    "mnemonic": "LDAPURSW",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 46,
    "word": 2575332328,
    "asmText": "ldapursw x8, [sp, #7]",
    "encodingFile": "ldapursw.xml",
    "mnemonic": "LDAPURSW",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 47,
    "word": 3640655913,
    "asmText": "stlur x9, [x1]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 48,
    "word": 3641704489,
    "asmText": "stlur x9, [x1, #-256]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 49,
    "word": 3641700426,
    "asmText": "stlur x10, [x2, #255]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 50,
    "word": 3640689643,
    "asmText": "stlur x11, [sp, #8]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 51,
    "word": 3644850284,
    "asmText": "ldapur x12, [x3]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 52,
    "word": 3645898860,
    "asmText": "ldapur x12, [x3, #-256]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 53,
    "word": 3645894797,
    "asmText": "ldapur x13, [x4, #255]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 54,
    "word": 3644888046,
    "asmText": "ldapur x14, [sp, #9]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 55,
    "word": 419430751,
    "asmText": "stlurb wzr, [x10]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 56,
    "word": 419430721,
    "asmText": "stlurb w1, [x10]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 57,
    "word": 420479297,
    "asmText": "stlurb w1, [x10, #-256]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 58,
    "word": 420475234,
    "asmText": "stlurb w2, [x11, #255]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 59,
    "word": 421516259,
    "asmText": "stlurb w3, [sp, #-3]",
    "encodingFile": "stlurb.xml",
    "mnemonic": "STLURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 60,
    "word": 423625119,
    "asmText": "ldapurb wzr, [x12]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 61,
    "word": 423625092,
    "asmText": "ldapurb w4, [x12]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 62,
    "word": 424673668,
    "asmText": "ldapurb w4, [x12, #-256]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 63,
    "word": 424669605,
    "asmText": "ldapurb w5, [x13, #255]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 64,
    "word": 425714662,
    "asmText": "ldapurb w6, [sp, #-2]",
    "encodingFile": "ldapurb.xml",
    "mnemonic": "LDAPURB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 65,
    "word": 432013767,
    "asmText": "ldapursb w7, [x14]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 66,
    "word": 433062343,
    "asmText": "ldapursb w7, [x14, #-256]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 67,
    "word": 433058280,
    "asmText": "ldapursb w8, [x15, #255]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 68,
    "word": 434107369,
    "asmText": "ldapursb w9, [sp, #-1]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 69,
    "word": 427819520,
    "asmText": "ldapursb x0, [x16]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 70,
    "word": 428868096,
    "asmText": "ldapursb x0, [x16, #-256]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 71,
    "word": 428864033,
    "asmText": "ldapursb x1, [x17, #255]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 72,
    "word": 427820002,
    "asmText": "ldapursb x2, [sp]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 73,
    "word": 427820002,
    "asmText": "ldapursb x2, [sp]",
    "encodingFile": "ldapursb.xml",
    "mnemonic": "LDAPURSB",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 74,
    "word": 1493172810,
    "asmText": "stlurh w10, [x18]",
    "encodingFile": "stlurh.xml",
    "mnemonic": "STLURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 75,
    "word": 1494221386,
    "asmText": "stlurh w10, [x18, #-256]",
    "encodingFile": "stlurh.xml",
    "mnemonic": "STLURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 76,
    "word": 1494217323,
    "asmText": "stlurh w11, [x19, #255]",
    "encodingFile": "stlurh.xml",
    "mnemonic": "STLURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 77,
    "word": 1493177324,
    "asmText": "stlurh w12, [sp, #1]",
    "encodingFile": "stlurh.xml",
    "mnemonic": "STLURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 78,
    "word": 1497367181,
    "asmText": "ldapurh w13, [x20]",
    "encodingFile": "ldapurh.xml",
    "mnemonic": "LDAPURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 79,
    "word": 1498415757,
    "asmText": "ldapurh w13, [x20, #-256]",
    "encodingFile": "ldapurh.xml",
    "mnemonic": "LDAPURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 80,
    "word": 1498411694,
    "asmText": "ldapurh w14, [x21, #255]",
    "encodingFile": "ldapurh.xml",
    "mnemonic": "LDAPURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 81,
    "word": 1497375727,
    "asmText": "ldapurh w15, [sp, #2]",
    "encodingFile": "ldapurh.xml",
    "mnemonic": "LDAPURH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 82,
    "word": 1505755856,
    "asmText": "ldapursh w16, [x22]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 83,
    "word": 1506804432,
    "asmText": "ldapursh w16, [x22, #-256]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 84,
    "word": 1506800369,
    "asmText": "ldapursh w17, [x23, #255]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 85,
    "word": 1505768434,
    "asmText": "ldapursh w18, [sp, #3]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 86,
    "word": 1501561603,
    "asmText": "ldapursh x3, [x24]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 87,
    "word": 1502610179,
    "asmText": "ldapursh x3, [x24, #-256]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 88,
    "word": 1502606116,
    "asmText": "ldapursh x4, [x25, #255]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 89,
    "word": 1501578213,
    "asmText": "ldapursh x5, [sp, #4]",
    "encodingFile": "ldapursh.xml",
    "mnemonic": "LDAPURSH",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 90,
    "word": 2566914899,
    "asmText": "stlur w19, [x26]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 91,
    "word": 2567963475,
    "asmText": "stlur w19, [x26, #-256]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 92,
    "word": 2567959412,
    "asmText": "stlur w20, [x27, #255]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 93,
    "word": 2566935541,
    "asmText": "stlur w21, [sp, #5]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 94,
    "word": 2571109270,
    "asmText": "ldapur w22, [x28]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 95,
    "word": 2572157846,
    "asmText": "ldapur w22, [x28, #-256]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 96,
    "word": 2572153783,
    "asmText": "ldapur w23, [x29, #255]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 97,
    "word": 2571133944,
    "asmText": "ldapur w24, [sp, #6]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 98,
    "word": 2575303622,
    "asmText": "ldapursw x6, [x30]",
    "encodingFile": "ldapursw.xml",
    "mnemonic": "LDAPURSW",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 99,
    "word": 2576352198,
    "asmText": "ldapursw x6, [x30, #-256]",
    "encodingFile": "ldapursw.xml",
    "mnemonic": "LDAPURSW",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 100,
    "word": 2576347143,
    "asmText": "ldapursw x7, [x0, #255]",
    "encodingFile": "ldapursw.xml",
    "mnemonic": "LDAPURSW",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 101,
    "word": 2575332328,
    "asmText": "ldapursw x8, [sp, #7]",
    "encodingFile": "ldapursw.xml",
    "mnemonic": "LDAPURSW",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 102,
    "word": 3640655913,
    "asmText": "stlur x9, [x1]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 103,
    "word": 3641704489,
    "asmText": "stlur x9, [x1, #-256]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 104,
    "word": 3641700426,
    "asmText": "stlur x10, [x2, #255]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 105,
    "word": 3640689643,
    "asmText": "stlur x11, [sp, #8]",
    "encodingFile": "stlur_gen.xml",
    "mnemonic": "STLUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 106,
    "word": 3644850284,
    "asmText": "ldapur x12, [x3]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 107,
    "word": 3645898860,
    "asmText": "ldapur x12, [x3, #-256]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 108,
    "word": 3645894797,
    "asmText": "ldapur x13, [x4, #255]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  },
  {
    "sourceFile": "armv8.4a-ldst.s.yaml",
    "caseIndex": 109,
    "word": 3644888046,
    "asmText": "ldapur x14, [sp, #9]",
    "encodingFile": "ldapur_gen.xml",
    "mnemonic": "LDAPUR",
    "features": [
      "FEAT_LRCPC2"
    ]
  }
];
