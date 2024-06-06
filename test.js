const {sum, fromEuroToDollar, fromDollarToYen } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1000 dollars is around 146261 yens", () => {
 const yen = fromDollarToYen(1000);
 const expected = (1000 / 1.07) * 156.5;
 expect(yen).toBe(expected);
});