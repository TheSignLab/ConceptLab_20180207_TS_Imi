$(document).ready(function () {

    var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});
    
    var k_photo;

    $(".Thumb").click(function () {

        $(".Modal").fadeIn(500);

        k_photo = parseFloat($(this).attr("kphoto"));
        

        console.log(k_photo)

    });






    $(".modal-close").click(function () {

        $(".Modal").fadeOut(500);

    })

    $(".modal-prev").click(function () {

       


    })

    $(".modal-next").click(function () {
       

    })


})

window.onclick = function (event) {
    var modal = document.getElementsByClassName("flex-wrapper")[0];
    if (event.target == modal) {

        $(".Modal").fadeOut(200)

    } else {


    }
}


$(document).keyup(function (e) {
    if (e.keyCode == 27) {

        $(".Modal").fadeOut(200)
    }
});



function runCollageAnimation() {





}

function c_anim(k) {
    // $($(".Thumb")[k]).css({"left": "0px"})
    $($(".Thumb")[k]).fadeIn(150, function () {
        $($(".Thumb")[k]).css({
            "display": "inherit",
        });

    });
    $($(".Thumb")[k]).width('25%');
}
