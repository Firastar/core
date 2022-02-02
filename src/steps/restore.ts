import { restoreBrace } from "../plugins/brace";
import { restoreBracket } from "../plugins/bracket";
import { restoreComment } from "../plugins/comment";
import { restoreEntity } from "../plugins/entity";
import { restoreFrontmatter } from "../plugins/frontmatter";
import { restoreHtml } from "../plugins/html";
import { restoreNbsp } from "../plugins/nbsp";
import { restoreUri } from "../plugins/uri";
import { IOptions } from "../types";

export default function restore(options: IOptions, text: string): string {
  if (options.preserveEntity) {
    text = restoreEntity(text);
  }

  if (options.preserveNbsp) {
    text = restoreNbsp(text);
  }

  if (options.preserveUri) {
    text = restoreUri(text);
  }

  if (options.preserveBrace) {
    text = restoreBrace(text);
  }

  if (options.preserveBracket) {
    text = restoreBracket(text);
  }

  if (options.preserveComment) {
    text = restoreComment(text);
  }

  if (options.preserveHtml) {
    text = restoreHtml(text);
  }

  if (options.preserveFrontmatter) {
    text = restoreFrontmatter(text);
  }
  return text;
}
