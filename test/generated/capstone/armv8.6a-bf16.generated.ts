// Generated from test/reference/capstone; do not use this file as reference input.
export const SUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 0,
    "word": 776272994,
    "asmText": "bfdot v2.2s, v3.4h, v4.4h",
    "encodingFile": "bfdot_advsimd_vec.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 1,
    "word": 1850014818,
    "asmText": "bfdot v2.4s, v3.8h, v4.8h",
    "encodingFile": "bfdot_advsimd_vec.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 2,
    "word": 256176226,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[0]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 3,
    "word": 258273378,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[1]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 4,
    "word": 256178274,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[2]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 5,
    "word": 258275426,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[3]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 6,
    "word": 1329918050,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[0]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 7,
    "word": 1332015202,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[1]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 8,
    "word": 1329920098,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[2]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 9,
    "word": 1332017250,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[3]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 10,
    "word": 1850010722,
    "asmText": "bfmmla v2.4s, v3.8h, v4.8h",
    "encodingFile": "bfmmla_advsimd.xml",
    "mnemonic": "BFMMLA",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 11,
    "word": 1850076291,
    "asmText": "bfmmla v3.4s, v4.8h, v5.8h",
    "encodingFile": "bfmmla_advsimd.xml",
    "mnemonic": "BFMMLA",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 12,
    "word": 245459109,
    "asmText": "bfcvtn v5.4h, v5.4s",
    "encodingFile": "bfcvtn_advsimd.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 13,
    "word": 1319200933,
    "asmText": "bfcvtn2 v5.8h, v5.4s",
    "encodingFile": "bfcvtn_advsimd.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 14,
    "word": 509821029,
    "asmText": "bfcvt h5, s3",
    "encodingFile": "bfcvt_float.xml",
    "mnemonic": "BFCVT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 15,
    "word": 785317546,
    "asmText": "bfmlalb v10.4s, v21.8h, v14.8h",
    "encodingFile": "bfmlal_advsimd_vec.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 16,
    "word": 1858797013,
    "asmText": "bfmlalt v21.4s, v14.8h, v10.8h",
    "encodingFile": "bfmlal_advsimd_vec.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 17,
    "word": 266007214,
    "asmText": "bfmlalb v14.4s, v21.8h, v10.h[1]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 18,
    "word": 267055790,
    "asmText": "bfmlalb v14.4s, v21.8h, v10.h[2]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 19,
    "word": 268106414,
    "asmText": "bfmlalb v14.4s, v21.8h, v10.h[7]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 20,
    "word": 1340010837,
    "asmText": "bfmlalt v21.4s, v10.8h, v14.h[1]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 21,
    "word": 1341059413,
    "asmText": "bfmlalt v21.4s, v10.8h, v14.h[2]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 22,
    "word": 1342110037,
    "asmText": "bfmlalt v21.4s, v10.8h, v14.h[7]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 23,
    "word": 776272994,
    "asmText": "bfdot v2.2s, v3.4h, v4.4h",
    "encodingFile": "bfdot_advsimd_vec.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 24,
    "word": 1850014818,
    "asmText": "bfdot v2.4s, v3.8h, v4.8h",
    "encodingFile": "bfdot_advsimd_vec.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 25,
    "word": 256176226,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[0]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 26,
    "word": 258273378,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[1]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 27,
    "word": 256178274,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[2]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 28,
    "word": 258275426,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[3]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 29,
    "word": 1329918050,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[0]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 30,
    "word": 1332015202,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[1]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 31,
    "word": 1329920098,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[2]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 32,
    "word": 1332017250,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[3]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 33,
    "word": 1850010722,
    "asmText": "bfmmla v2.4s, v3.8h, v4.8h",
    "encodingFile": "bfmmla_advsimd.xml",
    "mnemonic": "BFMMLA",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 34,
    "word": 1850076291,
    "asmText": "bfmmla v3.4s, v4.8h, v5.8h",
    "encodingFile": "bfmmla_advsimd.xml",
    "mnemonic": "BFMMLA",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 35,
    "word": 245459109,
    "asmText": "bfcvtn v5.4h, v5.4s",
    "encodingFile": "bfcvtn_advsimd.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 36,
    "word": 1319200933,
    "asmText": "bfcvtn2 v5.8h, v5.4s",
    "encodingFile": "bfcvtn_advsimd.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 37,
    "word": 509821029,
    "asmText": "bfcvt h5, s3",
    "encodingFile": "bfcvt_float.xml",
    "mnemonic": "BFCVT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 38,
    "word": 785317546,
    "asmText": "bfmlalb v10.4s, v21.8h, v14.8h",
    "encodingFile": "bfmlal_advsimd_vec.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 39,
    "word": 1858797013,
    "asmText": "bfmlalt v21.4s, v14.8h, v10.8h",
    "encodingFile": "bfmlal_advsimd_vec.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 40,
    "word": 266007214,
    "asmText": "bfmlalb v14.4s, v21.8h, v10.h[1]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 41,
    "word": 267055790,
    "asmText": "bfmlalb v14.4s, v21.8h, v10.h[2]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 42,
    "word": 268106414,
    "asmText": "bfmlalb v14.4s, v21.8h, v10.h[7]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 43,
    "word": 1340010837,
    "asmText": "bfmlalt v21.4s, v10.8h, v14.h[1]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 44,
    "word": 1341059413,
    "asmText": "bfmlalt v21.4s, v10.8h, v14.h[2]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 45,
    "word": 1342110037,
    "asmText": "bfmlalt v21.4s, v10.8h, v14.h[7]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 46,
    "word": 776272994,
    "asmText": "bfdot v2.2s, v3.4h, v4.4h",
    "encodingFile": "bfdot_advsimd_vec.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 47,
    "word": 1850014818,
    "asmText": "bfdot v2.4s, v3.8h, v4.8h",
    "encodingFile": "bfdot_advsimd_vec.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 48,
    "word": 256176226,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[0]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 49,
    "word": 258273378,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[1]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 50,
    "word": 256178274,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[2]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 51,
    "word": 258275426,
    "asmText": "bfdot v2.2s, v3.4h, v4.2h[3]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 52,
    "word": 1329918050,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[0]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 53,
    "word": 1332015202,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[1]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 54,
    "word": 1329920098,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[2]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 55,
    "word": 1332017250,
    "asmText": "bfdot v2.4s, v3.8h, v4.2h[3]",
    "encodingFile": "bfdot_advsimd_elt.xml",
    "mnemonic": "BFDOT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 56,
    "word": 1850010722,
    "asmText": "bfmmla v2.4s, v3.8h, v4.8h",
    "encodingFile": "bfmmla_advsimd.xml",
    "mnemonic": "BFMMLA",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 57,
    "word": 1850076291,
    "asmText": "bfmmla v3.4s, v4.8h, v5.8h",
    "encodingFile": "bfmmla_advsimd.xml",
    "mnemonic": "BFMMLA",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 58,
    "word": 245459109,
    "asmText": "bfcvtn v5.4h, v5.4s",
    "encodingFile": "bfcvtn_advsimd.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 59,
    "word": 1319200933,
    "asmText": "bfcvtn2 v5.8h, v5.4s",
    "encodingFile": "bfcvtn_advsimd.xml",
    "mnemonic": "BFCVTN",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 60,
    "word": 509821029,
    "asmText": "bfcvt h5, s3",
    "encodingFile": "bfcvt_float.xml",
    "mnemonic": "BFCVT",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 61,
    "word": 785317546,
    "asmText": "bfmlalb v10.4s, v21.8h, v14.8h",
    "encodingFile": "bfmlal_advsimd_vec.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 62,
    "word": 1858797013,
    "asmText": "bfmlalt v21.4s, v14.8h, v10.8h",
    "encodingFile": "bfmlal_advsimd_vec.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 63,
    "word": 266007214,
    "asmText": "bfmlalb v14.4s, v21.8h, v10.h[1]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 64,
    "word": 267055790,
    "asmText": "bfmlalb v14.4s, v21.8h, v10.h[2]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 65,
    "word": 268106414,
    "asmText": "bfmlalb v14.4s, v21.8h, v10.h[7]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 66,
    "word": 1340010837,
    "asmText": "bfmlalt v21.4s, v10.8h, v14.h[1]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 67,
    "word": 1341059413,
    "asmText": "bfmlalt v21.4s, v10.8h, v14.h[2]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "sourceFile": "armv8.6a-bf16.s.yaml",
    "caseIndex": 68,
    "word": 1342110037,
    "asmText": "bfmlalt v21.4s, v10.8h, v14.h[7]",
    "encodingFile": "bfmlal_advsimd_elt.xml",
    "mnemonic": "BFMLAL",
    "features": [
      "FEAT_BF16"
    ]
  }
];

export const UNSUPPORTED_CAPSTONE_CASES = [];
