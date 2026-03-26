import { conditionSuffix, formatOperand, invertConditionCode, resolvePcRelativeOperands } from "./formatters.ts";
import type { DecodedInstruction, FormatOptions } from "./types.ts";

const BITFIELD_FILES = new Set([
  "bfm.xml",
  "bfi_bfm.xml",
  "bfc_bfm.xml",
  "bfxil_bfm.xml",
  "sbfm.xml",
  "asr_sbfm.xml",
  "sbfiz_sbfm.xml",
  "sbfx_sbfm.xml",
  "sxtb_sbfm.xml",
  "sxth_sbfm.xml",
  "sxtw_sbfm.xml",
  "ubfm.xml",
  "lsl_ubfm.xml",
  "lsr_ubfm.xml",
  "ubfiz_ubfm.xml",
  "ubfx_ubfm.xml",
  "uxtb_ubfm.xml",
  "uxth_ubfm.xml",
]);

function formatUnknown(word: number): string {
  return `.inst 0x${(word >>> 0).toString(16).padStart(8, "0")}`;
}

function bitfieldWidth(sf: number | undefined): 32 | 64 {
  return sf === 1 ? 64 : 32;
}

function bitfieldInsertLsb(dataSize: number, immr: number): bigint {
  return BigInt((dataSize - immr) % dataSize);
}

function formatGpRegister(width: 32 | 64, index: number): string {
  return formatOperand({ kind: "reg", width, index, zeroName: "zr" });
}

function formatConditionalSelect(decoded: DecodedInstruction): string | null {
  const fileName = decoded.encoding?.fileName;
  const operands = decoded.operands ?? [];
  const fields = decoded.fields;
  if (!fileName || !fields || operands.length !== 4 || operands[3].kind !== "cond") {
    return null;
  }

  if (!["csel.xml", "cinc_csinc.xml", "cinv_csinv.xml", "cneg_csneg.xml"].includes(fileName)) {
    return null;
  }

  const rd = formatOperand(operands[0]);
  const rn = formatOperand(operands[1]);
  const rm = formatOperand(operands[2]);
  const encodedCond = operands[3].code & 0xf;

  if (fileName === "csel.xml") {
    return `csel ${rd}, ${rn}, ${rm}, ${conditionSuffix(encodedCond)}`;
  }

  const sameSource = fields.Rn === fields.Rm;
  const aliasCond = conditionSuffix(invertConditionCode(encodedCond));

  if (fileName === "cinc_csinc.xml") {
    return sameSource ? `cinc ${rd}, ${rn}, ${aliasCond}` : `csinc ${rd}, ${rn}, ${rm}, ${conditionSuffix(encodedCond)}`;
  }

  if (fileName === "cinv_csinv.xml") {
    return sameSource ? `cinv ${rd}, ${rn}, ${aliasCond}` : `csinv ${rd}, ${rn}, ${rm}, ${conditionSuffix(encodedCond)}`;
  }

  return sameSource ? `cneg ${rd}, ${rn}, ${aliasCond}` : `csneg ${rd}, ${rn}, ${rm}, ${conditionSuffix(encodedCond)}`;
}

function formatMultiplyAlias(decoded: DecodedInstruction): string | null {
  const fileName = decoded.encoding?.fileName;
  const operands = decoded.operands ?? [];

  if (fileName !== "mul_madd.xml" || operands.length !== 3) {
    return null;
  }

  return `mul ${operands.map((operand) => formatOperand(operand)).join(", ")}`;
}

function formatBarrierInstruction(decoded: DecodedInstruction): string | null {
  const fileName = decoded.encoding?.fileName;
  const operands = decoded.operands ?? [];
  const fields = decoded.fields;

  if (!fileName || !fields || !["dmb.xml", "dsb.xml"].includes(fileName) || operands.length !== 1 || operands[0].kind !== "text") {
    return null;
  }

  if (fileName === "dsb.xml" && (fields.CRm ?? 0) === 12) {
    return "dfb";
  }

  return `${decoded.mnemonic!.toLowerCase()} ${operands[0].text}`;
}

function formatSystemInstructionAlias(decoded: DecodedInstruction): string | null {
  const fileName = decoded.encoding?.fileName;
  const operands = decoded.operands ?? [];

  if (!fileName || !["at_sys.xml", "dc_sys.xml", "tlbi_sys.xml"].includes(fileName) || operands.length === 0) {
    return null;
  }

  if (fileName === "at_sys.xml") {
    if (operands.length !== 2 || operands[0].kind !== "text") {
      return null;
    }
    return `at ${operands[0].text}, ${formatOperand(operands[1])}`;
  }

  if (fileName === "dc_sys.xml") {
    if (operands[0].kind === "text" && (operands[0].text === "dc" || operands[0].text === "ic") && operands[1]?.kind === "text") {
      return operands.length === 3
        ? `${operands[0].text} ${operands[1].text}, ${formatOperand(operands[2])}`
        : `${operands[0].text} ${operands[1].text}`;
    }
    return `sys ${operands.map((operand) => formatOperand(operand)).join(", ")}`;
  }

  if (operands[0].kind !== "text") {
    return null;
  }

  if (operands[0].text.startsWith("#")) {
    return `sys ${operands.map((operand) => formatOperand(operand)).join(", ")}`;
  }

  return operands.length === 2 ? `tlbi ${operands[0].text}, ${formatOperand(operands[1])}` : `tlbi ${operands[0].text}`;
}

