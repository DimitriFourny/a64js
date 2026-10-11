import { performance } from "node:perf_hooks";
import { createDecoder } from "../src/index.ts";
import { ENCODINGS, OPCODE_BUCKETS } from "../src/generated/isa/index.generated.ts";

// Fixed handwritten examples from test/api.test.ts and test/disasm.test.ts.
// This curated sample exercises several operand families, not architectural coverage.
const words = new Uint32Array([
  0x91400420, // add x0, x1, #0x1, lsl #12
  0x10000020, // adr x0, PC + 4
  0x94000010, // bl PC + 64
  0x36280041, // tbz w1, #0x5, PC + 8
  0xd65f03c0, // ret
  0xd2a24682, // movz x2, #0x1234, lsl #16
  0xd503233f, // paciasp
  0xb8bfc020, // ldapr w0, [x1]
  1319273504, // add v0.4s, v1.4s, v2.4s
  1312953376, // fadd v0.8h, v1.8h, v2.8h
  0x4c402bff, // ld1 { v31.4s, v0.4s, v1.4s, v2.4s }, [sp]
  0x25108000, // cmpeq p0.b, p0/z, z0.b, #-16
  0x2400a000, // cmpeq p0.b, p0/z, z0.b, z0.b
  3758096384, // ld1b {za0h.b[w12, 0]}, p0/z, [x0, x0]
  0xc0020000, // mov z0.b, p0/m, za0h.b[w12, 0]
  0xc0460000, // mov { z0.h, z1.h }, za0h.h[w12, 0:1]
]);
const features = [
  "FEAT_PAuth",
  "FEAT_LRCPC",
  "FEAT_AdvSIMD",
  "FEAT_FP16",
  "FEAT_SVE",
  "FEAT_SME",
  "FEAT_SME2",
];
const decodeWord = createDecoder({ features });
const warmupPasses = 10_000;
const timedPasses = 250_000;

function runPasses(passes: number): number {
  let checksum = 0;
  for (let pass = 0; pass < passes; pass++) {
    for (let index = 0; index < words.length; index++) {
      checksum += decodeWord(words[index]).operands?.length ?? 0;
    }
  }
  return checksum;
}

runPasses(warmupPasses);
const start = performance.now();
const checksum = runPasses(timedPasses);
const elapsed = performance.now() - start;
const instructions = words.length * timedPasses;
const meanBucketLength = words.reduce((total, word) => total + OPCODE_BUCKETS[word >>> 24].length, 0) / words.length;
console.log(JSON.stringify({
  runtime: process.versions.bun ? `Bun ${process.versions.bun}` : `Node ${process.version}`,
  methodology: "Curated 16-word handwritten sample, fixed order; 10,000 warmup passes, then 250,000 timed passes with one prepared decoder and explicit atomic target features. Includes field, guard and operand decoding, not assembly formatting; excludes setup and dispatch statistics. Not full architectural coverage.",
  sampleWords: words.length,
  features,
  warmupPasses,
  timedPasses,
  instructions,
  milliseconds: Number(elapsed.toFixed(2)),
  instructionsPerSecond: Math.round(instructions / (elapsed / 1000)),
  encodings: ENCODINGS.length,
  meanCandidateBucket: Number(meanBucketLength.toFixed(1)),
  checksum,
}, null, 2));
