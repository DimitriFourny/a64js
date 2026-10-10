# a64js

A TypeScript AArch64 decoder and disassembler, with encoding data generated from the bundled Arm XML reference.

- `decode()` returns encoding identity, fields, typed operands, and target availability.
- `disasm()` and `format()` render assembly, resolving PC-relative operands when supplied a PC.
- `disasmBlock()` reads little-endian instruction blocks.
- `createDecoder()` captures target features once for repeated decoding.

The generated table currently contains **3,507 encodings from 1,908 XML files**. This is a recognition inventory, not a claim of exhaustive architectural correctness.

## Development

Use Bun 1.4.3, or Node 24+ for executing the TypeScript library and tests. Bun is used for dependency installation and development scripts.

```sh
bun install --frozen-lockfile
bun run check       # TypeScript, tests, independent corpus audit
bun run generate    # rebuild encoding tables and corpus support accounting
bun run bench       # repeatable warm decoding benchmark
node --test test/*.test.ts
```

CI checks both runtimes and rejects generated-file drift. Generated files are committed; edit their source definitions rather than the snapshots.

## Usage

```ts
import { createDecoder, decode, disasm, disasmBlock, format } from "./src/index.ts";

console.log(disasm(0xd65f03c0));             // ret
console.log(disasm(0x10000020, 0x1000n));    // adr x0, 0x1004
console.log(disasm(0x90000000, 0x1234n));    // adrp x0, 0x1000

const decodeWord = createDecoder({ features: ["FEAT_PAuth"] });
const decoded = decodeWord(0xd503233f);
console.log(decoded.mnemonic);              // PACIASP
console.log(format(decoded));               // paciasp

const lines = disasmBlock(new Uint8Array([0xc0, 0x03, 0x5f, 0xd6]), 0x1000n);
```

Instruction words accept unsigned 32-bit integers and signed 32-bit results of JavaScript bitwise operations. Other numbers are rejected instead of silently truncated. Use `bigint` for addresses outside JavaScript's safe-integer range.

For `disasm(word, pc, options)`, the positional PC takes precedence over `options.pc`. ADRP aligns the PC to its page before applying the signed page offset.

Blocks with trailing incomplete words throw by default. Opt into truncation with `{ trailingBytes: "ignore" }`. Feature iterables, including generators, are consumed once per block or prepared decoder.

## Recognition, availability, and behavior

`status` describes decoding:

- `ok`: a recognized instruction with implemented operands;
- `unknown`: no recognized encoding or no implemented operand handler;
- `undefined`: a reserved encoding, invalid operand encoding, or a target-feature condition requiring architectural undefined behavior.

`availability` distinguishes target-feature failures from invalid bit patterns. `behavior` preserves explicit decode outcomes: `instruction`, `nop`, or `undefined` for the named permanent `UDF` trap.

For example, without `FEAT_BTI`, a BTI encoding retains its recognized mnemonic but has `behavior: "nop"`, `availability: "unavailable"`, and formats as `nop`. An unconditional `hint #127` retains its assembly spelling; `udf #513` retains its operand and records undefined behavior. The decoder does not simulate execution, exception levels, or current CPU state.

Pass atomic architectural feature names such as `FEAT_SVE` and `FEAT_FP16`, not Boolean expression strings. Features are explicit; there is no implicit target-CPU feature database.

Unknown and invalid instructions format as `.inst 0x????????`. Set `onUnknown: "error"` to throw with the decode diagnostic. The previously unused `profile` option has been removed; Apple proprietary instruction dialects are outside the supported formatting contract.

## Architecture

1. XML parsing preserves linked pseudocode text and validates document structure.
2. The guard compiler parses Boolean expressions, bit slices, concatenation, membership, feature predicates, and enclosing decode paths. Unrecognized syntax fails generation unless an exact, explained override exists.
3. Alias encodings inherit canonical fields, masks, features, and validity. `canonicalEncodingId` and `canonicalFileName` expose that relationship.
4. Generated opcode buckets narrow candidate matching while preserving encoding precedence.
5. An explicit operand-family registry maps every supported XML file to a handler and stamps that family into generated encodings. Generation rejects missing handlers; registry construction rejects duplicate registrations. Families build registers, immediates, memory addresses, vector groups, and ZA operands. Invalid operands fail explicitly; intentional zero-operand instructions are distinct.
6. Formatting selects assembly aliases and renders operands. Specialized forms can retain text operands while common families use typed representations.

Implementation-dependent conditions which cannot be evaluated without CPU state are exposed in generated `guardDiagnostics`, with their assumptions. This is a targeted guard compiler, not a complete Arm pseudocode interpreter.

## Independent validation

The immutable reference lives in [test/reference/capstone](test/reference/capstone), separately from [generated support accounting](test/generated/capstone). Its manifest records checksums, source identities, and the original repository commit. The original upstream Capstone revision was not recorded; the manifest explicitly preserves that uncertainty.

The audit currently accounts for all **34,621** reference cases:

- **31,190** match assembly, including operands, after narrow documented syntax and alias equivalences.
- **3,425** use named system registers whose name mapping is outside scope. Their encoded register tuple and GP operands are still checked.
- **6** Apple proprietary dialect cases overlap standard Arm encodings and are explicitly excluded.

There are no remaining corpus assembly mismatches. These are finite reference examples, not coverage of all possible instruction words. Additional tests exercise reserved-bit combinations, immediate boundaries, feature conditions, operand structure, parser failure modes, and dispatch equivalence.

```sh
bun tools/audit-capstone.ts --check --json=/tmp/a64js-audit.json
```

The original imported feature-context expressions are retained with checksums. A separately reviewed profile map supplies concrete atomic features for executing each reference test. Corpus normalization never derives expected assembly from this decoder's current output.

## CLI

```sh
bun src/cli.ts --disasm 0xd65f03c0
bun src/cli.ts --disasm 0x10000020 --pc 0x1000
bun src/cli.ts --disasm 0xd503233f --feature FEAT_PAuth
```

`--feature` is repeatable. `--help` prints usage.

## Source layout

- [src/index.ts](src/index.ts): public API and block handling
- [src/decode.ts](src/decode.ts): matching, guard evaluation, target availability
- [src/operand-schemas.ts](src/operand-schemas.ts): typed operand construction rules
- [src/operand-registry.ts](src/operand-registry.ts): implementation coverage and family dispatch
- [src/operand-families.ts](src/operand-families.ts), [src/sme-operands.ts](src/sme-operands.ts): reusable instruction-family handlers
- [src/formatters.ts](src/formatters.ts), [src/format.ts](src/format.ts): operand dispatch and assembly rendering
- [tools/encodings.ts](tools/encodings.ts), [tools/guards.ts](tools/guards.ts), [tools/decode-guards.ts](tools/decode-guards.ts): XML compilation
- [tools/generate.ts](tools/generate.ts): generated runtime tables
- [tools/audit-capstone.ts](tools/audit-capstone.ts): independent correctness and coverage report
