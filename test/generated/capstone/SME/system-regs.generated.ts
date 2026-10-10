// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 0,
    "word": 3577218211,
    "asmText": "mrs x3, ID_AA64SMFR0_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 1,
    "word": 3577221827,
    "asmText": "mrs x3, SMCR_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 2,
    "word": 3577483971,
    "asmText": "mrs x3, SMCR_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 3,
    "word": 3577615043,
    "asmText": "mrs x3, SMCR_EL3",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 4,
    "word": 3577549507,
    "asmText": "mrs x3, SMCR_EL12",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 5,
    "word": 3577430595,
    "asmText": "mrs x3, SVCR",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 6,
    "word": 3577221763,
    "asmText": "mrs x3, SMPRI_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 7,
    "word": 3577483939,
    "asmText": "mrs x3, SMPRIMAP_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 8,
    "word": 3577282755,
    "asmText": "mrs x3, SMIDR_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 9,
    "word": 3577467043,
    "asmText": "mrs x3, TPIDR2_EL0",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 10,
    "word": 3575124675,
    "asmText": "msr SMCR_EL1, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 11,
    "word": 3575386819,
    "asmText": "msr SMCR_EL2, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 12,
    "word": 3575517891,
    "asmText": "msr SMCR_EL3, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 13,
    "word": 3575452355,
    "asmText": "msr SMCR_EL12, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 14,
    "word": 3575333443,
    "asmText": "msr SVCR, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 15,
    "word": 3575124611,
    "asmText": "msr SMPRI_EL1, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 16,
    "word": 3575386787,
    "asmText": "msr SMPRIMAP_EL2, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 17,
    "word": 3573760639,
    "asmText": "smstop sm",
    "encodingFile": "smstop_msr_imm.xml",
    "mnemonic": "MSR",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 18,
    "word": 3573760895,
    "asmText": "smstart sm",
    "encodingFile": "smstart_msr_imm.xml",
    "mnemonic": "MSR",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 19,
    "word": 3573761151,
    "asmText": "smstop za",
    "encodingFile": "smstop_msr_imm.xml",
    "mnemonic": "MSR",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 20,
    "word": 3573761407,
    "asmText": "smstart za",
    "encodingFile": "smstart_msr_imm.xml",
    "mnemonic": "MSR",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 21,
    "word": 3573761663,
    "asmText": "smstop",
    "encodingFile": "smstop_msr_imm.xml",
    "mnemonic": "MSR",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 22,
    "word": 3573761919,
    "asmText": "smstart",
    "encodingFile": "smstart_msr_imm.xml",
    "mnemonic": "MSR",
    "features": [
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SME/system-regs.s.yaml",
    "caseIndex": 23,
    "word": 3575369891,
    "asmText": "msr TPIDR2_EL0, x3",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
