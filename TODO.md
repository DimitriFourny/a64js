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

- AdvSIMD miscellaneous unary/saturating batch from `neon-simd-misc.s.yaml`: cover the unsupported unary and saturating vector operations across `suqadd_advsimd.xml`, `usqadd_advsimd.xml`, `sqabs_advsimd.xml`, `sqneg_advsimd.xml`, `abs_advsimd.xml`, `neg_advsimd.xml`, `rev64_advsimd.xml`, `saddlp_advsimd.xml`, `uaddlp_advsimd.xml`, `sadalp_advsimd.xml`, `uadalp_advsimd.xml`, and `cls_advsimd.xml`. Done when: lane arrangements and saturating/absolute/accumulate mnemonics render correctly across vector widths; the family is promoted in `tools/supported-files.ts`; generation and tests pass.
- AdvSIMD immediate-shift family from `neon-simd-shift.s.yaml`: implement the main vector shift batch across `sshr_advsimd.xml`, `ushr_advsimd.xml`, `ssra_advsimd.xml`, `usra_advsimd.xml`, `srshr_advsimd.xml`, `urshr_advsimd.xml`, `srsra_advsimd.xml`, `ursra_advsimd.xml`, `sri_advsimd.xml`, `sli_advsimd.xml`, `sqshlu_advsimd.xml`, and `sqshl_advsimd_imm.xml`. Done when: immediate ranges and arrangement-dependent mnemonics render correctly for all supported lane widths; the whole shift batch is promoted in `tools/supported-files.ts`; generation and tests pass.
- AdvSIMD widening long/arithmetic batch from `neon-3vdiff.s.yaml`: implement the core widening arithmetic family across `saddl_advsimd.xml`, `uaddl_advsimd.xml`, `ssubl_advsimd.xml`, `usubl_advsimd.xml`, `sabal_advsimd.xml`, `uabal_advsimd.xml`, `sabdl_advsimd.xml`, `uabdl_advsimd.xml`, `smlal_advsimd_vec.xml`, `umlal_advsimd_vec.xml`, `smlsl_advsimd_vec.xml`, and `umlsl_advsimd_vec.xml`. Done when: widening/add-sub/absolute-difference/long multiply-accumulate vector forms decode and disassemble with correct arrangements; the family is promoted in `tools/supported-files.ts`; generation and tests pass.
- AdvSIMD single-structure load/store batch from `neon-simd-ldst-one-elem.s.yaml`: implement the one-element and replicate load/store family across `ld1r_advsimd.xml`, `ld2r_advsimd.xml`, `ld3r_advsimd.xml`, `ld4r_advsimd.xml`, `ld1_advsimd_sngl.xml`, `ld2_advsimd_sngl.xml`, `ld3_advsimd_sngl.xml`, `ld4_advsimd_sngl.xml`, `st1_advsimd_sngl.xml`, `st2_advsimd_sngl.xml`, `st3_advsimd_sngl.xml`, and `st4_advsimd_sngl.xml`. Done when: lane index syntax, structure lists, replicate forms, and post-index formatting all match expected assembly; the family is promoted in `tools/supported-files.ts`; generation and tests pass.
- AdvSIMD by-element multiply/MLA batch from `neon-2velem.s.yaml`: implement the remaining by-element arithmetic family across `mla_advsimd_elt.xml`, `mls_advsimd_elt.xml`, `fmla_advsimd_elt.xml`, `fmls_advsimd_elt.xml`, `fmul_advsimd_elt.xml`, `fmulx_advsimd_elt.xml`, `smlal_advsimd_elt.xml`, `smlsl_advsimd_elt.xml`, `sqdmlal_advsimd_elt.xml`, `umlal_advsimd_elt.xml`, `umlsl_advsimd_elt.xml`, and `sqdmlsl_advsimd_elt.xml`. Done when: indexed-lane operands and long/saturating by-element arithmetic disassemble correctly; the family is promoted in `tools/supported-files.ts`; generation and tests pass.
- RCpc/RCpc3 load-store batch from `armv8.4a-ldst.s.yaml` and `armv8.9a-lrcpc3.s.yaml`: implement the remaining ordered/unprivileged memory families across `ldapursb.xml`, `ldapursh.xml`, `ldapur_gen.xml`, `ldapurb.xml`, `ldapurh.xml`, `ldapursw.xml`, `stlur_gen.xml`, `stlurb.xml`, `stlurh.xml`, `stilp.xml`, `stlur_fpsimd.xml`, `ldapur_fpsimd.xml`, `stlr.xml`, `stl1_advsimd_sngl.xml`, and `ldap1_advsimd_sngl.xml`. Done when: RCpc, RCpc3, unprivileged acquire, and release/store variants render with correct addressing and operand syntax across GPR, FP/SIMD, and single-structure forms; the family is promoted in `tools/supported-files.ts`; generation and tests pass.
- MTE instruction batch from `armv8.5a-mte.s.yaml`: implement the remaining memory-tagging family across `stgp.xml`, `stg.xml`, `stzg.xml`, `st2g.xml`, `stz2g.xml`, `irg.xml`, `addg.xml`, `subg.xml`, `gmi.xml`, `cmpp_subps.xml`, `ldg.xml`, and `ldgm.xml`. Done when: tag store/load, pointer-generation, and comparison forms disassemble with correct immediate/address syntax; the family is promoted in `tools/supported-files.ts`; generation and tests pass.


