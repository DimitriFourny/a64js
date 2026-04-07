# Instruction Support TODO

This file is a work queue plus backlog snapshot, not a scratchpad. Each Codex run should take one concrete work item from `Ready`, finish it end-to-end, then update this file before stopping.

## Workflow

### Execution rule

Pick exactly one work item from `Ready`, unless a task is already listed under `In Progress`. Do not treat `Backlog Statistics` as a claimable queue.

### What a work item must contain

- one coherent instruction family or cleanup batch
- enough scope to justify a full implementation pass
- concrete XML and/or source-YAML anchors
- a short `Done when` checklist

### What to do during a Codex run

1. Claim one work item by moving it to `In Progress`.
2. Implement decode/disasm support for the whole batch, not a single encoding unless the item explicitly says so.
3. Update `tools/supported-files.ts` only when the family works end-to-end.
4. Run the relevant generation and test commands.
5. Move the item to `Done` with a short result note, or to `Blocked` with the reason.

### Refresh commands

```sh
bun tools/generate.ts
bun test
```

## Formatter Strategy

Goal: stop scaling instruction support by adding more one-off `formatters.ts` cases for every XML family. The generated decode tables can stay large; the handwritten operand/rendering path should become smaller and more systematic.

Constraints:

- keep Arm XML-derived decode data as the source of truth
- keep Capstone fixtures as a progress/regression corpus only
- do not add Capstone-specific formatting overlays unless the project explicitly changes output compatibility goals
- do not depend on `<asmtemplate>` parsing for this migration
- prefer compact local operand/action schemas keyed by field shape, encoding id patterns, class names, feature/docvar-like metadata already collected, and explicit XML filename groups when needed

Target architecture:

1. Add a small operand/action schema layer that can express common operand construction patterns:
   - register operands: GP, SIMD/FP, SVE vector, predicate, ZA/tile text helpers
   - immediates: unsigned, signed, shifted, concatenated, scaled, PC-relative
   - memory forms: base, base+imm, pre/post-index, register offset, SVE/SME vector-length scaled forms
   - formatting actions: optional operands, lane suffixes, predicate modes, tuple/group text, alias mnemonic selection hooks
2. Generate or precompute a compact dispatch table from schemas to encodings during `bun tools/generate.ts`.
   - ordinary encodings should get a `formatFamily`/`operandAction` id rather than a new handwritten `switch` case
   - ambiguous or truly special encodings can remain on bespoke formatter functions
3. Keep the existing handwritten formatter as the fallback while migrating.
   - convert one family at a time
   - require `bun tools/generate.ts` and `bun test` after each conversion
   - do not promote more XML files in the same patch unless the schema work directly enables them
4. Use reports to track formatter coverage separately from instruction support.
   - supported XML file has no schema or bespoke formatter
   - schema candidate matches multiple incompatible formatter shapes
   - unsupported capstone cases match an already-known schema but are not yet promoted
5. End state:
   - generic families are handled by schemas
   - `buildOperands()` dispatches through generated schema ids first
   - the filename switch only contains genuinely special cases
   - adding a large remaining family usually means adding schema rows, not new formatter logic

## In Progress

## Ready

- Operand/action schema foundation
  - Anchors: `src/formatters.ts`, `src/types.ts`, `tools/generate.ts`, `tools/encodings.ts`
  - Focus: introduce the schema mechanism without changing supported instruction behavior or promoting new XML files.
  - Plan:
    - define schema/action types for the smallest useful set of operand builders
    - wire generated encodings to an optional schema/action id
    - route `buildOperands()` through schema dispatch before falling back to the existing bespoke switch
    - port one low-risk family already covered by tests, such as a simple GP three-register or add/sub immediate family, as the proof of concept
  - Done when:
    - existing tests pass with no supported/unsupported count regression
    - the migrated family no longer depends on its old bespoke `buildOperands()` switch case
    - adding a second similar family would only require schema table entries, not a new formatter function

