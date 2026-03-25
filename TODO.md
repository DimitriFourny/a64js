# Instruction Support TODO

Current capstone coverage snapshot:

- `17183` supported capstone cases
- `17390` unsupported capstone cases
- `190` XML instruction files currently listed in `tools/supported-files.ts`
- `1697` distinct unsupported XML instruction files
- `910` capstone source YAML files containing unsupported cases
- `915` distinct unsupported mnemonics

Recently completed families:

- SVE signed saturating scalar inc/dec: `624` cases promoted to supported across 8 XML files
- SVE unsigned saturating scalar inc/dec: `624` cases promoted to supported across 8 XML files
- AdvSIMD `UDOT` / `SDOT` vector and by-element: `176` cases promoted to supported across 4 XML files
- AdvSIMD `SQRDMLAH` / `SQRDMLSH` (vector and by-element): 4 XML files promoted to supported
- SME2 `SMLALL`, `SMLSLL`, `UMLALL`, and `UMLSLL`: `1344` cases promoted to supported
- SME2 `SMLAL`, `SMLSL`, and `UMLAL`: support landed for the 16-bit-to-32-bit long multiply-accumulate family across `*_za_zzi.xml`, `*_za_zzv.xml`, and `*_za_zzw.xml`
- SME2 `BFMLAL`, `BFMLSL`, `FMLAL`, and `FMLSL`: `672` cases promoted out of the unsupported capstone set across 12 XML files
- SME2 `BFADD`, `BFMLA`, and `BFMLS`: `336` capstone cases promoted to supported across `bfadd_za_zw.xml`, `bfmla_za_{zzi,zzv,zzw}.xml`, and `bfmls_za_{zzi,zzv,zzw}.xml`
- SME2 `BFSUB`: `48` capstone cases promoted to supported across `bfsub_za_zw.xml`
- SME2 `SUMLALL`, `USMLALL`, and `UMLSL`: mixed-sign long multiply-accumulate support landed across `sumlall_za_{zzi,zzv}.xml`, `usmlall_za_{zzi,zzv,zzw}.xml`, and `umlsl_za_{zzi,zzv,zzw}.xml`
- SVE scalar-plus-immediate prefetch (`prfb_i_p_bi.xml`, `prfd_i_p_bi.xml`, `prfh_i_p_bi.xml`, `prfw_i_p_bi.xml`): support landed; regenerate the capstone snapshot to record the new totals
- SME2 `ADD`, `SUB`, `FMLA`, and `FMLS`: `1750` cases promoted to supported
- `mrs.xml`: `1789` cases promoted to supported
- `msr_reg.xml`: `1511`
- `movprfx_z_z.xml`: `741`
- `fcpy_z_p_i.xml`: `1040`
- `fdup_z_i.xml`: `524`
- `movprfx_z_p_z.xml`: `331`
- `incb_r_rs.xml`: `186`
- `cmpeq_p_p_zi.xml`: `160`
- `decb_r_rs.xml`: `160`
- CPY immediate forms (`cpy_z_o_i.xml`, `cpy_z_p_i.xml`, `cpy_z_p_v.xml`): `172` cases promoted to supported
- `mov_mova_*.xml`: decode/disasm support landed; keep an eye on capstone snapshot accounting separately from the scalar/SVE totals above
- `movaz_*.xml`, `dup_z_i.xml`, `cpy_z_p_r.xml`, `rprfm_reg.xml`: `442`
- `sdot_za*.xml`, `sdot_za32*.xml`, `udot_za*.xml`, `udot_za32*.xml`: `865`
- `cmpeq_p_p_zz.xml`: `80` capstone cases promoted to supported across the SVE vector compare family
- `cmpeq_p_p_zw.xml`: `60` capstone cases promoted to supported across the SVE wide-element compare family
- `ptrue_p_s.xml`, `ptrues_p_s.xml`: `160` capstone cases promoted to supported across the SVE predicate-initialization family
- `frinta_z_p_z.xml`: `70` capstone cases promoted to supported across the SVE predicated FRINT* family
- `mrrs.xml`, `msrr.xml`: `132` capstone cases promoted to supported across the 128-bit system-register move family
- `ldapr.xml`: `68` capstone cases promoted to supported across the RCpc load-acquire family
- SME2 `BFDOT` (`bfdot_za_zzi.xml`, `bfdot_za_zzv.xml`, `bfdot_za_zzw.xml`): `144` capstone cases promoted to supported
- `dup_z_zi.xml`: `50` capstone cases promoted to supported across the SVE indexed DUP / `mov` alias family

## Left To Do Now

