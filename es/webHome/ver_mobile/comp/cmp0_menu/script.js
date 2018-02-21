$(document).ready(function () {

 

    $("main").click(function (e) {
        if (e.target.tagName !== "menu") {

            $(".SideMenu").removeClass("active")
            e.stopPropagation();
        }

    })
    
       $("nav .ts-hv-c").click(function () {

        $("menu").addClass("active");
    })

    $("menu .SideMenu-X").click(function () {

        $("menu").removeClass("active");
    })
  


    $("menu .btn_video").click(function(){
        $(".cmp_Video").fadeIn();
        $(".cmp_Video video").show();
        $("menu").removeClass("active");
    })
    

    
      $("menu .btn_team").click(function(){
        

        
    });
    
       $("menu .btn_creative").click(function(){
        
        var lang = getCookie("ts-language");
        var mob = getCookie("ts-isMobile");
        
        location.href = "/es/webCreative/ver_mobile/index.html";
        
    });

})
