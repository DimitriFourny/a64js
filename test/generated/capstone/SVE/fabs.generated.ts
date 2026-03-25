export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 3,
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
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 5,
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
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 10,
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
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 12,
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
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 0,
    "word": 73187327,
    "asmText": "fabs z31.h, p7/m, z31.h",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 1,
    "word": 77381631,
    "asmText": "fabs z31.s, p7/m, z31.s",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 2,
    "word": 81575935,
    "asmText": "fabs z31.d, p7/m, z31.d",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 4,
    "word": 81575908,
    "asmText": "fabs z4.d, p7/m, z31.d",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 6,
    "word": 81575908,
    "asmText": "fabs z4.d, p7/m, z31.d",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 7,
    "word": 73187327,
    "asmText": "fabs z31.h, p7/m, z31.h",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 8,
    "word": 77381631,
    "asmText": "fabs z31.s, p7/m, z31.s",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 9,
    "word": 81575935,
    "asmText": "fabs z31.d, p7/m, z31.d",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 11,
    "word": 81575908,
    "asmText": "fabs z4.d, p7/m, z31.d",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fabs.s.yaml",
    "caseIndex": 13,
    "word": 81575908,
    "asmText": "fabs z4.d, p7/m, z31.d",
    "encodingFile": "fabs_z_p_z.xml",
    "mnemonic": "FABS",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
