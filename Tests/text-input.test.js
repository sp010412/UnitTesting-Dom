describe('Text Input', function () {
    it("should return calls total amount of 5.5 if 2 calls are made for 2.75 each", function () {
        let textBill = textBillTotal1();

        textBill.textBillTotal('call')
        textBill.textBillTotal('call')
        assert.equal(textBill.totalCalls(), 5.5);

    });

    it("should return calls total amount of 11 if 4 calls are made for 2.75 each", function () {
        let textBill = textBillTotal1();

        textBill.textBillTotal('call')
        textBill.textBillTotal('call')
        textBill.textBillTotal('call')
        textBill.textBillTotal('call')
        assert.equal(textBill.totalCalls(), 11);

    });

    it("should return smss total amount of 1.5 if 2 sms's are sent for 0.75 each ", function () {
        let textBill = textBillTotal1();

        textBill.textBillTotal('sms')
        textBill.textBillTotal('sms')
        assert.equal(textBill.totalSms(), 1.5);

    });

    it("should return sms's total amount of 4.5 if 6 sms's are sent for 0.75 each ", function () {
        let textBill = textBillTotal1();

        textBill.textBillTotal('sms')
        textBill.textBillTotal('sms')
        textBill.textBillTotal('sms')
        textBill.textBillTotal('sms')
        textBill.textBillTotal('sms')
        textBill.textBillTotal('sms')
        assert.equal(textBill.totalSms(), 4.5);

    });

    describe('Warning & Critical', function () {

        it("should return class name 'warning' when total reaches 30", function () {
            let textBill = textBillTotal1();

            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')

            assert.equal(textBill.total(), 38.5);
            assert.equal(textBill.color(), "warning");
        });

        it("should return class name 'critical' when total reaches 50", function () {
            let textBill = textBillTotal1();

            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('sms')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')
            textBill.textBillTotal('call')

            assert.equal(textBill.total(), 59.5);
            assert.equal(textBill.color(), "critical");
        });
    });
});