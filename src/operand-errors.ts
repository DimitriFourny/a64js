/** An encoding matched, but its operand construction could not complete. */
export class OperandDecodeError extends Error {
  readonly reason: "unsupported" | "invalid";
  readonly fileName?: string;

  constructor(reason: "unsupported" | "invalid", message: string, fileName?: string) {
    super(message);
    this.name = "OperandDecodeError";
    this.reason = reason;
    this.fileName = fileName;
  }
}
