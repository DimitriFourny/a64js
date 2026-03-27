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

- SVE logical, compare, and move cleanup.
  Anchors: `SVE/and.s.yaml`, `SVE/orr.s.yaml`, `SVE/eor.s.yaml`, `SVE/bic.s.yaml`, `SVE/mov.s.yaml`, `SVE/fcmeq.s.yaml`, `fcmeq_p_p_z0.xml`, `fcmeq_p_p_zz.xml`.
  Done when: logical immediate/register families, move aliases, and floating compare predicate forms all disassemble with the correct predicate policy and aliases, and the associated SVE shards are promoted.

## Ready

Priority rule:

- prefer the most-used and most broadly expected instruction families first
- use the capstone snapshot and `basic-a64-instructions.s.yaml` volume as the default tie-breaker
- only take niche SME/SVE/AdvSIMD work ahead of scalar/core A64 work when it clearly removes a larger unsupported batch

Backlog target:

- the grouped work items below are the remaining roadmap to drive the unsupported capstone count to zero
- each item names the current source-YAML and XML anchors that still account for unsupported capstone cases
- when a family spills into related alias XMLs, promote the whole family together before touching `tools/supported-files.ts`

- SVE memory and matrix-multiply cleanup.
  Anchors: `SVE/ld1b.s.yaml`, `SVE/st1b.s.yaml`, `SVE/bfmlal.s.yaml`, `SVE/fmul.s.yaml`, `SVE/matrix-multiply-fp64.s.yaml`.
  Done when: remaining SVE memory, BF16/FP multiply, and matrix-multiply forms format correctly and can be added to `tools/supported-files.ts` without leaving related aliases behind.

- SVE2 and SVE2p1 predicate/move/extract cleanup.
  Anchors: `SVE2p1/pmov.s.yaml`, `SVE2p1/pext.s.yaml`, `pmov_p_zi.xml`, `pmov_z_pi.xml`.
  Done when: predicate/vector move and extract forms render correctly across all arrangement variants, the family is promoted together, and the SVE2p1 backlog drops for both source files.

- SVE2 complex arithmetic and FP8 convert cleanup.
  Anchors: `SVE2/cmla.s.yaml`, `SVE2/sqrdcmlah.s.yaml`, `FP8_SVE2/fcvt.s.yaml`, `f1cvt_z_z8.xml`, `bf1cvt_z_z8.xml`, `f1cvtlt_z_z8.xml`, `bf1cvtlt_z_z8.xml`.
  Done when: complex multiply-accumulate and FP8 convert families decode and disassemble with the correct lane, rotate, and FP8 suffix behavior, and the affected SVE2/FP8 shards are promoted.

- SME zeroing cleanup from `SME/zero.s.yaml` and `SME2p1/zero.s.yaml`.
  Anchors: `zero_za_i.xml`.
  Done when: ZA zeroing forms across SME and SME2p1 format correctly for all tile/immediate variants and both source shards stop reporting unsupported cases.

- SME2 integer dot-product cleanup from `SME2/svdot.s.yaml` and `SME2/uvdot.s.yaml`.
  Anchors: `svdot_za_zzi.xml`, `svdot_za32_zzi.xml`, `uvdot_za_zzi.xml`, `uvdot_za32_zzi.xml`.
  Done when: ZA dot-product forms decode/disassemble correctly across element widths and accumulator shapes, the family is promoted together, and both capstone shards are cleared.

- SME2 integer max/min/shift/arithmetic cleanup.
  Anchors: `SME2/smax.s.yaml`, `SME2/smin.s.yaml`, `SME2/umax.s.yaml`, `SME2/umin.s.yaml`, `SME2/sqdmulh.s.yaml`, `SME2/srshl.s.yaml`, `SME2/urshl.s.yaml`, `smax_mz_zzv.xml`, `smax_mz_zzw.xml`, `smin_mz_zzv.xml`, `smin_mz_zzw.xml`, `sqdmulh_mz_zzv.xml`, `sqdmulh_mz_zzw.xml`, `srshl_mz_zzv.xml`, `srshl_mz_zzw.xml`, `urshl_mz_zzv.xml`, `urshl_mz_zzw.xml`.
  Done when: the remaining merged-ZA arithmetic families share consistent operand formatting across vector and tile variants, are promoted in coherent batches, and the SME2 arithmetic backlog drops materially.

- SME2 floating max/min and ZIP/UZP cleanup.
  Anchors: `SME2/fmax.s.yaml`, `SME2/fmaxnm.s.yaml`, `SME2/fmin.s.yaml`, `SME2/fminnm.s.yaml`, `SME2/zip.s.yaml`, `SME2/uzp.s.yaml`.
  Done when: floating compare-select style arithmetic and permutation families render correctly across ZA forms and the whole cluster can be promoted without leaving sibling XMLs behind.

- FP8 SME2 dot/MLA cleanup from `FP8_SME2/dot.s.yaml` and `FP8_SME2/mla.s.yaml`.
  Anchors: the remaining FP8 SME2 dot-product and multiply-accumulate XMLs in those two source files.
  Done when: FP8 SME2 dot and MLA forms decode/disassemble correctly across all remaining cases and both shards are promoted out of the unsupported set.

- Remaining long-tail source-YAML batches after the high-volume families above.
  Anchors: every source YAML still present in `test/generated/capstone/index.generated.ts` after the named batches are complete.
  Done when: the backlog is refreshed, new highest-value families are pulled into concrete work items, and the final sweep continues until `UNSUPPORTED_CAPSTONE_CASES.length === 0` and all committed capstone tests pass.

