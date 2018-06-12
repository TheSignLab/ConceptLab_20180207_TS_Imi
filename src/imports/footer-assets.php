<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">


</script>

<link  rel="stylesheet" type="text/css"  href="lib/jquery.fullpage.min.css" />
<script defer src="lib/jquery.fullpage.min.js"></script>


<script defer src="js/_debugger.js"></script>
<script defer src="js/_cookies.js"></script>
<script defer src="js/_router.js"></script>
<script defer src="js/nav.js"></script>





<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./js/_sw.js')
            .then(function(registration) {
                console.log('Registration successful, scope is:', registration.scope);
                if (me.debugger.serviceWorkers) {
                    me.debugger.message("ServiceWorker", "footer-assets.php", "Service Worker Registered");
                }
            })
            .catch(function(error) {
                console.log('Service worker registration failed, error:', error);
            });
    }



</script>