## Blocked

- None.

## Done

Use one line per completed work item with a concise outcome note. Keep detailed history below in `Completed Families`.

- AdvSIMD compare family from `neon-compare-instructions.s.yaml`: `222` capstone cases promoted across the vector/scalar compare batch, covering integer register/zero compares plus floating register/zero compares through `cm{eq,ge,gt,hi,hs,le,lt}_advsimd*.xml` and `fcm{eq,ge,gt,le,lt}_advsimd*.xml`.
- Scalar multiply-long and FP move leftovers from `basic-a64-instructions.s.yaml`: `52` capstone cases promoted across `mneg_msub.xml`, `smaddl.xml`, `smsubl.xml`, `umaddl.xml`, `umsubl.xml`, `smulh.xml`, `umulh.xml`, `fmov_float_gen.xml`, and `fmov_float_imm.xml`, with the related `SMULL`/`SMNEGL`/`UMULL`/`UMNEGL` alias XMLs promoted alongside the base family.
- Core scalar alias and bit-manipulation cleanup from `basic-a64-instructions.s.yaml`: `48` capstone cases promoted across `cset_csinc.xml`, `csetm_csinv.xml`, `tst_ands_log_imm.xml`, `ands_log_imm.xml`, `extr.xml`, `rev.xml`, `lsl_lslv.xml`, `lsr_lsrv.xml`, `asr_asrv.xml`, and `ror_rorv.xml`, covering `CSET`/`CSETM`, `TST`, `EXTR`/`ROR`, `REV`, and variable-shift register aliases.
- Scalar FP convert and compare cleanup from `basic-a64-instructions.s.yaml`: `106` capstone cases promoted across `fccmp_float.xml`, `fccmpe_float.xml`, `fcvt_float.xml`, `fcvtn{s,u}_float.xml`, `fcvtp{s,u}_float.xml`, `fcvtm{s,u}_float.xml`, `fcvtzs{,_float_fix}.xml`, `fcvtzu{,_float_fix}.xml`, `scvtf_{float_int,float_fix}.xml`, and `ucvtf_{float_int,float_fix}.xml`, covering scalar FP conditional compare plus float/int and fixed-point conversion forms.
- Conditional-compare family from `basic-a64-instructions.s.yaml`: `24` capstone cases promoted across `ccmp_imm.xml`, `ccmn_imm.xml`, `ccmp_reg.xml`, and `ccmn_reg.xml`, covering 32-bit and 64-bit immediate/register forms with decimal NZCV formatting and named conditions.
- FP/SIMD scalar and pair load/store batch from `basic-a64-instructions.s.yaml`: `108` capstone cases promoted across `ldr_imm_fpsimd.xml`, `str_imm_fpsimd.xml`, `ldp_fpsimd.xml`, `stp_fpsimd.xml`, `ldr_reg_fpsimd.xml`, and `str_reg_fpsimd.xml`, covering `b`/`h`/`s`/`d`/`q` immediate, register-offset, and pair forms.
- Subtract-with-carry family from `basic-a64-instructions.s.yaml`: `28` capstone cases promoted across `sbc.xml`, `sbcs.xml`, `ngc_sbc.xml`, and `ngcs_sbcs.xml`, including raw `SBC`/`SBCS` rendering and `NGC`/`NGCS` alias formatting for 32-bit and 64-bit forms.
- Barrier and cache/TLB maintenance batch from `basic-a64-instructions.s.yaml`: `85` capstone cases promoted across `dmb.xml`, `dsb.xml`, `at_sys.xml`, `dc_sys.xml`, and `tlbi_sys.xml`, including barrier option names, `DFB`, named `AT`/`DC`/`IC`/`TLBI` operations, and guarded overlap handling for unsupported SYS aliases.
- Conditional-select family from `basic-a64-instructions.s.yaml`: `46` capstone cases promoted across `csel.xml`, `cinc_csinc.xml`, `cinv_csinv.xml`, and `cneg_csneg.xml`, including `CINC`/`CINV`/`CNEG` alias rendering, raw `CSINC`/`CSINV`/`CSNEG` forms, and `cset`/`csetm` overlap kept unsupported.
- Integer datapath cleanup from `basic-a64-instructions.s.yaml`: multiply-accumulate plus logical shifted-register/immediate support landed across `mul_madd.xml`, `madd.xml`, `msub.xml`, `and_log_shift.xml`, `and_log_imm.xml`, `orr_log_imm.xml`, and `eor_log_imm.xml`, with `MNEG` and `MOV (bitmask immediate)` overlaps still gated as unsupported until their alias XML families are promoted.
- Capstone fixture refresh workflow: `bun tools/generate.ts` now refreshes the committed `test/generated/capstone/` shards from the tracked corpus, clearing the stale `basic-a64-instructions.s.yaml#909 STUR 0xb8100010` blocker and restoring end-to-end green validation under `bun test`.
- Bitfield and shift-alias cleanup from `basic-a64-instructions.s.yaml`: `85` capstone cases promoted across the overlapping bitfield alias family, covering `bfi_bfm.xml`, `bfc_bfm.xml`, `asr_sbfm.xml`, `lsl_ubfm.xml`, `lsr_ubfm.xml`, and the shared `sbfiz`/`sbfx`/`sxt*`/`ubfiz`/`ubfx`/`uxt*` aliases with centralized immediate rendering.
- Core scalar memory batch from `basic-a64-instructions.s.yaml`: `79` capstone cases promoted across `ldp_gen.xml`, `ldpsw.xml`, `ldr_reg_gen.xml`, `ldrsh_imm.xml`, `ldrsb_imm.xml`, and `prfm_imm.xml`, including pair loads, signed byte/halfword immediates, register-offset loads, and immediate `PRFM` hints.
- Extended-register add/subtract family: `113` capstone cases promoted to supported across `add_addsub_ext.xml`, `sub_addsub_ext.xml`, `adds_addsub_ext.xml`, `subs_addsub_ext.xml`, `cmn_adds_addsub_ext.xml`, and `cmp_subs_addsub_ext.xml`.
- SVE predicate-control cleanup batch: `42` capstone cases promoted to supported across `brka_p_p_p.xml`, `brkb_p_p_p.xml`, `brkn_p_p_pp.xml`, `brkns_p_p_pp.xml`, `brkpa_p_p_pp.xml`, `brkpas_p_p_pp.xml`, `brkpb_p_p_pp.xml`, `brkpbs_p_p_pp.xml`, `ptest_p_p.xml`, `rdffr_p_f.xml`, `rdffr_p_p_f.xml`, and `rdffrs_p_p_f.xml`.
- SME2 BF16 subtraction completion: `21` capstone cases promoted to supported across `bfsub_z_{p_zz,zz}.xml` and `bfmls_z_{p_zzz,zzzi}.xml`.
- Scalar load/store immediate and unscaled family: `57` capstone cases promoted to supported across `stur_gen.xml`, `ldur_gen.xml`, `str_imm_gen.xml`, `ldrb_imm.xml`, `ldrh_imm.xml`, `strb_imm.xml`, `strh_imm.xml`, and `ldrsw_imm.xml`.
- Remaining scalar load/store edge cases from `basic-a64-instructions.s.yaml`: `32` capstone cases promoted across `ldrh_reg.xml`, `ldrb_reg.xml`, `ldnp_gen.xml`, `stur_fpsimd.xml`, `ldur_fpsimd.xml`, and `stnp_fpsimd.xml`, covering register-offset byte/halfword loads, non-temporal general/FP pair forms, and unscaled FP/SIMD loads/stores.

