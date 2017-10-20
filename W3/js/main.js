/*jslint browser: true*/
function getRequiredScore() {
    "use strict";
    var currentScore = ($("#currentGrade").val()) / 100;
    var desiredScore = ($("#desiredGrade").val()) / 100;
    var weight = ($("#weight").val()) / 100;
    var min = parseInt(((desiredScore - ((1 - weight) * currentScore)) / weight) * 100);
    generateString(min);
}

function generateString(min) {
    "use strict";
    var tempDate = document.getElementById("dateThing").value;
    var currentDate = new Date();
    var testDate = new Date(tempDate);
    currentDate = currentDate.getTime();
    testDate = testDate.getTime();
    
    //getDiff(currentDate, testDate);
    //var timeDiff = testDate.getTime() - currentDate.getTime();
    //var diffDays = timeDiff / (1000 * 3600 * 24);
    $("#minimumScore").text("You have "+Date.daysBetween(currentDate, testDate)+" days to get a "+ min+"% on your test.");
}



Date.daysBetween = function( currentDate, testDate ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Calculate the difference in milliseconds
  var difference_ms = testDate - currentDate;
    
  // Convert back to days and return
  return Math.round(difference_ms/one_day); 
}
