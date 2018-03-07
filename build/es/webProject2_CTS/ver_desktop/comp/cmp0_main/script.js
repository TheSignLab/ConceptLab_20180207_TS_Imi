var CurrentSection = 1;
$(document).ready(function () {
    $('main').fullpage({
        sectionSelector: 'section'
        , anchors: ['Portada', 'Collage', 'About', 'Cover', 'Footer']
        , afterLoad: function (anchorLink, index) {
            updatePlayVideo(index);
            updateDescription(index, "on");
            CurrentSection = index;
            updateFloatingFooter(index);
            updateCover(index, index, "onload")
        }
        , onLeave: function (index, nextIndex, direction) {
            updateNavStyle(nextIndex);
            updateCover(index, nextIndex, "onleave")
            updateDescription(index, "off");
            $("footer").hide();
            if (index == 2 && nextIndex == 1) {
                
                $("footer").hide();
            }else{
                $("nav").show();
                 
            }
        }
    });
});