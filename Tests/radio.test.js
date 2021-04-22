describe('Radio Bill', function () {
    it("should be able to use the call cost set", function () {
        let radioset = radioFunction();

        radioset.makeCall();

        assert.equal(2.75, radioset.getTotal());
        assert.equal(2.75, radioset.getCallCost());
        assert.equal(0.00, radioset.getSmsCost());
    });

});