## Snapshot

Current capstone coverage snapshot:

- `20214` supported capstone cases
- `14343` unsupported capstone cases
- `382` XML instruction files currently listed in `tools/supported-files.ts`
- `1504` distinct unsupported XML instruction files
- `854` capstone source YAML files containing unsupported cases
- `845` distinct unsupported mnemonics

Highest-value remaining source files right now:

- `neon-simd-misc.s.yaml`: `260`
- `basic-a64-instructions.s.yaml`: `216`
- `neon-simd-shift.s.yaml`: `159`
- `neon-3vdiff.s.yaml`: `142`
- `neon-simd-ldst-one-elem.s.yaml`: `128`
- `neon-2velem.s.yaml`: `120`

Largest unsupported feature sets:

- `FEAT_SVE || FEAT_SME, FEAT_SVE, FEAT_SME`: `3773`
- `FEAT_SVE2 || FEAT_SME, FEAT_SVE2, FEAT_SME`: `1950`
- `FEAT_SME2`: `1725`
- `FEAT_AdvSIMD`: `1703`
- `FEAT_SME2 || FEAT_SVE2p1, FEAT_SME2, FEAT_SVE2p1`: `785`
- `FEAT_SVE2p1 || FEAT_SME2p1, FEAT_SVE2p1, FEAT_SME2p1`: `774`
- `FEAT_SVE`: `386`
- `FEAT_SME`: `294`
- no feature gate recorded: `166`
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

