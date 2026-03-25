import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "LDAPR",
    "encodingId": "LDAPR_32L_ldapstl_writeback",
    "mnemonic": "LDAPR",
    "className": "Post-index",
    "fileName": "ldapr.xml",
    "mask": 4294966272,
    "value": 2579499008,
    "bitCount": 22,
    "fields": [
      {
        "name": "size",
        "lsb": 30,
        "width": 2
      },
      {
        "name": "L",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_LRCPC3"
    ],
    "guards": []
  },
  {
    "instructionId": "LDAPR",
    "encodingId": "LDAPR_64L_ldapstl_writeback",
    "mnemonic": "LDAPR",
    "className": "Post-index",
    "fileName": "ldapr.xml",
    "mask": 4294966272,
    "value": 3653240832,
    "bitCount": 22,
    "fields": [
      {
        "name": "size",
        "lsb": 30,
        "width": 2
      },
      {
        "name": "L",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_LRCPC3"
    ],
    "guards": []
  },
  {
    "instructionId": "LDAPR",
    "encodingId": "LDAPR_32L_memop",
    "mnemonic": "LDAPR",
    "className": "No offset",
    "fileName": "ldapr.xml",
    "mask": 4292934656,
    "value": 3097542656,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 30,
        "width": 2
      },
      {
        "name": "VR",
        "lsb": 26,
        "width": 1
      },
      {
        "name": "A",
        "lsb": 23,
        "width": 1
      },
      {
        "name": "R",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Rs",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "o3",
        "lsb": 15,
        "width": 1
      },
      {
        "name": "opc",
        "lsb": 12,
        "width": 3
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_LRCPC"
    ],
    "guards": []
  },
  {
    "instructionId": "LDAPR",
    "encodingId": "LDAPR_64L_memop",
    "mnemonic": "LDAPR",
    "className": "No offset",
    "fileName": "ldapr.xml",
    "mask": 4292934656,
    "value": 4171284480,
    "bitCount": 17,
    "fields": [
      {
        "name": "size",
        "lsb": 30,
        "width": 2
      },
      {
        "name": "VR",
        "lsb": 26,
        "width": 1
      },
      {
        "name": "A",
        "lsb": 23,
        "width": 1
      },
      {
        "name": "R",
        "lsb": 22,
        "width": 1
      },
      {
        "name": "Rs",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "o3",
        "lsb": 15,
        "width": 1
      },
      {
        "name": "opc",
        "lsb": 12,
        "width": 3
      },
      {
        "name": "Rn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Rt",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_LRCPC"
    ],
    "guards": []
  }
];
