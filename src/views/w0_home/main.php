<!-- ----------------------------------------------------------------- -->
<!-- ----------------- Section :: Categorias TheSign ----------------- -->
<!-- ----------------------------------------------------------------- -->
<section name="categories">

    <?php 
    
        $template = $twig->load('w0_home/category.html');
        $data = array('categories' => $Categories, 'colors' => $colors);
        echo $template->render($data);
    
    ?>

</section>
<!-- ----------------------------------------------------------------- -->









<section>

    <h1>HOME S2</h1>

</section>
