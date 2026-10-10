/** Candidate indexes in original precedence order, keyed by instruction bits 31:24. */
export function buildOpcodeBuckets(encodings: readonly { mask: number; value: number }[]): number[][] {
  const buckets: number[][] = Array.from({ length: 256 }, () => []);
  for (const [index, encoding] of encodings.entries()) {
    const mask = encoding.mask >>> 24;
    const value = encoding.value >>> 24;
    for (let prefix = 0; prefix < 256; prefix += 1) {
      if ((prefix & mask) === value) buckets[prefix].push(index);
    }
  }
  return buckets;
}
