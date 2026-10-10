# Decoder maintenance

## Current validation baseline

Run `bun run check`, `node --test test/*.test.ts`, and `bun run generate` before accepting changes. Generated snapshots must be reproducible, and `bun run audit` must report zero unexplained assembly mismatches.

The current inventory is 3,507 encodings from 1,908 XML files. The 34,621-case reference is tracked separately from implementation support: 31,190 assembly comparisons, 3,425 explicit system-register name exclusions with encoded-field checks, and six Apple dialect exclusions. These counts do not establish exhaustive instruction-word coverage.

## Completed review improvements

- Preserve an immutable, checksummed reference corpus with honest provenance; regenerate support accounting from independent inputs.
- Compare full reference assembly with narrow, reviewed equivalence rules; prevent operand omissions from passing as support.
- Reject invalid operands explicitly and distinguish implemented zero-operand instructions.
- Compile complete Boolean decode conditions, retain feature-dependent NOP behavior, and inherit canonical constraints for aliases.
- Check reserved encodings, boundary immediates, parser failure modes, and target-feature behavior.
- Repair scalar, AdvSIMD, SVE, and SME field-layout defects exposed by the independent audit.
- Introduce typed memory, SIMD, vector-group, indexed-vector, and ZA operands with reusable family/schema handlers.
- Replace filename-switch dispatch with explicit family registrations, verified during table generation.
- Narrow matching through generated opcode buckets without changing precedence; reuse target features in block decoding.
- Validate numeric API inputs and require an explicit policy for trailing partial instruction words.
- Add TypeScript checks, cross-runtime CI, reproducibility checks, and a repeatable benchmark.

## Rules for future instruction work

1. Add an explicit operand family/schema or a reviewed specialized handler before adding an encoding to recognition scope.
2. Add independently sourced positive examples and relevant reserved/boundary cases. Never generate expected assembly from the implementation under test.
3. Keep alias selection separate from inherited canonical validity; do not patch missing canonical guards in formatting code.
4. Fail generation on unknown guard syntax. Implementation-state assumptions require a documented diagnostic or exact override.
5. Preserve source provenance. A future upstream corpus import must record its commit/version and import command.
6. Prefer structured operands when extending a common family; retain specialized text operands only where migration has a clear separate scope.
7. Report recognition, operand implementation, and verified assembly separately.
