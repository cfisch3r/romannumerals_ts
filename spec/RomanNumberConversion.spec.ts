import convert from "../src/RomanNumeralConversion";

describe('Roman Numeral Conversion should process Numbers consisting of', () => {

    it('a single Roman Numeral.', () => {
        let romanNumber = convert(1);
        expect(romanNumber).toBe("I");
        romanNumber = convert(5);
        expect(romanNumber).toBe("V");
    });

    it('an additive Combination of Roman Numerals.', () => {
        let romanNumber = convert(1666);
        expect(romanNumber).toBe("MDCLXVI");
    });

    it('multiple identical Roman Numerals.', () => {
        let romanNumber = convert(3);
        expect(romanNumber).toBe("III");
    });

    it('a substractive Combination of Roman Numerals.', () => {
        let romanNumber = convert(999);
            expect(romanNumber).toBe("CMXCIX");
        romanNumber = convert(444);
        expect(romanNumber).toBe("CDXLIV");
    });

    it('a complex Combination of different Roman Numerals.', () => {
        let romanNumber = convert(1984);
        expect(romanNumber).toBe("MCMLXXXIV");
    });
});
