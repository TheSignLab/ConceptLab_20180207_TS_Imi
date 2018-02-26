$(document).ready(function () {

    setTimeout(function () {
        var TeamImageWidth = $(".cmp_Equipo img").width();
        var TeamImageHeight = $(".cmp_Equipo img").height();
        var TeamWrapperHeight = $(".cmp_Equipo .wrapper").height();
        var TeamUpperHeight = $(".cmp_Equipo .upper").height();

        var ExtraHeight = TeamImageHeight - (TeamWrapperHeight - TeamUpperHeight);
        var DefaultHeight = 1.5 * $(".cmp_Footer .Footer").height();

        $(".cmp_Footer .wrapper").css({
            height: DefaultHeight,
            paddingTop: ExtraHeight
        })

    }, 500);

    


$(".daniela.mask").mouseover(function(){
    $(".speech-bubble").hide();
    $(".daniela .speech-bubble").fadeIn();
});
$(".daniela.mask").mouseout(function(){
    $(".daniela .speech-bubble").fadeOut();
});
$(".jorge.mask").mouseover(function(){
    $(".speech-bubble").hide();
    $(".jorge .speech-bubble").fadeIn();
});
$(".jorge.mask").mouseout(function(){
    $(".jorge .speech-bubble").fadeOut();
});
$(".male.mask").mouseover(function(){
    $(".speech-bubble").hide();
    $(".male .speech-bubble").fadeIn();
});
$(".male.mask").mouseout(function(){
    $(".male .speech-bubble").fadeOut();
});
$(".andres.mask").mouseover(function(){
    $(".speech-bubble").hide();
    $(".andres .speech-bubble").fadeIn();
});
$(".andres.mask").mouseout(function(){
    $(".andres .speech-bubble").fadeOut();
});

$(".carlos.mask").mouseover(function(){
    $(".speech-bubble").hide();
    $(".carlos .speech-bubble").fadeIn();
});
$(".carlos.mask").mouseout(function(){
    $(".carlos.speech-bubble").fadeOut();
});

$(".joell.mask").mouseover(function(){
    $(".speech-bubble").hide();
    $(".joell .speech-bubble").fadeIn();
});
$(".joell.mask").mouseout(function(){
    $(".joell.speech-bubble").fadeOut();
});

$(".diego.mask").mouseover(function(){
    $(".speech-bubble").hide();
    $(".diego .speech-bubble").fadeIn();
});
$(".diego.mask").mouseout(function(){
    $(".diego.speech-bubble").fadeOut();
});

$(".vane.mask").mouseover(function(){
    $(".speech-bubble").hide();
    $(".vane .speech-bubble").fadeIn();
});
$(".vane.mask").mouseout(function(){
    $(".vane.speech-bubble").fadeOut();
});

})
