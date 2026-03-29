export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "apple_proprietary.yaml",
    "caseIndex": 0,
    "word": 521150464,
    "asmText": "ldx xzr",
    "encodingFile": "fmadd_float.xml",
    "mnemonic": "FMADD",
    "features": [
      "FEAT_FP",
      "FEAT_FP16"
    ]
  },
  {
    "sourceFile": "apple_proprietary.yaml",
    "caseIndex": 8,
    "word": 3759153152,
    "asmText": "stzi x0",
    "encodingFile": "ld1b_za_p_rrr.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "apple_proprietary.yaml",
    "caseIndex": 16,
    "word": 3759218688,
    "asmText": "fma16 x0",
    "encodingFile": "ld1b_za_p_rrr.xml",
    "mnemonic": "LD1B",
    "features": [
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "apple_proprietary.yaml",
    "caseIndex": 6,
    "word": 2685411328,
    "asmText": "stz x0",
    "encodingFile": "ld1h_mz_p_br.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "apple_proprietary.yaml",
    "caseIndex": 14,
    "word": 2685476864,
    "asmText": "fms32 x0",
    "encodingFile": "ld1h_mz_p_br.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  },
  {
    "sourceFile": "apple_proprietary.yaml",
    "caseIndex": 23,
    "word": 2685542400,
    "asmText": "matfp x0",
    "encodingFile": "ld1h_mz_p_br.xml",
    "mnemonic": "LD1H",
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1",
      "FEAT_SME2",
      "FEAT_SVE2p1"
    ]
  }
];
