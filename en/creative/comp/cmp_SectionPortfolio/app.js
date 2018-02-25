function changeImg() {
    $("#SectionBranchs .thumb").fadeOut();
    $("#SectionBranchs .full").fadeIn();

}
/*
document.getElementById("img1Full").onload = function(){changeImg()}
document.getElementById("img1Full").src="comp/cmp_SectionBranchs/images/image1_front_full.png";
*/
ListFullSrc = ["comp/cmp_SectionBranchs/images/image1_front_full.png",
               "comp/cmp_SectionBranchs/images/image1_back_full.png",
               "comp/cmp_SectionBranchs/images/image2_front_full.png",
               "comp/cmp_SectionBranchs/images/image2_back_full.png",
               "comp/cmp_SectionBranchs/images/image3_front_full.png",
               "comp/cmp_SectionBranchs/images/image3_back_full.png",
               "comp/cmp_SectionBranchs/images/image5_front_full.png"];

$("#SectionBranchs .image img.full").each(function (k) {

    var thisThumb = $(".image img.thumb")[k];
    var thisFull = $(".image img.full")[k];

    thisFull.onload = function () {
        $(thisThumb).remove();
        if($(thisFull).hasClass( "front" )){
            $(thisFull).fadeIn();
        }
        
    }

    thisFull.src = ListFullSrc[k];

});



var toogleSeeMore_flag = "seemore";
var updateBranTab_flag = 0;

function updateBrandTab(n, me) {

    $("#SectionBranchs .item").removeClass("ts-bg");
    $(me).addClass("ts-bg");

    $('#SectionBranchs .upper-menu .text .content').hide();
    $('#SectionBranchs .upper-menu .text .content[trg="' + n + '"]').show();

    $("#SectionBranchs .upper-menu .text .content h1").addClass("enable");
    $("#SectionBranchs .upper-menu .text .content p").removeClass("enable");

    $('#SectionBranchs .upper-menu .seemore').addClass("ts-bg");
    $('#SectionBranchs .upper-menu .seemore').removeClass("seeless");

    $('#SectionBranchs .upper-menu .seemore').html('<span class="f-bold">ver </span><span class="f-light"> más</span>');
    toogleSeeMore_flag = "seemore";

    updateBranTab_flag = n;
    
    slider.change(n) 
       $('#SectionBranchs .image[trg="' + updateBranTab_flag + '"]').show();
    $('#SectionBranchs .image[trg="' + updateBranTab_flag + '"] .front').show();
    /*
 
*/
}


function toogleSeeMore() {

    $("#SectionBranchs .upper-menu .text .content h1").toggleClass("enable");
    $("#SectionBranchs .upper-menu .text .content p").toggleClass("enable");

    $('#SectionBranchs .upper-menu .seemore').toggleClass("ts-bg");
    $('#SectionBranchs .upper-menu .seemore').toggleClass("seeless");

    if (toogleSeeMore_flag == "seemore") {
        $('#SectionBranchs .upper-menu .seemore').html('<span class="f-bold">ver </span><span class="f-light"> menos</span>');
        toogleSeeMore_flag = "seeless";

        $('#SectionBranchs .front').hide();
        $('#SectionBranchs .image[trg="' + updateBranTab_flag + '"] .back').show();


    } else {
        $('#SectionBranchs .upper-menu .seemore').html('<span class="f-bold">ver </span><span class="f-light"> más</span>');
        toogleSeeMore_flag = "seemore";

        $('#SectionBranchs .image[trg="' + updateBranTab_flag + '"] .front').show();
        $('#SectionBranchs  .back').hide();
    }



}
