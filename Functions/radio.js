function radioFunction() {

    var theCallTotal = 0;

    var theSmsTotal = 0;


    function setCallCost() {
        theCallTotal += 2.75;
    }

    function getCallCost() {
        return theCallTotal;
    }

    function setSmsCost() {
        theSmsTotal += 0.75;
    }

    function getSmsCost() {
        return theSmsTotal
    }


    function makeCall() {
        callTotal += theCallTotal;
    }

    function sendSms() {
        smsTotal += theSmsTotal;
    }


    function getTotal() {
        return callTotal + smsTotal;
    }



    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        makeCall,
        sendSms,
        getTotal
        
    }

}