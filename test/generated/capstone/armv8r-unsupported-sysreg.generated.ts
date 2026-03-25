export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8r-unsupported-sysreg.s.yaml",
    "caseIndex": 0,
    "word": 3575390211,
    "asmText": "msr TTBR0_EL2, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8r-unsupported-sysreg.s.yaml",
    "caseIndex": 1,
    "word": 3577487363,
    "asmText": "mrs x3, TTBR0_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8r-unsupported-sysreg.s.yaml",
    "caseIndex": 2,
    "word": 3575390467,
    "asmText": "msr VTTBR_EL2, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8r-unsupported-sysreg.s.yaml",
    "caseIndex": 3,
    "word": 3577487619,
    "asmText": "mrs x3, VTTBR_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8r-unsupported-sysreg.s.yaml",
    "caseIndex": 4,
    "word": 3575391747,
    "asmText": "msr VSTTBR_EL2, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8r-unsupported-sysreg.s.yaml",
    "caseIndex": 5,
    "word": 3577488899,
    "asmText": "mrs x3, VSTTBR_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
