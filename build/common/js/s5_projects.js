function playCover() {
    $("cover-media").removeClass("isHidden");
    $("cover-poster").addClass("isHidden");
}

function stopCover() {
    $("cover-media").addClass("isHidden");
    $("cover-poster").removeClass("isHidden");
}

function hideCover() {
    $("modal-cover").removeClass("onDisplay");
}

function showCover() {
    $("modal-cover").addClass("onDisplay");
}

$(document).ready(function () {
    var coverElement = document.querySelector("modal-cover");
    var coverTouchHandler = new Hammer(coverElement);
    coverTouchHandler.get('swipe').set({
        direction: Hammer.DIRECTION_VERTICAL
    });
    coverTouchHandler.on("swipeup", function (ev) {
        hideCover();
        playCover();
        console.log("Swipeup");
    });

    var coverElement = document.querySelector("section.cmp_Cover");
    var coverTouchHandler = new Hammer(coverElement);
    coverTouchHandler.get('swipe').set({
        direction: Hammer.DIRECTION_VERTICAL
    });
    coverTouchHandler.on("swipedown", function (ev) {
        showCover();
        stopCover();
        console.log("Swipedown");
    });
    coverTouchHandler.on("swipeup", function (ev) {
        $('html, body').animate({
            scrollTop: $("#Gallery").offset().top - $("nav").height() + 2
        }, 2000);
        console.log("Scroll Down");
    });

})
