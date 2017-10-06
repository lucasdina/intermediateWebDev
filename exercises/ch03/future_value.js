// get user entries
var addMore = false,
    futureValue,
    tempInterest;
do {
    ////////////////////////////// Investment
    do {
        var investment = prompt("Enter investment amount as xxxxx.xx", 10000);
        investment = parseFloat(investment);
        if (isNaN(investment)) {
            alert("Investment must be a number.");
        }
    }

    while (isNaN(investment));
    ////////////////////////////// Rate
    do {
        var rate = prompt("Enter interest rate as xx.x", 7.5);
        rate = parseFloat(rate);
        if (isNaN(rate)) {
            alert("Rate must be a number.");
        }
        if (rate <= 0 || rate >= 15) {
            alert("Rate must be between 0 and 15");
        }
    }

    while (rate <= 0 || rate >= 15 || isNaN(rate));
    ////////////////////////////// Years
    do {
        var years = prompt("Enter number of years", 10);
        years = parseInt(years);
        if (isNaN(years)) {
            alert("Years must be a number.");
        }
    }

    while (isNaN(years));

document.write("<br><br><br>===================================================<br>");
    document.write("Investment amount = " + investment);
    document.write(" Interest rate = " + rate);
    document.write(" Years = " + years + "<br><br>");

    // calulate future value
    futureValue = investment;
    for (var i = 1; i <= years; i++) {

        tempInterest = 0;
        tempInterest = futureValue * rate / 100;
        futureValue += tempInterest + futureValue;
        document.write("Year= " + i + " Interest=" + tempInterest +
            " Value= " + parseInt(futureValue) + "<br>");
    }
    futureValue = parseInt(futureValue);





    addMore = confirm("Would you like to add more information?");

}
while (addMore);
