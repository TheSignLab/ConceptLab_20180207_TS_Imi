var _router;

class meRouter {

    //On Init Object
    constructor(appName) {
        this.appName = appName;
        this.routeName = "";
    }

    //Load JSON Config File
    setConfig(settings) {
        var objSettings = null;
        if (!settings) {
            objSettings = require('./config.json');
        } else {
            objSettings = settings;
        }
        this.config = objSettings;
    }

    // get and set Route methods
    getRoute() {
        return this.routeName;
    }
    setRoute(routeName) {

        // Set RouteName
        this.routeName = routeName;

        // Update Watchers

        // Update History/Navigation
        this.setHistoryRoute(routeName);

        //Save this route on Cookies
        this.setRouteOnCookie(routeName);

        // Set MetaTags 
        this.setTitle(routeName);
        this.setDescription(routeName);
        this.setKeywords(routeName);
        this.setOpenGraph(routeName);
        this.setTwitterCard(routeName);

        //FullPage.js

        var Options = {
            
            //responsive Width
            responsiveWidth: 650,
            
            //Custom selectors
            sectionSelector: 'section',
            slideSelector: 'slide',

            lazyLoading: true,

        }
        try {
            $.fn.fullpage.destroy('all');
            $("route[name='" + routeName + "']").fullpage(Options);
        } catch (e) {
            $("route[name='" + routeName + "']").fullpage(Options);
        }


        // Update Google Analytics o Google Tag Manager
        gtag('config', 'UA-119124798-1', {
            'page_path': '/' + routeName
        });

    }

    // Meta Tags Methods
    setTitle(routeName) {

    }
    setDescription(routeName) {

    }
    setKeywords(routeName) {

    }
    setOpenGraph(routeName) {

    }
    setTwitterCard(routeName) {

    }

    // Cookies
    setRouteOnCookie(routeName) {
        setCookie("_route", routeName, 0.05);
    }
    setRouteByCookie() {
        this.setRoute(getCookie("_route"));
    }

    //History Api 
    setHistoryRoute(routeName) {
        window.history.pushState(null, null, routeName);
    }




}







$(document).ready(function () {
    // Run Routing
    let _router = new meRouter("TheSignLab");
    _router.setRoute("home");

    // Hide Loader Element

    document.querySelector("loader").style.display = "none";
    document.querySelector("loader picture").style.display = "none";




});
