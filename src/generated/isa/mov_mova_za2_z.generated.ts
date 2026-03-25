import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "mov_mova_za2_z",
    "encodingId": "mov_za2_z_b1_mova_za2_z_b1",
    "mnemonic": "MOVA",
    "className": "8-bit",
    "fileName": "mov_mova_za2_z.xml",
    "mask": 4294908984,
    "value": 3221487616,
    "bitCount": 22,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "V",
        "lsb": 15,
        "width": 1
      },
      {
        "name": "Rs",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 6,
        "width": 4
      },
      {
        "name": "off3",
        "lsb": 0,
        "width": 3
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "guards": []
  },
  {
    "instructionId": "mov_mova_za2_z",
    "encodingId": "mov_za2_z_d1_mova_za2_z_d1",
    "mnemonic": "MOVA",
    "className": "64-bit",
    "fileName": "mov_mova_za2_z.xml",
    "mask": 4294908984,
    "value": 3234070528,
    "bitCount": 22,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "V",
        "lsb": 15,
        "width": 1
      },
      {
        "name": "Rs",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 6,
        "width": 4
      },
      {
        "name": "ZAd",
        "lsb": 0,
        "width": 3
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "guards": []
  },
  {
    "instructionId": "mov_mova_za2_z",
    "encodingId": "mov_za2_z_h1_mova_za2_z_h1",
    "mnemonic": "MOVA",
    "className": "16-bit",
    "fileName": "mov_mova_za2_z.xml",
    "mask": 4294908984,
    "value": 3225681920,
    "bitCount": 22,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "V",
        "lsb": 15,
        "width": 1
      },
      {
        "name": "Rs",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 6,
        "width": 4
      },
      {
        "name": "ZAd",
        "lsb": 2,
        "width": 1
      },
      {
        "name": "off2",
        "lsb": 0,
        "width": 2
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "guards": []
  },
  {
    "instructionId": "mov_mova_za2_z",
    "encodingId": "mov_za2_z_w1_mova_za2_z_w1",
    "mnemonic": "MOVA",
    "className": "32-bit",
    "fileName": "mov_mova_za2_z.xml",
    "mask": 4294908984,
    "value": 3229876224,
    "bitCount": 22,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "V",
        "lsb": 15,
        "width": 1
      },
      {
        "name": "Rs",
        "lsb": 13,
        "width": 2
      },
      {
        "name": "Zn",
        "lsb": 6,
        "width": 4
      },
      {
        "name": "ZAd",
        "lsb": 1,
        "width": 2
      },
      {
        "name": "o1",
        "lsb": 0,
        "width": 1
      }
    ],
    "features": [
      "FEAT_SME2"
    ],
    "guards": []
  }
];
