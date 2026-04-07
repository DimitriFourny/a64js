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

Coverage note: the generated capstone shards currently show roughly seven thousand unsupported cases, concentrated in `SVE2`, `SVE`, `SVE2p1`, `SME2`, `SME`, and FP8 extension folders. The Ready queue below is intentionally grouped into family-sized implementation batches; it is meant to cover the whole remaining corpus without turning every XML file into a separate work item.

- `FP8_SVE2` absolute min/max batch from `FP8_SVE2/faminmax.s.yaml` (`36` unsupported cases in the latest TODO snapshot).
  XML anchors: `famin_z_p_zz.xml`, `famax_z_p_zz.xml`.
  Scope: implement shared predicated `FAMIN`/`FAMAX` SVE/SME vector formatting, including the existing `MOVPRFX` pairing behavior without adding Capstone-specific overlays.
  Done when: unsupported cases for `FP8_SVE2/faminmax.s.yaml` are zero; the XML files are promoted in `tools/supported-files.ts`; `bun tools/generate.ts` and `bun test` pass.

- `SVE` sign-extending contiguous load batch seeded by `SVE/ld1sb.s.yaml` (`34` unsupported cases in the latest TODO snapshot).
  Source YAML anchors: `SVE/ld1sb.s.yaml`, plus same-shape spillover in `SVE/ld1sh.s.yaml` and `SVE/ld1sw.s.yaml` when the formatter path is shared.
  XML anchors: `ld1sb_z_p_bi.xml`, `ld1sb_z_p_br.xml`, `ld1sh_z_p_bi.xml`, `ld1sh_z_p_br.xml`, `ld1sw_z_p_bi.xml`, `ld1sw_z_p_br.xml`; check adjacent gather forms `*_z_p_ai.xml` and `*_z_p_bz.xml` before promotion if they share the same operand schema.
  Done when: selected sign-extending load shards no longer fall back to `.inst`; promoted XML files cover both immediate and scalar-register addressing forms; `bun tools/generate.ts` and `bun test` pass.

- `FP8_SVE2` narrow convert batch from `FP8_SVE2/fcvtn.s.yaml` (`32` unsupported cases in the latest TODO snapshot).
  XML anchors: `fcvtn_z8_mz2.xml`, `fcvtnb_z8_mz2.xml`, `fcvtnt_z8_mz2.xml`, `bfcvtn_z8_mz2.xml`.
  Scope: implement the FP8/BF16 narrowing convert multi-vector operand shape for `{ zN.<T>, zN+1.<T> }` groups and destination byte vectors.
  Done when: unsupported cases for `FP8_SVE2/fcvtn.s.yaml` are zero; any same-shape FP8 convert spillover is either promoted or explicitly left unsupported in the result note; `bun tools/generate.ts` and `bun test` pass.

- FP8 SVE/SME arithmetic, dot, LUT, and system batch.
  Source YAML anchors: `FP8/faminmax.s.yaml`, `FP8/dot.s.yaml`, `FP8/mla.s.yaml`, `FP8/luti2.s.yaml`, `FP8/luti4.s.yaml`, `FP8/miscellaneous-fp8.s.yaml`, `FP8/system-regs.s.yaml`, `FP8_SVE2/fcvt.s.yaml`, `FP8_SVE2/fdot.s.yaml`, `FP8_SVE2/fmlal.s.yaml`, `FP8_SVE2/fmlall.s.yaml`, `FP8_SVE2/luti2.s.yaml`, `FP8_SVE2/luti4.s.yaml`, `FP8_SME2/cvt.s.yaml`, `FP8_SME2/dot.s.yaml`, `FP8_SME2/faminmax.s.yaml`, `FP8_SME2/fscale.s.yaml`, `FP8_SME2/lut.s.yaml`, `FP8_SME2/mla.s.yaml`, `FP8_SME2/mopa.s.yaml`, `FP8_SME2/movt.s.yaml`.
  XML anchors: `fdot_*`, `fmlal_*`, `fmlall_*`, `fscale_*`, `luti2_*`, `luti4_*`, and FP8 system-register encodings.
  Done when: the FP8 top-level, `FP8_SVE2`, and `FP8_SME2` shards either have zero unsupported cases or the result note lists a specific XML/feature blocker; `bun tools/generate.ts` and `bun test` pass.

