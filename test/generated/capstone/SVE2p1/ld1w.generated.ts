export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 0,
    "word": 2684370944,
    "asmText": "ld1w { z0.s, z1.s }, pn8/z, [x0, x0, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 1,
    "word": 2685752660,
    "asmText": "ld1w { z20.s, z21.s }, pn13/z, [x10, x21, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 2,
    "word": 2684898742,
    "asmText": "ld1w { z22.s, z23.s }, pn11/z, [x13, x8, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 3,
    "word": 2686410750,
    "asmText": "ld1w { z30.s, z31.s }, pn15/z, [sp, xzr, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 4,
    "word": 2688565248,
    "asmText": "ld1w { z0.s, z1.s }, pn8/z, [x0]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 5,
    "word": 2688898388,
    "asmText": "ld1w { z20.s, z21.s }, pn13/z, [x10, #10, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 6,
    "word": 2689093046,
    "asmText": "ld1w { z22.s, z23.s }, pn11/z, [x13, #-16, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 7,
    "word": 2689556478,
    "asmText": "ld1w { z30.s, z31.s }, pn15/z, [sp, #-2, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 8,
    "word": 2684403712,
    "asmText": "ld1w { z0.s - z3.s }, pn8/z, [x0, x0, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 9,
    "word": 2685785428,
    "asmText": "ld1w { z20.s - z23.s }, pn13/z, [x10, x21, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 10,
    "word": 2684931508,
    "asmText": "ld1w { z20.s - z23.s }, pn11/z, [x13, x8, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 11,
    "word": 2686443516,
    "asmText": "ld1w { z28.s - z31.s }, pn15/z, [sp, xzr, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 12,
    "word": 2688598016,
    "asmText": "ld1w { z0.s - z3.s }, pn8/z, [x0]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 13,
    "word": 2688931156,
    "asmText": "ld1w { z20.s - z23.s }, pn13/z, [x10, #20, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 14,
    "word": 2689125812,
    "asmText": "ld1w { z20.s - z23.s }, pn11/z, [x13, #-32, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 15,
    "word": 2689589244,
    "asmText": "ld1w { z28.s - z31.s }, pn15/z, [sp, #-4, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 16,
    "word": 2684370944,
    "asmText": "ld1w { z0.s, z1.s }, pn8/z, [x0, x0, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 17,
    "word": 2685752660,
    "asmText": "ld1w { z20.s, z21.s }, pn13/z, [x10, x21, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 18,
    "word": 2684898742,
    "asmText": "ld1w { z22.s, z23.s }, pn11/z, [x13, x8, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 19,
    "word": 2686410750,
    "asmText": "ld1w { z30.s, z31.s }, pn15/z, [sp, xzr, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 20,
    "word": 2688565248,
    "asmText": "ld1w { z0.s, z1.s }, pn8/z, [x0]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 21,
    "word": 2688898388,
    "asmText": "ld1w { z20.s, z21.s }, pn13/z, [x10, #10, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 22,
    "word": 2689093046,
    "asmText": "ld1w { z22.s, z23.s }, pn11/z, [x13, #-16, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 23,
    "word": 2689556478,
    "asmText": "ld1w { z30.s, z31.s }, pn15/z, [sp, #-2, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 24,
    "word": 2684403712,
    "asmText": "ld1w { z0.s - z3.s }, pn8/z, [x0, x0, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 25,
    "word": 2685785428,
    "asmText": "ld1w { z20.s - z23.s }, pn13/z, [x10, x21, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 26,
    "word": 2684931508,
    "asmText": "ld1w { z20.s - z23.s }, pn11/z, [x13, x8, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 27,
    "word": 2686443516,
    "asmText": "ld1w { z28.s - z31.s }, pn15/z, [sp, xzr, lsl #2]",
    "encodingFile": "ld1w_mz_p_br.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 28,
    "word": 2688598016,
    "asmText": "ld1w { z0.s - z3.s }, pn8/z, [x0]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 29,
    "word": 2688931156,
    "asmText": "ld1w { z20.s - z23.s }, pn13/z, [x10, #20, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 30,
    "word": 2689125812,
    "asmText": "ld1w { z20.s - z23.s }, pn11/z, [x13, #-32, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld1w.s.yaml",
    "caseIndex": 31,
    "word": 2689589244,
    "asmText": "ld1w { z28.s - z31.s }, pn15/z, [sp, #-4, mul vl]",
    "encodingFile": "ld1w_mz_p_bi.xml",
    "mnemonic": "LD1W",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  }
];
