export function fixStandardChars(text: string, persianGlyphs: any): string {
  for (const i in persianGlyphs) {
    text = text.replace(new RegExp("[" + persianGlyphs[i] + "]", "g"), i);
  }
  return text;
}
