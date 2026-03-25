export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 4,
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
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 6,
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
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 12,
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
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 14,
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
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 0,
    "word": 67231712,
    "asmText": "mad z0.b, p7/m, z1.b, z31.b",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 1,
    "word": 71426016,
    "asmText": "mad z0.h, p7/m, z1.h, z31.h",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 2,
    "word": 75620320,
    "asmText": "mad z0.s, p7/m, z1.s, z31.s",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 3,
    "word": 79814624,
    "asmText": "mad z0.d, p7/m, z1.d, z31.d",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 5,
    "word": 79814624,
    "asmText": "mad z0.d, p7/m, z1.d, z31.d",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 7,
    "word": 79814624,
    "asmText": "mad z0.d, p7/m, z1.d, z31.d",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 8,
    "word": 67231712,
    "asmText": "mad z0.b, p7/m, z1.b, z31.b",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 9,
    "word": 71426016,
    "asmText": "mad z0.h, p7/m, z1.h, z31.h",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 10,
    "word": 75620320,
    "asmText": "mad z0.s, p7/m, z1.s, z31.s",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 11,
    "word": 79814624,
    "asmText": "mad z0.d, p7/m, z1.d, z31.d",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 13,
    "word": 79814624,
    "asmText": "mad z0.d, p7/m, z1.d, z31.d",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/mad.s.yaml",
    "caseIndex": 15,
    "word": 79814624,
    "asmText": "mad z0.d, p7/m, z1.d, z31.d",
    "encodingFile": "mad_z_p_zzz.xml",
    "mnemonic": "MAD",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
