$(document).ready(function () {
    var CurrentTab = 0;
    var parent = $(".project-wrapper");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});
