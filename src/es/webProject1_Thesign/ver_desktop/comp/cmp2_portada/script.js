var vid = document.querySelector("video");
vid.onended = function () {
    $.fn.fullpage.moveSectionDown();
};

function hideThisModal() {
    $(".mdl_PortadaText").removeClass("onDisplay");
}
//
var modalText = $(".mdl_PortadaText")[0];
if (modalText.addEventListener) {
    // IE9, Chrome, Safari, Opera
    modalText.addEventListener("mousewheel", ModalWheelHandler, false);
    // Firefox
    modalText.addEventListener("DOMMouseScroll", ModalWheelHandler, false);
}
// IE 6/7/8
else {
    modalText.attachEvent("onmousewheel", ModalWheelHandler);
}

function ModalWheelHandler(e) {
    if (CurrentSection == 1) {
        // cross-browser wheel delta
        var e = window.event || e; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if (delta == -1) {
            $(modalText).removeClass("onDisplay");
            $(".cmp_Portada img").hide();
            $("footer").fadeOut();
            $(".cmp_Portada video").show();
            $(".cmp_Portada video")[0].play();
            $("nav").hide();
            $.fn.fullpage.setAllowScrolling(false);
        }
    }
}
var portadaTComp = $(".cmp_Portada")[0];
if (portadaTComp.addEventListener) {
    // IE9, Chrome, Safari, Opera
    portadaTComp.addEventListener("mousewheel", PortadaWheelHandler, false);
    // Firefox
    portadaTComp.addEventListener("DOMMouseScroll", PortadaWheelHandler, false);
}
// IE 6/7/8
else {
    portadaTComp.attachEvent("onmousewheel", PortadaWheelHandler);
}

function PortadaWheelHandler(e) {
    if (CurrentSection == 1) {
        // cross-browser wheel delta
        var e = window.event || e; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if (delta == 1) {
            $(modalText).addClass("onDisplay");
            $(".cmp_Portada img").show();
            $("footer").fadeIn();
            $("nav").show();
            $(".cmp_Portada video").hide();
            $(".cmp_Portada video")[0].pause();
            $.fn.fullpage.setAllowScrolling(false);
        }
        else {
            $.fn.fullpage.moveTo(2);
            $.fn.fullpage.setAllowScrolling(true);
        }
    }
}

function updatePlayVideo(k) {
    if (k == 1) {
        $(".cmp_Portada video").show();
        $(".cmp_Portada video")[0].play();
    }
}