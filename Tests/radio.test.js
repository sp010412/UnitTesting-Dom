describe('Radio Bill', function () {
    it("should return the total amount of calls where call is 2.75 each 3 calls are made", function () {
        let radioBill = radioFunction();

        radioBill.radioFunction1('call');
        radioBill.radioFunction1('call');
        radioBill.radioFunction1('call');

        assert.equal(radioBill.totalCalls(), 8.25);
    });

    it("should return the total amount of calls where call is 2.75 each and 6 calls are made", function () {
        let radioBill = radioFunction();

        radioBill.radioFunction1('call');
        radioBill.radioFunction1('call');
        radioBill.radioFunction1('call');
        radioBill.radioFunction1('call');
        radioBill.radioFunction1('call');
        radioBill.radioFunction1('call');

        assert.equal(radioBill.totalCalls(), 16.5);
    });

    it("should return the total amount of sms's where sms is 0.75 each 4 sms's are sent", function () {
        let radioBill = radioFunction();

        radioBill.radioFunction1('sms');
        radioBill.radioFunction1('sms');
        radioBill.radioFunction1('sms');

        assert.equal(radioBill.totalSms(), 2.25);
    });

    it("should return the total amount of sms's where sms is 0.75 each 8 sms's are sent", function () {
        let radioBill = radioFunction();

        radioBill.radioFunction1('sms');
        radioBill.radioFunction1('sms');
        radioBill.radioFunction1('sms');
        radioBill.radioFunction1('sms');
        radioBill.radioFunction1('sms');
        radioBill.radioFunction1('sms');
        radioBill.radioFunction1('sms');
        radioBill.radioFunction1('sms');

        assert.equal(radioBill.totalSms(), 6);
    });

    describe('Waning & Critical', function () {

        it("should return class name 'warning' when total reaches 30", function () {
            let radioBill = radioFunction();

            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');

            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');

            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');

            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');

            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');

            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');

            assert.equal(radioBill.total(), 35);
            assert.equal(radioBill.color(), 'warning');

        });

        it("should return class name 'critical' when total reaches 50", function () {
            let radioBill = radioFunction();

            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');

            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');

            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');

            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');

            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');

            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');

            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');
            radioBill.radioFunction1('sms');

            radioBill.radioFunction1('call');
            radioBill.radioFunction1('call');

            assert.equal(radioBill.total(), 53.75);
            assert.equal(radioBill.color(), 'critical');

        });
    });
});