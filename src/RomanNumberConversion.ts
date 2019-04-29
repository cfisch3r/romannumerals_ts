class RomanDigit {
    constructor(public value: number, public symbol: String){
    }
}

const romanDigits = [new RomanDigit(5, "V"),
                new RomanDigit(1,"I")];

export default function convert(number: number) :String {
    for (let digit of romanDigits) {
        if (number === digit.value)
            return digit.symbol;
    }
}
