# Instruction Support TODO

This file is a work queue plus backlog snapshot, not a scratchpad. Each Codex run should take one concrete work item from `Ready`, finish it end-to-end, then update this file before stopping.

## Workflow

### Execution rule

Pick exactly one work item from `Ready`, unless a task is already listed under `In Progress`. Do not treat `Backlog Statistics` as a claimable queue.

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

## Backlog Statistics

Priority rule:

- prefer the most-used and most broadly expected instruction families first
- use the current capstone snapshot volume as the default tie-breaker
- only take niche SME/SVE/AdvSIMD work ahead of scalar/core A64 work when it clearly removes a larger unsupported batch

Backlog target:

- the grouped counts below are the remaining roadmap to drive the unsupported capstone count to zero
- each line names a source-YAML file that still accounts for unsupported capstone cases
- these are prioritization statistics, not claimable work items
- when a family spills into related alias XMLs, promote the whole family together before touching `tools/supported-files.ts`

- `neon-simd-copy.s.yaml`: `41`
- `neon-simd-misc.s.yaml`: `39`
- `neon-2velem.s.yaml`: `36`
- `neon-aba-abd.s.yaml`: `28`
- `neon-saturating-add-sub.s.yaml`: `28`
- `neon-add-sub-instructions.s.yaml`: `24`
- `neon-halving-add-sub.s.yaml`: `24`
- `neon-mul-div-instructions.s.yaml`: `23`
- `neon-3vdiff.s.yaml`: `22`
- `neon-mla-mls-instructions.s.yaml`: `22`
- `neon-scalar-dup.s.yaml`: `22`
- `neon-shift.s.yaml`: `21`
- `neon-facge-facgt.s.yaml`: `20`
- `armv8.6a-simd-matmul.s.yaml`: `18`
- `neon-scalar-by-elem-saturating-mul.s.yaml`: `17`
- `neon-scalar-saturating-add-sub.s.yaml`: `16`
- `neon-scalar-recip.s.yaml`: `15`
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
- `armv8.7a-wfxt.s.yaml`: `4`
- `apple_proprietary.s.yaml`: `3`
- `case-insen-reg-names.s.yaml`: `3`
- `neon-scalar-abs.s.yaml`: `3`
- `udf.s.yaml`: `3`
- `armv8.3a-js.s.yaml`: `2`
- `armv8.4a-trace.s.yaml`: `2`
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

