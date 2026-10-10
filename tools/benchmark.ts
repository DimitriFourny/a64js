import { performance } from "node:perf_hooks";
import { createDecoder } from "../src/index.ts";
import { ENCODINGS } from "../src/generated/isa/index.generated.ts";
import { buildOpcodeBuckets } from "./dispatch.ts";
import { loadCapstoneReference } from "../test/helpers/capstone-corpus.ts";

const cases = loadCapstoneReference();
const buckets = buildOpcodeBuckets(ENCODINGS);
const repetitions = 3;
const features = new Set(cases.flatMap((item) => item.features));
const words = cases.map((item) => item.word);
const decodeWord = createDecoder({ features });
for (const word of words) decodeWord(word);

let checksum = 0;
const start = performance.now();
for (let repetition = 0; repetition < repetitions; repetition++) {
  for (const word of words) checksum += decodeWord(word).operands?.length ?? 0;
}
const elapsed = performance.now() - start;
const meanBucketLength = words.reduce((total, word) => total + buckets[word >>> 24].length, 0) / words.length;
console.log(JSON.stringify({
  runtime: process.versions.bun ? `Bun ${process.versions.bun}` : `Node ${process.version}`,
  methodology: "One warmup, three full corpus passes; all corpus features enabled; includes field, guard and operand decoding.",
  instructions: words.length * repetitions,
  milliseconds: Number(elapsed.toFixed(2)),
  instructionsPerSecond: Math.round(words.length * repetitions / (elapsed / 1000)),
  encodings: ENCODINGS.length,
  meanCandidateBucket: Number(meanBucketLength.toFixed(1)),
  checksum,
}, null, 2));
