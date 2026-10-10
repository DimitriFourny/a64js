/**
 * Reviewed concrete profiles for the Boolean architecture requirements retained by the importer.
 * These are fixture execution contexts, not instruction words or assembly expectations.
 * OR expressions select their first branch (SVE for the SVE/SME alternatives); AND enables all
 * requirements in that branch. Existing explicit atomic features are preserved. The original
 * expressions remain unchanged in the checksummed classification.json import snapshot.
 */
const CONCRETE_PROFILES: Record<string, readonly string[]> = {
  "FEAT_SVE || FEAT_SME": ["FEAT_SVE"],
  "FEAT_SVE2 || FEAT_SME": ["FEAT_SVE2"],
  "FEAT_SME2 || FEAT_SVE2p1": ["FEAT_SME2"],
  "FEAT_SVE2p1 || FEAT_SME2p1": ["FEAT_SVE2p1"],
  "FEAT_SME2 && FEAT_SME_I16I64": ["FEAT_SME2", "FEAT_SME_I16I64"],
  "FEAT_AdvSIMD && FEAT_FP16": ["FEAT_AdvSIMD", "FEAT_FP16"],
  "(FEAT_SVE2 || FEAT_SME2) && FEAT_FP8": ["FEAT_SVE2", "FEAT_FP8"],
  "FEAT_SME2 && FEAT_SME_F64F64": ["FEAT_SME2", "FEAT_SME_F64F64"],
  "FEAT_SME_F16F16 || FEAT_SME_F8F16": ["FEAT_SME_F16F16"],
  "FEAT_SME2 && FEAT_SVE_B16B16": ["FEAT_SME2", "FEAT_SVE_B16B16"],
  "(FEAT_SVE || FEAT_SME) && FEAT_BF16": ["FEAT_SVE", "FEAT_BF16"],
  "FEAT_SME || FEAT_SVE2p1": ["FEAT_SME"],
  "FEAT_FP && FEAT_LRCPC3": ["FEAT_FP", "FEAT_LRCPC3"],
  "FEAT_SME2 && FEAT_FP8": ["FEAT_SME2", "FEAT_FP8"],
  "(FEAT_SVE2 || FEAT_SME2) && FEAT_FAMINMAX": ["FEAT_SVE2", "FEAT_FAMINMAX"],
  "(FEAT_SVE2 && FEAT_FP8FMA) || FEAT_SSVE_FP8FMA": ["FEAT_SVE2", "FEAT_FP8FMA"],
  "FEAT_AdvSIMD && FEAT_LRCPC3": ["FEAT_AdvSIMD", "FEAT_LRCPC3"],
  "FEAT_AdvSIMD && FEAT_FAMINMAX": ["FEAT_AdvSIMD", "FEAT_FAMINMAX"],
  "FEAT_SME2 && FEAT_FAMINMAX": ["FEAT_SME2", "FEAT_FAMINMAX"],
  "(FEAT_SVE2 || FEAT_SME2) && FEAT_LUT": ["FEAT_SVE2", "FEAT_LUT"],
  "FEAT_AdvSIMD && FEAT_LUT": ["FEAT_AdvSIMD", "FEAT_LUT"],
  "(FEAT_SVE2 && FEAT_FP8DOT2) || FEAT_SSVE_FP8DOT2": ["FEAT_SVE2", "FEAT_FP8DOT2"],
  "(FEAT_SVE2 && FEAT_FP8DOT4) || FEAT_SSVE_FP8DOT4": ["FEAT_SVE2", "FEAT_FP8DOT4"],
  "FEAT_SVE && FEAT_CPA": ["FEAT_SVE", "FEAT_CPA"],
  "FEAT_SVE && FEAT_I8MM": ["FEAT_SVE", "FEAT_I8MM"],
  "(FEAT_SVE || FEAT_SME) && FEAT_I8MM": ["FEAT_SVE", "FEAT_I8MM"],
  "FEAT_SVE || FEAT_SSVE_FEXPA": ["FEAT_SVE"],
  "FEAT_SME2p1 && FEAT_SME_LUTv2": ["FEAT_SME2p1", "FEAT_SME_LUTv2"],
  "FEAT_SVE && FEAT_BF16": ["FEAT_SVE", "FEAT_BF16"],
  "FEAT_SVE || FEAT_SME2p2": ["FEAT_SVE"],
};

export function resolveCapstoneFeatures(imported: readonly string[]): string[] {
  const concrete = new Set<string>();
  for (const feature of imported) {
    if (/^FEAT_\w+$/.test(feature)) {
      concrete.add(feature);
      continue;
    }
    const profile = CONCRETE_PROFILES[feature];
    if (!profile) throw new Error(`Unreviewed Capstone feature expression: ${feature}`);
    for (const requirement of profile) concrete.add(requirement);
  }
  return [...concrete];
}
