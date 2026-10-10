// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv9.4a-ebep.s.yaml",
    "caseIndex": 0,
    "word": 3577234210,
    "asmText": "mrs x2, PM",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv9.4a-ebep.s.yaml",
    "caseIndex": 1,
    "word": 3575137059,
    "asmText": "msr PM, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv9.4a-ebep.s.yaml",
    "caseIndex": 2,
    "word": 3573629727,
    "asmText": "msr PM, #1",
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

export const UNSUPPORTED_CAPSTONE_CASES = [];
