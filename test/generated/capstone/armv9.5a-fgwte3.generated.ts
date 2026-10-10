// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv9.5a-fgwte3.s.yaml",
    "caseIndex": 0,
    "word": 3577614752,
    "asmText": "mrs x0, FGWTE3_EL3",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-fgwte3.s.yaml",
    "caseIndex": 1,
    "word": 3575517600,
    "asmText": "msr FGWTE3_EL3, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
