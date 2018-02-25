function updateNavStyle(nSection){
    
    
    if(nSection == 5 ){
        $("nav").removeClass("navShow");
    }else{
        $("nav").addClass("navShow");
        
    }
    
     if(nSection != 3 ){
        $("nav").removeClass("navLight");
    }else{
        $("nav").addClass("navLight");
    }
    
    

    
    
    
    
}



$(document).ready(function(){
    
    $("nav .title").click(function(){
        window.location.href = "https://thesignlab.co/";
    });
    
})