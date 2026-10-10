// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv9.5a-e3dse.s.yaml",
    "caseIndex": 0,
    "word": 3577659680,
    "asmText": "mrs x0, VDISR_EL3",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-e3dse.s.yaml",
    "caseIndex": 1,
    "word": 3575562528,
    "asmText": "msr VDISR_EL3, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-e3dse.s.yaml",
    "caseIndex": 2,
    "word": 3577631328,
    "asmText": "mrs x0, VSESR_EL3",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-e3dse.s.yaml",
    "caseIndex": 3,
    "word": 3575534176,
    "asmText": "msr VSESR_EL3, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
