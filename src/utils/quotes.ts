export function fixEnglishQuotes(text: string): string {
  return (
    text
      // replaces english quote marks with their persian equivalent
      .replace(/([“"'`]+)(.+?)(\1)/g, "«$2»")
  );
}
