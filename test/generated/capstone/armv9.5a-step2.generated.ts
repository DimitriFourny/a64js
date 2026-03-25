export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv9.5a-step2.s.yaml",
    "caseIndex": 0,
    "word": 3576694080,
    "asmText": "mrs x0, MDSTEPOP_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-step2.s.yaml",
    "caseIndex": 1,
    "word": 3574596928,
    "asmText": "msr MDSTEPOP_EL1, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