- `SVE` contiguous and non-temporal load/store cleanup.
  Source YAML anchors: `SVE/ld1b.s.yaml`, `SVE/ld1h.s.yaml`, `SVE/ld1w.s.yaml`, `SVE/ld1d.s.yaml`, `SVE/st1b.s.yaml`, `SVE/st1h.s.yaml`, `SVE/st1w.s.yaml`, `SVE/st1d.s.yaml`, `SVE/ldnt1b.s.yaml`, `SVE/ldnt1h.s.yaml`, `SVE/ldnt1w.s.yaml`, `SVE/ldnt1d.s.yaml`, `SVE/stnt1b.s.yaml`, `SVE/stnt1h.s.yaml`, `SVE/stnt1w.s.yaml`, `SVE/stnt1d.s.yaml`.
  XML anchors: `ld1*_z_p_bi.xml`, `ld1*_z_p_br.xml`, `st1*_z_p_bi.xml`, `st1*_z_p_br.xml`, `ldnt1*_z_p_bi.xml`, `stnt1*_z_p_bi.xml`.
  Done when: remaining SVE contiguous/non-temporal memory shards no longer fall back to `.inst` for the implemented addressing forms; promoted XMLs are verified end-to-end; `bun tools/generate.ts` and `bun test` pass.

- `SVE` arithmetic, min/max, scalar-immediate, and predicated unary long-tail batch.
  Source YAML anchors: `SVE/mul.s.yaml`, `SVE/smax.s.yaml`, `SVE/smin.s.yaml`, `SVE/umax.s.yaml`, `SVE/umin.s.yaml`, `SVE/fmax.s.yaml`, `SVE/fmaxnm.s.yaml`, `SVE/fmin.s.yaml`, `SVE/fminnm.s.yaml`, `SVE/fsubr.s.yaml`, `SVE/decp.s.yaml`, `SVE/incp.s.yaml`, `SVE/abs.s.yaml`, `SVE/neg.s.yaml`, `SVE/asrd.s.yaml`.
  XML anchors: `mul_z_zi.xml`, `smax_z_zi.xml`, `smin_z_zi.xml`, `umax_z_zi.xml`, `umin_z_zi.xml`, `*_z_p_zz.xml`, `*_z_p_zs.xml`, `abs_z_p_z.xml`, `neg_z_p_z.xml`, `asrd_z_p_zi.xml`.
  Done when: the listed integer/FP arithmetic shards are either fully promoted or split only for a documented operand-shape blocker; `bun tools/generate.ts` and `bun test` pass.

- `SVE` index, insert, last-active, extend, and conversion cleanup.
  Source YAML anchors: `SVE/index.s.yaml`, `SVE/insr.s.yaml`, `SVE/clasta.s.yaml`, `SVE/clastb.s.yaml`, `SVE/lasta.s.yaml`, `SVE/lastb.s.yaml`, `SVE/adr.s.yaml`, `SVE/ext.s.yaml`, `SVE/splice.s.yaml`, `SVE/sxtb.s.yaml`, `SVE/sxth.s.yaml`, `SVE/sxtw.s.yaml`, `SVE/uxtb.s.yaml`, `SVE/uxth.s.yaml`, `SVE/uxtw.s.yaml`, `SVE/fcvtzs.s.yaml`, `SVE/fcvtzu.s.yaml`, `SVE/scvtf.s.yaml`, `SVE/ucvtf.s.yaml`.
  XML anchors: `index_*`, `insr_*`, `clast*_r_p_z.xml`, `last*_z_p_z.xml`, `adr_z_az.xml`, `ext_z_zi.xml`, `splice_z_p_zz.xml`, `sxt*_z_p_z.xml`, `uxt*_z_p_z.xml`, `fcvtz*_z_p_z.xml`, `*cvtf_z_p_z.xml`.
  Done when: these SVE data-movement and conversion shards have no unsupported cases for the promoted XML set; `bun tools/generate.ts` and `bun test` pass.

