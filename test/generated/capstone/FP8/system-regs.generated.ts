// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8/system-regs.s.yaml",
    "caseIndex": 0,
    "word": 3577431107,
    "asmText": "mrs x3, FPMR",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "FP8/system-regs.s.yaml",
    "caseIndex": 1,
    "word": 3577218275,
    "asmText": "mrs x3, ID_AA64FPFR0_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "FP8/system-regs.s.yaml",
    "caseIndex": 2,
    "word": 3575333955,
    "asmText": "msr FPMR, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
