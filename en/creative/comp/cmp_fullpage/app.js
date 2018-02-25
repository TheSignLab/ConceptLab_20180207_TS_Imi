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

            if (nextIndex == 1) {
                $("nav").show();
                // handler video on scope
                console.log("Getting into Section[Number == 1]")
                showNav()
                clearNav()
                darkSideMenu()

            }
            if (nextIndex == 2) {
                // handler branch menu on scope
                console.log("Getting into Section[Number == 2]")
                showNav()
                clearNav()
                darkSideMenu()
            }

            if (nextIndex == 3) {

                // handler branch menu on scope
                console.log("Getting into Section[Number == 3]")
                showNav()
                darkNav()
                clearSideMenu()
                
              
            }
            if (nextIndex == 4) {
                $("nav").hide();
                // handler branch menu on scope
                console.log("Getting into Section[Number == 3]")
                showNav()
                clearNav()
                darkSideMenu()
            }

        },
        afterLoad: function (anchorLink, index) {

            if (index == 4) {
                $("nav").show();
                // handler branch menu on scope
                showNav()
                clearNav()
                darkSideMenu()
            }
            if (index == 3) {
                $("#SectionMensaje1 .wrapper .animated").fadeIn("800")
            }
              
            /*
            $("nav").show();
            
            if (index == 1) {
                 $("nav").show();
                // handler video on scope
                 console.log("Getting into Section[Number == 1]")
                showNav()
                clearNav()
                darkSideMenu()
                
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
            */
        },
    });
}
