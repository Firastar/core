import { persianChars, persianDiacritic } from "../../constants";

// @Ref https://github.com/ebraminio/persiantools
export function fixZWNJ(text: string): string {
  return (
    text
      // converts all soft hyphens (&shy;) into zwnj
      .replace(/\u00ad/g, "\u200c")

      // removes more than one zwnj
      .replace(/\u200c{2,}/g, "\u200c")

      // cleans zwnj before and after numbers, english words, spaces and punctuations
      .replace(
        /\u200c([\w\s0-9۰-۹[\](){}«»“”.…,:;?!$%@#*=+\-/\\،؛٫٬×٪؟ـ])/g,
        "$1",
      )
      .replace(
        /([\w\s0-9۰-۹[\](){}«»“”.…,:;?!$%@#*=+\-/\\،؛٫٬×٪؟ـ])\u200c/g,
        "$1",
      )

      // removes unnecessary zwnj on start/end of each line
      .replace(/(^\u200c|\u200c$)/gm, "")
  );
}

// puts zwnj between the word and the prefix:
// - mi* nemi* bi*
// NOTE: there's a possible bug here: prefixes could be separate nouns
export function fixPrefixZwnj(text: string): string {
  const replacement = "$1\u200c$3";
  return text
    .replace(/((\s|^)ن?می) ([^ ])/g, replacement)
    .replace(/((\s|^)بی) ([^ ])/g, replacement); // @Ref zoghal
}

const suffixPattern = "\\s.,;،؛!؟?\"'()[\\]{}“”«»";

// puts zwnj between the word and the suffix
// NOTE: possible bug: suffixes could be nouns
export function fixSuffixZwnj(text: string): string {
  const replacement = "$1\u200c$2";
  return (
    text

      // must done before others
      // *ha *haye
      .replace(
        new RegExp(
          "([" +
            persianChars +
            persianDiacritic +
            "]) (ها(ی)?[" +
            suffixPattern +
            "])",
          "g",
        ),
        replacement,
      )

      // *am *at *ash *ei *eid *eem *and *man *tan *shan
      .replace(
        new RegExp(
          "([" +
            persianChars +
            persianDiacritic +
            "]) ((ام|ات|اش|ای|اید|ایم|اند|مان|تان|شان)[" +
            suffixPattern +
            "])",
          "g",
        ),
        replacement,
      )

      // *tar *tari *tarin
      .replace(
        new RegExp(
          "([" +
            persianChars +
            persianDiacritic +
            "]) (تر((ی)|(ین))?[" +
            suffixPattern +
            "])",
          "g",
        ),
        replacement,
      )

      // *hayee *hayam *hayat *hayash *hayetan *hayeman *hayeshan
      .replace(
        new RegExp(
          "([" +
            persianChars +
            persianDiacritic +
            "]) ((هایی|هایم|هایت|هایش|هایمان|هایتان|هایشان)[" +
            suffixPattern +
            "])",
          "g",
        ),
        replacement,
      )

      // replaces ه followed by ئ or ی, and then by ی, with ه\u200cای,
      // EXAMPLE: خانه‌ئی becomes خانه‌ای
      // @Ref ebraminio/persiantools
      .replace(/(\S)ه[\u200c\u200e][ئی]ی([\s\u200c\u200e])/g, "$1ه\u200cای$2")
  );
}

// late checks for zwnj
export function fixZWNJLate(text: string): string {
  return (
    text

      // cleans zwnj after characters that don't connect to the next
      .replace(/([إأةؤورزژاآدذ،؛,:«»\\/@#$٪×*()ـ\-=|])\u200c/g, "$1")
  );
}
