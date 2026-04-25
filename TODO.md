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

## Formatter Strategy

Goal: stop scaling instruction support by adding more one-off `formatters.ts` cases for every XML family. The generated decode tables can stay large; the handwritten operand/rendering path should become smaller and more systematic.

Constraints:

- keep Arm XML-derived decode data as the source of truth
- keep Capstone fixtures as a progress/regression corpus only
- do not add Capstone-specific formatting overlays unless the project explicitly changes output compatibility goals
- do not depend on `<asmtemplate>` parsing for this migration
- prefer compact local operand/action schemas keyed by field shape, encoding id patterns, class names, feature/docvar-like metadata already collected, and explicit XML filename groups when needed

Target architecture:

1. Add a small operand/action schema layer that can express common operand construction patterns:
   - register operands: GP, SIMD/FP, SVE vector, predicate, ZA/tile text helpers
   - immediates: unsigned, signed, shifted, concatenated, scaled, PC-relative
   - memory forms: base, base+imm, pre/post-index, register offset, SVE/SME vector-length scaled forms
   - formatting actions: optional operands, lane suffixes, predicate modes, tuple/group text, alias mnemonic selection hooks
2. Generate or precompute a compact dispatch table from schemas to encodings during `bun tools/generate.ts`.
   - ordinary encodings should get a `formatFamily`/`operandAction` id rather than a new handwritten `switch` case
   - ambiguous or truly special encodings can remain on bespoke formatter functions
3. Keep the existing handwritten formatter as the fallback while migrating.
   - convert one family at a time
   - require `bun tools/generate.ts` and `bun test` after each conversion
   - do not promote more XML files in the same patch unless the schema work directly enables them
4. Use reports to track formatter coverage separately from instruction support.
   - supported XML file has no schema or bespoke formatter
   - schema candidate matches multiple incompatible formatter shapes
   - unsupported capstone cases match an already-known schema but are not yet promoted
5. End state:
   - generic families are handled by schemas
   - `buildOperands()` dispatches through generated schema ids first
   - the filename switch only contains genuinely special cases
   - adding a large remaining family usually means adding schema rows, not new formatter logic

## In Progress

## Ready

Coverage note: the generated capstone shards currently show `2418` unsupported cases, concentrated in `SVE2`, `SVE`, `SME2`, `SME`, and `SVE2p1`. The Ready queue below is intentionally grouped into family-sized implementation batches; it is meant to cover the remaining corpus without turning every XML file into a separate work item.


## Backlog Statistics

Priority rule:

- prefer the most-used and most broadly expected instruction families first
- use the current capstone snapshot volume as the default tie-breaker
- only take niche SME/SVE/AdvSIMD work ahead of scalar/core A64 work when it clearly removes a larger unsupported batch

Backlog target:

- the grouped counts below are the remaining roadmap to drive the unsupported capstone count to zero
- each line maps to one Ready work item above
- these are prioritization statistics, not claimable work items
- when a family spills into related alias XMLs, promote the whole family together before touching `tools/supported-files.ts`

- `SVE2` saturating, rounding, and narrowing shift cleanup: `432`
- `SVE` predicate, counter, vector-length, and FFR control cleanup: `285`
- `SVE` integer arithmetic, logical predicate, unary, and unpack cleanup: `276`
- `SVE2` widening multiply, long multiply, and multiply-accumulate cleanup: `260`
- `SVE2` complex, carry, pairwise min/max, bit, and reciprocal cleanup: `223`
- `SVE2` absolute-difference, widening add/sub, and pairwise add cleanup: `222`
- `SVE` floating-point arithmetic, conversion, estimate, and trig-helper cleanup: `196`
- `SVE` remaining SVE-only memory, gather/scatter, predicate memory, and prefetch cleanup: `187`
- `SME` and `SME2` ZA/vector-length, matrix outer-product, LUTI, MOVT, and ZERO residual cleanup: `169`
- `SME2` floating rounding, narrowing conversion, and narrowing shift cleanup: `120`
- `SVE2p1` BFMLS and Q-vector scalar-memory residual cleanup: `48`

## Blocked

## Done

- `SME2` floating rounding, narrowing conversion, and narrowing shift cleanup: promoted `frint{a,m,n,p}_mz_z.xml`, `sqcvt_z_mz{2,4}.xml`, `sqcvtu_z_mz{2,4}.xml`, `sqcvtun_z_mz4.xml`, `sqrshr_z_mz{2,4}.xml`, `sqrshru_z_mz{2,4}.xml`, `sqrshrun_z_mz4.xml`, `uqcvt_z_mz{2,4}.xml`, and `uqrshr_z_mz{2,4}.xml` through the shared SME multi-vector int/float convert, narrowing convert, and narrowing shift formatter paths; all listed SME2 shards now have zero unsupported cases; regenerated fixtures/encodings with `bun tools/generate.ts` and `bun test` passed, dropping capstone unsupported cases from `120` to `0`.

