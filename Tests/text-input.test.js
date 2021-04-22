describe('Text Input', function () {
    it("should return the total cost of calls ", function () {
        let calculateFunction = calculate();

        calculateFunction.calculate2('call')
        assert.equal(calculateFunction.total(), 2.75);

    });
});