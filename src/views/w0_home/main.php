<!-- ----------------------------------------------------------------- -->
<!-- ----------------- Section :: Categorias TheSign ----------------- -->
<!-- ----------------------------------------------------------------- -->
<section name="categories">



    <slide class="category" name="branding">

        <h1 class="title">
            <span class="f-light">BRANDING</span>
            <span class="f-bold">ESTRATÉGICO</span>
        </h1>

        <h2 class="subtitle">
            <span class="f-light">EL </span>
            <span class="f-bold">ENCANTO</span>
            <span class="f-bold">DETRAS DE UNA MARCA</span>
        </h2>

        <p class="description">
            Diseñamos marcas que enamoran a los consumidores, con elementos y valores que definen una manera única de percibir el mundo
        </p>

        <ul class="keywords">
            <li class="keyword">Naming de marcas</li>
            <li class="keyword">Logotipo</li>
            <li class="keyword">Isotipo</li>
            <li class="keyword">Imagotipo</li>
            <li class="keyword">Isologo</li>
            <li class="keyword">Filosofia empresarial</li>
            <li class="keyword">Manifiesto de marca</li>
            <li class="keyword">Papelería Corporativa</li>
            <li class="keyword">Graficas Complementarias</li>
            <li class="keyword">Videologo</li>
            <li class="keyword">Manual de Marca</li>
        </ul>

        <button type="button" class="button"> 
            <span class="f-light">VER</span>
            <span class="f-bold">MAS</span>
        </button>

        <div class="image" class="bg-color">
            <?php 
                $folder = "C0_Branding/" ;
                foreach ($colors as $color) {
                    $alt = "Branding Estrategico. Domino, Render Colores";
                    $class = "img-color ".$color;
                    $base = "http://localhost/thesignlab-local/img/Categories/";
                    $path = $base.$folder ;

                    echo "<img ";
                    echo 'alt="'.$alt.'" ';
                    echo 'class="'.$class.'" ';
                    echo 'src="'.$path.'/Low/'.$color.'.jpg" ';
                    echo 'data-src="'.$path.'/High/'.$color.'.jpg" ';
                    echo "width = '100%'>";
                }
            ?>
        </div>

    </slide>



</section>
<!-- ----------------------------------------------------------------- -->









<section>

    <h1>HOME S2</h1>

</section>
