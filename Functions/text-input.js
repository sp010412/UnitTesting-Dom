function textBillTotal1() {
    var callsTotal = 0;
    var smsTotal = 0;

    function textBillTotal() {
        // get the value entered in the billType textfield
        var billTypeEntered = billTypeTextElement.value.trim();

        // update the correct total
        if (billTypeEntered === "call") {
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms") {
            smsTotal += 0.75;
        }
    }

    function totalCalls() {
        return callsTotal;
    }

    function totalSms() {
        return smsTotal;
    }

    function total() {
        return callsTotal + smsTotal;
    }

    function color() {

        if (total() >= 30 && total() < 50) {
            return "warning"
        }
        if (total() >= 50) {
            return "critical"
        }
    }

    return {
        textBillTotal,
        totalCalls,
        totalSms,
        total,
        color,
    }
}