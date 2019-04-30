import convert from "../src/RomanNumeralConversion";

describe('Roman Numeral Conversion should process Numbers consisting of', () => {

    test('a single Roman Numeral.', () => {
        let romanNumber = convert(1);
        expect(romanNumber).toBe("I");
        romanNumber = convert(5);
        expect(romanNumber).toBe("V");
    });

    test('an additive Combination of Roman Numerals.', () => {
        let romanNumber = convert(1666);
        expect(romanNumber).toBe("MDCLXVI");
    });

    test('multiple identical Roman Numerals.', () => {
        let romanNumber = convert(3);
        expect(romanNumber).toBe("III");
    });

    test('a substractive Combination of Roman Numerals.', () => {
        let romanNumber = convert(999);
            expect(romanNumber).toBe("CMXCIX");
        romanNumber = convert(444);
        expect(romanNumber).toBe("CDXLIV");
    });

    test('a complex Combination of different Roman Numerals.', () => {
        let romanNumber = convert(1984);
        expect(romanNumber).toBe("MCMLXXXIV");
    });
});
