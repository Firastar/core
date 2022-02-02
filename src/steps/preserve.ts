import { preserveBrace } from "../plugins/brace";
import { preserveBracket } from "../plugins/bracket";
import { preserveComment } from "../plugins/comment";
import { preserveEntity } from "../plugins/entity";
import { preserveFrontmatter } from "../plugins/frontmatter";
import { preserveHtml } from "../plugins/html";
import { preserveNbsp } from "../plugins/nbsp";
import { preserveUri } from "../plugins/uri";
import { IOptions } from "../types";

export default function preserve(options: IOptions, text: string): string {
  if (options.preserveFrontmatter) {
    text = preserveFrontmatter(text);
  }

  if (options.preserveHtml) {
    text = preserveHtml(text);
  }

  if (options.preserveComment) {
    text = preserveComment(text);
  }

  if (options.preserveBrace) {
    text = preserveBrace(text);
  }

  if (options.preserveBracket) {
    text = preserveBracket(text);
  }

  if (options.preserveUri) {
    text = preserveUri(text);
  }

  if (options.preserveNbsp) {
    text = preserveNbsp(text);
  }

  if (options.preserveNbsp) {
    text = preserveNbsp(text);
  }

  if (options.preserveEntity) {
    text = preserveEntity(text);
  }

  return text;
}
