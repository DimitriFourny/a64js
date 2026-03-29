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

## Blocked

- SVE arithmetic core batch from `SVE/add.s.yaml`, `SVE/sub.s.yaml`, `SVE/subr.s.yaml`, `SVE/asr.s.yaml`, `SVE/lsl.s.yaml`, and `SVE/lsr.s.yaml` is blocked after implementation because the required `bun test` run still fails on unrelated `neon-mov.s.yaml#9` (`MOVI 0x0f008420`): the promoted SVE arithmetic/shift/inc shards now generate cleanly, but the shared unsupported-capstone assertion stops on that separate queued family.
- AdvSIMD immediate-shift and narrowing cleanup from `neon-simd-shift.s.yaml` is blocked after implementation because the required `bun test` run now fails on unrelated `neon-mov.s.yaml#9` (`MOVI 0x0f008420`): it decodes as supported while that separately queued family is still in the unsupported capstone set.

## Done

Use one line per completed work item with a concise outcome note. Keep detailed history below in `Completed Families`.

- AdvSIMD across-lane cleanup from `neon-across.s.yaml` completed; promoted `saddlv`, `uaddlv`, `smaxv`, `sminv`, `umaxv`, `uminv`, `addv`, `fmaxnmv`, `fminnmv`, `fmaxv`, and `fminv`, added a shared across-lane reduction formatter for scalar-destination/vector-source operand sizing, and cleared the shard.
- AdvSIMD max/min cleanup from `neon-max-min.s.yaml` completed; promoted `smax`/`smin`/`umax`/`umin` and `fmax`/`fmin`/`fmaxnm`/`fminnm`, reused the shared AdvSIMD three-same formatter path, and cleared the shard.
- AdvSIMD max/min pairwise cleanup from `neon-max-min-pairwise.s.yaml` completed; promoted `smaxp`, `sminp`, `umaxp`, `uminp`, and the floating `fmaxp`/`fminp`/`fmaxnmp`/`fminnmp` vector-plus-scalar pair XMLs, added shared floating pairwise scalar/vector operand formatting, and cleared the shard.
- FP8 miscellaneous cleanup from `FP8/miscellaneous-fp8.s.yaml` completed; promoted `bf12cvtl_advsimd.xml`, `f12cvtl_advsimd.xml`, `fcvtn_advsimd_{168,328}.xml`, and `fscale_advsimd.xml`, added the AdvSIMD FP8 convert/narrow/three-same formatter paths plus the `...2` mnemonic suffix handling, and cleared the FP8 miscellaneous shard.
- Core A64 scalar memory/exclusive tail cleanup from `basic-a64-instructions.s.yaml` completed; promoted the scalar literal `ldr`, exclusive/acquire (`stxr`/`ldxr`/`stxp`/`ldxp`/`stlxr`/`ldaxr`/`ldar`) tail, unprivileged/unscaled memory (`ldur*`/`stur*`/`ldtr*`/`sttr*`/`prfum`), remaining register-offset byte/halfword/`ldrsw`/`prfm`, and `stnp_gen`, bringing `basic-a64-instructions.s.yaml` unsupported cases down to `51`.
- SME2 floating max/min and ZIP/UZP cleanup completed; promoted `f{max,maxnm,min,minnm}_mz_{zzv,zzw}` plus the related BF16 `bf{max,maxnm,min,minnm}_mz_{zzv,zzw}` siblings and `zip_mz_zz`/`uzp_mz_zz`, fixed ZA multi-vector arithmetic/permutation formatting and the `MaxImplementedSVL()` parser skip for the `Q` encodings, and cleared `SME2/{fmax,fmaxnm,fmin,fminnm,zip,uzp}.s.yaml`.
- FP8 SME2 dot/MLA cleanup completed; promoted `fdot_za{,32}_{z8z8v,z8z8i,z8z8w}`, `fvdot_za_z8z8i`, `fvdot{b,t}_za32_z8z8i`, `fmlal_za_z8z8{v,i,w}`, and `fmlall_za32_z8z8{v,i,w}`, added the FP8 SME ZA dot/long-accumulate formatter paths, and cleared `FP8_SME2/{dot,mla}.s.yaml`.
- SME zeroing cleanup from `SME/zero.s.yaml` and `SME2p1/zero.s.yaml` completed; promoted `zero_za_i` plus the SME2p1 `zero_za{1,2,4}_ri` siblings, added shortest-mask/base ZA zero formatting, and cleared both zero source shards.
- SME2 integer max/min/shift/arithmetic cleanup from `SME2/{smax,smin,umax,umin,sqdmulh,srshl,urshl}.s.yaml` completed; promoted the merged-vector `*_mz_{zzv,zzw}` families, reused the shared SME arithmetic formatter path for single-vector and multi-vector variants, and cleared all seven source shards.
- SME2 integer dot-product cleanup from `SME2/svdot.s.yaml` and `SME2/uvdot.s.yaml` completed; promoted `svdot_za_{zzi,za32_zzi}` and `uvdot_za_{zzi,za32_zzi}`, reused the ZA dot-product formatter path for the vertical variants, and cleared both source shards.
- SVE2 complex arithmetic and FP8 convert cleanup completed; promoted `cmla_z_{zzz,zzzi}`, `sqrdcmlah_z_{zzz,zzzi}`, and the FP8 SVE2 convert XMLs, with correct rotate/lane formatting and `SVE2/{cmla,sqrdcmlah}.s.yaml` plus `FP8_SVE2/fcvt.s.yaml` cleared.
- SVE2 and SVE2p1 predicate/move/extract cleanup completed; promoted `pmov_p_zi`, `pmov_z_pi`, `pext_pn_rr`, and `pext_pp_rr`, fixed indexed predicate/vector move and extract formatting, and cleared `SVE2p1/{pmov,pext}.s.yaml`.
- SVE memory and matrix-multiply cleanup completed; promoted `ld1b`/`st1b`, `ld1ro*`, `bfmlalb`/`bfmlalt`, the remaining SVE `fmul` forms, `fmmla`, and the related `zip`/`uzp`/`trn` vector permutations, clearing `SVE/{ld1b,st1b,bfmlal,fmul,matrix-multiply-fp64}.s.yaml`.
- SVE logical, compare, and move cleanup completed; promoted the logical immediate/register, move-alias, `SEL` move-alias, and floating predicate-compare families, clearing `SVE/{and,bic,dup,dupm,eor,fcmeq,mov,orr,sel}.s.yaml` plus related `fcm*`, `eon`, and `orn` alias shards.
- AdvSIMD multi-structure load/store cleanup from `neon-simd-ldst-multi-elem.s.yaml` and `neon-simd-post-ldst-multi-elem.s.yaml` completed; promoted `ld2`/`ld3`/`ld4` plus `st2`/`st3`/`st4` multiple-structure forms, fixed register-count formatting for non-post-index encodings, and cleared both source shards.
- AdvSIMD immediate move/logical-immediate cleanup from `neon-mov.s.yaml` completed; promoted `movi`/`mvni`/`bic`/`orr` immediates plus `fmov` and `mov` vector aliases, clearing `neon-mov.s.yaml` and unblocking the full test suite.
- AdvSIMD BF16 and scalar BF16 cleanup from `armv8.6a-bf16.s.yaml` completed; promoted `bfdot`, `bfmmla`, `bfcvtn`/`bfcvtn2`, `bfcvt`, and `bfmlal{b,t}` vector/by-element forms, clearing the BF16 shard.
- Core A64 scalar FP arithmetic/unary/select cleanup from `basic-a64-instructions.s.yaml` completed; promoted `fcsel`, scalar `fmov`/`fabs`/`fneg`/`fsqrt`, `frint{n,p,m,z,a,x,i}`, `fmul`/`fdiv`/`fadd`/`fsub`/`fmax`/`fmin`/`fmaxnm`/`fminnm`/`fnmul`, and `fmadd`/`fmsub`/`fnmadd`/`fnmsub`, bringing `basic-a64-instructions.s.yaml` unsupported cases down to `111`.
- Core A64 scalar FP/int/control cleanup from `basic-a64-instructions.s.yaml` completed; promoted the scalar FP/int/control batch plus related `MSR`/`SYSL` aliases, bringing `basic-a64-instructions.s.yaml` unsupported cases down to `182`.
- Core A64 scalar load/store leftovers from `basic-a64-instructions.s.yaml` completed; promoted `ldrsh_reg`, `ldrsb_reg`, `str_reg_gen`, `stp_gen`, `stlxp`, and `ldnp_fpsimd`, bringing `basic-a64-instructions.s.yaml` unsupported cases down to `161`.
- AdvSIMD miscellaneous unary/narrow/widen cleanup from `neon-simd-misc.s.yaml` completed; promoted `clz`, `xtn`/`*xtn2`, `shll`/`shll2`, `fabs`, `fneg`, `frint*`, and `fcvtns`, bringing `neon-simd-misc.s.yaml` unsupported cases down to `96`.
- AdvSIMD widening/addhn/multiply leftovers from `neon-3vdiff.s.yaml` completed; promoted `smull`/`umull`, `saddw`/`uaddw`, `ssubw`/`usubw`, and `addhn`/`raddhn` with correct `2`/upper-half formatting, bringing `neon-3vdiff.s.yaml` unsupported cases down to `22`.
- Core architectural extension cleanup from root source files outside the main scalar batch completed; promoted CSSC min/max and unary integer ops, `clrbhb`, `fcadd`/`fcmla`, `frint32*`/`frint64*`, `fmlal`/`fmlsl`, and the remaining scalar AdvSIMD convert families, clearing `armv8.9a-cssc.s.yaml`, `armv8.9a-clrbhb.s.yaml`, `armv8.3a-complex{,_nofp16}.s.yaml`, `armv8.5a-frint.s.yaml`, `armv8a-fpmul.s.yaml`, and `neon-scalar-cvt.s.yaml`.

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
