# Instruction Support TODO

Current capstone coverage snapshot:

- `5829` supported capstone cases
- `28792` unsupported capstone cases
- `50` XML instruction files currently listed in `tools/supported-files.ts`
- `1833` distinct unsupported XML instruction files
- `980` capstone source YAML files containing unsupported cases
- `950` distinct unsupported mnemonics

Recently completed families:

- `mrs.xml`: `1789` cases promoted to supported
- `msr_reg.xml`: `1511`
- `movprfx_z_z.xml`: `741`
- `fcpy_z_p_i.xml`: `1040`
- `fdup_z_i.xml`: `524`

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

### 1. Remaining SVE / SME move-copy families

- `movprfx_z_p_z.xml`: `331`
- `mov_mova_z_p_rza.xml`: `240`
- `mov_mova_za_p_rz.xml`: `240`
- `mov_mova_mz2_za.xml`: `192`
- `mov_mova_za2_z.xml`: `192`
- `mov_mova_za4_z.xml`: `192`
- `mov_mova_mz4_za.xml`: `180`

Top mnemonics:

- `MOVA`: `1380`
- `MOVPRFX`: `331`

Top source files:

- `SME2/mova.s.yaml`: `900`
- `SME/mova.s.yaml`: `480`
- `SVE/mov.s.yaml`: `252`

Likely outcome: implementing the remaining `MOVPRFX` and `MOVA` variants clears the last large move/copy bucket after the recent `MRS`/`MSR` and `FCPY`/`FDUP` work.

### 2. SME2 arithmetic / dot-product families

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

### 3. Remaining scalar / AdvSIMD cleanup

Notable XML files:

- `incb_r_rs.xml`: `186`
- `cmpeq_p_p_zi.xml`: `160`
- `decb_r_rs.xml`: `160`

Notable source files:

- `basic-a64-instructions.s.yaml`: `1180`
- `neon-simd-misc.s.yaml`: `260`

Likely outcome: this bucket is smaller than it looked in the previous snapshot because `MRS`/`MSR` removed a large chunk of baseline A64 fallout.

## Feature buckets worth prioritizing

Largest unsupported feature sets:

- `FEAT_SVE || FEAT_SME, FEAT_SVE, FEAT_SME`: `7064`
- `FEAT_SME2`: `5493`
- `FEAT_AdvSIMD`: `2058`
- `FEAT_SVE2 || FEAT_SME, FEAT_SVE2, FEAT_SME`: `2030`
- `FEAT_SME2, FEAT_SME_I16I64`: `1848`
- `FEAT_SME2 || FEAT_SVE2p1, FEAT_SME2, FEAT_SVE2p1`: `1329`
- `FEAT_SME`: `1258`
- no feature gate recorded: `935`

Implication: the remaining work is now even more concentrated in SVE, SME, and SME2 than before.

## Practical implementation order

Suggested order for the next follow-up pass:

1. Implement predicated `MOVPRFX` via `movprfx_z_p_z.xml`.
2. Implement SME / SME2 `MOVA` variants.
3. Implement SME2 `UDOT` and `SDOT`.
4. Implement SME2 `ADD`, `SUB`, `FMLA`, and `FMLS`.
5. Sweep the remaining `SMLALL` / `SMLSLL` / `UMLALL` / `UMLSLL` families.
6. Sweep smaller scalar and AdvSIMD leftovers such as `incb_r_rs.xml`, `decb_r_rs.xml`, and compare/misc families.
7. After each family, update `tools/supported-files.ts`, regenerate capstone cases, and rerun tests.

## Notes for whoever picks this up

- Do not add XML files to `tools/supported-files.ts` until both `decode()` and `disasm()` behave correctly for that family.
- The generated capstone file is a useful progress metric, but it is not the full instruction universe. It only covers capstone cases that match Arm XML encodings and currently fall back to `.inst`.
- The recent system-register work formats generic system-register operands as `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>`. That is acceptable for coverage and should not block further family support.
- The highest-impact work is still family-by-family support, not one-off instruction fixes.