- `SVE2` saturating, rounding, and narrowing shift batch.
  Source YAML anchors: `SVE2/sqshl.s.yaml`, `SVE2/uqshl.s.yaml`, `SVE2/sqshlu.s.yaml`, `SVE2/sqrshl.s.yaml`, `SVE2/uqrshl.s.yaml`, `SVE2/srshr.s.yaml`, `SVE2/urshr.s.yaml`, `SVE2/sqshrnb.s.yaml`, `SVE2/sqshrnt.s.yaml`, `SVE2/uqshrnb.s.yaml`, `SVE2/uqshrnt.s.yaml`, `SVE2/sqrshrnb.s.yaml`, `SVE2/sqrshrnt.s.yaml`, `SVE2/uqrshrnb.s.yaml`, `SVE2/uqrshrnt.s.yaml`, `SVE2/sqxtnb.s.yaml`, `SVE2/sqxtnt.s.yaml`, `SVE2/uqxtnb.s.yaml`, `SVE2/uqxtnt.s.yaml`.
  XML anchors: `sqshl_*`, `uqshl_*`, `sqshlu_*`, `*rshr*`, `*shr[n]*`, and `*qxt[n]*` SVE2 XML families.
  Done when: SVE2 shift/narrow shards are promoted as a coherent operand-schema batch; `bun tools/generate.ts` and `bun test` pass.

- `SVE2` widening, narrowing, pairwise, and halving add/sub batch.
  Source YAML anchors: `SVE2/addp.s.yaml`, `SVE2/faddp.s.yaml`, `SVE2/shadd.s.yaml`, `SVE2/uhadd.s.yaml`, `SVE2/shsub.s.yaml`, `SVE2/uhsub.s.yaml`, `SVE2/saddlb.s.yaml`, `SVE2/saddlt.s.yaml`, `SVE2/uaddlb.s.yaml`, `SVE2/uaddlt.s.yaml`, `SVE2/ssublb.s.yaml`, `SVE2/ssublt.s.yaml`, `SVE2/usublb.s.yaml`, `SVE2/usublt.s.yaml`, `SVE2/addhnb.s.yaml`, `SVE2/addhnt.s.yaml`, `SVE2/subhnb.s.yaml`, `SVE2/subhnt.s.yaml`, `SVE2/raddhnb.s.yaml`, `SVE2/raddhnt.s.yaml`, `SVE2/rsubhnb.s.yaml`, `SVE2/rsubhnt.s.yaml`.
  XML anchors: `addp_*`, `faddp_*`, `*hadd*`, `*hsub*`, `*addl*`, `*subl*`, `addhn*`, `subhn*`, `raddhn*`, `rsubhn*`.
  Done when: same-shape SVE2 add/sub arithmetic families are promoted together without special Capstone overlays; `bun tools/generate.ts` and `bun test` pass.

- `SVE2` multiply, dot-product, complex, and polynomial arithmetic batch.
  Source YAML anchors: `SVE2/mul.s.yaml`, `SVE2/mla.s.yaml`, `SVE2/mls.s.yaml`, `SVE2/sqdmulh.s.yaml`, `SVE2/sqrdmulh.s.yaml`, `SVE2/sqrdmlah.s.yaml`, `SVE2/sqrdmlsh.s.yaml`, `SVE2/cdot.s.yaml`, `SVE2/cmla.s.yaml`, `SVE2/pmul.s.yaml`, `SVE2/pmullb.s.yaml`, `SVE2/pmullt.s.yaml`, `SVE2/pmullb-128.s.yaml`, `SVE2/pmullt-128.s.yaml`, `SVE2/fmlalb.s.yaml`, `SVE2/fmlalt.s.yaml`, `SVE2/fmlslb.s.yaml`, `SVE2/fmlslt.s.yaml`.
  XML anchors: `mul_*`, `mla_*`, `mls_*`, `sqdmulh_*`, `sqrdml*`, `cdot_*`, `cmla_*`, `pmul*`, `fmlal*`, `fmlsl*`.
  Done when: SVE2 multiply/dot/polynomial shards are promoted as one formatter family or split with a documented operand-shape reason; `bun tools/generate.ts` and `bun test` pass.

