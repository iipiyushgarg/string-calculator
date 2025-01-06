const StringCalculator = require("./script");

describe("StringCalculator", () => {
  const calc = new StringCalculator();

  test("should return 0 for an empty string", () => {
    expect(calc.add("")).toBe(0);
  });

  test("should return the number for a single number string", () => {
    expect(calc.add("1")).toBe(1);
  });

  test("should return the sum of two/multiple numbers separated by a comma", () => {
    expect(calc.add("1,2")).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => calc.add("1,-2,3")).toThrow(
      "Negative numbers not allowed: -2"
    );
  });
});
