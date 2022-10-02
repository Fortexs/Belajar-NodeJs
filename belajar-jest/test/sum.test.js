import {sum, sumAll} from "../src/sum";

test("test function sum 1", () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
});

test("test function sum 2", () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
});

test("test function sum 3", () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
});

test("test sumAll", () => {

    const numbers = [1,1,1,1,1];
    expect(sumAll(numbers)).toBe(5);
})