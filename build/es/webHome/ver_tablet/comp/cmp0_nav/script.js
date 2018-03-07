function updateNavStyle(nSection){
    
    
    if(nSection == 1 || nSection == 4){
        $("nav").removeClass("navShow");
    }else{
        $("nav").addClass("navShow");
    }
    
     if(nSection == 3){
        $("nav").addClass("navLight");
    }else{
        $("nav").removeClass("navLight");
    }
    
    
    
}



$(document).ready(function(){
    
    $("nav .title").click(function(){
        window.location.href = "https://thesignlab.co/";
    });
    
})