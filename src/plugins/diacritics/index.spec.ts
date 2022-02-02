import { fixDiacritics, removeDiacritics } from ".";

describe("Diacritics", () => {
  test("removeDiacritics", () => {
    expect(removeDiacritics("سَلام اُمیدِ مَن")).toBe("سلام امید من");
  });

  test("fixDiacritics", () => {
    expect(fixDiacritics("سَِلام  ِ")).toBe("سِلامِ");
  });
});
