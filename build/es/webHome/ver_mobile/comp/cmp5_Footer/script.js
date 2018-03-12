function setCookie(o, e, t) {
    var n = "";
    if (t) {
        var c = new Date;
        c.setTime(c.getTime() + 24 * t * 60 * 60 * 1e3), n = "; expires=" + c.toUTCString()
    }
    document.cookie = o + "=" + (e || "") + n + "; path=/"
}

function getCookie(o) {
    for (var e = o + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
        for (var c = t[n];
            " " == c.charAt(0);) c = c.substring(1, c.length);
        if (0 == c.indexOf(e)) return c.substring(e.length, c.length)
    }
    return null
}

function eraseCookie(o) {
    document.cookie = o + "=; Max-Age=-99999999;"
}

function getColorByCookie() {
    var o = getCookie("ts-color-n");
    o || (o = 0);
    var e = "c" + o;
    $(".c0").removeClass("c0").addClass(e), $(".c1").removeClass("c1").addClass(e), $(".c2").removeClass("c2").addClass(e), $(".c3").removeClass("c3").addClass(e), $(".c4").removeClass("c4").addClass(e), $(".c5").removeClass("c5").addClass(e), updateCategoriasImagenes(o)
}

function setTSColor(o) {
    setCookie("ts-color-n", o, "10"), getColorByCookie()
}
$(document).ready(function () {
    $(".cmp_Footer .fa-facebook").click(function () {
        window.open("https://www.facebook.com/thesignlabco/", "_blank")
    }), $(".cmp_Footer .fa-instagram").click(function () {
        window.open("https://www.instagram.com/thesignlabco/?hl=es-la", "_blank")
    }), $(".cmp_Footer .fa-behance").click(function () {
        window.open("https://www.behance.net/vincentproxy", "_blank")
    }), $(".cmp_Footer .Footer-Drop .init").mouseover(function () {
        $(".tintColor").fadeIn()
    }), $(".cmp_Footer .Footer-Drop").mouseleave(function () {
        $(".tintColor").fadeOut()
    }), $(".Footer-Hash").click(function () {
        window.open("https://www.google.com.co/search?rlz=1C1CHBF_esCO769CO769&ei=Y_iKWoCNKs_t5gKp26agBQ&q=%23wesignourworld&oq=%23wesignourworld&gs_l=psy-ab.3...1868.5931.0.6052.3.3.0.0.0.0.441.717.2-1j0j1.2.0....0...1.1.64.psy-ab..1.0.0....0.b3jTuEUlkxM", "_blank")
    }), $(".Footer-Email").click(function () {
        window.location.href = "mailto:hello@thesignlab.co"
    }), getColorByCookie()
});