- `SVE2` bitwise, crypto, table, match, histogram, and predicate-control batch.
  Source YAML anchors: `SVE2/tbl.s.yaml`, `SVE2/tbx.s.yaml`, `SVE2/bsl.s.yaml`, `SVE2/bsl1n.s.yaml`, `SVE2/bsl2n.s.yaml`, `SVE2/nbsl.s.yaml`, `SVE2/bcax.s.yaml`, `SVE2/eor3.s.yaml`, `SVE2/xar.s.yaml`, `SVE2/aese.s.yaml`, `SVE2/aesd.s.yaml`, `SVE2/aesmc.s.yaml`, `SVE2/aesimc.s.yaml`, `SVE2/sm4e.s.yaml`, `SVE2/sm4ekey.s.yaml`, `SVE2/match.s.yaml`, `SVE2/nmatch.s.yaml`, `SVE2/histcnt.s.yaml`, `SVE2/histseg.s.yaml`, `SVE2/whilewr.s.yaml`, `SVE2/whilerw.s.yaml`, `SVE2/whilehi.s.yaml`, `SVE2/whilehs.s.yaml`, `SVE2/whilegt.s.yaml`, `SVE2/whilege.s.yaml`.
  XML anchors: `tbl_*`, `tbx_*`, `bsl*`, `nbsl_*`, `bcax_*`, `eor3_*`, `xar_*`, `aes*`, `sm4*`, `match_*`, `nmatch_*`, `hist*`, `while*`.
  Done when: these SVE2 logical/crypto/table/predicate shards are promoted or blocked with a precise XML reason; `bun tools/generate.ts` and `bun test` pass.

- `SVE2` memory and remaining conversion/bit-permutation cleanup.
  Source YAML anchors: `SVE2/ldnt1b.s.yaml`, `SVE2/ldnt1h.s.yaml`, `SVE2/ldnt1w.s.yaml`, `SVE2/ldnt1d.s.yaml`, `SVE2/ldnt1sb.s.yaml`, `SVE2/ldnt1sh.s.yaml`, `SVE2/ldnt1sw.s.yaml`, `SVE2/stnt1b.s.yaml`, `SVE2/stnt1h.s.yaml`, `SVE2/stnt1w.s.yaml`, `SVE2/stnt1d.s.yaml`, `SVE2/fcvtlt.s.yaml`, `SVE2/fcvtnt.s.yaml`, `SVE2/fcvtx.s.yaml`, `SVE2/fcvtxnt.s.yaml`, `SVE2/bdep.s.yaml`, `SVE2/bext.s.yaml`, `SVE2/bgrp.s.yaml`.
  XML anchors: `ldnt1*`, `stnt1*`, `fcvtl*`, `fcvtn*`, `fcvtx*`, `bdep_*`, `bext_*`, `bgrp_*`.
  Done when: memory/conversion/bit-permutation leftovers are handled without regressing existing SVE/SVE2 memory formatting; `bun tools/generate.ts` and `bun test` pass.

- `SVE2p1` Q-vector reduction batch.
  Source YAML anchors: `SVE2p1/addqv.s.yaml`, `SVE2p1/andqv.s.yaml`, `SVE2p1/eorqv.s.yaml`, `SVE2p1/orqv.s.yaml`, `SVE2p1/smaxqv.s.yaml`, `SVE2p1/sminqv.s.yaml`, `SVE2p1/umaxqv.s.yaml`, `SVE2p1/uminqv.s.yaml`, `SVE2p1/faddqv.s.yaml`, `SVE2p1/fmaxqv.s.yaml`, `SVE2p1/fmaxnmqv.s.yaml`, `SVE2p1/fminqv.s.yaml`, `SVE2p1/fminnmqv.s.yaml`.
  XML anchors: `addqv_z_p_z.xml`, `andqv_z_p_z.xml`, `eorqv_z_p_z.xml`, `orqv_z_p_z.xml`, `*max*qv_z_p_z.xml`, `*min*qv_z_p_z.xml`, `faddqv_z_p_z.xml`.
  Done when: all Q-vector reduction shards no longer fall back to `.inst`; `bun tools/generate.ts` and `bun test` pass.

