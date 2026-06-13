import type { CSSProperties } from "react";

/**
 * Convert a raw CSS declaration string into a React style object.
 *
 * The Being Muslim concept designs were authored in Svelte with hundreds of
 * inline `style="..."` strings. React only accepts style objects, so this
 * helper lets us port those declarations verbatim:
 *
 *   <div style={css("font-family: 'DM Sans'; font-size: 15px; color: #2a2018")} />
 *
 * Handles standard kebab-case properties (converted to camelCase) and custom
 * properties / CSS variables (kept as-is). Values containing ':' (e.g. urls,
 * data URIs) are preserved by splitting on the first ':' only.
 */
export function css(input: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of input.split(";")) {
    const idx = decl.indexOf(":");
    if (idx === -1) continue;
    const rawKey = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!rawKey || !value) continue;
    // Preserve CSS custom properties exactly (e.g. --bm-accent).
    const key = rawKey.startsWith("--")
      ? rawKey
      : rawKey.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = value;
  }
  return out as CSSProperties;
}
