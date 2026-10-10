// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv9.5a-hacdbs.s.yaml",
    "caseIndex": 0,
    "word": 3577488256,
    "asmText": "mrs x0, HACDBSBR_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-hacdbs.s.yaml",
    "caseIndex": 1,
    "word": 3575391104,
    "asmText": "msr HACDBSBR_EL2, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-hacdbs.s.yaml",
    "caseIndex": 2,
    "word": 3577488288,
    "asmText": "mrs x0, HACDBSCONS_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-hacdbs.s.yaml",
    "caseIndex": 3,
    "word": 3575391136,
    "asmText": "msr HACDBSCONS_EL2, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
