$(document).ready(function () {
    if (location.hash.substr(1) == "VideoManifiesto") {
        var vid = document.querySelector("video");
        vid.onended = function () {
            $.fn.fullpage.moveSectionDown();
        };
    }
});
