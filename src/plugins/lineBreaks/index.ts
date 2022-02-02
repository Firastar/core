export function fixLineBreaks(text: string): string {
  return (
    text

      // cleans more than two contiguous line-breaks
      .replace(/\n{2,}/g, "\n\n")
  );
}
