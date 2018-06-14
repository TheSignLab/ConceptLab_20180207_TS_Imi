<?php 

class ProjectColor{
    public $color_code;
    public $color_r;
    public $color_g;
    public $color_b;
}

class Project{
    
    public $id;
    public $route;
    
    public $colors;
    
    public $title;
    public $keywords;
    public $description;
    
    public $info_title;
    public $info_description;
          
}

function render_conceptLab_project($x){
    
}
function render_creativeLab_project($x){
    
}

?>


<?php
     
    // Model for "Business Categories"!

    class BusinessCategory{
         public $name;
         public $title;
         public $subtitle;
         public $description;
         public $keywords;
         public $imgPath;
        
        function getName(){
            return $this->$name;
        }

        function getTitle(){
            return $this->$title;
        }
        
        function getSubtitle(){
            return $this->$subtitle;
        }
        
        function getDescription(){
            return $this->$description;
        }
        
        function getKeywords(){
            return $this->$keywords;
        }
        
        function getImgPath(){
            return $this->$imgPath;
        }
        
    }

?>