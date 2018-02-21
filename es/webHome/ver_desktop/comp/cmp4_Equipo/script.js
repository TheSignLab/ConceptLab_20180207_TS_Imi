$(document).ready(function(){
    
    setTimeout(function(){
        var TeamImageWidth = $(".cmp_Equipo img").width();
    var TeamImageHeight = $(".cmp_Equipo img").height();
    var TeamWrapperHeight = $(".cmp_Equipo .wrapper").height();
    var TeamUpperHeight = $(".cmp_Equipo .upper").height();
    
    var ExtraHeight = TeamImageHeight - (TeamWrapperHeight - TeamUpperHeight);
    var DefaultHeight = 1.1*$(".cmp_Footer .Footer").height();
     
    $(".cmp_Footer .wrapper").css({height :   DefaultHeight,paddingTop:ExtraHeight})
    
    },500);
    
    
    
   
    
    
})