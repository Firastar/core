import { preservation } from "./preservation";

export const brace: string[] = [];

// preserves strings inside curly braces (`{}`)
export function preserveBrace(text: string): string {
  return text.replace(/(\[.*?\])/g, function(matched) {
    brace.push(matched);
    return preservation("brace");
  });
}

// bringing back braces
export function restoreBrace(text: string): string {
  return text.replace(
    new RegExp(`[ ]?${preservation("brace").trim()}[ ]?`, "g"),
    () => brace.shift() as string,
  );
}
