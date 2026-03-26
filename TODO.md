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

## Blocked

- Workflow queue is currently exhausted: `Ready` contains no work items and `In Progress` is empty, while the remaining named batches are already blocked by the stale capstone fixture failure at `basic-a64-instructions.s.yaml#909 STUR 0xb8100010`, so no item can be claimed under the execution rule for this run.
- AdvSIMD high-volume cleanup batch: claimed under the current workflow, but before any new family promotion could be validated, `bun tools/generate.ts` succeeded while `bun test` still failed on the pre-existing stale capstone fixture case `basic-a64-instructions.s.yaml#909 STUR 0xb8100010`; the repository also does not expose a local capstone snapshot-refresh workflow under the normal commands, so newly promoted AdvSIMD XML families cannot be validated end-to-end right now.
- SVE predicate-control cleanup batch: decode/disasm support for `brka_p_p_p.xml`, `brkb_p_p_p.xml`, `brkn_p_p_pp.xml`, `brkns_p_p_pp.xml`, `brkpa_p_p_pp.xml`, `brkpas_p_p_pp.xml`, `brkpb_p_p_pp.xml`, `brkpbs_p_p_pp.xml`, `ptest_p_p.xml`, `rdffr_p_f.xml`, `rdffr_p_p_f.xml`, and `rdffrs_p_p_f.xml` is implemented locally; `bun tools/generate.ts` succeeds and direct disasm coverage passes, but `bun test` is still blocked by the pre-existing stale capstone fixture case `basic-a64-instructions.s.yaml#909 STUR 0xb8100010`, so the batch cannot be validated end-to-end under the current workflow.
- SME2 BF16 subtraction completion: decode/disasm support for `bfsub_z_{p_zz,zz}.xml` and `bfmls_z_{p_zzz,zzzi}.xml` is implemented locally, `bun tools/generate.ts` succeeds, and direct disasm coverage passes, but the committed capstone fixtures under `test/generated/capstone/` do not refresh from the available workflow; `bun test` therefore cannot validate the batch end-to-end because those snapshots remain stale and the suite still fails on the pre-existing scalar load/store stale-fixture case `basic-a64-instructions.s.yaml#909 STUR 0xb8100010`.
- Scalar load/store immediate and unscaled family: decode/disasm support and `tools/supported-files.ts` promotion are implemented locally, and `bun tools/generate.ts` succeeds, but the committed capstone fixtures under `test/generated/capstone/` are stale and the repo does not contain a local snapshot-refresh workflow/script to regenerate them; `bun test` therefore fails in `test/capstone.test.ts` on newly supported cases such as `basic-a64-instructions.s.yaml#909 STUR 0xb8100010`.

## Done

Use one line per completed work item with a concise outcome note. Keep detailed history below in `Completed Families`.

- None yet in this workflow format.

## Snapshot

Current capstone coverage snapshot:

- `17763` supported capstone cases
- `16858` unsupported capstone cases
- `201` XML instruction files currently listed in `tools/supported-files.ts`
- `1686` distinct unsupported XML instruction files
- `896` capstone source YAML files containing unsupported cases
- `911` distinct unsupported mnemonics

Highest-value remaining source files right now:

- `basic-a64-instructions.s.yaml`: `1180`
- `neon-simd-misc.s.yaml`: `260`
- `neon-compare-instructions.s.yaml`: `180`
- `neon-simd-shift.s.yaml`: `159`
- `neon-3vdiff.s.yaml`: `142`
- `neon-simd-ldst-one-elem.s.yaml`: `128`

Largest unsupported feature sets:

- `FEAT_SVE || FEAT_SME, FEAT_SVE, FEAT_SME`: `4111`
- `FEAT_SME2`: `2253`
- `FEAT_SVE2 || FEAT_SME, FEAT_SVE2, FEAT_SME`: `2030`
- `FEAT_AdvSIMD`: `1882`
- `FEAT_SME2 || FEAT_SVE2p1, FEAT_SME2, FEAT_SVE2p1`: `1329`
- no feature gate recorded: `935`
- `FEAT_SME`: `778`
- `FEAT_SVE2p1 || FEAT_SME2p1, FEAT_SVE2p1, FEAT_SME2p1`: `774`
- `FEAT_SME_B16B16`: `408`
- `FEAT_SVE`: `392`

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
- The recent system-register work formats generic system-register operands as `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>`. That is acceptable for coverage and should not block further family support.
- `tools/encodings.ts` needs to tolerate feature terms inside larger guard expressions; keep that in mind when working on mixed-guard XMLs.
- If `MOVA`-related capstone accounting does not move as expected, verify the XML-to-case mapping before assuming the formatter is wrong.

## Completed Families

Recently completed families and batches:

