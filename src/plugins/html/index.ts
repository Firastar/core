import { preservation } from "../../utils/preservation";

export const html: string[] = [];

// preserves all html tags in the text
export function preserveHtml(text: string): string {
  return text.replace(/<\/?[a-z][^>]*?>/gi, function(matched) {
    html.push(matched);
    return preservation("html");
  });
}

// bringing back HTML tags
export function restoreHtml(text: string): string {
  return text.replace(
    new RegExp(`[ ]?${preservation("html").trim()}[ ]?`, "g"),
    () => html.shift() as string,
  );
}
