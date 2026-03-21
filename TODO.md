# Instruction Support TODO

Current capstone coverage snapshot:

- `6666` supported capstone cases
- `26575` unsupported capstone cases
- `64` XML instruction files currently listed in `tools/supported-files.ts`
- `1819` distinct unsupported XML instruction files
- `972` capstone source YAML files containing unsupported cases
- `943` distinct unsupported mnemonics

Recently completed families:

- `mrs.xml`: `1789` cases promoted to supported
- `msr_reg.xml`: `1511`
- `movprfx_z_z.xml`: `741`
- `fcpy_z_p_i.xml`: `1040`
- `fdup_z_i.xml`: `524`
- `movprfx_z_p_z.xml`: `331`
- `incb_r_rs.xml`: `186`
- `cmpeq_p_p_zi.xml`: `160`
- `decb_r_rs.xml`: `160`
- `mov_mova_*.xml`: decode/disasm support landed; keep an eye on capstone snapshot accounting separately from the scalar/SVE totals above

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

### 1. SME2 arithmetic / dot-product families

Top mnemonics:

- `UDOT`: `573`
- `SDOT`: `536`
- `ADD`: `475`
- `FMLA`: `470`
- `FMLS`: `470`
- `SUB`: `411`
- `SMLALL`: `336`
- `SMLSLL`: `336`
- `UMLALL`: `336`
- `UMLSLL`: `336`

Representative XML files:

- `fadd_za_zw.xml`: `144`
- `fmla_za_zzv.xml`: `144`
- `fmla_za_zzi.xml`: `144`
- `fmla_za_zzw.xml`: `144`
- `fmls_za_zzv.xml`: `144`

Top source files:

- `SME2/udot.s.yaml`: `433`
- `SME2/sdot.s.yaml`: `432`
- `SME2/add.s.yaml`: `343`
- `SME2/smlall.s.yaml`: `336`
- `SME2/smlsll.s.yaml`: `336`
- `SME2/umlall.s.yaml`: `336`
- `SME2/umlsll.s.yaml`: `336`
- `SME2/fmla.s.yaml`: `288`
- `SME2/fmls.s.yaml`: `288`
- `SME2/sub.s.yaml`: `288`

Likely outcome: implementing `UDOT` / `SDOT`, then `ADD` / `SUB` / `FMLA` / `FMLS`, clears the biggest remaining SME2 concentration.

### 2. Remaining move/copy and adjacent SVE cleanup

Notable XML files:

- `movaz_z_rza.xml`: `120`
- `movaz_mz_za2.xml`: `24`
- `movaz_mz_za4.xml`: `24`
- `dup_z_i.xml`: `106`
- `cpy_z_p_r.xml`: `96`

Notable source files:

- `SVE/mov.s.yaml`: `246`
- `SME2p1/movaz.s.yaml`: `168`
- `SVE/dup.s.yaml`: `106`
- `SVE/cpy.s.yaml`: `96`

Likely outcome: this is now mostly the `MOVAZ` follow-up plus a few smaller SVE move/dup/copy aliases rather than the earlier `MOVPRFX` / `MOVA` backlog.

### 3. Remaining scalar / AdvSIMD cleanup

Notable source files:

- `basic-a64-instructions.s.yaml`: `1180`
- `neon-simd-misc.s.yaml`: `260`
- `neon-simd-ldst-multi-elem.s.yaml`: `196`
- `armv8.2a-dotprod.s.yaml`: `180`
- `neon-compare-instructions.s.yaml`: `180`

Notable XML files:

- `rprfm_reg.xml`: `128`
- `dup_z_i.xml`: `106`
- `sqrdmlah_advsimd_elt.xml`: `96`
- `sqrdmlsh_advsimd_elt.xml`: `96`

Likely outcome: this is the remaining baseline cleanup after the recent system-register, scalar count, and compare work.

## Feature buckets worth prioritizing

Largest unsupported feature sets:

- `FEAT_SVE || FEAT_SME, FEAT_SVE, FEAT_SME`: `6227`
- `FEAT_SME2`: `4593`
- `FEAT_AdvSIMD`: `2058`
- `FEAT_SVE2 || FEAT_SME, FEAT_SVE2, FEAT_SME`: `2030`
- `FEAT_SME2, FEAT_SME_I16I64`: `1848`
- `FEAT_SME2 || FEAT_SVE2p1, FEAT_SME2, FEAT_SVE2p1`: `1329`
- no feature gate recorded: `935`
- `FEAT_SME`: `778`
- `FEAT_SVE2p1 || FEAT_SME2p1, FEAT_SVE2p1, FEAT_SME2p1`: `774`
- `FEAT_SME2, FEAT_SME_F64F64`: `576`

Implication: the remaining work is now even more concentrated in SVE, SME, and SME2 than before.

## Practical implementation order

Suggested order for the next follow-up pass:

1. Implement SME2 `UDOT` and `SDOT`.
2. Implement SME2 `ADD`, `SUB`, `FMLA`, and `FMLS`.
3. Sweep the remaining `SMLALL` / `SMLSLL` / `UMLALL` / `UMLSLL` families.
4. Clean up remaining move/copy aliases, especially `MOVAZ`, `DUP`, and `CPY`.
5. Sweep the remaining AdvSIMD / baseline A64 leftovers such as `rprfm_reg.xml`, compare/misc families, and dot-product/vector-element cases.
6. After each family, update `tools/supported-files.ts`, regenerate capstone cases, and rerun tests.

## Notes for whoever picks this up

- Do not add XML files to `tools/supported-files.ts` until both `decode()` and `disasm()` behave correctly for that family.
- The generated capstone file is a useful progress metric, but it is not the full instruction universe. It only covers capstone cases that match Arm XML encodings and currently fall back to `.inst`.
- The recent system-register work formats generic system-register operands as `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>`. That is acceptable for coverage and should not block further family support.
- The current branch also has local `MOVA` alias support wired in `decode()` / `disasm()`. If capstone snapshot accounting does not move as expected for those files, verify the XML/case mapping before assuming the formatter is wrong.
- The highest-impact work is still family-by-family support, not one-off instruction fixes.
