# a64js

A TypeScript AArch64 decoder and disassembler, with encoding data generated from Arm's XML reference. Generated tables are committed; the reference itself is downloaded separately for development.

- `decode()` returns encoding identity, fields, typed operands, and target availability.
- `disasm()` and `format()` render assembly, resolving PC-relative operands when supplied a PC.
- `disasmBlock()` reads little-endian instruction blocks.
- `createDecoder()` captures target features once for repeated decoding.

The generated table currently contains **3,507 encodings from 1,908 XML files**. This is a recognition inventory, not a claim of exhaustive architectural correctness.

## Getting started

The repository is currently a source-only project, not a published npm package. Import [src/index.ts](src/index.ts) directly; there is no JavaScript build step or runtime dependency. The `private` flag in `package.json` prevents accidental npm publication, not public hosting of the repository.

Use Bun 1.4.3 for dependency installation and development scripts. The TypeScript library, CLI, and tests also run directly on Node 24+.

```sh
bun install --frozen-lockfile
bun src/cli.ts --disasm 0xd65f03c0   # ret
```

## Usage

```ts
import { createDecoder, decode, disasm, disasmBlock, format } from "./src/index.ts";

console.log(disasm(0xd65f03c0));             // ret
console.log(disasm(0x10000020, 0x1000n));    // adr x0, 0x1004
console.log(disasm(0x90000000, 0x1234n));    // adrp x0, 0x1000

const decodeWord = createDecoder({ features: ["FEAT_PAuth"] });
console.log(decode(0xd65f03c0).status);      // ok

const decoded = decodeWord(0xd503233f);
console.log(decoded.mnemonic);              // PACIASP
console.log(format(decoded));               // paciasp

const lines = disasmBlock(new Uint8Array([0xc0, 0x03, 0x5f, 0xd6]), 0x1000n);
console.log(lines[0].text);                  // ret
```

Instruction words accept unsigned 32-bit integers and signed 32-bit results of JavaScript bitwise operations. Other numbers are rejected instead of silently truncated. Use `bigint` for addresses outside JavaScript's safe-integer range.

For `disasm(word, pc, options)`, the positional PC takes precedence over `options.pc`. ADRP aligns the PC to its page before applying the signed page offset.

Blocks with trailing incomplete words throw by default. Opt into truncation with `{ trailingBytes: "ignore" }`. Feature iterables, including generators, are consumed once per block or prepared decoder.

### API reference

All functions and public types are exported by [src/index.ts](src/index.ts). Full result and option definitions are in [src/types.ts](src/types.ts).

| Function | Result | Purpose |
| --- | --- | --- |
| `decode(word, options?)` | `DecodedInstruction` | Recognize a word, extract fields and operands, and check target features. |
| `createDecoder(options?)` | `(word: number) => DecodedInstruction` | Snapshot target features for repeated decoding. |
| `format(decoded, options?)` | `string` | Render an already decoded instruction. |
| `disasm(word, pc?, options?)` | `string` | Decode and format one word. |
| `disasmBlock(bytes, basePc, options?)` | `DecodedLine[]` | Decode little-endian words at successive four-byte addresses. |

A `DecodedLine` contains `address` (`bigint`), `word` (unsigned 32-bit number), `text`, and `decoded`. A `DecodedInstruction` contains `status` and `word`; recognized instructions also expose encoding metadata, fields, and, when implemented, operands. Inspect `errors` for decode diagnostics rather than relying on an assembly string alone.

| Option | Default | Accepted by |
| --- | --- | --- |
| `features: Iterable<string>` | No optional features enabled | `decode`, `createDecoder`, `disasm`, `disasmBlock` |
| `pc: bigint \| number` | Relative labels remain relative | `format`, `disasm`; block addresses are supplied by `basePc` |
| `onUnknown: "raw" \| "error"` | `"raw"` | `format`, `disasm`, `disasmBlock` |
| `trailingBytes: "error" \| "ignore"` | `"error"` | `disasmBlock` |

## Recognition, availability, and behavior

`status` describes decoding:

- `ok`: a recognized instruction with implemented operands;
- `unknown`: no recognized encoding or no implemented operand handler;
- `undefined`: a reserved encoding, invalid operand encoding, or a target-feature condition requiring architectural undefined behavior.

`availability` distinguishes target-feature failures from invalid bit patterns. `behavior` preserves explicit decode outcomes: `instruction`, `nop`, or `undefined` for the named permanent `UDF` trap.

For example, without `FEAT_BTI`, a BTI encoding retains its recognized mnemonic but has `behavior: "nop"`, `availability: "unavailable"`, and formats as `nop`. An unconditional `hint #127` retains its assembly spelling; `udf #513` retains its operand and records undefined behavior. The decoder does not simulate execution, exception levels, or current CPU state.

Pass atomic architectural feature names such as `FEAT_SVE` and `FEAT_FP16`, not Boolean expression strings. Features are explicit; there is no implicit target-CPU feature database.

Unknown and invalid instructions format as `.inst 0x????????`. Set `onUnknown: "error"` to throw with the decode diagnostic. Named system registers use encoded `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>` tuples rather than a symbolic-name database. Apple proprietary instruction dialects are outside the supported formatting contract.

## Architecture

1. XML parsing preserves linked pseudocode text and validates document structure.
2. The guard compiler parses Boolean expressions, bit slices, concatenation, membership, feature predicates, and enclosing decode paths. Unrecognized syntax fails generation unless an exact, explained override exists.
3. Alias encodings inherit canonical fields, masks, features, and validity. `canonicalEncodingId` and `canonicalFileName` expose that relationship.
4. Generated opcode buckets narrow candidate matching while preserving encoding precedence.
5. An explicit operand-family registry maps every supported XML file to a handler and stamps that family into generated encodings. Generation rejects missing handlers; registry construction rejects duplicate registrations. Families build registers, immediates, memory addresses, vector groups, and ZA operands. Invalid operands fail explicitly; intentional zero-operand instructions are distinct.
6. Formatting selects assembly aliases and renders operands. Specialized forms can retain text operands while common families use typed representations.

