test("numbers", () => {

    const value = 2 * 4;

    expect(value).toBeGreaterThan(7);
    expect(value).toBeGreaterThanOrEqual(8);

    expect(value).toBeLessThanOrEqual(9);
    expect(value).toBeLessThanOrEqual(8);

    expect(value).toBe(8);
})