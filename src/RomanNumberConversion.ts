class RN {
    constructor(public value: number, public symbol: String){
    }
}

const nrs = [romanDigit(5, "V"),
            romanDigit(1,"I")];

function romanDigit(value: number, symbol: string) {
    return new RN(value, symbol);
}

export default function convert(number: number) :String {
    for (let nr of nrs) {
        if (number === nr.value)
            return nr.symbol;
    }
}
