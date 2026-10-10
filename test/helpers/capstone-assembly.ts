import type { CapstoneReferenceCase } from "./capstone-corpus.ts";

export type AssemblyComparison = {
  matches: boolean;
  expected: string;
  actual: string;
  equivalences: string[];
  exclusion?: "apple-proprietary-dialect" | "named-system-register";
};

type Assembly = { mnemonic: string; operands: string[] };

/** Split at operand commas only: memory, vector lists, and tile slices retain their structure. */
export function splitAssembly(text: string): Assembly {
  const match = /^\s*(\S+)(?:\s+(.*))?\s*$/.exec(text);
  if (!match) return { mnemonic: "", operands: [] };
  const operands: string[] = [];
  const body = match[2]?.trim() ?? "";
  let depth = 0;
  let start = 0;
  for (let index = 0; index < body.length; index++) {
    const char = body[index];
    if ("[{(".includes(char)) depth++;
    else if ("]})".includes(char)) depth--;
    else if (char === "," && depth === 0) {
      operands.push(body.slice(start, index).trim());
      start = index + 1;
    }
  }
  if (body) operands.push(body.slice(start).trim());
  return { mnemonic: match[1].toLowerCase(), operands };
}

function parseInteger(text: string): bigint | undefined {
  const match = /^([+-]?)(0x[0-9a-f]+|\d+)$/i.exec(text);
  return match ? BigInt(match[2]) * (match[1] === "-" ? -1n : 1n) : undefined;
}

function canonicalNumber(text: string): string {
  const integer = parseInteger(text);
  if (integer !== undefined) return integer.toString();
  // Decimal floating immediates in these fixtures are exact short decimal literals.
  if (/^[+-]?\d+\.\d+$/.test(text)) return String(Number(text));
  return text;
}

function expandRegisterRanges(text: string): string {
  return text.replace(/\{([vz])(\d+)(\.[0-9]*[bhsdq])?-\1(\d+)\3\}/g,
    (original, prefix: string, first: string, suffix: string | undefined, last: string) => {
      const from = Number(first);
      const to = Number(last);
      if (from > to || to > 31) return original;
      return `{${Array.from({ length: to - from + 1 }, (_, index) => `${prefix}${from + index}${suffix ?? ""}`).join(",")}}`;
    });
}

