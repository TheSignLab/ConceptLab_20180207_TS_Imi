<?php require('settings.php') ?>
<!doctype html>

<html lang="es">

<head>
    <!-- --------------  HTML Head Meta Tag  -------------------- -->
    <?php require('imports/meta-tags.php') ?>
    <!-- --------------  / HTML Head Meta Tag  ------------------ -->

    <!-- --------------  HTML Head Meta Tag  -------------------- -->
    <?php require('imports/header-assets.php') ?>
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
        <route name="creativeLab">
            <?php require('views/w1_creative/main.php'); ?>
        </route>
        <?php 
            foreach ($creativeLab_ProjectList as $project) {
                echo '<route name="'.$project->route.'">';
                    render_creativeLab_project($project);
                echo '</route>';
            }
        ?>
        <route name="conceptLab">
            <?php require('views/w2_concept/main.php'); ?>
        </route>
        <?php 
            foreach ($conceptLab_ProjectList as $project) {
                echo '<route name="'.$project->route.'">';
                    render_conceptLab_project($project);
                echo '</route>';
            }
        ?>
        <route name="blog">
            <?php require('views/w3_blog/main.php'); ?>
        </route>
        <route name="academy">
            <?php require('views/w4_academy/main.php'); ?>
        </route>
        <route name="ventures">
            <?php require('views/w5_ventures/main.php'); ?>
        </route>
        <route name="team">
            <?php require('views/w6_team/main.php'); ?>
        </route>
        
        <route name="manifesto">
            <?php require('views/w7_manifesto/main.php'); ?>
        </route>
            <route name="contact">
            <?php require('views/w8_contact/main.php'); ?>
        </route>     

        
        <route name="mobile-rotate">
            <?php require('views/mobile-rotate.html'); ?>
        </route>
        <route name="login">
            <?php require('views/login/main.php'); ?>
        </route>
        <route name="admin">
            <?php require('views/admin/main.php'); ?>
        </route>


    </routes>


    <!-- ---------------  Footer Assets (CSS/JS)  -------------------- -->
    <?php require('imports/footer-assets.php') ?>
    <!-- --------------- /Footer Assets (CSS/JS)  -------------------- -->
    
    <!-- ---------------  Google Analytics ---------------------- -->
    <?php require('imports/analytics.php') ?>
    <!-- --------------  / HTML Head Meta Tag  ------------------ -->

</body>

</html>

<?php ob_end_flush();?>
