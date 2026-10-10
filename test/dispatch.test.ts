import test from "node:test";
import assert from "node:assert/strict";
import { buildOpcodeBuckets } from "../tools/dispatch.ts";
import { ENCODINGS } from "../src/generated/isa/index.generated.ts";

test("opcode buckets preserve every matching candidate and its precedence", () => {
  const buckets = buildOpcodeBuckets(ENCODINGS);
  let word = 0x12345678;
  const samples = ENCODINGS.map((encoding) => encoding.value);
  for (let index = 0; index < 4096; index += 1) {
    word = (Math.imul(word, 1664525) + 1013904223) >>> 0;
    samples.push(word);
  }
  for (const sample of samples) {
    const matches = (index: number) => ((sample & ENCODINGS[index].mask) >>> 0) === ENCODINGS[index].value;
    const expected = ENCODINGS.flatMap((_, index) => matches(index) ? [index] : []);
    assert.deepEqual(buckets[sample >>> 24].filter(matches), expected, sample.toString(16));
  }
});

test("unconstrained high bits are included in every compatible bucket", () => {
  const buckets = buildOpcodeBuckets([{ mask: 0, value: 0 }, { mask: 0x80000000, value: 0x80000000 }]);
  assert.deepEqual(buckets[0], [0]);
  assert.deepEqual(buckets[255], [0, 1]);
});
