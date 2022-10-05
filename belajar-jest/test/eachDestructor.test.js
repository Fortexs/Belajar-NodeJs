import { sumAll } from "../src/sum";

 const table = [
    {numbers: [10, 10, 10, 10], expected: 40},
    {numbers: [10, 10, 10, 10, 10, 10], expected: 60},
    {numbers: [10, 10, ], expected: 20},
 ];

    test.each(table)("test sumAll(%s) should result %i", ({numbers, expected}) => {
        expect(sumAll(numbers)).toBe(expected)
 })