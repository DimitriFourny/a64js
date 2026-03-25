export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 0,
    "word": 2684354560,
    "asmText": "ld1b { z0.b, z1.b }, pn8/z, [x0, x0]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 1,
    "word": 2685736276,
    "asmText": "ld1b { z20.b, z21.b }, pn13/z, [x10, x21]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 2,
    "word": 2684882358,
    "asmText": "ld1b { z22.b, z23.b }, pn11/z, [x13, x8]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 3,
    "word": 2686394366,
    "asmText": "ld1b { z30.b, z31.b }, pn15/z, [sp, xzr]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 4,
    "word": 2688548864,
    "asmText": "ld1b { z0.b, z1.b }, pn8/z, [x0]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 5,
    "word": 2688882004,
    "asmText": "ld1b { z20.b, z21.b }, pn13/z, [x10, #10, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 6,
    "word": 2689076662,
    "asmText": "ld1b { z22.b, z23.b }, pn11/z, [x13, #-16, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 7,
    "word": 2689540094,
    "asmText": "ld1b { z30.b, z31.b }, pn15/z, [sp, #-2, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 8,
    "word": 2684387328,
    "asmText": "ld1b { z0.b - z3.b }, pn8/z, [x0, x0]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 9,
    "word": 2685769044,
    "asmText": "ld1b { z20.b - z23.b }, pn13/z, [x10, x21]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 10,
    "word": 2684915124,
    "asmText": "ld1b { z20.b - z23.b }, pn11/z, [x13, x8]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 11,
    "word": 2686427132,
    "asmText": "ld1b { z28.b - z31.b }, pn15/z, [sp, xzr]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 12,
    "word": 2688581632,
    "asmText": "ld1b { z0.b - z3.b }, pn8/z, [x0]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 13,
    "word": 2688914772,
    "asmText": "ld1b { z20.b - z23.b }, pn13/z, [x10, #20, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 14,
    "word": 2689109428,
    "asmText": "ld1b { z20.b - z23.b }, pn11/z, [x13, #-32, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 15,
    "word": 2689572860,
    "asmText": "ld1b { z28.b - z31.b }, pn15/z, [sp, #-4, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 16,
    "word": 2684354560,
    "asmText": "ld1b { z0.b, z1.b }, pn8/z, [x0, x0]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 17,
    "word": 2685736276,
    "asmText": "ld1b { z20.b, z21.b }, pn13/z, [x10, x21]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 18,
    "word": 2684882358,
    "asmText": "ld1b { z22.b, z23.b }, pn11/z, [x13, x8]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 19,
    "word": 2686394366,
    "asmText": "ld1b { z30.b, z31.b }, pn15/z, [sp, xzr]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 20,
    "word": 2688548864,
    "asmText": "ld1b { z0.b, z1.b }, pn8/z, [x0]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 21,
    "word": 2688882004,
    "asmText": "ld1b { z20.b, z21.b }, pn13/z, [x10, #10, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 22,
    "word": 2689076662,
    "asmText": "ld1b { z22.b, z23.b }, pn11/z, [x13, #-16, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 23,
    "word": 2689540094,
    "asmText": "ld1b { z30.b, z31.b }, pn15/z, [sp, #-2, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 24,
    "word": 2684387328,
    "asmText": "ld1b { z0.b - z3.b }, pn8/z, [x0, x0]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 25,
    "word": 2685769044,
    "asmText": "ld1b { z20.b - z23.b }, pn13/z, [x10, x21]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 26,
    "word": 2684915124,
    "asmText": "ld1b { z20.b - z23.b }, pn11/z, [x13, x8]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 27,
    "word": 2686427132,
    "asmText": "ld1b { z28.b - z31.b }, pn15/z, [sp, xzr]",
    "encodingFile": "ld1b_mz_p_br.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 28,
    "word": 2688581632,
    "asmText": "ld1b { z0.b - z3.b }, pn8/z, [x0]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 29,
    "word": 2688914772,
    "asmText": "ld1b { z20.b - z23.b }, pn13/z, [x10, #20, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 30,
    "word": 2689109428,
    "asmText": "ld1b { z20.b - z23.b }, pn11/z, [x13, #-32, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1b.s.yaml",
    "caseIndex": 31,
    "word": 2689572860,
    "asmText": "ld1b { z28.b - z31.b }, pn15/z, [sp, #-4, mul vl]",
    "encodingFile": "ld1b_mz_p_bi.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  }
];
