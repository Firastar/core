export function fixStandardChars(text: string, persianGlyphs: any): string {
  for (const i in persianGlyphs) {
    if (Object.prototype.hasOwnProperty.call(persianGlyphs, i)) {
      text = text.replace(new RegExp("[" + persianGlyphs[i] + "]", "g"), i);
    }
  }
  return text;
}
