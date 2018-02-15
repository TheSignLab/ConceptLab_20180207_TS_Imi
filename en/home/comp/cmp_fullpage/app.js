var userColor;

function init() {

    init_fp();

    $(".ts-preloader").fadeOut(0);
    $("main").fadeIn(0);


}

function init_fp() {


    $('main').fullpage({
        sectionSelector: 'section',
        onLeave: function (index, nextIndex, direction) {

            $("nav").hide();

        },
        afterLoad: function (anchorLink, index) {
            $("nav").show();
            if (index == 1) {
                 $("nav").hide();
                // handler video on scope
                hideNav();
                
            }
            if (index == 2) {
                // handler branch menu on scope
                console.log("Getting into Section[Number == 2]")
                showNav()
                clearNav()
                darkSideMenu()
            }
            if (index == 3) {
    
                // handler branch menu on scope
                console.log("Getting into Section[Number == 3]")
                showNav()
                darkNav()
                clearSideMenu()
            }
            if (index == 4) {
                 $("nav").hide();
                darkSideMenu()
            }
        },
    });
}

