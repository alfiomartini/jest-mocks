import * as app from "../example/app.js";
import * as math from "../example/math.js";

jest.mock("../example/math.js");

describe("Jest.mock (mock modules)", () => {
  test("calls math.add mocked", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  test("calls math.multiply mocked", () => {
    app.doMultiply(1, 2);
    expect(math.multiply).toHaveBeenCalledWith(1, 2);
  });

  test("calls math.divide mocked", () => {
    app.doDivide(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  test("calls math.subtract mocked", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});
