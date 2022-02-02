import { fixBracesSpacing, fixBracesSpacingInside } from "../plugins/braces";
import { fixDates } from "../plugins/dates";
import { fixDiacritics, removeDiacritics } from "../plugins/diacritics";
import { removeKashidas } from "../plugins/kashidas";
import { fixLineBreaks } from "../plugins/lineBreaks";
import { removeExtraMarks } from "../plugins/marks";
import { fixPunctuationSpacing } from "../plugins/punctuations";
import { fixMiscSpacing, removeSpaces } from "../plugins/spaces";
import { fixPrefixZwnj, fixSuffixZwnj, fixZWNJLate } from "../plugins/zwnj";
import { IOptions } from "../types";

export default function fix(options: IOptions, text: string): string {
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