- `SME` and `SME2` ZA/vector-length, matrix outer-product, LUTI, MOVT, and ZERO residual cleanup: promoted `addspl_r_ri.xml`, `addsvl_r_ri.xml`, `str_za_ri.xml`, `sumopa_za_pp_zz.xml`, `sumops_za_pp_zz.xml`, `uclamp_z_zz.xml`, `usmopa_za_pp_zz.xml`, `usmops_za_pp_zz.xml`, `luti2_z_ztz.xml`, `luti4_z_ztz.xml`, `movt_r_zt.xml`, `movt_zt_r.xml`, and `zero_zt_i.xml` through the shared SME/SVE vector-length, ZA array-vector, outer-product, LUTI, and ZT0 formatter paths; all listed SME/SME2 residual shards now have zero unsupported cases; regenerated fixtures/encodings with `bun tools/generate.ts` and `bun test` passed, reducing unsupported capstone cases from `2975` to `120`.
- `SVE` floating-point arithmetic, conversion, estimate, and trig-helper cleanup: promoted `bfcvt{,nt}_z_p_z.xml`, `fabd_z_p_zz.xml`, `fabs_z_p_z.xml`, `fadd_z_zz.xml`, `fadda_v_p_z.xml`, `fcvt_z_p_z.xml`, `fdivr_z_p_zz.xml`, `fexpa_z_z.xml`, `fmov_dup_z_i.xml`, `fmsb_z_p_zzz.xml`, `fmulx_z_p_zz.xml`, `fneg_z_p_z.xml`, `fnmad_z_p_zzz.xml`, `fnmsb_z_p_zzz.xml`, `frecpe_z_z.xml`, `frecps_z_zz.xml`, `frecpx_z_p_z.xml`, `frsqrte_z_z.xml`, `frsqrts_z_zz.xml`, `fscale_z_p_zz.xml`, `fsqrt_z_p_z.xml`, `fsub_z_zz.xml`, `ftmad_z_zzi.xml`, `ftsmul_z_zz.xml`, and `ftssel_z_zz.xml` through shared SVE FP unary/binary/FMA formatter paths plus focused BF16 reduction/indexed helpers; all listed SVE FP shards now have zero unsupported cases; regenerated fixtures/encodings with `bun tools/generate.ts` and `bun test` passed.
- `SVE2` complex, carry, pairwise min/max, bit, and reciprocal cleanup: promoted `adcl{b,t}_z_zzz.xml`, `cadd_z_zz.xml`, `eor{bt,tb}_z_zz.xml`, `flogb_z_p_z.xml`, `fmax{,nm}p_z_p_zz.xml`, `fmin{,nm}p_z_p_zz.xml`, `rax1_z_zz.xml`, `sbcl{b,t}_z_zzz.xml`, `sli_z_zzi.xml`, `smaxp_z_p_zz.xml`, `sminp_z_p_zz.xml`, `sqcadd_z_zz.xml`, `sri_z_zzi.xml`, `umaxp_z_p_zz.xml`, `uminp_z_p_zz.xml`, `urecpe_z_p_z.xml`, and `ursqrte_z_p_z.xml` through shared SVE2 carry/complex-rotate/predicated pairwise/unary/shift-insert formatter paths; all listed SVE2 shards now have zero unsupported cases; regenerated fixtures/encodings with `bun tools/generate.ts` and `bun test` passed, dropping unsupported capstone cases from `2975` to `1281`.
- `SVE2` absolute-difference, widening add/sub, and pairwise add cleanup: promoted `saba`/`uaba`, `sabal*`/`uabal*`, `sabdl*`/`uabdl*`, `sadalp`/`uadalp`, `saddlbt`, `saddw*`/`uaddw*`, `shsubr`, `sshll*`/`ushll*`, and `ssubl*`/`ssubw*`/`usubw*` through shared SVE operand-formatter paths; regenerated encodings/fixtures and `bun tools/generate.ts` plus `bun test` passed, dropping unsupported capstone cases from `2418` to `1504`.

Keep one concise line per completed work item.

- `SVE2p1` BFMLS and Q-vector scalar-memory residual cleanup: promoted `bfmlslb_z_{zzz,zzzi}.xml`, `bfmlslt_z_{zzz,zzzi}.xml`, `ld1q_z_p_ar.xml`, and `st1q_z_p_ar.xml` through the shared SVE BF16 long multiply and contiguous-memory formatter paths; all listed `SVE2p1/{bfmlslb,bfmlslt,ld1q,st1q}.s.yaml` shards now have zero unsupported cases; regenerated fixtures/encodings with `bun tools/generate.ts` and `bun test` passed.

- `SVE2` widening multiply, long multiply, and multiply-accumulate cleanup: promoted `SVE2/{smlalb,smlalt,smlslb,smlslt,smulh,smullb,smullt,sqdmlalb,sqdmlalbt,sqdmlalt,sqdmlslb,sqdmlslbt,sqdmlslt,sqdmullb,sqdmullt,umlalb,umlalt,umlslb,umlslt,umulh,umullb,umullt}.s.yaml` with a shared SVE2 widening-long multiply formatter path covering vector and indexed encodings, including mixed `i3*`/`i2*` index fields; all listed capstone shards now have zero unsupported cases, `bun tools/generate.ts` regenerated encodings/fixtures, and `bun test` passed.

