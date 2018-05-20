<?php 

function ob_html_compress($buf){
    return preg_replace(array('/<!--(.*)-->/Uis',"/[[:blank:]]+/"),array('',' '),str_replace(array("\n","\r","\t"),'',$buf));
}

ob_start("ob_html_compress");

?>

<?php require('backend/database/database_models.php');?>
<?php require('backend/database/database_connection.php');?>
<?php require('backend/database/database_simulatedb.php');?>
