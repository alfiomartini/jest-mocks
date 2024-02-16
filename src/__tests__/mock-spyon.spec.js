import * as app from "../example/app.js";
import * as math from "../example/math.js";

describe("Mocking using spyOn", () => {
  test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");

    // override de implementation
    addMock.mockImplementation((x, y) => "mock");

    expect(app.doAdd(1, 2)).toEqual("mock");
    expect(addMock).toHaveBeenCalledWith(1, 2);
    expect(math.add(1, 2)).toEqual("mock");
    expect(math.add).toHaveBeenCalledWith(1, 2);
    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
  });
});
