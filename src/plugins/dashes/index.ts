export function fixDashes(text: string): string {
  return (
    text
      // replaces triple dash to mdash
      .replace(/-{3}/g, "—")

      // replaces double dash to ndash
      .replace(/-{2}/g, "–")
  );
}
