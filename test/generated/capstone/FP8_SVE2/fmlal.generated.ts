// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 0,
    "word": 1679839232,
    "asmText": "fmlalb z0.h, z0.b, z0.b[0]",
    "encodingFile": "fmlalb_z_z8z8z8i.xml",
    "mnemonic": "FMLALB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 1,
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
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 2,
    "word": 1680367031,
    "asmText": "fmlalb z23.h, z13.b, z0.b[7]",
    "encodingFile": "fmlalb_z_z8z8z8i.xml",
    "mnemonic": "FMLALB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 3,
    "word": 1681874943,
    "asmText": "fmlalb z31.h, z31.b, z7.b[15]",
    "encodingFile": "fmlalb_z_z8z8z8i.xml",
    "mnemonic": "FMLALB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 4,
    "word": 1688242176,
    "asmText": "fmlalb z0.h, z0.b, z0.b",
    "encodingFile": "fmlalb_z_z8z8z8.xml",
    "mnemonic": "FMLALB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 5,
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
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 6,
    "word": 1688766903,
    "asmText": "fmlalb z23.h, z13.b, z8.b",
    "encodingFile": "fmlalb_z_z8z8z8.xml",
    "mnemonic": "FMLALB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 7,
    "word": 1690274815,
    "asmText": "fmlalb z31.h, z31.b, z31.b",
    "encodingFile": "fmlalb_z_z8z8z8.xml",
    "mnemonic": "FMLALB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 8,
    "word": 1688227840,
    "asmText": "fmlalt z0.h, z0.b, z0.b[0]",
    "encodingFile": "fmlalt_z_z8z8z8i.xml",
    "mnemonic": "FMLALT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 9,
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
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 10,
    "word": 1688755639,
    "asmText": "fmlalt z23.h, z13.b, z0.b[7]",
    "encodingFile": "fmlalt_z_z8z8z8i.xml",
    "mnemonic": "FMLALT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 11,
    "word": 1690263551,
    "asmText": "fmlalt z31.h, z31.b, z7.b[15]",
    "encodingFile": "fmlalt_z_z8z8z8i.xml",
    "mnemonic": "FMLALT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 12,
    "word": 1688246272,
    "asmText": "fmlalt z0.h, z0.b, z0.b",
    "encodingFile": "fmlalt_z_z8z8z8.xml",
    "mnemonic": "FMLALT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 13,
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
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 14,
    "word": 1688770999,
    "asmText": "fmlalt z23.h, z13.b, z8.b",
    "encodingFile": "fmlalt_z_z8z8z8.xml",
    "mnemonic": "FMLALT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlal.s.yaml",
    "caseIndex": 15,
    "word": 1690278911,
    "asmText": "fmlalt z31.h, z31.b, z31.b",
    "encodingFile": "fmlalt_z_z8z8z8.xml",
    "mnemonic": "FMLALT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
