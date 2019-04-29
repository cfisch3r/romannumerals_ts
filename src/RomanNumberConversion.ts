class RomanDigit {
    constructor(public value: number, public symbol: String){
    }
}

const romanDigits = [
                new RomanDigit(1000, "M"),
                new RomanDigit(500, "D"),
                new RomanDigit(100, "C"),
                new RomanDigit(50, "L"),
                new RomanDigit(10, "X"),
                new RomanDigit(5, "V"),
                new RomanDigit(1,"I")];

export default function convert(number: number) :string {
    let romanNumber :string = "";
    for (let digit of romanDigits) {
        if (number/digit.value >= 1) {
            romanNumber += digit.symbol;
            number -= digit.value;
        }
    }

    return romanNumber;
}
