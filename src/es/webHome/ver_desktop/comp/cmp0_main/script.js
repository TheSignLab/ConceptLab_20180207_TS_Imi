$(document).ready(function () {
    $('main').fullpage({
        sectionSelector: 'section',
        anchors: ['VideoManifiesto', 'Categorias', 'Equipo', 'Footer'],
        onLeave: function(index, nextIndex, direction){
            updateNavStyle(nextIndex)
        }
    });
});
