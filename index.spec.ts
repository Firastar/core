import { firast } from "./index";

describe("Firast", () => {
  test("cleanup simple sentences", () => {
    expect(
      firast(
        "فيراستار به شما كمك مي كند تا متون فارسي زيبا تر و درست تري بنويسيد .",
      ),
    ).toBe(
      "فیراستار به شما کمک می‌کند تا متون فارسی زیباتر و درست‌تری بنویسید.",
    );
  });
});
