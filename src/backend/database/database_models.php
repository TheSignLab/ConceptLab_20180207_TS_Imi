<?php 

class ProjectColor{
    private $color_code;
    private $color_r;
    private $color_g;
    private $color_b;
}

class Project{
    
    private $id;
    private $route;
    
    private $colors;
    
    private $title;
    private $keywords;
    private $description;
    
    private $info_title;
    private $info_description;
          
}

// Colors //

$color_white = new ProjectColor();
$color_white->$color_code = "#ffffff";
$color_white->$color_r = 255;
$color_white->$color_g = 255;
$color_white->$color_b = 255;

$color_black = new ProjectColor();
$color_black->$color_code = "#000000";
$color_black->$color_r = 0;
$color_black->$color_g = 0;
$color_black->$color_b = 0;

$color_blue = new ProjectColor();
$color_blue->$color_code = "#00A7D6";
$color_blue->$color_r = 0;
$color_blue->$color_g = 167;
$color_blue->$color_b = 214;

// Projects //
$projects = array();

$_project = new Project();
$_project-> 0;
$_project-> "p0_santimaye";
$_project-> array($color_white, $color_black, $color_blue);
$_project-> "Santimaye";
$_project-> array("Editorial","Motion Graphics","Illustración"," Dirección de Arte","Fotografía");
$_project-> "La creación de una identidad que representa la personalidad de un youtuber. Una abstracción que refleja felicidad, pasión y alegría.";
$_project-> "la <strong>diversión</strong> 2.0";
$_project-> "<p>Convertimos a una persona en una marca, comprendiendo todos los valores que definen su personalidad.</p> 
<p>El diseño de marca contiene el lettering de su firma, con trazos suaves y fluidos. Dimos vida a sus elementos de comunicación, animaciones, emojis, pensando en su adaptación al medio digital.</p><p>Los diseños editoriales, cuadernos y papelería, integran todos los mensajes que Santimaye quiere compartir con sus seguidores. </p>";



$projects[] = $_project;




?>