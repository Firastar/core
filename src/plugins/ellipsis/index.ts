export function fixEllipsis(text: string): string {
  return (
    text
      // removes spaces between dots
      .replace(/\.([ ]+)(?=[.])/g, ".")

      // replaces three dots with ellipsis character
      .replace(/[ \t]*\.{3,}/g, "…")

      // replaces more than one ellipsis with one
      .replace(/(…){2,}/g, "…")

      // replaces (space|tab|zwnj) after ellipsis with one space
      .replace(/([ ]{1,})*…[ \t\u200c]*/g, "$1… ")
  );
}
