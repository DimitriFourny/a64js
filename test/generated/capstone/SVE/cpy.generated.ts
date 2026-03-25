export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 0,
    "word": 86548480,
    "asmText": "mov z0.b, p0/m, w0",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 1,
    "word": 90742784,
    "asmText": "mov z0.h, p0/m, w0",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 2,
    "word": 94937088,
    "asmText": "mov z0.s, p0/m, w0",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 3,
    "word": 99131392,
    "asmText": "mov z0.d, p0/m, x0",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 4,
    "word": 86556671,
    "asmText": "mov z31.b, p7/m, wsp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 5,
    "word": 90750975,
    "asmText": "mov z31.h, p7/m, wsp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 6,
    "word": 94945279,
    "asmText": "mov z31.s, p7/m, wsp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 7,
    "word": 99139583,
    "asmText": "mov z31.d, p7/m, sp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 8,
    "word": 86016000,
    "asmText": "mov z0.b, p0/m, b0",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 9,
    "word": 86024191,
    "asmText": "mov z31.b, p7/m, b31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 10,
    "word": 90210304,
    "asmText": "mov z0.h, p0/m, h0",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 11,
    "word": 90218495,
    "asmText": "mov z31.h, p7/m, h31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 12,
    "word": 94404608,
    "asmText": "mov z0.s, p0/m, s0",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 13,
    "word": 94412799,
    "asmText": "mov z31.s, p7/m, s31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 14,
    "word": 98598912,
    "asmText": "mov z0.d, p0/m, d0",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 15,
    "word": 98607103,
    "asmText": "mov z31.d, p7/m, d31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 16,
    "word": 84938757,
    "asmText": "mov z5.b, p0/z, #-128",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 17,
    "word": 84938725,
    "asmText": "mov z5.b, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 18,
    "word": 84942821,
    "asmText": "mov z5.b, p0/z, #-1",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 19,
    "word": 89133077,
    "asmText": "mov z21.h, p0/z, #-128",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 20,
    "word": 89141269,
    "asmText": "mov z21.h, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 21,
    "word": 89141269,
    "asmText": "mov z21.h, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 22,
    "word": 89133045,
    "asmText": "mov z21.h, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 23,
    "word": 89141237,
    "asmText": "mov z21.h, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 24,
    "word": 89141237,
    "asmText": "mov z21.h, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 25,
    "word": 93327381,
    "asmText": "mov z21.s, p0/z, #-128",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 26,
    "word": 93335573,
    "asmText": "mov z21.s, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 27,
    "word": 93335573,
    "asmText": "mov z21.s, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 28,
    "word": 93327349,
    "asmText": "mov z21.s, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 29,
    "word": 93335541,
    "asmText": "mov z21.s, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 30,
    "word": 93335541,
    "asmText": "mov z21.s, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 31,
    "word": 97521685,
    "asmText": "mov z21.d, p0/z, #-128",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 32,
    "word": 97529877,
    "asmText": "mov z21.d, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 33,
    "word": 97529877,
    "asmText": "mov z21.d, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 34,
    "word": 97521653,
    "asmText": "mov z21.d, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 35,
    "word": 97529845,
    "asmText": "mov z21.d, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 36,
    "word": 97529845,
    "asmText": "mov z21.d, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 37,
    "word": 84938720,
    "asmText": "mov z0.b, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 38,
    "word": 89141216,
    "asmText": "mov z0.h, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 39,
    "word": 89141216,
    "asmText": "mov z0.h, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 40,
    "word": 85938181,
    "asmText": "mov z5.b, p15/m, #-128",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 41,
    "word": 90132501,
    "asmText": "mov z21.h, p15/m, #-128",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 42,
    "word": 90140693,
    "asmText": "mov z21.h, p15/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 43,
    "word": 94326805,
    "asmText": "mov z21.s, p15/m, #-128",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 44,
    "word": 94334997,
    "asmText": "mov z21.s, p15/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 45,
    "word": 98521109,
    "asmText": "mov z21.d, p15/m, #-128",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 46,
    "word": 98529301,
    "asmText": "mov z21.d, p15/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 47,
    "word": 80755935,
    "asmText": "movprfx z31.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 48,
    "word": 99139583,
    "asmText": "mov z31.d, p7/m, sp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 49,
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
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 50,
    "word": 99139583,
    "asmText": "mov z31.d, p7/m, sp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 51,
    "word": 80756629,
    "asmText": "movprfx z21.d, p7/z, z28.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 52,
    "word": 98005013,
    "asmText": "mov z21.d, p7/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 53,
    "word": 69255061,
    "asmText": "movprfx z21, z28",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 54,
    "word": 98529301,
    "asmText": "mov z21.d, p15/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 55,
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
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 56,
    "word": 98607076,
    "asmText": "mov z4.d, p7/m, d31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 57,
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
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 58,
    "word": 98607076,
    "asmText": "mov z4.d, p7/m, d31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 59,
    "word": 86548480,
    "asmText": "mov z0.b, p0/m, w0",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 60,
    "word": 90742784,
    "asmText": "mov z0.h, p0/m, w0",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 61,
    "word": 94937088,
    "asmText": "mov z0.s, p0/m, w0",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 62,
    "word": 99131392,
    "asmText": "mov z0.d, p0/m, x0",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 63,
    "word": 86556671,
    "asmText": "mov z31.b, p7/m, wsp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 64,
    "word": 90750975,
    "asmText": "mov z31.h, p7/m, wsp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 65,
    "word": 94945279,
    "asmText": "mov z31.s, p7/m, wsp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 66,
    "word": 99139583,
    "asmText": "mov z31.d, p7/m, sp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 67,
    "word": 86016000,
    "asmText": "mov z0.b, p0/m, b0",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 68,
    "word": 86024191,
    "asmText": "mov z31.b, p7/m, b31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 69,
    "word": 90210304,
    "asmText": "mov z0.h, p0/m, h0",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 70,
    "word": 90218495,
    "asmText": "mov z31.h, p7/m, h31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 71,
    "word": 94404608,
    "asmText": "mov z0.s, p0/m, s0",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 72,
    "word": 94412799,
    "asmText": "mov z31.s, p7/m, s31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 73,
    "word": 98598912,
    "asmText": "mov z0.d, p0/m, d0",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 74,
    "word": 98607103,
    "asmText": "mov z31.d, p7/m, d31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 75,
    "word": 84938757,
    "asmText": "mov z5.b, p0/z, #-128",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 76,
    "word": 84938725,
    "asmText": "mov z5.b, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 77,
    "word": 84942821,
    "asmText": "mov z5.b, p0/z, #-1",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 78,
    "word": 89133077,
    "asmText": "mov z21.h, p0/z, #-128",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 79,
    "word": 89141269,
    "asmText": "mov z21.h, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 80,
    "word": 89141269,
    "asmText": "mov z21.h, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 81,
    "word": 89133045,
    "asmText": "mov z21.h, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 82,
    "word": 89141237,
    "asmText": "mov z21.h, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 83,
    "word": 89141237,
    "asmText": "mov z21.h, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 84,
    "word": 93327381,
    "asmText": "mov z21.s, p0/z, #-128",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 85,
    "word": 93335573,
    "asmText": "mov z21.s, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 86,
    "word": 93335573,
    "asmText": "mov z21.s, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 87,
    "word": 93327349,
    "asmText": "mov z21.s, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 88,
    "word": 93335541,
    "asmText": "mov z21.s, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 89,
    "word": 93335541,
    "asmText": "mov z21.s, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 90,
    "word": 97521685,
    "asmText": "mov z21.d, p0/z, #-128",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 91,
    "word": 97529877,
    "asmText": "mov z21.d, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 92,
    "word": 97529877,
    "asmText": "mov z21.d, p0/z, #-32768",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 93,
    "word": 97521653,
    "asmText": "mov z21.d, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 94,
    "word": 97529845,
    "asmText": "mov z21.d, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 95,
    "word": 97529845,
    "asmText": "mov z21.d, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 96,
    "word": 84938720,
    "asmText": "mov z0.b, p0/z, #127",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 97,
    "word": 89141216,
    "asmText": "mov z0.h, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 98,
    "word": 89141216,
    "asmText": "mov z0.h, p0/z, #32512",
    "encodingFile": "cpy_z_o_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 99,
    "word": 85938181,
    "asmText": "mov z5.b, p15/m, #-128",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 100,
    "word": 90132501,
    "asmText": "mov z21.h, p15/m, #-128",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 101,
    "word": 90140693,
    "asmText": "mov z21.h, p15/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 102,
    "word": 94326805,
    "asmText": "mov z21.s, p15/m, #-128",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 103,
    "word": 94334997,
    "asmText": "mov z21.s, p15/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 104,
    "word": 98521109,
    "asmText": "mov z21.d, p15/m, #-128",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 105,
    "word": 98529301,
    "asmText": "mov z21.d, p15/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 106,
    "word": 80755935,
    "asmText": "movprfx z31.d, p7/z, z6.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 107,
    "word": 99139583,
    "asmText": "mov z31.d, p7/m, sp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 108,
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
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 109,
    "word": 99139583,
    "asmText": "mov z31.d, p7/m, sp",
    "encodingFile": "cpy_z_p_r.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 110,
    "word": 80756629,
    "asmText": "movprfx z21.d, p7/z, z28.d",
    "encodingFile": "movprfx_z_p_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 111,
    "word": 98005013,
    "asmText": "mov z21.d, p7/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 112,
    "word": 69255061,
    "asmText": "movprfx z21, z28",
    "encodingFile": "movprfx_z_z.xml",
    "mnemonic": "MOVPRFX",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 113,
    "word": 98529301,
    "asmText": "mov z21.d, p15/m, #-32768",
    "encodingFile": "cpy_z_p_i.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 114,
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
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 115,
    "word": 98607076,
    "asmText": "mov z4.d, p7/m, d31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  },
  {
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 116,
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
    "sourceFile": "SVE/cpy.s.yaml",
    "caseIndex": 117,
    "word": 98607076,
    "asmText": "mov z4.d, p7/m, d31",
    "encodingFile": "cpy_z_p_v.xml",
    "mnemonic": "CPY",
    "features": [
      "FEAT_SVE || FEAT_SME",
      "FEAT_SVE",
      "FEAT_SME"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
