export function similarity(a, b) {
  const normalize = (s) =>
    s.toLowerCase().replace(/[^a-z0-9' ]/g, "").trim().split(/\s+/);
  const wordsA = normalize(a);
  const wordsB = normalize(b);
  const setB = new Set(wordsB);
  const matches = wordsA.filter((w) => setB.has(w)).length;
  return matches / Math.max(wordsA.length, wordsB.length);
}