<?php
/*
if(empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "off"){
    $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $redirect);
    exit();
}
*/
?>
  







<?php 
    function ob_html_compress($buf){
        return preg_replace(array('/<!--(.*)-->/Uis',"/[[:blank:]]+/"),array('',' '),str_replace(array("\n","\r","\t"),'',$buf));
    }

    ob_start("ob_html_compress");
?>











<?php 

require_once 'backend/vendor/autoload.php'; 

require('backend/database/models.php');
require('backend/database/connection.php');


?>




<?php 
    
    $loader = new Twig_Loader_Filesystem('views');
    $twig = new Twig_Environment($loader);
?>
