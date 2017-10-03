/*jslint browser: true*/
function getRequiredScore() {
    "use strict";
    var currentScore = ($("#currentGrade").val())/100;
    var desiredScore = ($("#desiredGrade").val())/100;
    var weight = ($("#weight").val())/100;
    var min = parseInt(((desiredScore-((1-weight)*currentScore))/weight)*100);
    $("#minimumScore").text("The minimum score you can get is: "+min+"%");
}
