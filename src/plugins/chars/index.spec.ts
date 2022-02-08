import { fixNonPersianChars } from ".";
import { charLevelReplace } from "../../utils/charLevelReplace";

describe("Chars", () => {
  test("fixNonPersianChars", () => {
    expect(fixNonPersianChars("كمك های خیریه مردمی")).toBe("کمک های خیریه مردمی");
    expect(fixNonPersianChars("ڪمڪ هاي خیریه مردمی")).toBe("کمک های خیریه مردمی");
    expect(fixNonPersianChars("كمك هاى خيريه مردمی")).toBe("کمک های خیریه مردمی");
    expect(fixNonPersianChars("كمك هاۍ خىرىه مردمى")).toBe("کمک های خیریه مردمی");
    expect(fixNonPersianChars("كمڪ هاۍ خيرىه مردمۍ")).toBe("کمک های خیریه مردمی");
    expect(fixNonPersianChars("كمڪ هاۍ خېرىه مردمې")).toBe("کمک های خیریه مردمی");
    expect(fixNonPersianChars("كمڪ هاۍ خېرىہ مردمې")).toBe("کمک های خیریه مردمی");
    expect(fixNonPersianChars("كمڪ هاۍ خېرىە مردمې")).toBe("کمک های خیریه مردمی");
  });
});
