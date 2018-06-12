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

/*
<VirtualHost *:443>
     DocumentRoot "C:\Users\walla\Documents\GitHub\ConceptLab_20180207_TS_Imi\src"
     ServerName dev.thesign
     ServerAlias *.dev.thesign
     SSLEngine on
     SSLCertificateFile "crt/dev.thesign/server.crt"
     SSLCertificateKeyFile "crt/dev.thesign/server.key"
     <Directory "C:\Users\walla\Documents\GitHub\ConceptLab_20180207_TS_Imi\src">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
*/
?>

<?php require('backend/database/database_models.php');?>
<?php require('backend/database/database_connection.php');?>
<?php require('backend/database/database_simulatedb.php');?>
