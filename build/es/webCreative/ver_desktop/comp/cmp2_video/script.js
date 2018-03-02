var vid = document.querySelector("video");
vid.onended = function() {
    $.fn.fullpage.moveSectionDown();
};