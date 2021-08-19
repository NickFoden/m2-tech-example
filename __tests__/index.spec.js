import { formatAmount, subtract } from "../components/detailUtils";

describe("subtract works", () => {
  test("run a test", () => {

    const result = 2
    expect(subtract(4, 2)).toBe(result);
  })
});

describe("currency format handles en-GB currency", () => {
  test("smoke", () => {
    expect(typeof formatAmount).toBe("function")
  })
  test("handles value of 50", () => {
    const result = "£50"
    expect(formatAmount(50)).toBe(result);
  })
});
