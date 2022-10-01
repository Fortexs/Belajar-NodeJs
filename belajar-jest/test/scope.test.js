beforeAll(() => console.info("before all outer")); 
afterAll(() => console.info("After all outer")); 
beforeEach(() => console.info("before Each outer")); 
afterEach(() => console.info("after Each outer")); 

test("Scope Outer", () => console.info("Finish HIM"))

describe("Test", () => {
    beforeAll(() => console.info("Before All Inner"));
    afterAll(() => console.info("After All Inner"));
    beforeEach(() => console.info("Before Each Inner"));
    afterEach(() => console.info("after Each Inner"));

    test("Test Inner", () => console.info("Test Inner"))
})