- SVE loads with replicated/scalarizing forms batch
  - Anchors: `SVE/ld1rb.s.yaml`, `SVE/ld1rh.s.yaml`, `SVE/ld1rw.s.yaml`, `SVE/ld1rsb.s.yaml`, `SVE/ld1rsh.s.yaml`, `SVE/ld1rsw.s.yaml`, `SVE/ld1rqb.s.yaml`, `SVE/ld1rqh.s.yaml`, `SVE/ld1rqw.s.yaml`, `SVE/ld1rqd.s.yaml`
  - Focus: land the replicate-load family as one task because the memory operand and replication suffix handling are tightly related.
  - Done when:
    - all replicate/scalarizing load forms print consistent addressing syntax
    - signed-extension and element-width differences are covered by tests
    - the family can be promoted without leaving partial load variants behind

- SVE first-fault and non-fault load batch
  - Anchors: `SVE/ldff1b.s.yaml`, `SVE/ldff1h.s.yaml`, `SVE/ldff1w.s.yaml`, `SVE/ldff1d.s.yaml`, `SVE/ldnf1b.s.yaml`, `SVE/ldnf1h.s.yaml`, `SVE/ldnf1w.s.yaml`, `SVE/ldnf1d.s.yaml`
  - Focus: implement the fault-tolerant load families together so their addressing and mnemonic prefixes are handled in one place.
  - Done when:
    - first-fault and non-fault loads both disassemble correctly across widths
    - predicate and addressing operand order is stable across the family
    - fixtures for the whole batch are supported before promotion

- SVE structured load/store batch
  - Anchors: `SVE/ld2d.s.yaml`, `SVE/ld2h.s.yaml`, `SVE/ld3d.s.yaml`, `SVE/ld3h.s.yaml`, `SVE/ld4h.s.yaml`, `SVE/ld4w.s.yaml`, `SVE/st1b.s.yaml`, `SVE/st1h.s.yaml`, `SVE/st1d.s.yaml`, `SVE/st3h.s.yaml`, `SVE/st3w.s.yaml`, `SVE/stnt1b.s.yaml`, `SVE/stnt1h.s.yaml`, `SVE/stnt1w.s.yaml`, `SVE/stnt1d.s.yaml`
  - Focus: cover the multi-structure and streaming store family together instead of promoting isolated addressing forms.
  - Done when:
    - tuple-register formatting for loads/stores is correct across all listed source YAML files
    - non-temporal store variants share the same addressing path
    - the whole structured memory batch is promoted in one pass

- SVE reduction and horizontal FP/int batch
  - Anchors: `SVE/orv.s.yaml`, `SVE/uaddv.s.yaml`, `SVE/smaxv.s.yaml`, `SVE/sminv.s.yaml`, `SVE/fmaxnmv.s.yaml`, `SVE/fminnmv.s.yaml`
  - Focus: implement horizontal reductions together because they share scalar-result formatting and predicated reduction syntax.
  - Done when:
    - all scalar-result reductions print the correct destination register class
    - predicate-limited reductions are covered by dedicated tests
    - the reduction family lands as one support promotion

- SVE matrix and dot-product batch
  - Anchors: `SVE/bfdot.s.yaml`, `SVE/udot.s.yaml`, `SVE/bfmmla.s.yaml`, `SVE/matrix-multiply-fp64.s.yaml`
  - Focus: cover the SVE matrix/dot-product family together so lane-group operand formatting is implemented once.
  - Done when:
    - dot-product and matrix-multiply operands render correctly for all tuple sizes
    - BF16 and FP64 special cases are both tested
    - the batch is promoted without leaving adjacent matmul variants unsupported

- SME2p1 floating arithmetic batch
  - Anchors: `SME2p1/fadd.s.yaml`, `SME2p1/fsub.s.yaml`, `SME2p1/fmla.s.yaml`, `SME2p1/fmls.s.yaml`, `SME2p1/fmopa.s.yaml`, `SME2p1/fmops.s.yaml`
  - Focus: land the SME2p1 floating ZA-array arithmetic family together because the ZA operand syntax is the main implementation cost.
  - Done when:
    - ZA tile-array operands print correctly across add/sub/FMA/FMOPA forms
    - accumulation and pairwise tile-selection syntax is covered by tests
    - the whole SME2p1 FP arithmetic cluster is promoted together

