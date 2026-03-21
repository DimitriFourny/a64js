import { formatOperand, resolvePcRelativeOperands } from "./formatters.ts";
import type { DecodedInstruction, FormatOptions } from "./types.ts";

function formatUnknown(word: number): string {
  return `.inst 0x${(word >>> 0).toString(16).padStart(8, "0")}`;
}

export function format(decoded: DecodedInstruction, options: FormatOptions = {}): string {
  if (decoded.status !== "ok" || !decoded.mnemonic) {
    if (options.onUnknown === "error") {
      throw new Error(decoded.errors?.join("; ") ?? "unknown instruction");
    }
    return formatUnknown(decoded.word);
  }

  const pc = options.pc === undefined ? undefined : BigInt(options.pc);
  const operands = resolvePcRelativeOperands(decoded.operands ?? [], pc);

  if (decoded.encoding?.fileName === "b_cond.xml" && operands.length === 2 && operands[0].kind === "cond") {
    return `b.${operands[0].suffix} ${formatOperand(operands[1])}`;
  }

  const operandText = operands.map((operand, index) => {
    if (
      decoded.encoding &&
      ["add_addsub_shift.xml", "adds_addsub_shift.xml", "sub_addsub_shift.xml", "subs_addsub_shift.xml"].includes(
        decoded.encoding.fileName,
      ) &&
      index === 3 &&
      operand.kind === "imm"
    ) {
      const hint = (operand as any).displayHint ?? "lsl";
      return `${hint} #${operand.value.toString()}`;
    }
    if (
      decoded.encoding &&
      ["movz.xml", "movn.xml", "movk.xml"].includes(decoded.encoding.fileName) &&
      index === 1 &&
      operand.kind === "imm" &&
      operand.shift &&
      operand.shift !== 0
    ) {
      return `#0x${operand.value.toString(16)}, lsl #${operand.shift}`;
    }
    return formatOperand(operand);
  });

  return operandText.length === 0
    ? decoded.mnemonic.toLowerCase()
    : `${decoded.mnemonic.toLowerCase()} ${operandText.join(", ")}`;
}
