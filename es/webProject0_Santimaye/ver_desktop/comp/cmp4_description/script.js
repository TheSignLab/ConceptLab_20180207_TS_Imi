function updateDescription(k, type) {



    if (k == 3 && type == "on") {

        anim_intro_desc();

    } else {

        anim_ending_desc();
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
