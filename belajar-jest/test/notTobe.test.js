test("variable", () => {

    const name = "Nanda ikhwanul Nadlirin";

    expect(name).not.toBe("Bima");
    expect(name).not.toEqual("hans");
    expect(name).not.toMatch(/rassel/);
});

test("num", () => {

    const value = 10 + 2;

    expect(value).not.toBeGreaterThan(13);
    expect(value).not.toBeLessThan(4);
    expect(value).not.toBe(1);
});