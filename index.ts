import { IOptions } from "./src/types";
import { defaultOptions, persianGlyphs } from "./src/constants";
import preserve from "./src/steps/preserve";
import prefix from "./src/steps/prefix";
import wordLevelFix from "./src/steps/wordLevelFix";
import fix from "./src/steps/fix";
import restore from "./src/steps/restore";
import postfix from "./src/steps/postfix";

export function firast(
  text: string,
  options: Partial<IOptions> = defaultOptions,
): string {
  // Complete options obj
  const combinedOptions = { ...defaultOptions, ...options };

  if (!text.trim()) {
    return text;
  }

  text = " " + text + " ";

  // --- START OF PRESERVE
  text = preserve(combinedOptions, text);
  // --- END OF PRESERVE

  // --- START OF PRE-FIX
  text = prefix(combinedOptions, text);
  // --- END OF PRE-FIX

  // --- START OF WORD-LEVEL-FIX
  text = wordLevelFix(combinedOptions, text);
  // --- END OF WORD-LEVEL-FIX

  // --- START OF FIX
  text = fix(combinedOptions, text);
  // --- END OF FIX

  // --- START OF RESTORE
  text = restore(combinedOptions, text);
  // --- END OF RESTORE

  // --- START OF POST-FIX
  text = postfix(combinedOptions, text);
  // --- END OF POST-FIX

  return text;
}
