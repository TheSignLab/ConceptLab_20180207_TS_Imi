$(document).ready(function () {
    $("footer").hide();
    $('main').fullpage({
        sectionSelector: 'section',
        anchors: ['PortfolioText', 'PortfolioImages', 'Message', 'PhotoAndText','Footer'],
        afterLoad: function(anchorLink, index){
            
             updateFloatingFooter(index)
             updateNavStyle(index)
        },
        onLeave: function(index, nextIndex, direction){
            
            $("footer").hide();
            updateNavStyle(nextIndex)
           
            if(nextIndex == 3){

                    init_message_anim();
         
            }
        }
    });
});
