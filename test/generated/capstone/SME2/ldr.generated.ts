export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SME2/ldr.s.yaml",
    "caseIndex": 0,
    "word": 3776937984,
    "asmText": "ldr zt0, [x0]",
    "encodingFile": "ldr_zt_br.xml",
    "mnemonic": "LDR",
    "features": [
      "FEAT_SME2"
    ]
  },
  {
    "sourceFile": "SME2/ldr.s.yaml",
    "caseIndex": 1,
    "word": 3776938304,
    "asmText": "ldr zt0, [x10]",
    "encodingFile": "ldr_zt_br.xml",
    "mnemonic": "LDR",
    "features": [
      "FEAT_SME2"
    ]
  },
  {
    "sourceFile": "SME2/ldr.s.yaml",
    "caseIndex": 2,
    "word": 3776938400,
    "asmText": "ldr zt0, [x13]",
    "encodingFile": "ldr_zt_br.xml",
    "mnemonic": "LDR",
    "features": [
      "FEAT_SME2"
    ]
  },
  {
    "sourceFile": "SME2/ldr.s.yaml",
    "caseIndex": 3,
    "word": 3776938976,
    "asmText": "ldr zt0, [sp]",
    "encodingFile": "ldr_zt_br.xml",
    "mnemonic": "LDR",
    "features": [
      "FEAT_SME2"
    ]
  }
];
