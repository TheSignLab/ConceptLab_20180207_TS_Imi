$(document).ready(function () {

 

    $("main").click(function (e) {
        if (e.target.tagName !== "menu") {

            $(".SideMenu").removeClass("active")
            e.stopPropagation();
        }

    })
    
       $("nav .ts-hv-c").click(function () {

        $("menu").addClass("active");
    })

    $("menu .SideMenu-X").click(function () {

        $("menu").removeClass("active");
    })
  

        $("menu .btn_video").click(function () {
        var lang = getCookie("ts-language");
        var mob = getCookie("ts-isMobile");
        if (mob) {
            location.href = "/es/webHome/ver_mobile/index.html#VideoManifiesto";
        } else {
            location.href = "/es/webHome/ver_desktop/index.html#VideoManifiesto";
        }
    });

    $("menu .btn_team").click(function () {

        var lang = getCookie("ts-language");
        var mob = getCookie("ts-isMobile");
        if (mob) {
            location.href = "/es/webHome/ver_mobile/index.html#Equipo";
        } else {
            location.href = "/es/webHome/ver_desktop/index.html#Equipo";
        }

    });

    $("menu .btn_creative").click(function () {
        var lang = getCookie("ts-language");
        var mob = getCookie("ts-isMobile");
        if (mob) {
            location.href = "/es/webCreative/ver_mobile/index.html";
        } else {
            location.href = "/es/webCreative/ver_desktop/index.html";
        }
    });

})
