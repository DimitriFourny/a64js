import type { GeneratedEncoding } from "../../types.ts";

export const ENCODINGS: GeneratedEncoding[] = [
  {
    "instructionId": "fclamp_z_zz",
    "encodingId": "fclamp_z_zz_",
    "mnemonic": "FCLAMP",
    "className": "SVE2",
    "fileName": "fclamp_z_zz.xml",
    "mask": 4280351744,
    "value": 1679827968,
    "bitCount": 15,
    "fields": [
      {
        "name": "size",
        "lsb": 22,
        "width": 2
      },
      {
        "name": "Zm",
        "lsb": 16,
        "width": 5
      },
      {
        "name": "Zn",
        "lsb": 5,
        "width": 5
      },
      {
        "name": "Zd",
        "lsb": 0,
        "width": 5
      }
    ],
    "features": [
      "FEAT_SME2 || FEAT_SVE2p1"
    ],
    "featureGuards": [
      {
        "feature": "FEAT_SME2 || FEAT_SVE2p1",
        "all": []
      }
    ],
    "guards": []
  }
];
