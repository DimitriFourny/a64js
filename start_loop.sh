#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

MODEL="${CODEX_LOOP_MODEL:-gpt-5.4}"
REASONING_EFFORT="${CODEX_LOOP_REASONING_EFFORT:-medium}"
MAX_ITERATIONS="${CODEX_LOOP_MAX_ITERATIONS:-20}"
DELAY="${CODEX_LOOP_DELAY:-0}"

PROMPT="$(cat <<'EOF'
Read TODO.md and follow only its Workflow section.

If In Progress has an item, continue that exact item.
Otherwise pick exactly one item from Ready and move it to In Progress before coding.

Complete the selected item end-to-end:
- inspect the listed XML/YAML anchors first
- implement the full scoped family, not isolated encodings
- update tools/supported-files.ts only after the family works end-to-end
- run bun tools/generate.ts
- run bun test
- update TODO.md with Done or Blocked status

You may spawn subagents only for read-only investigation, such as:
- comparing XML encoding shapes
- identifying existing formatter patterns
- checking unsupported capstone shards

Subagents should use gpt-5.4-mini with low or medium reasoning effort. Subagents must not edit files unless explicitly assigned a disjoint write scope.

Do not commit.

Create DONE_TASK only when:
- Ready is empty
- In Progress is empty
- the last selected item is in Done
- required generation/tests have been run and passed

If blocked, record the blocker in TODO.md and stop without creating DONE_TASK.
EOF
)"

exec "$SCRIPT_DIR/codex_loop.py" \
  --cwd "$SCRIPT_DIR" \
  --max-iterations "$MAX_ITERATIONS" \
  --delay "$DELAY" \
  --codex-arg=-m \
  --codex-arg "$MODEL" \
  --codex-arg=-c \
  --codex-arg "model_reasoning_effort=\"$REASONING_EFFORT\"" \
  "$PROMPT"