- `SVE2p1` Q-vector load/store and non-temporal memory batch.
  Source YAML anchors: `SVE2p1/ld1b.s.yaml`, `SVE2p1/ld1h.s.yaml`, `SVE2p1/ld1w.s.yaml`, `SVE2p1/ld1d.s.yaml`, `SVE2p1/st1b.s.yaml`, `SVE2p1/st1h.s.yaml`, `SVE2p1/st1w.s.yaml`, `SVE2p1/st1d.s.yaml`, `SVE2p1/ldnt1b.s.yaml`, `SVE2p1/ldnt1h.s.yaml`, `SVE2p1/ldnt1w.s.yaml`, `SVE2p1/ldnt1d.s.yaml`, `SVE2p1/stnt1b.s.yaml`, `SVE2p1/stnt1h.s.yaml`, `SVE2p1/stnt1w.s.yaml`, `SVE2p1/stnt1d.s.yaml`, plus `SVE2p1/ld2q.s.yaml`, `SVE2p1/ld3q.s.yaml`, `SVE2p1/ld4q.s.yaml`, `SVE2p1/st2q.s.yaml`, `SVE2p1/st3q.s.yaml`, `SVE2p1/st4q.s.yaml`.
  XML anchors: `ld1*_q`, `st1*_q`, `ldnt1*`, `stnt1*`, `ld2q_*`, `ld3q_*`, `ld4q_*`, `st2q_*`, `st3q_*`, `st4q_*`.
  Done when: SVE2p1 Q-vector memory shards are promoted for the verified addressing forms; `bun tools/generate.ts` and `bun test` pass.

- `SVE2p1` Q-vector permute/table/dup/predicate batch.
  Source YAML anchors: `SVE2p1/dupq.s.yaml`, `SVE2p1/tblq.s.yaml`, `SVE2p1/tbxq.s.yaml`, `SVE2p1/zipq1.s.yaml`, `SVE2p1/zipq2.s.yaml`, `SVE2p1/uzpq1.s.yaml`, `SVE2p1/uzpq2.s.yaml`, `SVE2p1/extq.s.yaml`, `SVE2p1/cntp.s.yaml`, `SVE2p1/ptrue.s.yaml`, `SVE2p1/pmov.s.yaml`, `SVE2p1/pext.s.yaml`, `SVE2p1/whilelt.s.yaml`, `SVE2p1/whilele.s.yaml`, `SVE2p1/whilelo.s.yaml`, `SVE2p1/whilels.s.yaml`, `SVE2p1/whilegt.s.yaml`, `SVE2p1/whilege.s.yaml`, `SVE2p1/whilehi.s.yaml`, `SVE2p1/whilehs.s.yaml`.
  XML anchors: `dupq_*`, `tblq_*`, `tbxq_*`, `zipq*`, `uzpq*`, `extq_*`, `cntp_r_pn.xml`, `ptrue_*`, `pmov_*`, `pext_*`, `while*`.
  Done when: Q-vector permute/table and predicate-as-counter shards are promoted coherently; `bun tools/generate.ts` and `bun test` pass.

- `SVE2p1` BF/FP arithmetic, clamp, and narrowing conversion batch.
  Source YAML anchors: `SVE2p1/bfadd.s.yaml`, `SVE2p1/bfsub.s.yaml`, `SVE2p1/bfmul.s.yaml`, `SVE2p1/bfmla.s.yaml`, `SVE2p1/bfmls.s.yaml`, `SVE2p1/bfmax.s.yaml`, `SVE2p1/bfmaxnm.s.yaml`, `SVE2p1/bfmin.s.yaml`, `SVE2p1/bfminnm.s.yaml`, `SVE2p1/bfclamp.s.yaml`, `SVE2p1/fclamp.s.yaml`, `SVE2p1/fdot.s.yaml`, `SVE2p1/sqcvtn.s.yaml`, `SVE2p1/sqcvtun.s.yaml`, `SVE2p1/uqcvtn.s.yaml`, `SVE2p1/sqrshrn.s.yaml`, `SVE2p1/sqrshrun.s.yaml`, `SVE2p1/uqrshrn.s.yaml`.
  XML anchors: `bf*`, `fclamp_z_zz.xml`, `fdot_*`, `*cvtn_*`, `*rshrn_*`.
  Done when: SVE2p1 BF/FP arithmetic and narrowing conversion shards are promoted or blocked with specific XML notes; `bun tools/generate.ts` and `bun test` pass.

