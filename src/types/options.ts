export interface IOptions {
  preserveFrontmatter: boolean;
  preserveHtml: boolean;
  preserveComment: boolean;
  preserveBrace: boolean;
  preserveBracket: boolean;
  preserveUri: boolean;
  preserveNbsp: boolean;
  preserveEntity: boolean;
  fixEOL: boolean;
  fixStandardChars: boolean;
  fixDashes: boolean;
  fixEllipsis: boolean;
  fixEnglishQuotes: boolean;
  removeRLM: boolean;
  fixZWNJ: boolean;
  fixArabicNumbers: boolean;
  skipMarkdownOrderedListsNumbersConversion: boolean;
  fixEnglishNumbers: boolean;
  fixNumeralSymbols: boolean;
  fixPunctuations: boolean;
  fixNonPersianChars: boolean;
  fixQuestionMarks: boolean;
  fixDates: boolean;

  fixHamzeh: boolean;
  fixArabicHamzeh: boolean;
  fixSuffixZwnj: boolean;
  fixPrefixZwnj: boolean;

  fixBracesSpacing: boolean;
  fixBracesSpacingInside: boolean;
  removeExtraMarks: boolean;
  fixPunctuationSpacing: boolean;
  removeKashidas: boolean;
  fixMiscSpacing: boolean;
  removeDiacritics: boolean;
  fixDiacritics: boolean;
  removeSpaces: boolean;

  fixLineBreaks: boolean;
  trim: boolean;
}
