$(document).ready(function () {
    $(".daniela.mask").mouseover(function () {
        $(".speech-bubble").hide();
        $(".daniela .speech-bubble").fadeIn();
    });
    $(".daniela.mask").mouseout(function () {
        $(".daniela .speech-bubble").fadeOut();
    });
    $(".jorge.mask").mouseover(function () {
        $(".speech-bubble").hide();
        $(".jorge .speech-bubble").fadeIn();
    });
    $(".jorge.mask").mouseout(function () {
        $(".jorge .speech-bubble").fadeOut();
    });
    $(".male.mask").mouseover(function () {
        $(".speech-bubble").hide();
        $(".male .speech-bubble").fadeIn();
    });
    $(".male.mask").mouseout(function () {
        $(".male .speech-bubble").fadeOut();
    });
    $(".andres.mask").mouseover(function () {
        $(".speech-bubble").hide();
        $(".andres .speech-bubble").fadeIn();
    });
    $(".andres.mask").mouseout(function () {
        $(".andres .speech-bubble").fadeOut();
    });

    $(".carlos.mask").mouseover(function () {
        $(".speech-bubble").hide();
        $(".carlos .speech-bubble").fadeIn();
    });
    $(".carlos.mask").mouseout(function () {
        $(".carlos.speech-bubble").fadeOut();
    });

    $(".joell.mask").mouseover(function () {
        $(".speech-bubble").hide();
        $(".joell .speech-bubble").fadeIn();
    });
    $(".joell.mask").mouseout(function () {
        $(".joell.speech-bubble").fadeOut();
    });

    $(".diego.mask").mouseover(function () {
        $(".speech-bubble").hide();
        $(".diego .speech-bubble").fadeIn();
    });
    $(".diego.mask").mouseout(function () {
        $(".diego.speech-bubble").fadeOut();
    });

    $(".vane.mask").mouseover(function () {
        $(".speech-bubble").hide();
        $(".vane .speech-bubble").fadeIn();
    });
    $(".vane.mask").mouseout(function () {
        $(".vane.speech-bubble").fadeOut();
    });

team_resize();

});



function team_resize() {

    var obj_team_photo_top = document.querySelector(".team_photo_obj");
    var img_team_photo_top = document.querySelector(".img_team_top");
    var img_team_photo_bottom = document.querySelector(".img_team_bottom");
    
    var wImg_top = img_team_photo_top.style.width;
    var hImg_top = img_team_photo_top.style.height;
    var rImg_top = hImg_top/wImg_top;
    
    var wImg_bottom = img_team_photo_bottom.style.width;
    

   p = $(".team_photo_obj img").height();
    $(".team_photo_obj").height(p);
}




window.onresize = function (event) {
    team_resize();
};
