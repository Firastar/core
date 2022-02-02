import { trim } from "../plugins/trim";
import { IOptions } from "../types";

export default function postfix(options: IOptions, text: string): string {
  if (options.trim) {
    text = trim(text);
  } else {
    // removes single space paddings around the string
    text = text.replace(/^[ ]/g, "").replace(/[ ]$/g, "");
  }
  return text;
}