- `SME2` multi-vector ADD/SUB register-group cleanup seeded by `SME2/add.s.yaml` (`32` unsupported cases in the latest TODO snapshot).
  Source YAML anchors: `SME2/add.s.yaml`, `SME2/sub.s.yaml`.
  XML anchors: `add_mz_zzv.xml`, `sub_mz_zzv.xml`; inspect `add_mz_zzw.xml` and `sub_mz_zzw.xml` for same-pass promotion if the register-group formatter covers both vector and multi-vector source forms.
  Done when: remaining unsupported `ADD`/`SUB` multi-vector register-group cases in those shards are promoted without regressing already-supported `*_za_*` forms; `bun tools/generate.ts` and `bun test` pass.

- `SME2` integer clamp batch seeded by `SME2/sclamp.s.yaml` (`32` unsupported cases in the latest TODO snapshot).
  Source YAML anchors: `SME2/sclamp.s.yaml`, `SME2/uclamp.s.yaml`.
  XML anchors: `sclamp_mz_zz.xml`, `uclamp_mz_zz.xml`.
  Scope: implement the signed/unsigned multi-vector clamp operand pattern for two- and four-register destination groups across byte/half/single/double element sizes.
  Done when: `SCLAMP` and `UCLAMP` shards are either fully promoted together or the result note explains any asymmetric blocker; `bun tools/generate.ts` and `bun test` pass.

- `SME2` integer min/max multi-vector batch.
  Source YAML anchors: `SME2/smax.s.yaml`, `SME2/smin.s.yaml`, `SME2/umax.s.yaml`, `SME2/umin.s.yaml`.
  XML anchors: `smax_mz_zzv.xml`, `smax_mz_zzw.xml`, `smin_mz_zzv.xml`, `smin_mz_zzw.xml`, `umax_mz_zzv.xml`, `umax_mz_zzw.xml`, `umin_mz_zzv.xml`, `umin_mz_zzw.xml`.
  Scope: reuse the multi-vector register-group operand formatting from the ADD/SUB cleanup where possible, then promote the signed/unsigned min/max family as one coherent batch.
  Done when: listed min/max shards no longer fall back to `.inst`; `tools/supported-files.ts` contains only XMLs verified end-to-end; `bun tools/generate.ts` and `bun test` pass.

- `SME2` multi-vector select, permutation, and unpack batch.
  Source YAML anchors: `SME2/sel.s.yaml`, `SME2/zip.s.yaml`, `SME2/uzp.s.yaml`, `SME2/sunpk.s.yaml`, `SME2/uunpk.s.yaml`.
  XML anchors: `sel_mz_p_zz.xml`, `zip_mz_z.xml`, `uzp_mz_z.xml`, `sunpk_mz_z.xml`, `uunpk_mz_z.xml`.
  Done when: SME2 multi-vector group formatting covers select, zip/unzip, and unpack forms across two- and four-register groups; `bun tools/generate.ts` and `bun test` pass.

- `SME2` multi-vector load/store and scalar memory batch.
  Source YAML anchors: `SME2/ld1b.s.yaml`, `SME2/ld1h.s.yaml`, `SME2/ld1w.s.yaml`, `SME2/ld1d.s.yaml`, `SME2/st1b.s.yaml`, `SME2/st1h.s.yaml`, `SME2/st1w.s.yaml`, `SME2/st1d.s.yaml`, `SME2/ldnt1b.s.yaml`, `SME2/ldnt1h.s.yaml`, `SME2/ldnt1w.s.yaml`, `SME2/ldnt1d.s.yaml`, `SME2/stnt1b.s.yaml`, `SME2/stnt1h.s.yaml`, `SME2/stnt1w.s.yaml`, `SME2/stnt1d.s.yaml`, `SME2/ldr.s.yaml`, `SME2/str.s.yaml`.
  XML anchors: `ld1*_mz_*`, `st1*_mz_*`, `ldnt1*_mz_*`, `stnt1*_mz_*`, `ldr_*`, `str_*`.
  Done when: SME2 memory shards are promoted without disturbing existing SVE/SME memory operand rendering; `bun tools/generate.ts` and `bun test` pass.

