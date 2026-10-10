// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2p1/bfclamp.s.yaml",
    "caseIndex": 0,
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
    "sourceFile": "SVE2p1/bfclamp.s.yaml",
    "caseIndex": 1,
    "word": 1680352695,
    "asmText": "bfclamp z23.h, z13.h, z8.h",
    "encodingFile": "bfclamp_z_zz.xml",
    "mnemonic": "BFCLAMP",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfclamp.s.yaml",
    "caseIndex": 2,
    "word": 1679827968,
    "asmText": "bfclamp z0.h, z0.h, z0.h",
    "encodingFile": "bfclamp_z_zz.xml",
    "mnemonic": "BFCLAMP",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfclamp.s.yaml",
    "caseIndex": 3,
    "word": 1681204565,
    "asmText": "bfclamp z21.h, z10.h, z21.h",
    "encodingFile": "bfclamp_z_zz.xml",
    "mnemonic": "BFCLAMP",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfclamp.s.yaml",
    "caseIndex": 4,
    "word": 1680352695,
    "asmText": "bfclamp z23.h, z13.h, z8.h",
    "encodingFile": "bfclamp_z_zz.xml",
    "mnemonic": "BFCLAMP",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  },
  {
    "sourceFile": "SVE2p1/bfclamp.s.yaml",
    "caseIndex": 5,
    "word": 1681860607,
    "asmText": "bfclamp z31.h, z31.h, z31.h",
    "encodingFile": "bfclamp_z_zz.xml",
    "mnemonic": "BFCLAMP",
    "features": [
      "FEAT_SVE_B16B16"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
