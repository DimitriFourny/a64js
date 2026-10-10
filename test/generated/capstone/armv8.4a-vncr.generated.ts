// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.4a-vncr.s.yaml",
    "caseIndex": 0,
    "word": 3577487872,
    "asmText": "mrs x0, VNCR_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-vncr.s.yaml",
    "caseIndex": 1,
    "word": 3575390720,
    "asmText": "msr VNCR_EL2, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
