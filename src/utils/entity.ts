const entities = {
  "sbquo;": "\u201a",
  "lsquo;": "\u2018",
  "lsquor;": "\u201a",
  "ldquo;": "\u201c",
  "ldquor;": "\u201e",
  "rdquo;": "\u201d",
  "rdquor;": "\u201d",
  "rsquo;": "\u2019",
  "rsquor;": "\u2019",
  "apos;": "'",
  "QUOT;": '"',
  QUOT: '"',
  "quot;": '"',
  quot: '"',
  "zwj;": "\u200d",
  "ZWNJ;": "\u200c",
  "zwnj;": "\u200c",
  "shy;": "\u00ad", // wrongly used as zwnj
};

export function decodeHTMLEntities(text: string): string {
  return text.replace(/&(#?[^;\W]+;?)/g, function(matched, match) {
    let n;
    if ((n = /^#(\d+);?$/.exec(match))) {
      return String.fromCharCode(parseInt(n[1], 10));
    } else if ((n = /^#[Xx]([A-Fa-f0-9]+);?/.exec(match))) {
      return String.fromCharCode(parseInt(n[1], 16));
    } else {
      const hasSemi = /;$/.test(match);
      const withoutSemi = hasSemi ? match.replace(/;$/, "") : match;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const target = entities[withoutSemi] || (hasSemi && entities[match]);

      if (typeof target === "number") {
        return String.fromCharCode(target);
      } else if (typeof target === "string") {
        return target;
      } else {
        return "&" + match;
      }
    }
  });
}
