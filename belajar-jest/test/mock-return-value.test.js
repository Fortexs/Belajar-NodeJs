import {calculateReturn}from "../src/sum.js"
test("Mock return value", () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(200);
    callback.mockReturnValueOnce(100);
    expect(calculateReturn([10,10,10],callback)).toBe(200);
    expect(calculateReturn([10,10,10],callback)).toBe(100);

    expect(callback.mock.results[0].value).toBe(200)
    expect(callback.mock.results[1].value).toBe(100)
})

// Logic Mocki mplementatioOnce()

test("Mock Implementation Once", () => {
    const callback = jest.fn();
    callback.mockImplementation((i) => {
        return i * 2
    })

    expect(calculateReturn([20,10,20,20], callback)).toBe(140);
    expect(calculateReturn([10,10,20,20], callback)).toBe(120);

    expect(callback.mock.results[0].value).toBe(140)
    expect(callback.mock.results[1].value).toBe(120)
})