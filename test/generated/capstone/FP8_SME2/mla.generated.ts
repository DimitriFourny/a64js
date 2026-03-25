export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 0,
    "word": 3241151488,
    "asmText": "fmlal za.h[w8, 0:1], z0.b, z0.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 1,
    "word": 3242160103,
    "asmText": "fmlal za.h[w11, 14:15], z31.b, z15.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 2,
    "word": 3250585600,
    "asmText": "fmlal za.h[w8, 0:1], z0.b, z0.b[0]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 3,
    "word": 3251630063,
    "asmText": "fmlal za.h[w11, 14:15], z31.b, z15.b[15]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 4,
    "word": 3240101892,
    "asmText": "fmlal za.h[w8, 0:1, vgx2], { z0.b, z1.b }, z0.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 5,
    "word": 3240101892,
    "asmText": "fmlal za.h[w8, 0:1, vgx2], { z0.b, z1.b }, z0.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 6,
    "word": 3241110503,
    "asmText": "fmlal za.h[w11, 6:7, vgx2], { z31.b, z0.b }, z15.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 7,
    "word": 3241110503,
    "asmText": "fmlal za.h[w11, 6:7, vgx2], { z31.b, z0.b }, z15.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 8,
    "word": 3248490528,
    "asmText": "fmlal za.h[w8, 0:1, vgx2], { z0.b, z1.b }, { z0.b, z1.b }",
    "encodingFile": "fmlal_za_z8z8w.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 9,
    "word": 3248490528,
    "asmText": "fmlal za.h[w8, 0:1, vgx2], { z0.b, z1.b }, { z0.b, z1.b }",
    "encodingFile": "fmlal_za_z8z8w.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 10,
    "word": 3250482147,
    "asmText": "fmlal za.h[w11, 6:7, vgx2], { z30.b, z31.b }, { z30.b, z31.b }",
    "encodingFile": "fmlal_za_z8z8w.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 11,
    "word": 3250482147,
    "asmText": "fmlal za.h[w11, 6:7, vgx2], { z30.b, z31.b }, { z30.b, z31.b }",
    "encodingFile": "fmlal_za_z8z8w.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 12,
    "word": 3247444016,
    "asmText": "fmlal za.h[w8, 0:1, vgx2], { z0.b, z1.b }, z0.b[0]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 13,
    "word": 3247444016,
    "asmText": "fmlal za.h[w8, 0:1, vgx2], { z0.b, z1.b }, z0.b[0]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 14,
    "word": 3248455679,
    "asmText": "fmlal za.h[w11, 6:7, vgx2], { z30.b, z31.b }, z15.b[15]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 15,
    "word": 3248455679,
    "asmText": "fmlal za.h[w11, 6:7, vgx2], { z30.b, z31.b }, z15.b[15]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 16,
    "word": 3241150468,
    "asmText": "fmlal za.h[w8, 0:1, vgx4], { z0.b - z3.b }, z0.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 17,
    "word": 3241150468,
    "asmText": "fmlal za.h[w8, 0:1, vgx4], { z0.b - z3.b }, z0.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 18,
    "word": 3242159079,
    "asmText": "fmlal za.h[w11, 6:7, vgx4], { z31.b, z0.b, z1.b, z2.b }, z15.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 19,
    "word": 3242159079,
    "asmText": "fmlal za.h[w11, 6:7, vgx4], { z31.b, z0.b, z1.b, z2.b }, z15.b",
    "encodingFile": "fmlal_za_z8z8v.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 20,
    "word": 3248556064,
    "asmText": "fmlal za.h[w8, 0:1, vgx4], { z0.b - z3.b }, { z0.b - z3.b }",
    "encodingFile": "fmlal_za_z8z8w.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 21,
    "word": 3248556064,
    "asmText": "fmlal za.h[w8, 0:1, vgx4], { z0.b - z3.b }, { z0.b - z3.b }",
    "encodingFile": "fmlal_za_z8z8w.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 22,
    "word": 3250416547,
    "asmText": "fmlal za.h[w11, 6:7, vgx4], { z28.b - z31.b }, { z28.b - z31.b }",
    "encodingFile": "fmlal_za_z8z8w.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 23,
    "word": 3250416547,
    "asmText": "fmlal za.h[w11, 6:7, vgx4], { z28.b - z31.b }, { z28.b - z31.b }",
    "encodingFile": "fmlal_za_z8z8w.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 24,
    "word": 3247476768,
    "asmText": "fmlal za.h[w8, 0:1, vgx4], { z0.b - z3.b }, z0.b[0]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 25,
    "word": 3247476768,
    "asmText": "fmlal za.h[w8, 0:1, vgx4], { z0.b - z3.b }, z0.b[0]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 26,
    "word": 3248488367,
    "asmText": "fmlal za.h[w11, 6:7, vgx4], { z28.b - z31.b }, z15.b[15]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 27,
    "word": 3248488367,
    "asmText": "fmlal za.h[w11, 6:7, vgx4], { z28.b - z31.b }, z15.b[15]",
    "encodingFile": "fmlal_za_z8z8i.xml",
    "mnemonic": "FMLAL",
    "features": [
      "FEAT_SME_F8F16"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 28,
    "word": 3241149440,
    "asmText": "fmlall za.s[w8, 0:3], z0.b, z0.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 29,
    "word": 3242158051,
    "asmText": "fmlall za.s[w11, 12:15], z31.b, z15.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 30,
    "word": 3242196992,
    "asmText": "fmlall za.s[w8, 0:3], z0.b, z0.b[0]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 31,
    "word": 3243245539,
    "asmText": "fmlall za.s[w11, 12:15], z31.b, z15.b[15]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 32,
    "word": 3240099842,
    "asmText": "fmlall za.s[w8, 0:3,  vgx2], { z0.b, z1.b }, z0.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 33,
    "word": 3240099842,
    "asmText": "fmlall za.s[w8, 0:3,  vgx2], { z0.b, z1.b }, z0.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 34,
    "word": 3241108451,
    "asmText": "fmlall za.s[w11, 4:7,  vgx2], { z31.b, z0.b }, z15.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 35,
    "word": 3241108451,
    "asmText": "fmlall za.s[w11, 4:7,  vgx2], { z31.b, z0.b }, z15.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 36,
    "word": 3248488480,
    "asmText": "fmlall za.s[w8, 0:3, vgx2], { z0.b, z1.b }, { z0.b, z1.b }",
    "encodingFile": "fmlall_za32_z8z8w.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 37,
    "word": 3248488480,
    "asmText": "fmlall za.s[w8, 0:3, vgx2], { z0.b, z1.b }, { z0.b, z1.b }",
    "encodingFile": "fmlall_za32_z8z8w.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 38,
    "word": 3250480097,
    "asmText": "fmlall za.s[w11, 4:7, vgx2], { z30.b, z31.b }, { z30.b, z31.b }",
    "encodingFile": "fmlall_za32_z8z8w.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 39,
    "word": 3250480097,
    "asmText": "fmlall za.s[w11, 4:7, vgx2], { z30.b, z31.b }, { z30.b, z31.b }",
    "encodingFile": "fmlall_za32_z8z8w.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 40,
    "word": 3247439904,
    "asmText": "fmlall za.s[w8, 0:3, vgx2], { z0.b, z1.b }, z0.b[0]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 41,
    "word": 3247439904,
    "asmText": "fmlall za.s[w8, 0:3, vgx2], { z0.b, z1.b }, z0.b[0]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 42,
    "word": 3248451559,
    "asmText": "fmlall za.s[w11, 4:7, vgx2], { z30.b, z31.b }, z15.b[15]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 43,
    "word": 3248451559,
    "asmText": "fmlall za.s[w11, 4:7, vgx2], { z30.b, z31.b }, z15.b[15]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 44,
    "word": 3241148418,
    "asmText": "fmlall za.s[w8, 0:3,  vgx4], { z0.b - z3.b }, z0.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 45,
    "word": 3241148418,
    "asmText": "fmlall za.s[w8, 0:3,  vgx4], { z0.b - z3.b }, z0.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 46,
    "word": 3242157027,
    "asmText": "fmlall za.s[w11, 4:7,  vgx4], { z31.b, z0.b, z1.b, z2.b }, z15.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 47,
    "word": 3242157027,
    "asmText": "fmlall za.s[w11, 4:7,  vgx4], { z31.b, z0.b, z1.b, z2.b }, z15.b",
    "encodingFile": "fmlall_za32_z8z8v.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 48,
    "word": 3248554016,
    "asmText": "fmlall za.s[w8, 0:3, vgx4], { z0.b - z3.b }, { z0.b - z3.b }",
    "encodingFile": "fmlall_za32_z8z8w.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 49,
    "word": 3248554016,
    "asmText": "fmlall za.s[w8, 0:3, vgx4], { z0.b - z3.b }, { z0.b - z3.b }",
    "encodingFile": "fmlall_za32_z8z8w.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 50,
    "word": 3250414497,
    "asmText": "fmlall za.s[w11, 4:7, vgx4], { z28.b - z31.b }, { z28.b - z31.b }",
    "encodingFile": "fmlall_za32_z8z8w.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 51,
    "word": 3250414497,
    "asmText": "fmlall za.s[w11, 4:7, vgx4], { z28.b - z31.b }, { z28.b - z31.b }",
    "encodingFile": "fmlall_za32_z8z8w.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 52,
    "word": 3239084096,
    "asmText": "fmlall za.s[w8, 0:3, vgx4], { z0.b - z3.b }, z0.b[0]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 53,
    "word": 3239084096,
    "asmText": "fmlall za.s[w8, 0:3, vgx4], { z0.b - z3.b }, z0.b[0]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 54,
    "word": 3240095687,
    "asmText": "fmlall za.s[w11, 4:7, vgx4], { z28.b - z31.b }, z15.b[15]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  },
  {
    "sourceFile": "FP8_SME2/mla.s.yaml",
    "caseIndex": 55,
    "word": 3240095687,
    "asmText": "fmlall za.s[w11, 4:7, vgx4], { z28.b - z31.b }, z15.b[15]",
    "encodingFile": "fmlall_za32_z8z8i.xml",
    "mnemonic": "FMLALL",
    "features": [
      "FEAT_SME_F8F32"
    ]
  }
];