- `SME2` ZA dot-product and outer-product batch.
  Source YAML anchors: `SME2/smopa.s.yaml`, `SME2/smops.s.yaml`, `SME2/umopa.s.yaml`, `SME2/umops.s.yaml`, `SME2/bmopa.s.yaml`, `SME2/bmops.s.yaml`, `SME2/bfmopa.s.yaml`, `SME2/bfmops.s.yaml`, `SME2/fvdot.s.yaml`, `SME2/bfvdot.s.yaml`, `SME2/svdot.s.yaml`, `SME2/uvdot.s.yaml`, `SME2/suvdot.s.yaml`, `SME2/usvdot.s.yaml`, `SME2/sudot.s.yaml`, `SME2/usdot.s.yaml`, `SME2/sdot.s.yaml`, `SME2/udot.s.yaml`.
  XML anchors: `*mopa*`, `*mops*`, `*vdot*`, `sdot_*`, `udot_*`, `sudot_*`, `usdot_*`.
  Done when: SME2 ZA tile/vector-group dot and outer-product formats are promoted for signed, unsigned, mixed-sign, BF, and FP variants; `bun tools/generate.ts` and `bun test` pass.

- `SME2` FP/BF arithmetic, conversion, and narrowing batch.
  Source YAML anchors: `SME2/fadd.s.yaml`, `SME2/fsub.s.yaml`, `SME2/fmax.s.yaml`, `SME2/fmaxnm.s.yaml`, `SME2/fmin.s.yaml`, `SME2/fminnm.s.yaml`, `SME2/fclamp.s.yaml`, `SME2/bfadd.s.yaml`, `SME2/bfsub.s.yaml`, `SME2/bfmax.s.yaml`, `SME2/bfmaxnm.s.yaml`, `SME2/bfmin.s.yaml`, `SME2/bfminnm.s.yaml`, `SME2/bfclamp.s.yaml`, `SME2/fcvt.s.yaml`, `SME2/fcvtn.s.yaml`, `SME2/bfcvt.s.yaml`, `SME2/bfcvtn.s.yaml`, `SME2/scvtf.s.yaml`, `SME2/ucvtf.s.yaml`, `SME2/fcvtzs.s.yaml`, `SME2/fcvtzu.s.yaml`, `SME2/sqcvtn.s.yaml`, `SME2/uqcvtn.s.yaml`, `SME2/sqrshrn.s.yaml`, `SME2/uqrshrn.s.yaml`.
  XML anchors: `f*`, `bf*`, `*cvt*`, `*cvtn*`, `*rshrn*`.
  Done when: SME2 FP/BF arithmetic and conversion shards no longer fall back to `.inst` for promoted XMLs; `bun tools/generate.ts` and `bun test` pass.

- `SME` ZA accumulator, outer-product, and array arithmetic cleanup.
  Source YAML anchors: `SME/addha-u32.s.yaml`, `SME/addha-u64.s.yaml`, `SME/addva-u32.s.yaml`, `SME/addva-u64.s.yaml`, `SME/fmopa.s.yaml`, `SME/fmops.s.yaml`, `SME/fmopa-fp64.s.yaml`, `SME/fmops-fp64.s.yaml`, `SME/bfmopa.s.yaml`, `SME/bfmops.s.yaml`, `SME/smopa-32.s.yaml`, `SME/smopa-64.s.yaml`, `SME/smops-32.s.yaml`, `SME/smops-64.s.yaml`.
  XML anchors: `addha_za_pp_z.xml`, `addva_za_pp_z.xml`, `fmopa_*`, `fmops_*`, `bfmopa_*`, `bfmops_*`, `smopa_*`, `smops_*`.
  Done when: remaining SME ZA accumulator/outer-product shards are promoted using shared ZA tile/predicate formatting; `bun tools/generate.ts` and `bun test` pass.

