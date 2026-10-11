# Future work

This is a backlog of known limitations, not an automated task queue or a claim of exhaustive architecture coverage. See the [README](README.md) for current capabilities and the [development workflow](README.md#development-workflow).

- [ ] Add an authoritative named system-register mapping. Preserve encoded register tuples for unknown names and validate symbolic names against independently sourced instruction examples.
- [ ] Replace remaining specialized text operands with structured operands when extending those families, preserving their formatted assembly and validating operand semantics.
- [ ] Expand independently sourced reserved-bit and boundary cases for under-tested instruction families. Keep recognition coverage separate from verified assembly and operand correctness.
