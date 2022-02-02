import { fixNonPersianChars } from "../plugins/chars";
import { fixQuestionMarks } from "../plugins/marks";
import { fixEnglishNumbers } from "../plugins/numbers";
import { fixNumeralSymbols } from "../plugins/numeralSymbols";
import { fixPunctuations } from "../plugins/punctuations";
import { IOptions } from "../types";

export default function wordLevelFix(options: IOptions, text: string): string {
  text = text.replace(
    /(^|\s+)([[({"'“«]?)(\S+)([\])}"'”»]?)(?=($|\s+))/g,
    (matched, word, trailings, after) => {
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

      // skips converting english numbers of ordered lists in markdown
      if (
        options.skipMarkdownOrderedListsNumbersConversion &&
        (matched + trailings + after).match(
          /(?:(?:\r?\n)|(?:\r\n?)|(?:^|\n))\d+\.\s/,
        )
      ) {
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
