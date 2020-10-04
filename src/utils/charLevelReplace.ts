export function charLevelReplace(
  text: string,
  from: string,
  to: string,
): string {
  const fromChars = from.split("");
  const toChars = to.split("");
  for (const i in fromChars) {
    text = text.replace(new RegExp(fromChars[i], "g"), toChars[i]);
  }
  return text;
}
