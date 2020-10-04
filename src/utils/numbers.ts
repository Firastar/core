import { arabicDigits, englishDigits, persianDigits } from "../const";
import { charLevelReplace } from "./charLevelReplace";

export function fixArabicNumbers(text: string): string {
  return (
    // replaces arabic numbers with their persian equivalent
    charLevelReplace(text, arabicDigits, persianDigits)
  );
}

export function fixEnglishNumbers(text: string): string {
  return (
    // replaces english numbers with their persian equivalent
    charLevelReplace(text, englishDigits, persianDigits)
  );
}