- SME2p1 convert-and-move batch
  - Anchors: `SME2p1/fcvt.s.yaml`, `SME2p1/fcvtl.s.yaml`, `SME2p1/movaz.s.yaml`, `SME2p1/zero.s.yaml`
  - Focus: implement the SME2p1 conversion and ZA move/zero family so tile movement and type-conversion syntax lands coherently.
  - Done when:
    - conversion widths and ZA destination forms disassemble correctly
    - move/zero forms share tile operand formatting helpers
    - this family is promoted as one SME2p1 support batch

- SME2p1 LUTI batch
  - Anchors: `SME2p1/luti2.s.yaml`, `SME2p1/luti4.s.yaml`
  - Focus: finish the SME2p1 LUTI family together because the indexed lookup operand syntax is specialized and not worth splitting into tiny tasks.
  - Done when:
    - both `LUTI2` and `LUTI4` source files decode and disassemble correctly
    - indexed ZA/lane operand formatting is covered by tests
    - the family is promoted only after generation and tests pass

## Backlog Statistics

Priority rule:

- prefer the most-used and most broadly expected instruction families first
- use the current capstone snapshot volume as the default tie-breaker
- only take niche SME/SVE/AdvSIMD work ahead of scalar/core A64 work when it clearly removes a larger unsupported batch

Backlog target:

- the grouped counts below are the remaining roadmap to drive the unsupported capstone count to zero
- each line names a source-YAML file that still accounts for unsupported capstone cases
- these are prioritization statistics, not claimable work items
- when a family spills into related alias XMLs, promote the whole family together before touching `tools/supported-files.ts`

- `neon-simd-copy.s.yaml`: `41`
- `neon-simd-misc.s.yaml`: `39`
- `neon-2velem.s.yaml`: `36`
- `neon-aba-abd.s.yaml`: `28`
- `neon-saturating-add-sub.s.yaml`: `28`
- `neon-add-sub-instructions.s.yaml`: `24`
- `neon-halving-add-sub.s.yaml`: `24`
- `neon-mul-div-instructions.s.yaml`: `23`
- `neon-3vdiff.s.yaml`: `22`
- `neon-mla-mls-instructions.s.yaml`: `22`
- `neon-scalar-dup.s.yaml`: `22`
- `neon-shift.s.yaml`: `21`
- `neon-facge-facgt.s.yaml`: `20`
- `armv8.6a-simd-matmul.s.yaml`: `18`
- `neon-scalar-by-elem-saturating-mul.s.yaml`: `17`
- `neon-scalar-saturating-add-sub.s.yaml`: `16`
- `neon-scalar-recip.s.yaml`: `15`
- `neon-bitwise-instructions.s.yaml`: `14`
- `neon-crypto.s.yaml`: `14`
- `neon-rounding-shift.s.yaml`: `14`
- `neon-saturating-rounding-shift.s.yaml`: `14`
- `neon-saturating-shift.s.yaml`: `14`
- `neon-scalar-mul.s.yaml`: `13`
- `armv9.5a-cpa.s.yaml`: `12`
- `neon-add-pairwise.s.yaml`: `12`
- `neon-rounding-halving-add.s.yaml`: `12`
- `neon-shift-left-long.s.yaml`: `12`
- `armv9.4a-gcs.s.yaml`: `11`
- `armv8.5a-mte.s.yaml`: `10`
- `neon-frsqrt-frecp.s.yaml`: `10`
- `arm64-verbose-vector-case.s.yaml`: `8`
- `armv9.4a-chk.s.yaml`: `8`
- `neon-scalar-saturating-rounding-shift.s.yaml`: `8`
- `neon-scalar-saturating-shift.s.yaml`: `8`
- `neon-compare-instructions.s.yaml`: `7`
- `armv8.5a-predres.s.yaml`: `6`
- `armv8.9a-specres2.s.yaml`: `6`
- `armv8r-unsupported-inst.s.yaml`: `6`
- `neon-scalar-fp-compare.s.yaml`: `6`
- `neon-sxtl.s.yaml`: `6`
- `neon-uxtl.s.yaml`: `6`
- `ras-extension.s.yaml`: `6`
- `armv8.9a-debug-pmu.s.yaml`: `5`
- `neon-scalar-reduce-pairwise.s.yaml`: `5`
- `armv8.7a-wfxt.s.yaml`: `4`
- `apple_proprietary.s.yaml`: `3`
- `case-insen-reg-names.s.yaml`: `3`
- `neon-scalar-abs.s.yaml`: `3`
- `udf.s.yaml`: `3`
- `armv8.3a-js.s.yaml`: `2`
- `armv8.4a-trace.s.yaml`: `2`
- `neon-extract.s.yaml`: `2`
- `neon-scalar-add-sub.s.yaml`: `2`
- `neon-scalar-rounding-shift.s.yaml`: `2`
- `neon-scalar-shift.s.yaml`: `2`
- `dot-req.s.yaml`: `1`
- `neon-scalar-compare.s.yaml`: `1`
- `neon-scalar-shift-imm.s.yaml`: `1`

