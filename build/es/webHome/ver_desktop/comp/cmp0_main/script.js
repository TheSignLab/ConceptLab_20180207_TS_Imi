$(document).ready(function () {
    $('main').fullpage({
        sectionSelector: 'section',
        anchors: ['VideoManifiesto', 'Categorias', 'Equipo', 'Footer'],
        onLeave: function (index, nextIndex, direction) {
            updateNavStyle(nextIndex)
        }
    });
    if (location.hash.substr(1) == "VideoManifiesto") {
        var vid = document.querySelector("video");
        vid.onended = function () {
            $.fn.fullpage.moveSectionDown();
        };
    }
});
