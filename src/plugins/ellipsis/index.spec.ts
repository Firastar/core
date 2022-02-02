import { fixEllipsis } from ".";

describe("Ellipsis", () => {
  test("fixEllipsis", () => {
    expect(fixEllipsis("سلام . . .")).toBe("سلام… ");
    expect(fixEllipsis("سلام....")).toBe("سلام… ");
    expect(fixEllipsis("سلام....")).toBe("سلام… ");
    expect(fixEllipsis("سلام……")).toBe("سلام… ");
  });
});
