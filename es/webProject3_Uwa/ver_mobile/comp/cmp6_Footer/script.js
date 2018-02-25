function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}



function getColorByCookie() {
    var ts_color_n = getCookie("ts-color-n");
    if (!ts_color_n) {
        ts_color_n = 0;
    }
    var ts_color_class = "c" + ts_color_n;
    $('.c0').removeClass('c0').addClass(ts_color_class);
    $('.c1').removeClass('c1').addClass(ts_color_class);
    $('.c2').removeClass('c2').addClass(ts_color_class);
    $('.c3').removeClass('c3').addClass(ts_color_class);
    $('.c4').removeClass('c4').addClass(ts_color_class);
    $('.c5').removeClass('c5').addClass(ts_color_class);
    


}


function setTSColor(k) {
   
    setCookie("ts-color-n", k, "10");
    getColorByCookie();
}

$(document).ready(function () {

    $(".cmp_Footer .fa-facebook").click(function () {
        window.location.href = "https://www.facebook.com/thesignlabco/";
    });

    $(".cmp_Footer .fa-instagram").click(function () {
        window.location.href = "https://www.instagram.com/thesignlabco/?hl=es-la";
    });



    $(".cmp_Footer .tintColor").click(function () {
        $(this).addClass("animated bounceIn");
        navigator.vibrate(1000);
        setTimeout(function(){
            $(this).removeClass("animated bounceIn");
        },400);
    });

    $(".Footer-Hash").click(function () {

        window.location.href = " https://www.google.com.co/search?rlz=1C1CHBF_esCO769CO769&ei=Y_iKWoCNKs_t5gKp26agBQ&q=%23wesignourworld&oq=%23wesignourworld&gs_l=psy-ab.3...1868.5931.0.6052.3.3.0.0.0.0.441.717.2-1j0j1.2.0....0...1.1.64.psy-ab..1.0.0....0.b3jTuEUlkxM"
    })
    
    $(".Footer-Email").click(function(){
        window.location.href = "mailto:hello@thesignlab.co";
    })

    getColorByCookie();

        $(".cmp_Cover .modal-prev").click(function () {
        var mob = getCookie("ts-isMobile");
        if (mob) {
            location.href = "/es/webProject0_Santimaye/ver_mobile/index.html";
        } else {
            location.href = "/es/webProject0_Santimaye/ver_desktop/index.html";
        }
    });
    
    $(".cmp_Cover .modal-next").click(function () {
          var mob = getCookie("ts-isMobile");
        if (mob) {
            location.href = "/es/webProject1_Thesign/ver_mobile/index.html";
        } else {
            location.href = "/es/webProject1_Thesign/ver_desktop/index.html";
        }
    });

});
