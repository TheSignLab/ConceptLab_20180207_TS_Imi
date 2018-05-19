<!-- --------------  PHP Include settings.php  -------------------- -->
<?php require('settings.php') ?>
<!-- -------------- /PHP Include settings.php  -------------------- -->

<!doctype html>
<html lang="es">

<head>
    <!-- --------------  HTML Head Meta Tag  -------------------- -->
    <?php require('imports/meta-tags.php') ?>
    <!-- --------------  / HTML Head Meta Tag  ------------------ -->

    <!-- --------------  HTML Head Meta Tag  -------------------- -->
    <?php require('imports/header-assets.html') ?>
    <!-- --------------  / HTML Head Meta Tag  ------------------ -->

    <!-- ---------------  Google Analytics ---------------------- -->
    <?php require('imports/analytics.html') ?>
    <!-- --------------  / HTML Head Meta Tag  ------------------ -->
</head>

<body>

    <loader>
        <?php require('views/loader.html'); ?>
    </loader>

    <nav>
        <?php require('views/nav.html'); ?>
    </nav>

    <routes>
        <route name="home" active>
            <?php require('views/w0_home/main.php'); ?>
        </route>
        
        <route name="portfolio">
            <?php require('views/w1_m/main.php'); ?>
        </route>
        <?php renderProjectsRoutes();?>
        
        <route name="about">

        </route>
        <route name="activities">

        </route>
        <route name="contact">

        </route>
    </routes>


    <!-- ---------------  Footer Assets (CSS/JS)  -------------------- -->
    <?php require('imports/footer-assets.html') ?>
    <!-- --------------- /Footer Assets (CSS/JS)  -------------------- -->

</body>

</html>
