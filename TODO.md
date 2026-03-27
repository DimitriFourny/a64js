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

- None.

## Ready

Priority rule:

- prefer the most-used and most broadly expected instruction families first
- use the capstone snapshot and `basic-a64-instructions.s.yaml` volume as the default tie-breaker
- only take niche SME/SVE/AdvSIMD work ahead of scalar/core A64 work when it clearly removes a larger unsupported batch

Backlog target:

- the grouped work items below are the remaining roadmap to drive the unsupported capstone count to zero
- each item names the current source-YAML and XML anchors that still account for unsupported capstone cases
- when a family spills into related alias XMLs, promote the whole family together before touching `tools/supported-files.ts`

- Core A64 scalar FP/int/control cleanup from `basic-a64-instructions.s.yaml`.
  Anchors: `fcvtas_float.xml`, `fcvtau_float.xml`, `mov_orr_log_shift.xml`, `clz_int.xml`, `rbit_int.xml`, `rev16_int.xml`, `clrex.xml`, `isb.xml`, `msr_imm.xml`, `sysl.xml`.
  Done when: the remaining scalar convert/bit-manip/control instructions in `basic-a64-instructions.s.yaml` disassemble with architectural mnemonics and operands, the whole batch is added to `tools/supported-files.ts`, and the capstone shard no longer reports these XMLs as unsupported.

- Core A64 scalar load/store leftovers from `basic-a64-instructions.s.yaml`.
  Anchors: `ldrsh_reg.xml`, `ldrsb_reg.xml`, `str_reg_gen.xml`, `stp_gen.xml`, `stlxp.xml`, `ldnp_fpsimd.xml`.
  Done when: register-offset, pair, exclusive-pair, and no-allocate variants format correctly across 32/64-bit and FP/SIMD forms, the family is promoted together, and the associated capstone cases move from unsupported to supported.

- AdvSIMD miscellaneous unary/narrow/widen cleanup from `neon-simd-misc.s.yaml`.
  Anchors: `clz_advsimd.xml`, `xtn_advsimd.xml`, `sqxtun_advsimd.xml`, `sqxtn_advsimd.xml`, `uqxtn_advsimd.xml`, `shll_advsimd.xml`, `fabs_advsimd.xml`, `fneg_advsimd.xml`, `frint{n,a,p,m,x,z,i}_advsimd.xml`, `fcvtns_advsimd.xml`.
  Done when: scalar/vector unary, narrow, widen, and FP rounding forms render with the correct arrangement and suffix rules, the family is promoted together, and `neon-simd-misc.s.yaml` drops accordingly in the capstone snapshot.

- AdvSIMD immediate-shift and narrowing cleanup from `neon-simd-shift.s.yaml`.
  Anchors: `uqshl_advsimd_imm.xml`, `shrn_advsimd.xml`, `sqshrun_advsimd.xml`, `rshrn_advsimd.xml`, `sqrshrun_advsimd.xml`, `sqshrn_advsimd.xml`, `uqshrn_advsimd.xml`, `sqrshrn_advsimd.xml`.
  Done when: narrowing, saturating, and rounding immediate-shift forms decode without overlap regressions, disassembly uses the right lane widths and upper-half mnemonics, and the family is added to `tools/supported-files.ts`.

- AdvSIMD immediate move/logical-immediate cleanup from `neon-mov.s.yaml`.
  Anchors: `movi_advsimd.xml`, `mvni_advsimd.xml`, `bic_advsimd_imm.xml`, `orr_advsimd_imm.xml`, `mov_orr_advsimd_reg.xml`, `fmov_advsimd.xml`.
  Done when: immediate synthesis, logical-immediate aliases, and register-move forms render with the correct immediate spellings and aliases, and the remaining `neon-mov.s.yaml` capstone cases are promoted.

- AdvSIMD multi-structure load/store cleanup from `neon-simd-ldst-multi-elem.s.yaml` and `neon-simd-post-ldst-multi-elem.s.yaml`.
  Anchors: `ld2_advsimd_mult.xml`, `ld3_advsimd_mult.xml`, `ld4_advsimd_mult.xml`, `st2_advsimd_mult.xml`, `st3_advsimd_mult.xml`, `st4_advsimd_mult.xml`.
  Done when: multi-register structure lists, lane indexes, and post-index writeback forms all match capstone expectations and the whole multi-structure family is promoted together.

