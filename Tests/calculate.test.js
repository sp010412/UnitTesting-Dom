describe('Calculate Bill', function () {
    it("should return the total cost of calls ", function () {
        let calculateFunction = calculate();

        calculateFunction.calculate2('call')
        assert.equal(calculateFunction.total(), 2.75);

    });

    it("should return the total cost of sms's ", function () {
        let calculateFunction = calculate();

        calculateFunction.calculate2('sms')
        assert.equal(calculateFunction.total(), 0.75);

    });

    it("should return the total cost of calls and sms's ", function () {
        let calculateFunction = calculate();

        calculateFunction.calculate2('call')
        assert.equal(calculateFunction.total(), 2.75);

    });

    describe('testing the colors', function () {

        it('should return warning', function () {
            let calculateFunction = calculate();

            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');



            assert.equal(calculateFunction.total(), 22);
            assert.equal(calculateFunction.color(), "warning");
        });

        it('should return critical', function () {
            let calculateFunction = calculate();

            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');
            calculateFunction.calculate2('call');



            assert.equal(calculateFunction.total(), 38.5);
            assert.equal(calculateFunction.color(), "critical");
        });
    });


});