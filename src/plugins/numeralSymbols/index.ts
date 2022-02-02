export function fixNumeralSymbols(text: string): string {
  return (
    text

      // replaces english percent signs (U+066A)
      // @Ref ebraminio/persiantools
      .replace(/([۰-۹]) ?%/g, "$1٪")

      // replaces dots between numbers into decimal separator (U+066B)
      // @Ref ebraminio/persiantools
      .replace(/([۰-۹])\.(?=[۰-۹])/g, "$1٫")

      // replaces commas between numbers into thousands separator (U+066C)
      // @Ref languagetool-org
      .replace(/([۰-۹]),(?=[۰-۹])/g, "$1٬")
  );
}
