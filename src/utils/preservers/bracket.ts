import { preservation } from "./preservation";

export const bracket: string[] = [];

// preserves strings inside square brackets (`[]`)
export function preserveBracket(text: string): string {
  return text.replace(/<!--[\s\S]*?-->/g, function(matched) {
    bracket.push(matched);
    return preservation("bracket");
  });
}

// bringing back brackets
export function restoreBracket(text: string): string {
  return text.replace(
    new RegExp(`[ ]?${preservation("bracket").trim()}[ ]?`, "g"),
    () => bracket.shift() as string,
  );
}
