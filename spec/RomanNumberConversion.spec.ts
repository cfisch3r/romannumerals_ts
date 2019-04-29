import convert from "../src/RomanNumberConversion";

describe('Roman Numbers Conversion can handle Numbers', () => {

    it('with a single Roman Digit.', () => {
        let romanNumber = convert(1);
        expect(romanNumber).toBe("I");
        romanNumber = convert(5);
        expect(romanNumber).toBe("V");
    });

    it('with a Combination of Roman Digits.', () => {
        let romanNumber = convert(1666);
        expect(romanNumber).toBe("MDCLXVI");
    });

    it('with multiple identical Roman Digits.', () => {
        let romanNumber = convert(3);
        expect(romanNumber).toBe("III");
    });

    it('where Values results from Substraction.', () => {
        let romanNumber = convert(999);
            expect(romanNumber).toBe("CMXCIX");
        romanNumber = convert(444);
        expect(romanNumber).toBe("CDXLIV");
    });

    it('with a Combination of all Cases.', () => {
        let romanNumber = convert(1984);
        expect(romanNumber).toBe("MCMLXXXIV");
    });
});
