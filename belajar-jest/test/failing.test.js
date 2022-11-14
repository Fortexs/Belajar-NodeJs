import { sayHello } from "../src/sayHello"

test("sayHello yang harapanya gagal", () => {
    expect(sayHello("Nanda")).toBe("Hello Nanda")
})
test.failing("sayHello yang harapanya gagal", () => {
    expect(sayHello(null)).toBe("Hello Nanda")
})