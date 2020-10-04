export function removeRLM(text: string): string {
  return (
    text
      /* converts Right-to-left marks followed by persian characters to 
            zero-width non-joiners (ZWNJ) */
      .replace(/([^a-zA-Z\-_])(\u200F)/g, "$1\u200c")
  );
}