- `ldiapp.xml`: `48` capstone cases promoted to supported across the LRCPC3 ordered register-pair load family
- SVE signed saturating scalar inc/dec: `624` cases promoted to supported across 8 XML files
- SVE unsigned saturating scalar inc/dec: `624` cases promoted to supported across 8 XML files
- SME ZA tile-slice contiguous loads/stores: `484` capstone cases promoted to supported across `ld1{b,h,w,d,q}_za_p_rrr.xml`, `st1{b,h,w,d,q}_za_p_rrr.xml`, and the matching `apple_proprietary` snapshot aliases
- SVE scalar count (`cntb_r_s.xml`): `48` capstone cases promoted to supported across `CNTB`, `CNTH`, `CNTW`, and `CNTD`
- AdvSIMD `UDOT` / `SDOT` vector and by-element: `176` cases promoted to supported across 4 XML files
- AdvSIMD `SQRDMLAH` / `SQRDMLSH` vector and by-element: 4 XML files promoted to supported
- SME2 `SMLALL`, `SMLSLL`, `UMLALL`, and `UMLSLL`: `1344` cases promoted to supported
- SME2 `SMLAL`, `SMLSL`, and `UMLAL`: support landed for the 16-bit-to-32-bit long multiply-accumulate family across `*_za_zzi.xml`, `*_za_zzv.xml`, and `*_za_zzw.xml`
- SME2 `BFMLAL`, `BFMLSL`, `FMLAL`, and `FMLSL`: `672` cases promoted out of the unsupported capstone set across 12 XML files
- SME2 `BFADD`, `BFMLA`, and `BFMLS`: `336` capstone cases promoted to supported across `bfadd_za_zw.xml`, `bfmla_za_{zzi,zzv,zzw}.xml`, and `bfmls_za_{zzi,zzv,zzw}.xml`
- SME2 `BFSUB`: `48` capstone cases promoted to supported across `bfsub_za_zw.xml`
- SME2 `SUMLALL`, `USMLALL`, and `UMLSL`: mixed-sign long multiply-accumulate support landed across `sumlall_za_{zzi,zzv}.xml`, `usmlall_za_{zzi,zzv,zzw}.xml`, and `umlsl_za_{zzi,zzv,zzw}.xml`
- SVE scalar-plus-immediate prefetch (`prfb_i_p_bi.xml`, `prfd_i_p_bi.xml`, `prfh_i_p_bi.xml`, `prfw_i_p_bi.xml`): support landed; regenerate the capstone snapshot to record the new totals
- SME2 `ADD`, `SUB`, `FMLA`, and `FMLS`: `1750` cases promoted to supported
- `mrs.xml`: `1789` cases promoted to supported
- `msr_reg.xml`: `1511` capstone cases promoted to supported
- `movprfx_z_z.xml`: `741` capstone cases promoted to supported
- `fcpy_z_p_i.xml`: `1040` capstone cases promoted to supported
- `fdup_z_i.xml`: `524` capstone cases promoted to supported
- `movprfx_z_p_z.xml`: `331` capstone cases promoted to supported
- `incb_r_rs.xml`: `186` capstone cases promoted to supported
- `cmpeq_p_p_zi.xml`: `160` capstone cases promoted to supported
- `decb_r_rs.xml`: `160` capstone cases promoted to supported
- CPY immediate forms (`cpy_z_o_i.xml`, `cpy_z_p_i.xml`, `cpy_z_p_v.xml`): `172` cases promoted to supported
- `mov_mova_*.xml`: decode/disasm support landed; capstone snapshot accounting should be tracked separately from scalar/SVE totals
- `movaz_*.xml`, `dup_z_i.xml`, `cpy_z_p_r.xml`, `rprfm_reg.xml`: `442` capstone cases promoted to supported
- `sdot_za*.xml`, `sdot_za32*.xml`, `udot_za*.xml`, `udot_za32*.xml`: `865` capstone cases promoted to supported
- `cmpeq_p_p_zz.xml`: `80` capstone cases promoted to supported across the SVE vector compare family
- `cmpeq_p_p_zw.xml`: `60` capstone cases promoted to supported across the SVE wide-element compare family
- `ptrue_p_s.xml`, `ptrues_p_s.xml`: `160` capstone cases promoted to supported across the SVE predicate-initialization family
- `frinta_z_p_z.xml`: `70` capstone cases promoted to supported across the SVE predicated FRINT* family
- `mrrs.xml`, `msrr.xml`: `132` capstone cases promoted to supported across the 128-bit system-register move family
- `ldapr.xml`: `68` capstone cases promoted to supported across the RCpc load-acquire family
- SME2 `BFDOT` (`bfdot_za_zzi.xml`, `bfdot_za_zzv.xml`, `bfdot_za_zzw.xml`): `144` capstone cases promoted to supported
- SME2 `FDOT` (`fdot_za_zzi.xml`, `fdot_za_zzv.xml`, `fdot_za_zzw.xml`): `144` capstone cases promoted to supported
- SME2 `SUDOT` / `USDOT`: `240` capstone cases promoted to supported across `sudot_za_{zzi,zzv}.xml` and `usdot_za_{zzi,zzv,zzw}.xml`
- `dup_z_zi.xml`: `50` capstone cases promoted to supported across the SVE indexed DUP / `mov` alias family
- Scalar `FCMP` / `FCMPE` (`fcmp_float.xml`, `fcmpe_float.xml`): `10` capstone cases promoted to supported across `basic-a64-instructions.s.yaml` and `a64-ignored-fields.txt.yaml`
