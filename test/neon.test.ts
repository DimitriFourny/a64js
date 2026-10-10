import test from "node:test";
import assert from "node:assert/strict";
import { disasm } from "../src/index.ts";

// Independent Capstone examples covering shared field-layout regressions.
const cases = [
  {
    "word": 256176226,
    "expected": "bfdot v2.2s, v3.4h, v4.2h[0]",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "word": 263325728,
    "expected": "fmlal v0.2s, v1.2h, v2.h[7]",
    "features": [
      "FEAT_FHM"
    ]
  },
  {
    "word": 2131654130,
    "expected": "uqshl b18, b15, #6",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "word": 1594942902,
    "expected": "scvtf h22, h13, #16",
    "features": [
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "word": 235209793,
    "expected": "dup v1.8b, v2.b[2]",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "word": 245459109,
    "expected": "bfcvtn v5.4h, v5.4s",
    "features": [
      "FEAT_BF16"
    ]
  },
  {
    "word": 1593440594,
    "expected": "frecpx h18, h10",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  },
  {
    "word": 252544032,
    "expected": "shrn v0.8b, v1.8h, #3",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "word": 236962816,
    "expected": "fmlallbb v0.4s, v0.16b, v31.16b",
    "features": [
      "FEAT_FP8FMA"
    ]
  },
  {
    "word": 1317015617,
    "expected": "luti2 v1.16b, { v2.16b }, v0[0]",
    "features": [
      "FEAT_AdvSIMD && FEAT_LUT",
      "FEAT_AdvSIMD",
      "FEAT_LUT"
    ]
  },
  {
    "word": 1312825409,
    "expected": "luti4 v1.16b, { v2.16b }, v0[0]",
    "features": [
      "FEAT_AdvSIMD && FEAT_LUT",
      "FEAT_AdvSIMD",
      "FEAT_LUT"
    ]
  },
  {
    "word": 245505056,
    "expected": "orr v0.8b, v1.8b, v2.8b",
    "features": [
      "FEAT_AdvSIMD"
    ]
  },
  {
    "word": 238090272,
    "expected": "fmaxv h0, v1.4h",
    "features": [
      "FEAT_AdvSIMD && FEAT_FP16",
      "FEAT_AdvSIMD",
      "FEAT_FP16"
    ]
  }
];

test("NEON field layouts preserve register widths, lanes, shifts, and aliases", () => {
  for (const sample of cases) {
    assert.equal(disasm(sample.word, undefined, { features: sample.features }), sample.expected, sample.word.toString(16));
  }
});