## Blocked

## Done

Keep one concise line per completed work item.

- `SVE` permute-and-rearrange batch: promoted `SVE/trn1.s.yaml`, `SVE/trn2.s.yaml`, `SVE/zip1.s.yaml`, `SVE/zip2.s.yaml`, `SVE/uzp1.s.yaml`, `SVE/uzp2.s.yaml`, `SVE/rev.s.yaml`, `SVE/revb.s.yaml`, `SVE/compact.s.yaml`, plus `revh`/`revw` spillover via shared predicate/vector permutation formatters; regenerated encodings/fixtures and `bun test` passed.
- `SVE` logical-and-bitwise batch: promoted `SVE/and.s.yaml`, `SVE/ands.s.yaml`, `SVE/bic.s.yaml`, `SVE/eor.s.yaml`, `SVE/eors.s.yaml`, `SVE/orn.s.yaml`, `SVE/orr.s.yaml`, `SVE/nand.s.yaml`, `SVE/nands.s.yaml`, `SVE/nor.s.yaml`, `SVE/nors.s.yaml`, `SVE/not.s.yaml`, and `SVE/nots.s.yaml` by extending the shared predicate-logical formatter path to the flag-setting predicate forms and aliases (`MOVS`/`NOTS`), regenerating encodings/fixtures, and `bun test` passed.
- `SVE` floating compare-and-classify: promoted `SVE/faclt.s.yaml`, `SVE/fcmlt.s.yaml`, `SVE/fcmgt.s.yaml`, `SVE/fcmge.s.yaml`, `SVE/fcmeq.s.yaml`, and `SVE/fcmne.s.yaml` by extending the shared floating compare formatter path to `FAC<cc>`, regenerating encodings/fixtures, and `bun test` passed.
- `SVE` predicate-break and flow: promoted `SVE/brkb.s.yaml`, `SVE/brkbs.s.yaml`, `SVE/brka.s.yaml`, `SVE/brkas.s.yaml`, `SVE/brkn.s.yaml`, `SVE/brkns.s.yaml`, `SVE/brkpa.s.yaml`, `SVE/brkpas.s.yaml`, `SVE/brkpb.s.yaml`, `SVE/brkpbs.s.yaml`, `SVE/pfirst.s.yaml`, `SVE/pnext.s.yaml`, and `SVE/ptest.s.yaml` by extending the shared predicate-control formatter path, regenerated fixtures/encodings, and `bun test` passed.
- `SVE` complex arithmetic: promoted `SVE/fcmla.s.yaml`, `SVE/fcadd.s.yaml`, `armv8.3a-complex.s.yaml`, and `armv8.3a-complex_nofp16.s.yaml` with shared complex rotate formatting, corrected AdvSIMD/SVE operand ordering plus FP16-gated decode handling, regenerated fixtures/encodings, and `bun test` passed.
- `SVE` floating multiply-accumulate: promoted `SVE/fmla.s.yaml`, `SVE/fmls.s.yaml`, `SVE/fnmla.s.yaml`, and `SVE/fnmls.s.yaml` with one shared FP multiply-accumulate formatter covering predicated and indexed forms; regenerated fixtures/encodings, added direct regression assertions, and `bun test` passed.
- `SVE` floating-point arithmetic core: promoted `SVE/fadd.s.yaml`, `SVE/fsub.s.yaml`, `SVE/fmul.s.yaml`, `SVE/fdiv.s.yaml`, and `SVE/fmad.s.yaml` with shared predicated FP arithmetic formatting, regenerated fixtures/encodings, and `bun test` passed.
- `SVE` integer compare-and-mask batch was already implemented and promoted via the shared compare operand formatters for immediate, vector, and wide-vector forms; revalidated `SVE/cmpeq.s.yaml`, `SVE/cmple.s.yaml`, `SVE/cmplo.s.yaml`, `SVE/cmphi.s.yaml`, `SVE/cmpge.s.yaml`, and `SVE/cmpgt.s.yaml` with `bun tools/generate.ts` and `bun test`, both passing.
- `SVE` increment/decrement-by-predicate: promoted the saturating scalar and predicate-count inc/dec family, including `sqincp`/`uqincp` plus the related `sqdecp`/`uqdecp` XMLs, with shared scalar register formatting and direct predicate-count tests; regenerated fixtures and `bun test` passed.
- `SVE` saturating integer arithmetic: promoted `SVE/sqadd.s.yaml`, `SVE/sqsub.s.yaml`, `SVE/uqadd.s.yaml`, and `SVE/uqsub.s.yaml` with shared SVE binary/immediate operand formatting; regenerated and `bun test` passed, and all four capstone shards now have zero unsupported cases.
- `SVE` predicate count and while: promoted `SVE/cntp.s.yaml` alongside the already-shared `CNT*`/`WHILE*` formatting path, regenerated fixtures, and `bun test` passed with the batch fully supported.
- `SVE` arithmetic-and-shift core: `SVE/add.s.yaml`, `SVE/sub.s.yaml`, `SVE/subr.s.yaml`, `SVE/asr.s.yaml`, `SVE/lsl.s.yaml`, and `SVE/lsr.s.yaml` were already implemented and promoted through the shared SVE arithmetic/shift formatters; revalidated with `bun tools/generate.ts` and `bun test`, both passing.
- `neon-mov`: AdvSIMD move-immediate and alias coverage was already in place and promoted; revalidated `neon-mov.s.yaml` plus related spillover with `bun tools/generate.ts` and `bun test`, both passing cleanly.
- `neon-shift` and `neon-scalar-shift`: shared AdvSIMD shift-register, immediate-shift, and widening-long coverage landed; `bun tools/generate.ts` and `bun test` passed.
- `neon-crypto`: AES and SHA AdvSIMD families promoted with operand formatter coverage; generate/test passed.
- `neon-compare`: pairwise add and scalar compare spillover promoted for `neon-add-pairwise` and scalar compare shards; generate/test passed.
- `neon-mul-div` and MLA/MLS: vector/scalar multiply, divide, accumulate, and saturating multiply families promoted; generate/test passed.
- `neon-facge/facgt` and reciprocal-step: absolute FP compare and reciprocal helper families promoted; generate/test passed.
- `neon-add-sub`, halving, and rounding-halving: shared three-register AdvSIMD arithmetic formatting landed; generate/test passed.
- `armv8.6a-simd-matmul` and mixed dot-product: I8MM and mixed-sign dot-product families promoted; generate/test passed.
- `neon-saturating-add-sub`: signed/unsigned saturating add/sub families promoted; generate/test passed.
- `neon-aba-abd` and `neon-3vdiff`: absolute-difference and accumulate families promoted; generate/test passed.
- `armv8.5a-mte`, `armv8.5a-predres`, `armv8.9a-specres2`, and `ras-extension`: pointer-tag and system resource families promoted; generate/test passed.
- `neon-sxtl/uxtl` and `neon-scalar-abs`: widening aliases plus scalar/vector `FABD` coverage landed; generate/test passed.
- `armv9.5a-cpa`, `armv9.4a-gcs`, and `armv9.4a-chk`: checked-pointer and GCS/CHK system families promoted; generate/test passed.
- `neon-2velem` and scalar by-element saturating multiply: lane-by-element widening/saturating multiply families promoted; generate/test passed.
- `neon-simd-misc`, `neon-compare-instructions`, and `neon-bitwise-instructions`: misc FP/int/vector logical families promoted; generate/test passed.
- `armv8.4a-flag`, `armv8.4a-flagm`, and `armv8.5a-altnzcv`: flag-manipulation families promoted; generate/test passed.
- `neon-perm` and `neon-tbl`: transpose/zip/unzip/table permutation families promoted; generate/test passed.
- Pointer-auth and RCpc scalar cleanup: remaining pointer-auth aliases and RCpc spillover promoted; generate/test passed.
- `armv8.5a-bti`, `speculation-barriers`, and `armv8.5a-sb`: branch-target and speculation-barrier families promoted; generate/test passed.
- `basic-a64-instructions` and `arm64-basic-a64-instructions`: remaining core scalar A64 cleanup promoted; generate/test passed.
- `neon-simd-copy`, `neon-scalar-dup`, and `neon-extract`: lane-move, dup, and extract families promoted; generate/test passed.

