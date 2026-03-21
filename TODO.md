# Instruction Support TODO

Current capstone coverage snapshot:

- `224` supported capstone cases
- `34397` unsupported capstone cases
- `45` XML instruction files currently listed in `tools/supported-files.ts`
- `1838` distinct unsupported XML instruction files
- `1009` capstone source YAML files containing unsupported cases
- `953` distinct unsupported mnemonics

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
node tools/generate-capstone-tests.ts
node --test test/capstone.test.ts
```

When an instruction family is actually supported end-to-end, add its XML file to `tools/supported-files.ts`.

## Highest-volume missing areas

These are the biggest buckets in the current unsupported set and should be the first place to spend time.

### 1. System register instructions

- `mrs.xml`: `1789`
- `msr_reg.xml`: `1511`
- Top source files:
  - `basic-a64-instructions.s.yaml`: `1806`
  - `armv8.9a-debug-pmu.s.yaml`: `1105`
  - `trace-regs.s.yaml`: `382`
  - `armv8r-sysreg.s.yaml`: `285`

Likely outcome: implementing `MRS` and `MSR` support removes a large amount of unsupported baseline A64 coverage quickly.

### 2. SVE / SME move-copy-prefix families

- `fcpy_z_p_i.xml`: `1040`
- `movprfx_z_z.xml`: `741`
- `fdup_z_i.xml`: `524`
- `movprfx_z_p_z.xml`: `331`
- `mov_mova_z_p_rza.xml`: `240`
- `mov_mova_za_p_rz.xml`: `240`
- `mov_mova_mz2_za.xml`: `192`
- `mov_mova_za2_z.xml`: `192`
- `mov_mova_za4_z.xml`: `192`
- Top mnemonics:
  - `MOVA`: `1380`
  - `MOVPRFX`: `1072`
  - `FCPY`: `1040`
  - `FDUP`: `524`

Top source files:

- `SME2/mova.s.yaml`: `900`
- `SVE/fmov.s.yaml`: `538`
- `SVE/fcpy.s.yaml`: `524`
- `SVE/fdup.s.yaml`: `516`
- `SME/mova.s.yaml`: `480`
- `SVE/mov.s.yaml`: `258`

### 3. SME2 arithmetic / dot-product families

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

### 4. Remaining AdvSIMD / FP / misc A64 families

Notable source files:

- `neon-simd-misc.s.yaml`: `260`
- `neon-simd-ldst-multi-elem.s.yaml`: `196`
- `armv8.2a-dotprod.s.yaml`: `180`
- `neon-compare-instructions.s.yaml`: `180`
- `armv8.6a-amvs.s.yaml`: `328`

There is also a sizeable base bucket with no explicit feature gating in the generated feature list: `4235` cases.

## Feature buckets worth prioritizing

Largest unsupported feature sets:

- `FEAT_SVE || FEAT_SME, FEAT_SVE, FEAT_SME`: `9369`
- `FEAT_SME2`: `5493`
- no feature gate recorded: `4235`
- `FEAT_AdvSIMD`: `2058`
- `FEAT_SVE2 || FEAT_SME, FEAT_SVE2, FEAT_SME`: `2030`
- `FEAT_SME2, FEAT_SME_I16I64`: `1848`
- `FEAT_SME2 || FEAT_SVE2p1, FEAT_SME2, FEAT_SVE2p1`: `1329`
- `FEAT_SME`: `1258`

Implication: most missing coverage is not classic scalar A64. It is concentrated in SVE, SME, SME2, and related vector/matrix extensions.

## Practical implementation order

Suggested order for a follow-up agent:

1. Implement `MRS` / `MSR` support first.
2. Implement SVE `MOVPRFX`, `FCPY`, and `FDUP`.
3. Implement SME / SME2 `MOVA` variants.
4. Implement SME2 `UDOT`, `SDOT`, `ADD`, `SUB`, `FMLA`, and `FMLS`.
5. Sweep remaining high-count AdvSIMD and miscellaneous A64 families.
6. After each family, update `tools/supported-files.ts`, regenerate capstone cases, and rerun tests.

## Notes for whoever picks this up

- Do not add XML files to `tools/supported-files.ts` until both `decode()` and `disasm()` behave correctly for that family.
- The generated capstone file is a useful progress metric, but it is not the full instruction universe. It only covers capstone cases that match Arm XML encodings and currently fall back to `.inst`.
- The highest-impact work is likely family-by-family support, not one-off instruction fixes.
