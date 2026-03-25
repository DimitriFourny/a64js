export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 7,
    "word": 80748773,
    "asmText": "movprfx z5.d, p0/z, z7.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 9,
    "word": 69254373,
    "asmText": "movprfx z5, z7",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 18,
    "word": 80748773,
    "asmText": "movprfx z5.d, p0/z, z7.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 20,
    "word": 69254373,
    "asmText": "movprfx z5, z7",
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
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 0,
    "word": 1699913728,
    "asmText": "scvtf z0.h, p0/m, z0.h",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 1,
    "word": 1700044800,
    "asmText": "scvtf z0.h, p0/m, z0.s",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 2,
    "word": 1700175872,
    "asmText": "scvtf z0.h, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 3,
    "word": 1704239104,
    "asmText": "scvtf z0.s, p0/m, z0.s",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 4,
    "word": 1708433408,
    "asmText": "scvtf z0.s, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 5,
    "word": 1708171264,
    "asmText": "scvtf z0.d, p0/m, z0.s",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 6,
    "word": 1708564480,
    "asmText": "scvtf z0.d, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 8,
    "word": 1708564485,
    "asmText": "scvtf z5.d, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 10,
    "word": 1708564485,
    "asmText": "scvtf z5.d, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 11,
    "word": 1699913728,
    "asmText": "scvtf z0.h, p0/m, z0.h",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 12,
    "word": 1700044800,
    "asmText": "scvtf z0.h, p0/m, z0.s",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 13,
    "word": 1700175872,
    "asmText": "scvtf z0.h, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 14,
    "word": 1704239104,
    "asmText": "scvtf z0.s, p0/m, z0.s",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 15,
    "word": 1708433408,
    "asmText": "scvtf z0.s, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 16,
    "word": 1708171264,
    "asmText": "scvtf z0.d, p0/m, z0.s",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 17,
    "word": 1708564480,
    "asmText": "scvtf z0.d, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 19,
    "word": 1708564485,
    "asmText": "scvtf z5.d, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/scvtf.s.yaml",
    "caseIndex": 21,
    "word": 1708564485,
    "asmText": "scvtf z5.d, p0/m, z0.d",
    "encodingFile": "scvtf_z_p_z.xml",
    "mnemonic": "SCVTF",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
