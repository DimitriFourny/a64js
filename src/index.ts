import { decode } from "./decode.ts";
import { format } from "./format.ts";
import type { DecodedInstruction, DecodedLine, DecodeOptions, FormatOptions } from "./types.ts";

export * from "./types.ts";

export function disasm(word: number, pc?: bigint | number, options: DecodeOptions & FormatOptions = {}): string {
  const decoded = decode(word, options);
  return format(decoded, { ...options, pc });
}

export function disasmBlock(
  bytes: Uint8Array,
  basePc: bigint | number,
  options: DecodeOptions & FormatOptions = {},
): DecodedLine[] {
  const lines: DecodedLine[] = [];
  const base = BigInt(basePc);

  for (let offset = 0; offset + 3 < bytes.length; offset += 4) {
    const word =
      bytes[offset] |
      (bytes[offset + 1] << 8) |
      (bytes[offset + 2] << 16) |
      (bytes[offset + 3] << 24);
    const address = base + BigInt(offset);
    const decoded = decode(word >>> 0, options);
    lines.push({
      address,
      word: word >>> 0,
      text: format(decoded, { ...options, pc: address }),
      decoded,
    });
  }

  return lines;
}

export { decode, format };
