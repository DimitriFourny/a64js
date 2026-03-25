export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/aesimc.s.yaml",
    "caseIndex": 0,
    "word": 1159783424,
    "asmText": "aesimc z0.b, z0.b",
    "encodingFile": "aesimc_z_z.xml",
    "mnemonic": "AESIMC",
    "features": [
      "FEAT_SVE_AES"
    ]
  },
  {
    "sourceFile": "SVE2/aesimc.s.yaml",
    "caseIndex": 1,
    "word": 1159783455,
    "asmText": "aesimc z31.b, z31.b",
    "encodingFile": "aesimc_z_z.xml",
    "mnemonic": "AESIMC",
    "features": [
      "FEAT_SVE_AES"
    ]
  }
];
