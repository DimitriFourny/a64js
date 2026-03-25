export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
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
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
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
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
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
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
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
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 17,
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
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 21,
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
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 25,
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
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 29,
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
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 0,
    "word": 1679867904,
    "asmText": "fmlallbb z0.s, z0.b, z0.b[0]",
    "encodingFile": "fmlallbb_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLBB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 2,
    "word": 1680395703,
    "asmText": "fmlallbb z23.s, z13.b, z0.b[7]",
    "encodingFile": "fmlallbb_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLBB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 3,
    "word": 1681903615,
    "asmText": "fmlallbb z31.s, z31.b, z7.b[15]",
    "encodingFile": "fmlallbb_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLBB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 4,
    "word": 1679853568,
    "asmText": "fmlallbb z0.s, z0.b, z0.b",
    "encodingFile": "fmlallbb_z32_z8z8z8.xml",
    "mnemonic": "FMLALLBB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 6,
    "word": 1680378295,
    "asmText": "fmlallbb z23.s, z13.b, z8.b",
    "encodingFile": "fmlallbb_z32_z8z8z8.xml",
    "mnemonic": "FMLALLBB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 7,
    "word": 1681886207,
    "asmText": "fmlallbb z31.s, z31.b, z31.b",
    "encodingFile": "fmlallbb_z32_z8z8z8.xml",
    "mnemonic": "FMLALLBB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 8,
    "word": 1684062208,
    "asmText": "fmlallbt z0.s, z0.b, z0.b[0]",
    "encodingFile": "fmlallbt_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLBT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 10,
    "word": 1684590007,
    "asmText": "fmlallbt z23.s, z13.b, z0.b[7]",
    "encodingFile": "fmlallbt_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLBT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 11,
    "word": 1686097919,
    "asmText": "fmlallbt z31.s, z31.b, z7.b[15]",
    "encodingFile": "fmlallbt_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLBT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 12,
    "word": 1679857664,
    "asmText": "fmlallbt z0.s, z0.b, z0.b",
    "encodingFile": "fmlallbt_z32_z8z8z8.xml",
    "mnemonic": "FMLALLBT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 14,
    "word": 1680382391,
    "asmText": "fmlallbt z23.s, z13.b, z8.b",
    "encodingFile": "fmlallbt_z32_z8z8z8.xml",
    "mnemonic": "FMLALLBT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 15,
    "word": 1681890303,
    "asmText": "fmlallbt z31.s, z31.b, z31.b",
    "encodingFile": "fmlallbt_z32_z8z8z8.xml",
    "mnemonic": "FMLALLBT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 16,
    "word": 1688256512,
    "asmText": "fmlalltb z0.s, z0.b, z0.b[0]",
    "encodingFile": "fmlalltb_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLTB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 18,
    "word": 1688784311,
    "asmText": "fmlalltb z23.s, z13.b, z0.b[7]",
    "encodingFile": "fmlalltb_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLTB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 19,
    "word": 1690292223,
    "asmText": "fmlalltb z31.s, z31.b, z7.b[15]",
    "encodingFile": "fmlalltb_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLTB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 20,
    "word": 1679861760,
    "asmText": "fmlalltb z0.s, z0.b, z0.b",
    "encodingFile": "fmlalltb_z32_z8z8z8.xml",
    "mnemonic": "FMLALLTB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 22,
    "word": 1680386487,
    "asmText": "fmlalltb z23.s, z13.b, z8.b",
    "encodingFile": "fmlalltb_z32_z8z8z8.xml",
    "mnemonic": "FMLALLTB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 23,
    "word": 1681894399,
    "asmText": "fmlalltb z31.s, z31.b, z31.b",
    "encodingFile": "fmlalltb_z32_z8z8z8.xml",
    "mnemonic": "FMLALLTB",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 24,
    "word": 1692450816,
    "asmText": "fmlalltt z0.s, z0.b, z0.b[0]",
    "encodingFile": "fmlalltt_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLTT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 26,
    "word": 1692978615,
    "asmText": "fmlalltt z23.s, z13.b, z0.b[7]",
    "encodingFile": "fmlalltt_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLTT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 27,
    "word": 1694486527,
    "asmText": "fmlalltt z31.s, z31.b, z7.b[15]",
    "encodingFile": "fmlalltt_z32_z8z8z8i.xml",
    "mnemonic": "FMLALLTT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 28,
    "word": 1679865856,
    "asmText": "fmlalltt z0.s, z0.b, z0.b",
    "encodingFile": "fmlalltt_z32_z8z8z8.xml",
    "mnemonic": "FMLALLTT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 30,
    "word": 1680390583,
    "asmText": "fmlalltt z23.s, z13.b, z8.b",
    "encodingFile": "fmlalltt_z32_z8z8z8.xml",
    "mnemonic": "FMLALLTT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  },
  {
    "sourceFile": "FP8_SVE2/fmlall.s.yaml",
    "caseIndex": 31,
    "word": 1681898495,
    "asmText": "fmlalltt z31.s, z31.b, z31.b",
    "encodingFile": "fmlalltt_z32_z8z8z8.xml",
    "mnemonic": "FMLALLTT",
    "features": [
      "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA"
    ]
  }
];
