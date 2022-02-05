import { fixBracesSpacing } from ".";

describe("Braces", () => {
  test("fixBracesSpacing", () => {
    expect(fixBracesSpacing("شیر (سلطان جنگل) حیوان نجیبی نیست")).toBe("شیر (سلطان جنگل) حیوان نجیبی نیست");
    expect(fixBracesSpacing("شیر (   سلطان جنگل   ) حیوان نجیبی نیست")).toBe("شیر (سلطان جنگل) حیوان نجیبی نیست");
    expect(fixBracesSpacing("شیر[   سلطان جنگل   ] حیوان نجیبی نیست")).toBe("شیر [سلطان جنگل] حیوان نجیبی نیست");
    expect(fixBracesSpacing("شیر (   سلطان جنگل   )حیوان نجیبی نیست")).toBe("شیر (سلطان جنگل) حیوان نجیبی نیست");
    expect(fixBracesSpacing("شیر {   سلطان جنگل}حیوان نجیبی نیست")).toBe("شیر {سلطان جنگل} حیوان نجیبی نیست");
    expect(fixBracesSpacing("شیر (سلطان جنگل  )حیوان نجیبی نیست")).toBe("شیر (سلطان جنگل) حیوان نجیبی نیست");
    expect(fixBracesSpacing("شیر(   سلطان جنگل   )حیوان نجیبی نیست")).toBe("شیر (سلطان جنگل) حیوان نجیبی نیست");
    expect(fixBracesSpacing("شیر    (سلطان جنگل )حیوان نجیبی نیست")).toBe("شیر (سلطان جنگل) حیوان نجیبی نیست");
    expect(fixBracesSpacing("شیر    “Lion ”حیوان نجیبی نیست")).toBe("شیر “Lion” حیوان نجیبی نیست");
    expect(fixBracesSpacing("شیر    « Lion »حیوان نجیبی نیست")).toBe("شیر «Lion» حیوان نجیبی نیست");
  });
});