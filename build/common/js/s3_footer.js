function updateCategoriasImagenes(n) {

    var path = "../common/img/categories/med_resolution/";
    var color = "verde";
    var imagen = ["domino", "avion", "flotador", "lapiz", "bombillo"];
    var ext = ".jpg";

    if (n == 0) {
        // Verde Menta
        color = "verde";
        for (var i = 0; i <= 4; i++) {
            $("category[kCategory='" + i + "'] view-back img").attr("src", path + color + "_" + imagen[i] + ext);
     
        }
    }

    if (n == 1) {
        // Azul
        color = "azul";
        for (var i = 0; i <= 4; i++) {
            $("category[kCategory='" + i + "'] view-back img").attr("src", path + color + "_" + imagen[i] + ext);
        }

    }


    if (n == 2) {
        // Morado
        color = "morado";
        for (var i = 0; i <= 4; i++) {
            $("category[kCategory='" + i + "'] view-back img").attr("src", path + color + "_" + imagen[i] + ext);
        }
    }

    if (n == 3) {
        // Rosado
        color = "rosado";

        for (var i = 0; i <= 4; i++) {
            $("category[kCategory='" + i + "'] view-back img").attr("src", path + color + "_" + imagen[i] + ext);
        }

    }
    if (n == 4) {
        // Narajana
        color = "naranja";
        for (var i = 0; i <= 4; i++) {
            $("category[kCategory='" + i + "'] view-back img").attr("src", path + color + "_" + imagen[i] + ext);
        }


    }
    if (n == 5) {
        // Amarillo
        color = "amarillo";
        for (var i = 0; i <= 4; i++) {
            $("category[kCategory='" + i + "'] view-back img").attr("src", path + color + "_" + imagen[i] + ext);
        }

    }


}


function getColorByCookie() {
    var o = getCookie("ts-color-n");
    o || (o = 0);
    var e = "c" + o;
    $(".c0").removeClass("c0").addClass(e), $(".c1").removeClass("c1").addClass(e), $(".c2").removeClass("c2").addClass(e), $(".c3").removeClass("c3").addClass(e), $(".c4").removeClass("c4").addClass(e), $(".c5").removeClass("c5").addClass(e), updateCategoriasImagenes(o);

}

function setTSColor(o) {

    setCookie("ts-color-n", o, "10");
    getColorByCookie();

    /*
    $(".bg-white,.bg-black").addClass("document-color-c" + o);
    setTimeout(function () {
        $(".bg-white,.bg-black").removeClass("document-color-c" + o);
    }, 1000);
    */

    $("splash").addClass("document-bg-c" + o);
    $("splash").fadeIn(1000);
    setTimeout(function () {
        $("splash").fadeOut(1000);
        setTimeout(function () {
            $("splash").removeClass("document-bg-c" + o);
        }, 1000);

    }, 1000);

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
    }), $("footer-hash").click(function () {
        window.open("https://www.google.com.co/search?rlz=1C1CHBF_esCO769CO769&ei=Y_iKWoCNKs_t5gKp26agBQ&q=%23wesignourworld&oq=%23wesignourworld&gs_l=psy-ab.3...1868.5931.0.6052.3.3.0.0.0.0.441.717.2-1j0j1.2.0....0...1.1.64.psy-ab..1.0.0....0.b3jTuEUlkxM", "_blank")
    }), $("footer-email").click(function () {
        window.location.href = "mailto:hello@thesignlab.co"
    }), getColorByCookie()
});
