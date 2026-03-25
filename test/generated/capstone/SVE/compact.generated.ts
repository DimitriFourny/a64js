export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/compact.s.yaml",
    "caseIndex": 0,
    "word": 94478335,
    "asmText": "compact z31.s, p7, z31.s",
    "encodingFile": "compact_z_p_z.xml",
    "mnemonic": "COMPACT",
    "features": [
      "FEAT_SVE || FEAT_SME2p2",
      "FEAT_SVE",
      "FEAT_SME2p2"
    ]
  },
  {
    "sourceFile": "SVE/compact.s.yaml",
    "caseIndex": 1,
    "word": 98672639,
    "asmText": "compact z31.d, p7, z31.d",
    "encodingFile": "compact_z_p_z.xml",
    "mnemonic": "COMPACT",
    "features": [
      "FEAT_SVE || FEAT_SME2p2",
      "FEAT_SVE",
      "FEAT_SME2p2"
    ]
  }
];
