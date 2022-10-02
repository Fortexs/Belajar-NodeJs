import { callMe, MyException } from "../src/exception.js";

test("exceptions", () => {

    expect(() => callMe("nanda")).toThrow();
    expect(() => callMe("nanda")).toThrow(MyException);
    expect(() => callMe("nanda")).toThrow("kenapa error ?");
});

test("exceptions not happens", () => {
    
    expect(callMe("Samsul")).toBe("ok");
})