export const SUPPORTED_CAPSTONE_CASES = [];

export const UNSUPPORTED_CAPSTONE_CASES = [
  {
    "sourceFile": "arm64-basic-a64-instructions.s.yaml",
    "caseIndex": 0,
    "word": 450117861,
    "asmText": "crc32b w5, w7, w20",
    "encodingFile": "crc32.xml",
    "mnemonic": "CRC32B",
    "features": [
      "FEAT_CRC32"
    ]
  },
  {
    "sourceFile": "arm64-basic-a64-instructions.s.yaml",
    "caseIndex": 1,
    "word": 450775036,
    "asmText": "crc32h w28, wzr, w30",
    "encodingFile": "crc32.xml",
    "mnemonic": "CRC32H",
    "features": [
      "FEAT_CRC32"
    ]
  },
  {
    "sourceFile": "arm64-basic-a64-instructions.s.yaml",
    "caseIndex": 2,
    "word": 448940064,
    "asmText": "crc32w w0, w1, w2",
    "encodingFile": "crc32.xml",
    "mnemonic": "CRC32W",
    "features": [
      "FEAT_CRC32"
    ]
  },
  {
    "sourceFile": "arm64-basic-a64-instructions.s.yaml",
    "caseIndex": 3,
    "word": 2597604647,
    "asmText": "crc32x w7, w9, x20",
    "encodingFile": "crc32.xml",
    "mnemonic": "CRC32X",
    "features": [
      "FEAT_CRC32"
    ]
  },
  {
    "sourceFile": "arm64-basic-a64-instructions.s.yaml",
    "caseIndex": 4,
    "word": 449073321,
    "asmText": "crc32cb w9, w5, w4",
    "encodingFile": "crc32c.xml",
    "mnemonic": "CRC32CB",
    "features": [
      "FEAT_CRC32"
    ]
  },
  {
    "sourceFile": "arm64-basic-a64-instructions.s.yaml",
    "caseIndex": 5,
    "word": 450450989,
    "asmText": "crc32ch w13, w17, w25",
    "encodingFile": "crc32c.xml",
    "mnemonic": "CRC32CH",
    "features": [
      "FEAT_CRC32"
    ]
  },
  {
    "sourceFile": "arm64-basic-a64-instructions.s.yaml",
    "caseIndex": 6,
    "word": 449140863,
    "asmText": "crc32cw wzr, w3, w5",
    "encodingFile": "crc32c.xml",
    "mnemonic": "CRC32CW",
    "features": [
      "FEAT_CRC32"
    ]
  },
  {
    "sourceFile": "arm64-basic-a64-instructions.s.yaml",
    "caseIndex": 7,
    "word": 2598329874,
    "asmText": "crc32cx w18, w16, xzr",
    "encodingFile": "crc32c.xml",
    "mnemonic": "CRC32CX",
    "features": [
      "FEAT_CRC32"
    ]
  }
];
