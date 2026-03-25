export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 4,
    "word": 80748767,
    "asmText": "movprfx z31.d, p0/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 6,
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
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 12,
    "word": 80748767,
    "asmText": "movprfx z31.d, p0/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 14,
    "word": 69254367,
    "asmText": "movprfx z31, z6",
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
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 0,
    "word": 1142128672,
    "asmText": "uhsub z0.b, p0/m, z0.b, z1.b",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 1,
    "word": 1146322976,
    "asmText": "uhsub z0.h, p0/m, z0.h, z1.h",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 2,
    "word": 1150525405,
    "asmText": "uhsub z29.s, p7/m, z29.s, z30.s",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 3,
    "word": 1154719711,
    "asmText": "uhsub z31.d, p7/m, z31.d, z30.d",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 5,
    "word": 1154712543,
    "asmText": "uhsub z31.d, p0/m, z31.d, z30.d",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 7,
    "word": 1154719711,
    "asmText": "uhsub z31.d, p7/m, z31.d, z30.d",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 8,
    "word": 1142128672,
    "asmText": "uhsub z0.b, p0/m, z0.b, z1.b",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 9,
    "word": 1146322976,
    "asmText": "uhsub z0.h, p0/m, z0.h, z1.h",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 10,
    "word": 1150525405,
    "asmText": "uhsub z29.s, p7/m, z29.s, z30.s",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 11,
    "word": 1154719711,
    "asmText": "uhsub z31.d, p7/m, z31.d, z30.d",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 13,
    "word": 1154712543,
    "asmText": "uhsub z31.d, p0/m, z31.d, z30.d",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE2/uhsub.s.yaml",
    "caseIndex": 15,
    "word": 1154719711,
    "asmText": "uhsub z31.d, p7/m, z31.d, z30.d",
    "encodingFile": "uhsub_z_p_zz.xml",
    "mnemonic": "UHSUB",
    "features": [
      "FEAT_SVE2 || FEAT_SME",
      "FEAT_SVE2",
      "FEAT_SME"
    ]
  }
];
