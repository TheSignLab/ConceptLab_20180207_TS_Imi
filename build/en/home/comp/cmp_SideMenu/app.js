var SideMenuFlag = false;

$(document).ready(function () {
    
    
    if($(window).width()>600){
         $(".sections").click(function () {

        SideMenuFlag = true;
        console.log("Abriendo Menu");

        $(".SideMenu").animate({
            right: "0px"
        });
    });


    $(".SideMenu-X").click(function () {


        console.log("Cerrando Menu");

        SideMenuFlag = false;

        $(".SideMenu").animate({
            right: "-300px"
        });
    });
    }else{
         $(".sections").click(function () {

        SideMenuFlag = true;
        console.log("Abriendo Menu");

        $(".SideMenu").animate({
            right: "0px"
        });
    });


    $(".SideMenu-X").click(function () {


        console.log("Cerrando Menu");

        SideMenuFlag = false;

        $(".SideMenu").animate({
            right: "-100vw"
        });
    });
    }

   


});

var bg_side_color = "black";

function clearSideMenu() {
    $(".SideMenu").css({
        backgroundColor: "#fff"
    })
    $(".SideMenu-X .x-1").css({
        backgroundColor: "#000"
    })
    $(".SideMenu-X .x-2").css({
        backgroundColor: "#000"
    })

    $(".SideMenu .active").css({
        color: "#000",
        backgroundColor: "#fff"
    })


    $(".SideMenu-wrapper ul li.h-bar ").css({
        backgroundColor: "#939393"
    })

    bg_side_color = "white";



}

function darkSideMenu() {
    $(".SideMenu").css({
        backgroundColor: "#000"
    })
    $(".SideMenu-X .x-1").css({
        backgroundColor: "#fff"
    })
    $(".SideMenu-X .x-2").css({
        backgroundColor: "#fff"
    })
    $(".SideMenu .active").css({
        color: "#fff",
        backgroundColor: "#000"
    })



    $(".SideMenu-wrapper ul li.h-bar ").css({
        backgroundColor: "#939393"
    })

    bg_side_color = "black";
}









var hoverSideMenuFlag = "av";

function hoverSideMenu(k, me) {

    if (bg_side_color == "black") {
        $(me).addClass("hv4dark")
    } else {
        $(me).addClass("hv4light")
    }


    if (hoverSideMenuFlag == "av") {

        hoverSideMenuFlag = "busy";

        $($(".SideMenu .h-bar")[k]).addClass("ww");



        setTimeout(function () {
            hoverSideMenuFlag = "av";
        }, 0)

        console.log(hoverSideMenuFlag)

    }

}

function outHoverSideMenu() {
    if (hoverSideMenuFlag == "av") {
        $(".SideMenu .h-bar").removeClass("ww")
    }

    $(".noBar").removeClass("hv4dark")
    $(".noBar").removeClass("hv4light")
}



$("main").click(function (e) {
    if (e.target.className !== "SideMenu") {
        SideMenuFlag = false;

        $(".SideMenu").animate({
            right: "-300px"
        });
        e.stopPropagation();
    }

})
