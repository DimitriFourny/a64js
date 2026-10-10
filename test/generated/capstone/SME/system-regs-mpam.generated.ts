// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SME/system-regs-mpam.s.yaml",
    "caseIndex": 0,
    "word": 3577259363,
    "asmText": "mrs x3, MPAMSM_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs-mpam.s.yaml",
    "caseIndex": 1,
    "word": 3575162211,
    "asmText": "msr MPAMSM_EL1, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
