import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { generateCapstoneFixtures } from "../tools/generate-capstone.ts";
import { decode } from "../src/index.ts";
import { loadCapstoneModulePaths, loadCapstoneReference } from "./helpers/capstone-corpus.ts";
import { resolveCapstoneFeatures } from "./helpers/capstone-features.ts";
import { SUPPORTED_CAPSTONE_CASES, UNSUPPORTED_CAPSTONE_CASES } from "./generated/capstone/index.generated.ts";

const identity = (item: { sourceFile: string; caseIndex: number }) => `${item.sourceFile}#${item.caseIndex}`;

test("reference execution profiles contain concrete enabled features and retain linked XML requirements", () => {
  const reference = loadCapstoneReference();
  assert.ok(reference.every((item) => item.features.every((feature) => /^FEAT_\w+$/.test(feature))));
  const fp8 = reference.find((item) => item.sourceFile === "FP8_SVE2/fmlal.s.yaml" && item.caseIndex === 2)!;
  assert.ok(fp8.features.includes("FEAT_SVE2"));
  assert.ok(fp8.features.includes("FEAT_FP8FMA"));
  assert.equal(decode(fp8.word, { features: fp8.features }).status, "ok");
  assert.equal(decode(fp8.word, { features: fp8.features.filter((feature) => feature !== "FEAT_FP8FMA") }).status, "undefined");
  assert.throws(() => resolveCapstoneFeatures(["FEAT_FUTURE_A || FEAT_FUTURE_B"]), /Unreviewed/);
});

test("support accounting preserves every immutable reference word and assembly string", () => {
  const reference = loadCapstoneReference(); // Verifies both input SHA-256 checksums before use.
  assert.equal(reference.length, 34621);
  const generated = [...SUPPORTED_CAPSTONE_CASES, ...UNSUPPORTED_CAPSTONE_CASES];
  assert.equal(generated.length, reference.length);
  const byId = new Map(generated.map((item) => [identity(item), item]));
  assert.equal(byId.size, reference.length);
  for (const { modulePath: _, ...expected } of reference) assert.deepEqual(byId.get(identity(expected)), expected, identity(expected));
});

test("fixture generation from an absent output directory is deterministic and retains nested INDEX cases", async () => {
  const temporary = await mkdtemp(join(tmpdir(), "a64js-capstone-reference-"));
  const outputRoot = join(temporary, "missing-output");
  try {
    await generateCapstoneFixtures({ outputRoot, supportedFiles: [], quiet: true });
    const modules = [...loadCapstoneModulePaths(), "index.generated.ts"];
    const first = await Promise.all(modules.map(async (name) => createHash("sha256").update(await readFile(join(outputRoot, name))).digest("hex")));
    await generateCapstoneFixtures({ outputRoot, supportedFiles: [], quiet: true });
    const second = await Promise.all(modules.map(async (name) => createHash("sha256").update(await readFile(join(outputRoot, name))).digest("hex")));
    assert.deepEqual(first, second);
    const indexInstruction = await readFile(join(outputRoot, "SVE/index.generated.ts"), "utf8");
    assert.match(indexInstruction, /"mnemonic": "INDEX"/);
    assert.match(indexInstruction, /export const SUPPORTED_CAPSTONE_CASES = \[\];/);
    assert.match(await readFile(join(outputRoot, "arm64e.generated.ts"), "utf8"), /UNSUPPORTED_CAPSTONE_CASES = \[\];/);
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});
