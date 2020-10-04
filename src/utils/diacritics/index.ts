import { persianDiacritic } from "../../const";

export function fixDiacritics(text: string): string {
  return (
    text
      // cleans zwnj before diacritic characters
      .replace(new RegExp("\u200c([" + persianDiacritic + "])", "g"), "$1")

      // cleans more than one diacritic characters
      .replace(
        new RegExp("(.*)([" + persianDiacritic + "]){2,}(.*)", "g"),
        "$1$2$3",
      )

      // cleans spaces before diacritic characters
      .replace(new RegExp("(\\S)[ ]+([" + persianDiacritic + "])", "g"), "$1$2")
  );
}

export function removeDiacritics(text: string): string {
  return (
    text

      // removes all diacritic characters
      .replace(new RegExp("[" + persianDiacritic + "]+", "g"), "")
  );
}
