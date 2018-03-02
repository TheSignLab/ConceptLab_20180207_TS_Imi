var mySwiper;
$(document).ready(function () {
    mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100
    });
    var k_photo;
    $(".Thumb").click(function () {
        if ($(this).attr("kphoto")) {
            k_photo = parseFloat($(this).attr("kphoto"));
            mySwiper.slideTo(k_photo);
            setTimeout(function () {
                $(".Modal").fadeIn();
            }, 100);
        }
    });
    $(".modal-close").click(function () {
        $(".Modal").fadeOut(500);
    })
    $(".modal-prev").click(function () {

        mySwiper.slidePrev();
    })
    $(".modal-next").click(function () {

        mySwiper.slideNext();
    })
    $(".modal-buttons.exit .SideMenu-X").click(function () {
        $(".Modal").fadeOut(500);
    })
})

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        $(".Modal").fadeOut(200)
    }
});

function runCollageAnimation() {}

function c_anim(k) {

}

var mcmodal = document.getElementsByClassName("Modal")[0];
var mcCollage = new Hammer(mcmodal);
mcCollage.get('swipe').set({
    direction: Hammer.DIRECTION_VERTICAL
});

mcCollage.on("swipedown", function (ev) {

    $(".Modal").fadeOut(200);


});


mcCollage.on("swipeup", function (ev) {

    $(".Modal").fadeOut(200);

});
