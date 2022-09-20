import { CallMe, MyException } from "../src/exception";

test("exceptions", () => {

    expect(() => CallMe("nanda").toThrow());
    expect(() => CallMe("nanda").toThrow(MyException));
    expect(() => CallMe("nanda").toThrow("wooyoyoyo"));
});