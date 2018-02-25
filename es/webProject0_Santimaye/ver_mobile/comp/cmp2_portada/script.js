var modal_portada = document.getElementsByClassName("mdl_PortadaText")[0];
var mc = new Hammer(modal_portada);
mc.get('swipe').set({
    direction: Hammer.DIRECTION_VERTICAL
});
mc.on("swipeup", function (ev) {
    $(".mdl_PortadaText").removeClass("onDisplay");
    $(".cmp_Portada video").show();
    $(".cmp_Portada img").hide();
    $(".cmp_Portada video")[0].play();

    $(".cmp_Footer").show();
});

var video_portada = document.getElementsByClassName("cmp_Portada")[0];


var k_swipe = 0;

var mc2 = new Hammer(video_portada);

var mc2 = new Hammer(video_portada);
// Tap recognizer with minimal 2 taps
mc2.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
// Single tap recognizer
mc2.add( new Hammer.Tap({ event: 'singletap' }) );


// we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
mc2.get('doubletap').recognizeWith('singletap');
// we only want to trigger a tap, when we don't have detected a doubletap
mc2.get('singletap').requireFailure('doubletap');


mc2.on("singletap doubletap", function(ev) {
   $(".cmp_Portada video").show();
    $(".cmp_Portada video")[0].play();
});

mc2.get('swipe').set({
    direction: Hammer.DIRECTION_VERTICAL
});

mc2.on("swipedown", function (ev) {
    k_swipe = k_swipe + 1;
    console.log(k_swipe)
    $(".mdl_PortadaText").addClass("onDisplay");
    $(".cmp_Portada video").hide();
    $(".cmp_Portada img").show();
    $(".cmp_Portada video")[0].pause();
    
         var etop = $(".cmp_Portada").offset().top;
    $('html, body').animate({
      scrollTop: etop
    }, 1000);
    


});


mc2.on("swipeup", function (ev) {
   
    $(".mdl_PortadaText").removeClass("onDisplay");
    $(".cmp_Portada video").hide();
    $(".cmp_Portada img").show();
    $(".cmp_Portada video")[0].pause();
    
       var etop = $(".cmp_Collage").offset().top;
    $('html, body').animate({
      scrollTop: etop
    }, 1000);
    
   

});







function hideThisModal() {


    $(".mdl_PortadaText").removeClass("onDisplay");
}









function updatePlayVideo(k) {
    if (k == 1) {
        $(".cmp_Portada video").show();
        $(".cmp_Portada video")[0].play();
    }
}
