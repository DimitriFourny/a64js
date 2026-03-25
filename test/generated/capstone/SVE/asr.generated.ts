export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 26,
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
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 28,
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
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 30,
    "word": 76554464,
    "asmText": "movprfx z0.s, p0/z, z7.s",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 32,
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
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 60,
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
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 62,
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
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 64,
    "word": 76554464,
    "asmText": "movprfx z0.s, p0/z, z7.s",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 66,
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
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 0,
    "word": 70225920,
    "asmText": "asr z0.b, z0.b, #1",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 1,
    "word": 69768191,
    "asmText": "asr z31.b, z31.b, #8",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 2,
    "word": 71274496,
    "asmText": "asr z0.h, z0.h, #1",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 3,
    "word": 70292479,
    "asmText": "asr z31.h, z31.h, #16",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 4,
    "word": 75468800,
    "asmText": "asr z0.s, z0.s, #1",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 5,
    "word": 73438207,
    "asmText": "asr z31.s, z31.s, #32",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 6,
    "word": 83857408,
    "asmText": "asr z0.d, z0.d, #1",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 7,
    "word": 77632511,
    "asmText": "asr z31.d, z31.d, #64",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 8,
    "word": 67142112,
    "asmText": "asr z0.b, p0/m, z0.b, #1",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 9,
    "word": 67141919,
    "asmText": "asr z31.b, p0/m, z31.b, #8",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 10,
    "word": 67142624,
    "asmText": "asr z0.h, p0/m, z0.h, #1",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 11,
    "word": 67142175,
    "asmText": "asr z31.h, p0/m, z31.h, #16",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 12,
    "word": 71336928,
    "asmText": "asr z0.s, p0/m, z0.s, #1",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 13,
    "word": 71335967,
    "asmText": "asr z31.s, p0/m, z31.s, #32",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 14,
    "word": 79725536,
    "asmText": "asr z0.d, p0/m, z0.d, #1",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 15,
    "word": 75530271,
    "asmText": "asr z31.d, p0/m, z31.d, #64",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 16,
    "word": 68190208,
    "asmText": "asr z0.b, p0/m, z0.b, z0.b",
    "encodingFile": "asr_z_p_zz.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 17,
    "word": 72384512,
    "asmText": "asr z0.h, p0/m, z0.h, z0.h",
    "encodingFile": "asr_z_p_zz.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 18,
    "word": 76578816,
    "asmText": "asr z0.s, p0/m, z0.s, z0.s",
    "encodingFile": "asr_z_p_zz.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 19,
    "word": 80773120,
    "asmText": "asr z0.d, p0/m, z0.d, z0.d",
    "encodingFile": "asr_z_p_zz.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 20,
    "word": 68714528,
    "asmText": "asr z0.b, p0/m, z0.b, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 21,
    "word": 72908832,
    "asmText": "asr z0.h, p0/m, z0.h, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 22,
    "word": 77103136,
    "asmText": "asr z0.s, p0/m, z0.s, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 23,
    "word": 69369888,
    "asmText": "asr z0.b, z1.b, z2.d",
    "encodingFile": "asr_z_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 24,
    "word": 73564192,
    "asmText": "asr z0.h, z1.h, z2.d",
    "encodingFile": "asr_z_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 25,
    "word": 77758496,
    "asmText": "asr z0.s, z1.s, z2.d",
    "encodingFile": "asr_z_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 27,
    "word": 75530271,
    "asmText": "asr z31.d, p0/m, z31.d, #64",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 29,
    "word": 75530271,
    "asmText": "asr z31.d, p0/m, z31.d, #64",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 31,
    "word": 77103136,
    "asmText": "asr z0.s, p0/m, z0.s, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 33,
    "word": 77103136,
    "asmText": "asr z0.s, p0/m, z0.s, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 34,
    "word": 70225920,
    "asmText": "asr z0.b, z0.b, #1",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 35,
    "word": 69768191,
    "asmText": "asr z31.b, z31.b, #8",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 36,
    "word": 71274496,
    "asmText": "asr z0.h, z0.h, #1",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 37,
    "word": 70292479,
    "asmText": "asr z31.h, z31.h, #16",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 38,
    "word": 75468800,
    "asmText": "asr z0.s, z0.s, #1",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 39,
    "word": 73438207,
    "asmText": "asr z31.s, z31.s, #32",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 40,
    "word": 83857408,
    "asmText": "asr z0.d, z0.d, #1",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 41,
    "word": 77632511,
    "asmText": "asr z31.d, z31.d, #64",
    "encodingFile": "asr_z_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 42,
    "word": 67142112,
    "asmText": "asr z0.b, p0/m, z0.b, #1",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 43,
    "word": 67141919,
    "asmText": "asr z31.b, p0/m, z31.b, #8",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 44,
    "word": 67142624,
    "asmText": "asr z0.h, p0/m, z0.h, #1",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 45,
    "word": 67142175,
    "asmText": "asr z31.h, p0/m, z31.h, #16",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 46,
    "word": 71336928,
    "asmText": "asr z0.s, p0/m, z0.s, #1",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 47,
    "word": 71335967,
    "asmText": "asr z31.s, p0/m, z31.s, #32",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 48,
    "word": 79725536,
    "asmText": "asr z0.d, p0/m, z0.d, #1",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 49,
    "word": 75530271,
    "asmText": "asr z31.d, p0/m, z31.d, #64",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 50,
    "word": 68190208,
    "asmText": "asr z0.b, p0/m, z0.b, z0.b",
    "encodingFile": "asr_z_p_zz.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 51,
    "word": 72384512,
    "asmText": "asr z0.h, p0/m, z0.h, z0.h",
    "encodingFile": "asr_z_p_zz.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 52,
    "word": 76578816,
    "asmText": "asr z0.s, p0/m, z0.s, z0.s",
    "encodingFile": "asr_z_p_zz.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 53,
    "word": 80773120,
    "asmText": "asr z0.d, p0/m, z0.d, z0.d",
    "encodingFile": "asr_z_p_zz.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 54,
    "word": 68714528,
    "asmText": "asr z0.b, p0/m, z0.b, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 55,
    "word": 72908832,
    "asmText": "asr z0.h, p0/m, z0.h, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 56,
    "word": 77103136,
    "asmText": "asr z0.s, p0/m, z0.s, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 57,
    "word": 69369888,
    "asmText": "asr z0.b, z1.b, z2.d",
    "encodingFile": "asr_z_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 58,
    "word": 73564192,
    "asmText": "asr z0.h, z1.h, z2.d",
    "encodingFile": "asr_z_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 59,
    "word": 77758496,
    "asmText": "asr z0.s, z1.s, z2.d",
    "encodingFile": "asr_z_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 61,
    "word": 75530271,
    "asmText": "asr z31.d, p0/m, z31.d, #64",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 63,
    "word": 75530271,
    "asmText": "asr z31.d, p0/m, z31.d, #64",
    "encodingFile": "asr_z_p_zi.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 65,
    "word": 77103136,
    "asmText": "asr z0.s, p0/m, z0.s, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/asr.s.yaml",
    "caseIndex": 67,
    "word": 77103136,
    "asmText": "asr z0.s, p0/m, z0.s, z1.d",
    "encodingFile": "asr_z_p_zw.xml",
    "mnemonic": "ASR",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];
