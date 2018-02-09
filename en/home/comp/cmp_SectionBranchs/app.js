function toogleSeeMore(a) {
    $(a).toggleClass("sUp");
    $("#SectionBranchs .text p").toggleClass("pUp");
}


function changeImg(){
        alert("Vamo a cambiar");
        $("#SectionBranchs .thumb").fadeOut();
        $("#SectionBranchs .full").fadeIn();

}
document.getElementById("img1Full").onload = function(){changeImg()}
document.getElementById("img1Full").src="comp/cmp_SectionBranchs/ImgFull1.jpg";