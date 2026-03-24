# Instruction Support TODO

Current capstone coverage snapshot:

- `13599` supported capstone cases
- `21022` unsupported capstone cases
- `129` XML instruction files currently listed in `tools/supported-files.ts`
- `1758` distinct unsupported XML instruction files
- `951` capstone source YAML files containing unsupported cases
- `934` distinct unsupported mnemonics

Recently completed families:

- SVE signed saturating scalar inc/dec: `624` cases promoted to supported across 8 XML files
- AdvSIMD `UDOT` / `SDOT` vector and by-element: `176` cases promoted to supported across 4 XML files
- AdvSIMD `SQRDMLAH` / `SQRDMLSH` (vector and by-element): 4 XML files promoted to supported
- SME2 `SMLALL`, `SMLSLL`, `UMLALL`, and `UMLSLL`: `1344` cases promoted to supported
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

## Left To Do Now

Priority order from the current snapshot:

1. Remaining SVE scalar/predicate cleanup around compare and count forms.

Highest-value remaining XML files right now:

- `cmpeq_p_p_zz.xml`: `80`
- `ptrue_p_s.xml`: `80`
- `ptrues_p_s.xml`: `80`
- `uqdecb_r_rs.xml`: `78`
- `uqdecd_r_rs.xml`: `78`
- `uqdech_r_rs.xml`: `78`
- `uqdecw_r_rs.xml`: `78`
- `uqincb_r_rs.xml`: `78`
- `uqincd_r_rs.xml`: `78`
- `uqinch_r_rs.xml`: `78`
- `uqincw_r_rs.xml`: `78`
- `frinta_z_p_z.xml`: `70`

Highest-value remaining source files right now:

- `basic-a64-instructions.s.yaml`: `1180`
- `neon-simd-misc.s.yaml`: `260`
- `neon-simd-ldst-multi-elem.s.yaml`: `196`
- `armv8.2a-dotprod.s.yaml`: `180`
- `neon-compare-instructions.s.yaml`: `180`

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
node tools/generate.ts
node tools/generate-capstone-tests.ts
node --test test/*.test.ts
```

When an instruction family is actually supported end-to-end, add its XML file to `tools/supported-files.ts`.

## Highest-volume missing areas

These are the biggest buckets in the current unsupported set and should be the first place to spend time.

### 1. Remaining SVE / predicate cleanup

Notable source files:

- `basic-a64-instructions.s.yaml`: `1180`
- `neon-simd-misc.s.yaml`: `260`
- `neon-compare-instructions.s.yaml`: `180`
- `SME2/bfmlal.s.yaml`: `168`

Notable XML files:

- `cmpeq_p_p_zz.xml`: `80`
- `ptrue_p_s.xml`: `80`
- `ptrues_p_s.xml`: `80`
- `uqdecb_r_rs.xml`: `78`
- `uqdecd_r_rs.xml`: `78`
- `uqdech_r_rs.xml`: `78`

Likely outcome: the remaining baseline work is now dominated by compare/predicate and the `uq*` count forms after the recent system-register, move/copy, dot-product, and signed count work.

## Feature buckets worth prioritizing

Largest unsupported feature sets:

- `FEAT_SVE || FEAT_SME, FEAT_SVE, FEAT_SME`: `5285`
- `FEAT_SME2`: `3873`
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

1. Sweep the remaining SVE compare/predicate and count-form leftovers.
2. Keep an eye on XMLs with mixed feature/decode guards; `tools/encodings.ts` now needs to tolerate feature terms appearing inside larger guard expressions.
3. After each family, update `tools/supported-files.ts`, regenerate capstone cases, and rerun tests.

## Notes for whoever picks this up

- Do not add XML files to `tools/supported-files.ts` until both `decode()` and `disasm()` behave correctly for that family.
- The generated capstone file is a useful progress metric, but it is not the full instruction universe. It only covers capstone cases that match Arm XML encodings and currently fall back to `.inst`.
- The recent system-register work formats generic system-register operands as `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>`. That is acceptable for coverage and should not block further family support.
- The current branch also has local `MOVA` alias support wired in `decode()` / `disasm()`. If capstone snapshot accounting does not move as expected for those files, verify the XML/case mapping before assuming the formatter is wrong.
- The highest-impact work is still family-by-family support, not one-off instruction fixes.
