export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/pmullt-128.s.yaml",
    "caseIndex": 0,
    "word": 1159688157,
    "asmText": "pmullt z29.q, z30.d, z31.d",
    "encodingFile": "pmullt_z_zz.xml",
    "mnemonic": "PMULLT",
    "features": [
      "FEAT_SVE_PMULL128"
    ]
  }
];