- `SME` memory, MOVA/PSEL, clamp, and control cleanup.
  Source YAML anchors: `SME/ld1b.s.yaml`, `SME/ld1h.s.yaml`, `SME/ld1w.s.yaml`, `SME/ld1d.s.yaml`, `SME/ld1q.s.yaml`, `SME/st1b.s.yaml`, `SME/st1h.s.yaml`, `SME/st1w.s.yaml`, `SME/st1d.s.yaml`, `SME/st1q.s.yaml`, `SME/ldr.s.yaml`, `SME/mova.s.yaml`, `SME/psel.s.yaml`, `SME/sclamp.s.yaml`, `SME/revd.s.yaml`, `SME/rdsvl.s.yaml`, `SME/smstart.s.yaml`, `SME/smstop.s.yaml`, `SME/feature.s.yaml`.
  XML anchors: `ld1*`, `st1*`, `ldr_*`, `mova_*`, `psel_p_ppi.xml`, `sclamp_z_zz.xml`, `revd_*`, `rdsvl_*`, `smstart_*`, `smstop_*`.
  Done when: SME memory/control residuals are either zero unsupported or have precise feature/XML blockers; `bun tools/generate.ts` and `bun test` pass.

- Scalar, system, AdvSIMD, and proprietary residual cleanup.
  Source YAML anchors: `armv8.3a-signed-pointer.s.yaml`, `armv8.3a-rcpc.s.yaml`, `armv9.4a-gcs.s.yaml`, `armv8.9a-debug-pmu.s.yaml`, `armv8.7a-wfxt.s.yaml`, `armv8.3a-js.s.yaml`, `armv8.4a-trace.s.yaml`, `udf.s.yaml`, `apple_proprietary.yaml`, `arm64-verbose-vector-case.s.yaml`, `neon-3vdiff.s.yaml`, `neon-simd-copy.s.yaml`.
  XML anchors: pointer-auth aliases, RCpc loads/stores, GCS system forms, debug/PMU system registers, WFxT waits, JS/trace system forms, `UDF`, Apple proprietary encodings, and the named AdvSIMD residual XMLs.
  Done when: non-SVE/SME/FP8 leftover shards are zero unsupported or documented as intentionally unsupported architecture/proprietary cases; `bun tools/generate.ts` and `bun test` pass.

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

## Done

Keep one concise line per completed work item.

- SME2p1 convert-and-move batch: promoted `SME2p1/fcvt.s.yaml` and `SME2p1/fcvtl.s.yaml` alongside the already-supported `movaz`/`zero` ZA move/zero forms with shared SME vector-group and ZA tile operand formatting; regenerated fixtures/encodings and `bun test` passed.
- SME2p1 floating arithmetic batch: promoted `SME2p1/fmopa.s.yaml` and `SME2p1/fmops.s.yaml` alongside the existing `fadd`/`fsub`/`fmla`/`fmls` ZA-array arithmetic coverage with shared SME outer-product ZA tile/predicate operand formatting; regenerated fixtures/encodings and `bun test` passed.
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

## Snapshot

Current capstone coverage snapshot:

- `27532` supported capstone cases
- `7025` unsupported capstone cases
- `1207` XML instruction files currently listed in `tools/supported-files.ts`
- `697` distinct unsupported XML instruction files
- `548` capstone source YAML files containing unsupported cases
- `466` distinct unsupported mnemonics

Highest-value remaining source files right now:

- `FP8_SVE2/faminmax.s.yaml`: `36`
- `SVE/ld1sb.s.yaml`: `34`
- `FP8_SVE2/fcvtn.s.yaml`: `32`
- `SME2/add.s.yaml`: `32`
- `SME2/sclamp.s.yaml`: `32`

Largest unsupported feature sets:

- `FEAT_SME`: `3761`
- `FEAT_SVE2`: `2069`
- `FEAT_SVE2 || FEAT_SME`: `1861`
- `FEAT_SVE`: `1838`
- `FEAT_SME2`: `1752`
- `FEAT_SVE || FEAT_SME`: `1624`
- `FEAT_SVE2p1`: `1470`
- `FEAT_SME2p1`: `696`
- `FEAT_SVE2p1 || FEAT_SME2p1`: `694`
- `FEAT_SME2 || FEAT_SVE2p1`: `685`

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
