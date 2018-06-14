<?php

    // Colors //

    $color_white = new ProjectColor();
    $color_white->color_code = "#ffffff";
    $color_white->color_r = 255;
    $color_white->color_g = 255;
    $color_white->color_b = 255;

    $color_black = new ProjectColor();
    $color_black->color_code = "#000000";
    $color_black->color_r = 0;
    $color_black->color_g = 0;
    $color_black->color_b = 0;

    $color_blue = new ProjectColor();
    $color_blue->color_code = "#00A7D6";
    $color_blue->color_r = 0;
    $color_blue->color_g = 167;
    $color_blue->color_b = 214;



    // Projects //


    $_project = new Project();
    $_project->id =  0;
    $_project->route = "creativeLab/santimaye";
    $_project->colors = array($color_white, $color_black, $color_blue);
    $_project->title = "Santimaye";
    $_project->keywords = array("Editorial","Motion Graphics","Illustración"," Dirección de Arte","Fotografía");
    $_project->description= "La creación de una identidad que representa la personalidad de un youtuber. Una abstracción que refleja felicidad, pasión y alegría.";
    $_project->info_title = "la <strong>diversión</strong> 2.0"; 
    $_project->info_description= "<p>Convertimos a una persona en una marca, comprendiendo todos los valores que definen su personalidad.</p> 
    <p>El diseño de marca contiene el lettering de su firma, con trazos suaves y fluidos. Dimos vida a sus elementos de comunicación, animaciones, emojis, pensando en su adaptación al medio digital.</p><p>Los diseños editoriales, cuadernos y papelería, integran todos los mensajes que Santimaye quiere compartir con sus seguidores. </p>";

    $creativeLab_ProjectList = array();
    $conceptLab_ProjectList = array();
    $creativeLab_ProjectList[] = $_project;
?>








    <?php

    // Colors
        $colors = array('Green','Blue','Purple','Pink','Orange','Yellow');

    // Categories 
        $Categories = array();

        $_Category = new BusinessCategory();
        $_Category->id = "0";
        $_Category->name = "Branding";
        $_Category->title = "<span class='f-light'>BRANDING</span> <span class='f-bold'>ESTRATÉGICO</span>";
        $_Category->subtitle = "El encanto detrás de una gran marca";
        $_Category->description = "Diseñamos marcas que enamoran a los consumidores, con elementos y valores que definen una manera única de percibir el mundo";
        $_Category->keywords = array(
            "Naming de marcas",
            "Naming de productos",
            "Logotipo Isotipo Imagotipo Isologo",
            "Filosofia empresarial",
            "Mantra de marca",
            "Manifiesto de marca",
            "Papelería Corporativa",
            "Graficas Complementarias",
            "Videologo",
            "Manual de Marca"
        );
        $_Category->imgPath = "C0_Branding";
        $Categories[] = $_Category;


        $_Category = new BusinessCategory();
        $_Category->id = "0";
        $_Category->name = "Branding";
        $_Category->title = "<span class='f-light'>BRANDING</span> </span class='f-bold'>ESTRATÉGICO</span>";
        $_Category->subtitle = "El encanto detrás de una gran marca";
        $_Category->description = "Diseñamos marcas que enamoran a los consumidores, con elementos y valores que definen una manera única de percibir el mundo";
        $_Category->keywords = array(
            "Naming de marcas",
            "Naming de productos",
            "Logotipo Isotipo Imagotipo Isologo",
            "Filosofia empresarial",
            "Mantra de marca",
            "Manifiesto de marca",
            "Papelería Corporativa",
            "Graficas Complementarias",
            "Videologo",
            "Manual de Marca"
        );
        $_Category->imgPath = "C0_Branding";
        $Categories[] = $_Category;
        


?>
