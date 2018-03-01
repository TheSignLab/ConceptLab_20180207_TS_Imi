function hideNav(){
    $("nav").animate({top:"-1200px"},500);
}

function showNav(){
    $("nav").animate({top:"0px"},500);
}

function clearNav(){
    $("nav").css({color:"#000"})
}
function darkNav(){
    $("nav").css({color:"#fff"})
}