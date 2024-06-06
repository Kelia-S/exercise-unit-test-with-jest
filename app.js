const sum = (a,b) => {
    return a + b;
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

function fromDollarToYen (dollars) {
    const euros = dollars / 1.07;
    const yen = euros * 156.5;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen };
