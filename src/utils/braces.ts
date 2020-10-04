export function fixBracesSpacing(text: string): string {
  const replacement = " $1$2$3 ";
  return (
    text
      // removes inside spaces and more than one outside
      // for `()`, `[]`, `{}`, `“”` and `«»`
      .replace(/[ \t\u200c]*(\()\s*([^)]+?)\s*?(\))[ \t\u200c]*/g, replacement)
      .replace(/[ \t\u200c]*(\[)\s*([^\]]+?)\s*?(\])[ \t\u200c]*/g, replacement)
      .replace(/[ \t\u200c]*(\{)\s*([^}]+?)\s*?(\})[ \t\u200c]*/g, replacement)
      .replace(/[ \t\u200c]*(“)\s*([^”]+?)\s*?(”)[ \t\u200c]*/g, replacement)
      .replace(/[ \t\u200c]*(«)\s*([^»]+?)\s*?(»)[ \t\u200c]*/g, replacement)
  );
}

export function fixBracesSpacingInside(text: string): string {
  const replacement = "$1$2$3";
  return (
    text
      // removes inside spaces for `()`, `[]`, `{}`, `“”` and `«»`
      .replace(/(\()\s*([^)]+?)\s*?(\))/g, replacement)
      .replace(/(\[)\s*([^\]]+?)\s*?(\])/g, replacement)
      .replace(/(\{)\s*([^}]+?)\s*?(\})/g, replacement)
      .replace(/(“)\s*([^”]+?)\s*?(”)/g, replacement)
      .replace(/(«)\s*([^»]+?)\s*?(»)/g, replacement)

      // NOTE: must be here, weird not working if on `markdownNormalizeBraces()`
      // removes markdown link spaces inside normal ()
      .replace(/(\(\[.*?\]\(.*?\))\s+(\))/g, "$1$2")
  );
}
