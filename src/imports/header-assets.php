<style>
    @font-face {
        font-family: 'font-bold';
        font-style: normal;
        font-weight: 100;
        font-display: auto;
        src: local('font-bold'),
        url("../fonts/font-bold.woff") format('woff');
    }

    @font-face {
        font-family: 'font-light';
        font-style: normal;
        font-weight: 100;
        font-display: auto;
        src: local('font-bold'),
        url("../fonts/font-light.woff") format('woff');
    }

    body,
    html {
        width: 100%;
        width: 100vw;
        height: 100%;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        margin: 0px;
        padding: 0px;
    }
    h1,h2,h3,h4,h5,h6{
        padding: 0px;
        margin: 0px;
    }
   
    route {
        z-index: 0;
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: auto;
    }

    route[active] {
        z-index: 1;
    }

</style>
