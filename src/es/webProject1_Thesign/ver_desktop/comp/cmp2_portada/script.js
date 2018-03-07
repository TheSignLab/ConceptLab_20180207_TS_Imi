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

            $("footer").fadeOut();


            $("nav").show();
            $("nav").css({
                color: "white"
            });
            
            $(".cmp_Portada img").hide();
            $(".cmp_Portada img.video").show();
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

            $("footer").fadeIn();
            $("nav").show();
            $("nav").css({
                color: "black"
            });

            $.fn.fullpage.setAllowScrolling(false);
            
             $(".cmp_Portada img").show();
            $(".cmp_Portada img.video").hide();
        } else {
            $.fn.fullpage.moveTo(2);
            $.fn.fullpage.setAllowScrolling(true);
            $("nav").css({
                color: "white"
            });
        }
    }
}

function updatePlayVideo(k) {
    if (k == 1) {


    }
}
