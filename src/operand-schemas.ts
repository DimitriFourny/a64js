import { OperandDecodeError } from "./operand-errors.ts";
import type { ElementSize, MemoryOperand, SimdRegisterOperand, VectorGroupOperand } from "./operand-types.ts";
import type { DecodedInstruction, Operand, RegisterName } from "./types.ts";

type Value<T> = T | ((instruction: DecodedInstruction) => T);
type Lane = Exclude<ElementSize, "q">;

/** Rules construct semantic operands directly from encoding fields. */
export type OperandRule =
  | { kind: "gp"; field: string; width: Value<32 | 64>; zeroName?: "zr" | "sp" }
  | { kind: "scalar"; field: string; lane: Value<ElementSize> }
  | { kind: "simd"; field: string; lane: Value<ElementSize>; lanes?: Value<number>; laneIndex?: Value<number>; index?: Value<number> }
  | { kind: "vector"; field: string; lane: Value<ElementSize> }
  | { kind: "predicate"; field: string; mode?: Value<"m" | "z">; lane?: Value<Lane> }
  | { kind: "group"; field: string; lane: Value<ElementSize>; count: Value<number>; scale?: Value<number>; style?: "list" | "range" }
  | { kind: "immediate"; value: Value<bigint>; signed?: boolean }
  | { kind: "memory"; value: Value<MemoryOperand> };

function resolve<T>(value: Value<T>, instruction: DecodedInstruction): T {
  return typeof value === "function" ? (value as (instruction: DecodedInstruction) => T)(instruction) : value;
}

export function operandField(instruction: DecodedInstruction, field: string): number {
  const value = instruction.fields?.[field];
  if (value === undefined) {
    throw new OperandDecodeError("invalid", `missing operand field: ${field}`, instruction.encoding?.fileName);
  }
  return value;
}

export function vectorGroup(start: number, count: number, lane: ElementSize, style?: "list" | "range"): VectorGroupOperand {
  return {
    kind: "vector-group",
    registers: Array.from({ length: count }, (_, index) => ({ kind: "vec", index: (start + index) & 31, lane })),
    style: style ?? (count >= 4 && start + count <= 32 ? "range" : "list"),
  };
}

export function gpOperand(index: number, width: 32 | 64 = 64, zeroName: "zr" | "sp" = "zr"): RegisterName {
  return { kind: "reg", index, width, zeroName };
}

export function buildOperandSchema(instruction: DecodedInstruction, rules: readonly OperandRule[]): Operand[] {
  return rules.map((rule): Operand => {
    switch (rule.kind) {
      case "gp":
        return gpOperand(operandField(instruction, rule.field), resolve(rule.width, instruction), rule.zeroName);
      case "scalar":
        return { kind: "simd", index: operandField(instruction, rule.field), scalar: resolve(rule.lane, instruction) };
      case "simd": {
        const index = rule.index === undefined ? operandField(instruction, rule.field) : resolve(rule.index, instruction);
        const lane = resolve(rule.lane, instruction);
        const laneIndex = rule.laneIndex === undefined ? undefined : resolve(rule.laneIndex, instruction);
        if (rule.lanes !== undefined) {
          return { kind: "simd", index, arrangement: { lanes: resolve(rule.lanes, instruction), element: lane }, laneIndex };
        }
        if (laneIndex === undefined) {
          throw new OperandDecodeError("invalid", "SIMD element requires a lane index", instruction.encoding?.fileName);
        }
        return { kind: "simd", index, element: lane, laneIndex } satisfies SimdRegisterOperand;
      }
      case "vector":
        return { kind: "vec", index: operandField(instruction, rule.field), lane: resolve(rule.lane, instruction) };
      case "predicate":
        return {
          kind: "pred", index: operandField(instruction, rule.field),
          mode: rule.mode === undefined ? undefined : resolve(rule.mode, instruction),
          lane: rule.lane === undefined ? undefined : resolve(rule.lane, instruction),
        };
      case "group": {
        const count = resolve(rule.count, instruction);
        const start = operandField(instruction, rule.field) * (rule.scale === undefined ? count : resolve(rule.scale, instruction));
        return vectorGroup(start, count, resolve(rule.lane, instruction), rule.style);
      }
      case "immediate":
        return { kind: "imm", value: resolve(rule.value, instruction), signed: rule.signed };
      case "memory":
        return resolve(rule.value, instruction);
    }
  });
}

const gpSf = (instruction: DecodedInstruction): 32 | 64 => instruction.fields?.sf === 1 ? 64 : 32;
const REGISTERED_SCHEMAS: Record<string, readonly OperandRule[]> = {
  "gp-rd-rn-rm-sf": [
    { kind: "gp", field: "Rd", width: gpSf },
    { kind: "gp", field: "Rn", width: gpSf },
    { kind: "gp", field: "Rm", width: gpSf },
  ],
};

export function buildRegisteredSchema(instruction: DecodedInstruction): Operand[] | undefined {
  const id = instruction.encoding?.operandSchemaId;
  if (!id) return undefined;
  const rules = REGISTERED_SCHEMAS[id];
  if (!rules) {
    throw new OperandDecodeError("unsupported", `unsupported operand schema: ${id}`, instruction.encoding?.fileName);
  }
  return buildOperandSchema(instruction, rules);
}
