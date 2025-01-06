const StringCalculator = require("./script");

describe("StringCalculator", () => {
  const calc = new StringCalculator();

  test("should return 0 for an empty string", () => {
    expect(calc.add("")).toBe(0);
  });
});
