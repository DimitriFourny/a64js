# Instruction Support TODO

This file is a work queue, not a scratchpad. Each Codex run should take one `Ready` work item, finish it end-to-end, then update this file before stopping.

## Workflow

### Execution rule

Pick exactly one work item from `Ready`, unless a task is already listed under `In Progress`.

### What a work item must contain

- one coherent instruction family or cleanup batch
- enough scope to justify a full implementation pass
- concrete XML and/or source-YAML anchors
- a short `Done when` checklist

### What to do during a Codex run

1. Claim one work item by moving it to `In Progress`.
2. Implement decode/disasm support for the whole batch, not a single encoding unless the item explicitly says so.
3. Update `tools/supported-files.ts` only when the family works end-to-end.
4. Run the relevant generation and test commands.
5. Move the item to `Done` with a short result note, or to `Blocked` with the reason.

### Refresh commands

```sh
bun tools/generate.ts
bun test
```

## In Progress

## Ready

Priority rule:

- prefer the most-used and most broadly expected instruction families first
- use the capstone snapshot and `basic-a64-instructions.s.yaml` volume as the default tie-breaker
- only take niche SME/SVE/AdvSIMD work ahead of scalar/core A64 work when it clearly removes a larger unsupported batch

Backlog target:

- the grouped work items below are the remaining roadmap to drive the unsupported capstone count to zero
- each item names the current source-YAML and XML anchors that still account for unsupported capstone cases
- when a family spills into related alias XMLs, promote the whole family together before touching `tools/supported-files.ts`

- `basic-a64-instructions.s.yaml`: `51`
- `neon-perm.s.yaml`: `42`
- `neon-simd-copy.s.yaml`: `41`
- `neon-simd-misc.s.yaml`: `39`
- `neon-2velem.s.yaml`: `36`
- `neon-aba-abd.s.yaml`: `28`
- `neon-saturating-add-sub.s.yaml`: `28`
- `armv8.3a-signed-pointer.s.yaml`: `25`
- `armv8.5a-bti.s.yaml`: `24`
- `neon-add-sub-instructions.s.yaml`: `24`
- `neon-halving-add-sub.s.yaml`: `24`
- `neon-mul-div-instructions.s.yaml`: `23`
- `armv8.3a-rcpc.s.yaml`: `22`
- `neon-3vdiff.s.yaml`: `22`
- `neon-mla-mls-instructions.s.yaml`: `22`
- `neon-scalar-dup.s.yaml`: `22`
- `neon-shift.s.yaml`: `21`
- `neon-facge-facgt.s.yaml`: `20`
- `neon-tbl.s.yaml`: `20`
- `armv8.6a-simd-matmul.s.yaml`: `18`
- `neon-scalar-by-elem-saturating-mul.s.yaml`: `17`
- `neon-scalar-saturating-add-sub.s.yaml`: `16`
- `neon-scalar-recip.s.yaml`: `15`
- `armv8.4a-flag.s.yaml`: `14`
- `neon-bitwise-instructions.s.yaml`: `14`
- `neon-crypto.s.yaml`: `14`
- `neon-rounding-shift.s.yaml`: `14`
- `neon-saturating-rounding-shift.s.yaml`: `14`
- `neon-saturating-shift.s.yaml`: `14`
- `neon-scalar-mul.s.yaml`: `13`
- `armv9.5a-cpa.s.yaml`: `12`
- `neon-add-pairwise.s.yaml`: `12`
- `neon-rounding-halving-add.s.yaml`: `12`
- `neon-shift-left-long.s.yaml`: `12`
- `armv9.4a-gcs.s.yaml`: `11`
- `armv8.5a-mte.s.yaml`: `10`
- `neon-frsqrt-frecp.s.yaml`: `10`
- `arm64-basic-a64-instructions.s.yaml`: `8`
- `arm64-verbose-vector-case.s.yaml`: `8`
- `armv9.4a-chk.s.yaml`: `8`
- `neon-scalar-saturating-rounding-shift.s.yaml`: `8`
- `neon-scalar-saturating-shift.s.yaml`: `8`
- `neon-compare-instructions.s.yaml`: `7`
- `armv8.5a-predres.s.yaml`: `6`
- `armv8.9a-specres2.s.yaml`: `6`
- `armv8r-unsupported-inst.s.yaml`: `6`
- `neon-scalar-fp-compare.s.yaml`: `6`
- `neon-sxtl.s.yaml`: `6`
- `neon-uxtl.s.yaml`: `6`
- `ras-extension.s.yaml`: `6`
- `armv8.9a-debug-pmu.s.yaml`: `5`
- `neon-scalar-reduce-pairwise.s.yaml`: `5`
- `armv8.5a-altnzcv.s.yaml`: `4`
- `armv8.7a-wfxt.s.yaml`: `4`
- `armv9.5a-pauthlr.s.yaml`: `4`
- `apple_proprietary.s.yaml`: `3`
- `case-insen-reg-names.s.yaml`: `3`
- `neon-scalar-abs.s.yaml`: `3`
- `speculation-barriers.s.yaml`: `3`
- `udf.s.yaml`: `3`
- `armv8.3a-js.s.yaml`: `2`
- `armv8.4a-flagm.s.yaml`: `2`
- `armv8.4a-trace.s.yaml`: `2`
- `armv8.5a-sb.s.yaml`: `2`
- `neon-extract.s.yaml`: `2`
- `neon-scalar-add-sub.s.yaml`: `2`
- `neon-scalar-rounding-shift.s.yaml`: `2`
- `neon-scalar-shift.s.yaml`: `2`
- `dot-req.s.yaml`: `1`
- `neon-scalar-compare.s.yaml`: `1`
- `neon-scalar-shift-imm.s.yaml`: `1`

