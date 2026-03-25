export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.8a-nmi.s.yaml",
    "caseIndex": 0,
    "word": 3577234178,
    "asmText": "mrs x2, ALLINT",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.8a-nmi.s.yaml",
    "caseIndex": 1,
    "word": 3575137027,
    "asmText": "msr ALLINT, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.8a-nmi.s.yaml",
    "caseIndex": 3,
    "word": 3577268647,
    "asmText": "mrs x7, ICC_NMIAR1_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.8a-nmi.s.yaml",
    "caseIndex": 4,
    "word": 3577234178,
    "asmText": "mrs x2, ALLINT",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.8a-nmi.s.yaml",
    "caseIndex": 5,
    "word": 3575137027,
    "asmText": "msr ALLINT, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.8a-nmi.s.yaml",
    "caseIndex": 7,
    "word": 3577268647,
    "asmText": "mrs x7, ICC_NMIAR1_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.8a-nmi.s.yaml",
    "caseIndex": 2,
    "word": 3573629215,
    "asmText": "msr ALLINT, #1",
    "encodingFile": "msr_imm.xml",
    "mnemonic": "MSR",
    "features": [
      "FEAT_VHE",
      "FEAT_UAO",
      "FEAT_PAN",
      "FEAT_NMI",
      "FEAT_EBEP",
      "FEAT_DIT",
      "FEAT_SME",
      "FEAT_MTE",
      "FEAT_SSBS"
    ]
  },
  {
    "sourceFile": "armv8.8a-nmi.s.yaml",
    "caseIndex": 6,
    "word": 3573629215,
    "asmText": "msr ALLINT, #1",
    "encodingFile": "msr_imm.xml",
    "mnemonic": "MSR",
    "features": [
      "FEAT_VHE",
      "FEAT_UAO",
      "FEAT_PAN",
      "FEAT_NMI",
      "FEAT_EBEP",
      "FEAT_DIT",
      "FEAT_SME",
      "FEAT_MTE",
      "FEAT_SSBS"
    ]
  }
];
