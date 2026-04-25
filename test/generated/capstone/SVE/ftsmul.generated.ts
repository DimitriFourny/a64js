export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ftsmul.s.yaml",
    "caseIndex": 0,
    "word": 1700727840,
    "asmText": "ftsmul z0.h, z1.h, z31.h",
    "encodingFile": "ftsmul_z_zz.xml",
    "mnemonic": "FTSMUL",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ftsmul.s.yaml",
    "caseIndex": 1,
    "word": 1704922144,
    "asmText": "ftsmul z0.s, z1.s, z31.s",
    "encodingFile": "ftsmul_z_zz.xml",
    "mnemonic": "FTSMUL",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ftsmul.s.yaml",
    "caseIndex": 2,
    "word": 1709116448,
    "asmText": "ftsmul z0.d, z1.d, z31.d",
    "encodingFile": "ftsmul_z_zz.xml",
    "mnemonic": "FTSMUL",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
