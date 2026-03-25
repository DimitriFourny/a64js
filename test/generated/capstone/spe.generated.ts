export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "spe.s.yaml",
    "caseIndex": 0,
    "word": 3575159072,
    "asmText": "msr PMSNEVFR_EL1, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "spe.s.yaml",
    "caseIndex": 1,
    "word": 3577256225,
    "asmText": "mrs x1, PMSNEVFR_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
