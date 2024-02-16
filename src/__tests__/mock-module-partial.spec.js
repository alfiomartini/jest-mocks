import * as app from "../example/app.js";
import * as math from "../example/math.js";

jest.mock("../example/math.js", () => {
  const originalModule = jest.requireActual("../example/math.js");
  return {
    __esModule: true,
    ...originalModule,
    add: jest.fn(),
    subtract: jest.fn(),
  };
});

describe("Jest.mock (mock modules)", () => {
  test("calls math.add mocked", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  test("calls math.subtract mocked", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });

  test("calls math.multiply not mocked", () => {
    const result = app.doMultiply(1, 2);
    expect(result).toBe(2);
  });

  test("calls math.divide not mocked", () => {
    const result = app.doDivide(1, 2);
    expect(result).toBe(0.5);
  });
});
