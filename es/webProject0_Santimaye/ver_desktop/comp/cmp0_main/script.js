var CurrentSection = 1;

$(document).ready(function () {
    $('main').fullpage({
        sectionSelector: 'section',
        anchors: ['Portada', 'Collage', 'About', 'Cover', 'Footer'],
        afterLoad: function (anchorLink, index) {


            updatePlayVideo(index);

            updateDescription(index, "on");

            CurrentSection = index;
            updateFloatingFooter(index);


        },
        onLeave: function (index, nextIndex, direction) {

            updateNavStyle(nextIndex);
            updateDescription(index, "off");

            $("footer").hide();

        }
    });
});
