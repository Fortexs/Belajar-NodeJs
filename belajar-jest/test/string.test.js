test("string", () => {
    const name = "Nanda Ikhwanul Nadlirin";

    expect(name).toBe("Nanda Ikhwanul Nadlirin");
    expect(name).toMatch(/Nanda/);
});