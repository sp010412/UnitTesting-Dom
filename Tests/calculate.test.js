describe('Calculate Bill', function () {
    it("should return the total of calls ", function () {
        let calculateFunction = calculate();

        calculateFunction.calculate2('call')
        calculateFunction.calculate2('call')
        assert.equal(calculateFunction.total(), 5.5);

    });

    it("should return the total of sms's ", function () {
        let calculateFunction = calculate();

        calculateFunction.calculate2('sms')
        calculateFunction.calculate2('sms')
        calculateFunction.calculate2('sms')
        assert.equal(calculateFunction.total(), 2.25);

    });

    it("should return the total of calls and sms's ", function () {
        let calculateFunction = calculate();

        calculateFunction.calculate2('call')
        calculateFunction.calculate2('sms')
        calculateFunction.calculate2('call')
        calculateFunction.calculate2('sms')
        assert.equal(calculateFunction.total(), 7);

    });

    describe('Warning & Danger', function () {

        it(("should return class name 'warning' when total reaches 20"), function () {
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

        it(("should return class name 'danger' when total reaches 30"), function () {
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
            assert.equal(calculateFunction.color(), "danger");
        });
    });

});