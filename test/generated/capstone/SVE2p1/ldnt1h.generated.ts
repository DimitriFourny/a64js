export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 0,
    "word": 2684362753,
    "asmText": "ldnt1h { z0.h, z1.h }, pn8/z, [x0, x0, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 1,
    "word": 2685744469,
    "asmText": "ldnt1h { z20.h, z21.h }, pn13/z, [x10, x21, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 2,
    "word": 2684890551,
    "asmText": "ldnt1h { z22.h, z23.h }, pn11/z, [x13, x8, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 3,
    "word": 2686402559,
    "asmText": "ldnt1h { z30.h, z31.h }, pn15/z, [sp, xzr, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 4,
    "word": 2688557057,
    "asmText": "ldnt1h { z0.h, z1.h }, pn8/z, [x0]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 5,
    "word": 2688890197,
    "asmText": "ldnt1h { z20.h, z21.h }, pn13/z, [x10, #10, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 6,
    "word": 2689084855,
    "asmText": "ldnt1h { z22.h, z23.h }, pn11/z, [x13, #-16, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 7,
    "word": 2689548287,
    "asmText": "ldnt1h { z30.h, z31.h }, pn15/z, [sp, #-2, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 8,
    "word": 2684395521,
    "asmText": "ldnt1h { z0.h - z3.h }, pn8/z, [x0, x0, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 9,
    "word": 2685777237,
    "asmText": "ldnt1h { z20.h - z23.h }, pn13/z, [x10, x21, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 10,
    "word": 2684923317,
    "asmText": "ldnt1h { z20.h - z23.h }, pn11/z, [x13, x8, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 11,
    "word": 2686435325,
    "asmText": "ldnt1h { z28.h - z31.h }, pn15/z, [sp, xzr, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 12,
    "word": 2688589825,
    "asmText": "ldnt1h { z0.h - z3.h }, pn8/z, [x0]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 13,
    "word": 2688922965,
    "asmText": "ldnt1h { z20.h - z23.h }, pn13/z, [x10, #20, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 14,
    "word": 2689117621,
    "asmText": "ldnt1h { z20.h - z23.h }, pn11/z, [x13, #-32, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 15,
    "word": 2689581053,
    "asmText": "ldnt1h { z28.h - z31.h }, pn15/z, [sp, #-4, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 16,
    "word": 2684362753,
    "asmText": "ldnt1h { z0.h, z1.h }, pn8/z, [x0, x0, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 17,
    "word": 2685744469,
    "asmText": "ldnt1h { z20.h, z21.h }, pn13/z, [x10, x21, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 18,
    "word": 2684890551,
    "asmText": "ldnt1h { z22.h, z23.h }, pn11/z, [x13, x8, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 19,
    "word": 2686402559,
    "asmText": "ldnt1h { z30.h, z31.h }, pn15/z, [sp, xzr, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 20,
    "word": 2688557057,
    "asmText": "ldnt1h { z0.h, z1.h }, pn8/z, [x0]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 21,
    "word": 2688890197,
    "asmText": "ldnt1h { z20.h, z21.h }, pn13/z, [x10, #10, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 22,
    "word": 2689084855,
    "asmText": "ldnt1h { z22.h, z23.h }, pn11/z, [x13, #-16, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 23,
    "word": 2689548287,
    "asmText": "ldnt1h { z30.h, z31.h }, pn15/z, [sp, #-2, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 24,
    "word": 2684395521,
    "asmText": "ldnt1h { z0.h - z3.h }, pn8/z, [x0, x0, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 25,
    "word": 2685777237,
    "asmText": "ldnt1h { z20.h - z23.h }, pn13/z, [x10, x21, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 26,
    "word": 2684923317,
    "asmText": "ldnt1h { z20.h - z23.h }, pn11/z, [x13, x8, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 27,
    "word": 2686435325,
    "asmText": "ldnt1h { z28.h - z31.h }, pn15/z, [sp, xzr, lsl #1]",
    "encodingFile": "ldnt1h_mz_p_br.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 28,
    "word": 2688589825,
    "asmText": "ldnt1h { z0.h - z3.h }, pn8/z, [x0]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 29,
    "word": 2688922965,
    "asmText": "ldnt1h { z20.h - z23.h }, pn13/z, [x10, #20, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 30,
    "word": 2689117621,
    "asmText": "ldnt1h { z20.h - z23.h }, pn11/z, [x13, #-32, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ldnt1h.s.yaml",
    "caseIndex": 31,
    "word": 2689581053,
    "asmText": "ldnt1h { z28.h - z31.h }, pn15/z, [sp, #-4, mul vl]",
    "encodingFile": "ldnt1h_mz_p_bi.xml",
    "mnemonic": "LDNT1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  }
];