- `SVE2` saturating, rounding, and narrowing shift cleanup: promoted the listed `rshr*`/`shr*`, saturating unary and predicated binary, `sqxtun*`, and `*sra` accumulate families by wiring them through the shared SVE narrowing-shift, narrowing-extract, predicated unary/binary, and accumulate-immediate formatter paths; all listed SVE2 shards now have zero unsupported cases; regenerated fixtures/encodings with `bun tools/generate.ts` and `bun test` passed.
- `SME2` ZA dot-product and outer-product batch: promoted `smopa_za{,32}_pp_zz.xml`, `smops_za{,32}_pp_zz.xml`, `umopa_za{,32}_pp_zz.xml`, `umops_za{,32}_pp_zz.xml`, `bmopa_za_pp_zz.xml`, `bmops_za_pp_zz.xml`, `bfmopa_za{,32}_pp_zz.xml`, `bfmops_za{,32}_pp_zz.xml`, `fvdot_za_zzi.xml`, `bfvdot_za_zzi.xml`, `suvdot_za_zzi.xml`, and `usvdot_za_zzi.xml` with shared SME outer-product and ZA multi-vector dot formatting; all listed `SME2/{smopa,smops,umopa,umops,bmopa,bmops,bfmopa,bfmops,fvdot,bfvdot,svdot,uvdot,suvdot,usvdot,sudot,usdot,sdot,udot}.s.yaml` shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE2` multiply, dot-product, complex, and polynomial arithmetic batch: promoted `mul_z_{zz,zzi}.xml`, `mla_z_zzzi.xml`, `mls_z_zzzi.xml`, `sqdmulh_z_{zz,zzi}.xml`, `sqrdmulh_z_{zz,zzi}.xml`, `sqrdmlah_z_{zzz,zzzi}.xml`, `sqrdmlsh_z_{zzz,zzzi}.xml`, `cdot_z_{zzz,zzzi}.xml`, `pmul_z_zz.xml`, `pmull{b,t}_z_zz.xml`, and `fmlal{b,t}_z_{zzz,zzzi}.xml`/`fmlsl{b,t}_z_{zzz,zzzi}.xml` with shared SVE multiply-accumulate/indexed/dot/polynomial formatting (`CDOT` const immediate and `PMULL*.Q` lanes included); all listed SVE2 multiply/dot/polynomial shards now have zero unsupported cases; `mla_z_zzz.xml` and `mls_z_zzz.xml` are not present in the current Arm XML tree; regenerated fixtures/encodings and `bun test` passed.
- FP8 SVE/SME arithmetic, dot, LUT, and system batch: promoted FP8 AdvSIMD (`fdot_advsimd_{2way,4way}{vec,elem}.xml`, `famax_advsimd.xml`, `famin_advsimd.xml`, `fmlalb_advsimd_{vec,elem}.xml`, `fmlallbb_advsimd_{vec,elem}.xml`, `luti{2,4}_advsimd.xml`), FP8_SVE2 (`fdot_z_{zz8z8,zz8z8i}.xml`, `fdot_z32_{zz8z8,zz8z8i}.xml`, `fmlalb/fmlalt_z_{z8z8z8,z8z8z8i}.xml`, `fmlall{bb,bt,tb,tt}_z32_{z8z8z8,z8z8z8i}.xml`, `luti{2,4}_z_zz.xml`), and FP8_SME2 (`{f,bf}1cvt{,l}_mz2_z8.xml`, `{bf}cvt_z8_mz2.xml`, `fcvt{,n}_z8_mz4.xml`, `famax_mz_zzw.xml`, `famin_mz_zzw.xml`, `fscale_mz_{zzv,zzw}.xml`, `luti4_mz4_ztmz2.xml`, `fmopa_za{16,32}_pp_z8z8.xml`, `movt_zt_z.xml`) via shared AdvSIMD/SVE dot/LUT and SME FP8 convert/outer-product/memory formatting; all listed `FP8`, `FP8_SVE2`, and `FP8_SME2` shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SME2` FP/BF arithmetic, conversion, and narrowing batch: promoted `fclamp_mz_zz.xml`, `bfclamp_mz_zz.xml`, `fcvt_z_mz2.xml`, `bfcvt_z_mz2.xml`, `fcvtn_z_mz2.xml`, `bfcvtn_z_mz2.xml`, `scvtf_mz_z.xml`, `ucvtf_mz_z.xml`, `fcvtzs_mz_z.xml`, `fcvtzu_mz_z.xml`, `sqcvtn_z_mz4.xml`, `uqcvtn_z_mz4.xml`, `sqrshrn_z_mz4.xml`, and `uqrshrn_z_mz4.xml` via shared SME multi-vector clamp/conversion/narrowing-shift formatting; all listed SME2 FP/BF arithmetic and conversion shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE2` widening, narrowing, pairwise, and halving add/sub batch: promoted `addp_z_p_zz.xml`, `faddp_z_p_zz.xml`, `shadd_z_p_zz.xml`, `uhadd_z_p_zz.xml`, `shsub_z_p_zz.xml`, `uhsub_z_p_zz.xml`, `saddl{b,t}_z_zz.xml`, `uaddl{b,t}_z_zz.xml`, `ssubl{b,t}_z_zz.xml`, `usubl{b,t}_z_zz.xml`, `addhn{b,t}_z_zz.xml`, `subhn{b,t}_z_zz.xml`, `raddhn{b,t}_z_zz.xml`, and `rsubhn{b,t}_z_zz.xml` via shared predicated destructive-binary plus widening/narrowing mixed-lane operand formatting; all listed `SVE2/{addp,faddp,shadd,uhadd,shsub,uhsub,saddlb,saddlt,uaddlb,uaddlt,ssublb,ssublt,usublb,usublt,addhnb,addhnt,subhnb,subhnt,raddhnb,raddhnt,rsubhnb,rsubhnt}.s.yaml` shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SME2` multi-vector load/store and scalar memory batch: promoted `ld1{b,h,w,d}_mzx_p_{bi,br}.xml`, `st1{b,h,w,d}_mzx_p_{bi,br}.xml`, `ldnt1{b,h,w,d}_mzx_p_{bi,br}.xml`, `stnt1{b,h,w,d}_mzx_p_{bi,br}.xml`, `ldr_zt_br.xml`, and `str_zt_br.xml` by extending contiguous-memory matching/operand rendering for `mzx` predicate-counter groups plus SME2 ZT scalar memory operands; all listed `SME2/{ld1*,st1*,ldnt1*,stnt1*,ldr,str}.s.yaml` shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE2p1` BF/FP arithmetic, clamp, and narrowing conversion batch: promoted `bfadd_z_{p_zz,zz}.xml`, `bfmul_z_{p_zz,zz,zzi}.xml`, `bfmla_z_{p_zzz,zzzi}.xml`, `bfmax_z_p_zz.xml`, `bfmaxnm_z_p_zz.xml`, `bfmin_z_p_zz.xml`, `bfminnm_z_p_zz.xml`, `bfclamp_z_zz.xml`, `fclamp_z_zz.xml`, `fdot_z_{zzz,zzzi}.xml`, `sqcvtn_z_mz2.xml`, `sqcvtun_z_mz2.xml`, `uqcvtn_z_mz2.xml`, and `sqrshr{n,un}_z_mz2.xml`/`uqrshrn_z_mz2.xml` with shared SVE predicated/binary/multiply-accumulate/dot formatting plus new SME2 two-register-group narrowing convert/shift operand formatting; all listed `SVE2p1` shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE2` bitwise, crypto, table, match, histogram, and predicate-control batch: promoted `tbl_z_zz.xml`, `{bsl,bsl1n,bsl2n,nbsl}_z_zzz.xml`, `bcax_z_zzz.xml`, `eor3_z_zzz.xml`, `xar_z_zzi.xml`, `aes{e,d}_z_zz.xml`, `aes{mc,imc}_z_z.xml`, `sm4{e,ekey}_z_zz.xml`, `{match,nmatch}_p_p_zz.xml`, `hist{cnt_z_p_zz,seg_z_zz}.xml`, and `while{wr,rw}_p_rr.xml` with shared destructive SVE2 logical/crypto, table-lookup tuple, histogram, and while-predicate operand formatting; all listed SVE2 shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE2` saturating, rounding, and narrowing shift batch: promoted `sqshl_z_p_{zz,zi}.xml`, `uqshl_z_p_{zz,zi}.xml`, `sqshlu_z_p_zi.xml`, `sqrshl_z_p_zz.xml`, `uqrshl_z_p_zz.xml`, `srshr_z_p_zi.xml`, `urshr_z_p_zi.xml`, `{s,u}qshr{nb,nt}_z_zi.xml`, `{s,u}qrshr{nb,nt}_z_zi.xml`, and `{s,u}qxtn{b,t}_z_zz.xml` with shared predicated shift/binary plus SVE2 narrowing shift/extract operand formatting; listed SVE2 shift/narrow shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE2` memory and remaining conversion/bit-permutation cleanup: promoted `ldnt1{b,h,w,d,sb,sh,sw}_z_p_ar.xml`, `stnt1{b,h,w,d}_z_p_ar.xml`, `fcvtlt_z_p_z.xml`, `fcvtnt_z_p_z.xml`, `fcvtx_z_p_z.xml`, `fcvtxnt_z_p_z.xml`, `bdep_z_zz.xml`, `bext_z_zz.xml`, and `bgrp_z_zz.xml` with shared SVE vector-plus-scalar non-temporal memory formatting plus predicated narrowing-conversion and bit-permutation operand coverage; all listed SVE2 shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE2p1` Q-vector load/store and non-temporal memory batch: promoted `ld1{b,h,w,d}_mz_p_{bi,br}.xml`, `st1{b,h,w,d}_mz_p_{bi,br}.xml`, `ldnt1{b,h,w,d}_mz_p_{bi,br}.xml`, `stnt1{b,h,w,d}_mz_p_{bi,br}.xml`, and `ld{2,3,4}q_z_p_{bi,br}.xml`/`st{2,3,4}q_z_p_{bi,br}.xml` via shared contiguous-memory formatting (including predicate-as-counter `pn8`-`pn15` and Q-lane tuple rendering); all listed `SVE2p1` memory shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE2p1` Q-vector permute/table/dup/predicate batch: promoted `dupq_z_zi.xml`, `tblq_z_zz.xml`, `tbxq_z_zz.xml`, `zipq1_z_zz.xml`, `zipq2_z_zz.xml`, `uzpq1_z_zz.xml`, `uzpq2_z_zz.xml`, `extq_z_zi.xml`, and `cntp_r_pn.xml` with shared Q-vector permute/indexed-operand formatting; `SVE2p1/{dupq,tblq,tbxq,zipq1,zipq2,uzpq1,uzpq2,extq,cntp,ptrue,pmov,pext,while*}.s.yaml` shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE` arithmetic, min/max, scalar-immediate, and predicated unary long-tail batch: promoted `mul_z_{p_zz,zi}.xml`, `smax_z_{p_zz,zi}.xml`, `smin_z_{p_zz,zi}.xml`, `umax_z_{p_zz,zi}.xml`, `umin_z_{p_zz,zi}.xml`, `fmax_z_p_{zz,zs}.xml`, `fmaxnm_z_p_{zz,zs}.xml`, `fmin_z_p_{zz,zs}.xml`, `fminnm_z_p_{zz,zs}.xml`, `fsubr_z_p_{zz,zs}.xml`, `incp_{r_p_r,z_p_z}.xml`, `decp_{r_p_r,z_p_z}.xml`, `abs_z_p_z.xml`, `neg_z_p_z.xml`, and `asrd_z_p_zi.xml`; all listed shards now have zero unsupported cases; regenerated encodings/fixtures and `bun test` passed.
- Scalar, system, AdvSIMD, and proprietary residual cleanup: promoted `dup_advsimd_gen.xml`, `pmull_advsimd.xml`, `rsubhn_advsimd.xml`, `fjcvtzs.xml`, `ldaprb.xml`, `ldaprh.xml`, `ldra.xml`, `pacda.xml`, `autda.xml`, `pacdb.xml`, `autdb.xml`, `pacga.xml`, `ereta.xml`, `tsb.xml`, `wfet.xml`, `wfit.xml`, `trcit_sys.xml`, `gcsstr.xml`, `gcssttr.xml`, `gcspushx_sys.xml`, `gcspopx_sys.xml`, `gcspopcx_sys.xml`, and `udf_perm_undef.xml`; all listed residual shards now show zero unsupported cases; regenerated encodings/fixtures and `bun test` passed.
- `SVE2p1` Q-vector reduction batch: promoted `addqv_z_p_z.xml`, `andqv_z_p_z.xml`, `eorqv_z_p_z.xml`, `orqv_z_p_z.xml`, `smaxqv_z_p_z.xml`, `sminqv_z_p_z.xml`, `umaxqv_z_p_z.xml`, `uminqv_z_p_z.xml`, `faddqv_z_p_z.xml`, `fmaxqv_z_p_z.xml`, `fmaxnmqv_z_p_z.xml`, `fminqv_z_p_z.xml`, and `fminnmqv_z_p_z.xml` with shared Q-vector reduction operand formatting (`Vd.T, Pg, Zn.Tb`); all listed `SVE2p1` Q-vector reduction shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE` contiguous and non-temporal load/store cleanup: promoted `ld1h_z_p_{bi,br}.xml`, `ld1w_z_p_{bi,br}.xml`, `ld1d_z_p_{bi,br}.xml`, and `ldnt1{b,h,w,d}_z_p_{bi,br}.xml` through the shared contiguous SVE memory formatter and supported-file gating; `SVE/ld1{b,h,w,d}.s.yaml`, `SVE/st1{b,h,w,d}.s.yaml`, `SVE/ldnt1{b,h,w,d}.s.yaml`, and `SVE/stnt1{b,h,w,d}.s.yaml` now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SME2` multi-vector select, permutation, and unpack batch: promoted `sel_mz_p_zz.xml`, `zip_mz_z.xml`, `uzp_mz_z.xml`, `sunpk_mz_z.xml`, and `uunpk_mz_z.xml` with shared two-/four-register group formatting, predicate-as-counter `SEL`, four-vector `ZIP`/`UZP`, and widening unpack source operands; ignored SVL-dependent XML decode guards instead of treating `.d` forms as unconditionally undefined; the listed `SME2/sel.s.yaml`, `SME2/zip.s.yaml`, `SME2/uzp.s.yaml`, `SME2/sunpk.s.yaml`, and `SME2/uunpk.s.yaml` shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SME2` integer min/max multi-vector batch: revalidated `smax_mz_zzv.xml`, `smax_mz_zzw.xml`, `smin_mz_zzv.xml`, `smin_mz_zzw.xml`, `umax_mz_zzv.xml`, `umax_mz_zzw.xml`, `umin_mz_zzv.xml`, and `umin_mz_zzw.xml` through the shared SME multi-vector arithmetic formatter; the listed `SME2/smax.s.yaml`, `SME2/smin.s.yaml`, `SME2/umax.s.yaml`, and `SME2/umin.s.yaml` shards are fully supported; regenerated fixtures/encodings and `bun test` passed.
- `SME2` integer clamp batch: promoted `sclamp_mz_zz.xml` and `uclamp_mz_zz.xml` with shared two-/four-register destination group formatting and scalar min/max source operands; `SME2/sclamp.s.yaml` and `SME2/uclamp.s.yaml` now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SME2` multi-vector ADD/SUB register-group cleanup: promoted `add_mz_zzv.xml` with the destructive multi-vector destination/source register-group formatter; `SME2/add.s.yaml` and `SME2/sub.s.yaml` now have zero unsupported cases, while `sub_mz_zzv.xml`, `add_mz_zzw.xml`, and `sub_mz_zzw.xml` are not present in the current Arm XML tree; regenerated fixtures/encodings and `bun test` passed.
- `FP8_SVE2` narrow convert batch: promoted `fcvtn_z8_mz2.xml`, `fcvtnb_z8_mz2.xml`, `fcvtnt_z8_mz2.xml`, and `bfcvtn_z8_mz2.xml` with shared FP8/BF16 two-register source-group formatting; `FP8_SVE2/fcvtn.s.yaml` now has zero unsupported cases, while FP8_SME2 `fcvt_z8_mz2.xml`/`bfcvt_z8_mz2.xml` same-shape spillover remains in the separate FP8 SVE/SME batch; regenerated fixtures/encodings and `bun test` passed.
- `SVE` sign-extending contiguous load batch: promoted `ld1sb_z_p_bi.xml`, `ld1sb_z_p_br.xml`, `ld1sh_z_p_bi.xml`, `ld1sh_z_p_br.xml`, `ld1sw_z_p_bi.xml`, and `ld1sw_z_p_br.xml` through the shared contiguous SVE memory formatter; adjacent `*_z_p_ai.xml`/`*_z_p_bz.xml` gather/vector-index forms were left unsupported because they use a different memory operand schema; regenerated fixtures/encodings and `bun test` passed.
- `FP8_SVE2` absolute min/max batch: promoted `famin_z_p_zz.xml` and `famax_z_p_zz.xml` through the existing predicated SVE/SME vector binary formatter, preserving the already-supported `MOVPRFX` cases; `FP8_SVE2/faminmax.s.yaml` now has zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- SME2p1 convert-and-move batch: promoted `SME2p1/fcvt.s.yaml` and `SME2p1/fcvtl.s.yaml` alongside the already-supported `movaz`/`zero` ZA move/zero forms with shared SME vector-group and ZA tile operand formatting; regenerated fixtures/encodings and `bun test` passed.
- SME2p1 floating arithmetic batch: promoted `SME2p1/fmopa.s.yaml` and `SME2p1/fmops.s.yaml` alongside the existing `fadd`/`fsub`/`fmla`/`fmls` ZA-array arithmetic coverage with shared SME outer-product ZA tile/predicate operand formatting; regenerated fixtures/encodings and `bun test` passed.
- `SME` ZA accumulator, outer-product, and array arithmetic cleanup: promoted `addha_za_pp_z.xml`, `addva_za_pp_z.xml`, `fmopa_za32_pp_zz.xml`, and `fmops_za32_pp_zz.xml` through shared SME ZA tile/predicate formatting; listed `SME/{addha-u32,addha-u64,addva-u32,addva-u64,fmopa,fmops,fmopa-fp64,fmops-fp64,bfmopa,bfmops,smopa-32,smopa-64,smops-32,smops-64}.s.yaml` shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- SME2p1 LUTI batch: promoted `SME2p1/luti2.s.yaml` and `SME2p1/luti4.s.yaml` through shared LUTI multi-vector group/index formatting for `mz2` and `mz4` forms, with adjacent SME2 consecutive-form spillover covered; regenerated fixtures/encodings and `bun test` passed.
- `SVE` matrix and dot-product batch: promoted `BFDOT`/`BFMMLA`, SVE `SDOT`/`UDOT`, int8 `SMMLA`/`UMMLA`/`USMMLA` plus `SUDOT`/`USDOT`, and adjacent SVE2p1 `z32` dot variants with shared SVE dot/matrix operand formatting; regenerated fixtures/encodings and `bun test` passed.
- `SVE` structured load/store batch: promoted scalar plus immediate/register `LD2`/`LD3`/`LD4`, `ST1`/`ST2`/`ST3`/`ST4`, and `STNT1` contiguous memory XMLs with shared tuple-register and MUL VL addressing formatting; regenerated fixtures/encodings and `bun test` passed.
- `SVE` first-fault and non-fault loads: promoted `SVE/ldff1b.s.yaml`, `SVE/ldff1h.s.yaml`, `SVE/ldff1w.s.yaml`, `SVE/ldff1d.s.yaml`, `SVE/ldnf1b.s.yaml`, `SVE/ldnf1h.s.yaml`, `SVE/ldnf1w.s.yaml`, and `SVE/ldnf1d.s.yaml`, plus signed spillover `SVE/ldff1sb.s.yaml`, `SVE/ldff1sh.s.yaml`, `SVE/ldff1sw.s.yaml`, `SVE/ldnf1sb.s.yaml`, `SVE/ldnf1sh.s.yaml`, and `SVE/ldnf1sw.s.yaml`, with shared fault-tolerant load addressing for scalar/vector/immediate forms; regenerated fixtures/encodings and `bun test` passed.
- `SVE` reduction and horizontal FP/int batch: promoted `SVE/orv.s.yaml`, `SVE/uaddv.s.yaml`, `SVE/smaxv.s.yaml`, `SVE/sminv.s.yaml`, `SVE/fmaxnmv.s.yaml`, and `SVE/fminnmv.s.yaml`, plus same-shape adjacent `SVE/andv.s.yaml`, `SVE/eorv.s.yaml`, `SVE/saddv.s.yaml`, `SVE/umaxv.s.yaml`, `SVE/uminv.s.yaml`, `SVE/faddv.s.yaml`, `SVE/fmaxv.s.yaml`, and `SVE/fminv.s.yaml`, with shared scalar-result reduction formatting; regenerated fixtures/encodings and `bun test` passed.
- `SVE` loads with replicated/scalarizing forms: promoted `SVE/ld1rb.s.yaml`, `SVE/ld1rh.s.yaml`, `SVE/ld1rw.s.yaml`, `SVE/ld1rsb.s.yaml`, `SVE/ld1rsh.s.yaml`, `SVE/ld1rsw.s.yaml`, `SVE/ld1rqb.s.yaml`, `SVE/ld1rqh.s.yaml`, `SVE/ld1rqw.s.yaml`, and `SVE/ld1rqd.s.yaml`, plus adjacent `SVE/ld1rd.s.yaml`, with shared replicated-load operand formatting; regenerated fixtures/encodings and `bun test` passed.
- Operand/action schema foundation: added generated `operandSchemaId` wiring plus a small GP-register operand action schema, migrated the add/sub-with-carry scalar register family (`ADC`/`ADCS`/`SBC`/`SBCS` and `NGC` aliases) out of the bespoke `buildOperands()` switch, regenerated fixtures with no support-count regression, and `bun test` passed.
- `SVE` permute-and-rearrange batch: promoted `SVE/trn1.s.yaml`, `SVE/trn2.s.yaml`, `SVE/zip1.s.yaml`, `SVE/zip2.s.yaml`, `SVE/uzp1.s.yaml`, `SVE/uzp2.s.yaml`, `SVE/rev.s.yaml`, `SVE/revb.s.yaml`, `SVE/compact.s.yaml`, plus `revh`/`revw` spillover via shared predicate/vector permutation formatters; regenerated encodings/fixtures and `bun test` passed.
- `SVE` logical-and-bitwise batch: promoted `SVE/and.s.yaml`, `SVE/ands.s.yaml`, `SVE/bic.s.yaml`, `SVE/eor.s.yaml`, `SVE/eors.s.yaml`, `SVE/orn.s.yaml`, `SVE/orr.s.yaml`, `SVE/nand.s.yaml`, `SVE/nands.s.yaml`, `SVE/nor.s.yaml`, `SVE/nors.s.yaml`, `SVE/not.s.yaml`, and `SVE/nots.s.yaml` by extending the shared predicate-logical formatter path to the flag-setting predicate forms and aliases (`MOVS`/`NOTS`), regenerating encodings/fixtures, and `bun test` passed.
- `SVE` floating compare-and-classify: promoted `SVE/faclt.s.yaml`, `SVE/fcmlt.s.yaml`, `SVE/fcmgt.s.yaml`, `SVE/fcmge.s.yaml`, `SVE/fcmeq.s.yaml`, and `SVE/fcmne.s.yaml` by extending the shared floating compare formatter path to `FAC<cc>`, regenerating encodings/fixtures, and `bun test` passed.
- `SVE` predicate-break and flow: promoted `SVE/brkb.s.yaml`, `SVE/brkbs.s.yaml`, `SVE/brka.s.yaml`, `SVE/brkas.s.yaml`, `SVE/brkn.s.yaml`, `SVE/brkns.s.yaml`, `SVE/brkpa.s.yaml`, `SVE/brkpas.s.yaml`, `SVE/brkpb.s.yaml`, `SVE/brkpbs.s.yaml`, `SVE/pfirst.s.yaml`, `SVE/pnext.s.yaml`, and `SVE/ptest.s.yaml` by extending the shared predicate-control formatter path, regenerated fixtures/encodings, and `bun test` passed.
- `SVE` complex arithmetic: promoted `SVE/fcmla.s.yaml`, `SVE/fcadd.s.yaml`, `armv8.3a-complex.s.yaml`, and `armv8.3a-complex_nofp16.s.yaml` with shared complex rotate formatting, corrected AdvSIMD/SVE operand ordering plus FP16-gated decode handling, regenerated fixtures/encodings, and `bun test` passed.
- `SVE` floating multiply-accumulate: promoted `SVE/fmla.s.yaml`, `SVE/fmls.s.yaml`, `SVE/fnmla.s.yaml`, and `SVE/fnmls.s.yaml` with one shared FP multiply-accumulate formatter covering predicated and indexed forms; regenerated fixtures/encodings, added direct regression assertions, and `bun test` passed.
- `SVE` floating-point arithmetic core: promoted `SVE/fadd.s.yaml`, `SVE/fsub.s.yaml`, `SVE/fmul.s.yaml`, `SVE/fdiv.s.yaml`, and `SVE/fmad.s.yaml` with shared predicated FP arithmetic formatting, regenerated fixtures/encodings, and `bun test` passed.
- `SVE` integer compare-and-mask batch was already implemented and promoted via the shared compare operand formatters for immediate, vector, and wide-vector forms; revalidated `SVE/cmpeq.s.yaml`, `SVE/cmple.s.yaml`, `SVE/cmplo.s.yaml`, `SVE/cmphi.s.yaml`, `SVE/cmpge.s.yaml`, and `SVE/cmpgt.s.yaml` with `bun tools/generate.ts` and `bun test`, both passing.
- `SVE` increment/decrement-by-predicate: promoted the saturating scalar and predicate-count inc/dec family, including `sqincp`/`uqincp` plus the related `sqdecp`/`uqdecp` XMLs, with shared scalar register formatting and direct predicate-count tests; regenerated fixtures and `bun test` passed.
- `SVE` saturating integer arithmetic: promoted `SVE/sqadd.s.yaml`, `SVE/sqsub.s.yaml`, `SVE/uqadd.s.yaml`, and `SVE/uqsub.s.yaml` with shared SVE binary/immediate operand formatting; regenerated and `bun test` passed, and all four capstone shards now have zero unsupported cases.
- `SVE` predicate count and while: promoted `SVE/cntp.s.yaml` alongside the already-shared `CNT*`/`WHILE*` formatting path, regenerated fixtures, and `bun test` passed with the batch fully supported.
- `SVE` arithmetic-and-shift core: `SVE/add.s.yaml`, `SVE/sub.s.yaml`, `SVE/subr.s.yaml`, `SVE/asr.s.yaml`, `SVE/lsl.s.yaml`, and `SVE/lsr.s.yaml` were already implemented and promoted through the shared SVE arithmetic/shift formatters; revalidated with `bun tools/generate.ts` and `bun test`, both passing.
- `neon-mov`: AdvSIMD move-immediate and alias coverage was already in place and promoted; revalidated `neon-mov.s.yaml` plus related spillover with `bun tools/generate.ts` and `bun test`, both passing cleanly.
- `neon-shift` and `neon-scalar-shift`: shared AdvSIMD shift-register, immediate-shift, and widening-long coverage landed; `bun tools/generate.ts` and `bun test` passed.
- `neon-crypto`: AES and SHA AdvSIMD families promoted with operand formatter coverage; generate/test passed.
- `neon-compare`: pairwise add and scalar compare spillover promoted for `neon-add-pairwise` and scalar compare shards; generate/test passed.
- `neon-mul-div` and MLA/MLS: vector/scalar multiply, divide, accumulate, and saturating multiply families promoted; generate/test passed.
- `neon-facge/facgt` and reciprocal-step: absolute FP compare and reciprocal helper families promoted; generate/test passed.
- `neon-add-sub`, halving, and rounding-halving: shared three-register AdvSIMD arithmetic formatting landed; generate/test passed.
- `armv8.6a-simd-matmul` and mixed dot-product: I8MM and mixed-sign dot-product families promoted; generate/test passed.
- `neon-saturating-add-sub`: signed/unsigned saturating add/sub families promoted; generate/test passed.
- `neon-aba-abd` and `neon-3vdiff`: absolute-difference and accumulate families promoted; generate/test passed.
- `armv8.5a-mte`, `armv8.5a-predres`, `armv8.9a-specres2`, and `ras-extension`: pointer-tag and system resource families promoted; generate/test passed.
- `neon-sxtl/uxtl` and `neon-scalar-abs`: widening aliases plus scalar/vector `FABD` coverage landed; generate/test passed.
- `armv9.5a-cpa`, `armv9.4a-gcs`, and `armv9.4a-chk`: checked-pointer and GCS/CHK system families promoted; generate/test passed.
- `neon-2velem` and scalar by-element saturating multiply: lane-by-element widening/saturating multiply families promoted; generate/test passed.
- `neon-simd-misc`, `neon-compare-instructions`, and `neon-bitwise-instructions`: misc FP/int/vector logical families promoted; generate/test passed.
- `armv8.4a-flag`, `armv8.4a-flagm`, and `armv8.5a-altnzcv`: flag-manipulation families promoted; generate/test passed.
- `neon-perm` and `neon-tbl`: transpose/zip/unzip/table permutation families promoted; generate/test passed.
- Pointer-auth and RCpc scalar cleanup: remaining pointer-auth aliases and RCpc spillover promoted; generate/test passed.
- `armv8.5a-bti`, `speculation-barriers`, and `armv8.5a-sb`: branch-target and speculation-barrier families promoted; generate/test passed.
- `basic-a64-instructions` and `arm64-basic-a64-instructions`: remaining core scalar A64 cleanup promoted; generate/test passed.
- `neon-simd-copy`, `neon-scalar-dup`, and `neon-extract`: lane-move, dup, and extract families promoted; generate/test passed.
- `SVE` index, insert, last-active, extend, and conversion cleanup: promoted `index_z_{ii,ir,ri,rr}.xml`, `insr_z_{r,v}.xml`, `clast{a,b}_{r_p_z,v_p_z,z_p_zz}.xml`, `last{a,b}_{r_p_z,v_p_z}.xml`, `adr_z_az.xml`, `ext_z_zi.xml`, `splice_z_p_zz.xml`, `sxtb_z_p_z.xml`, `uxtb_z_p_z.xml`, `fcvtz{s,u}_z_p_z.xml`, and `{s,u}cvtf_z_p_z.xml` with shared SVE operand-formatter coverage; fixed `tools/generate-capstone.ts` to only exclude the root `index.generated.ts` so `SVE/index.generated.ts` is repartitioned correctly; listed SVE shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SME` memory, MOVA/PSEL, clamp, and control cleanup: promoted `ldr_za_ri.xml`, `psel_p_ppi.xml`, `sclamp_z_zz.xml`, `revd_z_p_z.xml`, `rdsvl_r_i.xml`, and `tbx_z_zz.xml` with shared SME/SVE operand formatting for ZA array-vector load, predicate-index select, predicated REVD `.q`, signed VL read immediate, and unpredicated SVE binary forms; all listed `SME/{ld1*,st1*,ldr,mova,psel,sclamp,revd,rdsvl,smstart,smstop,feature}.s.yaml` shards now have zero unsupported cases; regenerated fixtures/encodings and `bun test` passed.
- `SVE` predicate, counter, vector-length, and FFR control cleanup: promoted `addpl_r_ri.xml`, `addvl_r_ri.xml`, `rdvl_r_i.xml`, `pfalse_p.xml`, `punpkhi_p_p.xml`, `ctermeq_rr.xml`, `setffr_f.xml`, `wrffr_f_p.xml`, `sqinc{d,h,w}_z_zs.xml`, `sqdec{d,h,w}_z_zs.xml`, `uqinc{d,h,w}_z_zs.xml`, `uqdec{d,h,w}_z_zs.xml`, `addpt_z_{zz,p_zz}.xml`, `subpt_z_{zz,p_zz}.xml`, `madpt_z_zzz.xml`, and `mlapt_z_zzz.xml`, plus predicate `ldr_p_bi.xml`/`str_p_bi.xml` spillover from `predicate-as-counter-aliases`; all listed SVE shards now have zero unsupported cases; regenerated fixtures/encodings with `bun tools/generate.ts` and `bun test` passed, dropping unsupported capstone cases from `1281` to `984`.
- `SVE` integer arithmetic, logical predicate, unary, and unpack cleanup: promoted `asrr_z_p_zz.xml`, `cls_z_p_z.xml`, `clz_z_p_z.xml`, `cnot_z_p_z.xml`, `cnt_z_p_z.xml`, `lslr_z_p_zz.xml`, `lsrr_z_p_zz.xml`, `mad_z_p_zzz.xml`, `mla_z_p_zzz.xml`, `mls_z_p_zzz.xml`, `msb_z_p_zzz.xml`, `nand_p_p_pp.xml`, `nor_p_p_pp.xml`, `not_z_p_z.xml`, `orn_p_p_pp.xml`, `orns_p_p_pp.xml`, `rbit_z_p_z.xml`, `sabd_z_p_zz.xml`, `sdiv_z_p_zz.xml`, `sdivr_z_p_zz.xml`, `smulh_z_p_zz.xml`, `sunpkhi_z_z.xml`, `uabd_z_p_zz.xml`, `udiv_z_p_zz.xml`, `udivr_z_p_zz.xml`, `umulh_z_p_zz.xml`, and `uunpkhi_z_z.xml` through shared SVE predicated unary/binary/mul-add and predicate-logical formatter paths plus an SVE unpack helper; all listed SVE shards now have zero unsupported cases; regenerated fixtures/encodings with `bun tools/generate.ts` and `bun test` passed.
- `SVE` remaining SVE-only memory, gather/scatter, predicate memory, and prefetch cleanup: promoted `ld1{b,h,w,d}_z_p_{ai,bz}.xml`, `ld1{sb,sh,sw}_z_p_{ai,bz}.xml`, `st1{b,h,w,d}_z_p_{ai,bz}.xml`, `prf{b,h,w,d}_i_p_{ai,bz}.xml`, and `ldr_z_bi.xml`/`str_z_bi.xml` through shared SVE gather/scatter memory, gather prefetch, and VL-scaled vector memory formatter paths; all listed SVE memory/prefetch shards now have zero unsupported cases; regenerated fixtures/encodings with `bun tools/generate.ts` and `bun test` passed.

