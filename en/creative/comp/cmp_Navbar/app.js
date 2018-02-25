function hideNav(){
    $("nav").animate({top:"-1200px"},500);
}

function showNav(){
    $("nav").animate({top:"0px"},500);
}

function clearNav(){
    $("nav").css({color:"#000",backgroundColor:"#fff"})
}
function darkNav(){
    $("nav").css({color:"#fff",backgroundColor:"rgba(0,0,0,0)"})
}