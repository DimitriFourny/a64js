// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/fexpa.s.yaml",
    "caseIndex": 0,
    "word": 73448416,
    "asmText": "fexpa z0.h, z31.h",
    "encodingFile": "fexpa_z_z.xml",
    "mnemonic": "FEXPA",
    "features": [
      "FEAT_SVE",
      "FEAT_SSVE_FEXPA"
    ]
  },
  {
    "sourceFile": "SVE/fexpa.s.yaml",
    "caseIndex": 1,
    "word": 77642720,
    "asmText": "fexpa z0.s, z31.s",
    "encodingFile": "fexpa_z_z.xml",
    "mnemonic": "FEXPA",
    "features": [
      "FEAT_SVE",
      "FEAT_SSVE_FEXPA"
    ]
  },
  {
    "sourceFile": "SVE/fexpa.s.yaml",
    "caseIndex": 2,
    "word": 81837024,
    "asmText": "fexpa z0.d, z31.d",
    "encodingFile": "fexpa_z_z.xml",
    "mnemonic": "FEXPA",
    "features": [
      "FEAT_SVE",
      "FEAT_SSVE_FEXPA"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
