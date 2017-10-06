/*jslint browser: true*/

var $ = function (id) {
    return document.getElementById(id);
};

var setFV = function () {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value) / 100;
    var years = parseInt($("years").value);

    $("future_value").value = investment * Math.pow((1 + rate), years);
};

var verify = function (id, minVal, maxVal) {
    "use strict";
    var temp = parseFloat($(id).value);
    if (isNaN(temp) || temp <= minVal || temp > maxVal) {
        $(id).style.borderColor = "red";
        $(id).focus();
        return false;
    } else {
        $(id).style.borderColor = "green";
        return true;
    }
};

var processEntries = function () {
    if (verify("investment", 0, 100000) && verify("rate", 0, 15) && verify("years", 0, 50)) {
        setFV();
    } else {
        alert("error");
    }
};








window.onload = function () {
    $("calculate").onclick = processEntries;
};
