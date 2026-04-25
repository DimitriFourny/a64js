#!/usr/bin/env python3
import argparse
import shlex
import subprocess
import sys
import tempfile
import time
from pathlib import Path


DONE_FILENAME = "DONE_TASK"
DEFAULT_LOG_DIR = ".codex-loop"
DONE_INSTRUCTION = (
    '\n\nWhen all the tasks are fully complete, create a file named "{done_filename}" in '
    "the working directory at \"{done_path}\". Do not create it before all tasks are "
    "actually done. Before creating it, verify that TODO.md has no Ready item and no "
    "In Progress item."
)


def build_prompt(user_prompt: str, done_path: Path) -> str:
    return user_prompt + DONE_INSTRUCTION.format(
        done_filename=DONE_FILENAME,
        done_path=done_path,
    )


def run_codex(prompt: str, cwd: Path, extra_args: list[str]) -> tuple[int, str, str, str]:
    with tempfile.NamedTemporaryFile(mode="r+", encoding="utf-8", suffix=".txt") as output_file:
        cmd = [
            "codex",
            "exec",
            "--skip-git-repo-check",
            "-C",
            str(cwd),
            "-o",
            output_file.name,
            *extra_args,
            prompt,
        ]
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            check=False,
        )
        output_file.seek(0)
        final_message = output_file.read()
    return result.returncode, result.stdout, result.stderr, final_message


def todo_sections(cwd: Path) -> dict[str, str]:
    todo_path = cwd / "TODO.md"
    if not todo_path.exists():
        raise FileNotFoundError(f"TODO.md not found at {todo_path}")

    sections: dict[str, list[str]] = {}
    current: str | None = None
    for line in todo_path.read_text(encoding="utf-8").splitlines():
        if line.startswith("## "):
            current = line[3:].strip()
            sections[current] = []
            continue
        if current is not None:
            sections[current].append(line)

    return {name: "\n".join(lines).strip() for name, lines in sections.items()}


def count_work_items(section_text: str) -> int:
    return sum(1 for line in section_text.splitlines() if line.startswith("- "))


def validate_todo_queue(cwd: Path) -> tuple[bool, str]:
    sections = todo_sections(cwd)
    in_progress_count = count_work_items(sections.get("In Progress", ""))
    if in_progress_count > 1:
        return False, f"TODO.md has {in_progress_count} In Progress items; expected at most one."
    return True, ""


def todo_has_open_work(cwd: Path) -> bool:
    sections = todo_sections(cwd)
    return (
        count_work_items(sections.get("Ready", "")) > 0
        or count_work_items(sections.get("In Progress", "")) > 0
    )


def write_iteration_log(
    log_dir: Path,
    iteration: int,
    returncode: int,
    stdout: str,
    stderr: str,
    final_message: str,
) -> None:
    log_dir.mkdir(parents=True, exist_ok=True)
    log_path = log_dir / f"iteration-{iteration:03d}.txt"
    log_path.write_text(
        "\n".join(
            [
                f"returncode: {returncode}",
                "",
                "=== stdout ===",
                stdout.rstrip(),
                "",
                "=== stderr ===",
                stderr.rstrip(),
                "",
                "=== final message ===",
                final_message.rstrip(),
                "",
            ]
        ),
        encoding="utf-8",
    )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Run `codex exec` repeatedly until it creates a DONE_TASK file."
    )
    parser.add_argument("prompt", help="Base prompt to send to Codex on each loop iteration.")
    parser.add_argument(
        "--cwd",
        default=".",
        help="Working directory passed to `codex exec -C`. Default: current directory.",
    )
    parser.add_argument(
        "--max-iterations",
        type=int,
        default=20,
        help="Maximum number of loop iterations before exiting with an error. Default: 20.",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=0.0,
        help="Seconds to wait between iterations. Default: 0.",
    )
    parser.add_argument(
        "--codex-arg",
        action="append",
        default=[],
        help="Extra argument to pass to `codex exec`. Repeat as needed.",
    )
    parser.add_argument(
        "--log-dir",
        default=DEFAULT_LOG_DIR,
        help=f"Directory for per-iteration logs, relative to --cwd unless absolute. Default: {DEFAULT_LOG_DIR}.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    if args.max_iterations < 1:
        print("--max-iterations must be at least 1.", file=sys.stderr)
        return 2
    if args.delay < 0:
        print("--delay cannot be negative.", file=sys.stderr)
        return 2

    cwd = Path(args.cwd).resolve()
    done_path = cwd / DONE_FILENAME
    log_dir = Path(args.log_dir)
    if not log_dir.is_absolute():
        log_dir = cwd / log_dir
    prompt = build_prompt(args.prompt, done_path)

    try:
        valid_queue, queue_error = validate_todo_queue(cwd)
    except OSError as exc:
        print(str(exc), file=sys.stderr)
        return 2
    if not valid_queue:
        print(queue_error, file=sys.stderr)
        return 2

    if done_path.exists():
        if done_path.is_dir():
            print(
                f"Expected completion sentinel at {done_path} to be a file, but found a directory.",
                file=sys.stderr,
            )
            return 2
        done_path.unlink()

    print(f"Using working directory: {cwd}", file=sys.stderr)
    print(f"Completion sentinel: {done_path}", file=sys.stderr)
    print(f"Iteration logs: {log_dir}", file=sys.stderr)
    if args.codex_arg:
        print(
            "Extra codex args: " + " ".join(shlex.quote(arg) for arg in args.codex_arg),
            file=sys.stderr,
        )

    for iteration in range(1, args.max_iterations + 1):
        try:
            before_sections = todo_sections(cwd)
            valid_queue, queue_error = validate_todo_queue(cwd)
        except OSError as exc:
            print(str(exc), file=sys.stderr)
            return 2
        if not valid_queue:
            print(queue_error, file=sys.stderr)
            return 2

        print(f"\n=== Codex iteration {iteration}/{args.max_iterations} ===", file=sys.stderr)
        returncode, stdout, stderr, final_message = run_codex(prompt, cwd, args.codex_arg)
        write_iteration_log(log_dir, iteration, returncode, stdout, stderr, final_message)

        if stdout:
            print(stdout, end="")
        if stderr:
            print(stderr, end="", file=sys.stderr)

        if returncode != 0:
            print(
                f"codex exec failed on iteration {iteration} with exit code {returncode}.",
                file=sys.stderr,
            )
            return returncode

        if done_path.exists():
            try:
                if todo_has_open_work(cwd):
                    print(
                        f"{done_path} exists, but TODO.md still has Ready or In Progress work.",
                        file=sys.stderr,
                    )
                    return 1
            except OSError as exc:
                print(str(exc), file=sys.stderr)
                return 2
            print(
                f"\nDetected completion sentinel {done_path} on iteration {iteration}. Stopping loop.",
                file=sys.stderr,
            )
            return 0

        try:
            after_sections = todo_sections(cwd)
        except OSError as exc:
            print(str(exc), file=sys.stderr)
            return 2
        if after_sections.get("Blocked", "") != before_sections.get("Blocked", ""):
            print(
                "TODO.md Blocked section changed and no completion sentinel was created. Stopping loop.",
                file=sys.stderr,
            )
            return 1

        print(
            f"Completion sentinel {done_path} not found after iteration {iteration}.",
            file=sys.stderr,
        )
        if iteration < args.max_iterations and args.delay > 0:
            time.sleep(args.delay)

    print(
        f"Reached max iterations ({args.max_iterations}) without detecting completion sentinel {done_path}.",
        file=sys.stderr,
    )
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
