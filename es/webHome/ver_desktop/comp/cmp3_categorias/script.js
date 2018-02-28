function updateCategoriasImagenes(n) {

    if (n == 0) {
        // Verde Menta
        $(".imgs1.ts-img-back").attr("src", "../../resources/CaterogiasImages/Domino-de-coloresverde_2500x1669_2.jpg");
        $(".imgs2.ts-img-back").attr("src", "../../resources/CaterogiasImages/avion-de-papelcolorcolorverde_2500x1669_2.jpg");
        $(".imgs3.ts-img-back").attr("src", "../../resources/CaterogiasImages/flotadorconpersonajescolorverde_2500x1669_2.jpg");
        $(".imgs4.ts-img-back").attr("src", "../../resources/CaterogiasImages/lapizcolorverde_2500x1669_2.jpg");
        $(".imgs5.ts-img-back").attr("src", "../../resources/CaterogiasImages/Bombilla-con-Personajescolorverde_2500x1669_2.jpg");
    }

    if (n == 1) {
        // Azul
        $(".imgs1.ts-img-back").attr("src", "../../resources/CaterogiasImages/Domino-de-coloresazul_2500x1669_2.jpg");
        $(".imgs2.ts-img-back").attr("src", "../../resources/CaterogiasImages/avion-de-papelcolorcoloazul_2500x1669_2.jpg");
        $(".imgs3.ts-img-back").attr("src", "../../resources/CaterogiasImages/flotadorconpersonajescolorazul_2500x1669_2.jpg");
        $(".imgs4.ts-img-back").attr("src", "../../resources/CaterogiasImages/lapizcolorazul_2500x1669_2.jpg");
        $(".imgs5.ts-img-back").attr("src", "../../resources/CaterogiasImages/Bombilla-con-Personajescolorazul_2500x1669_2.jpg");
    }


    if (n == 2) {
        // Morado
        $(".imgs1.ts-img-back").attr("src", "../../resources/CaterogiasImages/Domino-de-coloresmorado_2500x1669_2.jpg");
        $(".imgs2.ts-img-back").attr("src", "../../resources/CaterogiasImages/avion-de-papelcolorcolormorado_2500x1669_2.jpg");
        $(".imgs3.ts-img-back").attr("src", "../../resources/CaterogiasImages/flotadorconpersonajescolormorado_2500x1669_2.jpg");
        $(".imgs4.ts-img-back").attr("src", "../../resources/CaterogiasImages/lapizcolormorado_2500x1669_2.jpg");
        $(".imgs5.ts-img-back").attr("src", "../../resources/CaterogiasImages/Bombilla-con-Personajescolormorado_2500x1669_2.jpg");
    }


    if (n == 3) {
        // Rosado
        $(".imgs1.ts-img-back").attr("src", "../../resources/CaterogiasImages/Domino-de-coloresrosado_2500x1669_2.jpg");
        $(".imgs2.ts-img-back").attr("src", "../../resources/CaterogiasImages/avion-de-papelcolorcolorrosado_2500x1669_2.jpg");
        $(".imgs3.ts-img-back").attr("src", "../../resources/CaterogiasImages/flotadorconpersonajescolorrosado_2500x1669_2.jpg");
        $(".imgs4.ts-img-back").attr("src", "../../resources/CaterogiasImages/lapizcolorrosado_2500x1669_2.jpg");
        $(".imgs5.ts-img-back").attr("src", "../../resources/CaterogiasImages/Bombilla-con-Personajescolorrosado_2500x1669_2.jpg");
    }
    if (n == 4) {
        // Narajana
        $(".imgs1.ts-img-back").attr("src", "../../resources/CaterogiasImages/Domino-de-coloresnaranja_2500x1669_2.jpg");
        $(".imgs2.ts-img-back").attr("src", "../../resources/CaterogiasImages/avion-de-papelcolorcolornaranja_2500x1669_2.jpg");
        $(".imgs3.ts-img-back").attr("src", "../../resources/CaterogiasImages/flotadorconpersonajescolornaranja_2500x1669_2.jpg");
        $(".imgs4.ts-img-back").attr("src", "../../resources/CaterogiasImages/lapizcolornaranja_2500x1669_2.jpg");
        $(".imgs5.ts-img-back").attr("src", "../../resources/CaterogiasImages/Bombilla-con-Personajescolornaranja_2500x1669_2.jpg");
    }
    if (n == 5) {
        // Amarillo
        $(".imgs1.ts-img-back").attr("src", "../../resources/CaterogiasImages/Domino-de-coloresamarillo_2500x1669_2.jpg");
        $(".imgs2.ts-img-back").attr("src", "../../resources/CaterogiasImages/avion-de-papelcolorcoloramarillo_2500x1669_2.jpg");
        $(".imgs3.ts-img-back").attr("src", "../../resources/CaterogiasImages/flotadorconpersonajescoloramarillo_2500x1669_2.jpg");
        $(".imgs4.ts-img-back").attr("src", "../../resources/CaterogiasImages/lapizcoloramarillo_2500x1669_2.jpg");
        $(".imgs5.ts-img-back").attr("src", "../../resources/CaterogiasImages/Bombilla-con-Personajescoloramarillo_2500x1669_2.jpg");
    }


}















$(document).ready(function () {
    var CurrentTab = 0;

    $($(".cmp_Categorias .ts-img-front")[CurrentTab]).fadeIn();
    $($(".cmp_Categorias .ts-img-back")[CurrentTab]).hide();



    var mySwiperImages = new Swiper('.swiper-container-images', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        centeredSlides: true,
        speed: 400,
        spaceBetween: 100,
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true
    });
    var mySwiperText = new Swiper('.swiper-container-text', {
        speed: 400,
        spaceBetween: 100,
    });



    mySwiperImages.on('slideChange', function () {
        CurrentTab = mySwiperImages.activeIndex;
        $(".menu .item").removeClass("ts-bg");
        $($(".menu .item")[CurrentTab]).addClass("ts-bg");
        mySwiperImages.slideTo(CurrentTab);
        mySwiperText.slideTo(CurrentTab);

    });

    mySwiperText.on('slideChange', function () {
        CurrentTab = mySwiperText.activeIndex;
        $(".menu .item").removeClass("ts-bg");
        $($(".menu .item")[CurrentTab]).addClass("ts-bg");

        mySwiperImages.slideTo(CurrentTab);
        mySwiperText.slideTo(CurrentTab);

    });

    $(".menu .item").click(function () {
        // Controller
        var CurrentItem = $(".menu .item").index(this);
        CurrentTab = CurrentItem;
        // View
        $(".menu .item").removeClass("ts-bg");
        $(this).addClass("ts-bg");

        mySwiperImages.slideTo(CurrentTab);
        mySwiperText.slideTo(CurrentTab);
        $(".seeless").trigger("click");

    });





    $(".seemore").click(function () {
        $(".seemore").removeClass("on");
        $(".seeless").addClass("on");


        $($(".cmp_Categorias .text")).children("h1").hide();
        $($(".cmp_Categorias .text")).children("p").fadeIn();

        $($(".cmp_Categorias .ts-img-front")).hide();
        $($(".cmp_Categorias .ts-img-back")).fadeIn();



    });
    $(".seeless").click(function () {
        $(".seeless").removeClass("on");
        $(".seemore").addClass("on");

        $($(".cmp_Categorias .text")).children("h1").fadeIn();
        $($(".cmp_Categorias .text")).children("p").hide();

        $($(".cmp_Categorias .ts-img-front")).fadeIn();
        $($(".cmp_Categorias .ts-img-back")).hide();

    });
});
