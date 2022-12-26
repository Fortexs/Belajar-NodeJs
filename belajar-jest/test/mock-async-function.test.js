import { getBalance } from "../src/asyncronus";
test("mock async function", async () => {

    const from = jest.fn();
    from.mockResolvedValueOnce(1000);

    expect(getBalance("Nanda", from)).resolves.toEqual({
        name: "Nanda",
        balance : 1000
    })

    expect(from.mock.calls.length).toBe(1);
    expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing ("Mock async function rejected", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("ups"));

    await getBalance("Nanda", from)
})

test("Mock async function error matchers", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");

    await expect(getBalance("Nanda",from)).rejects.toBe("Rejected")
})