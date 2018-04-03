$(document).ready(function(){
    
    
    
    $("video").on('click',function(){
        document.querySelector("video").play();
    });
    
    

    
    
    $("video-exit").on('click',function(){
        document.querySelector("video").pause();
        document.querySelector("video").currentTime = 0;
        $("modal-video").addClass("hidden");
    });
    
    
})


