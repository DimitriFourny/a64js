export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8_SME2/mopa.s.yaml",
    "caseIndex": 0,
    "word": 2157969416,
    "asmText": "fmopa za0.h, p0/m, p0/m, z0.b, z0.b",
    "encodingFile": "fmopa_za16_pp_z8z8.xml",
    "mnemonic": "FMOPA",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mopa.s.yaml",
    "caseIndex": 1,
    "word": 2160066537,
    "asmText": "fmopa za1.h, p7/m, p7/m, z31.b, z31.b",
    "encodingFile": "fmopa_za16_pp_z8z8.xml",
    "mnemonic": "FMOPA",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mopa.s.yaml",
    "caseIndex": 2,
    "word": 2157969408,
    "asmText": "fmopa za0.s, p0/m, p0/m, z0.b, z0.b",
    "encodingFile": "fmopa_za32_pp_z8z8.xml",
    "mnemonic": "FMOPA",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mopa.s.yaml",
    "caseIndex": 3,
    "word": 2160066531,
    "asmText": "fmopa za3.s, p7/m, p7/m, z31.b, z31.b",
    "encodingFile": "fmopa_za32_pp_z8z8.xml",
    "mnemonic": "FMOPA",
    "features": [
      "FEAT_SME_F8F32"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