Priority order from the current snapshot:

1. Remaining SME2 BF16 subtraction/dot-product work plus ZA tile loads and SVE scalar/predicate cleanup.

Highest-value remaining XML files right now:

- `ld1b_za_p_rrr.xml`: `52`
- `cntb_r_s.xml`: `48`
- `fdot_za_zzi.xml`: `48`
- `fdot_za_zzv.xml`: `48`
- `fdot_za_zzw.xml`: `48`
- `ld1d_za_p_rrr.xml`: `48`

Highest-value remaining source files right now:

- `basic-a64-instructions.s.yaml`: `1180`
- `neon-simd-misc.s.yaml`: `260`
- `neon-compare-instructions.s.yaml`: `180`
- `neon-simd-shift.s.yaml`: `159`
- `SME2/fdot.s.yaml`: `144`
- `SME2/usdot.s.yaml`: `144`
- `neon-3vdiff.s.yaml`: `142`
- `neon-simd-ldst-one-elem.s.yaml`: `128`

## What "unsupported" means here

This repository generates `test/generated/capstone-cases.generated.ts` via `tools/generate-capstone-tests.ts`.

A case is counted as `unsupported` only when all of the following are true:

1. The instruction word matches an Arm XML encoding.
2. That XML file is **not** in `tools/supported-files.ts`.
3. `disasm()` still falls back to raw `.inst 0x...`.

So this TODO is specifically about instructions that already map cleanly to XML encodings, but are not yet implemented and promoted into the supported set.

## Regenerate the snapshot

Use this after implementing more instruction support:

```sh
bun tools/generate.ts
bun tools/generate-capstone-tests.ts
bun test
```

When an instruction family is actually supported end-to-end, add its XML file to `tools/supported-files.ts`.

## Highest-volume missing areas

These are the biggest buckets in the current unsupported set and should be the first place to spend time.

### 1. Remaining SME2 BF16 / SVE cleanup

Notable source files:

- `basic-a64-instructions.s.yaml`: `1180`
- `neon-simd-misc.s.yaml`: `260`
- `neon-compare-instructions.s.yaml`: `180`
- `neon-simd-shift.s.yaml`: `159`

Notable XML files:

- `ld1b_za_p_rrr.xml`: `52`
- `bfadd_za_zw.xml`: `48`
- `bfmla_za_zzi.xml`: `48`
- `bfmla_za_zzv.xml`: `48`
- `bfmla_za_zzw.xml`: `48`

Likely outcome: the remaining baseline work is now concentrated in SME2 BF16 subtraction/dot-product families, ZA tile loads, and the remaining SVE predicate/compare cleanup.

## Feature buckets worth prioritizing

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

Implication: the remaining work is now even more concentrated in SVE, SME, and SME2 than before.

## Practical implementation order

Suggested order for the next follow-up pass:

1. Sweep the remaining SME2 BF16 subtraction/dot-product families and ZA tile-load families next, then return to the SVE predicate/compare leftovers.
2. Keep an eye on XMLs with mixed feature/decode guards; `tools/encodings.ts` now needs to tolerate feature terms appearing inside larger guard expressions.
3. After each family, update `tools/supported-files.ts`, regenerate capstone cases, and rerun tests.

## Notes for whoever picks this up

- Do not add XML files to `tools/supported-files.ts` until both `decode()` and `disasm()` behave correctly for that family.
- The generated capstone file is a useful progress metric, but it is not the full instruction universe. It only covers capstone cases that match Arm XML encodings and currently fall back to `.inst`.
- The recent system-register work formats generic system-register operands as `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>`. That is acceptable for coverage and should not block further family support.
- The current branch also has local `MOVA` alias support wired in `decode()` / `disasm()`. If capstone snapshot accounting does not move as expected for those files, verify the XML/case mapping before assuming the formatter is wrong.
- The highest-impact work is still family-by-family support, not one-off instruction fixes. `ldapr.xml`, `frinta_z_p_z.xml`, the SVE scalar-plus-immediate prefetch family, `cmpeq_p_p_zw.xml`, the SME2 `BFDOT` family, the SME2 `BFADD` / `BFMLA` / `BFMLS` family, the SME2 `BFMLAL` / `BFMLSL` / `FMLAL` / `FMLSL` families, the SME2 `SMLAL` / `SMLSL` / `UMLAL` family, and the SME2 mixed-sign `SUMLALL` / `USMLALL` / `UMLSL` families are now promoted; the remaining highest-value work is concentrated in SME2 BF16 subtraction/dot-product work, ZA tile loads, and SVE cleanup.
