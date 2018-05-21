<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous">


</script>

<link rel="stylesheet" type="text/css" href="../lib/fullpage/jquery.fullPage.min.css" />
<script type="text/javascript" src="../lib/fullpage/jquery.fullPage.min.js"></script>


<script defer src="../js/_debugger.js"></script>
<script defer src="../js/_cookies.js"></script>
<script defer src="../js/_router.js"></script>
<script defer src="../js/nav.js"></script>





<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./js/_sw.js')
            .then(function() {
                if (me.debugger.serviceWorkers) {
                    me.debugger.message("ServiceWorker", "footer-assets.php", "Service Worker Registered");
                }
            });
    }
  

</script>
