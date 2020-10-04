export function fixQuestionMarks(text: string): string {
  return text.replace(/(\?)/g, "؟");
}

export function removeExtraMarks(text: string): string {
  return (
    text

      // removes space between different/same marks (combining for cleanup)
      .replace(/([؟?!])([ ]+)(?=[؟?!])/g, "$1")

      // replaces more than one exclamation mark with just one
      .replace(/(!){2,}/g, "$1")
      // replaces more than one english or persian question mark with just one
      .replace(/(\u061F|\?){2,}/g, "$1") // \u061F = `؟`
      // re-orders consecutive marks
      .replace(/(!)([ \t]*)([\u061F?])/g, "$3$1") // `?!` --> `!?`
  );
}
