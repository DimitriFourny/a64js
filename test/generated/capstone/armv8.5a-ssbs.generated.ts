export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 0,
    "word": 3577430722,
    "asmText": "mrs x2, SSBS",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 1,
    "word": 3575333571,
    "asmText": "msr SSBS, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 3,
    "word": 3577430722,
    "asmText": "mrs x2, SSBS",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 4,
    "word": 3575333571,
    "asmText": "msr SSBS, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 6,
    "word": 3577430722,
    "asmText": "mrs x2, SSBS",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 7,
    "word": 3575333571,
    "asmText": "msr SSBS, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 9,
    "word": 3577430722,
    "asmText": "mrs x2, SSBS",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 10,
    "word": 3575333571,
    "asmText": "msr SSBS, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 12,
    "word": 3577430722,
    "asmText": "mrs x2, SSBS",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 13,
    "word": 3575333571,
    "asmText": "msr SSBS, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 15,
    "word": 3577430722,
    "asmText": "mrs x2, SSBS",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 16,
    "word": 3575333571,
    "asmText": "msr SSBS, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 18,
    "word": 3577430722,
    "asmText": "mrs x2, SSBS",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 19,
    "word": 3575333571,
    "asmText": "msr SSBS, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 21,
    "word": 3577430722,
    "asmText": "mrs x2, SSBS",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 22,
    "word": 3575333571,
    "asmText": "msr SSBS, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 24,
    "word": 3577430722,
    "asmText": "mrs x2, SSBS",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 25,
    "word": 3575333571,
    "asmText": "msr SSBS, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 2,
    "word": 3573760319,
    "asmText": "msr SSBS, #1",
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
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 5,
    "word": 3573760319,
    "asmText": "msr SSBS, #1",
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
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 8,
    "word": 3573760319,
    "asmText": "msr SSBS, #1",
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
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 11,
    "word": 3573760319,
    "asmText": "msr SSBS, #1",
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
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 14,
    "word": 3573760319,
    "asmText": "msr SSBS, #1",
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
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 17,
    "word": 3573760319,
    "asmText": "msr SSBS, #1",
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
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 20,
    "word": 3573760319,
    "asmText": "msr SSBS, #1",
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
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 23,
    "word": 3573760319,
    "asmText": "msr SSBS, #1",
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
    "sourceFile": "armv8.5a-ssbs.s.yaml",
    "caseIndex": 26,
    "word": 3573760319,
    "asmText": "msr SSBS, #1",
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
