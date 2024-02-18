describe("Mock function 'jest.fn()'", () => {
  test("returns undefined by default", () => {
    const mock = jest.fn();

    const result = mock("foo");

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
  });

  test("mock implementation", () => {
    const mock = jest.fn(() => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });

  test("also mock implementation", () => {
    const mock = jest.fn().mockImplementation(() => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });

  test("mock implementation one time", () => {
    const mock = jest.fn().mockImplementationOnce(() => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");

    // second 'call'
    expect(mock("baz")).toBeUndefined();
    expect(mock).toHaveBeenCalledWith("baz");
  });

  test("mock return value", () => {
    // shortcut for jest.fn().mockImplementation(()=> value);
    const mock = jest.fn();
    mock.mockReturnValue("bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });

  test("mock promise resolution", async () => {
    const mock = jest.fn();
    mock.mockImplementation(() => Promise.resolve("bar"));

    const result = await mock("foo");
    expect(result).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });
});

describe("Dependency injection", () => {
  const doAdd = (a, b, callback) => {
    return callback(a + b);
  };

  test("calls callback with arguments added", () => {
    const mockCallback = jest.fn();
    doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);

    const mockCallback2 = jest.fn();
    mockCallback2.mockImplementation(() => 10);
    const result = doAdd(5, 3, mockCallback2);
    expect(mockCallback2).toHaveBeenCalledWith(8);
    expect(result).toBe(10);
  });
});
