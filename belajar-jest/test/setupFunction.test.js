import {sum} from "../src/sum.js" 


beforeAll(() => {
    console.info("before All")
});

afterAll(() => {
    console.info("before All")
});

beforeEach(() => {
    console.info("Before Each");
});
afterEach(() => {
    console.info("After Each");
});

test("first test", () => {
    expect(sum(10, 10)).toBe(20);
    console.info("first test")
});

test("first test", () => {
    expect(sum(10, 10)).toBe(20);
    console.info("Second test")
});


