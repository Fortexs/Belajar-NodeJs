import { calculate } from "../src/sum";

test("Calculate Test", () => {
    const callback = jest.fn();

    calculate([20,30,40,10], callback);
    calculate([20,10,20,10], callback);

    expect(callback.mock.calls.length).toBe(2);
    expect(callback.mock.calls[0][0]).toBe(100);
    expect(callback.mock.calls[1][0]).toBe(60);

    console.info(callback.mock.calls);


})