export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 0,
    "word": 2761981952,
    "asmText": "ld2q { z0.q, z1.q }, p0/z, [x0, x0, lsl #4]",
    "encodingFile": "ld2q_z_p_br.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 1,
    "word": 2763363669,
    "asmText": "ld2q { z21.q, z22.q }, p5/z, [x10, x21, lsl #4]",
    "encodingFile": "ld2q_z_p_br.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 2,
    "word": 2762509751,
    "asmText": "ld2q { z23.q, z24.q }, p3/z, [x13, x8, lsl #4]",
    "encodingFile": "ld2q_z_p_br.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 3,
    "word": 2760957952,
    "asmText": "ld2q { z0.q, z1.q }, p0/z, [x0]",
    "encodingFile": "ld2q_z_p_bi.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 4,
    "word": 2761291093,
    "asmText": "ld2q { z21.q, z22.q }, p5/z, [x10, #10, mul vl]",
    "encodingFile": "ld2q_z_p_bi.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 5,
    "word": 2761485751,
    "asmText": "ld2q { z23.q, z24.q }, p3/z, [x13, #-16, mul vl]",
    "encodingFile": "ld2q_z_p_bi.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 6,
    "word": 2761949183,
    "asmText": "ld2q { z31.q, z0.q }, p7/z, [sp, #-2, mul vl]",
    "encodingFile": "ld2q_z_p_bi.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 7,
    "word": 2761981952,
    "asmText": "ld2q { z0.q, z1.q }, p0/z, [x0, x0, lsl #4]",
    "encodingFile": "ld2q_z_p_br.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 8,
    "word": 2763363669,
    "asmText": "ld2q { z21.q, z22.q }, p5/z, [x10, x21, lsl #4]",
    "encodingFile": "ld2q_z_p_br.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 9,
    "word": 2762509751,
    "asmText": "ld2q { z23.q, z24.q }, p3/z, [x13, x8, lsl #4]",
    "encodingFile": "ld2q_z_p_br.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 10,
    "word": 2760957952,
    "asmText": "ld2q { z0.q, z1.q }, p0/z, [x0]",
    "encodingFile": "ld2q_z_p_bi.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 11,
    "word": 2761291093,
    "asmText": "ld2q { z21.q, z22.q }, p5/z, [x10, #10, mul vl]",
    "encodingFile": "ld2q_z_p_bi.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 12,
    "word": 2761485751,
    "asmText": "ld2q { z23.q, z24.q }, p3/z, [x13, #-16, mul vl]",
    "encodingFile": "ld2q_z_p_bi.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  },
  {
    "sourceFile": "SVE2p1/ld2q.s.yaml",
    "caseIndex": 13,
    "word": 2761949183,
    "asmText": "ld2q { z31.q, z0.q }, p7/z, [sp, #-2, mul vl]",
    "encodingFile": "ld2q_z_p_bi.xml",
    "mnemonic": "LD2Q",
    "features": [
      "FEAT_SVE2p1 || FEAT_SME2p1",
      "FEAT_SVE2p1",
      "FEAT_SME2p1"
    ]
  }
];
