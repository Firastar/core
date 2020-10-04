import { preservation } from "./preservation";

export const entity: string[] = [];

// preserves all html entities in the text
export function preserveEntity(text: string): string {
  return text.replace(/&(#?[^;\W]+;?)/g, function(matched) {
    entity.push(matched);
    return preservation("entity");
  });
}

// bringing back entities
export function restoreEntity(text: string): string {
  return text.replace(
    new RegExp(`[ ]?${preservation("entity").trim()}[ ]?`, "g"),
    () => entity.shift() as string,
  );
}
