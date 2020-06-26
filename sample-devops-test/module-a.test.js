const { convertToOrdinalNumber } = require('./module-a');

describe("Ordinal Number", () => {
    test("101 should be 101st", () => {
        expect(convertToOrdinalNumber(101)).toBe('101st');
    });

    test("1012 should be 1012nd", () => {
        expect(convertToOrdinalNumber(1012)).toBe('1012nd');
    });

    test("3 should be 3rd", () => {
        expect(convertToOrdinalNumber(3)).toBe('3rd');
    });
})