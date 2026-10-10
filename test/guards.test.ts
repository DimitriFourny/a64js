import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { Guard, GuardCheck } from "../src/types.ts";
import { parseGuardAlternatives, UnsupportedGuardError } from "../tools/guards.ts";
import { parseDecodeGuards } from "../tools/decode-guards.ts";
import { parseEncodingFile } from "../tools/encodings.ts";
import { XML_ROOT } from "../tools/supported-files.ts";
import { firstChild, parseXml, rawTextContent } from "../tools/xml.ts";

const widths = new Map([["sf", 1], ["N", 1], ["immr", 6], ["imms", 6], ["size", 2], ["sh", 1], ["opcode", 3], ["rmode", 2]]);

function checkMatches(check: GuardCheck, fields: Record<string, number>, enabled = new Set<string>()): boolean {
  if (check.kind === "feature") return enabled.has(check.feature) === check.implemented;
  if (check.kind === "eq_field" || check.kind === "ne_field") {
    const equal = fields[check.field] === fields[check.otherField];
    return check.kind === "eq_field" ? equal : !equal;
  }
  if (check.kind === "eq_concat" || check.kind === "ne_concat") {
    const value = check.parts.reduce((value, part) => value * 2 ** (part.msb - part.lsb + 1) +
      Math.floor(fields[part.field] / 2 ** part.lsb) % 2 ** (part.msb - part.lsb + 1), 0);
    return check.kind === "eq_concat" ? value === check.value : value !== check.value;
  }
  const value = ((fields[check.field] & check.mask) >>> check.lsb);
  return check.kind === "eq" ? value === check.value : value !== check.value;
}

const matches = (alternatives: GuardCheck[][], fields: Record<string, number>, enabled?: Set<string>) =>
  alternatives.some((checks) => checks.every((check) => checkMatches(check, fields, enabled)));
const matchingGuard = (guards: Guard[], fields: Record<string, number>, enabled?: Set<string>) =>
  guards.find((guard) => guard.all.every((check) => checkMatches(check, fields, enabled)));

// Exhaustively exercises each term of the UBFM condition that the old regex
// truncated at the first disjunction inside the parentheses.
test("UBFM rejects every reserved 32-bit N, immr, and imms combination", async () => {
  const [encoding] = await parseEncodingFile(XML_ROOT, "ubfm.xml");
  for (const sf of [0, 1]) for (const N of [0, 1]) for (const immr of [0, 31, 32, 63]) for (const imms of [0, 31, 32, 63]) {
    const invalid = sf === 1 ? N !== 1 : N !== 0 || immr >= 32 || imms >= 32;
    assert.equal(Boolean(matchingGuard(encoding.guards, { sf, N, immr, imms })), invalid, JSON.stringify({ sf, N, immr, imms }));
  }
});

test("Boolean precedence and nested negation preserve complete truth tables", () => {
  const ungrouped = parseGuardAlternatives("sf == '0' || N == '1' && immr[5] == '1'", widths);
  const grouped = parseGuardAlternatives("!(sf == '0' || (N == '1' && immr[5] == '1'))", widths);
  for (const sf of [0, 1]) for (const N of [0, 1]) for (const immr of [0, 32]) {
    const expected = sf === 0 || N === 1 && immr === 32;
    assert.equal(matches(ungrouped, { sf, N, immr }), expected);
    assert.equal(matches(grouped, { sf, N, immr }), !expected);
  }
});

test("wildcard membership and its negation mask only specified bits", () => {
  const include = parseGuardAlternatives("size IN {'0x'}", widths);
  const exclude = parseGuardAlternatives("!(size IN {'0x'})", widths);
  for (let size = 0; size < 4; size += 1) {
    assert.equal(matches(include, { size }), size < 2);
    assert.equal(matches(exclude, { size }), size >= 2);
  }
});

test("slices and concatenations preserve positions, wildcard bits, and inequality", () => {
  const exact = parseGuardAlternatives("opcode[2:1]::rmode == '11 01'", widths);
  const wildcard = parseGuardAlternatives("opcode[2:1]::rmode != '1x 0x'", widths);
  for (let opcode = 0; opcode < 8; opcode += 1) for (let rmode = 0; rmode < 4; rmode += 1) {
    assert.equal(matches(exact, { opcode, rmode }), (opcode >> 1) === 3 && rmode === 1);
    assert.equal(matches(wildcard, { opcode, rmode }), !(opcode >= 4 && rmode < 2));
  }
});

