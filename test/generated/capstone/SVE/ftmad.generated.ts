// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/ftmad.s.yaml",
    "caseIndex": 0,
    "word": 1700234208,
    "asmText": "ftmad z0.h, z0.h, z31.h, #7",
    "encodingFile": "ftmad_z_zzi.xml",
    "mnemonic": "FTMAD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ftmad.s.yaml",
    "caseIndex": 1,
    "word": 1704428512,
    "asmText": "ftmad z0.s, z0.s, z31.s, #7",
    "encodingFile": "ftmad_z_zzi.xml",
    "mnemonic": "FTMAD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ftmad.s.yaml",
    "caseIndex": 2,
    "word": 1708622816,
    "asmText": "ftmad z0.d, z0.d, z31.d, #7",
    "encodingFile": "ftmad_z_zzi.xml",
    "mnemonic": "FTMAD",
    "features": [
      "FEAT_SVE"
    ]
  },
  {
    "sourceFile": "SVE/ftmad.s.yaml",
    "caseIndex": 3,
    "word": 69254368,
    "asmText": "movprfx z0, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/ftmad.s.yaml",
    "caseIndex": 4,
    "word": 1708622816,
    "asmText": "ftmad z0.d, z0.d, z31.d, #7",
    "encodingFile": "ftmad_z_zzi.xml",
    "mnemonic": "FTMAD",
    "features": [
      "FEAT_SVE"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
