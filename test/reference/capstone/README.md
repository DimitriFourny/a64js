# Preserved Capstone assembly reference

`corpus.json` is the immutable instruction evidence: `[sourceFile, caseIndex, word, asmText]` rows copied losslessly from both arrays of the original repository fixtures. It contains 34,621 cases. The Capstone upstream version, revision, source URL, and original import command were not recorded; `manifest.json` records those fields as unknown and identifies the repository commit used for preservation. The original source files themselves are not available in this repository. This is an independent expected-assembly corpus with limited upstream provenance, not a claim of a verified Capstone release.

`classification.json` contains the corresponding `[modulePath, encodingFile, mnemonic, features]` rows from the same import. These are XML association and execution-context metadata, not additional assembly evidence. The classification remains a checksummed import snapshot. `test/helpers/capstone-features.ts` resolves its reviewed Boolean feature requirements into concrete enabled profiles: each OR expression selects its first branch and each AND enables every requirement in that branch; already explicit atomic features are preserved.

`manifest.json` records the SHA-256 and row count of both inputs, plus all 1,012 module paths. Two imported modules have no rows. The nested `SVE/index.generated.ts` is the INDEX instruction corpus; only the root `index.generated.ts` is an aggregate index.

`tools/generate-capstone.ts` reads these checked inputs and partitions cases by recognition scope. Generated fixture modules are disposable outputs and are never read as generation inputs. Adding an encoding to recognition scope does not count its assembly as verified.

`tools/audit-capstone.ts --check --json=<path>` compares actual assembly against this reference, reports all mismatches, and separates recognition, operand presence, and complete assembly verification. Operand presence alone does not prove that any operand is correct. The full assembly test rejects missing, extra, or wrong operands.

The comparison rules in `test/helpers/capstone-assembly.ts` are restricted to case/spacing, exact decimal/hex numbers, relative-label notation, signed/unsigned MOV bit patterns and 64-bit relative labels, contiguous vector-list range spelling, identity shifts, natural-width unsigned ADD/SUB extension spelling, the optional DCPS zero, and these documented Arm aliases: SSHLL/USHLL with a zero shift, predicate NOT/EOR with the governing predicate as the second source, and vector MOV/ORR with identical source registers. Registers, widths, lane indexes, predicate modes, nonzero shifts, and memory addressing remain significant. The local Arm XML alias documents (`sxtl_sshll_advsimd.xml`, `uxtl_ushll_advsimd.xml`, `not_eor_p_p_pp.xml`, `mov_orr_advsimd_reg.xml`, `mov_orr_z_zz.xml`) supply the alias conditions. Expected assembly is never synthesized from the decoder output.

There are two explicit exclusions, reported separately from full assembly verification:

- The six `apple_proprietary.yaml` cases use Apple's AMX dialect and overlap standard Arm encodings. This A64 dialect does not validate those Apple mnemonics.
- Named MRS/MSR/MRRS/MSRR registers may render as a raw `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>` tuple. Their upstream symbolic-name mapping is unavailable. The comparator independently extracts each raw tuple from the instruction word and still checks every GP register operand. It excludes only the unavailable name mapping, and rejects a wrong tuple or a missing operand.

To update reference evidence, obtain and record the actual upstream source and version, preserve original source identities, review changes to words/assembly, and update the manifest checksums intentionally. Regenerating support accounting does not update reference evidence.