test("unsigned 32-bit slices and numeric literals keep their value", () => {
  const fields = new Map([["word", 32]]);
  for (const literal of ["0x80000000", "2147483648", "'10000000000000000000000000000000'"]) {
    assert.equal(matches(parseGuardAlternatives(`word == ${literal}`, fields), { word: 0x80000000 }), true);
    assert.equal(matches(parseGuardAlternatives(`word == ${literal}`, fields), { word: 0 }), false);
  }
});

test("feature conditions retain OR and AND independently of field conditions", () => {
  const guards = parseDecodeGuards("if sf == '0' && (!IsFeatureImplemented(FEAT_A) || !IsFeatureImplemented(FEAT_B)) then EndOfDecode(Decode_NOP); end;", widths);
  for (const sf of [0, 1]) for (const a of [false, true]) for (const b of [false, true]) {
    const enabled = new Set([...(a ? ["FEAT_A"] : []), ...(b ? ["FEAT_B"] : [])]);
    assert.equal(Boolean(matchingGuard(guards, { sf }, enabled)), sf === 0 && (!a || !b));
    if (sf === 0 && (!a || !b)) assert.equal(matchingGuard(guards, { sf }, enabled)?.outcome, "nop");
  }
});

test("audited FP8 helpers accept either full SVE support or streaming support", () => {
  const condition = parseGuardAlternatives("!HaveSVE2FP8DOT2()", widths);
  for (const sve of [false, true]) for (const dot of [false, true]) for (const stream of [false, true]) {
    const enabled = new Set([...(sve ? ["FEAT_SVE2"] : []), ...(dot ? ["FEAT_FP8DOT2"] : []), ...(stream ? ["FEAT_SSVE_FP8DOT2"] : [])]);
    assert.equal(matches(condition, {}, enabled), !((sve && dot) || stream));
  }
});

test("decode paths retain enclosing case, if, elsif, and else conditions", () => {
  const guards = parseDecodeGuards(`case size of
    when '00' => if sf == '0' then EndOfDecode(Decode_UNDEF); elsif N == '1' then EndOfDecode(Decode_NOP); end;
    when '01' => if N == '0' then let x : integer = 1; else EndOfDecode(Decode_UNDEF); end;
    otherwise => EndOfDecode(Decode_NOP);
  end;`, widths);
  for (let size = 0; size < 4; size += 1) for (const sf of [0, 1]) for (const N of [0, 1]) {
    const expected = size === 0 ? (sf === 0 ? "undefined" : N === 1 ? "nop" : undefined) : size === 1 ? (N === 1 ? "undefined" : undefined) : "nop";
    assert.equal(matchingGuard(guards, { size, sf, N })?.outcome, expected);
  }
});

test("guards after immutable UInt and concat declarations use raw fields", () => {
  const guards = parseDecodeGuards("let n : integer = UInt(N); let bits : bits(3) = size::sh; if n != 0 || bits == '001' then EndOfDecode(Decode_UNDEF); end;", widths);
  assert.equal(Boolean(matchingGuard(guards, { N: 0, size: 0, sh: 1 })), true);
  assert.equal(Boolean(matchingGuard(guards, { N: 0, size: 0, sh: 0 })), false);
  assert.equal(Boolean(matchingGuard(guards, { N: 1, size: 3, sh: 0 })), true);
});

test("unconditional undefined decode is represented by an empty conjunction", async () => {
  const [encoding] = await parseEncodingFile(XML_ROOT, "udf_perm_undef.xml");
  assert.deepEqual(encoding.guards, [{ all: [], outcome: "undefined" }]);
});

test("partial, malformed, unknown, and out-of-range expressions fail closed", () => {
  for (const expression of [
    "sf == '0' trailing", "sf == '0' ||", "(sf == '0'", "sf == '0')", "sf == '0' + N == '1'",
    "unknown == '0'", "sf[1] == '0'", "immr[2:3] == '00'", "sf == '00'", "sf == 2", "sf IN {}", "sf == N extra", "UnknownFeature()",
  ]) assert.throws(() => parseGuardAlternatives(expression, widths), UnsupportedGuardError, expression);
});

