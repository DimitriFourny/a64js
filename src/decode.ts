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
  if (guard.kind === "eq_field" || guard.kind === "ne_field") {
    const actual = fields[guard.field] ?? 0;
    const expected = fields[guard.otherField] ?? 0;
    return guard.kind === "eq_field" ? actual === expected : actual !== expected;
  }

  if (guard.kind === "eq_concat" || guard.kind === "ne_concat") {
    let actual = 0;
    for (const part of guard.parts) {
      const raw = fields[part.field] ?? 0;
      const width = part.msb - part.lsb + 1;
      const value = (raw >>> part.lsb) & ((1 << width) - 1);
      actual = (actual << width) | value;
    }
    return guard.kind === "eq_concat" ? actual === guard.value : actual !== guard.value;
  }

  const raw = fields[guard.field] ?? 0;
  const actual = guard.mask === -1 ? raw : (raw & guard.mask) >>> guard.lsb;

  return guard.kind === "eq" ? actual === guard.value : actual !== guard.value;
}

function hasFeatures(encoding: GeneratedEncoding, enabledFeatures: Set<string>): boolean {
  return encoding.features.every((feature) => enabledFeatures.has(feature));
}

const SUPPORTED_AT_SYS_KEYS = new Set([
  "0:7:8:0",
  "0:7:8:1",
  "0:7:8:2",
  "0:7:8:3",
  "0:7:9:0",
  "0:7:9:1",
  "0:7:9:2",
  "4:7:8:0",
  "4:7:8:1",
  "4:7:8:4",
  "4:7:8:5",
  "4:7:8:6",
  "4:7:8:7",
  "4:7:9:2",
  "6:7:8:0",
  "6:7:8:1",
  "6:7:9:2",
]);

const SUPPORTED_DC_SYS_KEYS = new Set([
  "0:7:1:0",
  "0:7:5:0",
  "3:7:5:1",
  "0:7:6:1",
  "0:7:6:2",
  "0:7:6:3",
  "0:7:6:4",
  "0:7:6:5",
  "0:7:6:6",
  "0:7:10:2",
  "0:7:10:4",
  "0:7:10:6",
  "0:7:14:2",
  "0:7:14:4",
  "0:7:14:6",
  "3:7:4:1",
  "3:7:4:3",
  "3:7:4:4",
  "3:7:10:1",
  "3:7:10:3",
  "3:7:10:5",
  "3:7:11:1",
  "3:7:12:1",
  "3:7:12:3",
  "3:7:12:5",
  "3:7:13:1",
  "3:7:13:3",
  "3:7:13:5",
  "3:7:14:1",
  "3:7:14:3",
  "3:7:14:5",
  "4:7:14:0",
  "4:7:14:7",
]);

const SUPPORTED_TLBI_SYS_KEYS = new Set([
  "0:8:3:0",
  "0:8:3:1",
  "0:8:3:2",
  "0:8:3:3",
  "0:8:3:5",
  "0:8:3:7",
  "0:8:7:0",
  "0:8:7:1",
  "0:8:7:2",
  "0:8:7:3",
  "0:8:7:5",
  "0:8:7:7",
  "3:9:2:1",
  "4:8:0:1",
  "4:8:0:5",
  "4:8:2:2",
  "4:8:3:0",
  "4:8:3:1",
  "4:8:3:4",
  "4:8:3:5",
  "4:8:3:6",
  "4:8:4:1",
  "4:8:4:5",
  "4:8:5:2",
  "4:8:6:2",
  "4:8:7:0",
  "4:8:7:1",
  "4:8:7:4",
  "4:8:7:5",
  "4:8:7:6",
  "4:9:2:2",
  "4:9:5:2",
  "4:9:6:2",
  "6:8:3:0",
  "6:8:3:1",
  "6:8:3:5",
  "6:8:7:0",
  "6:8:7:1",
  "6:8:7:5",
]);

function systemAliasKey(fields: Record<string, number>): string {
  return `${fields.op1 ?? 0}:${fields.CRn ?? 0}:${fields.CRm ?? 0}:${fields.op2 ?? 0}`;
}

function isUnsupportedConditionalSelectAlias(
  encoding: GeneratedEncoding,
  fields: Record<string, number>,
): boolean {
  return (
    (encoding.fileName === "cinc_csinc.xml" || encoding.fileName === "cinv_csinv.xml") &&
    fields.Rn === 31 &&
    fields.Rm === 31
  );
}

function isMultiplyAliasOverlap(
  encoding: GeneratedEncoding,
  fields: Record<string, number>,
): boolean {
  return (
    (encoding.fileName === "msub.xml" && fields.Ra === 31) ||
    (encoding.fileName === "smaddl.xml" && fields.Ra === 31) ||
    (encoding.fileName === "smsubl.xml" && fields.Ra === 31) ||
    (encoding.fileName === "umaddl.xml" && fields.Ra === 31) ||
    (encoding.fileName === "umsubl.xml" && fields.Ra === 31)
  );
}

function isUnsupportedLogicalImmediateAlias(
  encoding: GeneratedEncoding,
  fields: Record<string, number>,
): boolean {
  return encoding.fileName === "orr_log_imm.xml" && fields.Rn === 31;
}

function isUnsupportedBarrierAlias(
  encoding: GeneratedEncoding,
  fields: Record<string, number>,
): boolean {
  return encoding.fileName === "dsb.xml" && ((fields.CRm ?? 0) === 0 || (fields.CRm ?? 0) === 4);
}

function isUnsupportedSystemInstructionOverlap(
  encoding: GeneratedEncoding,
  fields: Record<string, number>,
): boolean {
  const key = systemAliasKey(fields);
  if (encoding.fileName === "at_sys.xml") {
    return !SUPPORTED_AT_SYS_KEYS.has(key);
  }
  if (encoding.fileName === "dc_sys.xml") {
    return !SUPPORTED_DC_SYS_KEYS.has(key);
  }
  if (encoding.fileName === "tlbi_sys.xml") {
    return !SUPPORTED_TLBI_SYS_KEYS.has(key);
  }
  return false;
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
    if (
      isUnsupportedConditionalSelectAlias(encoding, fields) ||
      isUnsupportedLogicalImmediateAlias(encoding, fields) ||
      isUnsupportedBarrierAlias(encoding, fields) ||
      isUnsupportedSystemInstructionOverlap(encoding, fields)
    ) {
      return {
        status: "unknown",
        word,
      };
    }
    if (isMultiplyAliasOverlap(encoding, fields)) {
      continue;
    }
    for (const guard of encoding.guards) {
      if (guard.all.every((check) => guardCheckMatches(fields, check))) {
        return {
          status: "undefined",
          word,
          encoding,
          mnemonic: encoding.mnemonic,
          fields,
          errors: ["decode guard failed"],
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
