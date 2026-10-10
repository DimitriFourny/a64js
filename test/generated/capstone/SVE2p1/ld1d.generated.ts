// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 0,
    "word": 2684379136,
    "asmText": "ld1d { z0.d, z1.d }, pn8/z, [x0, x0, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 1,
    "word": 2685760852,
    "asmText": "ld1d { z20.d, z21.d }, pn13/z, [x10, x21, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 2,
    "word": 2684906934,
    "asmText": "ld1d { z22.d, z23.d }, pn11/z, [x13, x8, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 3,
    "word": 2686418942,
    "asmText": "ld1d { z30.d, z31.d }, pn15/z, [sp, xzr, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 4,
    "word": 2688573440,
    "asmText": "ld1d { z0.d, z1.d }, pn8/z, [x0]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 5,
    "word": 2688906580,
    "asmText": "ld1d { z20.d, z21.d }, pn13/z, [x10, #10, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 6,
    "word": 2689101238,
    "asmText": "ld1d { z22.d, z23.d }, pn11/z, [x13, #-16, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 7,
    "word": 2689564670,
    "asmText": "ld1d { z30.d, z31.d }, pn15/z, [sp, #-2, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 8,
    "word": 2684411904,
    "asmText": "ld1d { z0.d - z3.d }, pn8/z, [x0, x0, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 9,
    "word": 2685793620,
    "asmText": "ld1d { z20.d - z23.d }, pn13/z, [x10, x21, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 10,
    "word": 2684939700,
    "asmText": "ld1d { z20.d - z23.d }, pn11/z, [x13, x8, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 11,
    "word": 2686451708,
    "asmText": "ld1d { z28.d - z31.d }, pn15/z, [sp, xzr, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 12,
    "word": 2688606208,
    "asmText": "ld1d { z0.d - z3.d }, pn8/z, [x0]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 13,
    "word": 2688939348,
    "asmText": "ld1d { z20.d - z23.d }, pn13/z, [x10, #20, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 14,
    "word": 2689134004,
    "asmText": "ld1d { z20.d - z23.d }, pn11/z, [x13, #-32, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 15,
    "word": 2689597436,
    "asmText": "ld1d { z28.d - z31.d }, pn15/z, [sp, #-4, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 16,
    "word": 2684379136,
    "asmText": "ld1d { z0.d, z1.d }, pn8/z, [x0, x0, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 17,
    "word": 2685760852,
    "asmText": "ld1d { z20.d, z21.d }, pn13/z, [x10, x21, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 18,
    "word": 2684906934,
    "asmText": "ld1d { z22.d, z23.d }, pn11/z, [x13, x8, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 19,
    "word": 2686418942,
    "asmText": "ld1d { z30.d, z31.d }, pn15/z, [sp, xzr, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 20,
    "word": 2688573440,
    "asmText": "ld1d { z0.d, z1.d }, pn8/z, [x0]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 21,
    "word": 2688906580,
    "asmText": "ld1d { z20.d, z21.d }, pn13/z, [x10, #10, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 22,
    "word": 2689101238,
    "asmText": "ld1d { z22.d, z23.d }, pn11/z, [x13, #-16, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 23,
    "word": 2689564670,
    "asmText": "ld1d { z30.d, z31.d }, pn15/z, [sp, #-2, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 24,
    "word": 2684411904,
    "asmText": "ld1d { z0.d - z3.d }, pn8/z, [x0, x0, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 25,
    "word": 2685793620,
    "asmText": "ld1d { z20.d - z23.d }, pn13/z, [x10, x21, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 26,
    "word": 2684939700,
    "asmText": "ld1d { z20.d - z23.d }, pn11/z, [x13, x8, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 27,
    "word": 2686451708,
    "asmText": "ld1d { z28.d - z31.d }, pn15/z, [sp, xzr, lsl #3]",
    "encodingFile": "ld1d_mz_p_br.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 28,
    "word": 2688606208,
    "asmText": "ld1d { z0.d - z3.d }, pn8/z, [x0]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 29,
    "word": 2688939348,
    "asmText": "ld1d { z20.d - z23.d }, pn13/z, [x10, #20, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 30,
    "word": 2689134004,
    "asmText": "ld1d { z20.d - z23.d }, pn11/z, [x13, #-32, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1d.s.yaml",
    "caseIndex": 31,
    "word": 2689597436,
    "asmText": "ld1d { z28.d - z31.d }, pn15/z, [sp, #-4, mul vl]",
    "encodingFile": "ld1d_mz_p_bi.xml",
    "mnemonic": "LD1D",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