test("unsupported predicates require exact, explained overrides and emit diagnostics", () => {
  const source = "if UnmodeledPredicate() then EndOfDecode(Decode_UNDEF); end;";
  assert.throws(() => parseDecodeGuards(source, widths), UnsupportedGuardError);
  const diagnostics: unknown[] = [];
  assert.deepEqual(parseDecodeGuards(source, widths, {
    unsupportedExpressions: new Map([["UnmodeledPredicate()", "Fixture has no static machine state"]]),
    onDiagnostic: (diagnostic) => diagnostics.push(diagnostic),
  }), []);
  assert.deepEqual(diagnostics, [{ expression: "UnmodeledPredicate()", reason: "Fixture has no static machine state" }]);
  const implementationDiagnostics: unknown[] = [];
  const guards = parseDecodeGuards("if !IsFeatureImplemented(FEAT_A) || !Halted() then EndOfDecode(Decode_UNDEF); end;", widths, { onDiagnostic: (diagnostic) => implementationDiagnostics.push(diagnostic) });
  assert.equal(Boolean(matchingGuard(guards, {})), true);
  assert.equal(Boolean(matchingGuard(guards, {}, new Set(["FEAT_A"]))), false);
  assert.equal(implementationDiagnostics.length, 1);
});

test("aliases inherit parent features, validity, and canonical field shapes", async () => {
  const directory = await mkdtemp(join(tmpdir(), "a64-guard-alias-"));
  try {
    await writeFile(join(directory, "parent.xml"), `<instructionsection id="PARENT"><classes><iclass name="base"><arch_variants><arch_variant feature="FEAT_PARENT"/></arch_variants><regdiagram><box name="foo" hibit="0"><c/></box></regdiagram><encoding name="PARENT_ENCODING"/><ps_section><ps><pstext>if foo == '1' then EndOfDecode(Decode_UNDEF); end;</pstext></ps></ps_section></iclass></classes></instructionsection>`);
    await writeFile(join(directory, "alias.xml"), `<instructionsection id="ALIAS"><aliasto refiform="parent.xml"/><classes><iclass name="alias"><arch_variants><arch_variant feature="FEAT_ALIAS"/></arch_variants><regdiagram><box name="foo" hibit="2" width="2"><c colspan="2"/></box></regdiagram><encoding name="ALIAS_ENCODING"><equivalent_to><asmtemplate><a href="parent.xml#PARENT_ENCODING">PARENT</a></asmtemplate></equivalent_to></encoding></iclass></classes></instructionsection>`);
    const [alias] = await parseEncodingFile(directory, "alias.xml");
    assert.equal(alias.canonicalEncodingId, "PARENT_ENCODING");
    assert.equal(alias.canonicalFileName, "parent.xml");
    assert.deepEqual(alias.features, ["FEAT_ALIAS", "FEAT_PARENT"]);
    assert.deepEqual(alias.fields, [{ name: "foo", lsb: 1, width: 2 }, { name: "__canonical_foo", lsb: 0, width: 1 }]);
    assert.equal(Boolean(matchingGuard(alias.guards, { foo: 0, __canonical_foo: 1 })), true);
    assert.equal(Boolean(matchingGuard(alias.guards, { foo: 1, __canonical_foo: 0 })), false);
  } finally { await rm(directory, { recursive: true, force: true }); }
  const [lsl] = await parseEncodingFile(XML_ROOT, "lsl_ubfm.xml");
  assert.equal(lsl.canonicalEncodingId, "UBFM_32M_bitfield");
  assert.equal(Boolean(matchingGuard(lsl.guards, { sf: 0, N: 0, immr: 32, imms: 0 })), true);
});

test("XML pseudocode preserves cross-reference text, whitespace, and entities", () => {
  const xml = parseXml(`<root><pstext>if !<a>IsFeatureImplemented</a>(<a>FEAT_A</a>) &amp;&amp; sf == &#39;0&#39; then\n EndOfDecode(<a>Decode_NOP</a>); end;</pstext></root>`);
  const source = rawTextContent(firstChild(xml, "pstext"));
  assert.equal(source, "if !IsFeatureImplemented(FEAT_A) && sf == '0' then\n EndOfDecode(Decode_NOP); end;");
  assert.equal(parseDecodeGuards(source, widths)[0].outcome, "nop");
});

test("malformed XML terminates with a diagnostic instead of accepting a partial document", () => {
  for (const source of ["<root", "<root>", "<root></other>", "<root><!--", "<root><?", "<root/><other/>", "text<root/>"]) {
    assert.throws(() => parseXml(source), Error, source);
  }
  assert.equal(parseXml('<root description="a > b"/>').attrs.description, "a > b");
});
