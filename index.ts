import { IOptions } from "./src/types";
import { defaultOptions, persianGlyphs } from "./src/const";
import {
  decodeHTMLEntities,
  fixArabicHamzeh,
  fixArabicNumbers,
  fixBracesSpacing,
  fixBracesSpacingInside,
  fixDashes,
  fixDates,
  fixDiacritics,
  fixEllipsis,
  fixEnglishNumbers,
  fixEnglishQuotes,
  fixEOL,
  fixHamzeh,
  fixLineBreaks,
  fixMiscSpacing,
  fixNonPersianChars,
  fixNumeralSymbols,
  fixPrefixZwnj,
  fixPunctuations,
  fixPunctuationSpacing,
  fixQuestionMarks,
  fixStandardChars,
  fixSuffixSpacingHamzeh,
  fixSuffixZwnj,
  fixZWNJ,
  fixZWNJLate,
  removeArabicHamzeh,
  removeDiacritics,
  removeExtraMarks,
  removeKashidas,
  removeRLM,
  removeSpaces,
  trim,
} from "./src/utils";
import {
  preserveBrace,
  preserveBracket,
  preserveComment,
  preserveEntity,
  preserveFrontmatter,
  preserveHtml,
  preserveNbsp,
  preserveUri,
  restoreBrace,
  restoreBracket,
  restoreComment,
  restoreEntity,
  restoreFrontmatter,
  restoreHtml,
  restoreNbsp,
  restoreUri,
} from "./src/utils/preservers";

export function firast(text: string, options?: Partial<IOptions>): string {
  // Complete options obj
  options = { ...defaultOptions, ...options };

  if (!text.trim()) {
    return text;
  }

  text = " " + text + " ";

  // --- START OF PRESERVE
  text = preserve(options, text);
  // --- END OF PRESERVE

  // --- START OF PRE-FIX
  text = preFix(options, text);
  // --- END OF PRE-FIX

  // --- START OF WORD-LEVEL-FIX
  text = wordLevelFix(text, options);
  // --- END OF WORD-LEVEL-FIX

  // --- START OF FIX
  text = fix(options, text);
  // --- END OF FIX

  // --- START OF RESTORE
  text = restore(options, text);
  // --- END OF RESTORE

  // --- START OF POST-FIX
  text = postFix(options, text);
  // --- END OF POST-FIX

  return text;
}

function fix(options: Partial<IOptions>, text: string) {
  if (options.fixDates) {
    text = fixDates(text);
  }

  if (options.fixPrefixZwnj) {
    text = fixPrefixZwnj(text);
  }

  if (options.fixSuffixZwnj) {
    text = fixSuffixZwnj(text);
  }

  if (options.fixBracesSpacing) {
    text = fixBracesSpacing(text);
  }

  if (options.removeExtraMarks) {
    text = removeExtraMarks(text);
  }

  if (options.fixPunctuationSpacing) {
    text = fixPunctuationSpacing(text);
  }

  if (options.removeKashidas) {
    text = removeKashidas(text);
  }

  // doing it again after `fixPunctuationSpacing()`
  if (options.fixBracesSpacing) {
    text = fixBracesSpacingInside(text);
  }

  if (options.fixMiscSpacing) {
    text = fixMiscSpacing(text);
  }

  if (options.removeDiacritics) {
    text = removeDiacritics(text);
  } else if (options.fixDiacritics) {
    text = fixDiacritics(text);
  }

  if (options.removeSpaces) {
    text = removeSpaces(text);
  }

  if (options.fixZWNJ) {
    text = fixZWNJLate(text);
  }

  if (options.fixLineBreaks) {
    text = fixLineBreaks(text);
  }
  return text;
}

function wordLevelFix(text: string, options: Partial<IOptions>) {
  text = text.replace(
    /(^|\s+)([[({"'“«]?)(\S+)([\])}"'”»]?)(?=($|\s+))/g,
    (matched, before, leadings, word) => {
      // should not replace to persian chars in english phrases
      if (word.match(/[a-zA-Z\-_]{2,}/g)) {
        return matched;
      }

      // should not touch sprintf directives
      // @Ref https://stackoverflow.com/a/8915445/
      if (
        word.match(
          /%(?:\d+\$)?[+-]?(?:[ 0]|'.{1})?-?\d*(?:\.\d+)?[bcdeEufFgGosxX]/g,
        )
      ) {
        return matched;
      }

      // should not touch numbers in html entities
      if (word.match(/&#\d+;/g)) {
        return matched;
      }

      if (options.fixEnglishNumbers) {
        matched = fixEnglishNumbers(matched);
      }

      if (options.fixNumeralSymbols) {
        matched = fixNumeralSymbols(matched);
      }

      if (options.fixPunctuations) {
        matched = fixPunctuations(matched);
      }

      if (options.fixNonPersianChars) {
        matched = fixNonPersianChars(matched);
      }

      if (options.fixQuestionMarks) {
        matched = fixQuestionMarks(matched);
      }

      return matched;
    },
  );
  return text;
}

function restore(options: Partial<IOptions>, text: string): string {
  if (options.preserveEntity) {
    text = restoreEntity(text);
  }

  if (options.preserveNbsp) {
    text = restoreNbsp(text);
  }

  if (options.preserveUri) {
    text = restoreUri(text);
  }

  if (options.preserveBrace) {
    text = restoreBrace(text);
  }

  if (options.preserveBracket) {
    text = restoreBracket(text);
  }

  if (options.preserveComment) {
    text = restoreComment(text);
  }

  if (options.preserveHtml) {
    text = restoreHtml(text);
  }

  if (options.preserveFrontmatter) {
    text = restoreFrontmatter(text);
  }
  return text;
}

function preFix(options: Partial<IOptions>, text: string): string {
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

function postFix(options: Partial<IOptions>, text: string): string {
  if (options.trim) {
    text = trim(text);
  } else {
    // removes single space paddings around the string
    text = text.replace(/^[ ]/g, "").replace(/[ ]$/g, "");
  }
  return text;
}

function preserve(options: Partial<IOptions>, text: string): string {
  if (options.preserveFrontmatter) {
    text = preserveFrontmatter(text);
  }

  if (options.preserveHtml) {
    text = preserveHtml(text);
  }

  if (options.preserveComment) {
    text = preserveComment(text);
  }

  if (options.preserveBrace) {
    text = preserveBrace(text);
  }

  if (options.preserveBracket) {
    text = preserveBracket(text);
  }

  if (options.preserveUri) {
    text = preserveUri(text);
  }

  if (options.preserveNbsp) {
    text = preserveNbsp(text);
  }

  if (options.preserveEntity) {
    text = preserveEntity(text);
  } else {
    text = decodeHTMLEntities(text);
  }
  return text;
}
