import convert from "../src/RomanNumeralConversion";

describe('Roman Numeral Conversion should process Numbers consisting of', () => {

    test.each([[1,"I"],[5,"V"]])('a single Roman Numeral, e.g %i converts to %s',
        (nr, expectedRomanNumber) => {
        let romanNumber = convert(<number> nr);
        expect(romanNumber).toBe(expectedRomanNumber);
    });

    test('an additive Combination of Roman Numerals.', () => {
        let romanNumber = convert(1666);
        expect(romanNumber).toBe("MDCLXVI");
    });

    test('multiple identical Roman Numerals.', () => {
        let romanNumber = convert(3);
        expect(romanNumber).toBe("III");
    });

    test.each([[999,"CMXCIX"],[444,"CDXLIV"]])
        ('a substractive Combination of Roman Numerals, e.g. %i converts to %s',
            (number, expectedRomanNumber) => {
        let romanNumber = convert(<number> number);
        expect(romanNumber).toBe(expectedRomanNumber);
    });

    test('a complex Combination of different Roman Numerals.', () => {
        let romanNumber = convert(1984);
        expect(romanNumber).toBe("MCMLXXXIV");
    });
});
