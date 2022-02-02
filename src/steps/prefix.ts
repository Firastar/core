import { persianGlyphs } from "../constants";
import {
  fixArabicHamzeh,
  fixHamzeh,
  fixSuffixSpacingHamzeh,
  removeArabicHamzeh,
} from "../plugins/chars";
import { fixDashes } from "../plugins/dashes";
import { fixEllipsis } from "../plugins/ellipsis";
import { fixEOL } from "../plugins/eol";
import { fixArabicNumbers } from "../plugins/numbers";
import { fixEnglishQuotes } from "../plugins/quotes";
import { removeRLM } from "../plugins/rlm";
import { fixStandardChars } from "../plugins/standardChars";
import { fixZWNJ } from "../plugins/zwnj";
import { IOptions } from "../types";

export default function prefix(options: IOptions, text: string): string {
  if (options.fixEOL) {
    text = fixEOL(text);
  }

  if (options.fixStandardChars) {
    text = fixStandardChars(text, persianGlyphs);
  }

  if (options.fixDashes) {
    text = fixDashes(text);
  }

  if (options.fixEllipsis) {
    text = fixEllipsis(text);
  }

  if (options.fixEnglishQuotes) {
    text = fixEnglishQuotes(text);
  }

  if (options.fixHamzeh) {
    if (options.fixArabicHamzeh) {
      text = fixArabicHamzeh(text);
    }

    text = fixHamzeh(text);
  } else if (options.fixSuffixZwnj) {
    if (options.fixArabicHamzeh) {
      text = removeArabicHamzeh(text);
    }

    text = fixSuffixSpacingHamzeh(text);
  }

  if (options.removeRLM) {
    text = removeRLM(text);
  }

  if (options.fixZWNJ) {
    text = fixZWNJ(text);
  }

  if (options.fixArabicNumbers) {
    text = fixArabicNumbers(text);
  }
  return text;
}