## Snapshot

Current capstone coverage snapshot:

- `26438` supported capstone cases
- `8119` unsupported capstone cases
- `1058` XML instruction files currently listed in `tools/supported-files.ts`
- `845` distinct unsupported XML instruction files
- `644` capstone source YAML files containing unsupported cases
- `549` distinct unsupported mnemonics

Highest-value remaining source files right now:

- `FP8_SVE2/faminmax.s.yaml`: `36`
- `SME2/luti2.s.yaml`: `36`
- `SVE/ld1sb.s.yaml`: `34`
- `FP8_SVE2/fcvtn.s.yaml`: `32`
- `SME2/add.s.yaml`: `32`

Largest unsupported feature sets:

- `FEAT_SME`: `4478`
- `FEAT_SVE`: `2728`
- `FEAT_SVE || FEAT_SME`: `2296`
- `FEAT_SVE2`: `2069`
- `FEAT_SVE2 || FEAT_SME`: `1861`
- `FEAT_SME2`: `1836`
- `FEAT_SVE2p1`: `1530`
- `FEAT_SME2 || FEAT_SVE2p1`: `725`
- `FEAT_SME2p1`: `724`
- `FEAT_SVE2p1 || FEAT_SME2p1`: `694`

Implication:

- the scalar/core A64 cleanup batch from `basic-a64-instructions.s.yaml` and `arm64-basic-a64-instructions.s.yaml` is complete
- the pointer-auth and RCpc scalar batch from `armv8.3a-signed-pointer.s.yaml`, `armv8.3a-rcpc.s.yaml`, and `armv9.5a-pauthlr.s.yaml` is complete
- the AdvSIMD permutation/table batch from `neon-perm.s.yaml` and `neon-tbl.s.yaml` is complete
- the remaining work is now concentrated in the AdvSIMD/SVE/SME long tail
- the ready queue should keep tracking family-sized batches seeded from the current highest-value unsupported source files
- the next highest-value batches are still family work, not one-off instruction fixes

