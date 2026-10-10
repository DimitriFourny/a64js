import { OperandDecodeError } from "./operand-errors.ts";
import type { DecodedInstruction, Operand } from "./types.ts";

export type OperandFamilyDefinition = {
  id: string;
  files: readonly string[];
  build: (instruction: DecodedInstruction) => Operand[];
};

export type OperandFamilyInfo = Readonly<Pick<OperandFamilyDefinition, "id" | "files">>;

/** Explicit implementation coverage shared by generation and runtime dispatch. */
export class OperandFamilyRegistry {
  private readonly byId = new Map<string, OperandFamilyDefinition>();
  private readonly byFile = new Map<string, string>();

  constructor(definitions: readonly OperandFamilyDefinition[]) {
    for (const definition of definitions) {
      if (!definition.id || definition.files.length === 0) throw new Error("operand families require an id and at least one file");
      if (this.byId.has(definition.id)) throw new Error(`duplicate operand family id: ${definition.id}`);
      for (const file of definition.files) {
        if (this.byFile.has(file)) throw new Error(`duplicate operand family file: ${file}`);
        this.byFile.set(file, definition.id);
      }
      this.byId.set(definition.id, Object.freeze({ ...definition, files: Object.freeze([...definition.files]) }));
    }
  }

  familyIdForFile(fileName: string): string | undefined {
    return this.byFile.get(fileName);
  }

  list(): readonly OperandFamilyInfo[] {
    return Object.freeze([...this.byId.values()].map(({ id, files }) => Object.freeze({ id, files })));
  }

  dispatch(instruction: DecodedInstruction): Operand[] {
    const encoding = instruction.encoding;
    if (!encoding || !instruction.fields) throw new OperandDecodeError("invalid", "operand construction requires encoding and fields", encoding?.fileName);
    const expectedId = this.byFile.get(encoding.fileName);
    const familyId = encoding.operandFamilyId ?? expectedId;
    const definition = familyId === undefined ? undefined : this.byId.get(familyId);
    if (!definition) throw new OperandDecodeError("unsupported", `unsupported operand family: ${familyId ?? encoding.fileName}`, encoding.fileName);
    if (familyId !== expectedId) throw new OperandDecodeError("invalid", `operand family ${familyId} does not handle ${encoding.fileName}`, encoding.fileName);
    return definition.build(instruction);
  }
}