- AdvSIMD widening/addhn/multiply leftovers from `neon-3vdiff.s.yaml`.
  Anchors: `smull_advsimd_vec.xml`, `umull_advsimd_vec.xml`, `saddw_advsimd.xml`, `uaddw_advsimd.xml`, `ssubw_advsimd.xml`, `usubw_advsimd.xml`, `addhn_advsimd.xml`, `raddhn_advsimd.xml`.
  Done when: widening arithmetic, long multiply, and high-narrowing forms render with the correct arrangement and `2`/upper-half conventions, and the family is promoted in one pass.

- AdvSIMD BF16 and scalar BF16 cleanup from `armv8.6a-bf16.s.yaml`.
  Anchors: `bfdot_advsimd_elt.xml`, `bfmlal_advsimd_elt.xml`, `bfdot_advsimd_vec.xml`, `bfmmla_advsimd.xml`, `bfcvtn_advsimd.xml`, `bfmlal_advsimd_vec.xml`, `bfcvt_float.xml`.
  Done when: BF16 dot-product, matrix-multiply, convert, and long multiply-accumulate forms decode and disassemble correctly across vector, by-element, and scalar variants, and the BF16 shard is promoted.

- Core architectural extension cleanup from root source files outside the main scalar batch.
  Anchors: `armv8.9a-cssc.s.yaml`, `armv8.9a-clrbhb.s.yaml`, `armv8.3a-complex.s.yaml`, `armv8.5a-frint.s.yaml`, `armv8a-fpmul.s.yaml`, `neon-scalar-cvt.s.yaml`.
  Done when: the remaining CSSC, CLRBHB, complex arithmetic, FRINT, FP multiply, and scalar convert extension cases stop falling back to `.inst`, and each finished family is promoted as a coherent batch.

- SVE arithmetic core batch from `SVE/add.s.yaml`, `SVE/sub.s.yaml`, `SVE/subr.s.yaml`, `SVE/asr.s.yaml`, `SVE/lsl.s.yaml`, and `SVE/lsr.s.yaml`.
  Anchors: `add_z_p_zz.xml`, `add_z_zz.xml`, `add_z_zi.xml`, `sub_z_p_zz.xml`, `sub_z_zz.xml`, `sub_z_zi.xml`, `incd_z_zs.xml`.
  Done when: predicated and unpredicated arithmetic/immediate forms render with the correct merge/zero semantics and immediates, related shift/inc forms are handled consistently, and the arithmetic cluster is promoted together.

- SVE logical, compare, and move cleanup.
  Anchors: `SVE/and.s.yaml`, `SVE/orr.s.yaml`, `SVE/eor.s.yaml`, `SVE/bic.s.yaml`, `SVE/mov.s.yaml`, `SVE/fcmeq.s.yaml`, `fcmeq_p_p_z0.xml`, `fcmeq_p_p_zz.xml`.
  Done when: logical immediate/register families, move aliases, and floating compare predicate forms all disassemble with the correct predicate policy and aliases, and the associated SVE shards are promoted.

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

- None.

## Done

Use one line per completed work item with a concise outcome note. Keep detailed history below in `Completed Families`.

## Snapshot

Current capstone coverage snapshot:

- `21109` supported capstone cases
- `13448` unsupported capstone cases
- `469` XML instruction files currently listed in `tools/supported-files.ts`
- `1417` distinct unsupported XML instruction files
- `846` capstone source YAML files containing unsupported cases
- `798` distinct unsupported mnemonics

Highest-value remaining source files right now:

- `basic-a64-instructions.s.yaml`: `214`
- `neon-simd-misc.s.yaml`: `182`
- `SVE/add.s.yaml`: `98`
- `SVE/sub.s.yaml`: `98`
- `neon-simd-ldst-multi-elem.s.yaml`: `84`
- `SVE2p1/pmov.s.yaml`: `80`

Largest unsupported feature sets:

- `FEAT_SVE || FEAT_SME, FEAT_SVE, FEAT_SME`: `3773`
- `FEAT_SVE2 || FEAT_SME, FEAT_SVE2, FEAT_SME`: `1950`
- `FEAT_SME2`: `1725`
- `FEAT_AdvSIMD`: `1191`
- `FEAT_SME2 || FEAT_SVE2p1, FEAT_SME2, FEAT_SVE2p1`: `785`
- `FEAT_SVE2p1 || FEAT_SME2p1, FEAT_SVE2p1, FEAT_SME2p1`: `774`
- `FEAT_SVE`: `386`
- `FEAT_SME`: `294`
- no feature gate recorded: `164`
- `FEAT_SVE || FEAT_SME`: `152`

Implication:

- the remaining work is still concentrated in SVE, SME, SME2, and AdvSIMD
- the next highest-value batches are family work, not one-off instruction fixes
- the first priority should still be common scalar/core A64 families from `basic-a64-instructions.s.yaml` when they have large unsupported batches

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
