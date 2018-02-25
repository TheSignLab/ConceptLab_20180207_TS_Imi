var modal_portada = document.getElementsByClassName("mdl_PortadaText")[0];
var mc = new Hammer(modal_portada);
mc.get('swipe').set({
    direction: Hammer.DIRECTION_VERTICAL
});
mc.on("swipeup", function (ev) {
    $(".mdl_PortadaText").removeClass("onDisplay");


    $(".cmp_Footer").show();
});

var video_portada = document.getElementsByClassName("cmp_Portada")[0];


var k_swipe = 0;

var mc2 = new Hammer(video_portada);
mc2.get('swipe').set({
    direction: Hammer.DIRECTION_VERTICAL
});

mc2.on("swipedown", function (ev) {
    k_swipe = k_swipe + 1;
    console.log(k_swipe)
    $(".mdl_PortadaText").addClass("onDisplay");

    
         var etop = $(".cmp_Portada").offset().top;
    $('html, body').animate({
      scrollTop: etop
    }, 1000);
    


});


mc2.on("swipeup", function (ev) {
   
    $(".mdl_PortadaText").removeClass("onDisplay");

    
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
     
    }
}
