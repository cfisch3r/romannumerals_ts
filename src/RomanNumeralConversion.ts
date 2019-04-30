class RomanNumeral {
    constructor(public value: number, public symbol: String){
    }
}

const romanNumerals = [
                new RomanNumeral(1000, "M"),
                new RomanNumeral(900, "CM"),
                new RomanNumeral(500, "D"),
                new RomanNumeral(400, "CD"),
                new RomanNumeral(100, "C"),
                new RomanNumeral(90, "XC"),
                new RomanNumeral(50, "L"),
                new RomanNumeral(40, "XL"),
                new RomanNumeral(10, "X"),
                new RomanNumeral(9, "IX"),
                new RomanNumeral(5, "V"),
                new RomanNumeral(4, "IV"),
                new RomanNumeral(1,"I")];

export default function convert(number: number) :string {
    let romanNumber :string = "";
    for (let numeral of romanNumerals) {
        while (number/numeral.value >= 1) {
            romanNumber += numeral.symbol;
            number -= numeral.value;
        }
    }

    return romanNumber;
}
