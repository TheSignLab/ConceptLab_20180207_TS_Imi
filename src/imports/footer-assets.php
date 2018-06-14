<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">


</script>

<link  rel="stylesheet" type="text/css"  href="lib/jquery.fullpage.min.css" />
<script defer src="lib/jquery.fullpage.min.js"></script>


<script defer src="js/_debugger.js"></script>
<script defer src="js/_cookies.js"></script>
<script defer src="js/_router.js"></script>
<script defer src="js/nav.js"></script>





<script>
    
    /* ------------------------------------------------------------------  */
    /* Console : Welcome ! ----------------------------------------------  */
    /* ------------------------------------------------------------------  */
        console.log("");
        console.log('%c  THES:GN LAB CO  \n \n By Created by : Jorge Luis Mayorga ', 
                    'background: #000; color: #fff;'+
                    'font-size:18px;'+ 
                    'padding: 1em;'+
                    'margin:1em;'+
                    'font-family: sans-serif;');
        console.log("");
    /* ------------------------------------------------------------------  */
    

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./js/_sw.js')
            .then(function(registration) {
                if (me.debugger.serviceWorkers) {
                    me.debugger.message("ServiceWorker", "footer-assets.php", "Service Worker Registered");
                }
            })
            .catch(function(error) {
                console.log('Service worker registration failed, error:', error);
            });
    }



</script>
