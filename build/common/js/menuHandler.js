$(document).ready(function () {



    var meMenu = $("menu");
    var meMenu_btnHome = $("menu item[name*='home']");
    var meMenu_btnProjects = $("menu item[name*='projects']");
    var meMenu_btnTeam = $("menu item[name*='team']");
    var meMenu_btnManifesto = $("menu item[name*='manifesto']");


    if (window.location.hash) {
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - $("nav").height() + 2
            }, 1000);
        }, 2000)
    }


    $("main").click(function (e) {
        if (e.target.tagName !== "menu") {

            $("menu").removeClass("active")
            e.stopPropagation();
        }

    })

    $("nav nav-section").click(function () {

        meMenu.addClass("active");
    })

    $("menu menu-button").click(function () {

        meMenu.removeClass("active");
    })





    // ---- SideMenu Buttons Handlers --- //
    meMenu_btnHome.on('click', function () {
        meMenu.removeClass("active");
        window.location.href = 'w1_home.html';
    })

    meMenu_btnProjects.on('click', function () {
        meMenu.removeClass("active");
        window.location.href = 'w2_creative.html';
    })

    meMenu_btnTeam.on('click', function () {
        meMenu.removeClass("active");
        if (window.location.hash == "#team") {
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $('#team').offset().top
                }, 2000);
            }, 600)
        } else {
            window.location.href = 'w1_home.html#team'
        }
    })
    // ------------------------------ --- //

    meMenu_btnManifesto.on('click', function () {

        var video = document.querySelector("video");
        if (true) {
            var source = document.createElement('source');

            source.setAttribute('src', '../common/videos/manifesto.mp4');

            video.appendChild(source);
            video.load();
            video.play();
        } else {
            video.play();
        }



        $("modal-video").removeClass("hidden");
        meMenu.removeClass("active");
    })




    $("nav-title").click(function () {
        window.location.href = 'w1_home.html';
    });
        
    
        $("menu-button").mouseenter(function(){
            var classColor = "c0";
            var base = "../common/img/buttons_icons/sidemenu/";
            if($("menu-button").hasClass("c0")){
                classColor = "c0";
            }
            if($("menu-button").hasClass("c1")){
                classColor = "c1";
            }
            if($("menu-button").hasClass("c2")){
                classColor = "c2";
            }
            if($("menu-button").hasClass("c3")){
                classColor = "c3";
            }
            if($("menu-button").hasClass("c4")){
                classColor = "c4";
            }
            if($("menu-button").hasClass("c5")){
                classColor = "c5";
            }
            
            $("menu-button img").attr('src', base + "x_" + classColor +".png");  
            
        })
        $("menu-button").mouseleave(function(){
            var base = "../common/img/buttons_icons/sidemenu/";
           $("menu-button img").attr('src', base + "x.png");   
        })
    
    
    
    
    
    
    
    $("nav-section").mouseenter(function(){
            var classColor = "c0";
            var base = "../common/img/buttons_icons/nav/";
            if($("dots").hasClass("c0")){
                classColor = "c0";
            }
            if($("dots").hasClass("c1")){
                classColor = "c1";
            }
            if($("dots").hasClass("c2")){
                classColor = "c2";
            }
            if($("dots").hasClass("c3")){
                classColor = "c3";
            }
            if($("dots").hasClass("c4")){
                classColor = "c4";
            }
            if($("dots").hasClass("c5")){
                classColor = "c5";
            }
            
             $("dots").css("background-image", "url(" + base + "dots_" + classColor +".png)");  
            
        });
    
        $("nav-section").mouseleave(function(){
            var base = "../common/img/buttons_icons/nav/";
            
            if($("nav").hasClass("nav-dark")){
                classColor = "_black";
            }else{
                classColor = "";
            }
            
            $("dots").css("background-image", "url(" + base + "dots"  + classColor +".png)");    
        })
    
    
    
    

    })


