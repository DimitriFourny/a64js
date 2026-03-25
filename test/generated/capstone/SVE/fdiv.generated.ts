export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 3,
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
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 5,
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
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 10,
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
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 12,
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
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 0,
    "word": 1699586016,
    "asmText": "fdiv z0.h, p7/m, z0.h, z31.h",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 1,
    "word": 1703780320,
    "asmText": "fdiv z0.s, p7/m, z0.s, z31.s",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 2,
    "word": 1707974624,
    "asmText": "fdiv z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 4,
    "word": 1707974624,
    "asmText": "fdiv z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 6,
    "word": 1707974624,
    "asmText": "fdiv z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 7,
    "word": 1699586016,
    "asmText": "fdiv z0.h, p7/m, z0.h, z31.h",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 8,
    "word": 1703780320,
    "asmText": "fdiv z0.s, p7/m, z0.s, z31.s",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 9,
    "word": 1707974624,
    "asmText": "fdiv z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 11,
    "word": 1707974624,
    "asmText": "fdiv z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/fdiv.s.yaml",
    "caseIndex": 13,
    "word": 1707974624,
    "asmText": "fdiv z0.d, p7/m, z0.d, z31.d",
    "encodingFile": "fdiv_z_p_zz.xml",
    "mnemonic": "FDIV",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
