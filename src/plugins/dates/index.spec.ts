import { fixDates } from ".";

describe("Dates", () => {
  test("fixDates", () => {
    expect(fixDates("09-09-1399")).toBe("1399/09/09");
    expect(fixDates("1399-09-09")).toBe("1399/09/09");
    expect(fixDates("۱۳۹۹-۰۱-۰۱")).toBe("۱۳۹۹/۰۱/۰۱");
    expect(fixDates("۰۱-۰۱-۱۳۹۹")).toBe("۱۳۹۹/۰۱/۰۱");
    expect(fixDates("۰۱-12-1376")).toBe("1376/12/۰۱");
    expect(fixDates("۰3-۰۱-۱۳۹۹")).toBe("۱۳۹۹/۰۱/۰3");
    expect(fixDates("۰۱-۰2-۱۳۹۹")).toBe("۱۳۹۹/۰2/۰۱");
  });
});