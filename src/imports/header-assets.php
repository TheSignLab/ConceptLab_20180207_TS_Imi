

<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./js/_sw.js')
            .then(function() {
                console.log('Service Worker Registered');
            });
    }

</script>
