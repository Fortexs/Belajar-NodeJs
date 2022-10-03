import { sumAll } from "../src/sum"

describe("ketika sayamen jumlahkan", () => {
    it("akan mendapatkan", () => {
        expect(sumAll([10, 10, 10])).toBe(30);
    });
})