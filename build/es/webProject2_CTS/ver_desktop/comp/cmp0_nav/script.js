function updateNavStyle(nSection){
    
    
    if(nSection == 0){
        $("nav").removeClass("navShow");
    }else{
        $("nav").addClass("navShow");
        
    }
    
    
     if(nSection == 2 || nSection == 3 || nSection == 4|| nSection == 5 ){
         setTimeout(function(){
            $("nav").addClass("navLight"); 
         },500)
        
    }else{
        $("nav").removeClass("navLight");
    }
   
    /*
    
       if(nSection == 2 || nSection == 1){
        $("nav").removeClass("noBg");
    }else{
        $("nav").addClass("noBg");
    }
    
    
    */
    
    
    
    
}



$(document).ready(function(){
    
    $("nav .title").click(function(){
        window.location.href = "https://thesignlab.co/";
    });
    
    $("nav").addClass("navShow");
    
})