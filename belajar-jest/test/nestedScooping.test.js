beforeAll(() => console.info("Awal dari semuanya"));
afterAll(() => console.info("Akhir dari semuanya"));
beforeEach(() => console.info("before Each Outer"));
afterEach(() => console.info("After Each outer"));

describe("nestedScooping", () => {

    beforeAll(() => console.info("before NestedScooping"));
    afterAll(() => console.info("after NestedScooping"));
    beforeEach(() => console.info("before inner 1"));
    afterEach(() => console.info("after inner 1"));

    test("test inner", () => console.info("ini test inner 1"));

    describe("nestedScooping2", () => {
        beforeEach(() => console.info("before inner 2"));
        afterEach(() => console.info("after inner 2"));

    test("test inner", () => console.info("ini test inner 2"));

    })
})