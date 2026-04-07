export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8_SME2/lut.s.yaml",
    "caseIndex": 0,
    "word": 3230334976,
    "asmText": "luti4 { z0.b - z3.b }, zt0, { z0, z1 }",
    "encodingFile": "luti4_mz4_ztmz2.xml",
    "mnemonic": "LUTI4",
    "features": [
      "FEAT_SME_LUTv2"
    ]
  },
  {
    "sourceFile": "FP8_SME2/lut.s.yaml",
    "caseIndex": 1,
    "word": 3230335964,
    "asmText": "luti4 { z28.b - z31.b }, zt0, { z30, z31 }",
    "encodingFile": "luti4_mz4_ztmz2.xml",
    "mnemonic": "LUTI4",
    "features": [
      "FEAT_SME_LUTv2"
    ]
  },
  {
    "sourceFile": "FP8_SME2/lut.s.yaml",
    "caseIndex": 2,
    "word": 3231383552,
    "asmText": "luti4 { z0.b, z4.b, z8.b, z12.b }, zt0, { z0, z1 }",
    "encodingFile": "luti4_mz4_ztmz2.xml",
    "mnemonic": "LUTI4",
    "features": [
      "FEAT_SME2p1 && FEAT_SME_LUTv2",
      "FEAT_SME2p1",
      "FEAT_SME_LUTv2"
    ]
  },
  {
    "sourceFile": "FP8_SME2/lut.s.yaml",
    "caseIndex": 3,
    "word": 3231384531,
    "asmText": "luti4 { z19.b, z23.b, z27.b, z31.b }, zt0, { z30, z31 }",
    "encodingFile": "luti4_mz4_ztmz2.xml",
    "mnemonic": "LUTI4",
    "features": [
      "FEAT_SME2p1 && FEAT_SME_LUTv2",
      "FEAT_SME2p1",
      "FEAT_SME_LUTv2"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