## Completed Families

Recently completed families and batches:

- AdvSIMD compare family: `222` capstone cases promoted across `cmeq_advsimd_{reg,zero}.xml`, `cm{ge,gt}_advsimd_{reg,zero}.xml`, `cm{hi,hs,le,lt}_advsimd.xml`, `fcmeq_advsimd_{reg,zero}.xml`, `fcm{ge,gt}_advsimd_{reg,zero}.xml`, and `fcm{le,lt}_advsimd.xml`, with shared scalar/vector compare operand formatting and a decode-guard generation fix in `tools/encodings.ts` restoring the intended `EndOfDecode(...)` handling.
- Scalar multiply-long and FP move leftovers: `52` capstone cases promoted across `mneg_msub.xml`, `smaddl.xml`, `smsubl.xml`, `umaddl.xml`, `umsubl.xml`, `smulh.xml`, `umulh.xml`, `fmov_float_gen.xml`, and `fmov_float_imm.xml`, with `MNEG`, `SMULL`, `SMNEGL`, `UMULL`, and `UMNEGL` alias formatting plus scalar `FMOV` general/immediate operand rendering
- Core scalar alias and bit-manipulation cleanup: `48` capstone cases promoted across `cset_csinc.xml`, `csetm_csinv.xml`, `tst_ands_log_imm.xml`, `ands_log_imm.xml`, `extr.xml`, `rev.xml`, `lsl_lslv.xml`, `lsr_lsrv.xml`, `asr_asrv.xml`, and `ror_rorv.xml`, with architectural alias rendering for `CSET` / `CSETM` / `TST` / `ROR` and scalar `REV` plus variable-shift register forms
- Conditional-compare family: `24` capstone cases promoted across `ccmp_imm.xml`, `ccmn_imm.xml`, `ccmp_reg.xml`, and `ccmn_reg.xml`, with immediate/register forms rendered using decimal NZCV literals and named conditions
- Subtract-with-carry family: `28` capstone cases promoted across `sbc.xml`, `sbcs.xml`, `ngc_sbc.xml`, and `ngcs_sbcs.xml`, with `NGC` / `NGCS` aliases rendered from the dedicated alias XMLs
- Barrier and cache/TLB maintenance batch: `85` capstone cases promoted across `dmb.xml`, `dsb.xml`, `at_sys.xml`, `dc_sys.xml`, and `tlbi_sys.xml`
- Bitfield immediate aliases: `85` capstone cases promoted across `bfi_bfm.xml`, `bfc_bfm.xml`, `asr_sbfm.xml`, `lsl_ubfm.xml`, `lsr_ubfm.xml`, `sbfiz_sbfm.xml`, `sbfx_sbfm.xml`, `sxtb_sbfm.xml`, `sxth_sbfm.xml`, `sxtw_sbfm.xml`, `ubfiz_ubfm.xml`, `ubfx_ubfm.xml`, `uxtb_ubfm.xml`, and `uxth_ubfm.xml`
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
- Extended-register `ADD` / `SUB` / `ADDS` / `SUBS` with `CMN` / `CMP` aliases: `113` capstone cases promoted to supported across `*_addsub_ext.xml`
- Conditional-select family: `46` capstone cases promoted across `csel.xml`, `cinc_csinc.xml`, `cinv_csinv.xml`, and `cneg_csneg.xml`, with alias condition inversion handled in the formatter while `cset` / `csetm` remain unsupported
