export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/aesmc.s.yaml",
    "caseIndex": 0,
    "word": 1159782400,
    "asmText": "aesmc z0.b, z0.b",
    "encodingFile": "aesmc_z_z.xml",
    "mnemonic": "AESMC",
    "features": [
      "FEAT_SVE_AES"
    ]
  },
  {
    "sourceFile": "SVE2/aesmc.s.yaml",
    "caseIndex": 1,
    "word": 1159782431,
    "asmText": "aesmc z31.b, z31.b",
    "encodingFile": "aesmc_z_z.xml",
    "mnemonic": "AESMC",
    "features": [
      "FEAT_SVE_AES"
    ]
  }
];
