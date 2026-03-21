#!/usr/bin/env node

import { pathToFileURL } from "node:url";
import { disasm } from "./index.ts";

type CliOptions = {
  word?: number;
  pc?: bigint;
  features: string[];
};

function printUsage(): void {
  console.error("Usage: a64js --disasm <word> [--pc <address>] [--feature <name>]");
}

function parseInteger(value: string, optionName: string): bigint {
  try {
    return BigInt(value);
  } catch {
    throw new Error(`invalid ${optionName} value: ${value}`);
  }
}

function parseWord(value: string): number {
  const word = parseInteger(value, "--disasm");
  if (word < 0n || word > 0xffff_ffffn) {
    throw new Error(`instruction word out of range: ${value}`);
  }
  return Number(word);
}

export function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = { features: [] };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--disasm") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("missing value for --disasm");
      }
      options.word = parseWord(value);
      index += 1;
      continue;
    }

    if (arg === "--pc") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("missing value for --pc");
      }
      options.pc = parseInteger(value, "--pc");
      index += 1;
      continue;
    }

    if (arg === "--feature") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("missing value for --feature");
      }
      options.features.push(value);
      index += 1;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      printUsage();
      process.exit(0);
    }

    throw new Error(`unknown option: ${arg}`);
  }

  if (options.word === undefined) {
    throw new Error("missing required --disasm option");
  }

  return options;
}

export function run(argv: string[]): string {
  const options = parseArgs(argv);
  return disasm(options.word!, options.pc, { features: options.features });
}

function main(): void {
  try {
    console.log(run(process.argv.slice(2)));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    printUsage();
    process.exit(1);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
