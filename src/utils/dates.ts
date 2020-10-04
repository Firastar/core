export function fixDates(text: string): string {
  return (
    text

      // re-orders date parts with slash as delimiter
      .replace(/([0-9۰-۹]{1,2})([/-])([0-9۰-۹]{1,2})\2([0-9۰-۹]{4})/g, function(
        matched,
        day,
        delimiter,
        month,
        year,
      ) {
        return year + "/" + month + "/" + day;
      })
  );
}
