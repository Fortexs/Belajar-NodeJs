test("array", () => {

    const names = (["Nanda", "Ikhwanul", "Nadlirin"]);
    expect(names).toEqual(["Nanda", "Ikhwanul", "Nadlirin"]);
    expect(names).toContain("Nanda");
});

test("array object", () => {
    const persons = [
        {
            name: "Nanda"
        },
        {
            name: "Ikhwanul"
        }
    ]
    expect(persons).toContainEqual({
        name: "Nanda"
    });
});