## Blocked

- SVE arithmetic core batch from `SVE/add.s.yaml`, `SVE/sub.s.yaml`, `SVE/subr.s.yaml`, `SVE/asr.s.yaml`, `SVE/lsl.s.yaml`, and `SVE/lsr.s.yaml` is blocked after implementation because the required `bun test` run still fails on unrelated `neon-mov.s.yaml#9` (`MOVI 0x0f008420`): the promoted SVE arithmetic/shift/inc shards now generate cleanly, but the shared unsupported-capstone assertion stops on that separate queued family.
- AdvSIMD immediate-shift and narrowing cleanup from `neon-simd-shift.s.yaml` is blocked after implementation because the required `bun test` run now fails on unrelated `neon-mov.s.yaml#9` (`MOVI 0x0f008420`): it decodes as supported while that separately queued family is still in the unsupported capstone set.

## Done

Use one line per completed work item with a concise outcome note. Keep detailed history below in `Completed Families`.

## Snapshot

Current capstone coverage snapshot:

- `25024` supported capstone cases
- `9533` unsupported capstone cases
- `832` XML instruction files currently listed in `tools/supported-files.ts`
- `1068` distinct unsupported XML instruction files
- `739` capstone source YAML files containing unsupported cases
- `657` distinct unsupported mnemonics

Highest-value remaining source files right now:

- `basic-a64-instructions.s.yaml`: `51`
- `neon-perm.s.yaml`: `42`
- `neon-simd-copy.s.yaml`: `41`
- `neon-simd-misc.s.yaml`: `39`
- `SVE/fcmla.s.yaml`: `38`

Largest unsupported feature sets:

- `FEAT_SME`: `5022`
- `FEAT_SVE`: `3272`
- `FEAT_SVE || FEAT_SME`: `2850`
- `FEAT_SVE2`: `2069`
- `FEAT_SVE2 || FEAT_SME`: `1861`
- `FEAT_SME2`: `1836`
- `FEAT_SVE2p1`: `1530`
- `FEAT_SME2 || FEAT_SVE2p1`: `725`
- `FEAT_SME2p1`: `724`
- `FEAT_AdvSIMD`: `713`

Implication:

- the remaining work is concentrated in `basic-a64-instructions.s.yaml` plus the AdvSIMD/SVE/SME long tail
- the ready queue is now empty; future batching should be re-seeded from the current highest-value unsupported source files
- the next highest-value batches are still family work, not one-off instruction fixes

## Meaning Of "Unsupported"

This repository keeps committed capstone fixtures under `test/generated/capstone/`, split by source YAML file.

A case is counted as `unsupported` only when all of the following are true:

1. The instruction word matches an Arm XML encoding.
2. That XML file is not in `tools/supported-files.ts`.
3. `disasm()` still falls back to raw `.inst 0x...`.

So this TODO tracks instructions that already map cleanly to XML encodings, but are not yet promoted into the supported set.

## Working Notes

- Do not add XML files to `tools/supported-files.ts` until both `decode()` and `disasm()` behave correctly for that family.
- The generated capstone corpus is a progress metric, not the whole instruction universe.
- `bun tools/generate.ts` now refreshes the committed capstone shards by repartitioning the tracked corpus against the current `tools/supported-files.ts` set.
- The recent system-register work formats generic system-register operands as `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>`. That is acceptable for coverage and should not block further family support.
- `tools/encodings.ts` needs to tolerate feature terms inside larger guard expressions; keep that in mind when working on mixed-guard XMLs.
- If `MOVA`-related capstone accounting does not move as expected, verify the XML-to-case mapping before assuming the formatter is wrong.
 Conditional-select family: `46` capstone cases promoted across `csel.xml`, `cinc_csinc.xml`, `cinv_csinv.xml`, and `cneg_csneg.xml`, with alias condition inversion handled in the formatter while `cset` / `csetm` remain unsupported
