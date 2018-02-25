function updateDescription(k, type) {



    if (k == 3 && type == "on") {

        anim_intro_desc();

    } else {

        
    }

}


function anim_intro_desc() {
    
    $(".content ul li").css({
        "left": "0px",
    });
    $(".Description-Left").height('100vh');
    $(".titles").css({
        "left": "0px",
    });
  
    setTimeout(function () {
          $(".hbar").fadeIn(500);
        $(".Description-Right .content p").css({
            "top": "0px",
        });
        setTimeout(function () {
            setTimeout(function () {
                $($(".content ul li")[0]).fadeIn(300);
            }, 0);
            setTimeout(function () {
                $($(".content ul li")[1]).fadeIn(300);
            }, 100);
            setTimeout(function () {
                $($(".content ul li")[2]).fadeIn(300);
            }, 200);
            setTimeout(function () {
                $($(".content ul li")[3]).fadeIn(300);
            }, 300);
            setTimeout(function () {
                $($(".content ul li")[4]).fadeIn(300);
            }, 300);
        }, 700);
    }, 500);
}





function anim_ending_desc() {
    
    $(".content ul li").css({
        "left": "0px",
    });
    $(".Description-Left").height('100vh');
    $(".titles").css({
        "left": "0px",
    });
    setTimeout(function () {
        $(".Description-Right .content p").css({
            "top": "0px",
        });
        setTimeout(function () {
            setTimeout(function () {
                $($(".content ul li")[0]).fadeIn(300);
            }, 0);
            setTimeout(function () {
                $($(".content ul li")[1]).fadeIn(300);
            }, 100);
            setTimeout(function () {
                $($(".content ul li")[2]).fadeIn(300);
            }, 200);
            setTimeout(function () {
                $($(".content ul li")[3]).fadeIn(300);
            }, 300);
            setTimeout(function () {
                $($(".content ul li")[4]).fadeIn(300);
            }, 300);
        }, 700);
    }, 500);
}





function updateCover(k,kp,type){

    if(type=="onleave" && kp == 3 && k == 4){
        
       $(".cmp_Cover .buttons ").fadeOut(0,function(){
          $(".cmp_Cover .wrapper").removeClass("padded");  
        });
    }
    
    
    if(type=="onleave" && kp == 4 && k == 3){
        
        
        $(".cmp_Cover .buttons ").fadeOut(0,function(){
          $(".cmp_Cover .wrapper").removeClass("padded");  
        });


    }
    
       if(type=="onload" && k == 4){
        
        $(".cmp_Cover .wrapper").addClass("padded");
        $(".cmp_Cover .buttons ").fadeIn();
    }
    
}