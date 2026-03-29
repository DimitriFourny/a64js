export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/feature-sve2p1-implies-sve2.s.yaml",
    "caseIndex": 0,
    "word": 1140989984,
    "asmText": "cmla z0.b, z1.b, z2.b, #0",
    "encodingFile": "cmla_z_zzz.xml",
    "mnemonic": "CMLA",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
