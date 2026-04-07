export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/bfmax.s.yaml",
    "caseIndex": 0,
    "word": 72429559,
    "asmText": "movprfx z23.h, p3/m, z31.h",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfmax.s.yaml",
    "caseIndex": 1,
    "word": 1694928311,
    "asmText": "bfmax z23.h, p3/m, z23.h, z13.h",
    "encodingFile": "bfmax_z_p_zz.xml",
    "mnemonic": "BFMAX",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfmax.s.yaml",
    "caseIndex": 2,
    "word": 69255159,
    "asmText": "movprfx z23, z31",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfmax.s.yaml",
    "caseIndex": 3,
    "word": 1694928311,
    "asmText": "bfmax z23.h, p3/m, z23.h, z13.h",
    "encodingFile": "bfmax_z_p_zz.xml",
    "mnemonic": "BFMAX",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfmax.s.yaml",
    "caseIndex": 4,
    "word": 1694924800,
    "asmText": "bfmax z0.h, p0/m, z0.h, z0.h",
    "encodingFile": "bfmax_z_p_zz.xml",
    "mnemonic": "BFMAX",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfmax.s.yaml",
    "caseIndex": 5,
    "word": 1694930261,
    "asmText": "bfmax z21.h, p5/m, z21.h, z10.h",
    "encodingFile": "bfmax_z_p_zz.xml",
    "mnemonic": "BFMAX",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfmax.s.yaml",
    "caseIndex": 6,
    "word": 1694928311,
    "asmText": "bfmax z23.h, p3/m, z23.h, z13.h",
    "encodingFile": "bfmax_z_p_zz.xml",
    "mnemonic": "BFMAX",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfmax.s.yaml",
    "caseIndex": 7,
    "word": 1694932991,
    "asmText": "bfmax z31.h, p7/m, z31.h, z31.h",
    "encodingFile": "bfmax_z_p_zz.xml",
    "mnemonic": "BFMAX",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
