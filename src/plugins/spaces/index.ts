export function removeSpaces(text: string): string {
  return (
    text

      // replaces more than one space with just a single one
      // except before/after preservers and before new-lines
      .replace(/([^_])([ ]{2,})(?![_]{2}|\n)/g, "$1 ")

      // cleans whitespace/zwnj between new-lines
      // @REF: https://stackoverflow.com/a/10965543/
      .replace(/\n[\s\u200c]*\n/g, "\n\n")
  );
}

export function fixMiscSpacing(text: string): string {
  return (
    text

      // removes space before parentheses on misc cases
      .replace(/ \((ص|عج|س|ع|ره)\)/g, "($1)")

      // removes space before braces containing numbers
      .replace(/ \[([0-9۰-۹]+)\]/g, "[$1]")
  );
}
