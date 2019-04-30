class RomanDigit {
    constructor(public value: number, public symbol: String){
    }
}

const romanDigits = [
                new RomanDigit(1000, "M"),
                new RomanDigit(900, "CM"),
                new RomanDigit(500, "D"),
                new RomanDigit(400, "CD"),
                new RomanDigit(100, "C"),
                new RomanDigit(90, "XC"),
                new RomanDigit(50, "L"),
                new RomanDigit(40, "XL"),
                new RomanDigit(10, "X"),
                new RomanDigit(9, "IX"),
                new RomanDigit(5, "V"),
                new RomanDigit(4, "IV"),
                new RomanDigit(1,"I")];

export default function convert(number: number) :string {
    let romanNumber :string = "";
    for (let digit of romanDigits) {
        while (number/digit.value >= 1) {
            romanNumber += digit.symbol;
            number -= digit.value;
        }
    }

    return romanNumber;
}