## Blocked

- SVE arithmetic core batch from `SVE/add.s.yaml`, `SVE/sub.s.yaml`, `SVE/subr.s.yaml`, `SVE/asr.s.yaml`, `SVE/lsl.s.yaml`, and `SVE/lsr.s.yaml` is blocked after implementation because the required `bun test` run still fails on unrelated `neon-mov.s.yaml#9` (`MOVI 0x0f008420`): the promoted SVE arithmetic/shift/inc shards now generate cleanly, but the shared unsupported-capstone assertion stops on that separate queued family.
- AdvSIMD immediate-shift and narrowing cleanup from `neon-simd-shift.s.yaml` is blocked after implementation because the required `bun test` run now fails on unrelated `neon-mov.s.yaml#9` (`MOVI 0x0f008420`): it decodes as supported while that separately queued family is still in the unsupported capstone set.

## Done

Use one line per completed work item with a concise outcome note. Keep detailed history below in `Completed Families`.

- AdvSIMD multi-structure load/store cleanup from `neon-simd-ldst-multi-elem.s.yaml` and `neon-simd-post-ldst-multi-elem.s.yaml` completed; promoted `ld2`/`ld3`/`ld4` plus `st2`/`st3`/`st4` multiple-structure forms, fixed register-count formatting for non-post-index encodings, and cleared both source shards.
- AdvSIMD immediate move/logical-immediate cleanup from `neon-mov.s.yaml` completed; promoted `movi`/`mvni`/`bic`/`orr` immediates plus `fmov` and `mov` vector aliases, clearing `neon-mov.s.yaml` and unblocking the full test suite.
- AdvSIMD BF16 and scalar BF16 cleanup from `armv8.6a-bf16.s.yaml` completed; promoted `bfdot`, `bfmmla`, `bfcvtn`/`bfcvtn2`, `bfcvt`, and `bfmlal{b,t}` vector/by-element forms, clearing the BF16 shard.
- Core A64 scalar FP/int/control cleanup from `basic-a64-instructions.s.yaml` completed; promoted the scalar FP/int/control batch plus related `MSR`/`SYSL` aliases, bringing `basic-a64-instructions.s.yaml` unsupported cases down to `182`.
- Core A64 scalar load/store leftovers from `basic-a64-instructions.s.yaml` completed; promoted `ldrsh_reg`, `ldrsb_reg`, `str_reg_gen`, `stp_gen`, `stlxp`, and `ldnp_fpsimd`, bringing `basic-a64-instructions.s.yaml` unsupported cases down to `161`.
- AdvSIMD miscellaneous unary/narrow/widen cleanup from `neon-simd-misc.s.yaml` completed; promoted `clz`, `xtn`/`*xtn2`, `shll`/`shll2`, `fabs`, `fneg`, `frint*`, and `fcvtns`, bringing `neon-simd-misc.s.yaml` unsupported cases down to `96`.
- AdvSIMD widening/addhn/multiply leftovers from `neon-3vdiff.s.yaml` completed; promoted `smull`/`umull`, `saddw`/`uaddw`, `ssubw`/`usubw`, and `addhn`/`raddhn` with correct `2`/upper-half formatting, bringing `neon-3vdiff.s.yaml` unsupported cases down to `22`.
- Core architectural extension cleanup from root source files outside the main scalar batch completed; promoted CSSC min/max and unary integer ops, `clrbhb`, `fcadd`/`fcmla`, `frint32*`/`frint64*`, `fmlal`/`fmlsl`, and the remaining scalar AdvSIMD convert families, clearing `armv8.9a-cssc.s.yaml`, `armv8.9a-clrbhb.s.yaml`, `armv8.3a-complex{,_nofp16}.s.yaml`, `armv8.5a-frint.s.yaml`, `armv8a-fpmul.s.yaml`, and `neon-scalar-cvt.s.yaml`.

## Snapshot

Current capstone coverage snapshot:

- `22636` supported capstone cases
- `11921` unsupported capstone cases
- `608` XML instruction files currently listed in `tools/supported-files.ts`
- `1278` distinct unsupported XML instruction files
- `794` capstone source YAML files containing unsupported cases
- `739` distinct unsupported mnemonics

Highest-value remaining source files right now:

- `basic-a64-instructions.s.yaml`: `161`
- `SVE2p1/pmov.s.yaml`: `80`
- `SME2/svdot.s.yaml`: `72`
- `SME2/uvdot.s.yaml`: `72`
- `FP8_SVE2/fcvt.s.yaml`: `64`
- `SME2/smax.s.yaml`: `64`

Largest unsupported feature sets:

- `FEAT_SVE || FEAT_SME, FEAT_SVE, FEAT_SME`: `3308`
- `FEAT_SVE2 || FEAT_SME, FEAT_SVE2, FEAT_SME`: `1950`
- `FEAT_SME2`: `1725`
- `FEAT_SME2 || FEAT_SVE2p1, FEAT_SME2, FEAT_SVE2p1`: `785`
- `FEAT_SVE2p1 || FEAT_SME2p1, FEAT_SVE2p1, FEAT_SME2p1`: `774`
- `FEAT_AdvSIMD`: `729`
- `FEAT_SVE`: `386`
- `FEAT_SME`: `268`
- `FEAT_SVE || FEAT_SME`: `152`
- `FEAT_SVE2`: `126`

Implication:

- the remaining work is still concentrated in SVE, SME, SME2, and AdvSIMD
- the CSSC/core-extension cleanup batch is cleared, so the next ready priority should shift to SVE logical, compare, and move cleanup
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