- `neon-shift` vector shift batch: promoted `shl_advsimd.xml`, `sshl_advsimd.xml`, `ushl_advsimd.xml`, `srshl_advsimd.xml`, `urshl_advsimd.xml`, `sqshl_advsimd_reg.xml`, `uqshl_advsimd_reg.xml`, `sqrshl_advsimd.xml`, `uqrshl_advsimd.xml`, `sshll_advsimd.xml`, and `ushll_advsimd.xml` for `neon-shift.s.yaml`, `neon-rounding-shift.s.yaml`, `neon-saturating-rounding-shift.s.yaml`, `neon-saturating-shift.s.yaml`, and `neon-shift-left-long.s.yaml`; added shared AdvSIMD shift-register, left-shift-immediate, and widening long-shift formatter/test coverage; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-scalar-shift` scalar shift batch: completed as shared spillover from the promoted AdvSIMD shift XMLs, clearing `neon-scalar-saturating-rounding-shift.s.yaml`, `neon-scalar-saturating-shift.s.yaml`, `neon-scalar-rounding-shift.s.yaml`, `neon-scalar-shift.s.yaml`, and `neon-scalar-shift-imm.s.yaml`; verified by the same `bun tools/generate.ts` and `bun test` pass.
- `neon-crypto` batch: promoted `aese_advsimd.xml`, `aesd_advsimd.xml`, `aesmc_advsimd.xml`, `aesimc_advsimd.xml`, `sha1h_advsimd.xml`, `sha1su1_advsimd.xml`, `sha256su0_advsimd.xml`, `sha1c_advsimd.xml`, `sha1p_advsimd.xml`, `sha1m_advsimd.xml`, `sha1su0_advsimd.xml`, `sha256h_advsimd.xml`, `sha256h2_advsimd.xml`, and `sha256su1_advsimd.xml` for `neon-crypto.s.yaml`; added AdvSIMD crypto operand formatter/test coverage; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-compare` scalar and pairwise batch: promoted `addp_advsimd_vec.xml`, `addp_advsimd_pair.xml`, `faddp_advsimd_vec.xml`, and `faddp_advsimd_pair.xml` to finish `neon-scalar-fp-compare.s.yaml`, `neon-scalar-compare.s.yaml`, `neon-scalar-reduce-pairwise.s.yaml`, and `neon-add-pairwise.s.yaml`; added AdvSIMD pairwise add formatter/test coverage; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-mul-div` and MLA/MLS batch: promoted `mul_advsimd_vec.xml`, `fmul_advsimd_vec.xml`, `fdiv_advsimd.xml`, `pmul_advsimd.xml`, `sqdmulh_advsimd_vec.xml`, `sqrdmulh_advsimd_vec.xml`, `fmulx_advsimd_vec.xml`, `mla_advsimd_vec.xml`, `mls_advsimd_vec.xml`, `fmla_advsimd_vec.xml`, `fmls_advsimd_vec.xml`, `sqdmull_advsimd_vec.xml`, `sqdmlal_advsimd_vec.xml`, and `sqdmlsl_advsimd_vec.xml` for `neon-mul-div-instructions.s.yaml`, `neon-mla-mls-instructions.s.yaml`, and `neon-scalar-mul.s.yaml`; added vector/scalar multiply-accumulate formatter coverage and regression assertions; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-facge/facgt` and fp reciprocal batch: promoted `facge_advsimd.xml`, `facgt_advsimd.xml`, `frecps_advsimd.xml`, `frecpx_advsimd.xml`, and `frsqrts_advsimd.xml` for `neon-facge-facgt.s.yaml`, `neon-frsqrt-frecp.s.yaml`, and `neon-scalar-recip.s.yaml`; routed absolute compare through the floating-point compare formatter and reciprocal step/exponent forms through the shared AdvSIMD operand formatters; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-add-sub` and halving batch: promoted `add_advsimd.xml`, `sub_advsimd.xml`, `fadd_advsimd.xml`, `fsub_advsimd.xml`, `shadd_advsimd.xml`, `uhadd_advsimd.xml`, `shsub_advsimd.xml`, `uhsub_advsimd.xml`, `srhadd_advsimd.xml`, and `urhadd_advsimd.xml` for `neon-add-sub-instructions.s.yaml`, `neon-halving-add-sub.s.yaml`, and `neon-rounding-halving-add.s.yaml`; routed the family through the shared AdvSIMD three-register formatter path; ran `bun tools/generate.ts` and `bun test` successfully.
- `armv8.6a-simd-matmul` and dot-product batch: promoted `smmla_advsimd_vec.xml`, `ummla_advsimd_vec.xml`, `usmmla_advsimd_vec.xml`, `usdot_advsimd_vec.xml`, `usdot_advsimd_elt.xml`, and `sudot_advsimd_elt.xml` to finish `armv8.6a-simd-matmul.s.yaml` alongside the already clean `dot-req.s.yaml`; added AdvSIMD I8MM matrix-multiply and mixed-sign dot-product formatter/test coverage; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-saturating-add-sub` core batch: promoted `sqadd_advsimd.xml`, `uqadd_advsimd.xml`, `sqsub_advsimd.xml`, and `uqsub_advsimd.xml` for `neon-saturating-add-sub.s.yaml` and `neon-scalar-saturating-add-sub.s.yaml`; routed scalar/vector saturating add/sub formatting through the shared three-register AdvSIMD operand path; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-aba-abd` and diff batch: promoted `saba_advsimd.xml`, `uaba_advsimd.xml`, `sabd_advsimd.xml`, and `uabd_advsimd.xml` to complete `neon-aba-abd.s.yaml` alongside the existing `sabal_advsimd.xml`, `uabal_advsimd.xml`, `sabdl_advsimd.xml`, and `uabdl_advsimd.xml` support for `neon-3vdiff.s.yaml`; added AdvSIMD absolute-difference/accumulate regression coverage; ran `bun tools/generate.ts` and `bun test` successfully.
- `armv8.5a-mte` and prediction/resource batch: promoted `subp.xml`, `subps.xml`, `stgm.xml`, `stzgm.xml`, `cfp_sys.xml`, `dvp_sys.xml`, `cpp_sys.xml`, `cosp_sys.xml`, and `esb.xml` for `armv8.5a-mte.s.yaml`, `armv8.5a-predres.s.yaml`, `armv8.9a-specres2.s.yaml`, and `ras-extension.s.yaml`; added MTE pointer/tag and SPECRES/SPECRES2 operand formatting; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-sxtl/uxtl` and scalar abs batch: promoted `sxtl_sshll_advsimd.xml`, `uxtl_ushll_advsimd.xml`, and `fabd_advsimd.xml` for `neon-sxtl.s.yaml`, `neon-uxtl.s.yaml`, and `neon-scalar-abs.s.yaml`; added SXTL/UXTL alias formatting plus scalar/vector FABD operand coverage; ran `bun tools/generate.ts` and `bun test` successfully.
- `armv9.5a-cpa` and `armv9.4a-gcs` system extension batch: promoted `addpt.xml`, `subpt.xml`, `maddpt.xml`, `msubpt.xml`, `gcsss1_sys.xml`, `gcspushm_sys.xml`, `gcsb.xml`, and `chkfeat.xml` for `armv9.5a-cpa.s.yaml`, `armv9.4a-gcs.s.yaml`, and `armv9.4a-chk.s.yaml`; added checked-pointer and GCS/CHK formatter coverage; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-2velem` lane-by-element batch: promoted `mul_advsimd_elt.xml`, `smull_advsimd_elt.xml`, `umull_advsimd_elt.xml`, `sqdmull_advsimd_elt.xml`, `sqdmulh_advsimd_elt.xml`, and `sqrdmulh_advsimd_elt.xml` for `neon-2velem.s.yaml` and `neon-scalar-by-elem-saturating-mul.s.yaml`; fixed by-element formatter routing plus widening `...2` suffix handling; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-simd-misc` and compare/bitwise batch: promoted `rev32_advsimd.xml`, `rev16_advsimd.xml`, `cnt_advsimd.xml`, `mvn_not_advsimd.xml`, `rbit_advsimd.xml`, `fcvtn_advsimd.xml`, `fcvtl_advsimd.xml`, `urecpe_advsimd.xml`, `ursqrte_advsimd.xml`, `frecpe_advsimd.xml`, `frsqrte_advsimd.xml`, `fsqrt_advsimd.xml`, `cmtst_advsimd.xml`, `and_advsimd.xml`, `eor_advsimd.xml`, `bit_advsimd.xml`, `bif_advsimd.xml`, `bsl_advsimd.xml`, `orn_advsimd.xml`, and `bic_advsimd_reg.xml` for `neon-simd-misc.s.yaml`, `neon-compare-instructions.s.yaml`, and `neon-bitwise-instructions.s.yaml`; ran `bun tools/generate.ts` and `bun test` successfully.
- `armv8.4a-flag` and flag-manipulation batch: promoted `cfinv.xml`, `setf.xml`, `rmif.xml`, `xaflag.xml`, and `axflag.xml` for `armv8.4a-flag.s.yaml`, `armv8.4a-flagm.s.yaml`, and `armv8.5a-altnzcv.s.yaml`; ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-perm` and table/permutation batch: promoted `uzp1_advsimd.xml`, `uzp2_advsimd.xml`, `trn1_advsimd.xml`, `trn2_advsimd.xml`, `zip1_advsimd.xml`, `zip2_advsimd.xml`, `tbl_advsimd.xml`, and `tbx_advsimd.xml` for `neon-perm.s.yaml` and `neon-tbl.s.yaml`; ran `bun tools/generate.ts` and `bun test` successfully.
- pointer-auth and RCpc scalar batch: promoted `pacm.xml`, `pacnbiasppc.xml`, and `pacnbibsppc.xml` to finish `armv8.3a-signed-pointer.s.yaml`, `armv8.3a-rcpc.s.yaml`, and `armv9.5a-pauthlr.s.yaml`; ran `bun tools/generate.ts` and `bun test` successfully.
- `armv8.5a-bti` and branch barrier batch: promoted `bti.xml`, `csdb.xml`, and `sb.xml` for `armv8.5a-bti.s.yaml`, `speculation-barriers.s.yaml`, and `armv8.5a-sb.s.yaml`; ran `bun tools/generate.ts` and `bun test` successfully.
- `basic-a64-instructions` core A64 cleanup: promoted the remaining scalar/core A64 XML batch for `basic-a64-instructions.s.yaml` and `arm64-basic-a64-instructions.s.yaml` (CRC32, divide/reverse/classify, exception/hint/system/no-operand, logical aliases, STLRB/STLRH); ran `bun tools/generate.ts` and `bun test` successfully.
- `neon-simd-copy` and lane-move batch: promoted `ins_advsimd_gen.xml`, `ins_advsimd_elt.xml`, `smov_advsimd.xml`, `umov_advsimd.xml`, `mov_umov_advsimd.xml`, `dup_advsimd_elt.xml`, and `ext_advsimd.xml` for `neon-simd-copy.s.yaml`, `neon-scalar-dup.s.yaml`, and `neon-extract.s.yaml`; ran `bun tools/generate.ts` and `bun test` successfully.

## Snapshot

Current capstone coverage snapshot:

- `25212` supported capstone cases
- `9345` unsupported capstone cases
- `887` XML instruction files currently listed in `tools/supported-files.ts`
- `1013` distinct unsupported XML instruction files
- `726` capstone source YAML files containing unsupported cases
- `615` distinct unsupported mnemonics

Highest-value remaining source files right now:

- `neon-simd-copy.s.yaml`: `41`
- `neon-simd-misc.s.yaml`: `39`
- `SVE/fcmla.s.yaml`: `38`
- `SVE/sqadd.s.yaml`: `38`
- `SVE/sqsub.s.yaml`: `38`

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

- the scalar/core A64 cleanup batch from `basic-a64-instructions.s.yaml` and `arm64-basic-a64-instructions.s.yaml` is complete
- the pointer-auth and RCpc scalar batch from `armv8.3a-signed-pointer.s.yaml`, `armv8.3a-rcpc.s.yaml`, and `armv9.5a-pauthlr.s.yaml` is complete
- the AdvSIMD permutation/table batch from `neon-perm.s.yaml` and `neon-tbl.s.yaml` is complete
- the remaining work is now concentrated in the AdvSIMD/SVE/SME long tail
- the ready queue should keep tracking family-sized batches seeded from the current highest-value unsupported source files
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
