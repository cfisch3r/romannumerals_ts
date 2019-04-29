import convert from "../src/RomanNumberConversion";

describe('Roman Numbers Conversion should...', () => {

    it('convert numbers into their single Roman Digit Representation.', () => {
        let romanNumber = convert(1);
        expect(romanNumber).toBe("I");
        romanNumber = convert(5);
        expect(romanNumber).toBe("V");
    });

    it('represent numbers addition Roman Digit Representation.', () => {
        let romanNumber = convert(1666);
        expect(romanNumber).toBe("MDCLXVI");
    });

});
