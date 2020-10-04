import { charLevelReplace } from "./charLevelReplace";

export function fixNonPersianChars(text: string): string {
  return charLevelReplace(text, "كڪيىۍېہە", "ککییییههه");
}

export function fixArabicHamzeh(text: string): string {
  return (
    text

      // converts arabic hamzeh ة to هٔ
      .replace(/(\S)ة([\s\u200c\u200e])/g, "$1هٔ$2")
  );
}

export function removeArabicHamzeh(text: string): string {
  return (
    text
      // converts arabic hamzeh ة to ه‌ی
      .replace(/(\S)ة([\s\u200c\u200e])/g, "$1ه‌ی$2")
  );
}

export function fixHamzeh(text: string): string {
  const replacement = "$1هٔ$3";
  return (
    text

      // replaces ه followed by (space|ZWNJ|lrm) follow by ی with هٔ
      .replace(/(\S)(ه[\s\u200c\u200e]+[یي])([\s\u200c\u200e])/g, replacement) // heh + ye

      // replaces ه followed by (space|ZWNJ|lrm|nothing) follow by ء with هٔ
      .replace(/(\S)(ه[\s\u200c\u200e]?\u0621)([\s\u200c\u200e])/g, replacement) // heh + standalone hamza

      // replaces هٓ or single-character ۀ with the standard هٔ
      // @Ref ebraminio/persiantools
      .replace(/(ۀ|هٓ)/g, "هٔ")
  );
}

export function fixSuffixSpacingHamzeh(text: string): string {
  const replacement = "$1\u0647\u200c\u06cc$3";
  return (
    text

      // heh + ye
      .replace(/(\S)(ه[\s\u200c]+[یي])([\s\u200c])/g, replacement)

      // heh + standalone hamza
      .replace(/(\S)(ه[\s\u200c]?\u0621)([\s\u200c])/g, replacement)

      // heh + hamza above
      .replace(/(\S)(ه[\s\u200c]?\u0654)([\s\u200c])/g, replacement)
  );
}

export function fixSuffixMisc(text: string): string {
  return (
    text
      // replaces ه followed by ئ or ی, and then by ی, with ه\u200cای,
      // EXAMPLE: خانه‌ئی becomes خانه‌ای
      // @Ref ebraminio/persiantools
      .replace(/(\S)ه[\u200c\u200e][ئی]ی([\s\u200c\u200e])/g, "$1ه\u200cای$2")
  );
}