## Snapshot

Current capstone coverage snapshot:

- `31646` supported capstone cases
- `2975` unsupported capstone cases
- `1586` XML instruction files currently listed in `tools/supported-files.ts`
- `322` distinct unsupported XML instruction files
- `281` capstone source YAML files containing unsupported cases
- `259` distinct unsupported mnemonics

Highest-value remaining source files right now:

- `FP8/faminmax.s.yaml`: `30`
- `FP8_SME2/cvt.s.yaml`: `24`
- `FP8_SME2/faminmax.s.yaml`: `24`
- `FP8_SME2/fscale.s.yaml`: `24`
- `FP8_SVE2/fmlall.s.yaml`: `24`

Largest unsupported feature sets:

- `FEAT_SME`: `2431`
- `FEAT_SVE2`: `1320`
- `FEAT_SVE2 || FEAT_SME`: `1306`
- `FEAT_SVE`: `938`
- `FEAT_SME2`: `447`
- `FEAT_SVE || FEAT_SME`: `744`
- `FEAT_SME_I16I64`: `120`
- `FEAT_SVE2p1`: `68`
- `FEAT_FAMINMAX`: `54`
- `FEAT_FP8`: `48`

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
- Do not encode Capstone-specific output quirks in the implementation unless output compatibility goals explicitly change.
- Do not spend migration effort on parsing `<asmtemplate>`; use compact local operand/action schemas instead.
- `bun tools/generate.ts` now refreshes the committed capstone shards by repartitioning the tracked corpus against the current `tools/supported-files.ts` set.
- The recent system-register work formats generic system-register operands as `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>`. That is acceptable for coverage and should not block further family support.
- `tools/encodings.ts` needs to tolerate feature terms inside larger guard expressions; keep that in mind when working on mixed-guard XMLs.
- If `MOVA`-related capstone accounting does not move as expected, verify the XML-to-case mapping before assuming the formatter is wrong.
