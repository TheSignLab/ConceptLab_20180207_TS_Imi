var _router;

class spaRouter {

    //On Init Object
    constructor(appName) {
        this.appName = appName;
        this.routeName = "";
    }
    
    //Load JSON Config File
    setConfig(settings){
        var objSettings = null;
        if(!settings){
            objSettings = require('./config.json');
        }else{
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
    setRouteOnCookie(routeName){
        setCookie("_route", routeName, 0.05);
    }
    setRouteByCookie(){
        this.setRoute(getCookie("_route"));
    }
    
    //History Api 
    setHistoryRoute(routeName){
        window.history.pushState(null,null, routeName);
    }
    



}







$(document).ready(function () {
    let _router = new spaRouter("TheSignLab");
})
