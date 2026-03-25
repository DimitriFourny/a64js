export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 6,
    "word": 80755908,
    "asmText": "movprfx z4.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 8,
    "word": 69254340,
    "asmText": "movprfx z4, z6",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 16,
    "word": 80755908,
    "asmText": "movprfx z4.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 18,
    "word": 69254340,
    "asmText": "movprfx z4, z6",
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
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 0,
    "word": 72392704,
    "asmText": "sxtb z0.h, p0/m, z0.h",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 1,
    "word": 76587008,
    "asmText": "sxtb z0.s, p0/m, z0.s",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 2,
    "word": 80781312,
    "asmText": "sxtb z0.d, p0/m, z0.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 3,
    "word": 72400895,
    "asmText": "sxtb z31.h, p7/m, z31.h",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 4,
    "word": 76595199,
    "asmText": "sxtb z31.s, p7/m, z31.s",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 5,
    "word": 80789503,
    "asmText": "sxtb z31.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 7,
    "word": 80789476,
    "asmText": "sxtb z4.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 9,
    "word": 80789476,
    "asmText": "sxtb z4.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 10,
    "word": 72392704,
    "asmText": "sxtb z0.h, p0/m, z0.h",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 11,
    "word": 76587008,
    "asmText": "sxtb z0.s, p0/m, z0.s",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 12,
    "word": 80781312,
    "asmText": "sxtb z0.d, p0/m, z0.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 13,
    "word": 72400895,
    "asmText": "sxtb z31.h, p7/m, z31.h",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 14,
    "word": 76595199,
    "asmText": "sxtb z31.s, p7/m, z31.s",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 15,
    "word": 80789503,
    "asmText": "sxtb z31.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 17,
    "word": 80789476,
    "asmText": "sxtb z4.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/sxtb.s.yaml",
    "caseIndex": 19,
    "word": 80789476,
    "asmText": "sxtb z4.d, p7/m, z31.d",
    "encodingFile": "sxtb_z_p_z.xml",
    "mnemonic": "SXTB",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
