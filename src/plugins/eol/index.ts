/*
    Replaces windows end of lines with unix eol
*/

export function fixEOL(text: string): string {
  return text.replace(/(\r?\n)|(\r\n?)/g, "\n");
}
