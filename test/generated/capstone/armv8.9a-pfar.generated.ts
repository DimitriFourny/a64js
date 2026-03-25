export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.9a-pfar.s.yaml",
    "caseIndex": 0,
    "word": 3577241760,
    "asmText": "mrs x0, PFAR_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.9a-pfar.s.yaml",
    "caseIndex": 1,
    "word": 3575144608,
    "asmText": "msr PFAR_EL1, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.9a-pfar.s.yaml",
    "caseIndex": 2,
    "word": 3577503904,
    "asmText": "mrs x0, PFAR_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.9a-pfar.s.yaml",
    "caseIndex": 3,
    "word": 3575406752,
    "asmText": "msr PFAR_EL2, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.9a-pfar.s.yaml",
    "caseIndex": 4,
    "word": 3577569440,
    "asmText": "mrs x0, PFAR_EL12",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.9a-pfar.s.yaml",
    "caseIndex": 5,
    "word": 3575472288,
    "asmText": "msr PFAR_EL12, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.9a-pfar.s.yaml",
    "caseIndex": 6,
    "word": 3577634976,
    "asmText": "mrs x0, MFAR_EL3",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.9a-pfar.s.yaml",
    "caseIndex": 7,
    "word": 3575537824,
    "asmText": "msr MFAR_EL3, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
