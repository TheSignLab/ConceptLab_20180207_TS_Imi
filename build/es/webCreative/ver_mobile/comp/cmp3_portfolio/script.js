$(document).ready(function () {
    var CurrentTab = 0;
    var parent = $(".project-wrapper");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }

    function isOdd(num) {
        return num % 2;
    }
    var parent = $(".project-wrapper");

    $(".project-wrapper .project").each(function (index) {
        if(!isOdd(index)){
            $(this).children().last().addClass("ts-bg").addClass("c0");
        }
    });
    
});
