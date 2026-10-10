import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { generateCapstoneFixtures } from "../tools/generate-capstone.ts";
import { loadCapstoneModulePaths, loadCapstoneReference } from "./helpers/capstone-corpus.ts";
import { SUPPORTED_CAPSTONE_CASES, UNSUPPORTED_CAPSTONE_CASES } from "./generated/capstone/index.generated.ts";

const identity = (item: { sourceFile: string; caseIndex: number }) => `${item.sourceFile}#${item.caseIndex}`;

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
