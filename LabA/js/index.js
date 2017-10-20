/*jslint browser: true*/
/*global $, jQuery, alert, Handlebars*/

//mainContent
//searchResults
//settingsPage
//aboutPage
function showSearchResults() {
    "use strict";
    $('#mainContent').css('display', 'none');
    $('#searchResults').css('display', 'block');
    $('#settingsPage').css('display', 'none');
    $('#aboutPage').css('display', 'none');
}

function showMainContent() {
    "use strict";
    $('#mainContent').css('display', 'block');
    $('#searchResults').css('display', 'none');
    $('#settingsPage').css('display', 'none');
    $('#aboutPage').css('display', 'none');
}

function showSettingsContent() {
    "use strict";
    $('#mainContent').css('display', 'none');
    $('#searchResults').css('display', 'none');
    $('#settingsPage').css('display', 'block');
    $('#aboutPage').css('display', 'none');
}

function showAboutContent() {
    "use strict";
    $('#mainContent').css('display', 'none');
    $('#searchResults').css('display', 'none');
    $('#settingsPage').css('display', 'none');
    $('#aboutPage').css('display', 'block');
}

//contactForm
//informationPage

function showInformation() {
    "use strict";
    $('#contactForm').css('display', 'none');
    $('#informationPage').css('display', 'block');
}

function showContactForm() {
    "use strict";
    $('#contactForm').css('display', 'block');
    $('#informationPage').css('display', 'none');
}


function foo() {
    "use strict";
    $(window).on('load', function () {
        showMainContent();
        showInformation();
        $('#boopModal').modal('show');
        $('#boopModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });
}

foo();

function checkIfCodeExists() {
    "use strict";
    $('#boopModal').modal('hide');
    //$('#enterCodeInputBox').val();
    var errorMessageBox = document.getElementById("enterCodeErrorMessage");
    errorMessageBox.innerHTML = "Working...";
    //errorMessageBox.innerHTML = input;
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/hosts/UzyA17MZjUX0ZnY4RMCyAIFZgw63',
        success: function (response) {
            errorMessageBox.innerHTML = response;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            errorMessageBox.innerHTML = textStatus;
        }
    });
}
