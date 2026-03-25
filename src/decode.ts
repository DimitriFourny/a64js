import { buildOperands } from "./formatters.ts";
import type { DecodeOptions, DecodedInstruction, GeneratedEncoding, GuardCheck } from "./types.ts";
import { ENCODINGS } from "./generated/isa/index.generated.ts";

function extractField(word: number, lsb: number, width: number): number {
  if (width === 32) {
    return word >>> 0;
  }
  return (word >>> lsb) & ((1 << width) - 1);
}

function extractFields(word: number, encoding: GeneratedEncoding): Record<string, number> {
  const result: Record<string, number> = {};
  for (const field of encoding.fields) {
    result[field.name] = extractField(word, field.lsb, field.width);
  }
  return result;
}

function guardCheckMatches(fields: Record<string, number>, guard: GuardCheck): boolean {
  const raw = fields[guard.field] ?? 0;
  const actual = guard.mask === -1 ? raw : (raw & guard.mask) >>> guard.lsb;

  return guard.kind === "eq" ? actual === guard.value : actual !== guard.value;
}

function hasFeatures(encoding: GeneratedEncoding, enabledFeatures: Set<string>): boolean {
  return encoding.features.every((feature) => enabledFeatures.has(feature));
}

export function decode(word: number, options: DecodeOptions = {}): DecodedInstruction {
  const enabledFeatures = new Set(options.features ?? []);

  for (const encoding of ENCODINGS) {
    if (((word & encoding.mask) >>> 0) !== encoding.value) {
      continue;
    }

    if (!hasFeatures(encoding, enabledFeatures)) {
      return {
        status: "undefined",
        word,
        encoding,
        mnemonic: encoding.mnemonic,
        errors: [`missing features: ${encoding.features.filter((feature) => !enabledFeatures.has(feature)).join(", ")}`],
      };
    }

    const fields = extractFields(word, encoding);
    for (const guard of encoding.guards) {
      if (guard.all.every((check) => guardCheckMatches(fields, check))) {
        return {
          status: "undefined",
          word,
          encoding,
          mnemonic: encoding.mnemonic,
          fields,
          errors: [`decode guard failed for ${guard.field}`],
        };
      }
    }

    const decoded: DecodedInstruction = {
      status: "ok",
      word,
      encoding,
      mnemonic: encoding.mnemonic,
      fields,
    };
    decoded.operands = buildOperands(decoded);
    return decoded;
  }

  return { status: "unknown", word };
}
