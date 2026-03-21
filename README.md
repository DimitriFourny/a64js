# a64js

`a64js` is a small AArch64 decoder/disassembler written in TypeScript.

The project consumes ARM XML reference data, generates a compact encoding table, and exposes:

- `decode()` for structured instruction decoding
- `disasm()` for single-instruction assembly formatting
- `disasmBlock()` for decoding a block of little-endian AArch64 instructions
- a CLI option, `--disasm`, for ad hoc instruction disassembly

## Status

This repository is currently focused on a targeted subset of AArch64 encodings generated from the ARM XML sources bundled in [`arm_ref/`](/home/df0/a64js/arm_ref).

At the moment the generated table contains 87 encodings.

## Requirements

- Bun

## Setup

```bash
bun install
```

## Development

Regenerate the instruction table:

```bash
bun run generate
```

This also regenerates the capstone-derived test corpus used to check:

- instructions backed by the current supported XML set decode without falling back to `.inst`
- instructions matched to unsupported XML files still format as raw `.inst`

Run the test suite:

```bash
bun run test
```

Run only the capstone corpus tests:

```bash
node tools/generate-capstone-tests.ts
node --test test/capstone.test.ts
```

## Library Usage

### Disassemble one instruction

```ts
import { disasm } from "./src/index.ts";

console.log(disasm(0xd65f03c0));
// ret

console.log(disasm(0x10000020, 0x1000n));
// adr x0, 0x1004
```

### Decode one instruction

```ts
import { decode } from "./src/index.ts";

const decoded = decode(0xd503233f, {
  features: ["FEAT_PAuth", "FEAT_PAuth_LR", "FEAT_BTI"],
});

console.log(decoded.status);
// "ok"

console.log(decoded.mnemonic);
// "PACIASP"
```

### Disassemble a block

```ts
import { disasmBlock } from "./src/index.ts";

const bytes = new Uint8Array([
  0xc0, 0x03, 0x5f, 0xd6,
  0x20, 0x00, 0x00, 0x10,
]);

const lines = disasmBlock(bytes, 0x1000n);

for (const line of lines) {
  console.log(line.address.toString(16), line.text);
}
```

## CLI Usage

Disassemble a single 32-bit instruction word:

```bash
bun run src/cli.ts --disasm 0xd65f03c0
```

Use `--pc` when the instruction contains a PC-relative immediate:

```bash
bun run src/cli.ts --disasm 0x10000020 --pc 0x1000
```

Enable feature-gated instructions with repeatable `--feature` flags:

```bash
bun run src/cli.ts \
  --disasm 0xd503233f \
  --feature FEAT_PAuth \
  --feature FEAT_PAuth_LR \
  --feature FEAT_BTI
```

CLI options:

- `--disasm <word>` disassembles a single 32-bit instruction word
- `--pc <address>` supplies the program counter for PC-relative formatting
- `--feature <name>` enables a decode-time architectural feature, can be repeated

## API Notes

- Unknown or unsupported instructions format as `.inst 0x????????` by default.
- `decode()` returns `status: "undefined"` for feature-gated instructions when the required features are not enabled.
- `FormatOptions.onUnknown` can be set to `"error"` to throw instead of formatting raw `.inst`.
- `disasmBlock()` assumes little-endian AArch64 instruction words.

## Project Layout

- [`src/index.ts`](/home/df0/a64js/src/index.ts): public API
- [`src/decode.ts`](/home/df0/a64js/src/decode.ts): instruction matching and field extraction
- [`src/format.ts`](/home/df0/a64js/src/format.ts): assembly formatting
- [`src/cli.ts`](/home/df0/a64js/src/cli.ts): CLI entrypoint
- [`tools/generate.ts`](/home/df0/a64js/tools/generate.ts): XML-to-generated-table pipeline
- [`tools/generate-capstone-tests.ts`](/home/df0/a64js/tools/generate-capstone-tests.ts): capstone corpus classifier and fixture generator
- [`src/generated/isa.generated.ts`](/home/df0/a64js/src/generated/isa.generated.ts): generated encoding data
- [`test/capstone.test.ts`](/home/df0/a64js/test/capstone.test.ts): generated capstone corpus assertions

## Source Data

Instruction metadata is derived from the ARM A-profile XML reference files committed in this repository. The generator turns a supported subset of those XML descriptions into the encoding table used at runtime.
