import { preservation } from "../../utils/preservation";

export const comment: string[] = [];

// preserves all html comments in the text
export function preserveComment(text: string): string {
  return text.replace(/<!--[\s\S]*?-->/g, function(matched) {
    comment.push(matched);
    return preservation("comment");
  });
}

// bringing back HTML comments
export function restoreComment(text: string): string {
  return text.replace(
    new RegExp(`[ ]?${preservation("comment").trim()}[ ]?`, "g"),
    () => comment.shift() as string,
  );
}
