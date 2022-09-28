import { sayHelloAsync } from "../src/asyncronus"


test("test async function", async () => {
    const result = await sayHelloAsync("nanda");
    expect(result).toBe("Hello nanda");
});

test("test async matchers", async () => {
    await expect(sayHelloAsync("nanda")).resolves.toBe("Hello nanda");
    await expect(sayHelloAsync()).rejects.toBe("ini salah") ;
});