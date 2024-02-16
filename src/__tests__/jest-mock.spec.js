import * as app from "../example/app.js";
import * as math from "../example/math.js";

describe("Mock with jest.fn", () => {
  test("calls math.add", () => {
    math.add = jest.fn();
    const result = app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
    expect(result).toBeUndefined();
  });

  test("calls math.subtract", () => {
    math.subtract = jest.fn().mockImplementation((x, y) => y - x);
    const result = app.doSubtract(4, 2);
    expect(math.subtract).toHaveBeenCalledWith(4, 2);
    expect(result).toBe(-2);
  });
});

describe("Check if mocks were local to the test", () => {
  const result = app.doAdd(1, 2);
  expect(result).toBe(3);

  const result2 = app.doSubtract(1, 2);
  expect(result2).toBe(-1);
});
