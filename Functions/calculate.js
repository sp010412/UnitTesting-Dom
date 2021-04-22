function calculate() {
    var billTotal = 0;

    function calculate2(billString) {
        var billItems = billString.split(",");
        
        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }
        }
    }

    function total() {
        return billTotal;
    }

    function color(){
        
if(total() >=20 && total()<30){
    return "warning"
    }
    if(total() >= 30){
        return "critical"
        }
}


    return {
        calculate2,
        total,
        color,
    }
}