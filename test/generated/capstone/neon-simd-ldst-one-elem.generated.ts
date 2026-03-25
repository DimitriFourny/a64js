export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 0,
    "word": 1296089088,
    "asmText": "ld1r { v0.16b }, [x0]",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 1,
    "word": 1296090607,
    "asmText": "ld1r { v15.8h }, [x15]",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 2,
    "word": 1296092159,
    "asmText": "ld1r { v31.4s }, [sp]",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 3,
    "word": 1296092160,
    "asmText": "ld1r { v0.2d }, [x0]",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 4,
    "word": 222347264,
    "asmText": "ld1r { v0.8b }, [x0]",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 5,
    "word": 222348783,
    "asmText": "ld1r { v15.4h }, [x15]",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 6,
    "word": 222350335,
    "asmText": "ld1r { v31.2s }, [sp]",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 7,
    "word": 222350336,
    "asmText": "ld1r { v0.1d }, [x0]",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 8,
    "word": 1298186240,
    "asmText": "ld2r { v0.16b, v1.16b }, [x0]",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 9,
    "word": 1298187759,
    "asmText": "ld2r { v15.8h, v16.8h }, [x15]",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 10,
    "word": 1298189311,
    "asmText": "ld2r { v31.4s, v0.4s }, [sp]",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 11,
    "word": 1298189312,
    "asmText": "ld2r { v0.2d, v1.2d }, [x0]",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 12,
    "word": 224444416,
    "asmText": "ld2r { v0.8b, v1.8b }, [x0]",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 13,
    "word": 224445935,
    "asmText": "ld2r { v15.4h, v16.4h }, [x15]",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 14,
    "word": 224447487,
    "asmText": "ld2r { v31.2s, v0.2s }, [sp]",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 15,
    "word": 224448511,
    "asmText": "ld2r { v31.1d, v0.1d }, [sp]",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 16,
    "word": 1296097280,
    "asmText": "ld3r { v0.16b, v1.16b, v2.16b }, [x0]",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 17,
    "word": 1296098799,
    "asmText": "ld3r { v15.8h, v16.8h, v17.8h }, [x15]",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 18,
    "word": 1296100351,
    "asmText": "ld3r { v31.4s, v0.4s, v1.4s }, [sp]",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 19,
    "word": 1296100352,
    "asmText": "ld3r { v0.2d, v1.2d, v2.2d }, [x0]",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 20,
    "word": 222355456,
    "asmText": "ld3r { v0.8b, v1.8b, v2.8b }, [x0]",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 21,
    "word": 222356975,
    "asmText": "ld3r { v15.4h, v16.4h, v17.4h }, [x15]",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 22,
    "word": 222358527,
    "asmText": "ld3r { v31.2s, v0.2s, v1.2s }, [sp]",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 23,
    "word": 222359551,
    "asmText": "ld3r { v31.1d, v0.1d, v1.1d }, [sp]",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 24,
    "word": 1298194432,
    "asmText": "ld4r { v0.16b, v1.16b, v2.16b, v3.16b }, [x0]",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 25,
    "word": 1298195951,
    "asmText": "ld4r { v15.8h, v16.8h, v17.8h, v18.8h }, [x15]",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 26,
    "word": 1298197503,
    "asmText": "ld4r { v31.4s, v0.4s, v1.4s, v2.4s }, [sp]",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 27,
    "word": 1298197504,
    "asmText": "ld4r { v0.2d, v1.2d, v2.2d, v3.2d }, [x0]",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 28,
    "word": 224452608,
    "asmText": "ld4r { v0.8b, v1.8b, v2.8b, v3.8b }, [x0]",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 29,
    "word": 224454127,
    "asmText": "ld4r { v15.4h, v16.4h, v17.4h, v18.4h }, [x15]",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 30,
    "word": 224455679,
    "asmText": "ld4r { v31.2s, v0.2s, v1.2s, v2.2s }, [sp]",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 31,
    "word": 224456703,
    "asmText": "ld4r { v31.1d, v0.1d, v1.1d, v2.1d }, [sp]",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 32,
    "word": 1296040960,
    "asmText": "ld1 { v0.b }[9], [x0]",
    "encodingFile": "ld1_advsimd_sngl.xml",
    "mnemonic": "LD1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 33,
    "word": 1296062959,
    "asmText": "ld1 { v15.h }[7], [x15]",
    "encodingFile": "ld1_advsimd_sngl.xml",
    "mnemonic": "LD1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 34,
    "word": 1296077823,
    "asmText": "ld1 { v31.s }[3], [sp]",
    "encodingFile": "ld1_advsimd_sngl.xml",
    "mnemonic": "LD1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 35,
    "word": 1296073728,
    "asmText": "ld1 { v0.d }[1], [x0]",
    "encodingFile": "ld1_advsimd_sngl.xml",
    "mnemonic": "LD1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 36,
    "word": 1298138112,
    "asmText": "ld2 { v0.b, v1.b }[9], [x0]",
    "encodingFile": "ld2_advsimd_sngl.xml",
    "mnemonic": "LD2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 37,
    "word": 1298160111,
    "asmText": "ld2 { v15.h, v16.h }[7], [x15]",
    "encodingFile": "ld2_advsimd_sngl.xml",
    "mnemonic": "LD2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 38,
    "word": 1298174975,
    "asmText": "ld2 { v31.s, v0.s }[3], [sp]",
    "encodingFile": "ld2_advsimd_sngl.xml",
    "mnemonic": "LD2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 39,
    "word": 1298170880,
    "asmText": "ld2 { v0.d, v1.d }[1], [x0]",
    "encodingFile": "ld2_advsimd_sngl.xml",
    "mnemonic": "LD2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 40,
    "word": 1296049152,
    "asmText": "ld3 { v0.b, v1.b, v2.b }[9], [x0]",
    "encodingFile": "ld3_advsimd_sngl.xml",
    "mnemonic": "LD3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 41,
    "word": 1296071151,
    "asmText": "ld3 { v15.h, v16.h, v17.h }[7], [x15]",
    "encodingFile": "ld3_advsimd_sngl.xml",
    "mnemonic": "LD3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 42,
    "word": 1296086015,
    "asmText": "ld3 { v31.s, v0.s, v1.s }[3], [sp]",
    "encodingFile": "ld3_advsimd_sngl.xml",
    "mnemonic": "LD3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 43,
    "word": 1296081920,
    "asmText": "ld3 { v0.d, v1.d, v2.d }[1], [x0]",
    "encodingFile": "ld3_advsimd_sngl.xml",
    "mnemonic": "LD3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 44,
    "word": 1298146304,
    "asmText": "ld4 { v0.b, v1.b, v2.b, v3.b }[9], [x0]",
    "encodingFile": "ld4_advsimd_sngl.xml",
    "mnemonic": "LD4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 45,
    "word": 1298168303,
    "asmText": "ld4 { v15.h, v16.h, v17.h, v18.h }[7], [x15]",
    "encodingFile": "ld4_advsimd_sngl.xml",
    "mnemonic": "LD4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 46,
    "word": 1298183167,
    "asmText": "ld4 { v31.s, v0.s, v1.s, v2.s }[3], [sp]",
    "encodingFile": "ld4_advsimd_sngl.xml",
    "mnemonic": "LD4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 47,
    "word": 1298179072,
    "asmText": "ld4 { v0.d, v1.d, v2.d, v3.d }[1], [x0]",
    "encodingFile": "ld4_advsimd_sngl.xml",
    "mnemonic": "LD4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 48,
    "word": 1291846656,
    "asmText": "st1 { v0.b }[9], [x0]",
    "encodingFile": "st1_advsimd_sngl.xml",
    "mnemonic": "ST1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 49,
    "word": 1291868655,
    "asmText": "st1 { v15.h }[7], [x15]",
    "encodingFile": "st1_advsimd_sngl.xml",
    "mnemonic": "ST1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 50,
    "word": 1291883519,
    "asmText": "st1 { v31.s }[3], [sp]",
    "encodingFile": "st1_advsimd_sngl.xml",
    "mnemonic": "ST1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 51,
    "word": 1291879424,
    "asmText": "st1 { v0.d }[1], [x0]",
    "encodingFile": "st1_advsimd_sngl.xml",
    "mnemonic": "ST1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 52,
    "word": 1293943808,
    "asmText": "st2 { v0.b, v1.b }[9], [x0]",
    "encodingFile": "st2_advsimd_sngl.xml",
    "mnemonic": "ST2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 53,
    "word": 1293965807,
    "asmText": "st2 { v15.h, v16.h }[7], [x15]",
    "encodingFile": "st2_advsimd_sngl.xml",
    "mnemonic": "ST2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 54,
    "word": 1293980671,
    "asmText": "st2 { v31.s, v0.s }[3], [sp]",
    "encodingFile": "st2_advsimd_sngl.xml",
    "mnemonic": "ST2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 55,
    "word": 1293976576,
    "asmText": "st2 { v0.d, v1.d }[1], [x0]",
    "encodingFile": "st2_advsimd_sngl.xml",
    "mnemonic": "ST2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 56,
    "word": 1291854848,
    "asmText": "st3 { v0.b, v1.b, v2.b }[9], [x0]",
    "encodingFile": "st3_advsimd_sngl.xml",
    "mnemonic": "ST3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 57,
    "word": 1291876847,
    "asmText": "st3 { v15.h, v16.h, v17.h }[7], [x15]",
    "encodingFile": "st3_advsimd_sngl.xml",
    "mnemonic": "ST3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 58,
    "word": 1291891711,
    "asmText": "st3 { v31.s, v0.s, v1.s }[3], [sp]",
    "encodingFile": "st3_advsimd_sngl.xml",
    "mnemonic": "ST3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 59,
    "word": 1291887616,
    "asmText": "st3 { v0.d, v1.d, v2.d }[1], [x0]",
    "encodingFile": "st3_advsimd_sngl.xml",
    "mnemonic": "ST3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 60,
    "word": 1293952000,
    "asmText": "st4 { v0.b, v1.b, v2.b, v3.b }[9], [x0]",
    "encodingFile": "st4_advsimd_sngl.xml",
    "mnemonic": "ST4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 61,
    "word": 1293973999,
    "asmText": "st4 { v15.h, v16.h, v17.h, v18.h }[7], [x15]",
    "encodingFile": "st4_advsimd_sngl.xml",
    "mnemonic": "ST4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 62,
    "word": 1293988863,
    "asmText": "st4 { v31.s, v0.s, v1.s, v2.s }[3], [sp]",
    "encodingFile": "st4_advsimd_sngl.xml",
    "mnemonic": "ST4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 63,
    "word": 1293984768,
    "asmText": "st4 { v0.d, v1.d, v2.d, v3.d }[1], [x0]",
    "encodingFile": "st4_advsimd_sngl.xml",
    "mnemonic": "ST4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 64,
    "word": 1306509312,
    "asmText": "ld1r { v0.16b }, [x0], #1",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 65,
    "word": 1306510831,
    "asmText": "ld1r { v15.8h }, [x15], #2",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 66,
    "word": 1306512383,
    "asmText": "ld1r { v31.4s }, [sp], #4",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 67,
    "word": 1306512384,
    "asmText": "ld1r { v0.2d }, [x0], #8",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 68,
    "word": 230735872,
    "asmText": "ld1r { v0.8b }, [x0], x0",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 69,
    "word": 230802927,
    "asmText": "ld1r { v15.4h }, [x15], x1",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 70,
    "word": 230870015,
    "asmText": "ld1r { v31.2s }, [sp], x2",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 71,
    "word": 230935552,
    "asmText": "ld1r { v0.1d }, [x0], x3",
    "encodingFile": "ld1r_advsimd.xml",
    "mnemonic": "LD1R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 72,
    "word": 1308606464,
    "asmText": "ld2r { v0.16b, v1.16b }, [x0], #2",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 73,
    "word": 1308607983,
    "asmText": "ld2r { v15.8h, v16.8h }, [x15], #4",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 74,
    "word": 1308609535,
    "asmText": "ld2r { v31.4s, v0.4s }, [sp], #8",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 75,
    "word": 1308609536,
    "asmText": "ld2r { v0.2d, v1.2d }, [x0], #16",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 76,
    "word": 233226240,
    "asmText": "ld2r { v0.8b, v1.8b }, [x0], x6",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 77,
    "word": 233293295,
    "asmText": "ld2r { v15.4h, v16.4h }, [x15], x7",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 78,
    "word": 233425919,
    "asmText": "ld2r { v31.2s, v0.2s }, [sp], x9",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 79,
    "word": 233163807,
    "asmText": "ld2r { v31.1d, v0.1d }, [x0], x5",
    "encodingFile": "ld2r_advsimd.xml",
    "mnemonic": "LD2R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 80,
    "word": 1305075712,
    "asmText": "ld3r { v0.16b, v1.16b, v2.16b }, [x0], x9",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 81,
    "word": 1304880623,
    "asmText": "ld3r { v15.8h, v16.8h, v17.8h }, [x15], x6",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 82,
    "word": 1304947711,
    "asmText": "ld3r { v31.4s, v0.4s, v1.4s }, [sp], x7",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 83,
    "word": 1304816640,
    "asmText": "ld3r { v0.2d, v1.2d, v2.2d }, [x0], x5",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 84,
    "word": 232775680,
    "asmText": "ld3r { v0.8b, v1.8b, v2.8b }, [x0], #3",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 85,
    "word": 232777199,
    "asmText": "ld3r { v15.4h, v16.4h, v17.4h }, [x15], #6",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 86,
    "word": 232778751,
    "asmText": "ld3r { v31.2s, v0.2s, v1.2s }, [sp], #12",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 87,
    "word": 232779775,
    "asmText": "ld3r { v31.1d, v0.1d, v1.1d }, [sp], #24",
    "encodingFile": "ld3r_advsimd.xml",
    "mnemonic": "LD3R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 88,
    "word": 1308614656,
    "asmText": "ld4r { v0.16b, v1.16b, v2.16b, v3.16b }, [x0], #4",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 89,
    "word": 1308616175,
    "asmText": "ld4r { v15.8h, v16.8h, v17.8h, v18.8h }, [x15], #8",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 90,
    "word": 1308617727,
    "asmText": "ld4r { v31.4s, v0.4s, v1.4s, v2.4s }, [sp], #16",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 91,
    "word": 1308617728,
    "asmText": "ld4r { v0.2d, v1.2d, v2.2d, v3.2d }, [x0], #32",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 92,
    "word": 233168896,
    "asmText": "ld4r { v0.8b, v1.8b, v2.8b, v3.8b }, [x0], x5",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 93,
    "word": 233432559,
    "asmText": "ld4r { v15.4h, v16.4h, v17.4h, v18.4h }, [x15], x9",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 94,
    "word": 234810367,
    "asmText": "ld4r { v31.2s, v0.2s, v1.2s, v2.2s }, [sp], x30",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 95,
    "word": 233304063,
    "asmText": "ld4r { v31.1d, v0.1d, v1.1d, v2.1d }, [sp], x7",
    "encodingFile": "ld4r_advsimd.xml",
    "mnemonic": "LD4R",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 96,
    "word": 1306461184,
    "asmText": "ld1 { v0.b }[9], [x0], #1",
    "encodingFile": "ld1_advsimd_sngl.xml",
    "mnemonic": "LD1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 97,
    "word": 1305041391,
    "asmText": "ld1 { v15.h }[7], [x15], x9",
    "encodingFile": "ld1_advsimd_sngl.xml",
    "mnemonic": "LD1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 98,
    "word": 1304859647,
    "asmText": "ld1 { v31.s }[3], [sp], x6",
    "encodingFile": "ld1_advsimd_sngl.xml",
    "mnemonic": "LD1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 99,
    "word": 1306493952,
    "asmText": "ld1 { v0.d }[1], [x0], #8",
    "encodingFile": "ld1_advsimd_sngl.xml",
    "mnemonic": "LD1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 100,
    "word": 1306723328,
    "asmText": "ld2 { v0.b, v1.b }[9], [x0], x3",
    "encodingFile": "ld2_advsimd_sngl.xml",
    "mnemonic": "LD2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 101,
    "word": 1308580335,
    "asmText": "ld2 { v15.h, v16.h }[7], [x15], #4",
    "encodingFile": "ld2_advsimd_sngl.xml",
    "mnemonic": "LD2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 102,
    "word": 1308595199,
    "asmText": "ld2 { v31.s, v0.s }[3], [sp], #8",
    "encodingFile": "ld2_advsimd_sngl.xml",
    "mnemonic": "LD2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 103,
    "word": 1306559488,
    "asmText": "ld2 { v0.d, v1.d }[1], [x0], x0",
    "encodingFile": "ld2_advsimd_sngl.xml",
    "mnemonic": "LD2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 104,
    "word": 1306469376,
    "asmText": "ld3 { v0.b, v1.b, v2.b }[9], [x0], #3",
    "encodingFile": "ld3_advsimd_sngl.xml",
    "mnemonic": "LD3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 105,
    "word": 1306491375,
    "asmText": "ld3 { v15.h, v16.h, v17.h }[7], [x15], #6",
    "encodingFile": "ld3_advsimd_sngl.xml",
    "mnemonic": "LD3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 106,
    "word": 1304671231,
    "asmText": "ld3 { v31.s, v0.s, v1.s }[3], [sp], x3",
    "encodingFile": "ld3_advsimd_sngl.xml",
    "mnemonic": "LD3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 107,
    "word": 1304863744,
    "asmText": "ld3 { v0.d, v1.d, v2.d }[1], [x0], x6",
    "encodingFile": "ld3_advsimd_sngl.xml",
    "mnemonic": "LD3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 108,
    "word": 1306862592,
    "asmText": "ld4 { v0.b, v1.b, v2.b, v3.b }[9], [x0], x5",
    "encodingFile": "ld4_advsimd_sngl.xml",
    "mnemonic": "LD4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 109,
    "word": 1307015663,
    "asmText": "ld4 { v15.h, v16.h, v17.h, v18.h }[7], [x15], x7",
    "encodingFile": "ld4_advsimd_sngl.xml",
    "mnemonic": "LD4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 110,
    "word": 1308603391,
    "asmText": "ld4 { v31.s, v0.s, v1.s, v2.s }[3], [sp], #16",
    "encodingFile": "ld4_advsimd_sngl.xml",
    "mnemonic": "LD4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 111,
    "word": 1308599296,
    "asmText": "ld4 { v0.d, v1.d, v2.d, v3.d }[1], [x0], #32",
    "encodingFile": "ld4_advsimd_sngl.xml",
    "mnemonic": "LD4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 112,
    "word": 1302266880,
    "asmText": "st1 { v0.b }[9], [x0], #1",
    "encodingFile": "st1_advsimd_sngl.xml",
    "mnemonic": "ST1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 113,
    "word": 1300847087,
    "asmText": "st1 { v15.h }[7], [x15], x9",
    "encodingFile": "st1_advsimd_sngl.xml",
    "mnemonic": "ST1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 114,
    "word": 1300665343,
    "asmText": "st1 { v31.s }[3], [sp], x6",
    "encodingFile": "st1_advsimd_sngl.xml",
    "mnemonic": "ST1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 115,
    "word": 1302299648,
    "asmText": "st1 { v0.d }[1], [x0], #8",
    "encodingFile": "st1_advsimd_sngl.xml",
    "mnemonic": "ST1",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 116,
    "word": 1302529024,
    "asmText": "st2 { v0.b, v1.b }[9], [x0], x3",
    "encodingFile": "st2_advsimd_sngl.xml",
    "mnemonic": "ST2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 117,
    "word": 1304386031,
    "asmText": "st2 { v15.h, v16.h }[7], [x15], #4",
    "encodingFile": "st2_advsimd_sngl.xml",
    "mnemonic": "ST2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 118,
    "word": 1304400895,
    "asmText": "st2 { v31.s, v0.s }[3], [sp], #8",
    "encodingFile": "st2_advsimd_sngl.xml",
    "mnemonic": "ST2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 119,
    "word": 1302365184,
    "asmText": "st2 { v0.d, v1.d }[1], [x0], x0",
    "encodingFile": "st2_advsimd_sngl.xml",
    "mnemonic": "ST2",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 120,
    "word": 1302275072,
    "asmText": "st3 { v0.b, v1.b, v2.b }[9], [x0], #3",
    "encodingFile": "st3_advsimd_sngl.xml",
    "mnemonic": "ST3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 121,
    "word": 1302297071,
    "asmText": "st3 { v15.h, v16.h, v17.h }[7], [x15], #6",
    "encodingFile": "st3_advsimd_sngl.xml",
    "mnemonic": "ST3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 122,
    "word": 1300476927,
    "asmText": "st3 { v31.s, v0.s, v1.s }[3], [sp], x3",
    "encodingFile": "st3_advsimd_sngl.xml",
    "mnemonic": "ST3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 123,
    "word": 1300669440,
    "asmText": "st3 { v0.d, v1.d, v2.d }[1], [x0], x6",
    "encodingFile": "st3_advsimd_sngl.xml",
    "mnemonic": "ST3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 124,
    "word": 1302668288,
    "asmText": "st4 { v0.b, v1.b, v2.b, v3.b }[9], [x0], x5",
    "encodingFile": "st4_advsimd_sngl.xml",
    "mnemonic": "ST4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 125,
    "word": 1302821359,
    "asmText": "st4 { v15.h, v16.h, v17.h, v18.h }[7], [x15], x7",
    "encodingFile": "st4_advsimd_sngl.xml",
    "mnemonic": "ST4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 126,
    "word": 1304409087,
    "asmText": "st4 { v31.s, v0.s, v1.s, v2.s }[3], [sp], #16",
    "encodingFile": "st4_advsimd_sngl.xml",
    "mnemonic": "ST4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "sourceFile": "neon-simd-ldst-one-elem.s.yaml",
    "caseIndex": 127,
    "word": 1304404992,
    "asmText": "st4 { v0.d, v1.d, v2.d, v3.d }[1], [x0], #32",
    "encodingFile": "st4_advsimd_sngl.xml",
    "mnemonic": "ST4",
    "features": [
      "FEAT_AdvSIMD"
    ]
  }
];
