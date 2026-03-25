export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 0,
    "word": 3575124512,
    "asmText": "msr TRFCR_EL1, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 1,
    "word": 3575386656,
    "asmText": "msr TRFCR_EL2, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 2,
    "word": 3575452192,
    "asmText": "msr TRFCR_EL12, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 3,
    "word": 3577221664,
    "asmText": "mrs x0, TRFCR_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 4,
    "word": 3577483808,
    "asmText": "mrs x0, TRFCR_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 5,
    "word": 3577549344,
    "asmText": "mrs x0, TRFCR_EL12",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 7,
    "word": 3575124512,
    "asmText": "msr TRFCR_EL1, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 8,
    "word": 3575386656,
    "asmText": "msr TRFCR_EL2, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 9,
    "word": 3575452192,
    "asmText": "msr TRFCR_EL12, x0",
    "encodingFile": "msr_reg.xml",
    "mnemonic": "MSR",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 10,
    "word": 3577221664,
    "asmText": "mrs x0, TRFCR_EL1",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 11,
    "word": 3577483808,
    "asmText": "mrs x0, TRFCR_EL2",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 12,
    "word": 3577549344,
    "asmText": "mrs x0, TRFCR_EL12",
    "encodingFile": "mrs.xml",
    "mnemonic": "MRS",
    "features": []
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 6,
    "word": 3573752415,
    "asmText": "tsb csync",
    "encodingFile": "tsb.xml",
    "mnemonic": "TSB",
    "features": [
      "FEAT_TRF"
    ]
  },
  {
    "sourceFile": "armv8.4a-trace.s.yaml",
    "caseIndex": 13,
    "word": 3573752415,
    "asmText": "tsb csync",
    "encodingFile": "tsb.xml",
    "mnemonic": "TSB",
    "features": [
      "FEAT_TRF"
    ]
  }
];
