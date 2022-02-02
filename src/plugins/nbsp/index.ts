import { preservation } from "../../utils/preservation";

export const nbsp: string[] = [];

// preserves all no-break space entities in the text
export function preserveNbsp(text: string): string {
  return text.replace(/(\[.*?\])/g, function(matched) {
    nbsp.push(matched);
    return preservation("nbsp");
  });
}

// bringing back nbsp
export function restoreNbsp(text: string): string {
  return text.replace(
    new RegExp(`[ ]?${preservation("nbsp").trim()}[ ]?`, "g"),
    () => nbsp.shift() as string,
  );
}
