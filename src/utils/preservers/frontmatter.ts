import { preservation } from "./preservation";

export const frontmatter: string[] = [];

// preserves frontmatter data in the markdown
export function preserveFrontmatter(text: string): string {
  return text.replace(/^ ---[\S\s]*?---\n/g, function(matched) {
    frontmatter.push(matched);
    return preservation("frontmatter");
  });
}

// bringing back frontmatter
export function restoreFrontmatter(text: string): string {
  return text.replace(
    new RegExp(`[ ]?${preservation("frontmatter").trim()}[ ]?`, "g"),
    () => frontmatter.shift() as string,
  );
}
