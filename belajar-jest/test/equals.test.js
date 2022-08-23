
// tobe adalah expektasi "nanda ikhwanul" selain itu error kurang lebih boolean
test("test toBe", () => {
    const name = "ikhwanul";
    const hello = `nanda ${name}`;

    expect(hello).toBe("nanda ikhwanul");
});


// toEqual adalah data harus sama
test("test toEqual", () => {
    let person = {id: "nanda"};
    Object.assign(person, {name: "Nanda"});

    expect(person).toEqual({id: "nanda", name: "Nanda"})
});