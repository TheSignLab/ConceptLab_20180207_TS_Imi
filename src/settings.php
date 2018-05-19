<?php require('backend/database/database_modeles.php');?>





<?php 

$nProjects = 10;

function renderProjectsRoutes(){
    for ($k = 0; $k <= $nProjects; $k++) {
        echo '<route name="about">';
        echo '</route>';
    }   
}
?>