Implementation-dependent conditions which cannot be evaluated without CPU state are exposed in generated `guardDiagnostics`, with their assumptions. This is a targeted guard compiler, not a complete Arm pseudocode interpreter.

## Validation

The local tests check assembly examples and operand structure, reserved encodings, immediate boundaries, target-feature behavior, XML parser failures, and equivalence of generated dispatch to exhaustive matching. XML-dependent tests use the separately downloaded Arm reference.

There is no bundled external assembly corpus or differential audit. Passing tests and recognition counts are not a claim of complete architecture conformance.

## CLI

```sh
bun src/cli.ts --disasm 0xd65f03c0
bun src/cli.ts --disasm 0x10000020 --pc 0x1000
bun src/cli.ts --disasm 0xd503233f --feature FEAT_PAuth
node src/cli.ts --disasm 0xd65f03c0
```

`--feature` is repeatable. `--help` prints usage.

The CLI accepts decimal or `0x`-prefixed hexadecimal words and addresses. Words must be unsigned 32-bit values. Invalid arguments print a diagnostic and usage, then exit with status 1.

## Source layout

- [src/index.ts](src/index.ts): public API and block handling
- [src/decode.ts](src/decode.ts): matching, guard evaluation, target availability
- [src/operand-schemas.ts](src/operand-schemas.ts): typed operand construction rules
- [src/operand-registry.ts](src/operand-registry.ts): implementation coverage and family dispatch
- [src/operand-families.ts](src/operand-families.ts), [src/sme-operands.ts](src/sme-operands.ts): reusable instruction-family handlers
- [src/formatters.ts](src/formatters.ts), [src/format.ts](src/format.ts): operand dispatch and assembly rendering
- [tools/encodings.ts](tools/encodings.ts), [tools/guards.ts](tools/guards.ts), [tools/decode-guards.ts](tools/decode-guards.ts): XML compilation
- [tools/generate.ts](tools/generate.ts): generated runtime tables

## Development workflow

Validation is local; this repository does not run a GitHub Actions workflow.

### Obtain the Arm XML reference

The full test suite and `bun run generate` require the **2025-12 A-profile A64 XML release**. The library, CLI, and benchmark use committed generated tables and do not require the XML download.

Download [the 2025-12 archive directly from Arm](https://developer.arm.com/-/cdn-downloads/permalink/Exploration-Tools-A64-ISA/ISA_A64/ISA_A64_xml_A_profile-2025-12.tar.gz). From the repository root:

```sh
mkdir -p arm_ref
curl -fL --output arm_ref/ISA_A64_xml_A_profile-2025-12.tar.gz \
  https://developer.arm.com/-/cdn-downloads/permalink/Exploration-Tools-A64-ISA/ISA_A64/ISA_A64_xml_A_profile-2025-12.tar.gz
tar -xzf arm_ref/ISA_A64_xml_A_profile-2025-12.tar.gz -C arm_ref
```

The archive already contains the versioned directory. After extraction, `arm_ref/ISA_A64_xml_A_profile-2025-12/adc.xml` must exist; do not add an extra directory level. The entire `arm_ref/` directory, including archives, XML, HTML, and release notes, is ignored by Git. Keep it local and do not force-add it.

The release is pinned in [tools/supported-files.ts](tools/supported-files.ts). Using a newer Arm release is a separate update to generation inputs, not a substitute for this setup.

### Local checks

```sh
bun run check       # TypeScript and Bun tests
node --test test/*.test.ts
bun run generate    # rebuild encoding tables
git diff --exit-code -- src/generated
bun run bench       # repeatable curated-sample decoding benchmark
```

The benchmark uses a fixed 16-word instruction sample and explicit target features. It warms up for 10,000 passes, then times 250,000 passes (4,000,000 decodes) with a prepared decoder. Timing includes field, guard, and operand decoding, not assembly formatting or setup. It is a performance workload, not correctness evidence; compare runs using the same sample, features, and runtime.

Generated files are committed. Generation uses `arm_ref/ISA_A64_xml_A_profile-2025-12`, selected in [tools/supported-files.ts](tools/supported-files.ts). Edit source definitions rather than generated snapshots. After changing generation inputs, review and commit the regenerated files; rerun generation and the diff check to verify reproducibility, then rerun `bun run check` and the Node tests against the new snapshots.

For instruction changes:

1. Implement an operand family/schema or a reviewed specialized handler before adding its XML file to recognition scope.
2. Use independently sourced expected assembly and relevant reserved-bit/boundary cases. Never derive expected assembly from the decoder under test.
3. Keep alias selection separate from canonical validity; do not compensate for missing decode guards in formatting.
4. Reject unknown guard syntax during generation. Implementation-state assumptions need a documented diagnostic or exact override.
5. Prefer structured operands for common families; preserve assembly behavior when replacing specialized text operands.
6. Record the upstream source, version/commit, applicable license, and import command for new reference evidence. Keep recognition, operand implementation, and verified assembly separate.

Candidate future work is tracked in [TODO.md](TODO.md); it is not an automated task queue.

## License

The project code is [MIT licensed](LICENSE). You may use, modify, redistribute, or sell it, provided you retain the copyright and license notice. It is provided without warranty.

Arm's XML and HTML reference files are downloaded separately and excluded from the current repository tree. Follow the terms included with the Arm download; a project-code license does not cover third-party material.

