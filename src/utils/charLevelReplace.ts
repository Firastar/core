export function charLevelReplace(
  text: string,
  from: string,
  to: string,
): string {
  const fromChars = from.split("");
  const toChars = to.split("");
  for (const i in fromChars) {
    if (Object.prototype.hasOwnProperty.call(fromChars, i)) {
      text = text.replace(new RegExp(fromChars[i], "g"), toChars[i]);
    }
  }
  return text;
}
