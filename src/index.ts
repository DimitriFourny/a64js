import { createDecoder, decode } from "./decode.ts";
import { format } from "./format.ts";
import { addressToBigInt } from "./input.ts";
import type { BlockOptions, DecodedLine, DecodeOptions, FormatOptions } from "./types.ts";

export * from "./types.ts";

export function disasm(word: number, pc?: bigint | number, options: DecodeOptions & FormatOptions = {}): string {
  const decoded = decode(word, options);
  const address = pc ?? options.pc;
  return format(decoded, { ...options, pc: address === undefined ? undefined : addressToBigInt(address) });
}

export function disasmBlock(
  bytes: Uint8Array,
  basePc: bigint | number,
  options: BlockOptions = {},
): DecodedLine[] {
  const lines: DecodedLine[] = [];
  const base = addressToBigInt(basePc);
  if (bytes.length % 4 !== 0 && options.trailingBytes !== "ignore") {
    throw new RangeError("instruction block length must be a multiple of four bytes");
  }
  // Iterables may be single-use generators: consume them once for the whole block.
  const decodeWord = createDecoder(options);

  for (let offset = 0; offset + 3 < bytes.length; offset += 4) {
    const word =
      bytes[offset] |
      (bytes[offset + 1] << 8) |
      (bytes[offset + 2] << 16) |
      (bytes[offset + 3] << 24);
    const address = base + BigInt(offset);
    const decoded = decodeWord(word >>> 0);
    lines.push({
      address,
      word: word >>> 0,
      text: format(decoded, { ...options, pc: address }),
      decoded,
    });
  }

  return lines;
}

export { createDecoder, decode, format };
