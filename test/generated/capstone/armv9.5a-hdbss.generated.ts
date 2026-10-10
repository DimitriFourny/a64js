// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv9.5a-hdbss.s.yaml",
    "caseIndex": 0,
    "word": 3577488192,
    "asmText": "mrs x0, HDBSSBR_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-hdbss.s.yaml",
    "caseIndex": 1,
    "word": 3575391040,
    "asmText": "msr HDBSSBR_EL2, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-hdbss.s.yaml",
    "caseIndex": 2,
    "word": 3577488224,
    "asmText": "mrs x0, HDBSSPROD_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-hdbss.s.yaml",
    "caseIndex": 3,
    "word": 3575391072,
    "asmText": "msr HDBSSPROD_EL2, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
