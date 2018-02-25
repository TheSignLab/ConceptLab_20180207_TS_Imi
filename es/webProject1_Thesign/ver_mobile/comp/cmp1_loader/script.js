$(document).ready(function () {
    
       setTimeout(function(){
        $(".Modal").fadeOut(0);
        $(".Modal").css({zIndex:"1000"});
    },500)
    
    setTimeout(function(){
        $("preloader").fadeOut(500);
        $("footer").fadeIn(500);
        $(".Modal").fadeOut(500);
        $(".Modal").css({zIndex:"1000"});
    },2500)
    
});
