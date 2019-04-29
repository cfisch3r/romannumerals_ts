import convert from "../src/RomanNumberConversion";

describe('Roman Numbers Conversion', () => {
    it('should convert numbers into their single Roman Number presentation.', () => {
        let romanNumber = convert(1);
        expect(romanNumber).toBe("I");
        romanNumber = convert(5);
        expect(romanNumber).toBe("V");
    })


});
