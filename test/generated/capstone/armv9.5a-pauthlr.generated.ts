export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 1,
    "word": 3670123518,
    "asmText": "paciasppc",
    "encodingFile": "paciasppc.xml",
    "mnemonic": "PACIASPPC",
    "features": [
      "FEAT_PAuth_LR",
      "FEAT_BTI"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 2,
    "word": 3670124542,
    "asmText": "pacibsppc",
    "encodingFile": "pacibsppc.xml",
    "mnemonic": "PACIBSPPC",
    "features": [
      "FEAT_PAuth_LR",
      "FEAT_BTI"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 5,
    "word": 4087349279,
    "asmText": "autibsppc #0",
    "encodingFile": "autibsppc_imm.xml",
    "mnemonic": "AUTIBSPPC",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 6,
    "word": 4089446399,
    "asmText": "autibsppc #-262140",
    "encodingFile": "autibsppc_imm.xml",
    "mnemonic": "AUTIBSPPC",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 7,
    "word": 3670118430,
    "asmText": "autiasppc x0",
    "encodingFile": "autiasppcr.xml",
    "mnemonic": "AUTIASPPCR",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 8,
    "word": 3670119486,
    "asmText": "autibsppc x1",
    "encodingFile": "autibsppcr.xml",
    "mnemonic": "AUTIBSPPCR",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 9,
    "word": 3670119422,
    "asmText": "autiasppc xzr",
    "encodingFile": "autiasppcr.xml",
    "mnemonic": "AUTIASPPCR",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 10,
    "word": 3670120446,
    "asmText": "autibsppc xzr",
    "encodingFile": "autibsppcr.xml",
    "mnemonic": "AUTIBSPPCR",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 11,
    "word": 3670117374,
    "asmText": "pacia171615",
    "encodingFile": "pacia171615.xml",
    "mnemonic": "PACIA171615",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 12,
    "word": 3670118398,
    "asmText": "pacib171615",
    "encodingFile": "pacib171615.xml",
    "mnemonic": "PACIB171615",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 13,
    "word": 3670129662,
    "asmText": "autia171615",
    "encodingFile": "autia171615.xml",
    "mnemonic": "AUTIA171615",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 14,
    "word": 3670130686,
    "asmText": "autib171615",
    "encodingFile": "autib171615.xml",
    "mnemonic": "AUTIB171615",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 15,
    "word": 1426063391,
    "asmText": "retaasppc #0",
    "encodingFile": "retasppc_imm.xml",
    "mnemonic": "RETAASPPC",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 16,
    "word": 1428160511,
    "asmText": "retaasppc #-262140",
    "encodingFile": "retasppc_imm.xml",
    "mnemonic": "RETAASPPC",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 17,
    "word": 3596553186,
    "asmText": "retaasppc x2",
    "encodingFile": "retasppcr_reg.xml",
    "mnemonic": "RETAASPPCR",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 18,
    "word": 3596554211,
    "asmText": "retabsppc x3",
    "encodingFile": "retasppcr_reg.xml",
    "mnemonic": "RETABSPPCR",
    "features": [
      "FEAT_PAuth_LR"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 0,
    "word": 3573751839,
    "asmText": "nop",
    "encodingFile": "nop.xml",
    "mnemonic": "NOP",
    "features": []
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 3,
    "word": 3670115326,
    "asmText": "pacnbiasppc",
    "encodingFile": "pacnbiasppc.xml",
    "mnemonic": "PACNBIASPPC",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 4,
    "word": 3670116350,
    "asmText": "pacnbibsppc",
    "encodingFile": "pacnbibsppc.xml",
    "mnemonic": "PACNBIBSPPC",
    "features": [
      "FEAT_PAuth_LR"
    ]
  },
  {
    "sourceFile": "armv9.5a-pauthlr.s.yaml",
    "caseIndex": 19,
    "word": 3573753087,
    "asmText": "pacm",
    "encodingFile": "pacm.xml",
    "mnemonic": "PACM",
    "features": [
      "FEAT_PAuth_LR"
    ]
  }
];
