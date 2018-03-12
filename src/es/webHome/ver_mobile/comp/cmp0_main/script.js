$(document).ready(function () {
    if (location.hash.substr(1) == "VideoManifiesto") {
       $(".cmp_Video").show();
         $(".SideMenu").removeClass("active")
        var vid = document.querySelector("video");
        vid.play();
    }
});