function formatBitfieldAlias(decoded: DecodedInstruction): string | null {
  const fileName = decoded.encoding?.fileName;
  const operands = decoded.operands ?? [];
  const fields = decoded.fields;
  if (!fileName || !fields || operands.length < 4) {
    return null;
  }

  if (!BITFIELD_FILES.has(fileName)) {
    return null;
  }

  const dataSize = bitfieldWidth(fields.sf);
  const maxImm = dataSize - 1;
  const immr = fields.immr ?? 0;
  const imms = fields.imms ?? 0;
  const rd = formatOperand(operands[0]);
  const rn = formatOperand(operands[1]);
  const wn = formatGpRegister(32, fields.Rn ?? 0);
  const extractWidth = BigInt(imms - immr + 1);
  const insertLsb = bitfieldInsertLsb(dataSize, immr);
  const insertWidth = BigInt(imms + 1);

  if (fileName.endsWith("_bfm.xml") || fileName === "bfm.xml") {
    if (imms < immr) {
      return `bfi ${rd}, ${rn}, #${insertLsb.toString()}, #${insertWidth.toString()}`;
    }
    return `bfxil ${rd}, ${rn}, #${immr}, #${extractWidth.toString()}`;
  }

  if (fileName.endsWith("_sbfm.xml") || fileName === "sbfm.xml") {
    if (immr === 0 && imms === 7) {
      return `sxtb ${rd}, ${wn}`;
    }
    if (immr === 0 && imms === 15) {
      return `sxth ${rd}, ${wn}`;
    }
    if (dataSize === 64 && immr === 0 && imms === 31) {
      return `sxtw ${rd}, ${wn}`;
    }
    if (imms === maxImm) {
      return `asr ${rd}, ${rn}, #${immr}`;
    }
    if (imms < immr) {
      return `sbfiz ${rd}, ${rn}, #${insertLsb.toString()}, #${insertWidth.toString()}`;
    }
    return `sbfx ${rd}, ${rn}, #${immr}, #${extractWidth.toString()}`;
  }

  if (fileName.endsWith("_ubfm.xml") || fileName === "ubfm.xml") {
    if (dataSize === 32 && immr === 0 && imms === 7) {
      return `uxtb ${rd}, ${wn}`;
    }
    if (dataSize === 32 && immr === 0 && imms === 15) {
      return `uxth ${rd}, ${wn}`;
    }
    if (imms === maxImm) {
      return `lsr ${rd}, ${rn}, #${immr}`;
    }
    if (imms < immr) {
      if (imms + 1 === immr) {
        return `lsl ${rd}, ${rn}, #${insertLsb.toString()}`;
      }
      return `ubfiz ${rd}, ${rn}, #${insertLsb.toString()}, #${insertWidth.toString()}`;
    }
    return `ubfx ${rd}, ${rn}, #${immr}, #${extractWidth.toString()}`;
  }

  return null;
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

  const multiplyAlias = formatMultiplyAlias({ ...decoded, operands });
  if (multiplyAlias) {
    return multiplyAlias;
  }

  const barrierInstruction = formatBarrierInstruction({ ...decoded, operands });
  if (barrierInstruction) {
    return barrierInstruction;
  }

  const systemInstructionAlias = formatSystemInstructionAlias({ ...decoded, operands });
  if (systemInstructionAlias) {
    return systemInstructionAlias;
  }

  const bitfieldAlias = formatBitfieldAlias({ ...decoded, operands });
  if (bitfieldAlias) {
    return bitfieldAlias;
  }

  const conditionalSelect = formatConditionalSelect({ ...decoded, operands });
  if (conditionalSelect) {
    return conditionalSelect;
  }

  if (decoded.encoding?.fileName === "b_cond.xml" && operands.length === 2 && operands[0].kind === "cond") {
    return `b.${operands[0].suffix} ${formatOperand(operands[1])}`;
  }

  const mnemonic =
    decoded.encoding && ["fcpy_z_p_i.xml", "fdup_z_i.xml"].includes(decoded.encoding.fileName)
      ? "fmov"
      : decoded.encoding &&
          ["dup_z_i.xml", "dup_z_zi.xml", "cpy_z_p_r.xml", "cpy_z_o_i.xml", "cpy_z_p_i.xml", "cpy_z_p_v.xml"].includes(
            decoded.encoding.fileName,
          )
        ? "mov"
      : decoded.encoding && decoded.encoding.fileName === "cmn_adds_addsub_ext.xml"
        ? "cmn"
      : decoded.encoding && decoded.encoding.fileName === "cmp_subs_addsub_ext.xml"
        ? "cmp"
      : decoded.encoding &&
          [
            "mov_mova_z_p_rza.xml",
            "mov_mova_za_p_rz.xml",
            "mov_mova_mz2_za.xml",
            "mov_mova_za2_z.xml",
            "mov_mova_za4_z.xml",
            "mov_mova_mz4_za.xml",
            "mov_mova_mz_za2.xml",
            "mov_mova_mz_za4.xml",
            "mov_mova_za_mz2.xml",
            "mov_mova_za_mz4.xml",
          ].includes(decoded.encoding.fileName)
        ? "mov"
      : decoded.mnemonic.toLowerCase();

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

  return operandText.length === 0 ? mnemonic : `${mnemonic} ${operandText.join(", ")}`;
}
