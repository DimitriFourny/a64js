export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
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
    "sourceFile": "SVE2p1/bfsub.s.yaml",
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
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 1,
    "word": 1694600631,
    "asmText": "bfsub z23.h, p3/m, z23.h, z13.h",
    "encodingFile": "bfsub_z_p_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 3,
    "word": 1694600631,
    "asmText": "bfsub z23.h, p3/m, z23.h, z13.h",
    "encodingFile": "bfsub_z_p_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 4,
    "word": 1694597120,
    "asmText": "bfsub z0.h, p0/m, z0.h, z0.h",
    "encodingFile": "bfsub_z_p_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 5,
    "word": 1694602581,
    "asmText": "bfsub z21.h, p5/m, z21.h, z10.h",
    "encodingFile": "bfsub_z_p_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 6,
    "word": 1694600631,
    "asmText": "bfsub z23.h, p3/m, z23.h, z13.h",
    "encodingFile": "bfsub_z_p_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 7,
    "word": 1694605311,
    "asmText": "bfsub z31.h, p7/m, z31.h, z31.h",
    "encodingFile": "bfsub_z_p_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 8,
    "word": 1694499840,
    "asmText": "bfsub z0.h, z0.h, z0.h",
    "encodingFile": "bfsub_z_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 9,
    "word": 1695876437,
    "asmText": "bfsub z21.h, z10.h, z21.h",
    "encodingFile": "bfsub_z_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 10,
    "word": 1695024567,
    "asmText": "bfsub z23.h, z13.h, z8.h",
    "encodingFile": "bfsub_z_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfsub.s.yaml",
    "caseIndex": 11,
    "word": 1696532479,
    "asmText": "bfsub z31.h, z31.h, z31.h",
    "encodingFile": "bfsub_z_zz.xml",
    "mnemonic": "BFSUB",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  }
];