## Meaning Of "Unsupported"

This repository keeps committed capstone fixtures under `test/generated/capstone/`, split by source YAML file.

A case is counted as `unsupported` only when all of the following are true:

1. The instruction word matches an Arm XML encoding.
2. That XML file is not in `tools/supported-files.ts`.
3. `disasm()` still falls back to raw `.inst 0x...`.

So this TODO tracks instructions that already map cleanly to XML encodings, but are not yet promoted into the supported set.

## Working Notes

- Do not add XML files to `tools/supported-files.ts` until both `decode()` and `disasm()` behave correctly for that family.
- The generated capstone corpus is a progress metric, not the whole instruction universe.
- Do not encode Capstone-specific output quirks in the implementation unless output compatibility goals explicitly change.
- Do not spend migration effort on parsing `<asmtemplate>`; use compact local operand/action schemas instead.
- `bun tools/generate.ts` now refreshes the committed capstone shards by repartitioning the tracked corpus against the current `tools/supported-files.ts` set.
- The recent system-register work formats generic system-register operands as `S<op0>_<op1>_C<CRn>_C<CRm>_<op2>`. That is acceptable for coverage and should not block further family support.
- `tools/encodings.ts` needs to tolerate feature terms inside larger guard expressions; keep that in mind when working on mixed-guard XMLs.
- If `MOVA`-related capstone accounting does not move as expected, verify the XML-to-case mapping before assuming the formatter is wrong.
