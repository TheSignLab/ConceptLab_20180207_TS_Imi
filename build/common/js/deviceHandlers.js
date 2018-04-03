var md = new MobileDetect(window.navigator.userAgent);
var isPhone = md.phone();
var isTablet = md.tablet();
var isDesktop = !isPhone && !isTablet;
var userDevice,userClient;
if (isPhone) {
    userDevice = "Phone";
}
if (isTablet) {
    userDevice = "Tablet";
}
if (isDesktop) {
    userDevice = "Desktop/Laptop";
}
if(md.userAgent() != "Safari"){
    userClient = "NoSafari";
}else{
    userClient = "Safari";
}


function getClientType(){
    return getCookie("ts-client");
}