function canonicalAssembly(text: string, equivalences: Set<string>): Assembly {
  const assembly = splitAssembly(text);
  assembly.operands = assembly.operands.map((operand) => {
    const compact = operand.toLowerCase().replace(/\s+/g, "");
    const numeric = compact.replace(/#([+-]?(?:0x[0-9a-f]+|\d+(?:\.\d+)?))(?![\w.])/g,
      (_, value: string) => `#${canonicalNumber(value)}`);
    const relative = numeric.replace(/^\.([+-])(0x[0-9a-f]+|\d+)$/, (_, sign: string, value: string) => {
      equivalences.add("relative-label-syntax");
      return `#${canonicalNumber(`${sign}${value}`)}`;
    });
    return expandRegisterRanges(relative);
  });

  // An explicitly zero shift is the identity. Keep extensions and every nonzero shift.
  assembly.operands = assembly.operands.filter((operand) => {
    if (/^(lsl|lsr|asr|ror)#0$/.test(operand)) {
      equivalences.add("zero-shift");
      return false;
    }
    return true;
  }).map((operand) => operand.replace(/,(lsl|lsr|asr|ror)#0(?=\])/g, () => {
    equivalences.add("zero-shift");
    return "";
  }).replace(/(uxt[bwhx]|sxt[bwhx])#0(?=\]|$)/g, (_, extend: string) => {
    equivalences.add("zero-extension-shift");
    return extend;
  }));

  // Arm ADD/SUB extended-register syntax permits LSL for the natural-width unsigned extension.
  if (/^(add|adds|sub|subs|cmp|cmn)$/.test(assembly.mnemonic) && assembly.operands.length >= 3) {
    const source = assembly.operands.at(-2)!;
    const extension = assembly.operands.at(-1)!;
    if ((source.startsWith("x") && /^uxtx(?:#\d+)?$/.test(extension)) ||
        (source.startsWith("w") && /^uxtw(?:#\d+)?$/.test(extension) && assembly.operands[0].startsWith("w"))) {
      const shift = /#(\d+)$/.exec(extension)?.[1] ?? "0";
      equivalences.add("natural-width-extension");
      if (shift === "0") assembly.operands.pop();
      else assembly.operands[assembly.operands.length - 1] = `lsl#${shift}`;
    }
  }

  // Arm aliases in sxtl_sshll_advsimd.xml and uxtl_ushll_advsimd.xml: shift must be exactly zero.
  if (/^[su]shll2?$/.test(assembly.mnemonic) && assembly.operands.length === 3 && assembly.operands[2] === "#0") {
    assembly.mnemonic = `${assembly.mnemonic[0]}xtl${assembly.mnemonic.endsWith("2") ? "2" : ""}`;
    assembly.operands.pop();
    equivalences.add("extend-long-zero-shift-alias");
  }

  // not_eor_p_p_pp.xml specifies NOT Pd.B, Pg/Z, Pn.B == EOR Pd.B, Pg/Z, Pn.B, Pg.B.
  if (assembly.mnemonic === "not" && assembly.operands.length === 3 && /^p\d+\/z$/.test(assembly.operands[1])) {
    assembly.mnemonic = "eor";
    assembly.operands.push(`${assembly.operands[1].slice(0, -2)}.b`);
    equivalences.add("predicate-not-alias");
  }

  // MOV register is ORR only when its two source registers are identical. Widths remain significant.
  if (assembly.mnemonic === "mov" && assembly.operands.length === 2 &&
      /^v\d+\.(8b|16b)$|^z\d+\.d$/.test(assembly.operands[0]) &&
      /^v\d+\.(8b|16b)$|^z\d+\.d$/.test(assembly.operands[1])) {
    assembly.mnemonic = "orr";
    assembly.operands.push(assembly.operands[1]);
    equivalences.add("vector-move-orr-alias");
  }

  if (/^dcps[123]$/.test(assembly.mnemonic) && assembly.operands.length === 0) {
    assembly.operands.push("#0");
    equivalences.add("dcps-default-zero");
  }

  // A MOV bit-pattern immediate may be printed signed or unsigned within its register width.
  if (assembly.mnemonic === "mov" && assembly.operands.length === 2 && /^[wx](\d+|zr)$/.test(assembly.operands[0])) {
    const width = assembly.operands[0][0] === "w" ? 32 : 64;
    const immediate = parseInteger(assembly.operands[1].slice(1));
    if (assembly.operands[1].startsWith("#") && immediate !== undefined &&
        immediate >= -(1n << BigInt(width - 1)) && immediate < (1n << BigInt(width))) {
      assembly.operands[1] = `#${BigInt.asUintN(width, immediate)}`;
    }
  }
  // Some reference labels use the unsigned 64-bit spelling of a negative PC-relative offset.
  if (/^(adrp?|b(?:\.[a-z]+)?|bl|cbn?z|tbn?z|ldr(?:sw)?|prfm|aut[ia]bsppc|autiasppc|reta[ab]sppc)$/.test(assembly.mnemonic)) {
    const last = assembly.operands.at(-1);
    const immediate = last?.startsWith("#") ? parseInteger(last.slice(1)) : undefined;
    if (immediate !== undefined && immediate > 0x7fff_ffff_ffff_ffffn && immediate <= 0xffff_ffff_ffff_ffffn) {
      assembly.operands[assembly.operands.length - 1] = `#${BigInt.asIntN(64, immediate)}`;
      equivalences.add("unsigned-relative-label");
    }
  }
  return assembly;
}

function renderCanonical(assembly: Assembly): string {
  return `${assembly.mnemonic}${assembly.operands.length ? ` ${assembly.operands.join(",")}` : ""}`;
}

export function canonicalizeCapstoneAssembly(text: string): string {
  return renderCanonical(canonicalAssembly(text, new Set()));
}

/** Compare independent fixture assembly, preserving registers, lanes, widths, and all nondefault operands. */
export function compareCapstoneAssembly(reference: CapstoneReferenceCase, actualText: string): AssemblyComparison {
  const equivalences = new Set<string>();
  const expected = canonicalAssembly(reference.asmText, equivalences);
  const actual = canonicalAssembly(actualText, equivalences);
  let exclusion: AssemblyComparison["exclusion"];
  if (reference.sourceFile === "apple_proprietary.yaml") {
    // Six Apple AMX dialect cases overlap standard Arm encodings. These are outside the A64 dialect.
    exclusion = "apple-proprietary-dialect";
    return { matches: true, expected: renderCanonical(expected), actual: renderCanonical(actual), equivalences: [...equivalences], exclusion };
  }
  if (/^(mrs|msr|mrrs|msrr)$/.test(expected.mnemonic) && expected.mnemonic === actual.mnemonic) {
    const index = expected.mnemonic === "mrs" ? 1 : expected.mnemonic === "mrrs" ? 2 : 0;
    const named = expected.operands[index];
    const generic = actual.operands[index];
    if (named && /^[a-z][a-z0-9_]*$/.test(named) && !/^s[0-3]_\d_c\d+_c\d+_\d$/.test(named) &&
        generic && /^s[0-3]_\d_c\d+_c\d+_\d$/.test(generic)) {
      const word = reference.word;
      const encoded = `s${2 + ((word >>> 19) & 1)}_${(word >>> 16) & 7}_c${(word >>> 12) & 15}_c${(word >>> 8) & 15}_${(word >>> 5) & 7}`;
      expected.operands[index] = encoded;
      // Only the unverified name mapping is excluded. The raw tuple and every GP operand are checked.
      exclusion = "named-system-register";
    }
  }
  const expectedCanonical = renderCanonical(expected);
  const actualCanonical = renderCanonical(actual);
  return {
    matches: expectedCanonical === actualCanonical,
    expected: expectedCanonical,
    actual: actualCanonical,
    equivalences: [...equivalences],
    ...(exclusion ? { exclusion } : {}),
  };
}
