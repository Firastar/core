export function trim(text: string): string {
  return (
    text

      // removes space/tab/zwnj/nbsp from the beginning of the new-lines
      .replace(/([\n]+)[ \t\u200c\u00a0]*/g, "$1")

      // removes spaces, tabs, zwnj, direction marks and new lines from
      // the beginning and end of text
      // @REF: http://stackoverflow.com/a/38490203
      .replace(/^[\s\u200c\u200e\u200f]+|[\s\u200c\u200e\u200f]+$/g, "")
  );
}
