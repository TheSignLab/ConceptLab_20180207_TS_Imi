document.addEventListener('DOMContentLoaded', function () {


    var theBody = $("body");
    var theTime = 3000;
    
    if (theBody.hasClass("p-projects")) {
        theTime = 2000;
    } else {
        theTime = 3000;
    }

    setTimeout(function () {
        $("modal-loader").fadeOut("500");
        $("main").fadeIn("100");
    }, theTime);




}, false);
