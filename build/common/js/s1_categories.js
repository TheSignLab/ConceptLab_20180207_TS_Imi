console.log("DOM is Loaded.....");

var mySwiperImages;
var seemore_btn = $("seemore");
var seeless_btn = $("slide-seeless");

$(document).ready(function(){
  setTimeout(function () {
      
     console.log("Creando Swiper para Categorias.");

    mySwiperImages = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        draggable : false
        
    });
    mySwiperImages.allowTouchMove = false;

   mySwiperImages.on('slideChange', function () {
        $("slide-seeless").click();
        seemore_btn = $("slide-seemore");
        seeless_btn = $("slide-seeless");
    });
      
}, 1000);  
})





seemore_btn.on('click', function (e) {
    $("view-front").hide();
    $("view-back").show();
});

seeless_btn.on('click', function (e) {
    $("view-front").show();
    $("view-back").hide();
});

$('categories-selector item').click(function () {

    var kElement = $(this);
    var kTg = kElement.attr("tg");

    $('categories-selector item').removeClass("ts-bg");
    $(this).addClass("ts-bg");
    
    mySwiperImages.slideTo(kTg);
    console.log("Ejecutando go2Slide(" + kTg + ")");
    
        $("view-front").show();
    $("view-back").hide();
})
