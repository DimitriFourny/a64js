export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 0,
    "word": 2852848613,
    "asmText": "mov x5, x11",
    "encodingFile": "mov_orr_log_shift.xml",
    "mnemonic": "ORR",
    "features": []
  },
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 1,
    "word": 705037281,
    "asmText": "mov w1, w6",
    "encodingFile": "mov_orr_log_shift.xml",
    "mnemonic": "ORR",
    "features": []
  },
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 2,
    "word": 705037281,
    "asmText": "mov w1, w6",
    "encodingFile": "mov_orr_log_shift.xml",
    "mnemonic": "ORR",
    "features": []
  },
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 7,
    "word": 1035994082,
    "asmText": "ldr q2, [sp]",
    "encodingFile": "ldr_imm_fpsimd.xml",
    "mnemonic": "LDR",
    "features": [
      "FEAT_FP"
    ]
  },
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 8,
    "word": 245439520,
    "asmText": "mov v0.8b, v1.8b",
    "encodingFile": "mov_orr_advsimd_reg.xml",
    "mnemonic": "ORR",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 9,
    "word": 2332033030,
    "asmText": "add x6, x0, x0",
    "encodingFile": "add_addsub_shift.xml",
    "mnemonic": "ADD",
    "features": []
  },
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 10,
    "word": 2332033030,
    "asmText": "add x6, x0, x0",
    "encodingFile": "add_addsub_shift.xml",
    "mnemonic": "ADD",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 3,
    "word": 238139398,
    "asmText": "addv b6, v0.8b",
    "encodingFile": "addv_advsimd.xml",
    "mnemonic": "ADDV",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 4,
    "word": 1577976965,
    "asmText": "mov h5, v4.h[3]",
    "encodingFile": "dup_advsimd_elt.xml",
    "mnemonic": "DUP",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 5,
    "word": 505686144,
    "asmText": "fadd s0, s4, s4",
    "encodingFile": "fadd_float.xml",
    "mnemonic": "FADD",
    "features": [
      "FEAT_FP",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "dot-req.s.yaml",
    "caseIndex": 6,
    "word": 509624418,
    "asmText": "fmov d2, d3",
    "encodingFile": "fmov_float.xml",
    "mnemonic": "FMOV",
    "features": [
      "FEAT_FP",
      "FEAT_FP16"
    ]
  }
];
