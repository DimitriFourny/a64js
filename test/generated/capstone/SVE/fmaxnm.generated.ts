export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 11,
    "word": 80755935,
    "asmText": "movprfx z31.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 13,
    "word": 69254367,
    "asmText": "movprfx z31, z6",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 15,
    "word": 80755936,
    "asmText": "movprfx z0.d, p7/z, z7.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 17,
    "word": 69254368,
    "asmText": "movprfx z0, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 30,
    "word": 80755935,
    "asmText": "movprfx z31.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 32,
    "word": 69254367,
    "asmText": "movprfx z31, z6",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 34,
    "word": 80755936,
    "asmText": "movprfx z0.d, p7/z, z7.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 36,
    "word": 69254368,
    "asmText": "movprfx z0, z7",
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
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 0,
    "word": 1700560896,
    "asmText": "fmaxnm z0.h, p0/m, z0.h, #0.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 1,
    "word": 1700560896,
    "asmText": "fmaxnm z0.h, p0/m, z0.h, #0.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 2,
    "word": 1704755200,
    "asmText": "fmaxnm z0.s, p0/m, z0.s, #0.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 3,
    "word": 1708949504,
    "asmText": "fmaxnm z0.d, p0/m, z0.d, #0.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 4,
    "word": 1700568127,
    "asmText": "fmaxnm z31.h, p7/m, z31.h, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 5,
    "word": 1700568127,
    "asmText": "fmaxnm z31.h, p7/m, z31.h, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 6,
    "word": 1704762431,
    "asmText": "fmaxnm z31.s, p7/m, z31.s, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 7,
    "word": 1708956735,
    "asmText": "fmaxnm z31.d, p7/m, z31.d, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 8,
    "word": 1698996192,
    "asmText": "fmaxnm z0.h, p7/m, z0.h, z31.h",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 9,
    "word": 1703190496,
    "asmText": "fmaxnm z0.s, p7/m, z0.s, z31.s",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 10,
    "word": 1707384800,
    "asmText": "fmaxnm z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 12,
    "word": 1708956735,
    "asmText": "fmaxnm z31.d, p7/m, z31.d, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 14,
    "word": 1708956735,
    "asmText": "fmaxnm z31.d, p7/m, z31.d, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 16,
    "word": 1707384800,
    "asmText": "fmaxnm z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 18,
    "word": 1707384800,
    "asmText": "fmaxnm z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 19,
    "word": 1700560896,
    "asmText": "fmaxnm z0.h, p0/m, z0.h, #0.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 20,
    "word": 1700560896,
    "asmText": "fmaxnm z0.h, p0/m, z0.h, #0.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 21,
    "word": 1704755200,
    "asmText": "fmaxnm z0.s, p0/m, z0.s, #0.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 22,
    "word": 1708949504,
    "asmText": "fmaxnm z0.d, p0/m, z0.d, #0.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 23,
    "word": 1700568127,
    "asmText": "fmaxnm z31.h, p7/m, z31.h, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 24,
    "word": 1700568127,
    "asmText": "fmaxnm z31.h, p7/m, z31.h, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 25,
    "word": 1704762431,
    "asmText": "fmaxnm z31.s, p7/m, z31.s, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 26,
    "word": 1708956735,
    "asmText": "fmaxnm z31.d, p7/m, z31.d, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 27,
    "word": 1698996192,
    "asmText": "fmaxnm z0.h, p7/m, z0.h, z31.h",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 28,
    "word": 1703190496,
    "asmText": "fmaxnm z0.s, p7/m, z0.s, z31.s",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 29,
    "word": 1707384800,
    "asmText": "fmaxnm z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 31,
    "word": 1708956735,
    "asmText": "fmaxnm z31.d, p7/m, z31.d, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 33,
    "word": 1708956735,
    "asmText": "fmaxnm z31.d, p7/m, z31.d, #1.0",
    "encodingFile": "fmaxnm_z_p_zs.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 35,
    "word": 1707384800,
    "asmText": "fmaxnm z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fmaxnm.s.yaml",
    "caseIndex": 37,
    "word": 1707384800,
    "asmText": "fmaxnm z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fmaxnm_z_p_zz.xml",
    "mnemonic": "FMAXNM",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
